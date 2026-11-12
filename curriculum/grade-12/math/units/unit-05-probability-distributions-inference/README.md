# Unit 05 — Probability Distributions and Statistical Inference

**Grade 12 · Math · Precalculus pathway · Weeks 19–22 of the course year**
(draft, delivered 2026-11-12 for issue #54; not educator-reviewed, not merged)

## Overview

Grade 11 taught the learner to *describe* data and to simulate chance.
This unit teaches the learner to *model* chance: to write down the whole
distribution of a random variable, to summarize it with an expected value
and a standard deviation, to recognize the binomial pattern in repeated
trials, to weigh real decisions by expected value, and to use the normal
curve to judge whether a claim about a population is plausible. The unit's
central habit is **the long run beats the single play**: an expected value
is a prediction about averages over many repetitions, not a promise about
the next spin, the next shot, or the next sample — and the standard
deviation says how far individual results typically wander from that
average.

The unit runs in six moves:

1. **Random variables and distributions** — assigning numbers to outcomes,
   building probability tables and graphs, checking the two rules every
   distribution must obey, and telling theoretical distributions from
   empirical ones.
2. **Binomial distributions** — the four binomial conditions, the binomial
   formula built from counting (Unit 04's binomial coefficients), mean
   `np` and standard deviation `√(np(1 − p))`.
3. **Expected value and spread** — `E(X) = Σ x·P(x)` as the long-run mean,
   empirical expected values from relative frequencies, and the standard
   deviation of a distribution as its typical spread.
4. **Decisions by expected value** — expected payoffs, fair prices, comparing
   strategies, and what makes a decision procedure fair; the generated
   spinner illustration is the unit's game of chance.
5. **The normal distribution** — z-scores, the empirical (68–95–99.7) rule,
   normal probabilities for data, and the large-counts condition for
   approximating a binomial with a normal curve.
6. **Inference from distributions** — sampling distributions, standard
   error, margins of error, and judging a claim by how surprising the
   sample would be if the claim were true; simulation-based inference
   from grade 11 meets distribution-based inference here.

The essential question running through all four weeks is: **when outcomes
are uncertain, what does the whole distribution tell us that a single
outcome cannot — and how do we decide, and judge claims, from it?**

## Prerequisites

From the Weeks 1–2 diagnostics and grade-11 statistics (S-ID, S-IC, S-CP
review; the grade-11 track's objectives in unmerged draft PR #117), and
from Units 01–04 of this track (draft PRs #172, #225, #387, #390 — their
files are not yet on `main`, so this unit re-states every prerequisite it
needs rather than linking to them):

- Reading a data distribution: shape, center, spread; mean and standard
  deviation of a dataset; two-way tables and conditional probability.
- Surveys vs. experiments vs. observational studies; random sampling;
  simulation-based inference (what a simulated sampling distribution
  shows); margins of error as roughly `2` standard errors.
- Counting: permutations and combinations, including `C(n, k)` and
  Pascal's Triangle (Unit 04); the Binomial Theorem for expanding
  `(x + y)^n` (used in Lesson 02 to count success/failure sequences).
- Function notation and graphing; square roots and rounding to a stated
  accuracy (N-Q.3); spreadsheet fluency for tables and repeated
  calculations; Desmos for graphing a distribution.
- Written justification of every solution step (A-REI.1).

The unit assumes no prior fluency with random variables, probability
distributions, expected value, binomial models, z-scores, or the normal
curve — those are this unit's new content. Vectors, parametric, and polar
forms (Unit 03) and series (Unit 04) are not used here except for the
binomial coefficients named above.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Construct probability distributions for discrete random variables as
   tables and graphs; check the two rules (`0 ≤ P(x) ≤ 1` for every value,
   and the probabilities sum to `1`); and distinguish theoretical from
   empirical distributions. (S-MD.1 (+); track objective 8)
2. Compute and interpret the expected value `E(X) = Σ x·P(x)` and the
   standard deviation of a discrete random variable, in context, as the
   distribution's long-run mean and typical spread; compute empirical
   expected values from relative frequencies. (S-MD.2 (+), S-MD.4 (+);
   track objective 8)
3. Recognize a binomial setting, compute binomial probabilities with
   `P(X = k) = C(n, k) p^k (1 − p)^(n−k)`, and find the binomial mean
   `np` and standard deviation `√(np(1 − p))`. (S-MD.3 (+); track
   objective 9)
4. Weigh decisions by expected value: compute expected payoffs, compare
   strategies by expected value, find the fair price of a game of chance,
   and judge whether a decision procedure is fair. (S-MD.5 (+), 5.a, 5.b;
   S-MD.6 (+) as enrichment; track objective 8)
5. Use the normal model: compute z-scores, apply the empirical
   (68–95–99.7) rule, estimate normal probabilities for data, and check
   the large-counts condition (`np ≥ 10` and `n(1 − p) ≥ 10`) before using
   a normal approximation to a binomial, with a continuity correction.
   (S-ID.4 review; track objective 9)
6. Connect simulation-based inference to distribution-based inference:
   use a sampling distribution and standard error to build a margin of
   error, and judge whether a sample result is surprising under a stated
   claim. (S-IC.1–6 review; track objective 9)

## Vocabulary

random variable, discrete random variable, probability distribution,
probability distribution function, theoretical distribution, empirical
distribution, relative frequency, expected value, long-run average, mean
of a distribution, variance, standard deviation of a distribution,
Bernoulli trial, binomial setting, binomial distribution, binomial
formula, payoff, net gain, fair price, fair game, strategy, z-score,
standard normal distribution, empirical rule (68–95–99.7 rule), normal
approximation, continuity correction, large-counts condition, sampling
distribution, standard error, margin of error, surprising result.

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**,
high school conceptual categories. Codes below were verified against the
official framework text on thecorestandards.org by the track audit runs
on 2026-10-07 and 2026-10-08; descriptions here are plain-language
paraphrases, not reproductions. Codes marked **(+)** are advanced in the
published document; where this unit teaches one, the marking is stated.
No state adoption, accreditation, or alignment certification is claimed.

- **S-MD.1 (+)** — define a random variable by assigning a numerical
  value to each event in a sample space; graph the probability
  distribution. (Verified 2026-10-08.)
- **S-MD.2 (+)** — calculate the expected value of a random variable;
  interpret it as the mean of the distribution. (Verified 2026-10-08.)
- **S-MD.3 (+)** — develop a probability distribution where theoretical
  probabilities can be calculated; find the expected value.
  (Verified 2026-10-08.)
- **S-MD.4 (+)** — develop a probability distribution where probabilities
  are assigned empirically; find the expected value.
  (Verified 2026-10-08.)
- **S-MD.5 (+)** — weigh a decision's possible outcomes by assigning
  probabilities to payoffs and finding expected values.
  (Verified 2026-10-08.)
- **S-MD.5.a** — find the expected payoff for a game of chance.
  (Verified 2026-10-08; educational analysis only — not gambling advice.)
- **S-MD.5.b** — evaluate and compare strategies by expected values.
  (Verified 2026-10-08.)
- **S-MD.6 (+)** — use probabilities to make fair decisions.
  (Verified 2026-10-08; enrichment in Lesson 04.)
- **S-MD.7 (+)** — analyze decisions and strategies with probability
  concepts. (Verified 2026-10-08; enrichment in the project.)
- **S-ID.4** — use the mean and standard deviation of a dataset to fit it
  to a normal distribution and estimate population percentages; recognize
  when a normal model is appropriate. (Verified 2026-10-07; review.)
- **S-IC.1–5** — statistics vs. parameters; simulation-based model
  checks; study design; margins of error; treatment comparisons.
  (Verified 2026-10-07; review, connected to distribution-based
  inference in Lesson 06.)
- **S-IC.6** — evaluate reports based on data. (Verified 2026-10-07;
  Lesson 06 and the project.)
- **S-CP.1–9** (8 and 9 are (+) advanced) — sample spaces, conditional
  probability, independence, addition and multiplication rules, counting.
  (Verified 2026-10-07; review; the multiplication rule for independent
  trials is the engine of the binomial formula.)
- **N-Q.1, N-Q.2, N-Q.3** — using units to understand problems; defining
  appropriate quantities; reporting accuracy appropriate to measurement
  limits.

**Data honesty note.** Every dataset in this unit is labeled. The two-dice,
coin, spinner, and free-throw numbers are theoretical (computed from stated
assumptions) or clearly labeled **fictional practice data** invented for
calculation. The 200-spin counts in Lesson 03 are a fictional practice
dataset. Test-score and height examples are fictional practice data with
stated parameters, not measurements of any real person or group. The
project's simulation data is collected by the learner. No real learner
records, photos, or personal information appear anywhere in this unit.

## Pacing (20 sessions, ~50 minutes each)

| Session | Activity | Success criterion |
|---|---|---|
| S1 (Wk 19) | Lesson 01 — random variables and distributions | Builds a valid distribution table and graph; checks both rules |
| S2 | Practice clinic — Practice Set A | Finds probabilities from a distribution, including complements |
| S3 | Lesson 02 — binomial distributions | Checks the four binomial conditions; computes `P(X = k)` |
| S4 | Practice clinic — Practice Set B | Builds a full binomial table; finds mean and SD |
| S5 | Reading/reference — OpenStax Ch. 4 (§4.1–4.3); spreadsheet distribution tables | Rebuilds the binomial formula from counting, without notes |
| S6 (Wk 20) | Lesson 03 — expected value and spread | Computes `E(X)` and SD for a distribution; interprets both |
| S7 | Practice clinic — Practice Set C; spinner image activity debrief | Interprets an expected value as a long-run average, not a single-play promise |
| S8 | Lesson 04 — decisions by expected value | Finds a fair price; compares two strategies by expected value |
| S9 | Practice clinic — Practice Set D | Judges a decision procedure fair or unfair, with the probabilities shown |
| S10 | Project studio 1 — game design and theoretical distribution | Game defined; distribution table complete and checked |
| S11 (Wk 21) | Lesson 05 — the normal distribution | Computes z-scores; applies the 68–95–99.7 rule; checks large-counts |
| S12 | Practice clinic — Practice Set E; normal-curve SVG reading | Reads probabilities off the normal curve and the SVG |
| S13 | Lesson 06 — inference from distributions | Builds a margin of error; judges a claim by surprise |
| S14 | Practice clinic — Practice Set F | Evaluates a data-based claim with a z-score and a plain-language verdict |
| S15 | Project studio 2 — simulation and fair-price recommendation | 100-trial simulation run; empirical vs. theoretical compared |
| S16 | Project studio 3 — project writing and rubric self-check | Draft meets every rubric row; assumptions stated |
| S17 | Mixed practice — Practice Set G; review | Scores at least 80% on the mixed set before the quiz |
| S18 (Wk 22) | Formative quiz (assessments/week-22_quiz.md) | Adult scores same day; every error classified and one of each type re-worked |
| S19 | Culminating assessment (assessments/unit-assessment.md) | All six objectives sampled; open responses justified in writing |
| S20 | Review-and-reteach; unit debrief | Learner names strongest and weakest objective; reteach plan set for Unit 06 |

## Files in this unit

- `README.md` (this file) — overview, pacing, objectives, standards.
- `lessons/lesson-01-random-variables-distributions.md` through
  `lessons/lesson-06-inference-from-distributions.md` — six fully
  written lessons.
- `practice.md` — Practice Sets A–G.
- `project.md` — The Fair-Game Audit investigation with a 40-point rubric.
- `resource-pack.md` — verified Resource Pack.
- `assessments/week-22_quiz.md` — formative quiz (10 items, 20 points).
- `assessments/unit-assessment.md` — culminating assessment (6 tasks,
  50 points).
- `teacher-guide.md` — adult-only pacing, misconception, and reteach notes
  (no answer key inside).
- `answer-key.md` — adults-only worked solutions for every scored item.
- `assets/prize-spinner-game.png` — generated illustration used in
  Lessons 03–04 and the project, with `assets/README.md` (prompt, tool,
  date, factual review, alt text, caption, text-only alternative).
- `assets/normal-curve.svg` — deterministic standard-normal-curve diagram
  used in Lesson 05, with the 68–95–99.7 regions labeled; reproducible
  from the density formula, not drawn from the illustration.

**Teacher materials are adults-only.** Student pages link to
`teacher-guide.md` and `answer-key.md` only with that label, and the
learner never works from the key. Planned later units (Unit 06:
optimization; Unit 07: limits; Unit 08: capstone) are named in prose
only; no links to unwritten files exist in this unit.
