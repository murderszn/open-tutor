# Lesson 02 — Binomial Distributions

**Goal:** You will recognize a binomial setting, compute binomial
probabilities with the binomial formula, and find the mean and standard
deviation of a binomial distribution. **Time:** ~50 minutes.
**Materials:** paper, spreadsheet for tables, Desmos for graphing only.

## Readiness check

1. From Unit 04: what is `C(5, 2)`? What does it count?
2. If two events are independent, how do you find the probability that
   both happen?
3. A fair coin is tossed 4 times. What is the probability of the exact
   sequence HHTT? (Answer in the key: `(1/2)^4 = 1/16`.)

## Teaching

A **Bernoulli trial** is a single chance process with exactly two
outcomes — call them success and failure — with `P(success) = p` the
same on every trial. A **binomial setting** has four conditions:

1. **Binary:** each trial has two outcomes (success/failure).
2. **Independent:** the trials are independent (or approximately so —
   sampling without replacement from a population at least 10 times the
   sample size is close enough).
3. **Fixed number of trials:** `n` is set in advance.
4. **Same probability:** `p` is the same on every trial.

When all four hold, the random variable `X` = number of successes in
`n` trials has a **binomial distribution**, written `X ~ B(n, p)`, and

`P(X = k) = C(n, k) · p^k · (1 − p)^(n−k)`, for `k = 0, 1, …, n`.

Why this formula works: a specific sequence with `k` successes and
`n − k` failures has probability `p^k (1 − p)^(n−k)` by the
multiplication rule for independent trials. There are `C(n, k)` such
sequences — that is exactly what the binomial coefficient counts, and
it is why Unit 04's Pascal's Triangle appears here. Add the `C(n, k)`
identical probabilities together and the formula follows.

The binomial mean and standard deviation need no table:

`μ = np` and `σ = √(np(1 − p))`.

The mean is the long-run average number of successes; the standard
deviation is the typical spread around it. The distribution is
symmetric when `p = 0.5`, skewed right when `p < 0.5`, and skewed left
when `p > 0.5`.

**Check the conditions before the formula.** Drawing 5 cards from a
deck without replacement is not binomial: the probability of drawing
an ace changes after each draw, so condition 4 fails (and condition 2
fails with it). Counting "the number of trials until the first success"
is not binomial either: `n` is not fixed. Using the formula where it
does not apply gives a confident wrong answer — worse than no answer.

### Worked example 1 — Exactly 2 heads in 5 tosses

Toss a fair coin 5 times; `X` is the number of heads. Check the
conditions: binary (heads/tails), independent tosses, `n = 5` fixed,
`p = 0.5` every toss. So `X ~ B(5, 0.5)`.

`P(X = 2) = C(5, 2) · (0.5)^2 · (0.5)^3 = 10 · (0.5)^5 = 10/32 =
0.3125`.

The full distribution: `P(0) = 1/32, P(1) = 5/32, P(2) = 10/32,
P(3) = 10/32, P(4) = 5/32, P(5) = 1/32`. The numerators are the row
`1, 5, 10, 10, 5, 1` of Pascal's Triangle — no coincidence, since each
numerator counts the sequences with that many heads. The mean is
`np = 5 · 0.5 = 2.5` heads, and `σ = √(5 · 0.5 · 0.5) = √1.25 ≈
1.118`.

### Worked example 2 — A free-throw shooter

A basketball player makes 70% of free throws. In a game she attempts
6 free throws; assume the attempts are independent with the same
`p = 0.7`. Let `X` be the number she makes: `X ~ B(6, 0.7)`.

Probability she makes at least 5:

`P(X ≥ 5) = P(5) + P(6)`
`= C(6, 5)(0.7)^5(0.3)^1 + C(6, 6)(0.7)^6(0.3)^0`
`= 6 · 0.16807 · 0.3 + 1 · 0.117649 · 1`
`= 0.302526 + 0.117649 = 0.420175 ≈ 0.420`.

So she makes at least 5 about 42% of the time. Her expected number
made is `μ = np = 6 · 0.7 = 4.2`, with `σ = √(6 · 0.7 · 0.3) =
√1.26 ≈ 1.122`. Notice: "at least 5" is a sum of two terms, and the
`k = 6` term is just `p^6` — a common place to drop a term is forgetting
that "at least" includes the top value.

### Worked example 3 — Not binomial: drawing without replacement

A box holds 10 parts, 3 of them defective. You draw 4 parts without
replacement and let `X` be the number of defective parts drawn. Is
`X` binomial? No. After the first draw, the probability the next part
is defective depends on what was drawn — the trials are not independent
and `p` is not constant. The distribution here is called hypergeometric
(not taught in this unit), and the binomial formula would give the
wrong probabilities. The fix is not a different formula but a different
counting argument — or, if the population were large (say 1,000 parts
with 300 defective), the binomial with `p = 0.3` would be a good
approximation, because removing 4 parts barely changes the mix.

## Guided practice (with hints)

1. A fair coin is tossed 4 times. Let `X` be the number of heads. Build
   the full distribution table for `X` and check that the probabilities
   sum to 1. (Hint: the numerators are row 4 of Pascal's Triangle.)
2. A multiple-choice test has 10 questions, each with 4 choices. A
   learner guesses at random. Let `X` be the number correct. State `n`
   and `p`, then find `P(X = 3)`. (Hint: `C(10, 3) = 120`.)
3. For the guessing learner in (2), find the mean and standard deviation
   of `X`, and explain in one sentence what the mean tells the learner.

## Independent practice

1. A seed packet claims 80% germination. A learner plants 5 seeds.
   Let `X` be the number that germinate. State `n` and `p`, then find
   `P(X = 5)` and `P(X = 4)`.
2. A factory's parts are 5% defective. In a sample of 20 parts, let `X`
   be the number defective. Find `P(X = 0)` and `P(X = 1)`, each to
   three decimal places.
3. **Error analysis.** A learner computes `P(X = 2)` for `X ~ B(6,
   0.4)` as `C(6, 2) · (0.4)^2 = 15 · 0.16 = 2.4`. Explain every error
   and give the correct value to three decimal places.
4. For `X ~ B(100, 0.2)`, find `μ` and `σ`. Then decide, with a reason,
   whether `X = 35` would be surprising. (Hint: how many standard
   deviations from the mean is 35?)
5. A spinner has a 1/4 chance of landing on green. It is spun 8 times.
   Find `P(X ≥ 1)` where `X` is the number of greens — use the
   complement to save work.

## Applied task

A quality-control engineer samples 12 items from a large shipment in
which 10% are defective. Let `X` be the number of defective items in
the sample. (a) Explain why `X` is approximately binomial, and state
`n` and `p`. (b) Find `P(X = 0)` and `P(X ≤ 1)` to three decimal
places. (c) The shipment is rejected if `X ≥ 3`. Find the probability
of rejection to three decimal places. (d) In one sentence, say what
that probability means for the supplier.

## Exit check

State the four binomial conditions, and give one example of a setting
that fails exactly one of them — naming the condition it fails.

## Supports, alternate modes, and extensions

- **Reading/language access:** write the four conditions as a checklist
  and tick them off for every new setting before touching the formula.
- **Alternate response mode:** a learner may build the distribution
  table in a spreadsheet (one row per `k`, with `C(n, k)`, `p^k`,
  `(1 − p)^(n−k)` in separate columns) instead of writing each
  probability by hand.
- **Extension:** show that the binomial probabilities for `n = 5`,
  `p = 0.5` sum to 1 by expanding `(0.5 + 0.5)^5` with the Binomial
  Theorem — the same expansion that gives the formula's coefficients.

## Teacher note

Likely misconceptions: (a) applying the binomial formula without
checking independence (drawing without replacement from a small
population); (b) forgetting the `(1 − p)^(n−k)` factor, which can give a
"probability" above 1; (c) confusing `P(X = k)` with `P(X ≤ k)` or
`P(X ≥ k)` — "at least" and "at most" are sums, not single terms.
Answers: `answer-key.md`, Lesson 02.
