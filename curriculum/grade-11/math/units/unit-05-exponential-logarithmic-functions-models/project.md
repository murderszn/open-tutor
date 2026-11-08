# Project — Which Model Fits?

**Investigation, Sessions 14–15 (plus the Session 19 gallery).**
All datasets below are clearly labeled fictional practice data —
invented for this investigation, not measurements of any real
investment, medicine, or plant. No real person's finances or health
data are involved, and nothing here is financial or medical advice.

## The task

You are given three datasets, each measured at `t = 0, 1, 2, 3, 4`
(the unit of `t` is stated per dataset). For each dataset:

1. Test the signatures from Lesson 02: first differences, second
   differences, and ratios between successive outputs.
2. Fit the best model of the matching family by hand (two-point fit
   is acceptable; a technology fit is welcome and must be labeled as
   such). Write the model with units.
3. Build a residual table: observed, predicted, residual
   (`observed − predicted`) for every point.
4. Predict at `t = 6` and write one limit sentence: what assumption
   would have to stay true for this prediction to hold, and what
   would break it?
5. Write a one-paragraph memo per dataset recommending the model (or
   recommending *against* using any of the three families), with
   evidence from steps 1–3 — not from the shape of a graph alone.

### Dataset A — Practice investment (fictional practice data)

Value in dollars at year `t`: `1000, 1060, 1124, 1191, 1262`.

### Dataset B — Practice plant height (fictional practice data)

Height in centimeters at week `t`: `12, 19, 26, 33, 40`.

### Dataset C — Practice medicine remaining (fictional practice data)

Milligrams remaining at hour `t`: `200, 160, 128, 102, 82`
(rounded from exact 0.8-ratio values).

## Deliverables

1. A signature table for all three datasets (differences, second
   differences, ratios).
2. One fitted model per dataset, with its parameters interpreted in
   context (initial value and rate, or slope, in words).
3. A residual table per dataset.
4. A `t = 6` prediction per dataset, each with a limit sentence.
5. Three short memos (one paragraph each) with recommendations.

## Worked starting point (do not copy — verify it yourself)

Dataset A ratios: `1060/1000 = 1.06`; `1124/1060 ≈ 1.060`;
`1191/1124 ≈ 1.060`; `1262/1191 ≈ 1.060`. The signature is
exponential, factor about 1.06 — a 6% yearly growth model
`V(t) ≈ 1000 · 1.06^t` dollars. Its residuals are tiny (for example,
at `t = 2` the model gives `1123.6` against an observed `1124`, a
residual of +0.4 dollars — rounding, not model error).

## Rubric (40 points)

| Criterion | Full credit | Partial credit | No credit |
|---|---|---|---|
| Signature tables (10 pts) | All three datasets tested with differences, second differences, *and* ratios; correct family named per dataset | One test missing or one family misnamed, but reasoning shown | Families guessed from graph shape, or tables missing |
| Fitted models (10 pts) | Correct family and parameters per dataset, with units and parameter interpretation | Correct family, parameter error, or missing units/interpretation | Wrong family, or a model with no derivation |
| Residual tables (8 pts) | Residual = observed − predicted, computed for every point, used in the memo | Residuals computed but sign flipped or unused | No residual table, or residuals invented |
| Predictions and limits (6 pts) | `t = 6` prediction per dataset, each with a specific limit sentence | Prediction without a limit, or a generic limit ("models can be wrong") | No prediction, or a prediction presented as certain |
| Memos (6 pts) | Each memo recommends with evidence (signature + residuals) and names what would change the recommendation | Memo recommends without evidence, or evidence is only graph shape | No memo, or a memo contradicting the learner's own tables |

**Expected results (for the adult's checking, not the learner's
starting point):** Dataset A is exponential, about
`1000 · 1.06^t` dollars, predicting about $1,419 at `t = 6`.
Dataset B is linear, `12 + 7t` centimeters (differences constant at
7), predicting 54 cm at `t = 6` — and the memo should note that a
plant does not grow 7 cm per week forever. Dataset C is exponential
decay, about `200 · 0.8^t` milligrams, predicting about 52 mg at
`t = 6` (exact model value 52.43 mg; rounded data give about 52 mg).
A memo that fits an exponential to Dataset B, or a linear model to
Dataset A or C, has failed the signature test however pretty its
graph looks.

## Safety and honesty notes

- Fictional data only: never substitute a real account balance, a
  real prescription, or a real person's measurements into this
  investigation.
- The investment dataset teaches compounding, not investing: it is
  not advice about any real product, and the adult verifies any real
  rate before discussing real money.
- State model limits in every memo: an exponential model that fits
  five points can still fail at `t = 6` if the underlying rate
  changes, and a linear model that fits five weeks can fail when
  growth saturates.
