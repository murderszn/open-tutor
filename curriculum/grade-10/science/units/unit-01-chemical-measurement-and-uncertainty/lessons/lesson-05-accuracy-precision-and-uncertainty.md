# Lesson 05 — Accuracy, Precision, and Uncertainty

**Goal:** You will distinguish accuracy from precision, compute the range of repeated measurements
as a simple uncertainty estimate, and report measurements as *value ± range*.
**Time:** ~50 minutes · **Materials:** notebook, calculator.
**Readiness check (2 min):** A scale reads your mass as 62.3 kg five mornings in a row, but your
true mass is 58.1 kg. Are the readings good or bad? (There are two different answers — that is the
lesson.)

## 1. Accuracy vs. precision

- **Accuracy** = closeness to the *true* value. An accurate measurement is right.
- **Precision** = closeness of *repeated* measurements to each other. Precise measurements agree.

The classic image is arrows at a target: clustered at the bullseye (accurate and precise);
tightly clustered off-center (precise but not accurate — a **systematic error** is shifting every
shot); scattered around the bullseye (accurate on average but not precise — **random error**
dominates); scattered off-center (neither).

**Worked example 1 — the readiness check.** Five readings: 62.3 kg every time; true value 58.1 kg.
Reasoning: the readings agree perfectly → **high precision**. They are all 4.2 kg above the true
value → **poor accuracy**. Diagnosis: systematic error — perhaps the scale was never zeroed, or it
sits on carpet. Repeating the measurement will not fix it; only finding and removing the bias will.

**Worked example 2 — random error.** Five balance readings of one bolt (fictional practice data):
52.48, 52.51, 52.46, 52.49, 52.50 g.
Reasoning: the values scatter within 0.05 g — no consistent shift, just flicker from air currents
and the instrument's last digit. This is **random error**: repeating and averaging helps, because
high and low fluctuations partly cancel.

## 2. The mean and the range

For repeated measurements, report two numbers:

- **Mean** = sum ÷ count (the best single estimate).
- **Range** = highest − lowest (the simplest **uncertainty** estimate: how far the data spread).

**Worked example 3 — full uncertainty report.** Using the bolt data above:
Mean = (52.48 + 52.51 + 52.46 + 52.49 + 52.50) ÷ 5 = 262.44 ÷ 5 = 52.488 → **52.49 g** (rounded to
the hundredths place the data were recorded in).
Range = 52.51 − 52.46 = **0.05 g**.
Report: **52.49 ± 0.05 g**. Read it as: "the mass is about 52.49 g, and repeated readings spread
about 0.05 g." The ± part is not a mistake — it is the honest statement of what is *not* known,
and a chemist who omits it is overstating the result.

*All datasets in this lesson are fictional practice data, not observations you made.*

## 3. Systematic vs. random error: finding the culprit

| | Systematic error | Random error |
|---|---|---|
| Effect | Shifts every measurement the same direction | Scatters measurements unpredictably |
| Precision | Can be high (tight cluster, wrong place) | Low (wide scatter) |
| Accuracy | Always harmed | Harmed in single readings; averaging helps |
| Examples | Unzeroed balance; parallax (Lesson 03); miscalibrated cylinder; consistently misreading the top of the meniscus | Balance last-digit flicker; air currents; slight differences in eye level |
| Fix | Find and remove the cause; calibrate | Repeat trials and average; improve technique |

**Worked example 4 — diagnosis.** A learner measures the same water volume five times:
24.5, 24.6, 24.4, 24.5, 24.6 mL. The true volume (from a calibrated pipette) is 26.0 mL.
Reasoning: the readings cluster tightly (range 0.2 mL) but sit ~1.5 mL below truth → precise but
not accurate → **systematic error**. Suspects: reading the bottom of the meniscus wrong, or the
cylinder's scale printed off. More trials would not help; recalibration or a corrected technique
would.

## 4. Percent error: scoring against a known value

When the accepted value is known, **percent error** = |experimental − accepted| ÷ accepted × 100%.
It is always positive and always a percent.

**Worked example 5.** A learner's density result is 2.68 g/mL; the reference value for aluminum is
2.70 g/mL. Percent error = |2.68 − 2.70| ÷ 2.70 × 100% = 0.02 ÷ 2.70 × 100% = 0.7407…% →
**0.74%**. Reasoning: under 1% error with student glassware is a strong result — but percent error
alone does not say *why* the 0.02 gap exists. That explanation is the error analysis in the lab
report (Lesson 06).

## Guided practice

1. Four archers' results are described: (a) all arrows in the bullseye; (b) tight cluster low-left;
   (c) scattered evenly around the bullseye; (d) scattered with no pattern far from center. Label
   each as accurate/precise/neither/both and name the likely error type where one dominates.
2. Five thermometer readings: 21.5, 21.7, 21.4, 21.6, 21.5 °C. Compute the mean, the range, and the
   ± report.
3. A balance reads 5.00 g with nothing on the pan. A learner weighs a sample five times and gets
   12.35–12.39 g. Is the dominant error systematic or random? What is the fix?

## Independent practice

4. Explain in 2–3 sentences why repeating a measurement reduces the harm from random error but
   does not fix systematic error.
5. A learner reports a volume as 24.5 ± 0.0 mL after one reading. Identify two problems with this
   report.
6. Experimental melting point 122 °C; accepted 125 °C. Calculate the percent error. Then state one
   systematic and one random error source that could contribute.
7. **Error analysis:** "My measurements were precise, so they must be accurate." Explain the flaw
   using the scale example from the readiness check.

## Application

Take five repeated readings of one real quantity (e.g., the mass of a book, the length of a
table edge, room temperature at five times). Record all five, compute the mean and range, write
the ± report, and name one likely random and one likely systematic error source in *your*
procedure. The adult reviews your error-source claims for plausibility.

## Exit check

1. Define accuracy and precision in your own words (one sentence each).
2. Data: 10.2, 10.5, 10.3, 10.4, 10.2 mL. Give the mean, range, and ± report.
3. Why is the ± part of a measurement report a strength rather than an admission of failure?

## Supports and extensions

- **Reading access:** the target analogy is summarized in the four-case list in §1 — sketch the
  four targets from the descriptions.
- **Alternate response mode:** the ± report may be written as a sentence ("about 52.49 g, give or
  take 0.05 g") before using symbols.
- **Extension:** research the difference between *standard deviation* and *range* as uncertainty
  estimates: what extra information does standard deviation use that range ignores? Write a
  half-page explanation with a small example. (This foreshadows advanced data analysis; range
  remains this course's working tool.)

## Teacher note

Common misconception: learners believe tight clustering *proves* correctness — the readiness
check's scale is the antidote; return to it whenever "precise therefore accurate" appears.
Another: treating ± 0.05 g as "the answer is wrong by 0.05" rather than as the spread of honest
repetition. Answer-key reference: `answer-key.md`, Lesson 05. If the learner's five home readings
show a suspiciously perfect repeat (e.g., identical five times), discuss honestly whether the
instrument can truly resolve that finely or whether readings were rounded — a good integrity
moment.
