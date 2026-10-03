# OpenTutor manifesto

The public OpenTutor manifesto uses neon lime (`#b2f522`), white, cobalt, and near-black ink. A centered Geist question leads the hero, framed by vertical OpenTutor lettering and three monochrome microdiagrams. The academy panorama is quieter behind the headline and resolves toward the outer edges and lower hero. Chapter links live in the header.

A stippled academy panorama supplies focused subject illustrations. Chapter backgrounds use different subjects and restrained crops, anchored to the centered reading width; the panorama does not fill long sections on phones. A transparent campus panorama anchors the Manifesto and In the Open near their lower edges. Backgrounds stay sharp, without blur, added dot textures, or parallax. Decorative halftone terrain draws transparent ink into the hero, responds to scrolling, and respects reduced motion. The tutor showcase pairs three illustrative conversations with a fraction model, a work plan, or a revised explanation. It is not a live chat. The following repo showcase maps the same classroom folders to parent, student, and agent workflows. Parent oversight pairs a sample learner check-in with expandable questions about accounts, age rules, privacy, and review.

There is one palette and no theme switcher. This is a static site with no build step.

Reading copy uses 17–18px type, navigation and actions use 16px, and small labels stay at 14px or above. The layout is containerless: copy and figures share their section's color, with open columns, thin rules, and clear spacing instead of filled cards. Dark sections use light text and lime accents. Difference presents three benefits and the setup tradeoff. Curriculum links all nine independent grade hubs in K–2, grades 3–5, and grades 6–8 groups. Grades K–3 and Grade 6 are labeled “Starter lessons / draft”; Grades 4, 5, 7, and 8 are expanded draft libraries. A compact coverage link keeps scope visible. The repo explorer links `curriculum/` alongside `assignments/`, `resources/`, and learner work, and highlights only the folders used by each view. The site describes variable coverage rather than a complete course or standards guarantee; select one grade folder for one learner at a time. Setup starts with downloadable or printable files; online work belongs in a separate adult-managed private workspace because GitHub forks are public. Discord and the tutor are optional adult-managed tools. Disclosures work without JavaScript.

## Local preview

From this folder, run `python3 -m http.server 8000` and open `http://localhost:8000/`.

There is no dependency installation or build step. Publish the whole folder, including `index.html`, `manifesto.css`, `manifesto.js`, `hero-atlas.js`, and `assets/`.

## Vercel deployment

Use the existing Vercel project and connect `murderszn/open-tutor`, production branch `main`, with Root Directory set to `site`.

The local `vercel.json` selects Other, disables build/install commands, and serves this folder. Legacy `/site` and `/site/` links redirect to the homepage; `/site/<asset>` links redirect to their corresponding root asset paths.

Keep project domains and runtime settings in Vercel. This folder does not contain the Discord bot runtime or alter the existing curriculum and teacher dashboards.

Geist and Geist Mono load from Google Fonts, with system fallbacks. Instrument Serif is bundled for itinerary numerals in `assets/instrument-serif.ttf`; its SIL Open Font License is in `assets/instrument-serif-license.txt`.

## Design assets

- [Academy of knowledge stipple panorama](assets/academy-of-knowledge-stipple.webp): quality-88 WebP delivery copy of the detailed black-on-white scene connecting school subjects (about 743 KB, down from 2.7 MB lossless); full-frame and detailed crops were visually compared with the retained original PNG. The [source PNG](assets/academy-of-knowledge-stipple.png) and [final generation prompt](assets/academy-of-knowledge-stipple-prompt.md) remain alongside it.
- [Solar stipple atlas](assets/solar-stipple-atlas.webp): transparent black-ink contour lines used as a cropped detail behind Record and in the hero's learning-record illustration.
- [Solar learning city](assets/solar-learning-city.webp): transparent engraved campus panorama used along the lower edges of Manifesto and In the Open.
- [Solar learning atlas](assets/solar-learning-atlas.webp): the earlier orange/yellow social sharing image, retained as a historical asset.
- [Hero shader](hero-atlas.js): native transparent-ink WebGL halftone terrain, rendered only in response to scrolling or layout changes. It respects reduced motion and visibility, and falls back to the static atlas image. No runtime library is required.
- [Footer world map](assets/footer-world-map.webp): the supplied antique oval map, cleaned to transparency and used as a cropped accent in Difference and as the footer backdrop. The map keeps its engraved detail without a blur or gradient mask.
- `assets/micro/`: the original 33 PNG marks, reused at different scales and rotations. Decorative instances have empty alternative text.
- [Platform marks](assets/brands/README.md): monochromatic GitHub and Discord SVGs for setup resources and footer links.
- [Site favicon](assets/favicon.svg): the circled OT mark on lime, matching the page identity.
- [Artwork prompts and design notes](design-notes.md): generation provenance and maintenance guidance.
