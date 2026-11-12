# Teacher Guide — Unit 05: Probability Distributions and Statistical Inference

**Adults only.** This guide holds pacing, misconception, and reteach
notes. It contains **no answer key** — solutions are in `answer-key.md`.

## Pacing and session notes

The unit is 20 sessions of ~50 minutes (see the pacing table in the
unit README). The load-bearing sessions are S1 (distributions), S3
(binomial), S6 (expected value), S8 (decisions), S11 (normal), and S13
(inference). If a session runs short, protect the practice clinic that
follows it — the clinics are where the arithmetic becomes fluent.

- **S5 (reading/reference):** the learner reads OpenStax Chapter 4
  (§4.1–4.3) and rebuilds the binomial formula from counting in a
  spreadsheet. Check that the spreadsheet table's probabilities sum to
  1 before moving on.
- **S7 (spinner debrief):** the point is the interpretation, not the
  arithmetic: an expected value of +$0.88 does not promise $0.88 on
  the next spin. Ask the learner to name the four possible next-play
  outcomes before discussing the average.
- **S10/S15/S16 (project studios):** S10 must end with a complete,
  checked distribution table — do not let the learner simulate a game
  whose theoretical distribution is unfinished. S15's simulation needs
  a stated method (physical device or spreadsheet random numbers) that
  you approve first.
- **S18/S19:** score the quiz the same day; classify every error
  (rule check, formula, interpretation, arithmetic) and re-work one of
  each type before S19.

## Misconceptions to watch

- **Empirical vs. theoretical.** Learners routinely quote a relative
  frequency from a few trials as the probability. Keep asking: "Is
  that number from the process or from the data?"
- **Expected value as a promise.** "E(X) = 1.3" is read as "I will win
  $1.30 next time." Counter with the spinner: the next play pays $1,
  $0, −$1, or $4 — never $0.88.
- **Net gain vs. prize.** The ticket cost is forgotten constantly.
  Insist on a "net gain" row in every game table.
- **Binomial without checking.** Drawing without replacement from a
  small population is the classic misapplication. Make the four
  conditions a spoken checklist before any formula use.
- **"At least" as a single term.** `P(X ≥ 5)` is a sum. Learners who
  compute only `P(X = 5)` need the complement habit: `P(X ≥ 1) = 1 −
  P(X = 0)`.
- **Normal rule without normality.** The 68–95–99.7 rule is quoted for
  skewed data. Ask "is this approximately normal?" before any
  percentage is read off.
- **Interval as guarantee.** "52% ± 5%" is read as "definitely between
  47% and 57%." Correct to "plausible range" every time.
- **Big sample fixes bias.** It does not. A large voluntary-response
  sample is precisely wrong. Lesson 06, Practice Set F item 5, is
  built for this.

## Reteach paths

- **Distribution rules shaky:** return to Lesson 01, Worked example 3
  (the invalid table summing to 1.05) and Practice Set A items 3 and 7.
  Every later lesson depends on the two rules.
- **Binomial formula errors:** rebuild it from counting with `n = 4`,
  `p = 0.5` (Practice Set B item 7 is the `n = 6` version). If the
  learner drops the `(1 − p)^(n−k)` factor, have them write the
  probability of one specific sequence first.
- **Expected-value arithmetic:** use the spreadsheet layout (values,
  probabilities, products, sum) until the hand computation is
  reliable. Check with the two-dice sum: `E = 7` by symmetry is a
  fast self-check.
- **z-scores and the empirical rule:** keep the SVG
  (`assets/normal-curve.svg`) open and shade the region before
  computing. If z-scores are the blocker, return to the readiness
  check of Lesson 05.
- **Inference verdicts:** insist on the four-row table (claim, sample,
  z-score, verdict). If the z-score is right but the verdict is
  wrong, the issue is language, not arithmetic — practice translating
  z-scores into sentences.

## Readiness and next steps

The unit is ready to teach when the learner can: build and check a
distribution table; compute a binomial probability and state when the
formula applies; compute and interpret an expected value and a
standard deviation; find a fair price; use the empirical rule and a
z-score; and build a margin of error. The quiz (S18) samples all six
objectives; a score below 14/20 means reteach the weakest objective
before the culminating assessment.

**After this unit:** Unit 06 (optimization) reuses expected-value
thinking for model choice, and Unit 08 (capstone) reuses the whole
inference toolkit for evaluating a published data-based claim
(S-IC.6). Keep the learner's project audit report — it is a natural
capstone artifact.

## Safety, privacy, and boundaries

No hazardous materials, no chemicals, no heat. The spinner and dice
activities use ordinary household items under adult supervision. Games
of chance are educational models with stated probabilities — not
gambling advice, and not an invitation to gamble; real games of chance
are designed so the house wins on average. All data in the unit is
theoretical or clearly labeled fictional practice data; no real learner
records, photos, or personal information appear. The project's
simulation data is the learner's own and stays in private storage.
