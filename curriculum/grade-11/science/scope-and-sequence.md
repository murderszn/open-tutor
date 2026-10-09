# Grade 11 Science — Scope and Sequence

Audit section A00 of [issue #51](https://github.com/murderszn/open-tutor/issues/51).
Status: **validated draft** (this document, the track README, and the grade-11
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| `curriculum/grade-11/science/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-11/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy lessons, labs, assessments, keys, or diagnostics exist to keep, revise, or retire |
| Grade-11 hub page | `curriculum/grade-11/README.md` | **New** — created by this run: science track listed as audited draft; mathematics audit noted as delivered in unmerged draft PR #117; language arts and social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-11/science/README.md` | **New** — written by this run as a real subject index with course description, 12 measurable objectives, safety summary, and adult guidance |
| Scope and sequence | `curriculum/grade-11/science/scope-and-sequence.md` | **New** — this document |
| Grade-10 science track (#43→#47, Chemistry; audit in open draft PR #115, unmerged) | PR branch | **Prerequisite reference only** — its end-of-year objectives (measurement to instrument precision, unit conversion, significant figures, uncertainty, atomic structure, investigation practices with error discussion) define the entry skills below; no grade-10 lessons copied upward; no learner-facing cross-grade links |
| Grade-10 math track (#46, Geometry; audit in open draft PR #114, unmerged) | PR branch | **Prerequisite reference only** — right-triangle geometry, coordinate graphing, proportional reasoning, and formula rearrangement are the entry math skills below; vector components in U01/U02 build directly on right-triangle trigonometry |
| Grade-9 science track (#43, Biology; audit in open draft PR #107, unmerged) | PR branch | **Entry-level reference only** — general investigation habits and data-table reading; no physics content assumed |
| `resources/physics_fundamentals.md` | self-described grades 4–8 guide | **Bridge reference only** — useful warm-up vocabulary (vector, velocity, work, energy, wave terms) and quick constants (g ≈ 9.8 m/s², c ≈ 3.00 × 10⁸ m/s, sound ≈ 340 m/s) where grade-10 skills are insecure; never assigned as grade-11 instruction. Its "Facts & Numbers" and formula layouts must be re-verified against authoritative sources before reuse in grade-11 work |
| `resources/weights_and_measures.md` | measures reference | **Bridge reference only** — SI prefixes and unit-conversion framing for U01 warm-ups; quantitative dimensional analysis is new grade-11 content |
| `resources/thermodynamics_laws.md` | self-described grades 4–8 guide | **Bridge reference only** — everyday-language framing for U08 warm-ups; calorimetry and the second law are new grade-11 quantitative content |
| `resources/astronomy_fundamentals.md` | astronomy reference | **Reuse** — orbital-motion background feeding U05; the building run verifies the specific sections it cites |
| `resources/solar_system_planets.csv` | 8 planets; columns: planet_order_from_sun, name, distance_from_sun_million_km, orbital_period_days, equatorial_diameter_km, surface_gravity_m_s2, known_moons, fact, google_maps_url | **Reuse with a gap filled** — U05 computes orbital speeds from distance/period data and checks Kepler's third law; values are real reference data. **Gap:** no stellar-mass or G-constant column, so the building run adds a sourced constants table (G, M_sun, M_earth) checked at build time. Every dataset task names columns and units and states that values are real reference data except where practice rounding is explicit |
| `resources/semester-resource-library.md` | discovery shelf | **Discovery only** — its PhET physics filter link is a starting point; every linked simulation will be opened and checked for fit by the building run |
| PhET Interactive Simulations (University of Colorado) | free, no-account browser simulations: "Projectile Motion", "Forces and Motion: Basics", "Energy Skate Park", "Collision Lab", "Gravity and Orbits", "Wave on a String", "Circuit Construction Kit: DC", "Faraday's Electromagnetic Lab" | **Reuse as simulation alternatives and core practice** — the adult previews each sim for advertising and age suitability before the learner opens it; named sims are candidates the building run must open and verify, not pre-approved recommendations |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| `stem/` | 0 Markdown files at `main` | **No reuse** — nothing to preserve; existing `stem/` links elsewhere stay untouched |
| `assignments/` catalog, grade 4/5/7/8 quiz libraries | legacy material | **Not reused** — no grade-11 physics content found; the building runs will re-check before each unit rather than assume |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no labs, no assessments, no keys, no diagnostics, no resource packs,
and no teaching images exist anywhere in `curriculum/grade-11/science/`.

## 2. Prerequisites

Learners typically enter grade-11 science with the grade-10 track's stated
end-of-year objectives (Chemistry pathway, currently in unmerged draft
PR #115) and Geometry skills (draft PR #114):

- **From grade-10 science:** measuring length, mass, volume, and temperature
  with the correct instrument; recording to instrument precision; applying
  significant-figure rules; distinguishing accuracy from precision and
  reporting uncertainty; multi-step unit conversions that cancel correctly;
  planning investigations with testable questions, variables, data tables
  with units, and error discussion; lab-safety habits.
- **From grade-10 math:** right-triangle geometry and the trigonometric ratios;
  coordinate graphing and interpreting slopes; proportional reasoning;
  evaluating and rearranging formulas; solving multi-step numerical problems
  with units.
- **From grade 8:** the particle model of matter; forces as pushes and pulls;
  energy as the ability to do work (MS-PS2-2, MS-PS3-1 background).

The Weeks 1–2 diagnostic checks unit conversion, significant figures,
right-triangle trigonometry, formula rearrangement, and graph interpretation.
Learners missing the trigonometry prerequisite get targeted warm-ups in U01
before vectors begin; learners missing the science prerequisites get the
middle-school bridge references above, never as a substitute for the
grade-11 lessons.

## 3. Track objectives

The twelve measurable, adult-assessed objectives are stated in the
[track README](README.md) (§ "Track objectives") and are not repeated here.
Each unit below names the objectives it serves; the R00 review will assess
all twelve.

## 4. Standards crosswalk

Reference framework: the Next Generation Science Standards (NGSS), high
school (9–12) band. Codes and descriptions were verified on 2026-10-07
against NGSS alignment references (ExploreLearning NGSS correlation pages and
the Physics Classroom NGSS alignment index, both restating the Achieve
performance expectations; corroborated by the California Department of
Education's NGSS physical-science DCI document). Descriptions below are short
paraphrases for mapping purposes, not reproductions of the standards text.
**This crosswalk is a planning reference, not a claim of state adoption,
accreditation, or certification of alignment.** Schools vary in their
high-school science order; physics in grade 11 is this track's proposed
pathway (following Biology in grade 9 and Chemistry in grade 10).

| NGSS performance expectation (verified 2026-10-07) | Track units |
|---|---|
| HS-PS2-1 — analyze data to support the claim that Newton's second law describes the mathematical relationship among net force, mass, and acceleration | U01, U02 |
| HS-PS2-2 — use mathematical representations to support the claim that total momentum is conserved when there is no net force on the system | U04 |
| HS-PS2-3 — apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes force on a macroscopic object during a collision | U04 |
| HS-PS2-4 — use mathematical representations of Newton's law of gravitation and Coulomb's law to describe and predict gravitational and electrostatic forces | U05, U07 |
| HS-PS2-5 — plan and conduct an investigation showing an electric current produces a magnetic field and a changing magnetic field produces an electric current | U07 |
| HS-PS3-1 — create a computational model to calculate the energy change of one system component from the changes and flows of the others | U03 |
| HS-PS3-2 — develop and use models showing macroscopic energy is the combination of particle-motion energy and relative-position energy | U03, U08 |
| HS-PS3-3 — design, build, and refine a device that converts one energy form to another within constraints | U03, U08 |
| HS-PS3-4 — investigate thermal-energy transfer between different-temperature components in a closed system toward uniform distribution | U08 |
| HS-PS3-5 — develop and use a model of two objects interacting through fields to show forces and energy changes | U05, U07 |
| HS-PS4-1 — use mathematical representations for the frequency/wavelength/speed relationships of waves in various media | U06 |
| HS-PS4-2 — evaluate questions about the advantages of digital transmission and storage of information | U06 (enrichment) |
| HS-PS4-3 — evaluate claims, evidence, and reasoning for the wave vs. particle models of electromagnetic radiation | U06, U08 |
| HS-PS4-4 — evaluate validity and reliability of published claims about effects of different EM frequencies absorbed by matter | U06 (media-literacy strand) |
| HS-PS4-5 — communicate technical information about devices that use wave behavior and light–matter interactions | U06 |

Science and engineering practices run through the year: planning and carrying
out investigations (U01, U02, U04, U05, U07, U08), developing and using models
(U03, U05, U07, U08), analyzing and interpreting data (every unit), using
mathematics and computational thinking (every unit), constructing explanations
from evidence (U02, U04, U06, U07), and designing solutions (U03, U04, U08).
Crosscutting concepts of cause and effect (U02, U04, U07), systems and system
models (U03, U05, U07), energy and matter (U03, U04, U08), patterns (U05, U06),
and scale, proportion, and quantity (U01, U05, U06) are named explicitly in
unit objectives.

## 5. 36-week sequence

Five 50-minute sessions per week. A typical unit week mixes two concept
lessons with worked examples, one investigation or simulation session, one
data/problem-solving practice session, and one review or check session; the
20 sessions of each four-week unit therefore hold 4–6 written lessons plus
investigations, reading, practice, and review — never six lessons alone.
Weeks 1–2 are diagnostic and routines; Weeks 35–36 are final review. Each
unit's fourth week ends with a formative check and a flex session for
catch-up or extension.

### Weeks 1–2 — Diagnostic and routines (flexible)

- Math-skills diagnostic: unit conversion, significant figures, right-triangle
  trigonometry, formula rearrangement, graph interpretation. Uncertainty
  refresher from grade-10 chemistry. Notebook setup, safety contract, and the
  simulation-vs-bench decision rule for the year. Adult and learner agree on
  pacing and session routines.

### Unit 01 — Measurement, vectors, motion, and uncertainty (Weeks 3–6)

Objectives 1, 2, 3, 12.

- **Week 3 — SI, dimensions, and uncertainty.** SI base units and prefixes;
  dimensional analysis with canceling units; significant-figure rules for
  measured vs. exact numbers; accuracy vs. precision; range of repeated trials
  as an uncertainty estimate.
- **Week 4 — Vectors.** Scalars vs. vectors; graphical vector addition
  (tip-to-tail); components from right-triangle trigonometry; resultant
  magnitude and direction; navigation and displacement problems.
- **Week 5 — One-dimensional kinematics.** Position–time, velocity–time, and
  acceleration–time graphs and what slopes and areas mean; the
  constant-acceleration equations; ticker-tape or phone-video motion lab with
  uncertainty on the measured times.
- **Week 6 — Projectile motion.** Independence of horizontal and vertical
  motion; predicting range, height, and flight time; launch lab comparing
  predicted vs. measured range with error discussion; formative check; flex
  session.

### Unit 02 — Forces, free-body diagrams, and dynamics (Weeks 7–10)

Objectives 2, 3, 4, 12.

- **Week 7 — Newton's first and third laws.** Inertia and frames of reference;
  action–reaction pairs; drawing complete free-body diagrams; balanced forces
  and static equilibrium.
- **Week 8 — Newton's second law from data.** Cart-and-ramp or simulation data
  relating net force, mass, and acceleration (HS-PS2-1); F = ma with kinetic
  friction; solving for unknowns with units carried through.
- **Week 9 — Inclines and connected systems.** Components of weight on an
  incline; tension; Atwood-style pulley systems; a repeatable problem-solving
  routine (diagram → knowns → equation → units → check).
- **Week 10 — Dynamics investigation and check.** Investigation: measure
  acceleration down ramps of varying angle and compare to the
  component-of-weight prediction; formative check; flex session.

### Unit 03 — Energy, work, power, and conservation (Weeks 11–14)

Objectives 5, 12.

- **Week 11 — Work and kinetic energy.** Work as force through distance;
  the work–energy theorem; computing kinetic energy; positive vs. negative
  work.
- **Week 12 — Potential energy and conservation.** Gravitational and elastic
  potential energy; conservation of mechanical energy; solving motion
  problems by energy accounting instead of kinematics.
- **Week 13 — Nonconservative forces and power.** Friction and efficiency;
  power as rate of energy transfer; a spreadsheet energy budget of a real
  system (HS-PS3-1: computational model of component energy changes).
- **Week 14 — Energy-conversion build and check.** Build and test a small
  energy-conversion device (e.g., rubber-band car or waterwheel) within
  stated constraints (HS-PS3-3 strand); formative check; flex session.

### Unit 04 — Momentum, collisions, and impulse (Weeks 15–18)

Objectives 6, 12.

- **Week 15 — Momentum and impulse.** Momentum as mass times velocity;
  impulse–momentum theorem; impulse from force–time graphs.
- **Week 16 — Conservation of momentum.** Mathematical representations for
  two-body collisions with no net external force (HS-PS2-2); elastic vs.
  inelastic collisions; collision-cart or simulation data analysis.
- **Week 17 — Collision safety engineering.** Extending collision time to
  reduce peak force; design, build, and test a protective device for a
  falling payload (HS-PS2-3); evaluate designs against measured force or
  damage criteria and refine.
- **Week 18 — Midyear checkpoint.** Cumulative problems spanning U01–U04
  (vectors, kinematics, dynamics, energy, momentum); adult and learner review
  the year's objectives and reset pacing; flex session.

### Unit 05 — Circular motion, gravitation, and orbital models (Weeks 19–22)

Objectives 7, 12.

- **Week 19 — Uniform circular motion.** Circular motion as accelerated motion
  toward the center; centripetal force; safe whirling-stop investigation
  (adult-supervised, eye protection, clear area).
- **Week 20 — Gravitation and Coulomb's law.** Newton's law of universal
  gravitation; inverse-square reasoning; weight vs. mass; Coulomb's law for
  electrostatic force alongside gravitation (HS-PS2-4).
- **Week 21 — Orbits from real data.** Orbital speed and period from the
  planet dataset (`solar_system_planets.csv`: distance and period columns);
  checking Kepler's third law against the data; why satellites don't fall.
- **Week 22 — Orbits investigation and check.** Simulation investigation
  ("Gravity and Orbits" candidate, verified at build time); formative check;
  flex session.

### Unit 06 — Waves, sound, and optics (Weeks 23–26)

Objectives 8, 12.

- **Week 23 — Wave properties.** Transverse vs. longitudinal waves;
  wavelength, frequency, amplitude, speed; quantitative predictions with
  v = fλ (HS-PS4-1); wave-on-a-string or slinky investigation.
- **Week 24 — Sound.** Production, speed, pitch, and loudness; the Doppler
  effect; standing waves; digital vs. analog signal advantages as an
  enrichment reading (HS-PS4-2).
- **Week 25 — Light and optics.** Reflection and refraction; Snell's law at
  a qualitative level; ray diagrams for plane mirrors and thin lenses;
  how cameras, telescopes, and fiber optics use these principles
  (HS-PS4-5).
- **Week 26 — EM spectrum, models, and check.** The electromagnetic spectrum;
  wave vs. particle models of light and when each is more useful (HS-PS4-3);
  evaluating published claims about radiation effects (HS-PS4-4,
  media-literacy strand); formative check; flex session.

### Unit 07 — Electric circuits, fields, and electromagnetism (Weeks 27–30)

Objectives 9, 10, 12.

- **Week 27 — Current, voltage, resistance.** Charge flow; Ohm's law;
  building safe low-voltage DC circuits; using ammeters and voltmeters
  correctly (in series vs. across).
- **Week 28 — Series, parallel, and power.** Equivalent resistance;
  current and voltage division; electrical power; short circuits, fuses,
  and why they are safety devices.
- **Week 29 — Fields and induction.** Mapping electric and magnetic fields;
  electromagnets; motors and generators; investigation of electromagnetic
  induction — a changing magnetic field producing current (HS-PS2-5;
  field-interaction energy models, HS-PS3-5).
- **Week 30 — Circuit design challenge and check.** Design a circuit to meet
  stated constraints (e.g., two brightness levels, a working switch);
  formative check; flex session.

### Unit 08 — Thermal systems, modern physics, and engineering capstone (Weeks 31–34)

Objectives 5, 11, 12.

- **Week 31 — Thermal energy transfer.** Temperature vs. thermal energy;
  conduction, convection, radiation; specific heat capacity; calorimetry
  calculations; thermal-mixing investigation in a closed container
  (HS-PS3-4).
- **Week 32 — Energy spreading and efficiency.** Why thermal energy spreads
  (second-law direction in everyday systems); heat engines and efficiency
  limits at a qualitative level; energy degradation.
- **Week 33 — Modern physics concepts.** The photoelectric effect and photons
  (HS-PS4-3 continued); the scale of nuclear energy release relative to
  chemical reactions; relativity basics — time dilation and E = mc² at a
  qualitative level.
- **Week 34 — Engineering capstone.** Design, build, and refine an
  energy-conversion or wave-based device within constraints (HS-PS3-3);
  final presentations with energy accounting (HS-PS3-2); flex session.

### Weeks 35–36 — Final review (flexible)

- Cumulative problem sets across all eight units; investigation portfolio
  review; re-check of any objectives still insecure. The R00 review package
  (diagnostic, midyear/final review, cumulative assessment and keys) is a
  separate checklist section and is planned, not delivered here.

## 6. Safety rules for this track

The adult reads every procedure before the learner begins and keeps veto
power over all bench work. Rules:

1. **Electricity:** battery and low-voltage DC only (12 V or less). Never
   mains outlets, wall adapters opened for parts, or household wiring.
   Dry hands; disconnect batteries before rewiring; adult inspects every
   circuit before power is applied.
2. **Projectiles and rotating apparatus:** safety glasses for the learner and
   anyone nearby; a clear range with a backstop; low-speed launchers only;
   whirling apparatus used in an open area away from people and breakables.
3. **Heat:** hot water handled with adult present and insulated grips; no
   open flames, heating elements, or microwaving sealed containers.
4. **Light sources:** low-power laser pointers are adult-operated only and
   never aimed at eyes or reflective surfaces toward faces; prefer LED
   flashlights and slits for optics work.
5. **Glass and sharps:** adult handles any cutting or glassware; report
   breakage immediately; no barefoot lab work near glass.
6. **Chemicals:** this track needs none beyond household items already
   approved in grade-10 chemistry; nothing new is introduced here.
7. **Simulation alternative:** any procedure whose materials or supervision
   are inadequate is replaced by a PhET simulation or a structured
   observation with the same data-analysis demand — never skipped silently.
8. **Emergency plan:** the adult states the household's first-aid, eye-flush,
   and fire-response plan before Week 3; the learner can recite how to get
   help.

## 7. Accessibility supports

Every unit's building run must provide, not merely promise:

- **Text alternatives:** alt text and a text-only data table or description
  for every image, diagram, and simulation screenshot used in an activity.
- **Simulation access:** the adult verifies keyboard operability and
  screen-reader labels of each PhET sim before assignment; where a sim is
  inaccessible, a worked data set with the same analysis stands in.
- **Reading:** key terms defined in place; large-print problem sets on
  request; captions required on all videos.
- **Doing:** extended time on investigations and assessments; seated lab
  options; tactile alternatives (string-and-tape ray diagrams, raised-line
  or embossed graphs); color-blind-safe palettes for all graphs the track
  provides.
- **Responding:** oral explanation accepted wherever a written explanation
  is not the assessed skill; adult scribing allowed for the investigation
  portfolio with the learner dictating the reasoning.

## 8. Internal resource reuse, new reference needs, and paths for units

- **Reuse at build time:** `resources/physics_fundamentals.md` and
  `resources/weights_and_measures.md` (U01 warm-ups),
  `resources/thermodynamics_laws.md` (U08 warm-ups),
  `resources/astronomy_fundamentals.md` (U05 background),
  `resources/solar_system_planets.csv` (U05 orbital calculations),
  `resources/semester-resource-library.md` (PhET discovery), and the
  `teachers/ai-assistants/resource_finder.md` Resource Pack format (every
  unit).
- **New reference needs (filled by building runs, not this audit):** a
  sourced constants table (G, solar and Earth masses, elementary charge,
  Planck's constant) checked against an authoritative reference; a
  right-triangle trigonometry quick-reference matched to the grade-10 math
  track's vocabulary; verified per-sim PhET check records (name, URL,
  date checked, fit notes).
- **No generated images yet:** each unit's building run generates its own
  required educational raster image with alt text, caption, and a
  generation/source record; deterministic SVG/HTML is preferred for
  vector diagrams, graphs, ray diagrams, and circuit schematics so no
  generated image can introduce false measurements or labels.
- **Paths for future units:** each unit follows
  `docs/curriculum-expansion/unit-requirements.md` (4–6 written lessons,
  investigation with rubric, formative quiz, culminating assessment,
  separate teacher guide and answer key, verified Resource Pack). Units are
  built in prerequisite order U01 → U08; the R00 review package closes the
  track. Planned units are named in prose here and in the track README;
  no links to unbuilt unit files are created.
