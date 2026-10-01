# OpenTutor manifesto

The public OpenTutor manifesto uses Solar Atlas with the original fuchsia (`#ff00b7`), white, cobalt, and near-black ink. A centered bold Geist question leads the hero, framed by vertical lettering and a large registration mark on desktop. An original animated cartographic shader integrates the learning-record statement and manifesto link; a short welcome invites Reddit and Hacker News visitors to collaborate. Headings change scale and placement between chapters. The 33-icon library supplies aligned navigation, chapter labels, and learning steps, not floating constellations. Backgrounds stay anchored to the centered content column on ultrawide screens.

Solar Atlas is the only theme. There is no palette switcher or separate icon gallery.

## Local preview

From this folder, run `python3 -m http.server 8000` and open `http://localhost:8000/`.

There is no dependency installation or build step. Publish the whole folder, including `index.html`, `manifesto.css`, `manifesto.js`, `hero-atlas.js`, and `assets/`.

## Vercel deployment

Use the existing Vercel project and connect `murderszn/open-tutor`, production branch `main`, with Root Directory set to `site`.

The local `vercel.json` selects Other, disables build/install commands, and serves this folder. Legacy `/site` and `/site/` links redirect to the homepage; `/site/<asset>` links redirect to their corresponding root asset paths.

Keep project domains and runtime settings in Vercel. This folder does not contain the Discord bot runtime or alter the existing curriculum and teacher dashboards.

Geist and Geist Mono load from Google Fonts, with system fallbacks. Instrument Serif is bundled for itinerary numerals in `assets/instrument-serif.ttf`; its SIL Open Font License is in `assets/instrument-serif-license.txt`.

## Design assets

- [Solar stipple atlas](assets/solar-stipple-atlas.webp): transparent black-ink globe directly on the fuchsia hero, plus chapter backgrounds. These backgrounds are 20% larger and five opacity points stronger; the footer is excluded.
- [Solar learning atlas](assets/solar-learning-atlas.webp): the earlier orange/yellow social sharing image, retained as a historical asset.
- [Hero shader](hero-atlas.js): original native WebGL stippled terrain, with pause, reduced-motion support, offscreen suspension, and a CSS fallback. No runtime library is required.
- [Footer world map](assets/footer-world-map.webp): the supplied antique oval map, cleaned to transparency and integrated as an oversized, softly faded background bleeding beyond the footer edges.
- `assets/micro/`: the original 33 PNG marks, reused at different scales and rotations. Decorative instances have empty alternative text.
- [Platform marks](assets/brands/README.md): monochromatic GitHub and Discord SVGs for setup resources and footer links.
- [Artwork prompts and design notes](design-notes.md): generation provenance and maintenance guidance.
