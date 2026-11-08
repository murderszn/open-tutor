# Project — The Pendulum Period Investigation

**Driving question:** Does a pendulum's period really grow with
the square root of its length — and can you prove it from data you
collected or simulated yourself, rather than taking the formula on
faith?

## Background

For small swings, a pendulum of length `L` meters has period
`T = 2π√(L/g)` seconds, with `g = 9.8` m/s². The formula claims a
square-root relationship: quadrupling the length only doubles the
period. Your job is to test that claim with your own measurements,
fit the model `T = a√L`, compare it with a linear model, and write
a short technical memo defending your conclusion.

## Choose one route (adult approves the choice)

- **Route 1 — Home experiment (adult-supervised).** A string, a
  small weight (a washer, a key, or a metal nut), a ruler or tape,
  and a stopwatch. Tie the weight to the string, fix the other end
  to a stable support (a doorway pull-up bar, a clamped ruler, a
  bookshelf edge — nothing that can fall), and keep swings small
  (under about 15 degrees from vertical) with nothing breakable in
  the swing path. Measure the string from the support to the
  weight's center. Time 10 full swings and divide by 10 — timing
  ten swings cuts stopwatch reaction error roughly tenfold.
  Repeat each length twice.
- **Route 2 — Simulation.** Use the PhET Pendulum Lab (see
  [resource-pack.md](resource-pack.md)): set the length, release
  from a small angle, and read the period. Record the same five
  lengths as Route 1.
- **Route 3 — Provided data.** Use this fictional practice dataset
  (labeled fictional: it stands in for measurements you did not
  take, so your memo must say so):

  | Length `L` (m) | 0.20 | 0.35 | 0.55 | 0.75 | 1.00 |
  |---|---|---|---|---|---|
  | Period `T` (s) | 0.90 | 1.19 | 1.49 | 1.74 | 2.01 |

  Route 3 learners still do every analysis step; only the
  collection step is replaced, and the memo must state that.

## Steps

1. **Plan (Session S10).** State your route, your five lengths
   (0.20, 0.35, 0.55, 0.75, 1.00 m if you choose them, or your own
   spread from about 0.2 to 1.0 m), your timing method, and your
   units. State the domain restrictions: `L > 0` in context, and
   the small-angle condition.
2. **Collect.** Record length, time for 10 swings (Routes 1–2),
   period per swing, and a repeat trial. Average the two trials.
   Round periods to hundredths of a second — that is what a hand
   stopwatch supports.
3. **Graph.** Plot period against length by hand or with
   technology. Describe the shape in words before fitting anything.
4. **Fit the root model.** Estimate `a` in `T = a√L` from two
   different points and compare the estimates. Compare with the
   theoretical `a = 2π/√9.8 ≈ 2.0066`. Compute residuals for all
   five points.
5. **Challenge it with a line.** Fit a line through your first and
   last points, compute its residuals, and say which model's
   residuals are smaller and pattern-free.
6. **Predict and check.** Predict the period at `L = 0.50` m with
   your root model. (With the theoretical `a`, the prediction is
   `2.0066 · √0.50 ≈ 1.42` s.) If you used Route 1 or 2, measure at
   0.50 m and compare; if Route 3, compare with the theoretical
   value and comment on the agreement.
7. **Write the memo.** One page: question, method, data table,
   graph, fitted model, residual comparison, prediction, and
   conclusion — including the domain restrictions and the
   small-angle condition.

## Deliverables

1. Data table (lengths, timings, periods, repeats, averages).
2. Graph of period vs. length with both models drawn or described.
3. Residual tables for the root model and the line.
4. One-page technical memo with the prediction and the model
   defense.

## Rubric (40 points)

| Criterion | Full marks | Partial | Missing/weak |
|---|---|---|---|
| Data collection and units (8) | Five lengths, repeats, averages, hundredths precision, units on every column | Missing repeats or units (4) | Fewer than four lengths, no units (0–2) |
| Graph and shape description (8) | Axes labeled with units, points plotted, shape described as flattening/increasing before fitting | Plot without shape description (4) | No graph or wrong axes (0–2) |
| Root-model fit and residuals (10) | `a` estimated from two points, compared with 2.0066, residuals computed for all points | `a` from one point only, or residuals missing (5) | No fit attempted (0–2) |
| Line challenge and model defense (8) | Line fitted, residuals compared, defense uses both increments and residuals | One test only (4) | No comparison, or choice by looks alone (0–2) |
| Memo, prediction, domain (6) | Prediction at 0.50 m with check, domain and small-angle conditions stated, route honestly labeled (Route 3 says "fictional practice data") | Prediction or domain missing (3) | No memo, or Route 3 data presented as real measurements (0–1) |

**Safety and honesty notes.** Adult supervision for Route 1; small
angles only; stop if anything swings loose. Never present Route 3
data as measurements you took — a memo that does so loses the memo
points and must be rewritten. If a measured period disagrees with
the model by more than about 0.1 s, say so in the memo and suggest
a cause (angle too large, length measured to the wrong point,
timing error) instead of hiding the point.
