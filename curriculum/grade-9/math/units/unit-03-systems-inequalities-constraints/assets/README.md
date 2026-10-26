# Assets — Unit 03: Systems, Inequalities, and Constraints

## two-paths-crossing.png

- **File:** `assets/two-paths-crossing.png` (1600×1600 PNG)
- **Prompt:** "A clean, flat, top-down aerial illustration of a small park
  for a 9th-grade math lesson, viewed straight from above. Two straight
  walking paths cross each other at one single point in the center of the
  park, where a small round bench sits exactly at the crossing. One path
  runs diagonally from lower-left to upper-right; the other runs
  diagonally from upper-left to lower-right, forming a clear X shape. The
  park is simple green grass with a few small round trees placed away
  from the paths, a light gray path color, and a plain background. No
  text, no letters, no numbers, no people, no labels. Bright, simple,
  instructional illustration style."
- **Tool:** built-in image generation (media pipeline), 2026-10-26.
- **Learning purpose:** Lesson 01 crossing-paths activity — the bench
  sits at the single point that lies on both paths, the picture version
  of "one ordered pair that satisfies both equations."
- **Factual review (2026-10-26, inspected before linking):** two
  straight gray paths cross exactly once, at the center; a round brown
  bench marks the crossing; trees stand on grass away from the paths;
  no text, numbers, or people appear. Nothing in the image states a
  measurement, so there is no false measurement to correct.
- **Caption:** "Two straight paths cross at exactly one point — the
  bench. That one shared point is the picture of a system's solution."
- **Alt text:** "Top-down view of a park: two straight gray paths cross
  in an X shape, with a small round bench exactly where they cross, and
  round green trees on the grass away from the paths."
- **Text-only alternative:** in Lesson 01 ("the bench is on both
  paths") — the activity is fully answerable without the image.
- **Known limitations:** AI-generated illustration, not a photograph of
  a real park; path angles and tree placement are illustrative, not
  surveyed. The image is used as an analogy, never as measured data.

## feasible-region.svg

- **File:** `assets/feasible-region.svg` (deterministic vector, not
  generated)
- **Purpose:** Lesson 06 feasible-region activity — the exact region
  for `x ≥ 0`, `y ≥ 0`, `x + y ≤ 10`, `2x + y ≤ 14`, with corner points
  `(0, 0)`, `(7, 0)`, `(4, 6)`, `(0, 10)` labeled.
- **Why SVG:** corner coordinates are mathematically exact (26 px per
  unit; `(4, 6)` is the verified intersection of `x + y = 10` and
  `2x + y = 14`: `4 + 6 = 10` and `2(4) + 6 = 14`); generation could
  misplace a corner or a boundary line.
- **Accessibility:** `role="img"` with `<title>` and `<desc>`; a text
  alternative in Lesson 06 lists every corner and boundary line.
