# Assets — Unit 04: Exponents, Polynomials, and Operations

## tiled-garden-area-model.png

- **File:** `assets/tiled-garden-area-model.png` (generated PNG)
- **Prompt:** "A clean, flat, top-down illustration of a rectangular
  garden bed made of square tiles, viewed straight from above, for a
  9th-grade math lesson on area models for polynomial multiplication.
  The rectangle is divided by thin lines into a grid of small square
  tiles in two shades of green, with a few small round plants in some
  tiles. Simple instructional illustration style, plain light
  background, no text, no letters, no numbers, no people, no labels."
- **Tool:** built-in image generation (media pipeline), 2026-11-01.
- **Learning purpose:** Lesson 04 area-model activity — a rectangle
  made of small squares, whose total area is the sum of its parts,
  the picture version of "a product of sums is a sum of partial
  products."
- **Factual review (2026-11-01, inspected before linking):** a
  rectangular bed, framed in brown, divided into a grid of square
  tiles in two shades of green (6 columns by 4 rows), with small
  round plant clusters in five tiles; no text, numbers, or people
  appear. Nothing in the image states a measurement or a value of
  `x`, so there is no false measurement to correct; the lesson
  never asks the learner to read a number off the image.
- **Caption:** "A rectangular garden bed divided into square tiles.
  Its total area is the sum of the areas of its parts — the same
  idea as an area model for polynomial multiplication."
- **Alt text:** "Top-down view of a rectangular garden bed divided
  into a grid of square tiles in two shades of green, with small
  round plants in some tiles, framed in brown."
- **Text-only alternative:** in Lesson 04 ("picture a rectangular
  garden bed seen from above…") — the activity is fully answerable
  without the image, and the exact algebra is carried by the SVG
  diagram below, not by this illustration.
- **Known limitations:** AI-generated illustration, not a photograph
  of a real garden; tile counts and plant placement are
  illustrative, not surveyed. The image is used as an analogy, never
  as measured data.

## area-model-x-plus-3-x-plus-2.svg

- **File:** `assets/area-model-x-plus-3-x-plus-2.svg` (deterministic
  vector, not generated)
- **Purpose:** Lesson 04 area-model activity — the exact diagram for
  `(x + 3)(x + 2)`, with four regions labeled `x²`, `3x`, `2x`,
  and `6`, summing to `x² + 5x + 6`.
- **Why SVG:** region labels are exact algebra (`x · x = x²`,
  `x · 2 = 2x`, `3 · x = 3x`, `3 · 2 = 6`); generation could
  misplace a label or a split. Pixel widths in the drawing are
  illustrative only and are labeled as such in the file's comment;
  the algebra, not the pixel lengths, is exact.
- **Accessibility:** `role="img"` with `<title>` and `<desc>`; a text
  alternative in Lesson 04 lists every region and its area.
