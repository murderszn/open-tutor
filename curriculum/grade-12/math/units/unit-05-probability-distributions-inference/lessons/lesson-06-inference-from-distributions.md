# Lesson 06 — Inference from Distributions

**Goal:** You will connect simulation-based inference to
distribution-based inference: build a margin of error from a standard
error, and judge whether a sample result is surprising under a stated
claim. **Time:** ~50 minutes. **Materials:** paper, spreadsheet for
simulation (optional), the normal-curve SVG
(`../assets/normal-curve.svg`) for z-score reading.

## Readiness check

1. In grade 11, a simulated sampling distribution of a sample
   proportion was centered at the true proportion. What did its spread
   depend on? (Answer in the key: the sample size, and the true
   proportion.)
2. For a sample proportion from `n = 400`, what is a rough standard
   error if the true proportion is near 0.5? (Hint: `√(0.5 · 0.5 /
   400)`.)
3. What does a margin of error of ±5 percentage points mean, in plain
   words?

## Teaching

Inference is the step from a sample to a claim about a population.
Grade 11 did it by simulation: repeat the sampling process on a
computer, watch the sample statistics pile up into a sampling
distribution, and read the spread off the pile. This lesson does the
same work with a distribution: when the conditions hold, the sampling
distribution of a sample proportion is approximately normal, its
standard deviation has a formula, and the judgment follows from a
z-score.

For a sample proportion `p̂` from a random sample of size `n`, the
**standard error** is

`SE = √(p(1 − p) / n)`,

where `p` is the population proportion. In practice `p` is unknown, so
an interval uses `p̂` in the formula, while a test of a stated claim
uses the claimed `p`. The **margin of error** for a 95%-ish interval is
about `2 · SE` — two standard errors, because about 95% of a normal
distribution lies within two standard deviations of its center. The
interval `p̂ ± 2 · SE` is a plausible range for the population
proportion: values inside it are consistent with the sample; values
outside it are surprising.

To judge a claim, compute the z-score of the sample result under the
claim:

`z = (p̂ − p_claim) / SE_claim`, with `SE_claim = √(p_claim(1 −
p_claim) / n)`.

A z-score near 0 says the sample is exactly what the claim predicts.
A z-score of −2.6 says the sample is 2.6 standard errors below the
claim — the kind of result that happens about 4 times in 1,000 if the
claim were true. That is surprising, and surprise is evidence against
the claim. It is not proof: a surprising result can happen by chance,
and a badly drawn (non-random, biased) sample can produce a large
z-score for reasons that have nothing to do with the claim. Inference
is a judgment with stated assumptions — random sampling, a large
enough sample for the normal approximation (`np ≥ 10` and `n(1 − p) ≥
10`), and a clear statement of what "surprising" means.

### Worked example 1 — A poll and its margin of error

A poll of 400 randomly chosen voters finds 52% support for a ballot
measure. What is a plausible range for the true support?

Use the conservative standard error with `p = 0.5` (the value that
maximizes the spread): `SE = √(0.5 · 0.5 / 400) = √0.000625 = 0.025`.
The margin of error is about `2 · 0.025 = 0.05`, or 5 percentage
points. The plausible range is `52% ± 5%`, that is, **47% to 57%**.

The headline "a majority supports the measure" is **not established**
by this poll: the interval includes values below 50%. A second poll
with 1,600 voters would have `SE = √(0.25/1600) = 0.0125` and a margin
of about 2.5 points — quadrupling the sample halves the margin, which
is why larger samples are worth paying for. The same calculation done
by simulation in grade 11 would show the same spread; the formula is
the simulation's result, written down.

### Worked example 2 — Testing a company's claim

A company claims 70% of its customers prefer its new packaging. A
random sample of 100 customers finds 58 who prefer it (`p̂ = 0.58`).
Is the sample surprising if the claim is true?

Under the claim, `SE = √(0.7 · 0.3 / 100) = √0.0021 ≈ 0.0458`. The
z-score is `z = (0.58 − 0.70) / 0.0458 = −0.12 / 0.0458 ≈ −2.62`.
From a standard normal table, `P(Z ≤ −2.62) ≈ 0.0044` — about 4
chances in 1,000. A sample this low would be surprising if 70% were
the truth. The verdict: the claim is **doubtful** on this evidence —
but the verdict carries its assumptions: the sample was random, the
normal approximation applies (`np = 70 ≥ 10`, `n(1 − p) = 30 ≥ 10`),
and "surprising" means "this far out happens rarely." If the sample
was drawn from one store on one day, the sampling method — not the
claim — may be the problem. Inference never excuses a bad sample.

### Worked example 3 — Simulation meets the formula

In grade 11, the learner simulated 1,000 samples of size 100 from a
population with `p = 0.5` and watched the sample proportions pile up
around 0.5 with a spread of about 0.05. The formula agrees: `SE =
√(0.5 · 0.5 / 100) = 0.05`. The simulation and the distribution are
two views of the same fact: the spread of a sampling distribution is
`√(p(1 − p)/n)`, and it shrinks like `1/√n`. Simulation is the check
and the intuition; the formula is the shortcut once the pattern is
trusted. When the normal conditions fail (small `n`, extreme `p`),
simulation is the fallback — the formula stops being honest, but the
simulation still works.

## Guided practice (with hints)

1. A sample of 100 voters gives `p̂ = 0.46`. Build the plausible range
   for the true proportion using a margin of error of `2 · SE` with
   `p = 0.5`. Does the interval include 0.50? What does that say?
   (Hint: `SE = 0.05`.)
2. A restaurant claims 90% of diners are satisfied. A random sample of
   200 diners finds 170 satisfied (`p̂ = 0.85`). Compute the z-score
   under the claim and say whether the result is surprising. (Hint:
   `SE = √(0.9 · 0.1 / 200) ≈ 0.0212`.)
3. Two polls estimate the same proportion. Poll A has `n = 100`,
   Poll B has `n = 400`. How do their margins of error compare, and
   why?

## Independent practice

1. A survey of 625 people finds 55% in favor of a policy. Compute the
   standard error (use `p = 0.5` for a conservative margin) and the
   margin of error, and give the plausible range for true support.
2. A drug company claims a treatment works for 80% of patients. In a
   trial of 50 patients, 33 improve (`p̂ = 0.66`). Compute the z-score
   under the claim, estimate the probability of a result this low or
   lower, and state the verdict in one sentence.
3. **Error analysis.** A learner writes: "The poll says 52% ± 5%, so
   the true support is definitely between 47% and 57%." Explain the
   error.
4. A sample of 25 voters gives `p̂ = 0.60`. A learner computes a margin
   of error of `2 · √(0.25/25) = 0.20`. Is the normal approximation
   justified here? Check the large-counts condition with `p = 0.5` and
   explain what you would do instead if it failed.
5. In your own words, explain how simulation-based inference (grade 11)
   and distribution-based inference (this lesson) give the same answer
   about a sampling distribution's spread. Two or three sentences.

## Applied task

A school newspaper (fictional practice data) claims 60% of students
support a later start time. The paper surveys 150 randomly chosen
students and finds 78 supporters (`p̂ = 0.52`). (a) Compute the
standard error under the claim. (b) Compute the z-score and estimate
the probability of a sample proportion of 0.52 or lower if the claim
were true. (c) State the verdict on the claim, with the assumptions
listed. (d) The paper's editor says, "But we asked 150 students —
that's a big sample, so our result must be right." Explain the error in
that reasoning in two sentences.

## Exit check

A sample of 400 gives `p̂ = 0.48`. The claimed population proportion
is 0.55. Compute the z-score under the claim and say whether the sample
is surprising. (Use `SE = √(0.55 · 0.45 / 400)`.)

## Supports, alternate modes, and extensions

- **Reading/language access:** translate every z-score into a sentence
  ("the sample is 2.6 standard errors below the claim") before
  translating it into a verdict.
- **Alternate response mode:** a learner may present an inference as a
  four-row table (claim, sample, z-score, verdict) instead of a
  paragraph.
- **Extension (S-IC.6):** find a real published claim based on data (a
  news poll, a product claim) and evaluate it: sample size, sampling
  method, margin of error, and whether the headline the publisher wrote
  is supported by the interval. The evaluation, not the headline, is
  the deliverable.

## Teacher note

Likely misconceptions: (a) reading an interval as a guarantee rather
than a plausible range; (b) using `p̂` instead of the claimed `p` in
the standard error when testing a claim; (c) treating "surprising"
as "impossible" and a claim as disproven; (d) believing a large sample
fixes a biased sample — it does not; it only sharpens a wrong answer.
Answers: `answer-key.md`, Lesson 06.
