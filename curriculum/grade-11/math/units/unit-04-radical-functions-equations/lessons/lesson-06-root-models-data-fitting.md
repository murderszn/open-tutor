# Lesson 06 — Fitting Root Models to Data: Increments, Residuals, Choice

**Goal (learner hears):** "I can fit a square-root model to data,
compare it with a linear model using increments and residuals, and
defend the better model in writing — instead of guessing from the
shape of the dots."
**Time:** ~50 minutes · **Materials:** paper, pencil, graph paper,
calculator, the Lesson 05 pendulum data below (labeled fictional
practice data).
**Standards:** F-IF.4, F-IF.6, A-CED.2.

## Readiness check (5 min)

A dataset's successive outputs are 3, 5, 6.5, 7.75 for equally
spaced inputs. Are the increments constant, growing, or shrinking?
(2, 1.5, 1.25 — shrinking.) A linear model needs constant
increments; an exponential needs growing ones. Shrinking increments
point to a root (or logarithmic) shape — today's test.

## Explicit teaching

A **model** is an equation chosen to describe data. Choosing well
needs two tools, not one glance at a scatter plot:

**Increments.** For equally spaced inputs, compute successive
output differences. Constant differences fit a line. Growing
differences fit exponential growth. *Shrinking* differences fit a
root model: each extra unit of input buys less extra output, because
the root curve flattens. Increments are a **rate-of-change**
argument (F-IF.6): the average rate of change over each interval is
falling, which is exactly what a square-root function's graph does.

**Residuals.** A residual is `actual − predicted` for one data
point under a candidate model. A good model has small residuals
with no pattern — positives and negatives mixed. A bad model has
residuals with a *pattern* (for example, all positive in the
middle), which means the model is systematically wrong in a
predictable way, even if individual errors look small. Pattern
beats size: a model can be close everywhere and still be the wrong
shape.

**Fitting a root model by hand.** For pendulum-style data, the
theory gives the form: `T = a√L`, where `a` is one unknown number.
Estimate `a` from a reliable point — `a = T/√L` — and check it
against the others; if the estimates agree (up to rounding), the
form fits. Then compare with the best line through two extreme
points and read its residuals. The model with small, pattern-free
residuals wins, and the increment argument explains *why*.

### Modeled example 1 — pendulum data: root beats line

Fictional practice data (a pendulum timed with a hand stopwatch,
rounded to hundredths of a second, as the tool allows):

| Length `L` (m) | 0.10 | 0.25 | 0.40 | 0.60 | 0.90 |
|---|---|---|---|---|---|
| Period `T` (s) | 0.63 | 1.00 | 1.27 | 1.55 | 1.90 |

*Step 1 — increments.* The inputs are not equally spaced, so use
rates (change in `T` ÷ change in `L`): from 0.10 to 0.25,
`0.37/0.15 ≈ 2.47`; 0.25 to 0.40, `0.27/0.15 = 1.80`; 0.40 to 0.60,
`0.28/0.20 = 1.40`; 0.60 to 0.90, `0.35/0.30 ≈ 1.17`. The rates
fall steadily: shrinking increments, a root shape, not a line
(constant rates) and not exponential growth (rising rates).

*Step 2 — fit the root model.* Theory says `T = a√L`. From
`L = 0.25, T = 1.00`: `a = 1.00/√0.25 = 2.00`. From
`L = 0.90, T = 1.90`: `a = 1.90/√0.90 ≈ 2.00`. The
estimates agree, and the theoretical value is `a = 2π/√9.8 ≈
2.0066`. Predictions with `a ≈ 2.0066`, rounded to hundredths:
`L = 0.10 → 0.63`; `0.25 → 1.00`; `0.40 → 1.27`; `0.60 → 1.55`;
`0.90 → 1.90`. Residuals are 0.00 to 0.01 — rounding noise only, no
pattern.

*Step 3 — try the line, and watch the pattern.* A line through the
first and last points has slope `(1.90 − 0.63)/0.80 = 1.5875` and
equation `T = 1.5875L + 0.47125`. Its predictions: `0.25 → 0.87`
(actual 1.00, residual +0.13); `0.40 → 1.11` (actual 1.27, residual
+0.16); `0.60 → 1.42` (actual 1.55, residual +0.13). Every middle
residual is positive: the line sags below the data in the middle
and the data curve above it — the systematic signature of fitting
a line to a curve. The root model wins on both tests: shrinking
rates explain the shape, and its residuals are pattern-free.

### Modeled example 2 — a cube-root model, defended in one paragraph

A cube's edge `s` (cm) is measured against its volume `V` (cm³):
`V = 8 → s = 2`; `27 → 3`; `64 → 4`; `125 → 5`. The model
`s = ∛V` predicts each exactly. A linear model through (8, 2) and
(125, 5) has slope `3/117 ≈ 0.0256` and predicts `s(27) ≈ 2.49`
(actual 3, residual +0.51) and `s(64) ≈ 3.44` (actual 4, residual
+0.56) — again, positive middle residuals, the curve-above-line
pattern. Defense, in full: "The increments of `s` shrink as `V`
grows (1 cm of edge per 19 cm³, then per 37, then per 61), which
matches a root's flattening, not a line's constancy; the cube-root
model's residuals are zero, while the line's residuals are
systematically positive in the middle. So `s = ∛V` is the better
model, and it also matches the geometry: edge is defined as the
cube root of volume."

## Guided practice

1. A dataset has outputs 2, 4, 8, 16 for equally spaced inputs.
   Which family — linear, root, or exponential — do the
   increments suggest, and why? *(Hint: differences 2, 4, 8.)*
2. A model predicts 5.0, 7.0, 9.0 for actual values 5.2, 7.1, 8.8.
   Compute the residuals and say whether they show a pattern.
   *(Hint: actual − predicted, in order.)*
3. For the pendulum data above, predict `T` at `L = 0.50` m with
   `T = 2.01√L`, and say how many decimals the answer deserves.
   *(Hint: the stopwatch reads hundredths; √0.50 ≈ 0.7071.)*

## Independent practice

See [Practice Set F](../practice.md#practice-set-f) (items F1–F6).

## Application

A town's water tank drains so that the volume remaining after `t`
minutes is modeled by `V(t) = 50 − 8√t` liters (fictional practice
model). When is the tank empty, and why is the domain in context
restricted even though square roots allow more? (Set
`50 − 8√t = 0`: `√t = 6.25`, so `t = 39.0625` minutes — about 39.1
minutes at stopwatch precision. Domain in context: `t ≥ 0`, and
`t ≤ 39.0625`, because a negative volume is meaningless; the model
itself would keep decreasing past empty, so the context, not the
equation, cuts the domain off. A model is only as honest as its
domain statement.)

## Exit check

In one sentence each, state what shrinking increments suggest and
what patterned residuals prove. (Shrinking increments suggest a
root-shaped (flattening) relationship. Patterned residuals prove
the candidate model has the wrong shape, even if its errors look
small.)

## Supports and extension

- **Reading/language access:** keep the two tests in fixed order
  — increments first (shape), residuals second (fit) — and name
  which test is being used in every sentence of a model defense.
- **Alternate response mode:** a learner may present residuals as
  a table with a "pattern?" column instead of prose.
- **Extension:** fit `T = a√L` to the pendulum data by least
  squares reasoning (choose `a` to minimize the sum of squared
  residuals) and compare with the `a ≈ 2.01` estimate; explain why
  the theoretical `2π/√9.8` is the better final value even if a
  fitted `a` is slightly closer to these five rounded points.
  (Fitting rounded data exactly overfits the rounding.)

## Teacher note

Likely misconceptions: (1) choosing a model from the scatter plot's
look alone; (2) treating a small maximum residual as proof of a
good model when the residuals are patterned; (3) reporting model
predictions to calculator precision instead of tool precision.
Reteach: shape first (increments), fit second (residuals), and
always write the domain restriction the context imposes.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-06).
