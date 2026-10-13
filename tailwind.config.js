/** Tailwind build config. Design tokens live in src/styles/tokens.css; the colours here point at them
 *  so a token change updates every utility. `brand.*` keeps the pre-redesign pages working until each
 *  page is converted (stage 3 and 4 of the redesign), after which it can be removed. */
module.exports = {
    content: ['./index.html', './app.js', './scripts/**/*.mjs'],
    // Grid column classes that app.js builds at runtime from a count
    safelist: [{ pattern: /grid-cols-[1-6]/, variants: ['md', 'lg'] }],
    theme: {
        extend: {
            colors: {
                paper: 'var(--paper)',
                stone: 'var(--stone)',
                line: 'var(--line)',
                mute: 'var(--mute)',
                'ink-2': 'var(--ink-2)',
                ink: 'var(--ink)',
                green: 'var(--green)',
                'green-text': 'var(--green-text)',
                // Pre-redesign palette (legacy pages)
                brand: {
                    dark: '#FFFFFF',
                    card: '#F5F8F3',
                    border: '#E1E7DD',
                    olive: '#749E35',
                    oliveHover: '#5F822B',
                    slate: '#4F6B7D',
                    slateMuted: '#688396'
                }
            },
            fontFamily: {
                sans: ['"Instrument Sans Variable"', 'system-ui', 'sans-serif'],
                display: ['"Newsreader Variable"', 'Georgia', 'serif']
            },
            maxWidth: {
                site: '85rem' // 1360px content width
            },
            transitionTimingFunction: {
                site: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }
        }
    }
};
