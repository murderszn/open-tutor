# Lesson 02 — Comparing Growth: Linear, Quadratic, and Exponential

**Goal:** distinguish linear, quadratic, and exponential models from
tables, graphs, and descriptions, and compute and interpret average
rates of change.

**Time:** about 50 minutes (Session 3), plus the Session 4 workshop.
**Materials:** this lesson, Practice Set B, graphing technology.

## Readiness check (5 minutes)

1. Find the differences between successive outputs: 10, 16, 22, 28.
2. Find the ratios between successive outputs: 10, 20, 40, 80.
3. A function has outputs 10, 13, 18, 25. First differences are
   3, 5, 7. What are the second differences, and are they constant?

(Answers in the answer key. Item 3 is the quadratic signature; if it
is new, work it slowly — it is the whole lesson in miniature.)

## Teaching

### Three signatures

Over equal intervals, each family leaves a fingerprint in a table:

| Family | Signature over equal intervals | Example |
|---|---|---|
| Linear | Equal **differences** | 10, 16, 22, 28 (difference 6) |
| Exponential | Equal **factors** (ratios) | 10, 20, 40, 80 (ratio 2) |
| Quadratic | Equal **second differences** | 10, 13, 18, 25 (first differences 3, 5, 7; second difference 2) |

The signature is a *test*, not a label to guess from the shape of a
graph. Two different families can look alike over a short interval;
the table test decides. In real data, ratios and differences are
rarely exactly constant, so the test becomes "which signature is
*closest*?" — that is Lesson 06 and the project.

In symbols: a linear function grows by equal differences
(F-LE.1.a); an exponential function grows by equal factors
(F-LE.1.b–c: a constant percent rate per unit interval). A quadratic
function's first differences grow linearly, so its second differences
are constant.

### Average rate of change

For a function `f` on an interval `[a, b]`, the **average rate of
change** is

> `[f(b) − f(a)] / (b − a)`

— the slope of the secant line, the average "output per input" over
that interval. For a linear function it is the same on every interval
(it is the slope). For an exponential function it *grows with the
interval itself*: later intervals have larger average rates, because
the function is multiplying, not adding.

### Worked example 1 — classifying three tables

Table A: `x = 0, 1, 2, 3` → `y = 5, 9, 13, 17`.
Differences: 4, 4, 4 — constant. **Linear**, slope 4:
`y = 5 + 4x`.

Table B: `x = 0, 1, 2, 3` → `y = 5, 15, 45, 135`.
Ratios: 3, 3, 3 — constant. **Exponential**, factor 3:
`y = 5 · 3^x`.

Table C: `x = 0, 1, 2, 3` → `y = 2, 5, 12, 23`.
First differences: 3, 7, 11. Second differences: 4, 4 — constant.
**Quadratic**. (Check: `y = 2x² + x + 2` gives 2, 5, 12, 23. ✓)

The discipline here is to compute *before* naming. A learner who
says "it curves, so it's exponential" has skipped the test — and
Table C curves too.

### Worked example 2 — the eventual winner, and the crossover

A town's population grows two ways in two competing models:

- Linear: `L(t) = 1200 + 40t`.
- Exponential: `E(t) = 1200 · (1.03)^t` (3% per year).

At `t = 10`: `L(10) = 1200 + 400 = 1600`; `E(10) = 1200 · 1.03^10 ≈
1200 · 1.3439 ≈ 1612.7`. The exponential model is already slightly
ahead — by about 13 people.

At `t = 11`: `L(11) = 1640`; `E(11) ≈ 1661.1`. The gap widens to
about 21. From here it only grows: the exponential model's yearly
increase is 3% *of a growing base*, while the linear model's stays
at 40 forever. This is F-LE.3 in action: a quantity increasing
exponentially eventually exceeds one increasing linearly (or
quadratically), and once it passes, it does not come back.

Average rate of change makes the same point numerically. For
`f(x) = 2^x` on `[1, 4]`: `[f(4) − f(1)] / (4 − 1) = (16 − 2)/3 =
14/3 ≈ 4.67` per unit. On `[4, 7]`: `(128 − 16)/3 = 112/3 ≈ 37.33`
per unit. Same interval length, eight times the average rate —
because the function multiplied by 8 across each interval's start.

### Applied task — which model, and what does it cost to be wrong?

A startup reports users: Year 0: 400; Year 1: 520; Year 2: 676;
Year 3: 879 (rounded).

1. Test differences and ratios. Ratios: `520/400 = 1.3`;
   `676/520 = 1.3`; `879/676 ≈ 1.300`. The signature is exponential,
   factor about 1.3 — a 30% yearly growth model
   `U(t) ≈ 400 · 1.3^t`.
2. Predict Year 5 two ways: exponential, `400 · 1.3^5 = 400 · 3.71293
   ≈ 1485`; linear, using the first difference (120 per year),
   `400 + 5 · 120 = 1000`. The choice of model changes the answer by
   almost 500 users.
3. Write one sentence an investor should hear: "The exponential
   model predicts about 1,485 users, but it assumes 30% growth
   continues unchanged; if growth slows, the true number will be
   lower, so treat 1,485 as an upper planning figure, not a promise."

## Guided practice

1. Classify: `x = 0, 1, 2, 3` → `y = 8, 12, 18, 27`. (Ratios 1.5,
   1.5, 1.5 — exponential, factor 1.5.)
2. Classify: `x = 0, 1, 2, 3` → `y = 3, 6, 11, 18`. (First
   differences 3, 5, 7; second difference 2 — quadratic.)
3. Average rate of change of `f(x) = 3^x` on `[0, 2]` and on `[2, 4]`.
   Which is larger, and why?
4. Explain why a graph alone, over just two or three points, cannot
   reliably distinguish linear from exponential growth.
5. Error analysis: "Table 6, 12, 24, 48 grows linearly because it
   adds 6, then 12, then 24." Find the error and give the correct
   classification.

## Independent practice

Do Practice Set B (practice.md). Then:

1. A savings account pays $30 per year on $1,000 (simple interest)
   vs. 3% per year compounded. Write both models, evaluate at year
   20, and state which is larger and by about how much.
   (Linear: $1,600. Exponential: `1000 · 1.03^20 ≈ $1,806.11` —
   larger by about $206. Verify `1.03^20 ≈ 1.8061` with technology.)
2. In one paragraph, explain F-LE.3 to a learner who has only seen
   linear growth: why must exponential growth eventually win?

## Exit check

1. Table: 20, 26, 32, 38 — linear, exponential, or quadratic? How
   do you know?
2. Average rate of change of `f(x) = 2^x` on `[2, 5]`.

## Supports and extensions

- **Support:** always write the differences row *and* the ratios row
  under a table before naming a family; the row that comes out
  constant is the answer.
- **Extension:** prove that if `f(x) = a·b^x`, the average rate of
  change on `[x, x + 1]` is `a·b^x·(b − 1)` — proportional to the
  function's own value, which is why exponential average rates
  themselves grow exponentially.
- **Reading/language access:** "eventually exceeds" means "after
  some point, stays larger" — not "is larger from the start."

## Teacher note

Likely misconceptions: (a) naming by curve shape instead of by the
table test; (b) computing average rate of change as
`f(b) − f(a)` without dividing by the interval length; (c) treating
the crossover point as the point where exponential *starts* growing
(it was growing all along — it just starts *ahead* there).
Answer-key reference: answer-key.md, Lesson 02.
