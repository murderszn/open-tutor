# Teacher Guide — Unit 02: Forces, Free-Body Diagrams, and Dynamics

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**diagram first, equation second**: no `F = ma` division is allowed
until the free-body diagram is drawn and the net force on each axis
is stated. Enforce it in writing from Session S5; the habit is the
actual curriculum, and dynamics is its vehicle.

Pacing guardrails: Lessons 01–03 must be solid before Lesson 05
(inclines need the component skill from Unit 01 and the diagram
skill from Lesson 03 together). If S10's check-in shows diagrams
insecure, borrow S15's flex session rather than compressing
Lesson 05. The investigation (S16–S17) needs two full sessions:
one for building/measuring, one for analysis — do not collapse
them, or the friction analysis becomes a copied answer.

## Lesson-by-lesson notes

### Lesson 01 — First law (S1)

- The readiness coin demonstration is worth doing live
  (adult-supervised). Learners who have *seen* the coin drop
  straight down rarely revert to "motion needs a force."
- The durable error is treating inertia as a force. Correct the
  word every time: inertia is a property (measured by mass), not
  an arrow on a diagram.
- **Ready vs. reteach:** ready = can sort a novel situation into
  the three cases (at rest / constant velocity / accelerating)
  and state the net force in each. Reteach = claims a forward
  force sustains steady motion; return to the coin and the
  cruising-car example.

### Lesson 02 — Third law (S3)

- Insist on the two-box habit: one arrow per object for a pair.
  Most third-law errors are bookkeeping errors.
- The elevator counterexample (normal force changes while weight
  does not) is the cleanest test for the weight–normal trap.
  Use it whenever a learner argues from "equal and opposite"
  alone.
- **Ready vs. reteach:** ready = names both objects for any
  pair without prompting. Reteach = draws both pair arrows on
  one object; return to the sentence frame in the lesson.

### Lesson 03 — Free-body diagrams (S5)

- Grade the diagram, not the final number, in this lesson. A
  correct diagram with a later arithmetic slip is a different
  problem from a diagram with a missing or invented force.
- The three recurring diagram errors: (a) the object's own
  forces on other objects, (b) velocity drawn as a force,
  (c) a lingering "push" after contact ends.
- The inline SVG diagram is hand-built to stated scales
  (horizontal 60 px = 120 N; vertical 98 px = 490 N). Use it to
  check the learner's own sketches: equal and opposite arrows
  on each axis for constant velocity.
- **Ready vs. reteach:** ready = a complete diagram for a novel
  situation with no invented forces. Reteach = any of the three
  errors above; re-draw with cut-out arrows before returning
  to paper.

### Lesson 04 — Second law and friction (S7)

- The two errors that survive into the assessment are (1) using
  a single force instead of the net force, and (2) writing
  `f_s = μ_s N` as an equality. Drill both with "what is the
  net force on this axis?" before any division.
- Example 2(b)'s starting-from-rest assumption is deliberate —
  reward learners who flag it. Ambiguity noticed is good physics.
- The HS-PS2-1 data table is the unit's standards anchor: the
  learner should be able to argue from a fresh table (quiz Q10
  tests exactly this), not merely recite `F = ma`.
- **Ready vs. reteach:** ready = computes friction from `N`,
  not from weight, and states static friction as a range.
  Reteach = `f = μW` on any problem where `N ≠ W`; return to
  Lesson 03's normal-force discussion.

### Lesson 05 — Inclines (S11)

- This is the hardest lesson in the unit. Budget the full
  session; the S9 component warm-up exists specifically for it.
- Keep returning to the 0°/90° limits — a five-second check
  that catches the sine/cosine swap and the flat-surface
  assumption together.
- The generated illustration carries no numbers by design. If a
  learner quotes a measurement "from the image," correct that
  immediately: the image is a scene to draw a diagram from, not
  a data source. The text alternative carries the same scene
  information for learners who cannot use the image.
- The inline SVG incline diagram is drawn from stated
  geometry (ramp run 260 px, rise 150 px, θ = 30.0°). Check the
  learner's diagram against it: normal force perpendicular to
  the slope, friction up the slope, weight straight down with
  dashed components.
- **Ready vs. reteach:** ready = derives `N = mg cos θ` from
  the perpendicular balance on a novel angle. Reteach =
  writes `N = mg` on a slope; return to the limits check.

### Lesson 06 — Connected systems (S13)

- Fix the sign convention before writing equations: "positive
  = the direction the system actually moves." Never let a
  learner solve an Atwood problem by subtracting weights
  without dividing by total mass.
- The two-way tension check is non-negotiable in marking: it
  catches nearly every sign error.
- **Ready vs. reteach:** ready = system and separate-bodies
  methods agree on tension for a novel system. Reteach =
  tension computed one way only, or `T = mg` for an
  accelerating hanging mass; return to Example 2's
  equilibrium-vs-acceleration contrast.

## Investigation notes (S16–S17)

- Initial the prediction column *before* any release. A
  prediction written after measuring is not a prediction.
- The most common failure is angle measurement: insist on the
  two-way angle check (protractor vs. rise/length). A 2°
  error at 10° changes `sin θ` by about 12% — larger than
  the friction effect being studied.
- The practice dataset's implied `μ_k` values (0.061, 0.092,
  0.118) deliberately do *not* agree well: the honest conclusion
  is that a single constant friction coefficient does not fully
  explain those data. Reward that conclusion; do not reward a
  forced "friction explains everything" when the numbers say
  otherwise.
- Timing bias to watch for: a consistent reaction-time delay
  inflates every measured time, which *lowers* every computed
  acceleration (systematic); inconsistent release timing
  scatters results (random). Learners often swap these.

## Scoring guidance

- Quiz: 16+/20 on track; 12–15 targeted reteach; below 12
  re-teach before the assessment.
- Assessment: 48+/60 on track; 36–47 targeted reteach on missed
  objectives; below 36 re-teach the weak lessons before Unit 03.
- Project: 16+/20, with diagram and conclusion at least partial.
- Open responses are scored on force identification and
  reasoning, not on a single phrasing. A learner who flags a
  genuine ambiguity (Lesson 04 Example 2(b), the investigation's
  friction conclusion) earns credit for the flag even if their
  numbers differ in the last digit by rounding.
