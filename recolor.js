// ==========================================
// CART COLOR PREVIEW ENGINE
// Repaints a cart photo in the browser so the color picker can preview any body, seat and canopy color.
// Body panels are found automatically as the dominant saturated hue of the photo; seats and canopy use
// per-photo rules below. Each region keeps its original light and shadow (we shift lightness around the
// region's average instead of flattening it), so the result still looks like a glossy photo.
// ==========================================

// Per-product preview setup. `base` should be a photo whose body is a strongly colored paint (red, blue,
// green) so it separates cleanly from seats, canopy, tires and glass. `seat` / `canopy` are optional:
//   hue: [from, to] degrees, sat: [min, max], light: [min, max], box: [top, bottom] as fractions of the cart's height.
// Tempo 2-seaters share the red Base+ photo: its beige seats and canopy separate cleanly from the paint,
// so all three regions follow the picker (the dark green / black photos can't be repainted reliably).
const TEMPO_TWO_SEAT_PREVIEW = {
    base: 'image/Products/Base +.png',
    seat: { hue: [25, 55], sat: [0.12, 0.8], light: [0.3, 0.95], box: [0.3, 0.7] },
    canopy: { hue: [25, 55], sat: [0.08, 0.8], light: [0.3, 0.97], box: [0, 0.22] }
};

const COLOR_PREVIEW = {
    'golfer-tempo-2-2': {
        base: 'image/Products/Tempo 2+2 - Golf - Red.png',
        seat: { hue: [22, 48], sat: [0.18, 1], light: [0.12, 0.9], box: [0.25, 0.75] },
        canopy: { hue: [0, 360], sat: [0, 0.35], light: [0, 0.55], box: [0, 0.17] }
    },
    'golfer-tempo-2': TEMPO_TWO_SEAT_PREVIEW,
    'lifestyle-tempo-2': TEMPO_TWO_SEAT_PREVIEW,
    'lifestyle-tempo-2-2': { base: 'image/Products/Tempo 2+2 - Family - Sangria Red.png' },
    'transporter-400': { base: 'image/Products/Transporter 4.png' },
    'carryall-500': { base: 'image/Products/CA500.png' }
};

const recolorCache = {};

function loadRecolorBase(src) {
    if (recolorCache[src]) return recolorCache[src];
    recolorCache[src] = new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            // Work at a moderate size so repainting stays instant
            const scale = Math.min(1, 900 / Math.max(img.width, img.height));
            const w = Math.round(img.width * scale);
            const h = Math.round(img.height * scale);
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(img, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h);
            resolve(analyzeRecolorBase(data, w, h));
        };
        img.onerror = reject;
        img.src = src;
    });
    return recolorCache[src];
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return [0, 0, l];
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h;
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    return [h * 60, s, l];
}

function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360 / 360;
    if (s === 0) {
        const v = Math.round(l * 255);
        return [v, v, v];
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const f = t => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };
    return [Math.round(f(h + 1 / 3) * 255), Math.round(f(h) * 255), Math.round(f(h - 1 / 3) * 255)];
}

function hexToHsl(hex) {
    const m = hex.replace('#', '');
    return rgbToHsl(parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16));
}

function hueDistance(a, b) {
    const d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
}

function hueInRange(h, [from, to]) {
    return from <= to ? h >= from && h <= to : h >= from || h <= to;
}

// Precomputes HSL per pixel, the cart's bounding box, and the dominant body hue
function analyzeRecolorBase(imageData, w, h) {
    const px = imageData.data;
    const n = w * h;
    const hue = new Float32Array(n);
    const sat = new Float32Array(n);
    const light = new Float32Array(n);
    let top = h, bottom = 0;
    const hist = new Float32Array(36);

    for (let i = 0; i < n; i++) {
        const a = px[i * 4 + 3];
        const [hh, ss, ll] = rgbToHsl(px[i * 4], px[i * 4 + 1], px[i * 4 + 2]);
        hue[i] = hh; sat[i] = ss; light[i] = ll;
        if (a > 20) {
            const y = Math.floor(i / w);
            if (y < top) top = y;
            if (y > bottom) bottom = y;
            if (ss > 0.35 && ll > 0.12 && ll < 0.85) hist[Math.floor(hh / 10) % 36] += ss;
        }
    }

    // Dominant saturated hue = the body paint (smoothed over neighbouring 10° bins)
    let best = 0, bestScore = -1;
    for (let b = 0; b < 36; b++) {
        const score = hist[(b + 35) % 36] + hist[b] + hist[(b + 1) % 36];
        if (score > bestScore) { bestScore = score; best = b; }
    }

    return { imageData, w, h, hue, sat, light, top, bottom, bodyHue: best * 10 + 5 };
}

// Builds a mask for one region and returns its pixel indexes and average lightness
function collectRegion(base, test) {
    const idx = [];
    let sumL = 0;
    const alpha = base.imageData.data;
    const height = Math.max(1, base.bottom - base.top);
    for (let i = 0; i < base.w * base.h; i++) {
        if (alpha[i * 4 + 3] < 20) continue;
        const yFrac = (Math.floor(i / base.w) - base.top) / height;
        if (test(base.hue[i], base.sat[i], base.light[i], yFrac)) {
            idx.push(i);
            sumL += base.light[i];
        }
    }
    return { idx, meanL: idx.length ? sumL / idx.length : 0.5 };
}

function regionRule(rule) {
    return (hh, ss, ll, y) =>
        hueInRange(hh, rule.hue) && ss >= rule.sat[0] && ss <= rule.sat[1] &&
        ll >= rule.light[0] && ll <= rule.light[1] && y >= rule.box[0] && y <= rule.box[1];
}

// Paints one region toward a target color, keeping the photo's shading
function paintRegion(out, base, region, target, xGradient) {
    const contrast = 0.85;
    for (const i of region.idx) {
        let th = target[0], ts = target[1], tl = target[2];
        if (xGradient) {
            // Multi-tone paints (chameleon, 3D) shift color across the body
            const x = (i % base.w) / base.w;
            const stops = xGradient;
            const pos = Math.min(stops.length - 1.001, x * (stops.length - 1));
            const a = stops[Math.floor(pos)], b = stops[Math.floor(pos) + 1], t = pos - Math.floor(pos);
            th = a[0] + ((((b[0] - a[0]) % 360) + 540) % 360 - 180) * t;
            ts = a[1] + (b[1] - a[1]) * t;
            tl = a[2] + (b[2] - a[2]) * t;
        }
        const l = Math.max(0.02, Math.min(0.98, tl + (base.light[i] - region.meanL) * contrast));
        const [r, g, b] = hslToRgb(th, ts, l);
        out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b;
    }
}

// Swatch value -> { hsl } or { gradient: [hsl, ...] } (gradients come from the custom-paint swatches)
function parseSwatch(value) {
    if (!value) return null;
    if (value.startsWith('linear-gradient')) {
        const stops = (value.match(/#[0-9a-fA-F]{6}/g) || []).map(hexToHsl);
        return stops.length ? { hsl: stops[0], gradient: stops } : null;
    }
    return { hsl: hexToHsl(value) };
}

const recolorRegionCache = {};

// Returns a data URL of the cart repainted with the given body / seat / canopy swatch values
async function renderCartPreview(slug, choice) {
    const cfg = COLOR_PREVIEW[slug];
    if (!cfg) return null;
    const base = await loadRecolorBase(cfg.base);

    if (!recolorRegionCache[slug]) {
        const bodyHue = base.bodyHue;
        // Body = pixels close to the dominant paint hue. A wider band would swallow tan seats on red carts.
        // Deep shadows on the paint are dull, so dark pixels count as body at lower saturation; neutral blacks
        // (frame, tires, saturation under 0.1) are still left alone.
        const isBody = (hh, ss, ll) => hueDistance(hh, bodyHue) <= 22 && ll >= 0.02 && ll <= 0.9 &&
            (ss >= 0.28 || (ss >= 0.1 && ll < 0.3));
        // Seats / canopy never claim pixels near the paint hue (the paint's brownish shadows otherwise
        // pick up the seat color and show as specks on the panels)
        const notBody = rule => {
            const test = regionRule(rule);
            return (hh, ss, ll, y) => test(hh, ss, ll, y) && !(ss >= 0.2 && hueDistance(hh, bodyHue) <= 24);
        };
        recolorRegionCache[slug] = {
            body: collectRegion(base, isBody),
            seat: cfg.seat ? collectRegion(base, notBody(cfg.seat)) : null,
            canopy: cfg.canopy ? collectRegion(base, notBody(cfg.canopy)) : null
        };
    }
    const regions = recolorRegionCache[slug];

    const out = new Uint8ClampedArray(base.imageData.data);
    // Canopy and seats first so the body (the most important region) wins any overlap
    const canopy = parseSwatch(choice.canopy);
    if (canopy && regions.canopy) paintRegion(out, base, regions.canopy, canopy.hsl, null);
    const seat = parseSwatch(choice.seat);
    if (seat && regions.seat) paintRegion(out, base, regions.seat, seat.hsl, null);
    const body = parseSwatch(choice.body);
    if (body) paintRegion(out, base, regions.body, body.hsl, body.gradient && body.gradient.length > 1 ? body.gradient : null);

    const canvas = document.createElement('canvas');
    canvas.width = base.w;
    canvas.height = base.h;
    canvas.getContext('2d').putImageData(new ImageData(out, base.w, base.h), 0, 0);
    return canvas.toDataURL('image/png');
}
