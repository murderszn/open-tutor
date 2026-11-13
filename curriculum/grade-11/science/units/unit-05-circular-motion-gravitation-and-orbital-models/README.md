# Unit 05 — Circular Motion, Gravitation, and Orbital Models

**Grade 11 · Science · Physics pathway · Weeks 19–22 of the course year**
(draft, delivered 2026-11-12 for issue #51; not educator-reviewed)

## Overview

Units 01–04 taught the learner to measure motion, draw forces, and
account for energy and momentum. This unit answers the next question:
**what keeps things turning, and what holds the planets up?** The
answer is built in four moves:

1. **Uniform circular motion** — an object moving in a circle at
   constant speed is accelerating, because its velocity keeps
   changing direction. The acceleration points to the center and
   has magnitude `a_c = v² / r`.
2. **Centripetal force** — Newton's second law in the radial
   direction: a real force (tension, friction, normal force, or
   gravity) must supply `F_c = m v² / r`. There is no separate
   "centrifugal force" pulling outward on the moving object.
3. **Universal gravitation and Coulomb's law** — two inverse-square
   laws side by side (HS-PS2-4): gravity `F = G M m / r²` and
   electrostatics `F = k q₁ q₂ / r²`. The same mathematics, wildly
   different strengths — which is why gravity rules planets and
   electrostatics rules atoms.
4. **Orbits from real data** — setting gravity equal to the required
   centripetal force gives orbital speed `v = √(G M / r)` and
   Kepler's third law `T² = 4π² r³ / (G M)`. The learner tests
   Kepler's third law against the eight-planet dataset
   (`resources/solar_system_planets.csv`) and explains why a
   satellite is in continuous free fall, not floating.

The essential question running through all four weeks is: **if
nothing holds a satellite up, why doesn't it fall — and what
decides how fast it must go?**

## Prerequisites

From Units 01–04 and the Weeks 1–2 diagnostic (re-taught in
context where insecure):

- **From Unit 01:** vector components with sine and cosine;
  significant figures and the `value ± uncertainty` report;
  `g = 9.80 m/s²`; interpreting slopes and areas on graphs.
- **From Unit 02:** complete free-body diagrams; `F_net = ma`
  applied component by component; static and kinetic friction;
  the diagram-first routine (diagram → knowns → equation →
  units → check).
- **From Unit 03:** kinetic energy `½ m v²` (used in Lesson 06
  for escape velocity).
- **From grade-10 math:** right-triangle trigonometry; powers
  and scientific notation; rearranging formulas; reading a
  data table.

Session S9 re-checks the inverse-square idea before orbits begin;
anyone missing it gets targeted warm-ups there.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Explain uniform circular motion as accelerated motion toward
   the center; compute period, frequency, speed, and centripetal
   acceleration `a_c = v² / r = 4π² r / T²` for a described
   circular motion, with units and significant figures.
   (track objective 7)
2. Calculate the centripetal force `F_c = m v² / r` and name the
   real force that supplies it (tension, friction, normal force,
   or gravity) in horizontal circles, vertical circles, banked
   curves, and orbits — and explain why "centrifugal force" is
   not a force on the moving object. (track objective 7)
3. Apply Newton's law of universal gravitation `F = G M m / r²`
   to compute gravitational forces and surface gravity; use
   inverse-square reasoning to predict how a force changes when
   distance or mass changes; and distinguish weight (a force,
   in newtons) from mass (in kilograms). (track objective 7)
4. Apply Coulomb's law `F = k q₁ q₂ / r²` alongside gravitation;
   compare the two inverse-square forces by magnitude and range;
   and explain why gravity dominates planetary motion while
   electrostatics dominates atomic-scale forces. (track objective 7)
5. Derive and apply orbital speed `v = √(G M / r)` and Kepler's
   third law `T² = 4π² r³ / (G M)`; test Kepler's third law
   against the eight-planet dataset; and explain, with the
   free-fall argument, why satellites stay in orbit and what
   fixes a geostationary orbit. (track objective 7)
6. Plan and carry out a safe orbit investigation: write a testable
   question, identify variables, record simulation and dataset
   results in tables with units, compare measured orbital periods
   with the Kepler prediction, evaluate error and model limits,
   and communicate an evidence-based conclusion — with the adult
   approving the procedure first. (track objective 12)

## Vocabulary

Uniform circular motion, period, frequency, angular speed,
centripetal acceleration, centripetal force, centrifugal (fictitious)
force, universal gravitation, gravitational constant, inverse-square
law, weight, surface gravity, Coulomb's law, elementary charge,
orbit, orbital speed, orbital period, Kepler's laws, ellipse, focus,
semi-major axis, geostationary orbit, escape velocity, free fall,
apparent weightlessness, gravitational field, model, systematic
error.

## Standards and source notes

Reference framework: the Next Generation Science Standards (NGSS),
high school (9–12) band. Codes and descriptions were verified
2026-11-12 against the NGSS performance expectations as restated
by the California Department of Education's NGSS physical-science
DCI document and the Physics Classroom NGSS alignment index;
descriptions here are short paraphrases, not reproductions of the
standards text. **This crosswalk is a planning reference, not a
claim of state adoption, accreditation, or certification of
alignment.**

- **HS-PS2-4** — use mathematical representations of Newton's law
  of gravitation and Coulomb's law to describe and predict the
  gravitational and electrostatic forces between objects. This
  unit is its main home: Lessons 03–04 build both laws from the
  inverse-square pattern, and Lessons 05–06 use gravitation to
  predict orbital motion. Note the assessment boundary carried in
  the standard: assessment is limited to systems with two objects
  — every gravitation and Coulomb problem here involves exactly
  two bodies or two charges.
- **HS-PS3-5** — develop and use a model of two objects interacting
  through a field to illustrate the forces between them and the
  changes in energy of the objects due to the interaction.
  Lesson 06's orbital model and the Orbit Investigation (project)
  are the track's first field-model work: the gravitational field
  of the Sun (or Earth) is the model that explains the orbit.
- Science and engineering practices used in this unit: developing
  and using models (orbit diagrams and the field model, Lessons
  01, 05, 06); planning and carrying out investigations (project,
  S16–S17); analyzing and interpreting data (Lesson 05, project);
  using mathematics and computational thinking (every lesson);
  constructing explanations from evidence (Lessons 02, 05, 06).
- Constants used throughout (checked 2026-11-12):
  `G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²` (NIST CODATA 2022),
  `M_sun = 1.989 × 10³⁰ kg`, `M_earth = 5.9722 × 10²⁴ kg`
  (NASA Earth Fact Sheet / JPL Planetary Physical Parameters),
  `R_earth = 6.371 × 10⁶ m` (mean radius),
  `M_moon = 7.342 × 10²² kg`, `R_moon = 1.7374 × 10⁶ m`,
  `k = 8.99 × 10⁹ N m² C⁻²`, elementary charge
  `e = 1.602 × 10⁻¹⁹ C`. Planet distances and periods are the
  real reference values in `resources/solar_system_planets.csv`;
  computed speeds and Kepler ratios in this unit are rounded
  from those values and are labeled as computed, not measured.
  `g = 9.80 m/s²` throughout (three significant figures), as in
  Units 01–04.

## Pacing — 20 sessions (5 per week)

Sessions run ~50 minutes. The guiding adult adapts pacing to the
learner; the pattern below fills every week with lessons, practice,
reading, investigation, and review — never lessons alone.

| Session | Activity | Success criterion |
|---|---|---|
| **Week 19 — Uniform circular motion and centripetal force** | | |
| S1 | Lesson 01: uniform circular motion | Exit check passed; can state why constant speed in a circle still means acceleration |
| S2 | Practice Set A + reading (resource-pack circular-motion reading, S1–S2 tasks) | Set A complete; every centripetal acceleration computed from `v² / r` with units |
| S3 | Lesson 02: centripetal force — who provides it | Exit check passed; can name the real force supplying `F_c` in three different situations |
| S4 | Whirling-stop bench demonstration (adult-supervised, eye protection, clear area) + Practice Set B | Demo data recorded with units; Set B complete; no "centrifugal force" in any diagram |
| S5 | Lesson 03: Newton's law of universal gravitation | Exit check passed; inverse-square reasoning stated correctly for doubled and tripled distance |
| **Week 20 — Gravitation and Coulomb's law** | | |
| S6 | Practice Set C: gravitation problems (weight on Earth, Moon, Mars; force between bodies) | Set C complete; weight vs. mass distinguished in every answer |
| S7 | Lesson 04: Coulomb's law alongside gravitation | Exit check passed; can explain why the two laws share a shape but not a strength |
| S8 | Practice Set D + PhET "Gravity and Orbits" preview (adult previews; check the sim's force arrows against hand calculation) | Set D complete; sim observations recorded, not just watched |
| S9 | Retrieval and misconception clinic (Lessons 01–04): inverse-square warm-up for orbits; common errors re-worked from the answer key's traps | Learner can name and correct the "centrifugal force" and "mass = weight" errors |
| S10 | Adult check-in: short written review of Lessons 01–04, catch-up or extension | Gaps identified in writing; next-week plan agreed |
| **Week 21 — Orbits from real data** | | |
| S11 | Lesson 05: orbits and Kepler's laws — image activity | Exit check passed; `v = √(G M / r)` derived from `F_g = F_c`, not memorized |
| S12 | Practice Set E: orbital speeds and Kepler's third law from the planet dataset | Set E complete; `T² / r³` computed for at least four planets and compared |
| S13 | Lesson 06: satellites, escape, and orbital models | Exit check passed; can explain "falling and missing the ground" in two sentences |
| S14 | Practice Set F + orbit-data clinic (graph `T²` vs. `r³`; discuss rounding and the circular-orbit approximation) | Set F complete; graph shows the straight-line Kepler pattern |
| S15 | Flex: misconception review or extension (compute a geostationary orbit from scratch; or research one real mission) | Insecure objectives re-tested; extension documented if used |
| **Week 22 — Investigation and check** | | |
| S16 | **Orbit Investigation** (`project.md`), part 1: sim exploration, dataset calculations; adult approves procedure first | Prediction computed before any sim run; data table with units complete |
| S17 | **Orbit Investigation**, part 2: analysis, Kepler comparison, error and model-limits discussion, write-up | `T² / r³` comparison and an honest conclusion written |
| S18 | Week-04 formative quiz (~25 min) + same-session reteach | Score 16+/20 on track; missed clusters re-taught before S19 |
| S19 | Unit assessment (objectives 1–6) | Completed in one sitting; open-response reasoning included |
| S20 | Review/flex: assessment corrections, investigation portfolio check, Unit 06 preview | Corrections re-solved correctly; portfolio has all six objectives evidenced |

## Files in this unit

- `README.md` — this file: overview, objectives, pacing, standards notes.
- `lessons/` — six written lessons (01: uniform circular motion;
  02: centripetal force; 03: universal gravitation; 04: Coulomb's
  law; 05: orbits and Kepler's laws; 06: satellites, escape, and
  orbital models).
- `practice.md` — Practice Sets A–F, grouped by lesson, with spaced
  retrieval.
- `project.md` — the Orbit Investigation with rubric, plus the
  simulation/observation alternative.
- `resource-pack.md` — verified free resources, queries, videos,
  references, and task-to-resource mapping.
- `assessments/week-04_quiz.md` — formative quiz (Session S18).
- `assessments/unit-assessment.md` — culminating assessment (S19).
- `teacher-guide.md` — adults-only teaching notes (no student answers).
- `answer-key.md` — adults-only; every numbered item solved
  independently.
- `assets/README.md` — generation/source record for the unit's
  educational image.
- `assets/orbit-illustration.png` — generated illustration,
  embedded in Lesson 05's activity (with a text-only alternative).

All links in learner-facing pages are relative. Adult-only pages
(`teacher-guide.md`, `answer-key.md`) are never linked from student
questions. This unit is self-contained for grade 11; it links to no
other grade's lessons.
