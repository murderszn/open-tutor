# Lesson 03 — Graphing Linear Functions

**Goal:** I can graph a linear function by hand on labeled, scaled axes,
move between its table, graph, equation, and description, and read what the
graph's points and intersections mean.
**Time:** 50 minutes · **Materials:** graph paper, ruler, the SVG graph

## Readiness check (5 min)

Plot the points `(−1, 2)` and `(3, −4)` on a coordinate grid. If you can
find both (left/right, then up/down), you are ready.

## Teaching: four ways to hold the same function (15 min)

A linear function can be held four ways — **table, graph, equation,
description** — and a fluent learner translates between any two:

- **Equation:** `y = 2x + 1`. The Unit-01 reading still works: slope 2 is
  the coefficient of `x`, the constant term 1 is the `y`-intercept.
- **Table:** choose inputs, compute outputs. Three points are enough to
  check your work; if they do not line up, recheck before drawing.
- **Graph:** plot the points, draw the straight line through them. Label
  both axes with the quantity and unit, and choose a scale that fits the
  data (N-Q.1). The arrows say the line continues; in a story context,
  erase the arrows where the domain ends (F-IF.5).
- **Description:** "start at 1, add 2 for every 1 you move right."

**Key facts the graph carries.** (A-REI.10) Every point on the graph is a
solution of the equation — the graph *is* the solution set, plotted.
(A-REI.11, light touch) Where two graphs cross, both equations are true at
once, so the crossing point's x-coordinate solves `f(x) = g(x)`. And the
**intercepts** are where the graph crosses the axes: the y-intercept is
`f(0)`; the x-intercept is the input with output 0.

### Worked example 1 — graph by hand

> Graph `y = 2x + 1` on labeled, scaled axes.

1. **Table.** Pick three inputs spanning negatives and positives:

   | x | y = 2x + 1 | (x, y) |
   |---|---|---|
   | −2 | 2(−2) + 1 = −3 | (−2, −3) |
   | 0 | 2(0) + 1 = 1 | (0, 1) |
   | 2 | 2(2) + 1 = 5 | (2, 5) |

2. **Plot and draw.** Draw axes, label them `x` and `y`, mark a scale (one
   grid square = 1 unit). Plot the three points — they line up — and draw
   the line through them.
3. **Check with intercepts.** Set `x = 0`: `y = 1` — the y-intercept
   `(0, 1)` is on the line ✓. Set `y = 0`: `2x + 1 = 0` → `x = −0.5` — the
   x-intercept `(−0.5, 0)` is on the line ✓. Two independent checks agree
   with the table, so the graph is right.

### Worked example 2 — reading the SVG graph

Open `../assets/linear-function-graphs.svg` (blue line `y = 2x + 1`, red
line `y = −x + 4`).

> **Text-only alternative:** Two lines on a grid (x from −3 to 5, y from −4
> to 6). The blue line `y = 2x + 1` passes through (−2.5, −4) and (2.5, 6);
> its y-intercept is (0, 1) and its x-intercept is (−0.5, 0); a dashed slope
> triangle between (−2, −3) and (−1, −1) shows rise 2 and run 1, so slope
> m = 2. The red line `y = −x + 4` passes through (−2, 6) and (5, −1); its
> y-intercept is (0, 4) and its x-intercept is (4, 0). They intersect at
> (1, 3), labeled "both equations true here."

1. **Read the intersection.** The lines cross at `(1, 3)`. Verify in both
   equations: `2(1) + 1 = 3` ✓ and `−1 + 4 = 3` ✓. So `x = 1` is the
   solution of `2x + 1 = −x + 4` — check: `3 = 3` ✓. Reading an
   intersection off a graph is solving an equation without algebra.
2. **Read the slope.** The dashed triangle on the blue line starts at
   (−2, −3) and ends at (−1, −1): it goes up 2 (rise) for 1 across (run), so
   `m = 2/1 = 2` — matching the coefficient in `y = 2x + 1`.
3. **Intercepts as solutions.** The red line's x-intercept (4, 0) says
   `−x + 4 = 0` has solution `x = 4`. Every intercept on the graph is a
   solved equation.

## Guided practice (10 min, with hints)

1. Graph `y = −x + 4` by hand: make a three-row table, plot, label axes.
   *Hint: with x = 0, 2, 4 the outputs are 4, 2, 0 — all integers.*
2. From the SVG: verify that (−0.5, 0) is the x-intercept of `y = 2x + 1`
   by substitution. *Hint: set y = 0 and solve.*
3. From the SVG: the red line passes through (0, 4) and (4, 0). Compute its
   slope from these two points. *Hint: (0 − 4)/(4 − 0).*
4. **Error analysis:** "Rin graphed `y = 2x + 1` using the points (0, 0),
   (1, 2), (2, 4) and drew the line." What did Rin forget, and how would the
   intercept check have caught it?

## Independent practice (12 min)

5. Graph `y = (1/2)x − 3` by hand with labeled axes. Give the x- and
   y-intercepts and verify each by substitution.
6. A kayak rental costs `C(h) = 8h + 5` dollars for `h` hours, `0 ≤ h ≤ 6`.
   Make a table for `h = 0, 2, 4, 6`, sketch the graph with axes labeled
   "hours" and "dollars," and read the intercepts in context. (Should the
   line have arrows past `h = 6`? Why not?)
7. Two tables describe functions. Table P: `x = −1, 0, 1, 2` →
   `y = 5, 8, 11, 14`. Table Q: `x = 0, 1, 2, 3` →
   `y = 14, 17, 20, 23`. Write each function's equation and explain how you
   know they are (or are not) the same function.
8. The graphs of `y = 3x − 2` and `y = −x + 6` intersect at one point. Find
   it algebraically, then explain what the intersection means for the
   equation `3x − 2 = −x + 6`.

## Application (5 min)

A taxi meter starts at $3.50 and adds $2.50 per mile: `T(m) = 2.5m + 3.5`.
Sketch the graph for `0 ≤ m ≤ 10` (label axes "miles" and "dollars"). Mark
the point for a 6-mile ride and give its coordinates. (`T(6) = 18.50` — the
point is `(6, 18.5)`.)

## Exit check (3 min)

Sketch `y = −2x + 5` quickly (two points are enough), label the axes, and
write its y-intercept and x-intercept.

## Supports and extensions

- **Reading access:** before graphing, read the equation aloud: "y equals
  two x plus one — start at 1, rise 2 for every 1 across."
- **Alternate response:** dictate the table while the adult plots, or build
  the graph in Desmos and describe each step aloud.
- **Extension:** A vertical line `x = 3` — is it the graph of a function?
  Use the one-output rule from Lesson 01 to decide, and explain what goes
  wrong. (Unit 03 will need this distinction.)

## Teacher note

Likely misconception: learners plot points correctly but skip axis labels
and scales — then "read" values the scale does not support. Insist on
labeled axes every time; the N-Q.1 habit pays off in every later unit.
Second trap: treating the graph's arrows as decoration — in a story with a
restricted domain, the segment ends where the story ends. Answer-key
reference: [answer-key.md](../answer-key.md#lesson-03).
