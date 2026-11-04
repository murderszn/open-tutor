# Lesson 06 — Logarithmic Graphs and Exponential Modeling

**Goal:** graph transformed logarithmic functions (domain, asymptote,
intercepts, end behavior) and fit exponential models to data, judging
fit with rates of change and residuals.

**Time:** about 100 minutes across Sessions 11–12. **Materials:** this
lesson, Practice Set F, graphing technology or a spreadsheet.

## Readiness check (5 minutes)

1. State the domain, x-intercept, and vertical asymptote of
   `y = log_2(x)`.
2. For `y = log_2(x − 1) + 2`, what replaces `x` in the argument,
   and what does the `+ 2` do to the graph?
3. A dataset has ratios 1.5, 1.5, 1.5 between successive outputs.
   Write its model form, given the first output is 150.

(Answers in the answer key.)

## Teaching

### Graphing a logarithmic function

Start from the parent `y = log_b(x)` (base `b > 1`): vertical
asymptote `x = 0`, x-intercept `(1, 0)`, increasing, domain `x > 0`,
range all real numbers. Transformations move those features the way
Unit 01 taught:

- `y = log_b(x − h) + k`: the asymptote moves to `x = h` (the
  argument must stay positive: `x − h > 0`), the graph shifts up by
  `k`, and the x-intercept moves to the point where the argument
  equals 1 (because `log_b(1) = 0`).
- `y = a·log_b(x)` with `a < 0` reflects across the x-axis and
  becomes decreasing — the same reflection idea as Lesson 03, now
  with a multiplier.

The domain is always the first thing written: solve
"argument > 0" before any other feature.

### Worked example 1 — a transformed logarithm, feature by feature

Graph `f(x) = log_2(x − 1) + 2`.

- **Domain:** `x − 1 > 0`, so `x > 1`.
- **Vertical asymptote:** `x = 1` (as `x → 1+`, `f(x) → −∞`).
- **x-intercept:** set `f(x) = 0`: `log_2(x − 1) = −2`, so
  `x − 1 = 2^(−2) = 1/4`, `x = 1.25`. Intercept: `(1.25, 0)`.
- **No y-intercept:** `x = 0` is outside the domain.
- **End behavior:** as `x → ∞`, `f(x) → ∞`, slowly — logarithmic
  growth is the slowest of the families in this course, which is why
  it is the inverse of the fastest.
- **Check points:** `x = 2 → log_2(1) + 2 = 2`; `x = 5 →
  log_2(4) + 2 = 4`; `x = 9 → log_2(8) + 2 = 5`. Plot `(1.25, 0)`,
  `(2, 2)`, `(5, 4)`, `(9, 5)` and draw the curve bending toward the
  asymptote at `x = 1`.

### Fitting an exponential model

Given data that looks exponential, there are two honest routes:

1. **Two-point fit (by hand).** From two points, solve for `a` and
   `b` in `y = a·b^x`. With points `(0, 150)` and `(2, 338)` (rounded
   from the culture data below), `a = 150`, and `150·b² = 338`, so
   `b² ≈ 2.253`, `b ≈ 1.501` — about 1.5, as the data's ratios
   suggested.
2. **Technology fit.** A spreadsheet or Desmos exponential regression
   uses all the points and reports the best `a` and `b`; it is the
   right tool when the ratios are only *approximately* constant.

Then judge the fit. A **residual** is `observed − predicted` for each
point. Small residuals scattered on both sides of zero mean a good
fit; residuals that grow in one direction mean the model is missing
something (a changing rate, a cap, a wrong family). A model is also
judged by its parameters: does the percent rate make sense in the
context, and does the prediction stay inside the range where the
data was collected? Extrapolating far beyond the data — predicting
year 20 from four years of data — is where exponential models most
often mislead, because small rate errors compound.

### Worked example 2 — fitting, residuals, and a limit

A culture is counted (fictional practice dataset, counts rounded):

| `t` (hours) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Count | 150 | 225 | 338 | 506 | 759 |

Ratios: `225/150 = 1.5`; `338/225 ≈ 1.502`; `506/338 ≈ 1.497`;
`759/506 = 1.5`. The signature is exponential, factor about 1.5.

Model: `C(t) = 150 · 1.5^t`. Predictions: `t = 0 → 150`;
`1 → 225`; `2 → 337.5` (observed 338, residual +0.5);
`3 → 506.25` (observed 506, residual −0.25);
`4 → 759.375` (observed 759, residual −0.375). Residuals under 1
count on counts in the hundreds: an excellent fit, and the residuals
come from rounding, not from a wrong model.

Prediction at `t = 8`: `150 · 1.5^8 ≈ 150 · 25.629 ≈ 3844`. State
the limit with the prediction: this assumes unlimited food and space
for 8 hours; a real culture saturates, so 3,844 is a model
projection, not a promise. A learner who reports the number without
the limit has done half the task.

### Applied task — rate conversion (A-SSE.3.c)

A bank advertises "2% per month, compounded monthly." A learner
claims that is "24% per year." Test the claim: the yearly factor is
`1.02^12 ≈ 1.2682`, so the effective yearly rate is about 26.8%,
not 24% — compounding means each month's interest earns interest in
later months. Write the yearly model two ways: `A(t) = A_0 ·
1.02^(12t)` (months counted inside) and `A(t) = A_0 · 1.2682^t`
(years counted directly), and verify they agree at `t = 1` and
`t = 2` (`1.02^24 ≈ 1.6084`; `1.2682² ≈ 1.6084`). ✓

## Guided practice

1. For `g(x) = log_3(x + 2) − 1`, state the domain, asymptote, and
   x-intercept.
2. A dataset has outputs 200, 260, 338, 439 at `x = 0, 1, 2, 3`.
   Ratios are about 1.3 each time. Write the model and predict at
   `x = 5`, with a limit sentence.
3. Fit by hand: points `(0, 80)` and `(3, 640)` on `y = a·b^x`.
   Find `a` and `b`. (Answer: `a = 80`; `80b³ = 640`, `b³ = 8`,
   `b = 2`; model `y = 80 · 2^x`.)
4. Residual check: a model predicts 100, 150, 225 for observations
   98, 155, 220. Compute the residuals and judge the fit in one
   sentence.
5. True or false, with a reason: "A logarithmic function has a
   horizontal asymptote." (False — it has a *vertical* asymptote
   where its argument is 0; its end behavior is unbounded growth,
   not approach to a line.)

## Independent practice

Do Practice Set F (practice.md). Then:

1. Graph `h(x) = log_2(x) − 3` and `k(x) = −log_2(x)` on the same
   axes (by hand, using the reflection table from Lesson 03), and
   describe in one sentence how each differs from `y = log_2(x)`.
2. A decaying dataset (fictional practice data): 500, 400, 320, 256
   at `t = 0, 1, 2, 3`. Fit the model, predict `t = 6`, and state
   one reason the prediction might fail in a real situation.
   (Ratio 0.8; model `500 · 0.8^t`; `t = 6 → 500 · 0.262144 ≈
   131.07`, about 131; real decay often slows as the remaining
   amount approaches a floor, or the process stops.)

## Exit check

1. Domain and asymptote of `y = ln(x − 4)`.
2. A model predicts values 10% above every observation. Are its
   residuals positive or negative, and what does that pattern
   suggest? (Residual = observed − predicted, so negative;
   a systematic bias, not random error — the model's initial value
   or rate is too high.)

## Supports and extensions

- **Support:** for any log graph, write "argument > 0" first, then
  the asymptote, then the intercept (argument = 1) — in that order,
  every time.
- **Extension:** use logarithms to linearize: if `y = a·b^x`, then
  `log(y) = log(a) + x·log(b)`, so a plot of `log(y)` against `x`
  is a straight line with slope `log(b)`. Apply it to the culture
  data and recover `b ≈ 1.5` from the slope.
- **Reading/language access:** "residual" means "what is left over
  after the model" — observed minus predicted; "extrapolation"
  means predicting outside the observed range.

## Teacher note

Likely misconceptions: (a) giving a log graph a horizontal
asymptote; (b) finding the x-intercept by setting the *argument*
to 0 instead of the *function* to 0; (c) reporting a fitted
prediction without its limit. Answer-key reference: answer-key.md,
Lesson 06.
