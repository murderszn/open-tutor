# Grade 8 Science (Physical Science) — Scope and Sequence

Audit section A00 of [issue #39](https://github.com/murderszn/open-tutor/issues/39).
Status: **validated draft** (this document, the track README, and the grade-8
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| `curriculum/grade-8/science/` before this run | track folder | **Confirmed empty** — `git ls-tree -r main -- curriculum/grade-8/science/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy lessons, quizzes, keys, diagnostics, or resource packs exist to keep, revise, or retire |
| Grade-8 hub page | `curriculum/grade-8/README.md` | **Update in this run** — Science added to Core Subjects with truthful "draft audit" status; legacy Stem link preserved |
| Track README | `curriculum/grade-8/science/README.md` | **New** — written by this run: course description, 15 measurable objectives, verified standards summary, planned-unit list, adult guidance |
| Scope and sequence | `curriculum/grade-8/science/scope-and-sequence.md` | **New** — this document |
| `assignments/newtons-laws-investigation.md` | `curriculum/grade-8/stem/assignments/` | **Reuse with verification (U02)** — genuine F=ma investigation with PhET and NASA educator-guide references; objectives, background, and experiment design are sound grade-8 material. Unit 02's build will re-verify the linked references, add teacher-facing solution notes and safety framing, and adapt it into the unit's investigation rather than assigning it verbatim |
| `assignments/python-oop-bank-simulation.md`, `assignments/web-calculator-interactive.md` | `curriculum/grade-8/stem/assignments/` | **Optional enrichment, not core science** — coding assignments; may support the U04 digital-signals work as enrichment but are never required science instruction. Kept in place |
| 16 `quizzes/*.md` | `curriculum/grade-8/stem/quizzes/` | **Not usable as science assessments as-is** — every quiz title pairs a programming topic with a physical-science topic (e.g. "Advanced Git Branching, Merge Conflicts, & Types of Chemical Reactions", "Semantic HTML5 & Wave Properties, Sound Waves, the Electromagnetic Spectrum"). The science halves are unverified question lists with **no answer keys**; the coding halves belong to coding enrichment. The science question stems may inform U01–U07 quiz writing after re-verification, but nothing is adopted verbatim. Kept in place; existing links preserved |
| `curriculum/grade-8/stem/README.md` | legacy STEM index | **Preserve** — remains the STEM/coding enrichment hub; the science track does not replace it |
| `resources/physics_fundamentals.md` (128 lines) | general physics reference | **Reuse with verification** — U01–U03 motion/force/energy language; the adult checks grade fit and re-verifies claims before any unit cites it |
| `resources/chemistry_fundamentals.md` (108 lines) | general chemistry reference | **Reuse with verification** — U06/U07 atom, bonding, and reaction language; verify before citing |
| `resources/thermodynamics_laws.md` (208 lines) | energy laws reference | **Reuse with verification** — U03 energy-conservation reasoning and U08 thermal-transfer reasoning; check reading level for grade 8 before reuse |
| `resources/periodic_table_elements.csv` | element dataset (columns: atomic_number, symbol, name, period, group, block, category, state_at_room_temp, protons, electrons_neutral, …) | **Reuse** — U06 atomic-structure and periodicity tasks; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (3–6 focused queries, 3–7 curated or clearly-labeled-search videos, 4–7 reputable web references, task-to-resource mapping) |
| PhET simulations, Khan Academy physics, Amoeba Sisters, PBS | free no-account browser tools | **Verify before citing** — candidate core digital tools (PhET "Forces and Motion Basics" already referenced by the Newton's-laws investigation; U04 wave and U05 circuit sims are strong candidates). Each unit previews for advertising, accuracy, and age suitability before recommending |

No answer-key gaps, inaccurate files, or dead links were found **in the track**
— there is nothing here yet to be inaccurate. The gap is total for core
science instruction: no taught lessons, no assessments, no keys, no
diagnostics, no resource packs, and no teaching images exist anywhere in
`curriculum/grade-8/science/`. The legacy `stem/` folder's science content is
sparse and mostly entangled with coding topics; it is preserved as enrichment
and mined only for what survives verification.

## 2. Prerequisites

Learners typically enter grade-8 physical science with (expected from grades
6–7 science exposure; the diagnostic verifies it, and the track re-teaches
insecure skills in use):

- Measuring with a ruler and a simple scale; reading tables and bar graphs
- Arithmetic with decimals and fractions; proportional reasoning at the level
  of "twice the mass at the same speed"; solving for an unknown in a simple
  formula
- That objects fall, that pushing/pulling changes motion, and that the sun
  heats the Earth — but **not** quantified force, Newton's laws, or
  energy bookkeeping
- The water cycle and states of matter at a descriptive level — but **not**
  particle models, atomic structure, or conservation of mass in reactions
- Reading grade-level nonfiction and writing a paragraph that states a claim
  with at least one supporting reason

The diagnostic weeks (Weeks 1–2) verify these; the audit never assumes
fluency with graph interpretation, controlled investigation design, force
diagrams, energy transfer tracking, wave vocabulary, circuits, atomic models,
equation balancing, or iterative engineering design — those are this track's
new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (15 objectives; numbered in the
track README):

1. Measure, record, and graph physical quantities with correct SI units;
   calculate speed and interpret distance–time and velocity–time graphs.
2. Plan and carry out a force-and-motion investigation (balanced vs.
   unbalanced forces; Newton's three laws in the learner's own words).
3. Apply Newton's third law to a collision design problem; explain momentum
   changes in collisions.
4. Argue with evidence that gravitational interactions are attractive and
   depend on masses.
5. Investigate electric and magnetic force factors; explain a simple
   electromagnet and circuit.
6. Construct and interpret graphical displays of kinetic energy vs. mass and
   vs. speed; compare potential energy across positions/arrangements.
7. Track energy transfers (including thermal losses) and argue conservation
   of energy.
8. Use mathematical representations of a wave model (amplitude ↔ energy;
   wavelength, frequency, amplitude).
9. Model reflection, absorption, and transmission of light and mechanical
   waves.
10. Support the claim that digitized signals encode/transmit information
    more reliably than analog signals.
11. Model atomic composition of molecules and extended structures
    (proton–neutron–electron picture); connect periodic-table patterns to
    element behavior.
12. Analyze substance-property data to identify chemical reactions; classify
    the five reaction types; balance simple equations.
13. Model conservation of atoms/mass in chemical reactions.
14. Design, test, and modify a device controlling thermal-energy transfer or
    using chemical processes for heating/cooling, within defined criteria
    and constraints.
15. Define engineering criteria/constraints, evaluate competing designs, and
    use test data to improve a design.

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards (NGSS), middle-band
(grades 6–8) performance expectations** — MS-PS1, MS-PS2, MS-PS3, MS-PS4, and
MS-ETS1. Codes and phrasings were verified 2026-10-06 against official NGSS
text (nextgenscience.org DCI pages and the NSTA/AMNH official-text
transcriptions); descriptions below are paraphrases, not reproductions.
No state adoption, accreditation, or alignment certification is claimed.

**Course choice note.** The expansion plan treats grade 8 as a physical-science
year. NGSS does not assign specific courses to specific grades; some schools
place life or earth science in 8th grade instead. This is a proposed pathway,
not a graduation requirement. Each unit's build will state its grades-6–7
prerequisites explicitly so a guiding adult can re-sequence.

### Matter and Its Interactions — U06, U07, U08

- **MS-PS1-1** (U06) — develop models describing the atomic composition of
  simple molecules and extended structures.
- **MS-PS1-2** (U07) — analyze and interpret data on substance properties
  before and after an interaction to determine whether a chemical reaction
  occurred.
- **MS-PS1-3** (U07 enrichment) — gather and make sense of information
  about synthetic materials; reserved as an optional extension, not a core
  unit goal.
- **MS-PS1-4** (U08) — develop a model that predicts and describes changes
  in particle motion, temperature, and state of a pure substance when thermal
  energy is added or removed.
- **MS-PS1-5** (U07) — develop and use a model describing how the total
  number of atoms does not change in a chemical reaction, so mass is
  conserved.
- **MS-PS1-6** (U08, secondary engineering connection) — undertake a design
  project to construct, test, and modify a device that releases or absorbs
  thermal energy by chemical processes.

### Motion and Stability: Forces and Interactions — U01, U02, U05

- **MS-PS2-1** (U02) — apply Newton's third law to design a solution to a
  problem involving the motion of two colliding objects.
- **MS-PS2-2** (U01, U02) — plan an investigation to provide evidence that
  the change in an object's motion depends on the sum of the forces on the
  object and its mass (U01 supplies the units/measurement/graphing
  foundation; U02 runs the investigation).
- **MS-PS2-3** (U05) — ask questions about data to determine the factors
  that affect the strength of electric and magnetic forces.
- **MS-PS2-4** (U02) — construct and present arguments, using evidence, that
  gravitational interactions are attractive and depend on the masses of the
  interacting objects.
- **MS-PS2-5** (U05) — conduct an investigation and evaluate the experimental
  design to provide evidence that fields exist between objects exerting
  forces on each other even though the objects are not in contact.

### Energy — U03, U08

- **MS-PS3-1** (U03) — construct and interpret graphical displays of data
  describing how kinetic energy relates to mass and to speed.
- **MS-PS3-2** (U03) — develop a model describing that when the arrangement
  of objects interacting at a distance changes, different amounts of
  potential energy are stored.
- **MS-PS3-3** (U08) — apply scientific principles to design, construct,
  and test a device that either minimizes or maximizes thermal-energy
  transfer.
- **MS-PS3-4** (U08) — plan an investigation to determine relationships among
  energy transferred, type of matter, mass, and change in average kinetic
  energy (as measured by temperature).
- **MS-PS3-5** (U03) — construct, use, and present arguments that when the
  kinetic energy of an object changes, energy is transferred to or from the
  object.

### Waves and Their Applications in Technologies for Information Transfer — U04

- **MS-PS4-1** (U04) — use mathematical representations to describe a simple
  wave model, including how amplitude relates to energy in a wave.
- **MS-PS4-2** (U04) — develop and use a model describing that waves are
  reflected, absorbed, or transmitted through various materials.
- **MS-PS4-3** (U04) — integrate qualitative scientific and technical
  information to support the claim that digitized signals are a more
  reliable way to encode and transmit information than analog signals.

### Engineering Design — U02, U08 (secondary)

- **MS-ETS1-1** (U08) — define a design problem's criteria and constraints
  precisely enough to ensure a successful solution, accounting for relevant
  science and possible impacts.
- **MS-ETS1-2** (U08) — evaluate competing design solutions systematically
  against criteria and constraints.
- **MS-ETS1-3** (U02, U08) — analyze test data to identify the best
  characteristics of each design for recombination (U02's collision device;
  U08's thermal device).
- **MS-ETS1-4** (U08) — develop a model to generate data for iterative
  testing and modification of a proposed device.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34), two diagnostic weeks (1–2), and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 50-minute sessions per week** (20 sessions
per unit): 5–6 core lessons, measurement/data-analysis and graphing practice
sessions, a reading/reference session, the investigation or project block, a
formative quiz, and a unit review session. The guiding adult adapts session
count for learners who need shorter sessions.

### Weeks 1–2 — Diagnostic placement (before Unit 01)

- **Week 1:** math readiness (decimals, fractions, proportional reasoning,
  solving one-step formulas); measurement fluency (length, mass, time;
  reading instruments to marked precision).
- **Week 2:** graph reading (tables → bar/line graphs; axis labels and
  units); science vocabulary and sentence-writing (claim + one reason);
  safety orientation for household-scale investigations. Results set the
  re-teaching targets for U01–U02.

### Unit 01 — Physical quantities, units, motion and graphs (Weeks 3–6)

MS-PS2-2 measurement foundation. Objectives 1 and part of 2.

- **Week 3:** SI units for length, mass, time; prefixes; unit conversion;
  measurement precision and repeatability.
- **Week 4:** speed as distance ÷ time; constant vs. changing speed;
  collecting position–time data with stopwatches and meter sticks.
- **Week 5:** distance–time graphs: what slope means; velocity–time
  sketches; comparing two movers' graphs.
- **Week 6:** practice/data block + formative quiz on units, speed
  calculations, and graph reading; unit review session.

### Unit 02 — Forces, Newtonian reasoning, and momentum (Weeks 7–10)

MS-PS2-1, MS-PS2-2, MS-PS2-4; MS-ETS1-3 (collision design). Objectives 2–4.

- **Week 7:** forces as pushes and pulls; balanced vs. unbalanced forces;
  free-body diagrams; Newton's first law. *Re-verified legacy investigation
  `newtons-laws-investigation.md` seeded as reference.*
- **Week 8:** Newton's second law: F=ma with proportional reasoning
  (double the force, double the acceleration; double the mass, half the
  acceleration). Investigation planning.
- **Week 9:** investigation block — carts/ramps and data tables;
  Newton’s third law and momentum in collisions; gravitational interactions
  (attractive, mass-dependent).
- **Week 10:** collision-design challenge (egg-drop / bumper redesign with
  test data); formative quiz; unit review.

### Unit 03 — Energy, work, simple machines, and conservation (Weeks 11–14)

MS-PS3-1, MS-PS3-2, MS-PS3-5. Objectives 6–7.

- **Week 11:** work = force × distance; kinetic energy depends on mass and
  speed; graphical displays of the two relationships separately.
- **Week 12:** potential energy: gravitational (height) and elastic (spring);
  systems and stored energy from arrangements.
- **Week 13:** energy transfers and transformations in a system; tracking
  "lost" energy to friction/air as thermal energy; simple machines (lever,
  pulley, inclined plane) as work redistributors.
- **Week 14:** conservation argument from evidence (kinetic change ⟺ energy
  transferred elsewhere); formative quiz; unit review.

### Unit 04 — Waves, sound, light, and information (Weeks 15–18)

MS-PS4-1, MS-PS4-2, MS-PS4-3. Objectives 8–10. Week 18 doubles as midyear
review of U01–U03.

- **Week 15:** wave anatomy: wavelength, frequency, amplitude; amplitude ↔
  energy carried; mechanical vs. electromagnetic waves at a descriptive
  level.
- **Week 16:** reflection, absorption, transmission — models for sound and
  light (echoes, mirrors, lenses, color of opaque vs. transparent
  materials).
- **Week 17:** encoding information: analog vs. digital signals; why
  digitized signals survive noise better (qualitative, with a hands-on
  "noisy channel" game).
- **Week 18:** formative quiz + midyear review block (U01–U03 key graphs,
  F=ma proportional reasoning, energy-tracking problems); cumulative
  check-in with answer key.

### Unit 05 — Electric and magnetic interactions and circuits (Weeks 19–22)

MS-PS2-3, MS-PS2-5. Objective 5.

- **Week 19:** static electricity observations; charge attraction/repulsion;
  conductors vs. insulators (safe, low-voltage only).
- **Week 20:** magnetic fields without contact: mapping fields with
  compasses/iron filings in sealed bags; electromagnets — what changes
  their strength (coils, current, core).
- **Week 21:** simple circuits: series vs. parallel with batteries, bulbs,
  switches; current as flow; troubleshooting a dead circuit.
- **Week 22:** investigation block — "what affects electromagnet strength?"
  with controlled variables; formative quiz; unit review.

### Unit 06 — Atomic structure, elements, and periodic patterns (Weeks 23–26)

MS-PS1-1. Objective 11.

- **Week 23:** the proton–neutron–electron model; atomic number defines the
  element; isotopes at a descriptive level; atomic models as models.
- **Week 24:** building molecules vs. extended structures (salt crystal vs.
  water molecule); counting atoms in formulas.
- **Week 25:** reading the periodic table: periods, groups, metals/
  nonmetals/metalloids; periodic_table_elements.csv dataset task (columns
  and units named; real values).
- **Week 26:** patterns and predictions (reactivity families); formative
  quiz; unit review.

### Unit 07 — Bonding, reactions, and conservation of matter (Weeks 27–30)

MS-PS1-2, MS-PS1-5; MS-PS1-3 as optional enrichment. Objectives 12–13.

- **Week 27:** chemical vs. physical change; property-before/after data to
  decide if a reaction occurred (safe household reactions: baking soda +
  vinegar, rusting, cooking an egg).
- **Week 28:** the five reaction types (synthesis, decomposition, single
  replacement, double replacement, combustion); classifying with
  evidence.
- **Week 29:** particle-level models of reactions; balancing simple
  equations; conservation of atoms → conservation of mass. Optional
  enrichment: synthetic materials (MS-PS1-3) — plastics, alloys, composites.
- **Week 30:** formative quiz; unit review; bridge reading into thermal
  energy.

### Unit 08 — Thermal energy, chemical applications, and engineering capstone (Weeks 31–34)

MS-PS1-4, MS-PS1-6, MS-PS3-3, MS-PS3-4; MS-ETS1-1 through MS-ETS1-4.
Objectives 14–15 (plus review of 1–13).

- **Week 31:** particle model of thermal energy: temperature as average
  kinetic energy; conduction, convection, radiation; insulators.
- **Week 32:** investigation block — energy transferred vs. type of matter,
  mass, and temperature change (MS-PS3-4); chemical reactions that release
  or absorb thermal energy.
- **Week 33:** engineering capstone: define criteria/constraints, prototype
  a thermal device (insulated container / chemical hot-or-cold pack),
  test, evaluate competing designs with data, iterate.
- **Week 34:** final iteration and design communication; formative quiz;
  track-level review session.

### Weeks 35–36 — Final review and cumulative assessment

- **Week 35:** structured review of U01–U08 key models and graphs with the
  adult; practice with the cumulative question bank (answer key provided).
- **Week 36:** cumulative assessment (separate teacher guide and key in the
  R00 review section when delivered); results feed the next placement
  decision, not a public record.

## 6. Session model, materials, and accessibility

- **Session model:** five 50-minute sessions per week. A typical unit week
  mixes 2–3 lesson sessions, 1 measurement/data/graphing practice session,
  1 reading-and-reference or investigation session. The investigation weeks
  run longer blocks; the adult adapts to the learner's stamina.
- **Materials:** household-scale and safe — stopwatch, meter stick or tape,
  kitchen scale, rulers, string, marbles, toy carts, ramps (books), springs
  or rubber bands, batteries (AA/AAA), bulbs, wire, magnets, compass,
  baking soda, vinegar, food coloring, ice. Nothing requires a school lab;
  nothing uses mains electricity, open flame, or caustic chemicals.
  Investigations include observation/simulation alternatives (e.g., PhET
  sims) for learners who cannot safely handle materials.
- **Reading level:** unit texts target grade-8 nonfiction (about Lexile
  1000–1100); key terms are defined in context and in a unit glossary; every
  lesson pairs text with a diagram or model the learner draws or labels.
- **Accessibility:** all graph-reading tasks have a data-table alternative;
  every generated image ships with alt text, a caption, and a text-only
  alternative; investigations name the adult's setup role explicitly;
  extension tasks (quantitative derivations, research write-ups) and support
  tasks (sentence frames, worked-example walk-throughs) are built into each
  unit.
- **Safety:** the adult sets up and supervises every investigation; the
  audit records no hazards beyond minor spills and pinch points (magnets,
  springs). Chemical tasks use food-grade reagents only; electrical tasks
  stay at battery voltages.

## 7. Internal resource reuse and future unit paths

- `newtons-laws-investigation.md` (legacy STEM) → U02 investigation seed
  (re-verified, with teacher notes and answer reasoning added at build).
- `resources/physics_fundamentals.md` → U01–U03 reference language (verify).
- `resources/chemistry_fundamentals.md` → U06–U07 reference language (verify).
- `resources/thermodynamics_laws.md` → U03 energy reasoning, U08 thermal
  reasoning (check reading level).
- `resources/periodic_table_elements.csv` → U06 dataset task (real values,
  columns/units named).
- The 16 coding-paired quizzes → mined only for science question stems
  after re-verification; their coding halves stay in coding enrichment.
- U04's wave work and U05's circuit work should cross-check the grade-8
  math track's proportional-reasoning language once its audit lands, so
  graph tasks use consistent vocabulary — tracked as a note for the unit
  builds, not a blocker.
- Planned file layout (prose until built; no links to unwritten files):
  `curriculum/grade-8/science/units/unit-01-physical-quantities/` through
  `unit-08-thermal-energy-engineering/`, each per `unit-requirements.md`
  (overview, pacing, objectives, vocabulary, standards notes, 4–6 lessons,
  investigation, quiz, assessment, teacher guide + key, Resource Pack,
  generated image in `assets/`).

## 8. Validation notes (this run)

- Track folder confirmed empty on `main`; legacy `stem/` inventory is
  complete (20 files listed in section 1).
- Standards codes MS-PS1-1…6, MS-PS2-1…5, MS-PS3-1…5, MS-PS4-1…3, MS-ETS1-1…4
  checked 2026-10-06 against official NGSS text (nextgenscience.org DCI
  pages; NSTA "MS-PS2 Motion and Stability" official-text PDF; AMNH NGSS
  card deck; CA Dept. of Education content-standards pages; Edlio-district
  MS-PS4 official-text PDF). Descriptions in section 4 are paraphrases.
- No copyrighted material reproduced; no learner data referenced.
- All links in the two new documents point to existing files or prose;
  no dangling links to planned units.
- Manifest and index updates: `curriculum/grade-8/science/README.md` and
  `scope-and-sequence.md` added as `subject-index`; grade-8 hub updated;
  curriculum index updated (see delivery comment).

## Sources checked 2026-10-06

- NGSS official text for MS-PS2 via
  https://static.nsta.org/ngss/20130509/dci-individual/MS-PS2-MotionAndStability-ForcesAndInteractions.pdf
- NGSS MS-PS2 card deck via
  https://www.amnh.org/content/download/132665/2211281/file/NGSS-AMNH-CARD-DECK-MS-PS2.pdf
- NGSS MS-PS4 official text via
  https://4.files.edl.io/c1df/03/05/24/214228-b8fecb94-10a2-410f-97e5-a4de5c4c65e2.pdf
- MS-PS1-1 / MS-PS1-2 / MS-PS1-6 wording via official NGSS DCI page and CA
  Dept. of Education content-standards pages
  (https://www.nextgenscience.org/disciplinary-core-idea/ps1a-structure-and-properties-matter?page=3,
  https://www2.cde.ca.gov/cacs/science, https://www2.cde.ca.gov/cacs/id/web/29048)
- Legacy STEM files on `main`: `curriculum/grade-8/stem/` (20 files
  inventoried; investigation and quiz samples read in full)
- `resources/physics_fundamentals.md`, `resources/chemistry_fundamentals.md`,
  `resources/thermodynamics_laws.md`, `resources/periodic_table_elements.csv`
