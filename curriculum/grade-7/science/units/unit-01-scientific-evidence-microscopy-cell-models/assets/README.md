# Assets — Unit 01: Scientific Evidence, Microscopy, and Cell Models

Generation and source records for every non-text asset in this unit.

## microscope-parts-illustration.png

- **File:** `microscope-parts-illustration.png` (PNG, 381,849 bytes)
- **Prompt (verbatim):** "A clean, flat educational illustration of a
  compound light microscope in side view on a plain white background,
  drawn in a simple middle-school textbook diagram style. Show the
  parts distinctly and in accurate relative proportions: the eyepiece
  tube at the top, a rotating nosepiece holding three objective lenses
  above a flat specimen stage with a slide on it, a light source
  beneath the stage, a curved arm, coarse and fine focus knobs on the
  side, and a sturdy base. Do NOT include any text labels, arrows,
  captions, or words — the learner will label the parts themselves in
  an activity. Bright, uncluttered, scientifically recognizable
  proportions."
- **Tool/model:** built-in image generation pipeline
  (`media.generate_image`), 2026-10-12
- **Learning purpose:** Lesson 03 parts-labeling activity — the
  illustration is deliberately unlabeled so the learner does the
  labeling.
- **Factual review (2026-10-12):** inspected at full size. All ten
  parts are present and correctly proportioned: eyepiece tube, triple
  nosepiece with objective lenses, stage with slide and clips, light
  source beneath the stage, curved arm, two focus knobs (coarse/fine),
  base. No text, labels, or arrows present (as requested). Clean
  textbook-diagram style; no misleading anatomy.
- **Caption:** "AI-generated illustration of a compound light
  microscope (unlabeled). Activity: label the eyepiece, nosepiece,
  objective lenses, stage, slide, light source, coarse and fine focus
  knobs, arm, and base."
- **Alt text:** "Unlabeled side-view illustration of a compound light
  microscope showing the eyepiece tube at top, a rotating nosepiece
  with three objective lenses, a specimen stage holding a glass slide,
  a light source below the stage, a curved arm with two focus knobs,
  and a base."
- **Known limitations:** stylized illustration, not a photograph of a
  real instrument; fine-focus vs. coarse-focus knobs are not visually
  distinguished beyond size — the lesson teaches the distinction.
  Labeled as an AI illustration wherever used; never presented as a
  microscope photograph or an observation record.

## cell-size-scale.svg

- **File:** `cell-size-scale.svg` (deterministic vector diagram, not
  a generated image)
- **Purpose:** Lesson 03 scale teaching — why cells need
  magnification. Used alongside the generated illustration; it does
  not replace it.
- **Construction:** hand-computed base-10 logarithmic scale from
  100 nm to 1 mm. Positions: virus (100 nm), E. coli (2 µm), red
  blood cell (8 µm), human hair width (75 µm), naked-eye resolution
  limit (~100 µm, dashed red line), onion skin cell (300 µm), amoeba
  (500 µm), grain of sand (1 mm). Sizes are typical textbook values;
  axis math verified against the SVG coordinates 2026-10-12.
- **Alt text:** provided via `<title>`/`<desc>` in the SVG and in
  Lesson 03's prose description of the scale.
- **Known limitations:** values are rounded typical sizes, not
  measurements of specific specimens; the log scale compresses large
  differences visually — the lesson states this explicitly.
