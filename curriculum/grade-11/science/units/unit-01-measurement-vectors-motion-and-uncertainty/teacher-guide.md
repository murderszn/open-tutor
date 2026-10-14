# Teacher Guide — Unit 01: Measurement, Vectors, Motion, Uncertainty

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**honest measurement**: every number carries a unit, a precision, and
— where data is involved — an uncertainty. Enforce the three-part
report (number, unit, uncertainty) in writing from Session S1; the
habit is the actual curriculum, and kinematics is its vehicle.

Pacing guardrails: Lessons 01–03 must be solid before Lesson 04 (graph
slopes need the unit discipline; components need the trig warm-up in
S5). If S10's check-in shows vectors insecure, borrow S15's flex
session rather than compressing Lesson 04.

## Lesson-by-lesson notes

### Lesson 01 — SI, dimensions, significant figures (S1)

- The readiness check gates the lesson: if the 60.0 cm → m conversion
  is insecure, spend 10 minutes on prefixes before continuing.
- Require the written conversion factor with canceling units on every
  conversion through Lesson 02 — "moving the decimal" is banned until
  the factor method is automatic.
- Exit trap: in 1.10, learners "fix" 100 cm² by writing 100.0 cm²
  (four sig figs) instead of 100. cm² (three). The decimal point is the
  whole point — discuss it.
- **Ready vs. reteach:** ready = every S1 notebook number carries a
  unit and conversions show canceling factors. Reteach = any bare
  number; assign Practice Set A again with the factor written first.

### Lesson 02 — accuracy, precision, uncertainty (S3)

- The readiness check's 2.1 (half the smallest division) is the most
  re-used idea in the unit — it returns in the S4 bench task, S13,
  and the project. Get it right here.
- Misconceptions to watch: mean quoted to calculator precision
  against a coarse uncertainty (enforce decimal-place matching);
  "more trials fix a systematic offset" (they don't — only a known
  reference catches bias); range confused with uncertainty itself
  (uncertainty ≈ *half* the range).
- Application 2.8's scale is deliberately messy: reward the learner
  who distrusts the 68.4 kg cluster rather than averaging everything
  blindly. Skepticism about data is the skill being built.
- **Ready vs. reteach:** ready = a correct value ± uncertainty report
  from novel data without re-reading the lesson. Reteach = uncertainty
  reported without units, or the mean rounded independently of the
  uncertainty.

### Lesson 03 — vectors (S6)

- This is the hardest lesson in the unit. Budget the full session; the
  S5 trig warm-up exists specifically for the sin/cos choice.
- Enforce the pointing routine: point at the angle, then at the side
  touching it (adjacent → cosine). Mnemonics alone do not survive
  week 5.
- The durable error is reporting a bare angle ("53.1°") with no
  direction reference — reject it every time until "north of east"
  (or equivalent) is automatic.
- The inline SVG diagram is hand-built to scale (30 px = 1.00 km;
  coordinates verified: A = 90 px, B = 120 px, R = 150 px). Use it to
  check the learner's own tip-to-tail sketches — the resultant must
  run tail-to-tip, not tip-to-tail.
- **Ready vs. reteach:** ready = components with correct trig choice
  and signs on a novel angle (including angles off the +x axis, as in
  quiz Q5). Reteach = sin/cos swap; return to the pointing routine
  with the PhET "Vector Addition" sim open.

### Lesson 04 — kinematics graphs and constant acceleration (S11)

- Require the one-sentence story before any graph computation
  ("speeds up, then cruises"). Numbers without the story produce sign
  errors.
- Require the written sign convention ("up = +") on every free-fall
  problem. Unsigned free-fall work is returned ungraded.
- Watch for area-under-x–t-graph attempts — the area under an x–t
  graph has no physical meaning; the mantra is "slope on x–t, area on
  v–t, area on a–t."
- Equation choice: teach the selection question explicitly — "is time
  given or asked? No → v² = v₀² + 2aΔx." Learners who always reach
  for Δx = v₀t + ½at² stall on no-time problems.
- **Ready vs. reteach:** ready = correct equation choice with a
  stated reason, plus units that cancel to the expected quantity.
  Reteach = plugging numbers into the first equation memorized;
  re-do guided practice 4.3–4.4 with the routine written out.

### Lesson 05 — projectile motion (S16)

- Both prerequisites (components, free fall) must be solid — the
  readiness check is a real gate, not a warm-up.
- Attack the "take turns" model directly with the image activity:
  the equal horizontal gaps between the equal-time markers show the
  horizontal motion never pauses, while the growing vertical gaps show
  gravity acting on the vertical component alone. If the learner still
  narrates a pause at the top, replay the PhET sim in slow motion with
  velocity vectors shown.
- If a mass term appears anywhere in a prediction, stop — the learner
  is mixing force reasoning into kinematics. Re-derive from
  independence of motion.
- The image activity's text-only alternative carries the full data;
  a learner using it should be held to the same answers.
- **Ready vs. reteach:** ready = a full range prediction (both launch
  types) with the vertical-first reasoning stated. Reteach =
  horizontal motion used to find flight time; re-do Example 1 with
  the "gravity sets the clock" narration.

## Project facilitation (S17)

- Approve the launcher, range, and backstop *before* any launch —
  this is a safety gate, not a formality. Low speed only; eye
  protection on.
- The prediction must be written before the first launch. If the
  learner "refines" the prediction after seeing landings, the P4
  rubric criterion drops to Developing — say this upfront.
- The most valuable outcome is a *missed* prediction discussed
  honestly; a lucky hit with no error discussion scores lower than a
  15% miss with two directional error sources. Make this explicit
  before S17 so the learner doesn't fear being wrong.
- For the mass check: if the different-mass ball lands noticeably
  differently, suspect the launcher (different fit/friction), not
  gravity — that's itself a good error discussion.
- The PhET alternative carries the same rubric; sim-specific error
  sources (measurement-tool placement, readout rounding) replace
  bench ones.

## Assessment scoring guidance

- **Week-04 quiz (S18):** 2 points per question, 20 total. Award full
  credit only when units and significant figures are present on
  numerical answers; half credit for a correct number with missing
  units. 16+ = on track; 12–15 = reteach the missed clusters in the
  same session; below 12 = re-teach the weak lessons before S19.
- **Unit assessment (S19):** 66 points total (weights on the paper).
  UA3c, UA9d, and UA10 are explanation items — score the reasoning,
  not the vocabulary; accept any correct directional error analysis.
  UA9's table sketch needs column headings with units, not filled
  data. 53+ = objectives secure; 40–52 = targeted reteach; below 40 =
  re-teach weak weeks before Unit 02.
- **Spiral note for Unit 02:** objectives 2 (vectors) and 3
  (kinematics) return as force components and dynamics; keep the
  learner's vector-component work from this unit — Unit 02 will
  build directly on it.

## Common misconception log (unit-wide)

1. Decimal-shifting conversions without factors (L01).
2. Exact numbers treated as precision limits (L01).
3. Calculator-precision means against coarse uncertainties (L02).
4. Averaging away systematic error (L02).
5. sin/cos swap in components (L03); bare-angle resultants (L03).
6. Area under x–t graphs (L04); unsigned free-fall work (L04).
7. "Take turns" / apex-pause model of projectiles (L05); mass in the
   prediction (L05).
