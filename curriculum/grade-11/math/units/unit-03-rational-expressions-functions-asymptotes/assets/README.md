# Assets — Unit 03: Rational Expressions, Functions, and Asymptotes

## Generated image

- **Filename:** `asymptote-study-scene.png` (1920 × 1280 PNG)
- **Prompt (final, second attempt):** "A clean flat educational
  illustration of a student at a desk studying a large coordinate
  graph on paper. The graph has two completely separate curved
  branches with a gap between them: a left branch that stays
  entirely to the left of a dashed vertical line, and a right
  branch that stays entirely to the right of that dashed vertical
  line. Neither branch touches or crosses the dashed vertical line
  or the dashed horizontal line. No words, numbers, letters, or
  labels anywhere in the image. Simple shapes, high contrast,
  uncluttered background."
- **Generation tool:** Muse built-in image generation
  (`media.generate_image`), 2026-10-22.
- **First attempt (discarded, not in this folder):** the first
  generation drew a single continuous S-shaped curve crossing both
  dashed lines. That image was rejected on inspection: a curve
  crossing a vertical dashed line cannot be a rational function's
  graph with that line as a vertical asymptote. It was deleted,
  not shipped.
- **Learning purpose:** used in Lesson 03's illustration activity
  ("read the illustration, then correct it in words"): the learner
  identifies which dashed line creates the gap between the
  branches and why a rational graph cannot cross it, and names
  the horizontal dashed line as a horizontal asymptote.
- **Factual review (inspected 2026-10-22):** the final image shows
  two separate branches, neither crossing the vertical dashed
  line; the left branch's lower end touches the horizontal dashed
  line where the two dashed lines cross, which is a stylisation,
  not a plotted point. No words, numbers, or letters appear in
  the image, so no mislabelled text can mislead. The image is
  schematic — it is **not** plotted from a named function, and
  no coordinates may be read off it.
- **Caption:** AI-generated illustration. A student studies a
  graph with two separate curved branches, a dashed vertical line,
  and a dashed horizontal line.
- **Alt text:** A student at a desk studying a large graph with
  two separate curved branches, a dashed vertical line, and a
  dashed horizontal line. No words or numbers appear in the image.
- **Text-only alternative (in Lesson 03):** a graph in two pieces,
  left piece above the horizontal dashed line and falling toward
  it as it moves right, right piece below that line and falling
  away from it as it moves right; a vertical dashed line
  separates the pieces; neither piece touches either dashed line.
- **Known limitations:** schematic only — for exact values use
  the SVG below. The student's face and desk are illustrative,
  not a depiction of any real learner.

## Exact plotted graph (deterministic, not generated)

- **Filename:** `rational-graph.svg`
- **Method:** plotted by computation (Python) from
  `f(x) = (2x - 4)/(x + 3)` over `x` in `[-8, 6]`, `y` in
  `[-8, 10]`, with the curve split at the vertical asymptote
  `x = -3`. The SVG file parses as XML.
- **Purpose:** the authoritative graph for Lesson 04 and Practice
  Set D item 8. Its labels are exact: vertical asymptote
  `x = -3`, horizontal asymptote `y = 2`, x-intercept `(2, 0)`,
  y-intercept `(0, -4/3)`. Check values: `f(-8) = 4`,
  `f(-4) = 12` (above the window, so the left branch leaves the
  top of the window near the asymptote — the graph itself
  continues without bound), `f(0) = -4/3`, `f(2) = 0`,
  `f(6) = 8/9`.
- **Alt text:** Graph of f(x) = (2x - 4) / (x + 3): two branches,
  vertical asymptote x = -3 (dashed red), horizontal asymptote
  y = 2 (dashed red), x-intercept (2, 0), y-intercept (0, -4/3).
  The branches leave the top and bottom of the window near
  x = -3 because values there exceed the window.
