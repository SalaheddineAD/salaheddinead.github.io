# Build brief: salahdaoud.com redesign (Option F, "Calm and clear")

## Source of truth

- `design/Calm.dc.html` is the approved mockup. Match its layout, copy, colors, type and interactions exactly. Every word on the page comes from it, including the 8 project popups (in the `P` array inside its `<script>` block).
- `design/salah-stage.jpg` is the About photo.
- The mockup uses a design-tool format (`<x-dc>`, `{{holes}}`, `<sc-for>`, `<sc-if>`). Do not copy that markup; rebuild it as normal components.
- Text in [BRACKETS] is a placeholder. Keep it visible in development and list every remaining one before launch.

## Stack

- Astro (static output) + plain CSS with custom properties. No UI kit.
- Small vanilla JS (or Astro islands) for the theme toggle, filters and modal only. Ship no framework runtime to the browser unless needed.
- Deploy target: replaces the current site at salahdaoud.com. Ask me before changing DNS or hosting.

## Design tokens

| Token | Light | Dark |
| --- | --- | --- |
| --bg | #FFFFFF | #0E1A27 |
| --soft | #F1F5F9 | #132434 |
| --card | #FFFFFF | #172B3D |
| --ink | #152536 | #E9EFF5 |
| --muted | #52637A | #A7B6C6 |
| --line | #D5DFE8 | #2A4157 |
| --glass | rgba(255,255,255,0.6) | rgba(14,26,39,0.55) |
| --sky-1 / --sky-2 | #DCE8F2 / #F4F8FB | #0B1622 / #22384D |
| --mountain-1/2/3 | #C4D6E2 / #A9C2D4 / #8FAEC4 | #2B4258 / #1E3246 / #152637 |

Project tile tints (gradient placeholders until photos arrive): GenAI #5E7FA8→#9DB5D0, Forecasting #4F7D93→#9CC0CF, MLOps #4C6378→#93A8BB, Optimization #6B7F95→#B3C2CF. Tile hover overlay: rgba(21,37,54,0.78).

Type: Newsreader (headings, About lead paragraph, quotes) and Public Sans (everything else), from Google Fonts with `display=swap`. Self-host if it helps performance.

Layout: content max-width 1200px, 32px side padding (16px on phones). Radii: tiles 14px, photo 18px, cards 12–16px, buttons fully rounded.

## Page sections, in order

1. Header over the hero: name, Projects · About · Experience · Contact, theme toggle button.
2. Hero (640px tall): layered mountain SVG exactly as in the mockup, name, title, one line, two buttons. The hero background will be redesigned later, so build it as its own component that's easy to swap.
3. Projects: heading, filter buttons (All, Forecasting, GenAI, MLOps, Optimization), grid of 8 tiles (`repeat(auto-fill, minmax(260px, 1fr))`, 4:3), "Also shipped" line.
4. About: stage photo (4:5, object-position 45% 22%), caption, bio, three facts.
5. Experience → Education → Certifications.
6. What people say: three testimonial cards (placeholders).
7. Contact: centered closing, Email / LinkedIn / GitHub, footer line.

## Interactions

- Theme toggle: respects `prefers-color-scheme` on first visit, then remembers the visitor's choice in localStorage (wrapped in try/catch). No flash of the wrong theme on load.
- Filters: buttons with `aria-pressed`; filtering shows/hides tiles without a page reload.
- Tiles are real `<button>`s. Hover and keyboard focus reveal the overlay (category, title, tagline, "View details"). On touch devices, show the title below each tile instead, since there's no hover.
- Popup: accessible dialog (`<dialog>` or equivalent): focus moves into it, focus is trapped, Esc and the close button close it, focus returns to the tile, background scroll locks.
- Respect `prefers-reduced-motion` (no zoom or fade).
- No AI assistant on the site.

## Assets to swap in later

- 8 tile photos (suggested subjects are written on each tile in the mockup). Use the tint gradient as a fallback and as an overlay color.
- Testimonial quotes, names, roles.
- Event name on the photo caption.
- Credly verification link for the AWS ML Specialty.

## Quality bar (check before saying it's done)

- Lighthouse 95+ on Performance, Accessibility, Best Practices and SEO, mobile and desktop.
- Works at 375px wide: grids stack, nothing scrolls sideways, tap targets ≥ 44px.
- WCAG AA contrast in both themes, visible keyboard focus everywhere.
- Meta title, description, Open Graph image, favicon, sitemap.
- Images: modern formats, explicit sizes, lazy-load below the fold.

## How to work

- Use the frontend-design skill for visual decisions; match the mockup, don't redesign it.
- Build section by section and show me screenshots at desktop and phone width after each one.
- After the build, measure with Chrome DevTools MCP (Lighthouse), fix with web-quality-skills, and test the toggle, filters and popup with Playwright MCP.
- Commit in small steps. Don't deploy or touch DNS without asking me.
