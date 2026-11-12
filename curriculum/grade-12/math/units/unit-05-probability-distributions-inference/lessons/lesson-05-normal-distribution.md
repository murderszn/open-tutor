# Lesson 05 — The Normal Distribution

**Goal:** You will use the normal model: compute z-scores, apply the
empirical (68–95–99.7) rule, estimate normal probabilities, and check
the large-counts condition before approximating a binomial with a
normal curve. **Time:** ~50 minutes. **Materials:** paper, the
deterministic normal-curve diagram (`../assets/normal-curve.svg`),
spreadsheet or calculator for square roots.

## Readiness check

1. A dataset has mean 50 and standard deviation 10. How far, in
   standard deviations, is the value 70 from the mean?
2. In the two-dice distribution, what fraction of the probability lies
   within one value of the mean 7 — that is, `P(6 ≤ X ≤ 8)`?
3. For `X ~ B(200, 0.3)`, what are `μ` and `σ`?

## Teaching

A **normal distribution** is the bell-shaped continuous distribution
with two parameters: its mean `μ` (the center) and its standard
deviation `σ` (the spread). We write `X ~ N(μ, σ)`. The curve is
symmetric about `μ`; the mean, median, and mode are all `μ`; and the
total area under the curve is 1, with area standing for probability.
The **standard normal distribution** is `Z ~ N(0, 1)`, and any normal
value converts to a z-score by

`z = (x − μ) / σ`.

A z-score says how many standard deviations a value sits from its
mean: `z = 1.75` means 1.75 standard deviations above the mean.
Z-scores let us compare values from different distributions — a score
of 84 on a hard test may beat a score of 92 on an easy one, and the
z-scores decide.

The **empirical rule (68–95–99.7 rule)** gives the areas without a
table: for a normal distribution, about **68%** of values lie within
one standard deviation of the mean (`μ ± σ`), about **95%** within two
(`μ ± 2σ`), and about **99.7%** within three (`μ ± 3σ`). Half of the
leftover area sits in each tail: about 16% above `μ + σ`, about 2.5%
above `μ + 2σ`, about 0.15% above `μ + 3σ`. See
`../assets/normal-curve.svg` — the shaded regions are those areas,
computed from the density formula, not estimated from a picture.

The normal curve also approximates the binomial when the binomial is
not too skewed. The **large-counts condition** is: `np ≥ 10` **and**
`n(1 − p) ≥ 10`. When it holds, `X ~ B(n, p)` is approximately
`N(np, √(np(1 − p)))`. Because the binomial is discrete and the normal
is continuous, use a **continuity correction**: `P(X ≥ k)` becomes the
normal probability above `k − 0.5`, and `P(X ≤ k)` becomes the normal
probability below `k + 0.5`. When the condition fails — small `n`, or
`p` near 0 or 1 — the approximation is poor and the binomial formula
from Lesson 02 is the right tool. A normal model is a model: check its
conditions, and never apply it to data that is clearly skewed or
bimodal without saying so.

### Worked example 1 — Test scores and the empirical rule

A standardized test's scores (fictional practice data, invented for
calculation) are approximately normal with mean 500 and standard
deviation 100: `X ~ N(500, 100)`.

- `P(X > 600)`: 600 is one standard deviation above the mean
  (`z = (600 − 500)/100 = 1`). About 68% of scores lie between 400 and
  600, so 32% lie outside that interval, half above and half below:
  about **16%** score above 600.
- `P(400 < X < 600)`: that is the interval `μ ± σ`, so about **68%**.
- `P(X > 700)`: 700 is two standard deviations above the mean
  (`z = 2`). About 95% lie between 300 and 700, so 5% lie outside,
  half above: about **2.5%** score above 700.

The empirical rule gives quick, approximate answers — good to two
significant figures at most. For finer answers the learner would use a
z-table or technology; the rule's value is judgment, not precision.

### Worked example 2 — Comparing scores with z-scores

Ana scores 84 on a test with mean 70 and standard deviation 8. Ben
scores 92 on a different test with mean 80 and standard deviation 6.
Whose score is stronger relative to their own test?

Ana: `z = (84 − 70)/8 = 14/8 = 1.75`. Ben: `z = (92 − 80)/6 = 12/6 =
2.0`. Ben's score is 2.0 standard deviations above his test's mean,
while Ana's is 1.75 above hers — Ben did better relative to his
peers, even though the raw scores (92 vs. 84) already favored him.
The z-score is the comparison that survives different scales; the raw
score does not. (If the two tests' scores were normal, Ana is at about
the 96th percentile and Ben at about the 98th — but the percentile
reading needs a z-table, and the ranking is already settled by the
z-scores.)

### Worked example 3 — Normal approximation to a binomial

A survey asks 200 people a yes/no question; suppose the true
proportion answering "yes" is `p = 0.30`. Let `X` be the number of
"yes" answers: `X ~ B(200, 0.30)`. Check large-counts: `np = 60 ≥ 10`
and `n(1 − p) = 140 ≥ 10` — the condition holds, so the normal
approximation is reasonable, with `μ = 60` and `σ = √(200 · 0.3 ·
0.7) = √42 ≈ 6.48`.

What is the probability of 70 or more "yes" answers? With the
continuity correction, `P(X ≥ 70) ≈ P(Z > (69.5 − 60)/6.48) = P(Z >
1.47) ≈ 0.071` (from a standard normal table). About a 7% chance.
By symmetry, `P(X ≤ 50) ≈ P(Z < (50.5 − 60)/6.48) = P(Z < −1.47) ≈
0.071` as well. Without the continuity correction the z-score would
have been `(70 − 60)/6.48 = 1.54` and the answer 0.062 — close, but
the correction is the honest step, and for smaller `n` the difference
is larger. The exact binomial answer for `P(X ≥ 70)` is about 0.073 —
the approximation is within about 0.2 percentage points here,
which is why the condition matters: it tells us when to trust it.

## Guided practice (with hints)

1. `X ~ N(100, 15)`. Use the empirical rule to estimate `P(X > 115)`,
   `P(85 < X < 115)`, and `P(X < 70)`. (Hint: 115 is `μ + σ`; 70 is
   `μ − 2σ`.)
2. A value `x = 60` comes from a distribution with `μ = 50`, `σ = 4`.
   Find its z-score. A second value `y = 130` comes from a distribution
   with `μ = 100`, `σ = 15`. Find its z-score. Which value is more
   unusual?
3. For `X ~ B(80, 0.4)`, check the large-counts condition and, if it
   holds, state the approximating normal distribution's `μ` and `σ`.

## Independent practice

1. Adult heights in a population (fictional practice data) are
   approximately normal with mean 170 cm and standard deviation 8 cm.
   Estimate the percentage of adults between 162 cm and 178 cm, and
   the percentage taller than 186 cm.
2. A machine fills bags with mean weight 500 g and standard deviation
   6 g; weights are approximately normal. A bag weighs 488 g. Find its
   z-score and say, in one sentence, whether the bag is unusually
   light.
3. For `X ~ B(50, 0.1)`, check the large-counts condition. Can the
   normal approximation be used? Explain.
4. For `X ~ B(400, 0.5)`, state `μ` and `σ`, check the condition, and
   estimate `P(X ≥ 220)` with a continuity correction, to two decimal
   places. (Hint: the z-score is about 1.95.)
5. **Error analysis.** A learner writes: "The data are normal, so 95%
   of values lie within 2 of the mean." Explain the error and give the
   correct statement.

## Applied task

A company tests batteries (fictional practice data). Lifetimes are
approximately normal with mean 120 hours and standard deviation 15
hours. (a) What percentage of batteries last between 105 and 135
hours? (b) What percentage last more than 150 hours? (c) A battery
lasts 90 hours. Find its z-score and explain in one sentence what the
z-score tells the company. (d) The company samples 100 batteries and
counts how many last more than 150 hours. Using the probability from
(b), is the normal approximation to that count justified? Show the
large-counts check.

## Exit check

`X ~ N(20, 4)`. Estimate `P(X > 24)` and `P(12 < X < 28)` using the
empirical rule, and state the z-score of `x = 30`.

## Supports, alternate modes, and extensions

- **Reading/language access:** keep the SVG open while working; point
  to the shaded region that matches each probability before computing.
- **Alternate response mode:** a learner may answer empirical-rule
  questions by shading the corresponding region on a printed copy of
  the SVG and writing the percentage beside it, instead of writing a
  paragraph.
- **Extension:** use a z-table (OpenStax Appendix G or a spreadsheet's
  normal function) to find `P(Z > 1.47)` exactly and compare it with
  the 0.071 used in Worked example 3; then find `P(Z > 1.466)` and
  confirm the rounding.

## Teacher note

Likely misconceptions: (a) applying the 68–95–99.7 rule to data that
is not approximately normal; (b) confusing "within 2 standard
deviations" with "within 2 units"; (c) skipping the continuity
correction, or applying it in the wrong direction; (d) using the normal
approximation when the large-counts condition fails. Answers:
`answer-key.md`, Lesson 05.
