# OpenTutor manifesto

The public OpenTutor manifesto: vivid fuchsia, black text, bold Instrument Serif headings, and a parent-led learning model.

## Local preview

From this folder, run `python3 -m http.server 8000` and open `http://localhost:8000/`.

There is no dependency installation or build step. `index.html`, `manifesto.css`, `manifesto.js`, and the bundled font are the published files.

## Vercel deployment

Use the existing Vercel project and connect `murderszn/open-tutor`, production branch `main`, with Root Directory set to `site`.

The local `vercel.json` selects Other, disables build/install commands, and serves this folder. Legacy `/site` and `/site/` links redirect to the homepage; `/site/<asset>` links redirect to their corresponding root asset paths.

Keep project domains and runtime settings in Vercel. This folder does not contain the Discord bot runtime or alter the existing curriculum and teacher dashboards.

Instrument Serif is bundled in `assets/instrument-serif.ttf`; its SIL Open Font License is in `assets/instrument-serif-license.txt`.
