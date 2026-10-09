# Grade 5 Science — Scope and Sequence

Audit section A00 of [issue #27](https://github.com/murderszn/open-tutor/issues/27).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-5 hub page | `curriculum/grade-5/README.md` | **Revise** — add Science to Core Subjects with audit status and link the new subject folder; keep the `stem/` listing |
| Grade-5 science folder | did not exist (0 Markdown files, matching the issue's 2026-10-01 baseline) | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#26, audit delivered as draft PR #92, unmerged) | `curriculum/grade-5/math/` (draft working state) | **Reference only** — session model (4 × ~40 min sessions/week) reused as pattern; 5.MD measurement/graphing and 5.G coordinate connections noted for U01/U05/U07; no math content reused |
| Grade-4 science track (#23, audit delivered as draft PR #88, unmerged) | `curriculum/grade-4/science/` (PR head) | **Reference for entry prerequisites only** — grade-4 end-of-year objectives define what this track assumes; no grade-4 lessons copied upward |
| Legacy `stem/` | 21 Markdown files (matching the issue baseline: README, 5 assignments, 15 quizzes) | **Reviewed individually below** — keep with truthful links; new core science belongs in `science/` per the worker prompt |

### Legacy `stem/` keep/revise/enrichment decisions

| File(s) | Decision |
|---|---|
| `stem/README.md` | **Revise** — add the science-track audit status and link `science/`; keep all assignment/quiz links |
| `assignments/app-design-introduction.md` | **Optional enrichment** — blank reusable assignment; app design is coding, not core science |
| `assignments/earth-spheres-investigation.md` | **Review for U05** — substantive Earth-spheres investigation (four spheres, interaction diagram, three-day observation log); revise the terrarium observation thread into the U05/U06 investigation line; keep provenance when adapted |
| `assignments/earth-spheres-scratch-review.md` | **Review for U05** — sphere drawing/labeling portion is revisable; the Scratch algorithm portion is optional enrichment |
| `assignments/scratch-game-challenge.md` | **Optional enrichment** — coding; not core science |
| `assignments/simple-machines-lab.md` | **Optional enrichment** — simple machines sit in the grade-3/4 band; no grade-5 performance expectation covers them, and quantitative "mechanical advantage" work exceeds the band |
| `quizzes/asteroids-comets-meteors-python-loops-quiz.md` | **Optional enrichment** — small-bodies inventory is beyond the grade-5 performance expectations (U07 is observable sky *patterns*, not a solar-system inventory); Python loops are optional enrichment |
| `quizzes/atmosphere-layers-air-pressure-scratch-broadcast-events-quiz.md` | **Optional enrichment** — atmosphere-layer inventory is not a grade-5 performance expectation; air-pressure items may serve as U05 teacher background |
| `quizzes/earth-s-rotation-revolution-seasons-python-user-input-quiz.md` | **Review for U07** — rotation/revolution and day-night observable patterns support 5-ESS1-2; apply the assessment boundary (no causes-of-seasons assessment); Python portion is optional enrichment |
| `quizzes/earth-spheres-check-in-scratch-variables-scorekeeping-quiz.md` | **Review for U05** — observation-vs-inference items and the terrarium water-cycle check-in; Scratch variables portion is optional enrichment |
| `quizzes/fall-semester-science-tech-showcase-capstone-quiz.md` | **Review for R00** — semester-reflection structure is reusable in the cumulative review bank |
| `quizzes/moon-phases-tides-gravity-python-if-else-conditions-quiz.md` | **Review for U07** — gravity items support 5-PS2-1; moon-phase and tide items are enrichment (not grade-5 performance expectations); Python portion is optional enrichment |
| `quizzes/pulleys-wheel-axle-scratch-collision-detection-quiz.md` | **Optional enrichment** — simple machines and coding |
| `quizzes/scratch-game-challenge-check-in-ecosystem-energy-flow-quiz.md` | **Review for U04** — ecosystem energy-flow items support 5-PS3-1 and 5-LS2-1; Scratch check-in is optional enrichment |
| `quizzes/severe-weather-levers-classes-1-2-3-video-storyboarding-quiz.md` | **Optional enrichment** — severe weather sits outside the grade-5 performance expectations (weather hazards are grade-3/4 territory) |
| `quizzes/simple-machines-lab-review-intro-to-python-print-variables-quiz.md` | **Optional enrichment** |
| `quizzes/sphere-interactions-the-water-cycle-scratch-motion-quiz.md` | **Review for U05/U06** — sphere-interaction and water-cycle items; Scratch motion portion is optional enrichment |
| `quizzes/states-of-matter-sound-light-waves-video-production-quiz.md` | **Review for U02/U03** — states-of-matter items support the particle model and conservation; the sound/light wave items are grade-4 territory (4-PS4) and stay enrichment here |
| `quizzes/the-engineering-design-process-python-number-guessing-game-quiz.md` | **Review for U08** — design-process items; Python portion is optional enrichment |
| `quizzes/the-solar-system-rocky-inner-vs-gas-giant-outer-planets-quiz.md` | **Optional enrichment** — planet inventory is beyond the grade-5 performance expectations |
| `quizzes/weather-vs-climate-cloud-types-the-inclined-plane-quiz.md` | **Optional enrichment** — weather/climate distinction is grade-3 territory |

Two findings cut across the whole legacy quiz library. First, **every legacy quiz
embeds its answer key beside the student questions** (a collapsible "Parent Answer
Key" section) — the same finding as the grade-5 math audit. Unit builds must
separate keys into teacher guides; no key may sit beside a student question.
Second, every "Explainer video" link is a **labeled YouTube search link**, not a
verified video — unit Resource Packs must open and verify actual items (or keep
explicit search links) per the Resource Finder format.

No existing grade-5 science material was factually inaccurate beyond the
grade-band mismatches noted above.

### Internal reference decisions

| Item | Decision |
|---|---|
| `resources/physics_fundamentals.md` (grades 4–8: measurement & units, matter, motion & forces) | **Teacher-side background for U02/U03/U07** — matter and measurement sections usable as adult background; learner language stays observable and qualitative per the assessment boundaries; do not assign to the learner |
| `resources/chemistry_fundamentals.md` | **Teacher-side for U02/U03** — respect the boundary: no atomic-scale mechanism of evaporation/condensation and no defining unseen particles for learners |
| `resources/biology_fundamentals.md` | **Teacher-side for U04** — photosynthesis detail is beyond the assessment boundary (no molecular explanations); macroscopic matter/energy flow only for learners |
| `resources/astronomy_fundamentals.md` | **Limited teacher background for U07** — relative distances, not sizes; no causes of seasons |
| `resources/thermodynamics_laws.md` | **Teacher-side only for the U04 energy thread** — no laws for learners |
| `resources/cooking_and_nutrition.md` | **Optional enrichment** for the U04 food-energy thread |
| Repository datasets (`periodic_table_elements.csv`, `solar_system_planets.csv`) | **No direct reuse at grade 5** — atomic abstractions and planetary magnitudes exceed the band; units will use original small-observation scenarios (e.g., one learner's dissolving and shadow measurements, sphere-interaction drawings) with clearly labeled practice data where needed |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PhET, PBS LearningMedia, Smithsonian Learning Lab — **reuse via resource_finder**; every item opened and checked for grade-5 fit before use |

## 2. Prerequisites

Learners typically enter grade-5 science with the grade-4 science track's
end-of-year objectives (that track's audit is delivered, units not yet written):

- Planning and carrying out fair investigations: one variable changed at a
  time, controls, repeated trials, data in tables and graphs, evidence-based
  explanations and model comparison
- Measuring length, mass, and volume with standard tools and converting within
  one measurement system (4.MD.1 — km/m/cm, kg/g, L/mL; two-column tables);
  reading bar graphs, pictographs, and line plots
- Qualitative energy reasoning (faster means more energy); energy transfer by
  sound, light, heat, and electric currents; collision outcome predictions
- Wave models (amplitude, wavelength — qualitative); light-reflection-and-seeing
  model
- Structure-function arguments at the macroscopic scale; sense-process-respond
  information models
- Rock-layer and fossil evidence for landscape change (relative time only);
  one-form-at-a-time weathering/erosion rate observations; map pattern reading;
  natural-resource and hazard reasoning
- A complete engineering design cycle: criteria and constraints, solution
  comparison, fair tests with failure points considered
- Science safety practices: adult-supervised investigations, materials away
  from the mouth, living things handled gently, never looking directly at the
  sun

Grade 5 adds: the particle model of matter; identifying materials by
observable properties; weight conservation through heating, cooling, and
mixing; evidence for chemical change; energy flow from sun to plants to
animals; plants getting growth materials chiefly from air and water; matter
cycling among plants, animals, decomposers, and the environment; two-sphere
Earth-system interactions; water-distribution amounts and percentages; gravity
directed down; star brightness by relative distance; shadow, day/night, and
seasonal-star patterns; and community-level resource protection.

Math entry (the grade-5 math track's prerequisites, draft PR #92, unmerged):
place value to thousandths, multi-digit multiplication and division, fraction
and decimal operations, volume of rectangular prisms, and the coordinate plane
(Quadrant I). Unit 01 leans on measurement conversion (5.MD.1) and
measure-and-graph practice; Unit 05 previews "parts out of 100" for the
water-distribution percentages without formal percent computation (percents
are a grade-6 topic); Unit 07 graphs shadow and sky-pattern data.

The diagnostic weeks (Weeks 1–2) probe these through play and talk; Unit 01
re-teaches measuring, unit conversion, fair-test structure, and model
vocabulary explicitly rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year. Short written responses (8–12
tasks) reviewed the same day count as evidence, alongside oral, drawn, and
manipulative responses. Objectives mirror the track README.

1. Plan and carry out controlled investigations: ask a testable question,
   change one variable at a time while controlling the rest, repeat trials,
   measure and graph quantities, and use evidence to build explanations and
   compare models (science practices thread; 3-5-ETS1-3).
2. Develop particle models showing that matter is made of particles too small
   to be seen; make observations and measurements to identify materials based
   on their properties — color, hardness, reflectivity, conductivity, response
   to magnetic forces, solubility (5-PS1-1, 5-PS1-3; no density; no
   atomic-scale mechanisms).
3. Measure and graph quantities to show that the total weight of matter is
   conserved when heating, cooling, or mixing substances; conduct
   investigations to determine whether mixing two or more substances results
   in new substances (5-PS1-2, 5-PS1-4; mass and weight not distinguished).
4. Use models to describe that energy in animals' food (used for body repair,
   growth, motion, and maintaining body warmth) was once energy from the sun;
   support the argument that plants get the materials they need for growth
   chiefly from air and water; develop a model of the movement of matter
   among plants, animals, decomposers, and the environment (5-PS3-1, 5-LS1-1,
   5-LS2-1; no molecular explanations).
5. Develop a model using an example to describe ways two of Earth's spheres
   interact; describe and graph the amounts and percentages of water and fresh
   water in various reservoirs to show how water is distributed on Earth
   (5-ESS2-1, 5-ESS2-2; two systems at a time; reservoirs limited to oceans,
   lakes, rivers, glaciers, ground water, and polar ice caps).
6. Model the water cycle to explain where usable water comes from; obtain and
   combine information about ways individual communities use science ideas to
   protect Earth's resources and environment (5-ESS3-1; the water-cycle model
   is the mechanism, taught as modeling practice).
7. Support the argument that the gravitational force Earth exerts on objects
   is directed down, toward the planet's center; support the argument that
   differences in the apparent brightness of the sun compared to other stars
   come from their relative distances from Earth; represent data in graphical
   displays to reveal patterns of daily shadow changes, day and night, and
   the seasonal appearance of some stars (5-PS2-1, 5-ESS1-1, 5-ESS1-2; no
   mathematical gravity, no star sizes, no causes of seasons).
8. Complete an engineering design cycle on an ecosystem or Earth-system
   problem: define the problem with criteria for success and constraints on
   materials, time, or cost; generate and compare multiple solutions; plan
   and carry out fair tests that control variables and consider failure
   points (3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3).

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards**, grade-5 performance
expectations and the 3–5 engineering band — 18 performance expectations in all.
Each code and description below was checked 2026-10-04 against the California
Department of Education's official reproduction of the NGSS grade-5 release
("NGSS Grade Five Arranged by DCI," revised March 2015, read in full),
cross-checked with nextgenscience.org. No state adoption, accreditation, or
alignment certification is claimed. None of the grade-5 performance
expectations carries the framework's engineering-integration asterisk.

### Matter and Its Interactions (5-PS1)

| Code | Description |
|---|---|
| 5-PS1-1 | Develop a model to describe that matter is made of particles too small to be seen. |
| 5-PS1-2 | Measure and graph quantities to provide evidence that regardless of the type of change that occurs when heating, cooling, or mixing substances, the total weight of matter is conserved. |
| 5-PS1-3 | Make observations and measurements to identify materials based on their properties. |
| 5-PS1-4 | Conduct an investigation to determine whether the mixing of two or more substances results in new substances. |

Clarifications carried from the framework: model evidence examples include
adding air to expand a basketball, compressing air in a syringe, dissolving
sugar in water, and evaporating salt water (5-PS1-1); reactions/changes include
phase changes, dissolving, and mixing that forms new substances (5-PS1-2);
identifiable materials include baking soda and other powders, metals, minerals,
and liquids; identifiable properties include color, hardness, reflectivity,
electrical conductivity, thermal conductivity, response to magnetic forces, and
solubility — density is not intended as an identifiable property (5-PS1-3);
combinations that do not produce new substances include sand and water; ones
that do include baking soda and vinegar or milk and vinegar (5-PS1-4).
Assessment boundaries: no atomic-scale mechanism of evaporation and
condensation, no defining the unseen particles (5-PS1-1); no distinguishing
mass and weight (5-PS1-2); no density, no distinguishing mass and weight
(5-PS1-3). 5-PS1-1 and 5-PS1-3 sit in Unit 02; 5-PS1-2 and 5-PS1-4 sit in
Unit 03.

### Motion and Stability: Forces and Interactions (5-PS2)

| Code | Description |
|---|---|
| 5-PS2-1 | Support an argument that the gravitational force exerted by Earth on objects is directed down. |

Clarifications: "Down" is a local description of the direction that points
toward the center of the spherical Earth. Assessment boundary: no mathematical
representation of gravitational force. Unit 07.

### Energy (5-PS3)

| Code | Description |
|---|---|
| 5-PS3-1 | Use models to describe that energy in animals' food (used for body repair, growth, motion, and to maintain body warmth) was once energy from the sun. |

Clarifications: model examples include diagrams and flow charts; the energy
released from food was once energy from the sun captured by plants in the
chemical process that forms plant matter (from air and water). Unit 04.

### From Molecules to Organisms: Structures and Processes (5-LS1)

| Code | Description |
|---|---|
| 5-LS1-1 | Support an argument that plants get the materials they need for growth chiefly from air and water. |

Clarifications: emphasis is on the idea that plant matter comes mostly from
air and water, not from the soil. Unit 04. Note: the photosynthesis mechanism
is 5-LS1-1-adjacent background only; learners argue from growth evidence, not
chemistry.

### Ecosystems: Interactions, Energy, and Dynamics (5-LS2)

| Code | Description |
|---|---|
| 5-LS2-1 | Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment. |

Clarifications: emphasis is on the idea that matter that is not food (air,
water, decomposed materials in soil) is changed by plants into matter that is
food; example systems include organisms, ecosystems, and the Earth. Assessment
boundary: no molecular explanations. Unit 04.

### Earth's Place in the Universe (5-ESS1)

| Code | Description |
|---|---|
| 5-ESS1-1 | Support an argument that differences in the apparent brightness of the sun compared to other stars is due to their relative distances from Earth. |
| 5-ESS1-2 | Represent data in graphical displays to reveal patterns of daily changes in length and direction of shadows, day and night, and the seasonal appearance of some stars in the night sky. |

Clarifications: absolute brightness depends on many factors; relative
distance is the one addressed (5-ESS1-1); pattern examples include Earth's
position and motion relative to the sun and selected stars visible only in
particular months (5-ESS1-2). Assessment boundaries: relative distances, not
sizes, of stars; no other brightness factors such as stellar masses, age, or
stage (5-ESS1-1); no causes of seasons (5-ESS1-2). Both in Unit 07.

### Earth's Systems (5-ESS2)

| Code | Description |
|---|---|
| 5-ESS2-1 | Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact. |
| 5-ESS2-2 | Describe and graph the amounts and percentages of water and fresh water in various reservoirs to provide evidence about the distribution of water on Earth. |

Clarifications: the four spheres are each a system and part of the whole Earth
system; examples include the influence of the ocean on ecosystems, landform
shape, and climate; the influence of the atmosphere on landforms and ecosystems
through weather and climate; and the influence of mountain ranges on winds and
clouds (5-ESS2-1); nearly all of Earth's available water is in the ocean, most
fresh water is in glaciers or underground, and only a tiny fraction is in
streams, lakes, wetlands, and the atmosphere (5-ESS2-2). Assessment boundaries:
interactions of two systems at a time (5-ESS2-1); reservoirs limited to
oceans, lakes, rivers, glaciers, ground water, and polar ice caps — the
atmosphere is excluded (5-ESS2-2). Both in Unit 05. Note: the hydrologic
(water) cycle is not itself a grade-5 performance expectation; Unit 06 teaches
it as the mechanism model behind sphere interactions and stewardship.

### Earth and Human Activity (5-ESS3)

| Code | Description |
|---|---|
| 5-ESS3-1 | Obtain and combine information about ways individual communities use science ideas to protect the Earth's resources and environment. |

Unit 06; learners research real community actions (water conservation,
habitat protection, waste reduction) from books and reliable media.

### Engineering Design, 3–5 band (3-5-ETS1)

| Code | Description |
|---|---|
| 3-5-ETS1-1 | Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost. |
| 3-5-ETS1-2 | Generate and compare multiple possible solutions to a problem based on how well each is likely to meet the criteria and constraints of the problem. |
| 3-5-ETS1-3 | Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved. |

Unit 08 runs the full cycle on an ecosystem or Earth-system problem; 3-5-ETS1-1
problem-definition language and 3-5-ETS1-3 fair-test language are introduced in
Unit 01 and reused in Units 02, 03, and 08 so the vocabulary is secure before
the capstone.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36
weeks. Session model: **4 sessions per week, about 40 minutes each** (16
sessions per unit), matching the grade-5 math track. Session types rotate
across investigation lesson, data-and-modeling practice, science
reading-and-talk, and review — named per unit below. Grade-5 learners do short
independent written work (8–12 tasks) that the adult reviews the same day,
with oral, drawn, and manipulative response options always available and
explicit adult directions for every investigation.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science session routines (question board, tool tray,
  data-table ritual, model-vocabulary wall, cleanup and safety check) and
  baseline each objective's entry point.
- Sessions: playful one-on-one probes — ask a question we could test vs. one
  we couldn't; plan a one-variable test; measure mass, volume, and
  temperature with standard tools and convert units (5.MD.1); read a bar
  graph and a line plot; draw a particle model of a solid, liquid, and gas;
  sort events into physical vs. chemical change guesses; show safe handling
  of tools and materials.
- No new instruction; record observations against the track objectives.

### Unit 01 — Models, measurement, and controlled investigations (Weeks 3–6)

- **Standards:** science and engineering practices focus; 5-PS1's
  measure-and-graph practice introduced; 3-5-ETS1-1 and 3-5-ETS1-3
  introduced; 5.MD.1 conversions (e.g., 5 cm to 0.05 m).
- **Week 3 goal:** testable vs. untestable questions; observation vs.
  inference (legacy check-in items revised); observe with balance, graduated
  cylinder, thermometer, and hand lens; record in labeled diagrams and data
  tables; build first models — diagrams of observed objects and events.
- **Week 4 goal:** fair tests — change one thing, keep the rest the same,
  repeat trials, consider what counts as evidence; measure and graph
  quantities (bar graphs from the learner's own measurements).
- **Week 5 goal:** models as explanations — revise a diagram model after new
  evidence; define a simple design problem with criteria and constraints
  (3-5-ETS1-1 language); introduce the investigation-report format.
- **Week 6:** review week — measurement-and-graphing challenge, fair-test
  redesign game, formative check.
- Sessions rotate: investigation lesson → measuring-and-modeling practice →
  reading-and-talk about evidence → review game.
- Safety: tool-tray rules; non-mercury thermometers adult-read; nothing near
  the mouth; the adult previews every procedure.

### Unit 02 — Particle models, properties, and mixtures (Weeks 7–10)

- **Standards:** 5-PS1-1, 5-PS1-3.
- **Week 7 goal:** matter is made of particles too small to be seen — evidence
  from adding air to expand a ball, compressing air in a syringe, dissolving
  sugar in water; particle drawings of solids, liquids, gases.
- **Week 8 goal:** identify materials by observable properties — color,
  hardness, reflectivity, response to magnetic forces, solubility; identify
  baking soda and other powders, metals, minerals, liquids; density is
  explicitly out.
- **Week 9 goal:** mixtures — sand and water vs. sugar and water; particle
  models of mixtures; which mixtures keep their properties.
- **Week 10:** review week — property-sort challenge with mystery samples,
  model revision, formative check.
- Sessions rotate: investigation lesson → property-and-model practice →
  reading-and-talk → review.
- Materials are household safe; the adult previews every mixture for eye and
  skin safety; no tasting during investigations.

### Unit 03 — Matter conservation and chemical-change evidence (Weeks 11–14)

- **Standards:** 5-PS1-2, 5-PS1-4.
- **Week 11 goal:** weight is conserved through phase change — freeze and melt
  water, weigh before and after; measure and graph.
- **Week 12 goal:** weight is conserved through dissolving — sugar in water;
  the sugar "seems to vanish" but the weight stays; graph the evidence.
- **Week 13 goal:** mixing that makes new substances — baking soda and
  vinegar, milk and vinegar; evidence of new substances (gas, color change,
  temperature change); contrast with sand and water (no new substance).
- **Week 14:** review week — conservation investigation of the learner's
  choice, new-substance evidence sort, formative check.
- Sessions rotate: investigation lesson → measure-and-graph practice →
  reading-and-talk about evidence → review.
- Safety: adult pours vinegar; eye protection when mixing; sealed vs. open
  containers discussed honestly (gas escaping changes the measured weight —
  the unit teaches this as evidence, not a trick).

### Unit 04 — Energy in food, plants, and ecosystems (Weeks 15–18; Week 18 midyear review)

- **Standards:** 5-PS3-1, 5-LS1-1, 5-LS2-1.
- **Week 15 goal:** plants get growth materials chiefly from air and water —
  the willow-tree story (van Helmont's five-year experiment as a historical
  narrative); mass-of-soil vs. mass-of-tree reasoning; not from the soil.
- **Week 16 goal:** energy in animals' food was once energy from the sun —
  food-chain diagrams and flow charts; body repair, growth, motion, warmth.
- **Week 17 goal:** matter moves among plants, animals, decomposers, and the
  environment — decomposition observations; matter-cycle models; matter that
  is not food becomes food through plants; no molecular explanations.
- **Week 18:** midyear review — cumulative investigations and model revisions
  across Units 01–04; re-teach where evidence shows gaps; formative check.
- Sessions rotate: investigation lesson → model-and-diagram practice →
  reading-and-talk → review.
- Legacy ecosystem-energy-flow quiz items are revised into the U04 checks;
  keys separated into the teacher guide.

### Unit 05 — Earth systems: spheres and water distribution (Weeks 19–22)

- **Standards:** 5-ESS2-1, 5-ESS2-2.
- **Week 19 goal:** the four spheres as systems — geosphere, hydrosphere,
  atmosphere, biosphere; model two-sphere interactions with a concrete
  example (two systems at a time per the boundary).
- **Week 20 goal:** ocean influence on ecosystems, landforms, and climate;
  atmosphere influence through weather and climate; mountain-range influence
  on winds and clouds — examples as models, not memorized facts.
- **Week 21 goal:** water distribution — describe and graph amounts and
  percentages of water and fresh water in reservoirs (oceans, lakes, rivers,
  glaciers, ground water, polar ice caps); the atmosphere is excluded per
  the boundary; "parts out of 100" language previews percent.
- **Week 22:** review week — sphere-interaction model revision, water-graph
  challenge, formative check.
- Sessions rotate: investigation lesson → data-and-modeling practice →
  reading-and-talk → review.
- The legacy Earth-spheres investigation assignment and sphere-interaction
  quiz items are revised into this unit; keys separated.

### Unit 06 — Water cycle and human resource stewardship (Weeks 23–26)

- **Standards:** 5-ESS3-1; water-cycle model as the mechanism (modeling
  practice, not itself a performance expectation).
- **Week 23 goal:** model the water cycle — evaporation, condensation,
  precipitation, collection; closed-terrarium evidence (condensation on the
  glass); the cycle connects the spheres.
- **Week 24 goal:** where usable water comes from — link the U05 reservoir
  graphs to local water sources; obtain information from reliable sources.
- **Week 25 goal:** how communities protect resources — obtain and combine
  information about real community actions (water conservation, habitat
  protection, waste reduction); evaluate the merit of the ideas.
- **Week 26:** review week — stewardship proposal mini-presentation with
  evidence; formative check.
- Sessions rotate: investigation lesson → data-and-reading practice →
  information-evaluation talk → review.
- Safety: sealed terrarium only; no wild-animal or wild-plant collection;
  hands washed after soil work.

### Unit 07 — Gravity, stars, and observable sky patterns (Weeks 27–30)

- **Standards:** 5-PS2-1, 5-ESS1-1, 5-ESS1-2.
- **Week 27 goal:** gravity pulls down — drop tests with varied objects;
  "down" points toward Earth's center; no mathematical representation.
- **Week 28 goal:** the sun is a star that looks brighter because it is
  closer — apparent brightness by relative distance; distances, not sizes;
  no other brightness factors.
- **Week 29 goal:** sky patterns — track and graph shadow length and
  direction through a day; day and night from Earth's rotation; seasonal
  appearance of some stars; no causes-of-seasons assessment.
- **Week 30:** review week — sky-pattern graphing challenge, brightness
  argument with evidence, formative check.
- Sessions rotate: observation lesson → data-and-graphing practice →
  reading-and-talk → review.
- Safety: never look directly at the sun — shadow work with sticks only;
  night-sky observation is adult-supervised.
- Legacy rotation/revolution and gravity quiz items are revised with the
  5-ESS1-2 boundary applied; moon-phase/tide items stay enrichment.

### Unit 08 — Engineering: ecosystem and Earth-system solutions (Weeks 31–34)

- **Standards:** 3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3.
- **Week 31 goal:** define the problem — choose an ecosystem or Earth-system
  problem the learner can touch (schoolyard runoff, garden water use,
  pollinator habitat, classroom waste); criteria for success and constraints
  on materials, time, and cost.
- **Week 32 goal:** generate and compare multiple possible solutions against
  the criteria and constraints; sketch and justify the comparison; research
  before designing.
- **Week 33 goal:** plan and carry out fair tests with controlled variables;
  consider failure points; identify what to improve and rebuild. The legacy
  engineering-design-process quiz items are revised into design vocabulary
  checks here.
- **Week 34:** review week — design showcase for the household with test
  data; formative check.
- Sessions rotate: design lesson → build-and-test practice →
  data-comparison talk → review.
- Materials are household and dollar-store safe; the adult previews every
  build for pinch, topple, small-part, and water-spill risks; the adult
  handles any cutting tools.

### Weeks 35–36 — Final review (flexible)

- Cumulative investigations and model revisions across all eight objectives;
  re-teach where evidence shows gaps; final assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with the
fair-test routine from U01; Unit 03 with the particle models from U02; Unit 04
with the measure-and-graph practice from U01; Unit 05 with the model-revision
habit from U02; Unit 07 with the data-graphing routine from U05; Unit 08 with
the fair-test routine from U01 and the criteria/constraints language from
U05's stewardship work). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are short written tasks (8–12 items) the
adult reviews the same day, alongside oral, drawn, and manipulative options;
each unit's teacher guide specifies what "ready to move on" looks like. The
investigation-report format from Unit 01 and the model-vocabulary wall run as
background threads through the year, giving spaced retrieval of evidence talk,
labeling, and modeling; the particle-model habit from Unit 02 is reused in
Units 03, 04, and 06.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/physics_fundamentals.md`, `resources/chemistry_fundamentals.md`,
  `resources/biology_fundamentals.md`, `resources/astronomy_fundamentals.md`,
  `resources/thermodynamics_laws.md` — adult background references only;
  learner language stays observable and within the assessment boundaries. Do
  not assign to the learner.
- `resources/cooking_and_nutrition.md` — optional enrichment for the U04
  food-energy thread only.
- Legacy stem keep/revise decisions from §1; revised items keep their
  provenance notes when adapted; every embedded legacy key is separated into
  the teacher guide.
- Particle-model cards, property-sort cards, water-data table templates,
  sphere-interaction diagram frames, shadow-tracking logs, design
  criteria/constraints sheets, and the investigation-report format will be
  created once (Units 01, 02, 05, 07, 08) and reused; do not duplicate per
  unit.
- Same-grade math and grades 4–8 science are **not** reused for grade-5
  instruction beyond the timing/prerequisite references noted (grade-band
  boundaries); the math track's 5.MD/5.G coverage is a timing reference, not
  source material.

## 8. Safe materials

Household or dollar-store supplies: balance scale, measuring cups and plastic
graduated cylinders, non-mercury thermometers (adult-read), hand lenses,
clear jars with lids, baking soda, vinegar, table salt, sugar, sand, water,
balloons, needle-free syringes, bar magnets, assorted safe powder/metal/
mineral samples, flashlight, sticks for shadow tracking, globe, printed star
charts, terrarium jar with lid, potting soil, bean seeds, paper, cardboard,
tape, craft wire, drawing paper and crayons, notebooks and pencils, printed
maps and water-data tables.
Safety rules: the adult supervises every investigation and previews every
procedure; baking soda and vinegar are food-safe but nothing is tasted during
investigations; eye protection (glasses) when pouring and mixing; sealed
containers only for gas-producing mixes when weighing; living things are
observed gently, never collected from the wild or harmed; hands washed after
soil, plant, and outdoor work; never look directly at the sun — shadow work
only; the adult substitutes an observation or simulation alternative whenever
the real thing is unsafe.

## 9. Accessibility supports

- Short written responses (8–12 tasks) reviewed the same day; oral, pointing,
  drawing, and manipulative response modes always available; adult scribes
  dictated observations on request.
- Large-print, high-contrast data tables and word cards; tactile exploration
  built into mixture, sphere-model, and shadow work for low-vision learners.
- Short sessions with movement breaks; every lesson includes a table variant
  and an active-investigation variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual science word wall (particle, property, conserve, evidence,
  criteria, constraint, sphere, reservoir, gravity); home-language labels
  welcomed alongside English.
- Sentence frames for evidence and argument talk ("My evidence is ___," "When
  ___ changed, then ___ happened," "I think ___ because ___"); every diagram
  and model ships with a text-only alternative; color is never the only cue
  in graphs, sorts, or maps.
- Hearing support: face the learner when giving directions; visual step cards
  for multi-step investigations and builds.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #27.
- No grade-5-appropriate internal investigation guides exist; units will author
  original small-observation scenarios (e.g., one learner's dissolving and
  shadow measurements, sphere-interaction drawings) with clearly labeled
  practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- A shared grade-5 investigation/data asset set (particle-model cards,
  property-sort cards, water-data table template, sphere-interaction diagram
  frame, shadow-tracking log, design criteria/constraints sheet,
  investigation-report format) should be created once (Units 01, 02, 05, 07,
  08) and reused across units rather than regenerated per unit.
- Legacy keys are embedded beside student questions throughout the stem quiz
  library; separation into teacher guides happens with each unit build, and
  the cumulative bank arrives with R00.
- The midyear (Week 18) and final (Weeks 35–36) review assessments and keys
  arrive with R00.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Models, measurement, and controlled investigations; U02 Particle models,
properties, and mixtures; U03 Matter conservation and chemical-change
evidence; U04 Energy in food, plants, and ecosystems; U05 Earth systems:
spheres and water distribution; U06 Water cycle and human resource
stewardship; U07 Gravity, stars, and observable sky patterns; U08
Engineering: ecosystem and Earth-system solutions; R00 diagnostic,
midyear/final review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #27 body, comments, and label state re-read 2026-10-04 before
  claiming; no competing claim (0 comments prior to the claim comment); the
  `curriculum-in-progress` label was added by this run and will be removed on
  delivery.
- No other `curriculum-in-progress` claims were active on queue issues at claim
  time. Open worker PR #92 (issue #26) was not touched; its delivered draft
  state was read to confirm the grade-5 session model (4 × ~40 min
  sessions/week) for consistency.
- `curriculum/grade-5/` re-inventoried on `main` @ `2c43d24`: no `science/`
  folder existed (0 Markdown files, matching the issue baseline); `stem/` has
  21 Markdown files (README + 5 assignments + 15 quizzes), matching the
  issue's 21-file baseline.
- Standards codes/descriptions verified 2026-10-04 against the California
  Department of Education's official reproduction of the NGSS grade-5 release
  ("NGSS Grade Five Arranged by DCI," revised March 2015, read in full):
  18 performance expectations — 5-PS1-1–4, 5-PS2-1, 5-PS3-1, 5-LS1-1,
  5-LS2-1, 5-ESS1-1–2, 5-ESS2-1–2, 5-ESS3-1, 3-5-ETS1-1–3 — with
  clarifications and assessment boundaries carried into §4. The water
  (hydrologic) cycle is not a grade-5 performance expectation; Unit 06
  teaches it as a mechanism model. No state adoption, accreditation, or
  alignment certification is claimed. No grade-5 performance expectation
  carries the framework's engineering-integration asterisk.
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
