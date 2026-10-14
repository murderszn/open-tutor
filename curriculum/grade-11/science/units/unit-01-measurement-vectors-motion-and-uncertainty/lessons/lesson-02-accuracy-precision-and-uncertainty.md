# Lesson 02 — Accuracy, Precision, and Uncertainty

**Unit 01 · Session S3 · ~50 minutes**
**Standards:** HS-PS2-1 (strand connection: kinematics-data background); unit objectives 1, 2

## Student goal

By the end of this lesson I can distinguish accuracy from precision
without leaning on a memorized picture; I can estimate an instrument's
reading uncertainty (about half the smallest division); and I can take
repeated trials, compute the mean and the range, and report the result
as *value ± uncertainty* with matching decimal places.

## Materials

Notebook, pencil, calculator. Ruler marked in millimeters; a stopwatch
or phone timer for the Session S4 bench task.

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

2.1. A ruler's smallest markings are 1 mm apart. You measure a pencil
as 14.3 cm. What is a reasonable estimate of this single reading's
uncertainty, and why?
2.2. In one sentence each, define *accuracy* and *precision* as they
apply to repeated measurements.

(Adult: if 2.1 is insecure, re-do the instrument-precision discussion
from the grade-10 entry skills — the rest of this lesson assumes it.)

## Explicit teaching

**Accuracy** is closeness to the *true value*. **Precision** is
closeness of repeated measurements *to each other*. They are
independent: a tight cluster of readings far from the true value is
precise but inaccurate (a systematic error, like an unzeroed scale);
scattered readings centered on the true value are accurate on average
but imprecise (large random variation).

**Reading uncertainty.** No instrument reads perfectly. A working
estimate: a single reading's uncertainty is about **half the smallest
marked division**. A millimeter ruler reads lengths to about ±0.5 mm
(±0.05 cm). Digital instruments are read to their last displayed digit
(±1 in that digit), unless the manufacturer states otherwise.

**Uncertainty from repeated trials.** Random variation shrinks in
importance when you average. For this course:

1. Take at least 5 trials under identical conditions.
2. Compute the **mean**: sum ÷ number of trials.
3. Compute the **range**: maximum − minimum.
4. Estimate the uncertainty as about **half the range**.
5. Report `mean ± uncertainty`, rounding the uncertainty to one or two
   significant figures and matching the mean's decimal place to it.

This is an *estimate*, not a statistics course — but it is honest:
it says how much the data wobbled, and it stops you from claiming the
average is more trustworthy than the scatter allows.

**Rules for the ± report.**

- The uncertainty's decimal place sets the mean's decimal place:
  `12.43 ± 0.15 cm`, never `12.4288 ± 0.15 cm`.
- Uncertainty is always positive and always carries the unit.
- When the range is zero (all readings identical), the uncertainty
  defaults to the instrument's reading uncertainty — identical
  readings mean the variation is hiding below what the instrument can
  see, not that it is zero.

## Worked examples (modeled reasoning)

**Example 1 — Mean, range, and a ± report.**

Five stopwatch timings of the same 10-meter walk: 1.42 s, 1.47 s,
1.44 s, 1.45 s, 1.46 s.

*Mean:* (1.42 + 1.47 + 1.44 + 1.45 + 1.46) / 5 = 7.24 / 5 = 1.448 s,
which rounds to **1.45 s**.

*Range:* 1.47 − 1.42 = **0.05 s**.

*Uncertainty:* about half the range = 0.025 s, which rounds to one
significant figure as **0.03 s**.

*Report:* **1.45 ± 0.03 s**. The mean is quoted to the hundredths
place because the uncertainty lives in the hundredths place.

*What this says:* the walk probably took between 1.42 s and 1.48 s.
It does *not* say the true time is inside that band with certainty —
it says the *data* wobbled by that much.

**Example 2 — Accuracy vs. precision in a real choice.**

Two groups time the same pendulum swing. Group A: 2.01 s, 2.02 s,
2.00 s, 2.01 s. Group B: 1.95 s, 2.05 s, 1.98 s, 2.03 s. A calibrated
reference says the true period is 2.005 s.

*Group A* has tiny scatter (range 0.02 s) and a mean of 2.01 s —
precise *and* accurate. *Group B* has a mean of 2.00 s (accurate on
average) but a range of 0.10 s — accurate but imprecise. If you must
trust one group's single best estimate, take Group A's: high precision
with no sign of systematic error is the combination that earns trust.

*The systematic-error warning:* if Group A had read 2.11 s every
time, they would be precise but *inaccurate* — a constant offset, like
a slow thumb on the stopwatch, does not shrink with averaging. Only a
calibration check (measuring something known) catches it.

## Guided practice (with hints)

2.3. A digital scale reads, in grams: 152.3, 152.1, 152.4, 152.2,
152.3. Compute the mean, the range, and the ± report.
*Hint:* sum first (761.3), then divide by 5. Half the range to one
significant figure.

2.4. A graduated cylinder is marked every 1 mL. You read the volume
as 47.0 mL.
a) State the reading uncertainty.
b) You repeat the pour five times: 47.0, 47.5, 47.0, 46.5, 47.0 mL.
Compute the ± report and say whether the trial-based uncertainty or
the instrument uncertainty dominates.
*Hint:* half-range vs. ±0.5 mL — whichever is bigger wins.

## Independent practice

2.5. The true value of a standard mass is 50.00 g. Four students each
weigh it three times:
- Ana: 49.98, 50.01, 50.00 g
- Ben: 49.70, 49.72, 49.68 g
- Cai: 50.35, 49.65, 50.20 g
- Dee: 49.99, 50.02, 49.97 g
For each student, state whether the results are accurate, precise,
both, or neither. Justify with the mean and the range.

2.6. A learner's five reaction-time trials (seconds): 0.31, 0.28,
0.33, 0.29, 0.34. Report the result as value ± uncertainty.

2.7. You must measure a 2.50 m room dimension to within ±0.5 cm. A
tape marked in millimeters and a meter stick marked in centimeters are
available. Which do you choose, and why? What is each instrument's
reading uncertainty?

## Application

2.8. A digital bathroom scale reads 68.4 kg, 68.4 kg, 71.2 kg,
66.1 kg, 68.4 kg for the same person within one minute.
a) Compute the mean, range, and ± report.
b) A friend says "the scale is precise because most readings agree."
Do you agree? Identify the suspicious readings and explain what kind
of error (random or systematic) the outliers suggest.
c) What would you do next before trusting any number from this scale?

## Exit check (5 min)

2.9. Without drawing a target: a data set has a small range but its
mean is far from the accepted value. Is it accurate, precise, both, or
neither? What kind of error does this pattern suggest?
2.10. Five temperature readings (°C): 21.5, 21.8, 21.6, 21.7, 21.5.
Report as value ± uncertainty.

## Reading and language support

- The words *accuracy* and *precision* are near-synonyms in everyday
  speech; in science they are opposites in an important way. Write
  both definitions in the glossary with the Group A / Group B example
  as the anchor.
- Read Example 1's reasoning chain aloud: *sum → mean → range →
  half-range → report*. The order is the procedure; memorizing the
  order is memorizing the skill.
- Session S4 bench task: five repeated ruler readings of the same
  textbook edge, then the full mean ± uncertainty report in the
  notebook.

## Alternate response mode

The learner may dictate the mean/range/uncertainty reasoning while the
adult performs the arithmetic, then the learner checks each step
against the worked example. The assessed skill is choosing the right
computation and rounding correctly, not long division.

## Extension

Look up the difference between *standard deviation* and the
half-range estimate used here. In three sentences, explain when a
scientist would insist on the standard deviation instead, and compute
it for Example 1's five timings to compare with ±0.03 s.

## Teacher note (misconception)

Two durable errors: (1) reporting the mean to full calculator
precision (`1.448 s`) while the uncertainty is ±0.03 s — enforce the
decimal-place matching rule on every report; (2) believing more trials
fix a systematic offset — remind the learner that averaging shrinks
*random* scatter only, and only a known reference exposes bias.

*Answers for all numbered items (2.1–2.10) are in `../answer-key.md`
under "Lesson 02".*
