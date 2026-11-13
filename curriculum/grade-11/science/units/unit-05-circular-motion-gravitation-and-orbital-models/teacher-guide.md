# Teacher Guide — Unit 05: Circular Motion, Gravitation, and Orbital Models

**Adults only.** This guide contains teaching notes, misconception
guidance, and reteaching triggers. It contains no student answers;
all solutions are in `answer-key.md`. Never link this file from
a student question.

## How this unit fits

Unit 05 is the pivot of the year: the learner stops treating
forces as things that happen on tables and ramps and starts
treating them as things that hold the solar system together. The
derivation chain is the spine — `a_c = v² / r` (Lesson 01) →
`F_c = m v² / r` (Lesson 02) → `F = G M m / r²` (Lesson 03) →
`F_g = F_c`, so `v = √(G M / r)` and `T² = 4π² r³ / (G M)`
(Lesson 05). If the learner can re-derive that chain at S19
without notes, the unit worked. If they can only quote the final
formulas, re-teach Lessons 01 and 05 together.

## Per-lesson notes

### Lesson 01 — Uniform circular motion (S1)

- **Teach the vector idea first, the formula second.** The
  readiness question (1.1, the roundabout) is the diagnostic:
  a learner who says "no acceleration, speed is constant" needs
  the finger-tracing exercise (Supports) before any numbers.
- **Derivation (for the adult):** in a short time `Δt`, the
  velocity vector turns through angle `Δθ = v Δt / r`; the change
  in velocity is `Δv ≈ v Δθ`, so `a = Δv / Δt = v² / r`. Give
  the geometric sketch, not a full limit proof — the extension
  asks the learner to verify the `4π² r / T²` form instead.
- **Watch for:** learners computing `a_c` from the diameter
  instead of the radius, and mixing up period and frequency.
  Require the units (s, Hz, m/s, m/s²) on every line.
- **Answer-key reference:** items 1.1–1.8 and the application.

### Lesson 02 — Centripetal force (S3)

- **The diagram is the lesson.** Every problem must start with a
  free-body diagram of the moving object alone. The two durable
  errors ("centrifugal force" as an outward arrow; tension
  "pushing outward") are both diagram errors — fix them by asking
  "which object exerts this force on this object?" for each arrow.
- **Session S4 demonstration (whirling stopper):** adult runs it.
  String through a vertical tube, rubber stopper on top, washers
  on the bottom as counterweight. Eye protection for everyone
  nearby; clear area; stop immediately if the string frays.
  Vary the spin rate and the number of washers and record the
  radius: faster spin or fewer washers, larger radius. Connect
  the observation to `F_c = m v² / r` the same session — do not
  let the demo become a toy.
- **Watch for:** learners writing `F_c` as an extra force in the
  free-body diagram alongside tension or friction. `F_c` is the
  *net* force toward the center, not an additional force.
- **Answer-key reference:** items 2.1–2.8 and the application.

### Lesson 03 — Universal gravitation (S5)

- **Make the learner say the factor first.** For every scaling
  question, the answer is a factor (1/4, 1/9, ×2) before it is a
  number. The scaling table (1, 2, 3, 4 → 1, 1/4, 1/9, 1/16)
  belongs on the board all week.
- **The Moon match is the payoff.** Lesson 01's `a_c = 2.7 × 10⁻³
  m/s²` for the Moon and this lesson's `g = 2.70 × 10⁻³ m/s²`
  at the Moon's distance are the same number. Pause on it:
  Newton saw one law covering the apple and the Moon. If the
  learner misses the significance, re-do both calculations side
  by side.
- **Watch for:** `r` measured surface-to-surface instead of
  center-to-center; weight and mass used interchangeably;
  "twice the distance, half the force."
- **Answer-key reference:** items 3.1–3.8 and the application.

### Lesson 04 — Coulomb's law (S7)

- **Lead with the ratio, not the formula.** The hydrogen-atom
  comparison (`10³⁹`) is the idea; the formula is the tool.
  Learners who start from "gravity is strongest because it holds
  planets together" need the charge-cancellation argument:
  planets are neutral, so electrostatics cancels and only gravity
  is left.
- **Watch for:** forgetting the attract/repel word; dropping the
  sign of `q₁ q₂`; using `k` with the wrong units; treating
  `µC` as coulombs without converting (`1 µC = 10⁻⁶ C`).
- **Answer-key reference:** items 4.1–4.8 and the application.

### Lesson 05 — Orbits and Kepler's laws (S11)

- **Do the table live.** The moment all eight `T² / r³` ratios
  land on the same number is the payoff of the whole unit. Have
  the learner compute Mercury and Neptune by hand (Guided
  Practice 5.4) and check the rest against the lesson table.
- **The circular model is an approximation — say so.** Real
  orbits are ellipses; the dataset gives mean distances. Mercury
  (eccentricity 0.21) is the honest example of where the
  approximation strains. Do not let the learner conclude that
  planets move in exact circles.
- **The Moon period check (5.6):** the simple model gives about
  27.5 days vs. the actual 27.3 days. The ~0.5% gap is real
  physics the model omits — the Moon's own mass (the two-body
  formula should use `M + m`) and the Sun's pull. Treat it as a
  model-limits preview for Lesson 06, not as an error to hide.
- **Answer-key reference:** items 5.1–5.8 and the application.

### Lesson 06 — Satellites, escape, and orbital models (S13)

- **Act out the free-fall argument.** Drop a ball while walking
  forward; imagine walking faster and faster until the ground
  curves away as fast as the ball falls. The ISS-speeds-up
  example (Worked Example 2) is genuinely surprising — let the
  learner sit with it and check it against `v = √(G M / r)`
  rather than arguing from intuition.
- **Model limits are a required outcome (HS-PS3-5).** The learner
  must name what the model omits, not just what it predicts.
  Accept any three honest omissions with a real consequence
  (ellipses, other bodies, non-spherical mass, atmosphere,
  relativity for GPS clocks is a valid extension answer).
- **Answer-key reference:** items 6.1–6.8 and the application.

## Misconception map

| Misconception | Where it appears | Correction |
|---|---|---|
| Constant speed means no acceleration | L01, quiz Q1 | Velocity is speed + direction; direction changes, so velocity changes |
| Centrifugal force is a real outward force on the object | L02, L06, quiz Q10 | Inertia, not a force; the inward push is the real force |
| `F_c` is an extra force alongside tension/friction | L02 | `F_c` is the net force toward the center — the role, not a source |
| Weight = mass | L03, quiz Q4 | Mass is kg, same everywhere; weight is a force in N, changes with `g` |
| Twice the distance, half the force | L03 | Inverse-square: twice the distance, one quarter the force |
| Gravity is the strongest force | L04 | `10³⁹` weaker than electrostatics at atomic scale; it wins at planetary scale only because charge cancels |
| Heavier planets orbit slower | L05 | Mass cancels in `v = √(G M / r)`; distance decides |
| No gravity in space / satellites float | L06, assessment C1 | `g ≈ 8.7 m/s²` at 400 km; astronauts float because they are in free fall with the station |
| Satellites slow down and drop when they lose energy | L06 | Drag lowers the orbit, and a lower orbit is faster — they speed up and burn |

## Pacing and reteaching triggers

- **S9 clinic:** if the learner cannot state the inverse-square
  scaling factors (1/4, 1/9) without calculating, re-teach
  Lesson 03's scaling table before Lesson 05.
- **S10 check-in:** if Lessons 01–04 exit checks are insecure,
  spend S10 on re-teaching, not on extension. Lesson 05's
  derivation needs Lessons 01–03 secure.
- **S15 flex:** use for the geostationary derivation (5.7) if it
  was shaky, or the gravity-assist extension if the unit is
  secure. Do not start Unit 06 material early.
- **Quiz (S18) below 16/20:** re-teach the missed cluster the
  same session; the assessment (S19) assumes Lessons 01–05.
- **Assessment below 28/40:** re-teach the derivation chain
  (Lessons 01, 03, 05) with the adult, redo Practice Sets A, C,
  and E, then retake.

## Project guidance (S16–S17)

- Preview the PhET sim yourself before S16; confirm it runs and
  that the gravity/velocity arrows and path trace are visible.
  If the sim will not run, use the observation alternative in
  `project.md` — the dataset alone still answers the testable
  question.
- The most common error is unit conversion: days to seconds and
  million km to meters. Require the converted columns in the
  dataset table and check Earth's row yourself before the learner
  proceeds.
- The Moon check in the observation alternative is the best
  discriminator in the project: a learner who explains the
  `M_sun / M_earth` factor understands the derivation.
- Rubric: 24 points (6 criteria × 4). 20+ is on track; below 16,
  re-teach Lesson 05 and redo Part 2 with the adult.

## Safety

- Whirling demonstration (S4): adult-supervised, eye protection,
  clear area, stop if the string frays. The simulation is the
  alternative if supervision or space is inadequate.
- No other bench apparatus in this unit. All other investigations
  are simulation and dataset work.
- Simulation alternative rule (track §6): any procedure whose
  materials or supervision are inadequate is replaced by a PhET
  simulation or structured observation with the same
  data-analysis demand — never skipped silently.

## Accessibility

- Text alternatives are provided for the orbit illustration
  (Lesson 05) and the Lesson 01 SVG diagram (alt text and a
  text description of the geometry in the lesson).
- The PhET sim's keyboard operability must be checked by the
  adult before assignment; where it is inaccessible, the dataset
  analysis with the same calculations stands in.
- Oral explanation is accepted wherever a written explanation is
  not the assessed skill; extended time on the investigation and
  assessments; large-print problem sets on request.
- Color-blind-safe: the Lesson 01 SVG uses blue vs. red arrows
  *and* different labels (`v` vs. `a_c`) and positions, so the
  distinction does not depend on color alone.
