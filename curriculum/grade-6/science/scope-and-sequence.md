# Grade 6 Science — Scope and Sequence

Audit section A00 of [issue #31](https://github.com/murderszn/open-tutor/issues/31).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-05 against `main` (commit `2c43d24`). The
`curriculum/grade-6/science/` folder held **2 Markdown files** (1 subject
README, 1 starter lesson). The issue's 2026-10-01 "0 Markdown files" baseline
counted legacy curriculum content only and excluded the README and the starter
lesson; this re-audit counts every Markdown file. The `stem/` directory holds
**0 Markdown files** anywhere in the repository — there is nothing to reuse
from it, and no existing links to preserve. Decisions: **Keep** = reuse in
the named unit with review; **Revise** = usable skeleton needing substantive
improvement (content, key separation, or grade fit) before assignment;
**Rebuild** = not usable as written; the unit will replace it;
**Enrichment** = optional extension only, never a core-lesson substitute.

### Starter lesson

| Item | Location | Decision |
|---|---|---|
| Starter Lesson — Model water moving through a system | `starter-lesson.md` | **Keep** → U06. Three 35-minute sessions: draw a labeled arrow diagram of liquid water → vapor → droplets/liquid (evaporation, condensation); analyze a sample droplet-count table (0 min: 3 droplets, 10 min: 11, 20 min: 18 — increases of 8 then 7, 15 overall); distinguish the model from reality (a sealed container models some steps but leaves out clouds, wind, landscapes, and groundwater); adult-supervised warm-water observation with hot-water prohibition and spill precautions. The error-check correctly counters "the water disappeared" with conservation reasoning (water changed state and stayed in the closed system). The rubric (model / evidence / limits at 2-1-0), the text-only diagram route, the oral-response accommodations, and the "sample data are not learner observations" discipline are sound. This is direct MS-ESS2-4 water-cycle modeling practice and a model-vs-reality primer for U01. **Gaps the unit builds fix:** "Answer checks" sit beside the student tasks — the unit build moves them into the teacher guide; the sample table stays clearly labeled as sample data in every reuse. |

### Subject README

| Item | Location | Decision |
|---|---|---|
| Grade 6 Science index | `README.md` | **Revise** → replaced this run by the new track README (coverage summary, measurable objectives, standards reference, structure, adult guidance). |

There is no legacy assignment or quiz library for grade-6 science (unlike grades
4–5). Nothing was inaccurate or inappropriate. The starter lesson is the only
instructional content and covers one thread of the MS-ESS2-4 water-cycle
modeling work — everything else in the track is built new.

### Repository references

| Item | Decision |
|---|---|
| Grade-6 hub page (`curriculum/grade-6/README.md`) | **Revise** — updated to record the science track's audit status. |
| Grade-5 science track (#27, audit delivered; units planned) | **Reference for entry prerequisites only** — the grade-5 end-of-year objectives (§2) define what this track assumes; no grade-5 lessons are copied upward. |
| `resources/astronomy_fundamentals.md` | **Reuse** — in-band starting shelf for U02/U03: the Sun, inner/outer planets, star life cycle, galaxies. Excerpted and explained at grade level; never assigned whole. **Correction before reuse:** its "Mercury: no atmosphere" is a simplification — Mercury keeps an extremely thin exosphere, not literally no atmosphere; the unit build corrects this during excerpting. |
| `resources/solar_system_planets.csv` | **Reuse** → U03. Real, rounded public data with named columns and units: `distance_from_sun_million_km`, `orbital_period_days`, `equatorial_diameter_km`, `surface_gravity_m_s2`, `known_moons`. Distance/diameter/period values are stable enough for scale analysis (MS-ESS1-3); **the moon counts are dated** (new moons are confirmed regularly — Saturn's listed 146 is already behind current tallies), so every task using that column must label values as sample/rounded and verify before assessment use. |
| `resources/physics_fundamentals.md` | **Reuse** → U03. Gravity as an attractive force for the MS-ESS1-2 solar-system model; excerpted at grade level. |
| `resources/thermodynamics_laws.md` | **Limited reuse** → U04. Energy flow (the Sun's energy and Earth's interior heat) driving the cycling of Earth's materials for MS-ESS2-1; adult-selected passages only, explained at grade level — the full guide sits above band. |
| `resources/chemistry_fundamentals.md`, `resources/periodic_table_elements.csv` | **Enrichment only** — mineral-composition and element-data extensions for U04 (e.g., quartz = SiO₂) with adult-selected rows; element facts columns are sample text and must not be assessed as data. |
| `resources/biology_fundamentals.md` | **Limited reuse** → U04/U07. The Sun's energy entering Earth's systems and matter cycling through living things (bridging grade-5's 5-PS3-1/5-LS2-1 into MS-ESS2-1); excerpted at grade level. |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives every unit's Resource Pack (focused queries, verified videos or labeled search links, reputable references, task-to-resource mappings). |

## 2. Prerequisites

Learners typically enter grade-6 science with (the grade-5 science track's
end-of-year objectives):

- Plan and carry out controlled investigations: ask a testable question, change one variable at a time while controlling the rest, repeat trials, measure and graph quantities, use evidence to build explanations and compare models (3-5-ETS1-3)
- Particle models showing matter is made of particles too small to be seen; identify materials by properties — color, hardness, reflectivity, conductivity, response to magnetic forces, solubility (5-PS1-1, 5-PS1-3; no density, no atomic-scale mechanisms)
- Measure and graph quantities to show conservation of matter's weight when heating, cooling, or mixing; determine whether mixing substances results in new substances (5-PS1-2, 5-PS1-4; mass and weight not distinguished)
- Energy in animals' food was once energy from the sun; plants get materials chiefly from air and water; matter moves among plants, animals, decomposers, and the environment (5-PS3-1, 5-LS1-1, 5-LS2-1; no molecular explanations)
- Earth's spheres interact; amounts and percentages of water in Earth's reservoirs (5-ESS2-1, 5-ESS2-2; reservoirs limited to oceans, lakes, rivers, glaciers, groundwater, polar ice caps)
- The water-cycle model and how communities use science ideas to protect Earth's resources (5-ESS3-1)
- Gravity directed toward Earth's center; the sun's apparent brightness from relative distance; daily shadow changes, day and night, seasonal star patterns (5-PS2-1, 5-ESS1-1, 5-ESS1-2; no mathematical gravity, no star sizes, no causes of seasons)
- An engineering design cycle: define the problem with criteria and constraints, generate and compare solutions, fair-test with controlled variables (3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3)

The diagnostic weeks (Weeks 1–2) verify these. U01 re-teaches the
investigation toolkit (variables, repeated trials, labeled tables and graphs)
before assuming it is secure; U02 re-checks day/night and shadow-pattern
ideas before extending to seasons and eclipses.

## 3. Track objectives

Measurable, adult-assessed by end of year (20 objectives; numbered in the track
README):

1. Ask testable questions; plan and carry out controlled investigations —
   change one variable at a time, control the rest, repeat trials, measure
   with standard tools, and record data in labeled tables with units.
2. Graph data with labeled axes and units; choose line graphs for
   time-series and bar graphs for categories; describe patterns, trends, and
   variability in data without overclaiming.
3. Develop and use models to describe systems; distinguish a model from the
   real system it represents; name what a model includes and what it leaves
   out.
4. Develop and use a model of the Earth-sun-moon system to describe the
   cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.
5. Explain day and night by Earth's rotation and seasons by Earth's axial
   tilt; use evidence to reject the misconception that seasons come from
   Earth's distance from the sun.
6. Develop and use a model to describe the role of gravity in the motions
   within the solar system.
7. Analyze and interpret data (including the solar-system planets dataset)
   to determine scale properties of objects in the solar system; build a
   scale model of planet sizes and orbital distances.
8. Observe and test rock and mineral samples to identify properties (color,
   streak, hardness, luster, cleavage); classify rocks as igneous,
   sedimentary, or metamorphic from formation evidence.
9. Develop a model to describe the cycling of Earth's materials and the
   flow of energy (from the sun and Earth's interior) that drives this
   process.
10. Construct an explanation based on evidence for how geoscience processes
    have changed Earth's surface at varying time and spatial scales.
11. Analyze and interpret data on the distribution of fossils and rocks,
    continental shapes, and seafloor structures to provide evidence of past
    plate motions.
12. Construct a scientific explanation based on evidence from rock strata for
    how the geologic time scale organizes Earth's 4.6-billion-year-old
    history.
13. Develop a model to describe the cycling of water through Earth's systems
    driven by energy from the sun and the force of gravity.
14. Collect and analyze local weather data to provide evidence for how the
    motions and complex interactions of air masses result in changes in
    weather conditions.
15. Develop and use a model to describe how unequal heating and rotation of
    the Earth cause patterns of atmospheric and oceanic circulation that
    determine regional climates.
16. Construct a scientific explanation based on evidence for how the uneven
    distributions of Earth's mineral, energy, and groundwater resources are
    the result of past and current geoscience processes.
17. Apply scientific principles to design a method for monitoring or
    minimizing a human impact on the environment; construct an
    evidence-supported argument about how population growth and per-capita
    consumption impact Earth's systems.
18. Ask questions to clarify evidence of the factors that have caused the
    rise in global temperatures over the past century; evaluate data tables,
    graphs, and maps as evidence.
19. Analyze and interpret data on natural hazards to forecast future events
    and evaluate technologies that mitigate their effects.
20. Complete an engineering design cycle on a natural-hazard problem: define
    criteria and constraints, generate and compare solutions, test and
    iterate, and present an Earth-data capstone using real public datasets.

## 4. Standards crosswalk

Objectives reference the **Next Generation Science Standards (NGSS) middle-school
(6–8) band** performance expectations for Earth and space science (MS-ESS1,
MS-ESS2, MS-ESS3) and engineering design (MS-ETS1). Every code and description
below was checked 2026-10-05 against the official framework
(`nextgenscience.org/dci-arrangement/ms-ess1-earths-place-universe` for
MS-ESS1, and the California Department of Education's official NGSS
reproduction at `www2.cde.ca.gov/cacs` for MS-ESS2, MS-ESS3, and MS-ETS1 —
the same source the grade-5 track audit used). **No state adoption,
accreditation, or alignment certification is claimed.** NGSS does not assign
specific performance expectations to grade 6; this track is the grade-6 year
of the middle-school band and addresses the Earth-science PEs at
grade-appropriate depth, preserving the band's assessment boundaries
(e.g., no Kepler's laws, no period/epoch names, no paleomagnetic anomalies,
no Coriolis dynamics).

### Earth's Place in the Universe (MS-ESS1) — U02, U03, U05

- **MS-ESS1-1** — Develop and use a model of the Earth-sun-moon system to
  describe the cyclic patterns of lunar phases, eclipses of the sun and moon,
  and seasons. → U02
- **MS-ESS1-2** — Develop and use a model to describe the role of gravity in
  the motions within galaxies and the solar system. → U03
- **MS-ESS1-3** — Analyze and interpret data to determine scale properties
  of objects in the solar system. → U03
- **MS-ESS1-4** — Construct a scientific explanation based on evidence from
  rock strata for how the geologic time scale is used to organize Earth's
  4.6-billion-year-old history. → U05 (no recalling names of specific
  periods or epochs, per the assessment boundary)

### Earth's Systems (MS-ESS2) — U04, U05, U06, U07

- **MS-ESS2-1** — Develop a model to describe the cycling of Earth's
  materials and the flow of energy that drives this process. → U04
- **MS-ESS2-2** — Construct an explanation based on evidence for how
  geoscience processes have changed Earth's surface at varying time and
  spatial scales. → U05
- **MS-ESS2-3** — Analyze and interpret data on the distribution of fossils
  and rocks, continental shapes, and seafloor structures to provide evidence
  of the past plate motions. → U05
- **MS-ESS2-4** — Develop a model to describe the cycling of water through
  Earth's systems driven by energy from the sun and the force of gravity. →
  U06
- **MS-ESS2-5** — Collect data to provide evidence for how the motions and
  complex interactions of air masses results in changes in weather
  conditions. → U06
- **MS-ESS2-6** — Develop and use a model to describe how unequal heating
  and rotation of the Earth cause patterns of atmospheric and oceanic
  circulation that determine regional climates. → U07

### Earth and Human Activity (MS-ESS3) — U07, U08

- **MS-ESS3-1** — Construct a scientific explanation based on evidence for
  how the uneven distributions of Earth's mineral, energy, and groundwater
  resources are the result of past and current geoscience processes. → U07
- **MS-ESS3-2** — Analyze and interpret data on natural hazards to forecast
  future catastrophic events and inform the development of technologies to
  mitigate their effects. → U08
- **MS-ESS3-3** — Apply scientific principles to design a method for
  monitoring and minimizing a human impact on the environment. → U07
- **MS-ESS3-4** — Construct an argument supported by evidence for how
  increases in human population and per-capita consumption of natural
  resources impact Earth's systems. → U07
- **MS-ESS3-5** — Ask questions to clarify evidence of the factors that
  have caused the rise in global temperatures over the past century. → U07
  (emphasis on the major role human activities play; the unit presents the
  scientific consensus and its evidence, not a debate about settled science)

### Engineering Design (MS-ETS1) — U01 (practices), U08 (capstone)

- **MS-ETS1-1** — Define the criteria and constraints of a design problem
  with sufficient precision to ensure a successful solution, taking into
  account relevant scientific principles and potential impacts on people and
  the natural environment that may limit possible solutions. → U08
- **MS-ETS1-2** — Evaluate competing design solutions using a systematic
  process to determine how well they meet the criteria and constraints of
  the problem. → U08
- **MS-ETS1-3** — Analyze data from tests to determine similarities and
  differences among several design solutions to identify the best
  characteristics of each that can be combined into a new solution to better
  meet the criteria for success. → U08
- **MS-ETS1-4** — Develop a model to generate data for iterative testing
  and modification of a proposed object, tool, or process such that an
  optimal design can be achieved. → U08

U01 has no performance expectations of its own: it builds the science and
engineering practices (Appendix F — planning and carrying out investigations;
analyzing and interpreting data; developing and using models) that
MS-ESS1-3, MS-ESS2-5, and the capstone depend on. The pacing below shows
where each practice is re-used so U01 is never a detached skills unit.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **4 sessions per week, about 45 minutes each**
(16 sessions per unit), matching the grade-6 math track. Session types
rotate across investigation lesson, data-and-modeling practice,
science-reading-and-talk, and review — named per unit below. Grade-6
learners do independent written work (12–16 tasks) that the adult reviews
the same day; written reasoning is expected and grows across the year, with
the adult still supervising and redirecting. Investigations are
adult-supervised with simulation/observation alternatives for hazards,
materials, and accessibility.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science session routines (question board, tool tray,
  data-table ritual, model-vocabulary wall, cleanup and safety check) and
  baseline each objective's entry point.
- Sessions: playful probes — ask a question we could test vs. one we
  couldn't; plan a one-variable test with a pendulum or ramp; measure mass,
  volume, and temperature with standard tools and convert units; read a bar
  graph and a line plot; draw a particle model of a solid, liquid, and gas;
  predict whether mixing two powders with water makes a new substance; show
  safe handling of hand lenses, thermometers, and glass containers; describe
  day/night and name one water-cycle step.
- No new instruction; record observations against the track objectives and
  re-teach any insecure grade-5 skill in U01's first two sessions.

### Unit 01 — Measurement, graphing, models, and investigation design (Weeks 3–6)

- **Standards:** science and engineering practices focus (Appendix F);
  measurement/graphing practice feeds MS-ESS1-3 and MS-ESS2-5; modeling
  practice feeds every later unit.
- **Week 3 goal:** testable vs. untestable questions; observation vs.
  inference; variables (changed, measured, controlled) with a
  one-variable-at-a-time ramp or pendulum investigation; repeated trials.
- **Week 4 goal:** measurement with standard tools — meter sticks,
  graduated cylinders, balances, thermometers; metric conversions by place
  value (5 cm = 0.05 m); labeled data tables with units in every column.
- **Week 5 goal:** graphing — line graphs for change over time, bar graphs
  for categories; axis labels and units; describe patterns, trends, and
  variability without overclaiming ("the pattern in this sample" discipline
  from the starter lesson).
- **Week 6:** review week — the learner's model-vs-reality check from the
  starter lesson's water-cycle work; formative check; every model names what
  it includes and leaves out.

### Unit 02 — Earth–Sun–Moon systems and seasons (Weeks 7–10)

- **Standards:** MS-ESS1-1.
- **Week 7 goal:** day and night by Earth's rotation — shadow-stick
  observations and a flashlight/globe model; rotation vs. revolution
  vocabulary.
- **Week 8 goal:** lunar phases — a lamp-and-ball model the learner operates;
  the monthly cycle as a pattern, not a list to memorize.
- **Week 9 goal:** eclipses — scale-model of sun/earth/moon alignment;
  why eclipses don't happen monthly (orbital tilt).
- **Week 10:** review week — seasons by axial tilt with a tilted-globe
  demonstration; evidence against the distance misconception (Earth is
  nearest the sun in January); formative check.

### Unit 03 — Solar system, gravity, and scale (Weeks 11–14)

- **Standards:** MS-ESS1-2, MS-ESS1-3.
- **Week 11 goal:** the solar system's layout — planets in order with the
  dataset; inner rocky vs. outer giant planets; dwarf planets and small
  bodies as enrichment only.
- **Week 12 goal:** gravity holds the system together — gravity as an
  attractive force (explanatory, not mathematical); orbital motion as
  falling-around; what "holds together the solar system" means in the
  MS-ESS1-2 clarification.
- **Week 13 goal:** scale — planet-size and orbit-distance scale models
  (playground or paper-strip); why models must distort (real scale won't fit
  in a room); data analysis from `solar_system_planets.csv` (columns and
  units named; moon counts labeled sample/dated).
- **Week 14:** review week — scale-properties data task; formative check.

### Unit 04 — Earth materials, rocks, minerals, and cycles (Weeks 15–18)

- **Standards:** MS-ESS2-1.
- **Week 15 goal:** minerals — properties from tests (color, streak,
  hardness, luster, cleavage); identifying an unknown sample from evidence;
  safety: adult supervises hardness tools.
- **Week 16 goal:** rocks from formation evidence — igneous, sedimentary,
  metamorphic; a rock-sample sort with justification.
- **Week 17 goal:** the rock cycle — a model of cycling driven by the sun's
  energy and Earth's interior heat; matter is conserved through the cycle.
- **Week 18:** midyear review week — full-track retrieval (investigation
  practices, Earth-sun-moon, solar system, rocks); formative midyear check.

### Unit 05 — Plate tectonics, Earth history, and geologic evidence (Weeks 19–22)

- **Standards:** MS-ESS2-2, MS-ESS2-3, MS-ESS1-4.
- **Week 19 goal:** a restless surface — evidence that Earth's surface
  changes at many time scales (earthquakes and volcanoes fast; mountain
  building slow); reading simple maps of earthquakes and volcanoes.
- **Week 20 goal:** plate motions — fossil and rock distribution across
  continents, continental shapes, seafloor structures (ridges, trenches) as
  evidence; a fit-the-continents puzzle with evidence cards.
- **Week 21 goal:** deep time — rock strata and relative age; the geologic
  time scale as an organizer of 4.6 billion years (no period/epoch names to
  memorize, per the assessment boundary); a timeline model.
- **Week 22:** review week — evidence-sorting task (which evidence supports
  which claim); formative check.

### Unit 06 — Water, atmosphere, and weather systems (Weeks 23–26)

- **Standards:** MS-ESS2-4, MS-ESS2-5.
- **Week 23 goal:** the water cycle as a system — sun's energy and gravity
  as drivers; the starter lesson's closed-container model re-used and
  extended (clouds, wind, landscapes, groundwater named as the model's
  documented limits).
- **Week 24 goal:** the atmosphere — air has mass and exerts pressure
  (simple demonstrations); air masses and fronts as the cause of weather
  change.
- **Week 25 goal:** local weather data — daily temperature, precipitation,
  wind, and cloud observations; graphing the week's data; connecting a
  weather change to an air-mass movement.
- **Week 26:** review week — water-cycle model defense (what it shows, what
  it leaves out); formative check.

### Unit 07 — Climate, resources, and human impacts (Weeks 27–30)

- **Standards:** MS-ESS2-6, MS-ESS3-1, MS-ESS3-3, MS-ESS3-4, MS-ESS3-5.
- **Week 27 goal:** climate vs. weather — unequal heating and Earth's
  rotation drive atmospheric and oceanic circulation; regional climates from
  latitude, altitude, and land distribution (a lamp-and-globe model).
- **Week 28 goal:** resources — uneven distribution of mineral, energy, and
  groundwater resources as the result of past and current geoscience
  processes; maps as evidence.
- **Week 29 goal:** human impacts — population growth and per-capita
  consumption arguments from evidence; designing a method to monitor or
  minimize one local impact (MS-ESS3-3 design thread feeds the U08
  capstone); the evidence for rising global temperatures (graphs and maps;
  human activities' major role presented with its evidence).
- **Week 30:** review week — evidence-evaluation task (which data support
  which claim); formative check.

### Unit 08 — Natural hazards, engineering, and Earth-data capstone (Weeks 31–34)

- **Standards:** MS-ESS3-2; MS-ETS1-1, MS-ETS1-2, MS-ETS1-3, MS-ETS1-4.
- **Week 31 goal:** hazards as data — earthquake, volcano, flood, and
  severe-weather records; patterns in where hazards strike; forecasting as
  probability, not prediction.
- **Week 32 goal:** mitigation technologies — how data inform building
  codes, warning systems, and land-use decisions; evaluating competing
  solutions against criteria and constraints (MS-ETS1-1, MS-ETS1-2).
- **Week 33 goal:** capstone build — a natural-hazard design or
  Earth-data analysis project (e.g., a model flood barrier tested and
  iterated; a local-hazard risk map from public data), with testing,
  iteration, and a criteria-scored presentation (MS-ETS1-3, MS-ETS1-4).
- **Week 34:** review week — capstone showcase; cumulative problem solving
  across all units; formative check.

### Weeks 35–36 — Final review (flexible)

- **Goal:** full-track retrieval across all 20 objectives; cumulative
  assessment preparation; the R00 package (diagnostic, midyear/final
  review, cumulative assessments and keys) is built as its own later
  section.
- Sessions: mixed-topic problem sets, model-defense discussions
  ("what does your model show, and what does it leave out?"), learner
  portfolio review of the year's investigations.

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each
unit opens with a retrieval warm-up from prior units (U02 opens with
model-vs-reality checks from U01; U03 reprises U01's graphing for the
planet dataset; U04 reprises U01's measurement for mineral tests; U05
reprises U04's rock evidence and U01's map reading; U06 reprises the
starter lesson's water-cycle model with its documented limits; U07 reprises
U06's water/atmosphere systems for circulation; U08 reprises U01's design
cycle and U07's data evaluation in the capstone). Midyear (Week 18) and
final (Weeks 35–36) weeks are full-track reviews. Formative checks are
short written tasks (12–14 items) the adult reviews the same day; each
unit's teacher guide specifies what "ready to move on" looks like.
Modeling work is evidence-based — no speed or memorization tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/astronomy_fundamentals.md` — in-band adult/learner reference:
  the Sun, planet summaries, star life cycle, galaxies for U02/U03 — with
  the Mercury-atmosphere correction; excerpted and explained at grade
  level, never assigned whole.
- `resources/solar_system_planets.csv` — real, rounded public data for U03
  scale analysis; columns and units named in every task; moon-count column
  always labeled sample/dated and verified before assessment use.
- `resources/physics_fundamentals.md` — gravity passages for U03's
  explanatory (non-mathematical) model; adult excerpts.
- `resources/thermodynamics_laws.md` — U04 only: the energy-flow passages
  supporting MS-ESS2-1; the full guide sits above band.
- `resources/biology_fundamentals.md` — U04/U07 only: sun-energy and
  matter-cycling bridges from grade-5 objectives; excerpted at grade level.
- `resources/chemistry_fundamentals.md`, `resources/periodic_table_elements.csv`
  — enrichment only for U04 mineral extensions; element fact columns are
  sample text, never assessment data.
- The starter lesson feeds the U06 build per the keep decision in §1; its
  model-vs-reality discipline ("what does the model leave out?") and sample
  data labeling become track-wide routines from U01 onward — created once,
  reused everywhere; do not duplicate per unit.
- Shared manipulative patterns (lamp-and-globe rigs, scale strips, rock and
  mineral test kits, weather station, data-table templates) will be created
  once in Units 01–04 and reused; do not duplicate per unit.

## 8. Safe materials

Household or dollar-store materials: clear lidded plastic containers,
colored pencils and paper, hand lenses, meter sticks, graduated cylinders,
kitchen scale, thermometers (alcohol, not mercury), barometer and rain
gauge (homemade or inexpensive), compass, flashlight, globe, foam balls,
string and tape for scale models, rock and mineral sample sets (or
adult-collected local rocks), unglazed porcelain tile for streak tests,
copper penny and iron nail for hardness tests (adult handles the nail),
stopwatches, weather-station printouts. Warm tap water only for the
water-cycle container — never hot water, never seal glass with heated
liquid; adult handles all water work and prevents spills. No sharp tools
beyond adult-handled; eye protection for rock handling; outdoor
observation alternatives (window weather logs, video eclipse footage) for
all sky and field tasks. Simulations (e.g., a plate-boundary animation)
are acceptable evidence supplements, never replacements for the learner's
own observations.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult
  scribes written work when writing stamina lags (grade 6 expects growing
  written reasoning — extensions require full written explanations).
- High-contrast, large-print data tables and graph templates; textured
  model parts and tactile rock samples for low-vision learners; color is
  never the only cue (mineral identification uses texture, hardness, and
  streak alongside color).
- Sessions about 45 min with movement breaks; every lesson includes a
  seated-table and a floor-play variant; sky observations have
  window/video alternatives.
- Language support: vocabulary taught with objects and models first, word
  second; visual word walls; home-language labels welcomed alongside
  English terms.
- Every drawn diagram and model ships with a text-only alternative; every
  investigation states its adult-supervised steps in plain language.
- Assessment is evidence-based and untimed — no memorization speed tests.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #31.
- The starter lesson's answer checks sit beside the student tasks; the U06
  build separates them into the teacher guide, keeping the sample-data
  labeling in every reuse.
- There is no legacy assignment/quiz library for grade-6 science, so every
  unit builds its practice, investigations, and assessments new.
- The `solar_system_planets.csv` moon-count column is dated; U03 must
  verify or label values as sample before assessment use (flagged in §1).
- Generated raster teaching images (one per unit, used in an activity with
  alt text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Measurement, graphing, models, and investigation design; U02
Earth–Sun–Moon systems and seasons; U03 Solar system, gravity, and scale;
U04 Earth materials, rocks, minerals, and cycles; U05 Plate tectonics,
Earth history, and geologic evidence; U06 Water, atmosphere, and weather
systems; U07 Climate, resources, and human impacts; U08 Natural hazards,
engineering, and Earth-data capstone; R00 diagnostic, midyear/final review,
and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #31 body, comments, and label state re-read 2026-10-05 before
  claiming; no competing claim (0 comments prior to the claim comment);
  `curriculum-in-progress` label added with a timestamped claim comment
  (2026-10-05T07:56:53Z).
- `curriculum/grade-6/science/` re-inventoried on `main` @ `2c43d24`: 2
  Markdown files confirmed (1 subject README, 1 starter lesson); the
  issue's 2026-10-01 "0 files" baseline excluded the README and starter
  lesson. `stem/` holds 0 Markdown files anywhere in the repository.
- Starter-lesson computations re-solved independently this run: droplet
  counts 3 → 11 → 18 give increases of 8 then 7, 15 overall — correct; the
  "water disappeared" error diagnosis (conservation through state change in
  a closed system) is correct; warm-water-only safety guidance is sound.
- Standards codes and descriptions verified 2026-10-05 against the official
  NGSS framework (`nextgenscience.org/dci-arrangement/ms-ess1-earths-place-universe`
  for MS-ESS1-1..4) and the California Department of Education's official
  NGSS reproduction (`www2.cde.ca.gov/cacs` for MS-ESS2-1..6, MS-ESS3-1..5,
  MS-ETS1-1..4); the crosswalk claims no state adoption or accreditation.
- Resource-fact checks: `solar_system_planets.csv` moon-count column is
  dated (new moons confirmed regularly) — flagged for verify-or-label in
  U03; `astronomy_fundamentals.md` "Mercury: no atmosphere" is an
  over-simplification (extremely thin exosphere) — flagged for correction
  during U02/U03 excerpting.
- New Markdown links checked: only relative links to existing files and the
  issue link; planned units are described in prose with no links to missing
  files.
- `python3 scripts/validate-library.py` will run at delivery time against
  the new files.
