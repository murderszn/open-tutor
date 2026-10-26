# Assets — Unit 02: Linear Functions

## vending-machine-function.png

- **File:** `assets/vending-machine-function.png` (1920×1120 PNG, ~648 KB)
- **Prompt:** "flat-style educational illustration of a vending machine with
  three shelves of snack packages and a side panel of numbered selection
  buttons, bright colors, no people, no brand names"
- **Tool:** built-in image generation (media pipeline), 2026-10-19.
- **Learning purpose:** Lesson 01 vending-machine activity — learners test
  the "button → item" rule against the function definition (exactly one
  output per input), then "break" the machine to see the rule fail.
- **Factual review (2026-10-19, inspected before linking):** teal vending
  machine with three stocked shelves: top shelf four yellow chip bags,
  middle shelf four red cracker packs, bottom shelf four strawberry-snack
  packs. Right-side yellow panel shows a "SELECT ITEM" screen, a 12-button
  keypad (1–9, *, 0, #), a bill slot, and a coin return. No people, no brand
  names; snack packaging is generic. The top banner reads "VENDING MACHINE"
  — on-topic, nothing to crop.
- **Caption:** "A vending machine is like a function: each button press
  selects exactly one item."
- **Alt text:** "Flat illustration of a vending machine with three shelves
  of snacks and a numbered selection keypad."
- **Text-only alternative:** in Lesson 01 (full shelf-by-shelf and
  keypad description plus the activity's button→item mapping) — the activity
  is fully answerable without the image.
- **Known limitations:** AI illustration, not a photo; the button→item
  mapping used in the activity is supplied in the lesson text, not shown on
  the machine itself.

## linear-function-graphs.svg

- **File:** `assets/linear-function-graphs.svg` (deterministic vector, not
  generated)
- **Purpose:** Lesson 03 graphing activity and Lesson 04 slope work — two
  precisely plotted linear functions (`y = 2x + 1` in blue, `y = −x + 4` in
  red) with labeled intercepts, a slope triangle (rise 2, run 1, m = 2), and
  their intersection at (1, 3).
- **Why SVG:** exact coordinates computed by hand (55 px per unit; origin
  (0, 0) at pixel (240, 380); x from −3 to 5, y from −4 to 6); every plotted
  point verified against its equation — intercept (−0.5, 0) sits exactly on
  `y = 2x + 1`, (4, 0) exactly on `y = −x + 4`, and (1, 3) satisfies both.
  Generation could misplace these points; precision is the lesson.
- **Accessibility:** `role="img"` with `<title>` and `<desc>`; color is never
  the only cue (each line is text-labeled with its equation); a text
  alternative in Lesson 03 lists every plotted feature.
