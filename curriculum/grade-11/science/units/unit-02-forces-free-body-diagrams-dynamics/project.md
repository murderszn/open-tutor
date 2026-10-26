# Project — The Ramp Investigation

**Unit 02 · Sessions S16–S17 · adult-supervised bench investigation**
**Standards:** unit objective 5 (track objective 12); HS-PS2-1

## The question

Does a cart's measured acceleration down a ramp match the
prediction from Newton's second law, `a = g sin θ` — and if it
falls short, can friction explain the gap?

## Safety (adult reads first, approves the procedure)

- The ramp is a board on a stable support, low to the ground
  (ramp top no higher than a tabletop). The run-out at the
  bottom is clear, and a soft stop (a towel roll) catches the
  cart — never a hand, never a foot.
- Eye protection if the cart could leave the ramp. No one stands
  downhill of the ramp during a release.
- The adult previews every step, checks the support's stability,
  and stops the investigation if the cart bounces, the board
  slips, or the measuring method is unsafe.
- **Simulation/observation alternative:** if materials,
  supervision, or space are inadequate, do not improvise a
  taller or steeper ramp. Use the alternative in "If you cannot
  run the bench version" below instead — it earns full credit.

## Materials

A straight board or plank (about 1 m) as the ramp; a small cart,
toy car, or smooth block; books or a stable block to raise one
end; a meter stick or measuring tape; a protractor (or the
height/length method below); a phone camera or stopwatch for
timing; notebook; calculator.

## Method

1. **Predict before you release anything.** Choose three ramp
   angles (for example 10°, 15°, and 20° — gentle angles keep
   speeds low and timing honest). For each, compute the
   frictionless prediction `a_predicted = g sin θ` with
   `g = 9.80 m/s²`. Write the predictions in the table before
   any measurement.
2. **Set the angle two ways and check they agree.** Measure the
   angle with a protractor, and independently compute it from
   the ramp's rise and length: `sin θ = rise / ramp length`.
   If the two disagree by more than about 2°, re-measure before
   proceeding — an angle error corrupts every prediction.
3. **Measure acceleration from rest.** Mark a start line and a
   finish line a known distance `Δx` apart along the ramp
   (for example 0.800 m). Release the cart from rest (do not
   push), and time how long it takes to travel `Δx`. Repeat
   three times per angle. Compute each trial's acceleration
   from Unit 01 kinematics for motion from rest:
   `Δx = (1/2) a t²`, so `a = 2Δx / t²`. Average the three
   trials at each angle, and report the range as the
   uncertainty guide (Unit 01: uncertainty ≈ half the range).
4. **Compare, then explain.** For each angle, compute the
   percent difference:
   `(a_predicted − a_measured) / a_predicted × 100%`.
   If the measured value is consistently below the prediction,
   test the friction explanation: the model with kinetic
   friction predicts `a = g(sin θ − μ_k cos θ)`. Solve that
   equation for the effective `μ_k` implied by your data at
   each angle (rearranged: `μ_k = tan θ − a_measured /
   (g cos θ)`). If the three implied `μ_k` values roughly
   agree, friction is a good explanation; if they scatter
   wildly, timing error or a changing surface is the likelier
   story — say which, with evidence.

## Data table (copy into the notebook)

| Angle θ (°) | sin θ | a_predicted = g sin θ (m/s²) | Trial times (s) | a_measured, mean (m/s²) | Percent difference (%) | Implied μ_k |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Deliverables

1. The completed table, with predictions written before the
   measurements (the adult initials the prediction column).
2. A free-body diagram for the cart on the ramp, with and
   without friction, labeled with the forces from Lesson 05.
3. A short conclusion (about 150 words): does the data support
   the claim that `a = g sin θ` describes the frictionless
   case? What does the friction analysis add? What is the
   largest error source, and what would you change on a repeat?
4. One error-analysis paragraph: name one way the timing method
   could bias results in a single direction (systematic error)
   and one way it could scatter them (random error).

## If you cannot run the bench version (simulation/observation alternative)

Use the PhET "Forces and Motion: Basics" simulation (see the
resource pack; adult previews first) to explore how applied
force, friction, and mass change acceleration on a flat
surface, and record three observations that confirm or
challenge `F_net = ma`. Then analyze the following
**practice dataset, labeled fictional — not observations you
made** — with the same table and conclusion steps above: a
cart released from rest travels 0.800 m down ramps of 10°,
15°, and 20° in mean times 1.20 s, 0.980 s, and 0.840 s
respectively. Compute each measured acceleration, the percent
difference from `g sin θ`, and the implied `μ_k` at each
angle, and judge whether a single friction coefficient
explains all three angles. (Worked check: at 10°,
`a = 2 × 0.800 / 1.20² = 1.11 m/s²`, against a prediction of
1.70 m/s².)

## Rubric (adult-scored, 20 points)

| Criterion | Full marks | Partial | Missing |
|---|---|---|---|
| Prediction before measurement (4) | Predictions computed and initialed before any release | Predictions present but computed after measuring | No predictions, or predictions copied from results |
| Data table with units and repeats (4) | Three trials per angle, units on every column, mean and range reported | Trials present but units or repeats incomplete | Single trial per angle, or no units |
| Diagram and friction analysis (5) | Correct diagram both ways; `μ_k` derived and compared across angles with a judgment | Diagram or `μ_k` analysis present but incomplete | No diagram, or friction ignored |
| Conclusion and error discussion (5) | Evidence-based conclusion; systematic vs. random error distinguished with a concrete example of each | Conclusion present but generic; error types confused | No conclusion, or claims beyond the data |
| Safety and honesty (2) | Procedure adult-approved; fictional data (if used) labeled as fictional | Minor safety or labeling lapse, corrected | Unsafe procedure, or fictional data presented as measured |

**Ready:** 16+/20, with the diagram and conclusion criteria at
least partial. **Reteach:** below 16 — re-work the Lesson 05
incline analysis, then repeat the analysis (not necessarily the
bench runs) on the practice dataset.
