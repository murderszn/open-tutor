# Lesson 01 — Exponential Functions: Equal Factors, Percent Rate, and the Graph

**Goal:** write, evaluate, and graph `f(x) = a·b^x`, naming the initial
value, base, percent rate, asymptote, intercepts, domain, range, and
end behavior.

**Time:** about 100 minutes across Sessions 1–2. **Materials:**
graphing calculator or Desmos, this lesson, Practice Set A.

## Readiness check (5 minutes)

1. Evaluate `3 · 2^4` and `3 · (1/2)^2`.
2. A quantity increases by 6 each hour. A second quantity doubles each
   hour. Which one grows by equal *differences*? Which by equal
   *factors*?
3. What is `b^0` for any nonzero `b`? What does that say about the
   graph of `f(x) = a·b^x` at `x = 0`?

(Answers in the answer key. If item 1 is shaky, re-teach exponent
order of operations before continuing: the exponent acts before the
multiplication by `a`.)

## Teaching

### The form

An **exponential function** has the variable in the exponent:

> `f(x) = a · b^x`, where `a ≠ 0`, `b > 0`, and `b ≠ 1`.

- `a` is the **initial value**: `f(0) = a · b^0 = a`.
- `b` is the **base** or **growth/decay factor**: each time `x`
  increases by 1, the output is multiplied by `b`.
- If `b > 1`, the function **grows**; if `0 < b < 1`, it **decays**.
- `b = 1` is excluded because `a · 1^x = a` is constant, not
  exponential; `b ≤ 0` is excluded because expressions like
  `(-2)^(1/2)` are not real numbers for every real `x`.

The **percent rate** is read straight off the base: write
`b = 1 + r` for growth or `b = 1 − r` for decay, where `r` is the rate
as a decimal. A base of 1.03 is a 3% increase per step; a base of 0.92
is an 8% decrease per step, because `0.92 = 1 − 0.08`.

### The graph

Every exponential graph shares the same skeleton, whatever `a` and `b`
are (for `a > 0`):

- It crosses the y-axis at `(0, a)` — there is no x-intercept, because
  `b^x` is never 0.
- It approaches, but never reaches, the horizontal line `y = 0` — the
  **horizontal asymptote**.
- For growth (`b > 1`): as `x → ∞`, `f(x) → ∞`; as `x → −∞`,
  `f(x) → 0`. Domain: all real numbers. Range: `y > 0`.
- For decay (`0 < b < 1`): the ends swap — as `x → ∞`, `f(x) → 0`;
  as `x → −∞`, `f(x) → ∞`. Domain and range are the same as for growth.
- If `a < 0`, the whole graph reflects across the x-axis: it sits
  below the asymptote, with range `y < 0`.

A table is the safest way to start a sketch: pick `x = −1, 0, 1, 2`,
compute, plot, and then draw the smooth curve through them, bending
toward the asymptote rather than crossing it.

### Worked example 1 — growth in a culture

A bacterial culture starts with 200 cells and doubles every hour, so
`P(t) = 200 · 2^t`, where `t` is hours.

- Initial value: `P(0) = 200`. Base 2 means a 100% increase per hour
  (`2 = 1 + 1.00`).
- After 3 hours: `P(3) = 200 · 2^3 = 200 · 8 = 1600` cells.
- Table: `t = −1 → 100` (one hour *before* the start, the model
  extends backward: `200 · 2^(−1) = 100`), `0 → 200`, `1 → 400`,
  `2 → 800`, `3 → 1600`. Each step multiplies by 2 — equal factors,
  not equal differences: the differences 100, 200, 400, 800 themselves
  double.
- Graph: y-intercept `(0, 200)`, asymptote `y = 0`, increasing, bending
  upward. Domain: all real `t` (in context, `t ≥ −1` is where the
  story makes sense, but the function itself is defined everywhere).

### Worked example 2 — decay in value

A machine worth $5,000 loses 8% of its value each year:
`V(t) = 5000 · (0.92)^t`, where `t` is years.

- Base 0.92 = `1 − 0.08`, so the decay rate is 8% per year. A common
  error is to read "0.92" as "92% lost"; it is 92% *remaining*.
- After 3 years: `V(3) = 5000 · (0.92)^3 = 5000 · 0.778688 = 3893.44`,
  so about $3,893.44.
- Graph: y-intercept `(0, 5000)`, asymptote `y = 0`, decreasing toward
  the asymptote, never touching it. After 10 years the model still
  gives a positive value (`5000 · 0.92^10 ≈ $2,172`), which is a
  modeling warning worth stating: real machines are eventually
  scrapped, so the model is trusted only for the years it was built
  for.
- Check by an independent route: year 1 is `5000 · 0.92 = 4600`;
  year 2 is `4600 · 0.92 = 4232`; year 3 is `4232 · 0.92 = 3893.44`. ✓

## The generated illustration — the doubling pond

![A watercolor pond partly covered with round green lily pads and pink lily flowers, with reeds at the banks and open water still visible](../assets/lily-pond-doubling.png)

*Caption: An AI-generated illustration of a pond whose lily pads are
spreading across the water. The picture is an illustration, not a
measurement: do not count pads in it. The doubling rule in the task
below is the data.*

**Text-only alternative:** a pond with lily pads spreading over part
of its surface and open water remaining. Suppose the pad coverage
doubles every day and covers the whole pond on day 30.

**Applied task — the doubling pond.** The pads double in area every
day and cover the whole pond on day 30.

1. On what day were the pads covering half the pond? A quarter?
2. Write coverage as a fraction of the pond on day `t`, as
   `C(t) = 2^(t − 30)`, and check it at `t = 30`, `29`, and `28`.
3. What fraction was covered on day 25? Explain, without a
   calculator, why day 29 (not day 15) is the half-covered day —
   the trap in this problem is thinking "half the time means half
   the coverage," which is true for linear growth and false here.

## Guided practice

1. For `f(x) = 3 · (1.5)^x`, state `a`, `b`, the percent rate, and
   whether it grows or decays. Evaluate `f(2)`.
2. Write the exponential function for: starts at 80, decreases by 25%
   per step. Evaluate at step 2.
3. Sketch `g(x) = 4 · (1/2)^x` from the table `x = −1, 0, 1, 2`.
   Label the intercept and the asymptote and state the range.
4. A population is `P(t) = 1200 · (1.03)^t`. What is the percent
   growth rate? Compute `P(10)` to the nearest whole animal — and
   say why "nearest whole animal" is a modeling judgment, not a
   mathematical fact (the model is continuous; real populations
   count in whole animals, so rounding is a reporting choice).
5. True or false, with a reason: "An exponential decay function
   eventually reaches zero." (False — it approaches zero; `b^x > 0`
   always.)

## Independent practice

Do Practice Set A (practice.md). Then:

1. `h(x) = 250 · (0.8)^x`: find the decay rate, `h(3)`, and the
   horizontal asymptote.
2. Explain in two sentences why `f(x) = 5^x` and `g(x) = 5^(−x)` are
   reflections of each other across the y-axis, and which one decays.

## Exit check

1. Give the initial value and percent rate of `y = 60 · (1.12)^x`.
2. Does `y = 60 · (1.12)^x` have an x-intercept? Why or why not?

## Supports and extensions

- **Support:** if percent-rate reading is shaky, convert every base
  first: `1.12 → +12%`, `0.86 → −14%`, `2 → +100%`, `0.5 → −50%`,
  before any evaluation.
- **Extension:** show that `f(x) = 5 · (1.02)^(12t)` describes a 2%
  monthly rate over `t` years, and compute the equivalent yearly
  factor `(1.02)^12 ≈ 1.268`, a 26.8% yearly rate — the first step
  toward Lesson 06's rate-conversion work (A-SSE.3.c).
- **Reading/language access:** "factor" here means "multiplier," not
  the factoring of Unit 02; "rate" here means percent per step, not a
  speed.

## Teacher note

Likely misconceptions: (a) reading the base as the percent itself
(0.92 misread as 92% decay); (b) drawing a decay graph that crosses
the asymptote and goes negative; (c) believing doubling means "add
the same amount twice." Answer-key reference: answer-key.md,
Lesson 01.
