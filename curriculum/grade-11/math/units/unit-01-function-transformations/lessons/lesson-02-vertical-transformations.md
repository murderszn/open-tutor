# Lesson 02 — Vertical Shifts and Vertical Scaling

**Unit 01 · Session S3 · ~50 minutes**
**Standards:** F-BF.3, F-IF.4, F-IF.7

## Student goal

By the end of this lesson I can predict what happens to a graph when I
replace `f(x)` by `f(x) + k` or `kf(x)`, for positive and negative `k`;
verify my prediction; and work backwards — find `k` when I'm given the
two graphs.

## Materials

Notebook, pencil, graph paper or Desmos (free, no account).

## Readiness check (5 min)

1. Plot the points of `f(x) = x²` for `x = −2, −1, 0, 1, 2`. Mark the
   vertex.
2. If every y-value in your table increased by 3, which points would
   change? Which point would be the new vertex?

## Explicit teaching

A **transformation** rebuilds a graph from a parent function by changing
its inputs or its outputs in a predictable way. The key habit of this
lesson: **predict first, then verify.** Say what the graph should do,
*then* compute or graph.

**Vertical shift: `g(x) = f(x) + k`.** Adding `k` to the *output* adds
`k` to every y-coordinate. Every point `(a, b)` on the graph of `f`
moves to `(a, b + k)`. The shape does not change; the whole picture
slides up (`k > 0`) or down (`k < 0`).

**Vertical scaling: `g(x) = kf(x)`.** Multiplying the *output* by `k`
multiplies every y-coordinate by `k`. The x-coordinates don't move.

- `|k| > 1`: **vertical stretch** — the graph gets taller (points move
  away from the x-axis).
- `0 < |k| < 1`: **vertical compression** — the graph gets flatter
  (points move toward the x-axis).
- `k = −1`: **reflection across the x-axis** — every `(a, b)` becomes
  `(a, −b)`.
- `k < 0` generally: reflect *and* stretch/compress.

**What survives, what moves.** Under a vertical shift, x-intercepts move
(they slide with the graph), but the *shape* and the domain stay the
same. Under vertical scaling, the x-intercepts stay put (multiplying
zero by `k` still gives zero — a fact worth checking), the y-intercept
scales by `k`, and relative maxima/minima move to `k` times their old
heights. Tracking one landmark point (often the vertex or the
y-intercept) is the fastest way to verify a prediction.

**Finding `k` backwards.** If you can read one matched pair of points —
`(a, b)` on `f` and `(a, b′)` on `g = f + k` — then `k = b′ − b`.
For `g = kf`, matched points give `k = b′/b` (using a point with
`b ≠ 0`). One pair is enough when you already know the transformation
type; the rest of the points are your verification.

## Worked examples (modeled reasoning)

**Example 1 — Predict, then verify: vertical shift and stretch.**

Let `f(x) = x²`. Predict the graph of `g(x) = 2f(x) − 3 = 2x² − 3`
before graphing it.

*Reasoning.* First the prediction: `−3` is added to the output, so the
whole parabola slides down 3. The factor 2 multiplies every output, so
the graph stretches vertically by 2 — it gets narrower (steeper). Order
check: I read the formula as "take `f(x)`, double it, then subtract 3,"
and the vertex `(0, 0)` should land at `(0, 2·0 − 3) = (0, −3)`.

Now verify with a table:

| x | f(x) = x² | g(x) = 2x² − 3 |
|---|---|---|
| −2 | 4 | 5 |
| −1 | 1 | −1 |
| 0 | 0 | −3 |
| 1 | 1 | −1 |
| 2 | 4 | 5 |

The table confirms it: the vertex moved to `(0, −3)`, and the arms rise
faster — at `x = 2` the height went from 4 to 5, which is `2·4 − 3`.
Prediction matched; the habit holds. Note the domain is unchanged
(all real numbers) and the range moved from `[0, ∞)` to `[−3, ∞)`.

**Example 2 — Work backwards to find `k`.**

The graph of `f` passes through `(1, 4)`, `(2, 7)`, and `(3, 12)`. The
graph of `g(x) = kf(x)` passes through `(1, −8)`, `(2, −14)`, and
`(3, −24)`. Find `k` and describe the transformation.

*Reasoning.* For `g = kf`, each output is `k` times the matching
`f`-output. Take the pair `(1, 4) → (1, −8)`: `−8 = k·4`, so `k = −2`.
Cross-check with the other pairs: `k·7 = −14` ✓; `k·12 = −24` ✓.
So `g(x) = −2f(x)`: a vertical stretch by factor 2 combined with a
reflection across the x-axis. The verification step is not optional —
one pair proposes `k`, the other pairs confirm it.

**A landmark-tracking shortcut.** For `y = a(x − h)² + k` (vertex form),
the vertex `(h, k)` is the landmark: whatever happens to it happens to
the whole graph. `y = −2(x − 1)² + 5` has vertex `(1, 5)` — shifted
right 1, up 5, stretched by 2, reflected. Tracking the vertex plus one
more point (say `(0, 3)`) nails the whole picture.

## Guided practice

1. Let `f(x) = |x|`. Predict the vertex and shape of `g(x) = f(x) − 4`;
   then verify with a 5-point table. [Which moves: x-values or
   y-values?]
2. Predict the effect of `h(x) = −(1/2)f(x)` on the parabola
   `f(x) = x² − 1`, tracking the vertex `(0, −1)`. Then verify the
   vertex lands where you said. [Negative means reflect; `1/2` means
   compress.]
3. `f` passes through `(0, 2)` and `(4, 6)`; `g(x) = f(x) + k` passes
   through `(0, −1)` and `(4, 3)`. Find `k`. [Match one pair;
   verify with the other.]
4. Explain in two sentences why a vertical stretch never moves an
   x-intercept. [What is the y-value at an x-intercept?]

## Independent practice

1. For `f(x) = √x` (domain `x ≥ 0`): predict and then table-verify the
   graphs of `g(x) = f(x) + 2` and `h(x) = 3f(x)`. State each
   transformation in words and give the range of each new function.
2. Write the function whose graph is the graph of `f(x) = x³` shifted
   down 5 and reflected across the x-axis. Then find its value at
   `x = 2` and check it by tracking the point `(2, 8)`.
3. The graphs of `f` and `g(x) = kf(x)` are shown to the learner (adult
   supplies or sketches: `f` through `(0,1)`, `(1,2)`, `(2,4)`; `g`
   through `(0,2)`, `(1,4)`, `(2,8)`). Find `k` and describe the
   transformation.
4. A common error: "The graph of `y = 2x² + 1` is the graph of
   `y = x²` stretched by 2 and shifted up 1, so its vertex is
   `(0, 2)`." Find and fix the error. (Answer in one short paragraph:
   what is the actual vertex, and where did the reasoning go wrong?)
5. `p(x) = −x² + 4x`. Complete the square to vertex form, identify the
   vertex, and describe the transformations of `y = x²` that produce
   `p` — in the order they should be applied. Check your vertex by
   evaluating `p` at the x-coordinate you found.

## Application

A small bakery models its Saturday profit (dollars) as a function of
dozens of muffins sold: `P(d) = −2d² + 80d − 200`.

a) Complete the square to find the vertex; interpret it (dozens for
   maximum profit, and that profit).
b) A new ingredient raises costs by $50 per Saturday regardless of
   volume. Write the new profit function as a transformation of `P`
   and predict the new maximum profit before computing it.
c) If instead the bakery *doubles its prices* (revenue term only —
   the model isn't that simple, and part of the task is noticing),
   explain in words why `2P(d)` would be the wrong model for
   "double the prices." What does `2P(d)` actually assume?

## Exit check

1. In your own words: what does the `+ k` in `f(x) + k` act on — the
   inputs or the outputs? How does that explain the direction of the
   shift?
2. `f(3) = 10`. If `g(x) = −3f(x) + 1`, what is `g(3)`? Show the steps.

## Supports and extension

- **Reading/language access:** The words *stretch*, *compress*,
  *reflect*, and *shift* each get a notebook sketch: one parent curve
  and its transformed partner, labeled with the `k` value.
- **Alternate response mode:** Predictions may be drawn as arrows on a
  printed parent graph (up/down arrows for shifts, away/toward arrows
  for stretches) instead of written in sentences.
- **Extension:** Prove that a vertical stretch by `k ≠ 0` preserves the
  set of x-intercepts of any function, and that a vertical shift by
  `k ≠ 0` preserves the domain but may change the number of
  x-intercepts. Give an example of each.

## Teacher note

The stubborn misconception is applying horizontal intuition to vertical
changes ("`+3` moves right" — that error belongs to Lesson 03's
territory; correct the axis, not just the direction). Learners also
forget to track *which* point they used for verification — require the
landmark point written next to every prediction. Answer-key reference:
`answer-key.md`, Lesson 02.
