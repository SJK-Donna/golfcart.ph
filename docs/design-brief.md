# Golfcarts.ph redesign: audit and design brief

Stage 1 of the redesign. Nothing in the site has changed yet; this is for approval.

## 1. Audit: what the site does today

**What makes it look AI-made**

| Pattern | Count (app.js + index.html) |
|---|---|
| Rounded corners: `rounded-xl` / `-2xl` / `-3xl` / `-full` | 63 / 23 / 32 / 54 |
| Shadows: `shadow-lg` / `-xl` / `-2xl` | 24 / 14 / 10 |
| `backdrop-blur` glass panels | 9 |
| Decorative gradients | 12 |
| Default Tailwind slate grays (`text-slate-*`, `bg-slate-*`) | 367 |
| Lucide icons, mostly decorative | 78 |
| ALL-CAPS tracked "eyebrow" labels | 33 |
| Shimmer buttons / mouse-glow cards | 24 / 19 |
| Fade-up reveal on nearly every section | 27 |
| Font | Inter, via Google Fonts `@import` |

**Technical**

- **No URLs.** Every page lives at `/`. There is no browser history, so the back button leaves the site and no page can be linked or shared. This is the root of the SEO problem.
- **Crawlers see an empty page.** `<main>` holds only a comment until JavaScript runs.
- **Meta tags:** one global title and description; no Open Graph tags; no structured data.
- **Toast text.** "Action completed successfully!" is in the initial HTML.
- **Placeholder social links:** `https://tiktok.com`, `facebook.com`, `instagram.com`, `youtube.com`.
- **Heavy images:** `/image` is 53 MB. The largest files are 2–3.2 MB PNG/JPGs (`image/6.png` 3.2 MB, `image/4.png` 2.8 MB, `hero-5.png` 2.5 MB). Product cutouts are ~800 KB PNGs. Only 4 of 152 images are WebP.
- **Runtime CDNs:** Tailwind (CDN script, not meant for production), Lucide (`@latest`, unpinned), Font Awesome (only used for 4 social icons).

**Worth keeping**

- the configurator and recolor engine
- the measured seat and canopy colors
- the product data
- the quote and fleet forms
- the short headline voice ("Golfer. Scratch. Pro.")
- the real photography and the two videos

## 2. Positioning note (please confirm)

The brief describes Golfcarts.ph as "the premier distributor and customizer…". Last week a stakeholder asked for **"Low speed electric vehicles for private road use, that's our lane"**, and the site copy was changed to that. I'll keep the low-speed / private-roads positioning, and avoid "premier", which is filler, unless you say otherwise.

## 3. Type: two options

Both options drop Inter, and both are free and self-hosted (no Google Fonts request at runtime).

**Option A: Engineered** (my recommendation)
- **Display:** *Archivo*, expanded width (≈118%), weight 700. Wide letters with a vehicle-badge feel; they read like a spec plate. Model names set large in it look like a chassis badge.
- **Text:** *Instrument Sans*, 400/500. Calm and slightly narrow, which suits spec tables and long copy.
- **Reference feel:** Polestar, Porsche product pages.

**Option B: Quiet luxury**
- **Display:** *Newsreader Display*, roman (never italic), weight 500. A refined serif for headlines, with an editorial / hospitality feel suited to resorts and estates.
- **Text:** *Instrument Sans*, 400/500.
- **Reference feel:** Range Rover lifestyle pages, Aman resorts.

**Type scale (both options):**
- headline sizes: 13 / 15 / 17 / 20 / 24 / 32 / 44 / 64 / 88 / 120 px (fluid with `clamp()`)
- headlines: tracking −0.02 to −0.035em, line-height 0.95–1.05
- body: 17 px, line-height 1.6, measure 60–72 characters

## 4. Palette

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--paper` | `#F6F6F2` | page background: a stone off-white, deliberately not the cream `#F4F1EA` AI tell | – |
| `--stone` | `#ECECE6` | bands, studio backdrops behind product shots | – |
| `--line` | `#D6D6CE` | 1 px rules and dividers | – |
| `--mute` | `#6B6C64` | secondary text, on paper only | 4.90 on paper |
| `--ink-2` | `#3E403A` | body text, and any text on stone | 9.69 on paper |
| `--ink` | `#151714` | headlines, dark sections | 16.64 on paper |
| `--green` | `#749E35` | the single accent: primary button fill, active states, small marks | ink text on it 5.74 |
| `--green-text` | `#4F6E22` | green when used as text or links | 5.41 on paper |

- Never pure black or white.
- The neutrals carry a faint warm-olive cast, so they sit with fairway photography and the brand green.

## 5. Shape, spacing, depth

- **Corner radius:** 0 on images, product tiles, cards and sections; 2 px on buttons, inputs and tags. Circles only for functional color swatches. No pills.
- **Depth:** whitespace, 1 px rules (`--line`), and photography. No shadows, no blur, no decorative gradients. The only gradient allowed is a functional scrim to keep text readable over video.
- **Spacing:**
  - 4 px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160
  - sections: 96 px on mobile, 128–160 px on desktop; rhythm varies on purpose, not equal everywhere
- **Grid:** 12 columns, 1360 px max width; gutters 20 / 32 / 48 px.

## 6. Layout direction (homepage)

1. **Hero:** full-bleed `intro_golfcartph.mp4` (muted, autoplay, loop, `playsinline`, poster frame, a still image when reduced motion is on). One headline, one primary action ("Build your cart"). The current banner carousel goes.
2. **The range:** the models as large studio cutouts on stone, model names set huge, one line of specs each. A row of chassis badges, not cards.
3. **Shop by use:** an editorial, asymmetric grid. Golfer gets a large photo, Lifestyle and Resort get offset tiles of different sizes, and Remanufactured gets a text-led strip. Not four identical cards.
4. **Configurator teaser:** one Tempo 2 that repaints live from a few swatches, leading into the full builder.
5. **Lead-acid or lithium:** the comparison you just approved, restyled to the new tokens (rules instead of a shadowed card).
6. **Trust:** client logos in a quiet monochrome row, and two or three real fleet facts (4 branches, 27+ clients). No invented numbers.
7. **Branches:** four addresses with phone numbers and map links, set as a typographic list.
8. **Footer:** small, with real links only.

## 7. Motion

- Easing `cubic-bezier(0.22, 1, 0.36, 1)` everywhere.
- **Reveals:** opacity plus a 16 px rise, 700 ms, once, on major sections only (not every element).
- **Images:** scale to 1.03 on hover over 900 ms, product imagery only.
- **No** shimmer, mouse glow, auto-rotating carousels or bounce.
- **`prefers-reduced-motion`:** no transforms, no video autoplay (the poster shows instead).

## 8. Voice

- Short, declarative headlines in the "Golfer. Scratch. Pro." pattern, with specific nouns over adjectives.
  - Hero: *"Built for private roads."*
  - Range: *"Two seats. Four. Fourteen."*
  - Configurator: *"Your color. Your seat. Your cart."*
- **Button labels say what happens:** "Build your cart", "Get a quote", "Book a service", "Get directions".
- **Banned:** "premier", "seamless", "elevate", "experience", "solutions" used as filler.

## 9. Technical plan (needs approval, as it changes the architecture)

1. **Real URLs:**
   - add `/`, `/models/<slug>/`, `/use/<golfer|lifestyle|resort|remanufactured>/`, `/about/`, `/contact/`, `/branches/`, `/blog/<slug>/`, `/build/`
   - use History API routing, so the back button and sharing work
2. **Pre-rendering:** a small Node build script runs the existing page renderers and writes a real `index.html` for every route. Each page gets its own title, meta description, Open Graph tags and canonical link. The home, contact and branches pages get LocalBusiness JSON-LD for the 4 branches. The configurator still hydrates and runs in the browser.
3. **CSS:**
   - Tailwind moves from the CDN to a build step (Tailwind CLI, the config holding the tokens above) so existing markup keeps working while each page is redesigned.
   - Design tokens live in one `tokens.css`.
   - Once every page is converted, unused utilities purge away.
4. **Images:** a build step creates WebP + AVIF at 3–4 widths with `srcset` / `sizes`, lazy loading below the fold, explicit dimensions, and a preloaded hero poster.
5. **Icons:** Lucide pinned to a version and kept only for nav, forms, close and arrows; the 4 social glyphs become inline SVG; Font Awesome is dropped.
6. **Accessibility:**
   - WCAG AA contrast (palette above)
   - visible focus rings
   - skip link
   - labelled form fields
   - alt text on all images
   - keyboard-operable menus and configurator
7. **Fixes:**
   - **Toast:** its text is set only when a toast fires.
   - **Social links:** each gets a `<!-- TODO: real URL -->` marker and a `data-todo` attribute.
8. **Deploy:** the GitHub Actions workflow runs `npm ci && npm run build` and publishes `dist/`.

## 10. Stages and commits

Each stage is committed on `redesign/premium`:

1. this brief
2. foundation (tokens, fonts, Tailwind build, routing + pre-render skeleton) and the homepage → pause for feedback
3. model page and configurator
4. remaining pages, SEO and deploy

Each stage gets a self-review against the "Remove" list before I show it.
