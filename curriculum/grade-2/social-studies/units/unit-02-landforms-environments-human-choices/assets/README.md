# Assets — Unit 02

## riverside-valley-illustration.png

- **File:** `riverside-valley-illustration.png` (PNG, 1920×1280, RGB,
  ~3.6 MB)
- **Status:** generated and inspected 2026-10-17 (generated during this
  worker run; inspected before linking).
- **Used in:** [Lesson 03](../lessons/lesson-03-people-change-places.md)
  — the people-change-places activity (find farms, roads, buildings);
  [Lesson 04](../lessons/lesson-04-how-places-shape-choices-and-work.md)
  — job-to-landform matching and local vs. far-away goods; [Lesson
  05](../lessons/lesson-05-two-communities-one-earth.md) — the
  countryside portrait in the city-vs.-countryside comparison; [Practice
  set C](../practice.md#week-9--people-and-places); the [formative
  quiz](../assessments/week-04_quiz.md) (item 5); and the [unit
  assessment](../assessments/unit-assessment.md) (item 5).
- **Tool/model:** built-in image-generation pipeline
  (media.generate_image), run during this worker run; model not reported
  by the pipeline. Generated 2026-10-17.
- **Generation prompt (verbatim):** "Generate a warm, hand-drawn
  storybook-style landscape illustration of a clearly fictional valley
  community, for a grade 2 social studies activity about landforms and
  how people use their environment. Show: rolling green hills in the
  background with one snow-capped peak, a wide blue river winding through
  the middle of the scene, a flat plain with neat farm fields and rows of
  crops on one side of the river, a small blue lake on the other side, a
  few simple houses with red roofs, a dirt road, a small wooden bridge
  crossing the river, tiny stylized figures of people farming in the
  fields and fishing by the lake, and a few trees. Soft bright colors,
  clean uncluttered layout, thick friendly outlines, clear blue sky with
  a smiling sun, no photographic people, no real-world place names, no
  national borders, no text labels at all — an obviously fictional
  teaching illustration."
- **Intended use:** a "mystery community" scene learners read for
  landforms (hill, valley, plain, river, lake), for people-made change
  (farm fields, dirt road, houses, bridge), and for work shaped by land
  (farming on the plain, fishing at the water). Also the countryside
  portrait in Lesson 05's city-vs.-countryside comparison.
- **Factual review (2026-10-17, inspected before linking):** the image
  shows exactly this inventory — rolling green hills across the back
  with one snow-capped peak; a wide blue river winding from the upper
  left to the lower right; flat land with neat rows of farm fields on
  the river's left side, with tiny figures planting and carrying
  baskets; three small red-roofed houses near the fields; a brown dirt
  road running past houses and fields; a small wooden bridge crossing
  the river near center-right; a calm blue widening of the water at
  lower right that reads as a small lake, with two tiny figures fishing
  from its shore; scattered trees; a smiling sun in a blue sky with
  clouds. No text, no labels, no real-world place names, no
  photographic or identifiable people. **Landform inventory for lesson
  prose:** hill ✓ (background hills), valley ✓ (the scene sits in low
  land between hills), plain ✓ (flat farm fields), river ✓ (winding
  blue band), lake ✓ (the calm widened pool at lower right — the unit's
  text description names it "a calm blue lake"), coast ✗ (not present —
  the coast is taught only through the deterministic diagrams and text
  examples). All lesson, practice, quiz, assessment, and answer-key
  prose was reconciled to the actual image (not to the pre-generation
  draft).
- **Alt text:** "AI-generated storybook illustration of a fictional place
  called Riverside Valley. Green hills rise in the back with one
  snow-capped peak. A wide blue river winds through the middle. On one
  side, flat land holds neat rows of farm fields where tiny people plant
  crops; three small red-roofed houses and a brown dirt road stand nearby.
  A small wooden bridge crosses the river. On the other side, a calm blue
  lake spreads out, where two tiny people fish from the shore. Trees are
  scattered around and a smiling sun shines in a blue sky."
- **Caption (as used in the lessons):** "An AI-generated illustration of
  the pretend Riverside Valley community — a practice picture, not a
  real place. What landforms do you see? What did people build here?"
- **Known limitations:** stylized flat illustration, not to scale; must
  not be used to teach measurement or real geography. The lake reads as
  a widened river bend — the unit's text description fixes it as "a calm
  blue lake" and every task is answerable from that description. No coast
  is shown; the coast is taught via the deterministic diagrams. Keep
  learner-identifying imagery out of the repo — this image contains no
  identifiable people.
- **Text-only alternative:** provided in full in [Lesson
  03](../lessons/lesson-03-people-change-places.md) ("The Riverside
  Valley illustration — text-only description"), so every question using
  the image is answerable without seeing it.
- **AI labeling:** the lessons, practice set, quiz, assessment, and
  teacher guide all name this file as an AI-generated illustration of a
  fictional community — never a photograph and never a real place.

## landform-diagrams.svg

- **File:** `landform-diagrams.svg` (SVG, deterministic vector drawing)
- **Status:** authored by hand during this worker run; coordinates
  reviewed 2026-10-17 (no rasterizer available in this environment, so
  the file was verified by code review: six 360×360 panels on a
  1200×920 canvas, each with a bold title, a labeled shape, and two
  caption lines inside the canvas bounds).
- **Used in:** [Lesson 01](../lessons/lesson-01-meeting-the-landforms.md)
  — the canonical landform pictures; [Practice set
  A](../practice.md#week-7--landforms); the [formative
  quiz](../assessments/week-04_quiz.md) (item 1); the [unit
  assessment](../assessments/unit-assessment.md) (item 1); the
  [project](../project.md) (plan step: point to the chosen landform).
- **Purpose:** exact, reproducible labeled diagrams for the six
  landforms — hill, valley, plain, river, lake, coast. Per the track's
  scope-and-sequence, landform shapes are taught from deterministic
  visuals, never from AI-generated geography. The SVG re-renders
  identically in every browser and printer.
- **Accessibility:** the SVG carries `<title>` and `<desc>` elements; in
  print, pair it with the spoken panel captions ("Hill — raised land,
  lower than a mountain," and so on).
