# Grade 4 Science — Scope and Sequence

Audit section A00 of [issue #23](https://github.com/murderszn/open-tutor/issues/23).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-4 hub page | `curriculum/grade-4/README.md` | **Revise** — add Science to Core Subjects with audit status and link the new subject folder; keep the `stem/` listing |
| Grade-4 science folder | did not exist (0 Markdown files, matching the issue's 2026-10-01 baseline) | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#22, audit delivered as draft PR #87, unmerged) | `curriculum/grade-4/math/` (PR head) | **Reference only** — session model (4 × ~35 min sessions/week) reused as pattern; 4.MD measurement connections noted for U01/U07 (units of length, mass, volume; two-column tables; line plots); no math content reused |
| Grade-3 science track (#19, audit delivered as draft, unmerged) | `curriculum/grade-3/science/` (PR head) | **Reference for entry prerequisites only** — grade-3 end-of-year objectives define what this track assumes; no grade-3 lessons copied upward |
| Legacy `stem/` | 33 Markdown files (matching the issue baseline: README, 17 assignments, 3 physical-science-roadmap files, 12 quizzes) | **Reviewed individually below** — keep with truthful links; new core science belongs in `science/` per the worker prompt |

### Legacy `stem/` keep/revise/enrichment decisions

| File(s) | Decision |
|---|---|
| `stem/README.md` | **Revise** — add the science-track audit status and link `science/`; keep all assignment/quiz links |
| `assignments/simple-machines-at-home.md` | **Review for U02** — revise into qualitative energy/collision framing (no quantitative force; forces were grade-3); keep or substantially improve, not copied blind |
| `assignments/volcano-explanation.md` | **Review for U07** — volcanoes sit inside the 4-ESS3-2 hazard boundary (earthquakes, floods, tsunamis, volcanic eruptions); revise toward comparing protection solutions |
| `assignments/weather-observer-journal.md` | **Review for U07** — observation/data thread; tie observations to hazard-planning thinking; background for 4-ESS3-2 |
| `assignments/water-cycle.md` | **Revise / teacher-side** — the water cycle is the mechanism behind water erosion (4-ESS2-1) but not itself a grade-4 performance expectation; keep as adult background, not a core lesson |
| `assignments/earth-layers-model.md` | **Optional enrichment** — Earth's interior layers are beyond the grade-4 performance expectations; keep linked as enrichment, not core |
| `assignments/paper-bridge-engineering-lab.md` | **Review for U08** — revise into criteria-and-constraints + fair-test language (3-5-ETS1); good prototype for the design thread |
| `assignments/ecosystem-habitat-model.md` | **Optional enrichment** — grade-3 band content (3-LS4); useful as remedial background only |
| `assignments/photosynthesis.md` | **Optional enrichment / teacher-side** — photosynthesis is 5-LS1+ territory; keep as enrichment |
| `assignments/animal-cells.md`, `assignments/plant-cells.md` | **Optional enrichment** — the 4-LS1-1 assessment boundary is macroscopic structures only; cells are beyond band |
| `assignments/reproduction.md` | **Optional enrichment** — reproduction detail is beyond the grade-4 assessment boundaries; adult preview required |
| `assignments/micronutrients.md`, `assignments/cooking-and-nutrition.md` | **Optional enrichment** — nutrition is not a grade-4 science performance expectation |
| `assignments/thermodynamics-cooling-lab.md` | **Revise / teacher-side** — cooling observations can inspire a qualitative U02 heat-transfer demo; no laws or quantitative work for the learner |
| `assignments/solar-system-tour.md` | **Optional enrichment** — astronomy beyond 4-ESS1-1; the apparent-brightness expectation is grade 5 (5-ESS1-1) |
| `assignments/custom-pc-build.md`, `assignments/intro-to-algorithms.md` | **Optional enrichment** — coding/hardware; coding and engineering stay optional enrichment per the worker prompt, not core science |
| `assignments/physical-science-roadmap/` (README, lab-menu, lab-report-template) | **Adult-side inspiration only** — accelerated grades 8–9 framing; the lab-report *format* (not content) will be adapted into the grade-4 investigation report in U01 |
| `quizzes/week-01-quiz.md` (Measurement & Units) | **Revise for U01** — item bank; answer keys absent throughout the legacy library (gap for R00) |
| `quizzes/week-02-quiz.md` (Matter & Changes) | **Revise** — matter is largely 5-PS1 territory; keep observable-property items only, retire the rest |
| `quizzes/week-03-quiz.md` (Energy & Heat) | **Revise for U02** — align wording to 4-PS3 (qualitative, no energy numbers) |
| `quizzes/week-04-quiz.md` (Motion & Forces) | **Revise for U02** — forces were grade 3; revise to energy/collision framing |
| `quizzes/week-05-quiz.md` (Waves & Light) | **Revise for U03** — align to 4-PS4 model vocabulary (amplitude, wavelength, qualitative) |
| `quizzes/week-06-quiz.md` (Biology & Anatomy) | **Revise for U04** — restrict to macroscopic structures per the 4-LS1-1 boundary |
| `quizzes/week-07`–`week-12` (Cumulative I–VI) | **Revise** — rework into unit checks and the R00 cumulative bank; keys to be authored |

### Internal reference decisions

| Item | Decision |
|---|---|
| `resources/physics_fundamentals.md` (grades 4–8: measurement & units, motion & forces, energy & heat, waves & light) | **Teacher-side background for U01–U03** — energy/heat/waves sections usable as adult background; the motion/forces section is grade-3 territory for this track; learner language stays qualitative per the assessment boundaries; do not assign to the learner |
| `resources/biology_fundamentals.md` | **Teacher-side for U04–U05** — cells/photosynthesis content is beyond the learner band; macroscopic structure/function is in band |
| `resources/thermodynamics_laws.md` | **Teacher-side only for U02** — no laws for learners; qualitative energy-transfer language only |
| `resources/astronomy_fundamentals.md` | **Limited teacher background** — grade-4 astronomy stops at rock/fossil evidence (4-ESS1-1); star brightness is a grade-5 expectation |
| `resources/chemistry_fundamentals.md` | **No direct reuse** — beyond the grade-4 band |
| `resources/cooking_and_nutrition.md` | **Optional enrichment only** |
| Repository datasets (`periodic_table_elements.csv`, `solar_system_planets.csv`) | **No direct reuse at grade 4** — magnitudes and abstractions exceed the band; units will use original small-observation scenarios (e.g., one learner's erosion-tray measurements, wave-model drawings) with clearly labeled practice data where needed |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PhET, PBS LearningMedia, Smithsonian Learning Lab — **reuse via resource_finder**; every item opened and checked for grade-4 fit before use |

No existing grade-4 science material was inaccurate or inappropriate beyond the
grade-band mismatches noted above. Answer keys are absent across the entire
legacy quiz library — a gap the unit sections and R00 will fill.

## 2. Prerequisites

Learners typically enter grade-4 science with the grade-3 science track's
end-of-year objectives (that track's audit is delivered, units not yet written):

- Asking questions that can be explored by observing or testing; planning
  simple fair investigations (one variable changed at a time, repeated
  trials); measuring length to the nearest centimeter; recording in labeled
  drawings, tallies, and simple tables; communicating findings with evidence
- Describing balanced and unbalanced forces qualitatively and using observed
  motion patterns to predict future motion; asking cause-and-effect questions
  about magnetic and static-electric interactions, including distance and
  magnet orientation
- Modeling life cycles with birth, growth, reproduction, and death in common;
  analyzing inherited traits and variation (non-human examples); arguing how
  animal groups, adaptations, and habitat changes affect survival; using fossil
  data as evidence of past organisms and environments
- Representing weather data in tables and graphs to describe seasonal
  conditions; describing climates in different regions; making claims about
  weather-hazard design solutions
- Completing an engineering design cycle: defining a problem with criteria and
  constraints, generating and comparing solutions, running fair tests that
  control variables and consider failure points
- Science safety practices: adult-supervised investigations, materials away
  from the mouth, living things handled gently, never looking directly at the
  sun

Grade 4 adds: qualitative energy reasoning (faster = more energy — a new core
idea); modeling vocabulary (amplitude, wavelength — qualitative); reading
landscape change from rock-layer and fossil patterns; weathering/erosion rate
tests; map pattern reading; natural-resource and hazard reasoning; and
energy-device design.

Math entry (the grade-4 math track's prerequisites): multi-digit operations,
factors and multiples, fraction comparison, measurement conversion within one
system (4.MD.1/4.MD.2 — km/m/cm, kg/g, L/mL, two-column tables, line plots).
Unit 01 leans on measurement conversion and data displays; Unit 07 reads maps
and measurement data; Unit 08 uses multiplicative comparison (4.OA.1) for
design trade-offs.

The diagnostic weeks (Weeks 1–2) probe these through play and talk; Unit 01
re-teaches measuring, unit conversion, fair-test structure, and model
vocabulary explicitly rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year. All investigations are
adult-supervised. Short written responses (8–12 items) reviewed the same day
count as evidence, alongside oral, drawn, and manipulative responses.
Objectives mirror the track README.

1. Plan and carry out fair investigations: ask a testable question, change one
   variable at a time while controlling the rest, repeat trials, record data
   in tables and graphs, and use evidence to build explanations and compare
   models (science practices thread; 3-5-ETS1-3).
2. Use evidence to explain that a faster-moving object has more energy; make
   observations showing energy moving from place to place by sound, light,
   heat, and electric currents; and predict what happens to energy when
   objects collide (4-PS3-1, 4-PS3-2, 4-PS3-3).
3. Model waves in terms of amplitude and wavelength and show that waves can
   move objects; model how light reflecting off objects and entering the eye
   lets us see; and generate and compare multiple solutions that use patterns
   to send information (4-PS4-1, 4-PS4-2, 4-PS4-3).
4. Construct an argument, with evidence, that plants and animals have internal
   and external structures that support survival, growth, behavior, and
   reproduction — macroscopic structures only (4-LS1-1).
5. Use a model to describe how animals receive different kinds of information
   through their senses, process it in the brain, and respond in different
   ways (4-LS1-2).
6. Identify evidence from patterns in rock formations and fossils in rock
   layers to support an explanation of how a landscape changed over time,
   using relative time only (4-ESS1-1).
7. Make observations and measurements of weathering or erosion rates (one form
   at a time); analyze map data to describe patterns in Earth's features; and
   obtain and combine information showing that energy and fuels come from
   natural resources and that their uses affect the environment (4-ESS2-1,
   4-ESS2-2, 4-ESS3-1).
8. Complete an engineering design cycle: define a problem with criteria and
   constraints, generate and compare multiple solutions, and run fair tests
   that control variables and consider failure points — applied to an
   energy-converting device and to reducing a natural hazard's impact on
   people (3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3; 4-PS3-4, 4-ESS3-2).

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards**, grade-4 performance
expectations and the 3–5 engineering band — 17 performance expectations in all.
Each code and description below was checked 2026-10-04 against the California
Department of Education's official reproduction of the NGSS grade-4 release
("NGSS Grade Four Arranged by DCI," revised March 2015, read in full),
cross-checked with nextgenscience.org. No state adoption, accreditation, or
alignment certification is claimed. An asterisk (*) marks performance
expectations that integrate engineering through a practice or disciplinary core
idea, per the framework.

### Energy (4-PS3)

| Code | Description |
|---|---|
| 4-PS3-1 | Use evidence to construct an explanation relating the speed of an object to the energy of that object. |
| 4-PS3-2 | Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents. |
| 4-PS3-3 | Ask questions and predict outcomes about the changes in energy that occur when objects collide. |
| 4-PS3-4 * | Apply scientific ideas to design, test, and refine a device that converts energy from one form to another. |

Clarifications carried from the framework: evidence relating speed and energy
includes change of shape on impact or other results of collisions (California
clarification, 4-PS3-1); emphasis is on the change in energy due to the change
in speed, not on the forces, as objects interact (4-PS3-3); device examples
include electric circuits that convert electrical energy into the motion of a
vehicle, light, or sound, and a passive solar heater that converts light into
heat; constraints include materials, cost, or time (4-PS3-4). Assessment
boundaries: no quantitative measures of speed changes and no precise or
quantitative definition of energy (4-PS3-1); no quantitative measurements of
energy (4-PS3-2, 4-PS3-3); devices limited to those that convert motion energy
to electric energy or use stored energy to cause motion or produce light or
sound (4-PS3-4). Unit 02 teaches 4-PS3-1–3 qualitatively throughout; 4-PS3-4
lands in Unit 08.

### Waves and their Applications in Technologies for Information Transfer (4-PS4)

| Code | Description |
|---|---|
| 4-PS4-1 | Develop a model of waves to describe patterns in terms of amplitude and wavelength and that waves can cause objects to move. |
| 4-PS4-2 | Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen. |
| 4-PS4-3 * | Generate and compare multiple solutions that use patterns to transfer information. |

Clarifications: models include diagrams, analogies, and physical models using
wire to illustrate wavelength and amplitude (4-PS4-1); solutions include drums
sending coded information through sound waves, a grid of 1's and 0's
representing black and white to send information about a picture, and Morse
code to send text (4-PS4-3). Assessment boundaries: no interference effects,
electromagnetic waves, non-periodic waves, or quantitative models of amplitude
and wavelength (4-PS4-1); no specific colors reflected and seen, no cellular
mechanisms of vision, and no how-the-retina-works detail (4-PS4-2). All three
sit in Unit 03, with 4-PS4-3's solution comparison prefiguring Unit 08's design
work.

### From Molecules to Organisms: Structures and Processes (4-LS1)

| Code | Description |
|---|---|
| 4-LS1-1 | Construct an argument that plants and animals have internal and external structures that function to support survival, growth, behavior, and reproduction. |
| 4-LS1-2 | Use a model to describe that animals receive different types of information through their senses, process the information in their brain, and respond to the information in different ways. |

Clarifications: structure examples include thorns, stems, roots, colored
petals, heart, stomach, lung, brain, and skin; each structure has specific
functions within its associated system (4-LS1-1); emphasis is on systems of
information transfer (4-LS1-2). Assessment boundaries: macroscopic structures
within plant and animal systems only — no cells (4-LS1-1); no mechanisms by
which the brain stores and recalls information and no sensory-receptor
mechanisms (4-LS1-2). Units 04 and 05 respectively; the legacy animal/plant
cell assignments are therefore enrichment only.

### Earth's Place in the Universe (4-ESS1)

| Code | Description |
|---|---|
| 4-ESS1-1 | Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape over time. |

Clarifications: rock layers with shell fossils above rock layers with plant
fossils and no shells indicate a change from land to water over time; a canyon
with different rock layers in the walls and a river at the bottom indicates
that over time a river cut through the rock. Assessment boundary: no specific
knowledge of the mechanism of rock formation and no memorization of specific
formations or layers; relative time only. Unit 06. Note: the apparent-brightness
expectation ("differences in the apparent brightness of the sun compared to
other stars is due to their relative distances from Earth") is 5-ESS1-1 —
grade 5 — in the framework; the grade-4 release read in full lists no 4-ESS1-2,
so no grade-4 astronomy unit is required.

### Earth's Systems (4-ESS2)

| Code | Description |
|---|---|
| 4-ESS2-1 | Make observations and/or measurements to provide evidence of the effects of weathering or the rate of erosion by water, ice, wind, or vegetation. |
| 4-ESS2-2 | Analyze and interpret data from maps to describe patterns of Earth's features. |

Clarifications: testable variables include angle of slope in the downhill
movement of water, amount of vegetation, speed of wind, relative rate of
deposition, cycles of freezing and thawing of water, cycles of heating and
cooling, and volume of water flow (4-ESS2-1); maps include topographic maps of
Earth's land and ocean floor, and maps of the locations of mountains,
continental boundaries, volcanoes, and earthquakes (4-ESS2-2). Assessment
boundaries: a single form of weathering or erosion per investigation
(4-ESS2-1); pattern identification only — no naming of land and water features
(4-ESS2-2). Both in Unit 07.

### Earth and Human Activity (4-ESS3)

| Code | Description |
|---|---|
| 4-ESS3-1 | Obtain and combine information to describe that energy and fuels are derived from natural resources and their uses affect the environment. |
| 4-ESS3-2 * | Generate and compare multiple solutions to reduce the impacts of natural Earth processes on humans. |

Clarifications: renewable resources include wind energy, water behind dams,
and sunlight; non-renewable resources are fossil fuels and fissile materials;
environmental effects include loss of habitat due to dams, loss of habitat due
to surface mining, and air pollution from burning fossil fuels (4-ESS3-1);
solutions include designing an earthquake-resistant building and improving
monitoring of volcanic activity (4-ESS3-2). Assessment boundary (4-ESS3-2):
earthquakes, floods, tsunamis, and volcanic eruptions. 4-ESS3-1 sits in Unit
07; 4-ESS3-2 drives Unit 08's community-protection design.

### Engineering Design, 3–5 band (3-5-ETS1)

| Code | Description |
|---|---|
| 3-5-ETS1-1 | Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost. |
| 3-5-ETS1-2 | Generate and compare multiple possible solutions to a problem based on how well each is likely to meet the criteria and constraints of the problem. |
| 3-5-ETS1-3 | Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved. |

Unit 08 runs the full cycle; 3-5-ETS1-1's problem-definition language and
3-5-ETS1-3's fair-test language are introduced in Unit 01 and reused in Units
02, 07, and 08 so the vocabulary is secure before the capstone.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36
weeks. Session model: **4 sessions per week, about 35 minutes each** (16
sessions per unit), matching the grade-4 math track. Session types rotate
across investigation lesson, data-and-modeling practice, science
reading-and-talk, and review — named per unit below. Grade-4 learners do short
independent written work (8–12 tasks) that the adult reviews the same day,
with oral, drawn, and manipulative response options always available and
explicit adult directions for every investigation.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science session routines (question board, tool tray,
  data-table ritual, model-vocabulary wall, cleanup and safety check) and
  baseline each objective's entry point.
- Sessions: playful one-on-one probes — ask a question we could test vs. one
  we couldn't; plan a one-variable test; measure length, mass, and volume with
  standard tools and convert units; read a bar graph and a line plot; draw and
  label a wave, a plant structure, and a rock layer; sort events into quick
  vs. slow; show safe handling of tools and living things.
- No new instruction; record observations against the track objectives.

### Unit 01 — Evidence, measurement, and scientific models (Weeks 3–6)

- **Standards:** science and engineering practices focus; 4.MD.1/4.MD.2
  measurement connections (km/m/cm, kg/g, L/mL, two-column tables);
  3-5-ETS1-1 and 3-5-ETS1-3 introduced; model vocabulary seeded for Unit 03.
- **Week 3 goal:** testable vs. untestable questions; observe with hand lens,
  ruler, balance, and graduated cylinder; record in labeled diagrams and data
  tables; build first models — diagrams of observed objects.
- **Week 4 goal:** fair tests — change one thing, keep the rest the same,
  repeat trials; measure and convert within one measurement system; record
  equivalents in two-column tables.
- **Week 5 goal:** display the data — bar graphs, pictographs, and line plots
  from the learner's own measurements; read patterns ("how many more,"
  trends); define a simple design problem with criteria and constraints.
- **Week 6:** review week — measurement challenge, fair-test redesign game,
  formative check; the investigation-report format is introduced (format
  adapted from the physical-science-roadmap lab-report template, rewritten for
  grade 4).
- Sessions rotate: investigation lesson → measuring-and-modeling practice →
  reading-and-talk about evidence → review game.
- Safety: tool-tray rules; non-mercury thermometers adult-read; nothing near
  the mouth.

### Unit 02 — Energy transfer, collisions, and motion (Weeks 7–10)

- **Standards:** 4-PS3-1, 4-PS3-2, 4-PS3-3.
- **Week 7 goal:** faster means more energy — qualitative evidence only (a
  faster ball dents clay deeper, rolls farther); change of shape on impact;
  no speed numbers.
- **Week 8 goal:** energy moves from place to place — by sound (drum), light
  (lamp warming paper), heat (warm hands on a cool table), and electric
  currents (battery and bulb); qualitative observations only.
- **Week 9 goal:** collisions — ask and predict what happens to energy when
  objects collide; rolling marbles into targets; energy changes the speed of
  the objects and spreads to the air as heat and sound; emphasis on the energy
  change, not on forces.
- **Week 10:** review week — energy fair with predict-observe-explain
  stations; formative check. The legacy simple-machines assignment is
  reviewed/revised into qualitative energy demos here.
- Sessions rotate: investigation lesson → observation-and-recording practice
  → reading-and-talk about energy in everyday life → review game.
- Safety: ramps built from books and boards at table height; rolling objects
  kept clear of stairs; adult sets up and checks every ramp; battery cells
  only and adult-handled — no mains-powered equipment.

### Unit 03 — Waves, patterns, and information (Weeks 11–14)

- **Standards:** 4-PS4-1, 4-PS4-2, 4-PS4-3.
- **Week 11 goal:** wave models — water-tray waves and wire/spring models;
  amplitude (wave height) and wavelength (spacing between peaks) as
  qualitative patterns; waves can move objects (a floating cork bobs in place
  rather than traveling with the wave).
- **Week 12 goal:** light and seeing — light reflects off objects and enters
  the eye; model with flashlight, mirror, and a simple eye diagram; dark-room
  observations of reflected light.
- **Week 13 goal:** patterns carry information — drums sending coded rhythms,
  grids of 1's and 0's (black and white) encoding a picture, Morse-code taps;
  generate and compare multiple solutions for sending a message across the
  room.
- **Week 14:** review week — information-transfer fair (each solution tested
  against stated criteria); formative check.
- Sessions rotate: model-building lesson → wave-and-light station practice →
  cause-and-effect talk → review game.
- Safety: never look directly at the sun or into bright lights; water trays
  shallow with the adult nearby; no small loose parts near the mouth.

### Unit 04 — Plant and animal structures and functions (Weeks 15–18)

- **Standards:** 4-LS1-1.
- **Week 15 goal:** external structures — thorns, stems, roots, colored
  petals; each structure's function (protection, support, water uptake,
  attracting pollinators); macroscopic only.
- **Week 16 goal:** internal structures — heart, stomach, lung, brain, skin;
  each structure's job within its system (pumping, digesting, breathing,
  controlling, protecting); the structure-function journal starts as a
  background thread through the rest of the year.
- **Week 17 goal:** arguments with evidence — construct arguments that a
  given structure supports survival, growth, behavior, or reproduction;
  compare structures across two organisms.
- **Week 18:** midyear review (flexible) — structure-function journal
  checkpoint with an evidence claim; cumulative re-teach of Units 01–04
  highest-need objectives; formative check.
- Sessions rotate: observation lesson (store-bought flowers, vegetable
  cross-sections — no animal dissection) → journal and labeling practice →
  argument-building talk → review.
- Living things are observed gently and never harmed; hands washed after soil
  and plant work; no microscopes required (macroscopic boundary); the adult
  handles all cutting.

### Unit 05 — Senses, information processing, and responses (Weeks 19–22)

- **Standards:** 4-LS1-2.
- **Week 19 goal:** sense receptors are specialized — different senses pick up
  different kinds of information; fair observations (sound-direction finding,
  texture sorting, scent matching) without naming receptor mechanisms.
- **Week 20 goal:** information-transfer systems — model the path
  sense → brain → response; emphasis on the system, never the mechanism
  (assessment boundary).
- **Week 21 goal:** responses differ — animals respond to the same
  information in different ways (freeze, flee, investigate); model and act
  out responses with evidence from observations and media.
- **Week 22:** review week — build a complete sense-to-response model poster
  with a text-only alternative; formative check.
- Sessions rotate: observation lesson → model-building practice → systems
  talk → review game.
- Safety: scent jars mild and adult-prepared; nothing tasted; sound levels
  kept comfortable; animal observations through media or gentle
  classroom-pet watching only.

### Unit 06 — Earth history, fossils, and landscape change (Weeks 23–26)

- **Standards:** 4-ESS1-1.
- **Week 23 goal:** rock-layer patterns — layered sediment trays in clear
  jars; shell-fossil layers above plant-fossil layers with no shells means a
  change from land to water over time; relative order only, no absolute ages.
- **Week 24 goal:** fossils as evidence — major fossil types and relative
  ages only; marine fossils found on dry land; what organisms and environments
  existed long ago.
- **Week 25 goal:** landscapes change — canyon-and-river sand-tray model;
  argue how a landscape changed over time from the layer patterns.
- **Week 26:** review week — fossil-layer puzzle challenge (order the layers,
  explain the change); formative check.
- Sessions rotate: evidence lesson → layer-tray modeling practice →
  explanation talk → review.
- Safety: fossil work uses images, casts, or purchased replicas — never real
  collected specimens of unknown provenance; sand and water trays on protected
  surfaces; no hammering real rocks (pre-cut samples only, adult-handled).

### Unit 07 — Weathering, erosion, natural resources, and hazards (Weeks 27–30)

- **Standards:** 4-ESS2-1, 4-ESS2-2, 4-ESS3-1.
- **Week 27 goal:** weathering and erosion rates — one form at a time: water
  erosion trays (vary slope angle), wind erosion (fan and sand, vary speed),
  freeze-thaw on plaster chunks (adult demo), vegetation holding soil; measure
  and compare rates.
- **Week 28 goal:** Earth's feature patterns — read maps (topographic maps of
  land and ocean floor; mountain, continental-boundary, volcano, and
  earthquake bands); describe patterns without naming features (assessment
  boundary).
- **Week 29 goal:** natural resources and their uses — renewables (wind, water
  behind dams, sunlight) vs. non-renewables (fossil fuels, fissile materials);
  obtain and combine information on environmental effects (habitat loss from
  dams and surface mining; air pollution from burning fossil fuels).
- **Week 30:** review week — erosion-tray fair with variable control;
  map-pattern challenge; formative check. The legacy weather-observer journal
  and volcano explanation are reviewed into this unit's threads.
- Sessions rotate: investigation lesson → tray-and-map practice →
  combine-information talk → review game.
- Safety: water trays contained; fans adult-set with no fingers near blades;
  freeze-thaw demo adult-handled; natural hazards studied through media and
  models only, never by seeking them out.

### Unit 08 — Engineering: energy devices and community protection (Weeks 31–34)

- **Standards:** 3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3; 4-PS3-4; 4-ESS3-2.
- **Week 31 goal:** define two design problems with criteria and constraints —
  (a) a device that converts energy from one form to another (e.g., a simple
  circuit lighting a bulb or moving a small vehicle; a passive solar heater
  warming water); (b) a solution that reduces a natural hazard's impact on
  people (earthquake, flood, tsunami, or volcanic eruption — the assessment
  boundary).
- **Week 32 goal:** generate and compare multiple possible solutions for each
  problem against the criteria and constraints; sketch and justify the
  comparison.
- **Week 33 goal:** plan and carry out fair tests with controlled variables;
  consider failure points; identify what to improve and rebuild. The legacy
  paper-bridge lab is revised into criteria/constraints practice here.
- **Week 34:** review week — design showcase for the household with test
  data; formative check.
- Sessions rotate: design lesson → build-and-test practice →
  data-comparison talk → review.
- Materials are household and dollar-store safe; the adult previews every
  build for pinch, topple, small-part, and electrical risks; battery cells
  only (no mains); the adult handles all wiring.

### Weeks 35–36 — Final review (flexible)

- Cumulative investigations and design re-tests across all eight objectives;
  re-teach where evidence shows gaps; final assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with the
fair-test routine from U01; Unit 03 with the measurement-and-model vocabulary
from U01; Unit 06 with the argument-with-evidence frame from U04; Unit 08 with
the fair-test routine from U01 and the pattern thinking from U03). Midyear
(Week 18) and final (Weeks 35–36) weeks are full-track reviews. Formative
checks are short written tasks (8–12 items) the adult reviews the same day,
alongside oral, drawn, and manipulative options; each unit's teacher guide
specifies what "ready to move on" looks like. The structure-function journal
started in Unit 04 and the investigation-report format from Unit 01 run as
background threads through the year, giving spaced retrieval of labeling,
modeling, and evidence talk; the fair-test routine from Unit 01 is reused in
Units 02, 07, and 08.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/physics_fundamentals.md`, `resources/biology_fundamentals.md`,
  `resources/thermodynamics_laws.md`, `resources/astronomy_fundamentals.md` —
  adult background references only; learner language stays qualitative and
  observable. Do not assign to the learner.
- `assignments/science/physical-science-roadmap` lab-report template — its
  *format* (not content) is adapted once in Unit 01 into the grade-4
  investigation report and reused; never assigned as written.
- Legacy stem keep/revise decisions from §1; revised items keep their
  provenance notes when adapted.
- Data-table, bar-graph, pictograph, line-plot, layer-tray-log,
  sense-to-response-model-sheet, and design criteria/constraints templates
  will be created once in Units 01, 04, 05, and 08 and reused; do not
  duplicate per unit.
- Same-grade math and grades 3–8 science are **not** reused for grade-4
  instruction beyond the timing/prerequisite references noted (grade-band
  mismatch); the math track's 4.MD coverage is a timing reference, not source
  material.

## 8. Safe materials

Household or dollar-store supplies: rulers (centimeters/millimeters) and tape
measures, balance scale, measuring cups and plastic graduated cylinders,
stopwatch, marbles and balls, ramps (books and boards), battery cells with
holders and small bulbs, insulated wire, hand lenses, water trays, sand, soil,
pebbles, adult-made plaster chunks, clear jars, straws, tape, paper,
cardboard, craft wire and springs, mirrors, flashlights, bean seeds, potting
soil, store-bought flowers, vegetable cross-sections, fossil images/casts/
replicas, printed maps, drawing paper and crayons, notebooks and pencils.
Safety rules: the adult supervises every investigation and previews every
procedure; battery cells only with adult-handled wiring — no mains-powered
equipment; large items kept away from the mouth; living things are observed
gently, never collected or harmed; hands washed after soil, plant, and outdoor
work; never look directly at the sun; natural hazards are studied through
media and models only, never by seeking them out; the adult substitutes an
observation or simulation alternative whenever the real thing is unsafe.

## 9. Accessibility supports

- Short written responses (8–12 tasks) reviewed the same day; oral, pointing,
  drawing, and manipulative response modes always available; adult scribes
  dictated observations on request.
- Large-print, high-contrast data tables and word cards; tactile exploration
  built into tray, wave, and model work for low-vision learners.
- Short sessions with movement breaks; every lesson includes a table variant
  and an active-investigation variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual science word wall (amplitude, wavelength, evidence, criteria,
  constraint, erosion, structure); home-language labels welcomed alongside
  English.
- Sentence frames for evidence and argument talk ("My evidence is ___," "When
  ___ changed, then ___ happened," "This structure helps ___ because ___");
  every diagram and model ships with a text-only alternative; color is never
  the only cue in graphs, sorts, or maps.
- Hearing support: face the learner when giving directions; visual step cards
  for multi-step investigations and builds.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #23.
- No grade-4-appropriate internal investigation guides exist; units will author
  original small-observation scenarios (e.g., one learner's erosion-tray
  measurements, wave-model drawings) with clearly labeled practice data where
  needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- A shared grade-4 investigation/data asset set (measurement card, data-table
  and graph templates, layer-tray log, sense-to-response model sheet, design
  criteria/constraints sheet, investigation-report format) should be created
  once (Units 01, 04, 05, 08) and reused across units rather than regenerated
  per unit.
- Answer keys are absent across the legacy quiz library; keys arrive with each
  unit's formative quiz and culminating assessment, and the cumulative bank
  arrives with R00.
- The midyear (Week 18) and final (Weeks 35–36) review assessments and keys
  arrive with R00.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Evidence, measurement, and scientific models; U02 Energy transfer,
collisions, and motion; U03 Waves, patterns, and information; U04 Plant and
animal structures and functions; U05 Sense, information processing, and
responses; U06 Earth history, fossils, and landscape change; U07 Weathering,
erosion, natural resources, and hazards; U08 Engineering: energy devices and
community protection designs; R00 diagnostic, midyear/final review, and
cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #23 body, comments, and label state re-read 2026-10-04 before
  claiming; no competing claim (0 comments prior to the claim comment); the
  `curriculum-in-progress` label was added by this run and will be removed on
  delivery.
- No other `curriculum-in-progress` claims were active on queue issues at claim
  time. Open worker PR #87 (issue #22) was not touched; its head was fetched
  read-only solely to confirm the grade-4 session model (4 × ~35 min
  sessions/week) for consistency.
- `curriculum/grade-4/` re-inventoried on `main` @ `2c43d24`: no `science/`
  folder existed (0 Markdown files, matching the issue baseline); `stem/` has
  33 Markdown files (README + 17 assignments + 3 physical-science-roadmap
  files + 12 quizzes), matching the issue's 33-file baseline.
- Standards codes/descriptions verified 2026-10-04 against the California
  Department of Education's official reproduction of the NGSS grade-4 release
  ("NGSS Grade Four Arranged by DCI," revised March 2015, read in full):
  17 performance expectations — 4-PS3-1–4, 4-PS4-1–3, 4-LS1-1–2, 4-ESS1-1,
  4-ESS2-1–2, 4-ESS3-1–2, 3-5-ETS1-1–3 — with clarifications and assessment
  boundaries carried into §4. The apparent-brightness expectation is 5-ESS1-1
  (grade 5); the grade-4 release lists no 4-ESS1-2. No state adoption,
  accreditation, or alignment certification is claimed. Asterisks follow the
  framework's engineering-integration marking (4-PS3-4, 4-PS4-3, 4-ESS3-2).
- Repository guide reuse decisions checked against each guide's actual stated
  grade band (the fundamentals guides are grades 4–8 oriented) and the
  framework's assessment boundaries; guides are teacher-side background, not
  learner assignments.
- The eight track objectives map onto the issue's U01–U08 checklist order,
  kept as the prerequisite sequence (practices and measurement first,
  engineering design last).
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
