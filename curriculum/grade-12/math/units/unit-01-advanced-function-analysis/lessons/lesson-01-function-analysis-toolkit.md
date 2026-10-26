# Lesson 01 — The Function Analysis Toolkit

**Unit 01 · Session S1 · ~50 minutes**
**Standards:** F-IF.4 (key features from graphs and tables), F-IF.7
(graph functions from different families), F-BF.3 (transformations of
functions — prerequisite fluency, used here)

## Student goal

By the end of this lesson I can run the same eight-step analysis on any
function from any family — domain, range, intercepts, intervals of
increase and decrease, extrema, end behavior, asymptotes, symmetry —
sketch the graph from my analysis *before* I look at technology, and
then use Desmos to verify (not to replace) my work.

## Materials

Notebook, pencil, graph paper, Desmos (free, no account needed).

## Readiness check (5 min)

1. Solve `2ˣ = 8`. What exponent turns 2 into 8?
2. What x-value is forbidden in `y = 1/(x − 5)`? State the domain in
   words.
3. Is `f(x) = x⁴ − 2x²` even, odd, or neither? Compute `f(−x)` and
   compare it with `f(x)` and `−f(x)`.

## Explicit teaching

### The protocol

Every function in this unit gets the same eight-step workup, in this
order. The order matters: early steps (domain, intercepts) feed the
later ones (asymptotes, sketch).

1. **Domain** — the set of x-values the function accepts. Look for
   division by zero, even roots of negatives, and logarithms of
   non-positives.
2. **Range** — the set of y-values the function actually produces.
   Often found last, after the shape is known.
3. **Intercepts** — where the graph meets the axes. The y-intercept is
   `f(0)` (if 0 is in the domain). The x-intercepts are the solutions
   of `f(x) = 0`.
4. **Intervals of increase/decrease** — the x-intervals where the
   graph rises or falls as you move left to right. "Increasing on
   `(a, b)`" means: pick any two x-values in `(a, b)`; the one farther
   right has the larger y-value.
5. **Extrema** — the peaks and valleys. A **local maximum** is a point
   higher than every nearby point; a **local minimum** is lower than
   every nearby point. The **global** (absolute) maximum/minimum is the
   highest/lowest point on the whole graph — some functions have none.
6. **End behavior** — what the y-values do as `x → −∞` and as
   `x → ∞`. For polynomials, the leading term decides. Some functions
   (like sine) never settle down — "oscillates" is a legitimate answer.
7. **Asymptotes** — lines the graph approaches but (usually) never
   touches. **Vertical** asymptotes come from x-values excluded from
   the domain where the function blows up. **Horizontal** and
   **slant** asymptotes describe end behavior of rational functions.
   A **hole** is a single missing point, not an asymptote — Lesson 02
   shows how to tell them apart.
8. **Symmetry** — **even** (`f(−x) = f(x)`, mirror across the y-axis),
   **odd** (`f(−x) = −f(x)`, half-turn symmetry about the origin), or
   neither.

### Sketch first, verify second

After steps 1–8, draw the graph on paper: mark intercepts and extrema,
draw asymptotes as dashed lines, then connect with the correct shape
and end behavior. Only then open Desmos and compare. When they differ,
the analysis is wrong or incomplete — find the step that failed. The
technology is the referee, not the author.

### How transformations move key features (prerequisite summary)

You learned these moves last year; here they just relocate the
features you already analyzed. If `y = f(x)` has a key point
`(a, b)` — an intercept, an extremum, a point on an asymptote:

| Transformation | `(a, b)` moves to | Intercepts | Asymptotes |
|---|---|---|---|
| `f(x) + k` (shift up/down) | `(a, b + k)` | x-intercepts slide; y-intercept shifts by `k` | Horizontal/slant asymptotes shift by `k`; vertical ones stay |
| `k·f(x)` (vertical stretch/compress) | `(a, kb)` | x-intercepts stay (k·0 = 0); y-intercept scales | Horizontal/slant asymptotes scale by `k`; vertical ones stay |
| `f(x − h)` (shift left/right) | `(a + h, b)` | Recompute from the shifted formula | Vertical asymptotes shift by `h`; horizontal ones stay |
| `−f(x)` (reflect across x-axis) | `(a, −b)` | x-intercepts stay; y-intercept flips sign | Horizontal/slant asymptotes reflect; vertical ones stay |

One landmark point plus the transformation type is usually enough to
predict the whole new picture — then verify.

## Worked examples (modeled reasoning)

**Example 1 — Full toolkit on a polynomial: `p(x) = x³ − 3x`.**

*Step 1 — Domain.* No division, no roots, no logs: all real numbers,
`(−∞, ∞)`.

*Step 2 — Intercepts.* y-intercept: `p(0) = 0`. x-intercepts: solve
`x³ − 3x = 0` → `x(x² − 3) = 0` → `x = 0`, `x = √3 ≈ 1.732`,
`x = −√3 ≈ −1.732`. Three x-intercepts: `(0, 0)`, `(±√3, 0)`.

*Step 3 — Symmetry.* `p(−x) = (−x)³ − 3(−x) = −x³ + 3x = −p(x)`.
Odd function — the graph has half-turn symmetry about the origin. That
means whatever happens on the right is mirrored (rotated 180°) on the
left, so I can analyze half the graph and rotate.

*Step 4 — End behavior.* Leading term `x³` dominates:
`x → ∞ ⇒ p(x) → ∞`; `x → −∞ ⇒ p(x) → −∞`.

*Step 5 — Increase/decrease and extrema.* A cubic with three distinct
real zeros must turn around twice between them (it cannot cross three
times while always rising). A quick table locates the turns:

| x | −2 | −1.5 | −1 | −0.5 | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|---|---|---|---|
| p(x) | −2 | 1.125 | 2 | 1.375 | 0 | −1.375 | −2 | −1.125 | 2 |

Check two entries by hand: `p(−1) = −1 + 3 = 2` ✓;
`p(1.5) = 3.375 − 4.5 = −1.125` ✓. The values rise from `−∞` up to
`( −1, 2)`, fall to `(1, −2)`, then rise toward `∞`. So `p` is
increasing on `(−∞, −1)` and `(1, ∞)`, decreasing on `(−1, 1)`, with a
local maximum at `(−1, 2)` and a local minimum at `(1, −2)`. Desmos
confirms the turning points are exactly there (a table alone suggests
*near* `±1`; technology pins them down — that is the verify step doing
its job).

*Step 6 — Range.* The ends go to `−∞` and `∞`, and the graph is
continuous, so the range is all real numbers.

*Step 7 — Asymptotes.* Polynomials have none.

*Sketch, then verify.* I mark the three intercepts and the two turning
points, draw the S-shape rising on the left from `−∞`, peaking at
`( −1, 2)`, dipping through the origin to `(1, −2)`, and climbing to
`∞`. Desmos matches. Note what did the heavy lifting: factoring gave
the zeros, the leading term gave the ends, and the table plus
technology gave the turns.

**Example 2 — Full toolkit on a rational function: `r(x) = 3/(x − 2)`.**

*Step 1 — Domain.* Division by zero at `x = 2`, so the domain is
`x ≠ 2`, or `(−∞, 2) ∪ (2, ∞)`.

*Step 2 — Intercepts.* y-intercept: `r(0) = 3/(−2) = −1.5`.
x-intercepts: `3/(x − 2) = 0` has no solution — the numerator is never
zero. No x-intercepts.

*Step 3 — Asymptotes.* The excluded value `x = 2` with a nonzero
numerator nearby means the function blows up there: check
`r(1.9) = 3/(−0.1) = −30` and `r(2.1) = 3/0.1 = 30` — vertical
asymptote `x = 2`. As `x → ±∞`, the denominator dominates and
`r(x) → 0`: horizontal asymptote `y = 0`.

*Step 4 — Increase/decrease.* Pick test values left of the asymptote:
`r(−1) = −1`, `r(0) = −1.5`, `r(1) = −3` — falling as x rises, so
decreasing on `(−∞, 2)`. Right of it: `r(3) = 3`, `r(4) = 1.5`,
`r(5) = 1` — falling again, decreasing on `(2, ∞)`. No turning points,
so no extrema.

*Step 5 — Symmetry.* Not even or odd about the y-axis/origin — but
check the point `(2, 0)` where the asymptotes cross:
`r(2 + h) = 3/h` and `r(2 − h) = −3/h`, which are opposites. Every point
`(2 + h, 3/h)` pairs with `(2 − h, −3/h)`: half-turn symmetry about
`(2, 0)`. The center moved with the graph.

*Step 6 — End behavior.* `x → −∞ ⇒ r(x) → 0⁻` (approaches 0 from
below — the test values were negative); `x → ∞ ⇒ r(x) → 0⁺`.

*Step 7 — Range.* The horizontal asymptote `y = 0` is never reached
(no x-intercept), and on each branch the function covers every other
value: range is `y ≠ 0`.

*Sketch, then verify.* Dashed lines `x = 2` and `y = 0`, points
`(0, −1.5)`, `(1, −3)`, `(3, 3)`, `(4, 1.5)`, two decreasing branches
hugging the asymptotes. Desmos matches.

## Guided practice

1. Analyze `h(x) = √(x − 3) + 1` through all eight steps. Sketch it
   from your analysis, then verify with Desmos. [Hint: the square
   root forces a starting value for the domain — where does the
   graph *begin*?]
2. Analyze `k(x) = 2ˣ − 3` through all eight steps. Find the
   x-intercept exactly (a logarithm is allowed), describe the end
   behavior as `x → −∞`, and name the asymptote. [Hint: what happens
   to `2ˣ` when x is a large negative number?]
3. Analyze `ℓ(x) = ln(x + 2)` through all eight steps. Give the exact
   x-intercept and y-intercept, the vertical asymptote, and the end
   behavior on each side. [Hint: a logarithm needs a positive
   argument — what x-values does that rule out?]
4. **Error analysis.** A classmate analyzes the piecewise function
   `p(x) = { 2x + 1, x < 1; −x + 4, x ≥ 1 }` and claims: "Each piece
   is a line, and lines have range all real numbers, so the range of
   `p` is all real numbers." Find the flaw, give the correct range
   with reasoning, and check whether the graph is continuous at
   `x = 1`.

## Independent practice

1. Analyze `s(x) = sin x` through all eight steps. For
   increase/decrease and extrema, describe one full period
   `[0, 2π]` precisely, then state how the pattern repeats. What is
   the end behavior as `x → ∞` — and why is "it approaches a value"
   the wrong kind of answer here?
2. Analyze `q(x) = (x + 1)/(x − 3)` through all eight steps,
   including the range (solve `y = (x + 1)/(x − 3)` for x to find
   which y-value never occurs). Sketch from your analysis, then
   verify with Desmos.
3. **Explain your reasoning.** Two students debate end behavior.
   Student A: "For large positive x, `2ˣ` eventually outgrows `x³`,
   so exponential end behavior is 'stronger' than polynomial end
   behavior." Student B: "Both go to infinity, so they're the same."
   Who is more correct, and what test with actual numbers would
   settle it? (Try `x = 20` in both.)
4. Take `h(x) = √(x − 3) + 1` from Guided Practice 1. Predict the
   domain, range, and starting point of `n(x) = −h(x) + 4` using the
   transformation table (no new analysis from scratch), then verify
   with one quick Desmos check.

## Application

A baker tracks the temperature of a loaf cooling on the counter. The
fitted model (fictional data) is `T(t) = 22 + 68(0.9)ᵗ`, where `t` is
minutes after the loaf leaves the oven and `T` is °C.

a) Which function family is this? Run the toolkit: domain (in
   context), range (in context), intercepts, and asymptotes.
   Interpret the horizontal asymptote in the baking situation.
b) Explain in words why the graph is decreasing, and what that says
   about the loaf.
c) The baker wants to slice the loaf when it reaches 40 °C. Solve
   `22 + 68(0.9)ᵗ = 40` for `t`, showing each algebra step, and
   check your answer by substituting back.

## Exit check

1. In one or two sentences: what is the difference between a
   vertical asymptote and a hole in a graph, and how do you tell
   which one a rational function has just by looking at its formula?
2. State the domain and range of `y = −√(x + 4) − 2`.

## Supports and extension

- **Reading/language access:** Keep a running "feature glossary" in
  your notebook: each of the eight steps gets a one-line definition
  plus a mini-sketch from this lesson's examples. The words
  *domain*, *range*, *intercept*, *asymptote*, *extremum*, and
  *symmetry* must appear with their sketches before you start
  Independent Practice.
- **Alternate response mode:** The sketch-then-verify step may be
  done as a narrated screen recording or a labeled two-column table
  ("my prediction" vs. "what Desmos showed, and which analysis step
  I fixed") instead of a hand-drawn sketch.
- **Extension:** Find the inverse of `r(x) = 3/(x − 2)` from
  Example 2, and run the eight-step analysis on the inverse.
  Which features moved, which stayed, and why does that make sense
  for an inverse?

## Teacher note

The most common failure is step-skipping: learners compute intercepts
and then sketch from memory of the "parent shape," ignoring the
asymptote and end-behavior steps — exactly the steps that distinguish
`3/(x − 2)` from a line. Require the dashed asymptotes drawn before
any curve is sketched. A second trap: reporting increase/decrease
intervals that include a vertical asymptote's x-value (e.g. "decreasing
on `(−∞, ∞)`" for Example 2). Intervals must never cross a point
outside the domain. Answer-key reference: `../answer-key.md` (adults-only file), Lesson 01.
