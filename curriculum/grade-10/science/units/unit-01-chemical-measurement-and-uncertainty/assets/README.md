# Assets — Unit 01

## lab-measurement-station.png (generated raster illustration)

- **Prompt (verbatim):** "Educational illustration for a high-school chemistry lesson: a clean
  chemistry lab bench scene showing a tall graduated cylinder with blue liquid and a clearly
  visible curved meniscus at the liquid surface, a digital laboratory balance with a small beaker
  on its pan, a glass thermometer, and a metric ruler arranged side by side on the bench. Flat,
  clean textbook-illustration style, soft neutral background, no people, no text, no numbers, no
  labels, no brand logos."
- **Tool:** built-in image generation (`media.generate_image`, PNG output). **Date:** 2026-10-14.
- **Learning purpose:** Lesson 03 readiness check and instrument-identification activity — the
  learner names each instrument and the quantity it measures before reading the lesson.
- **Factual review (inspected 2026-10-14):** four instruments present and recognizable
  (graduated cylinder, digital balance with beaker, thermometer, ruler); visible concave meniscus
  on the cylinder's blue liquid; no people, no text, no numbers, no brand marks. The tick marks
  on the cylinder, thermometer, and ruler are decorative and carry no values — they must not be
  read as measurements.
- **Caption:** "The four instruments of this unit on the bench — graduated cylinder (volume),
  digital balance (mass), thermometer (temperature), ruler (length). The tick marks in this
  illustration are decorative; exact readings in this lesson come from the labeled scale diagram
  and the text-only descriptions."
- **Alt text:** "Illustration of a chemistry measurement station: a tall graduated cylinder with
  blue liquid, a digital balance with a beaker on its pan, a thermometer, and a metric ruler on
  a bench. AI-generated illustration; decorative scale marks carry no numbers."
- **Limitations:** not a measurement reference — all graded readings use `meniscus-reading-scale.svg`
  or written practice values. A text-only alternative in Lesson 03 carries the same information
  for screen-reader users.

## meniscus-reading-scale.svg (deterministic diagram, not generated)

- **Purpose:** exact, reproducible scale for Lesson 03 (guided practice C1) and quiz question 6.
- **Construction:** hand-authored SVG; 1 mL = 10 px; numbered every 2 mL from 20 to 30;
  the bottom of the concave meniscus sits exactly halfway between the 24 and 25 mL marks, so the
  reading is 24.5 mL.
- **Factual review:** tick positions computed from the 1 mL = 10 px scale (30 mL at y=80,
  20 mL at y=180; meniscus dip centered at y=135 → 24.5 mL). Numbers are real labels, not
  AI-estimated. Used wherever precision matters, per the unit's image rules.
