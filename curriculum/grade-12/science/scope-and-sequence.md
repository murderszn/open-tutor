# Grade 12 Science — Scope and Sequence

Audit section A00 of [issue #55](https://github.com/murderszn/open-tutor/issues/55).
Status: **validated draft** (this document, the track README, and the grade-12
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-08 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| `curriculum/grade-12/science/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-12/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy lessons, labs, assessments, keys, or diagnostics exist to keep, revise, or retire |
| Grade-12 hub page | `curriculum/grade-12/README.md` | **New** — created by this run: science track listed as audited draft; mathematics and language arts audits noted as delivered in unmerged draft PRs #122 and #123; social studies planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-12/science/README.md` | **New** — written by this run as a real subject index with course description, 12 measurable objectives, safety summary, and adult guidance |
| Scope and sequence | `curriculum/grade-12/science/scope-and-sequence.md` | **New** — this document |
| Grade-11 science track (Physics; audit in open draft PR #118, unmerged) | PR branch | **Prerequisite reference only** — its end-of-year objectives (measurement with uncertainty, vector and energy reasoning, modeling from data, investigation practices) define the entry skills below; no grade-11 lessons copied upward; no learner-facing cross-grade links |
| Grade-10 science track (Chemistry; audit in open draft PR #115, unmerged) | PR branch | **Entry-level reference only** — atomic structure, bonding, and concentration vocabulary feeding U06 water tests; investigation habits |
| Grade-9 science track (Biology; audit in open draft PR #107, unmerged) | PR branch | **Entry-level reference only** — ecosystem and carbon-cycle vocabulary feeding U04/U05; no grade-9 lessons copied upward |
| Grade-12 math track (#54, Precalculus/statistics; audit in open draft PR #122, unmerged) | PR branch | **Prerequisite reference only** — algebraic modeling, spreadsheet use, and graph interpretation are the entry math skills below |
| `resources/astronomy_fundamentals.md` | astronomy reference | **Reuse** — background vocabulary and quick data (stellar life cycle, element production, solar energy) feeding U08's Earth–space strand; the building run verifies the specific sections it cites |
| `resources/solar_system_planets.csv` | 8 planets; columns: planet_order_from_sun, name, distance_from_sun_million_km, orbital_period_days, equatorial_diameter_km, surface_gravity_m_s2, known_moons, fact, google_maps_url | **Reuse** — U08 compares Earth to its neighbors (size, distance, atmosphere) when discussing why Earth systems support life; values are real reference data. Every dataset task names columns and units and states that values are real reference data except where practice rounding is explicit |
| `resources/biology_fundamentals.md` | self-described general biology guide | **Bridge reference only** — ecosystem and photosynthesis/respiration vocabulary for U05 warm-ups; ecosystem-services and conservation design are new grade-12 content |
| `resources/chemistry_fundamentals.md` | self-described general chemistry guide | **Bridge reference only** — concentration and pH vocabulary for U06 water tests; quantitative water-chemistry interpretation is new grade-12 content |
| `resources/thermodynamics_laws.md` | self-described grades 4–8 guide | **Bridge reference only** — everyday-language framing of energy flow for U04 warm-ups; climate feedbacks and model interpretation are new grade-12 quantitative content |
| `resources/semester-resource-library.md` | discovery shelf | **Discovery only** — its simulation links are a starting point; named candidates below (PhET "Greenhouse Effect", "Plate Tectonics", "Radioactive Dating Game", "Glaciers") must be opened and checked for fit by the building run |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| `stem/` | 0 Markdown files at `main` | **No reuse** — nothing to preserve; existing `stem/` links elsewhere stay untouched |
| `assignments/` catalog, grade 4/5/7/8 quiz libraries | legacy material | **Not reused** — no grade-12 Earth/space science content found; the building runs will re-check before each unit rather than assume |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no labs, no assessments, no keys, no diagnostics, no resource packs,
and no teaching images exist anywhere in `curriculum/grade-12/science/`.

## 2. Prerequisites

Learners typically enter grade-12 science with the grade-11 track's stated
end-of-year objectives (Physics pathway, currently in unmerged draft PR #118),
the grade-10 track's chemistry objectives (draft PR #115), the grade-9 track's
biology objectives (draft PR #107), the grade-6 track's Earth/space science
objectives (draft PR #98), and grade-12 math in progress (draft
PR #122):

- **From grade-11 science:** measuring with correct instruments and reporting
  uncertainty; building and testing quantitative models from data; reading and
  interpreting graphs; planning investigations with testable questions,
  variables, data tables with units, and error discussion; lab-safety habits.
- **From grade-10 science:** atomic structure and bonding vocabulary;
  concentration basics; safe handling of simple test kits.
- **From grade-9 science:** ecosystem vocabulary; photosynthesis and cellular
  respiration as carbon-cycle processes.
- **From grade-6 science:** plate-tectonic evidence and boundary types; rock
  types and the rock cycle; water distribution and the water cycle; weather
  versus climate; natural hazards and human responses — all at the conceptual
  level. Grade 12 makes each of these quantitative (radiometric dating,
  seafloor-spreading rates, convection models, flux estimates, climate
  feedbacks) and re-teaches none of the concepts from scratch.
- **From grade-12 math:** algebraic modeling; evaluating and rearranging
  formulas; spreadsheet calculations; interpreting slopes, rates, and
  exponential change at a conceptual level.

The Weeks 1–2 diagnostic checks measurement and uncertainty, graph
interpretation, proportional reasoning, scientific notation, concentration
vocabulary, and spreadsheet basics. Learners missing the modeling prerequisite
get targeted warm-ups in U01 before quantitative models begin; learners missing
the science prerequisites get the middle-school bridge references above, never
as a substitute for the grade-12 lessons.

## 3. Track objectives

The twelve measurable, adult-assessed objectives are stated in the
[track README](README.md) (§ "Track objectives") and are not repeated here.
Each unit below names the objectives it serves; the R00 review will assess
all twelve.

## 4. Standards crosswalk

Reference framework: the Next Generation Science Standards (NGSS), high
school (9–12) band. Codes and descriptions were verified on 2026-10-08 against
the California Department of Education's NGSS high-school Earth and Space
Science DCI document, the Smithsonian Learning Lab HS-ESS1 standards page, the
Wonder of Science HS conceptual progressions model, and the MSU Carbon TIME
project's published NGSS performance-expectation list (all restating the
Achieve performance expectations). Descriptions below are short paraphrases
for mapping purposes, not reproductions of the standards text.
**This crosswalk is a planning reference, not a claim of state adoption,
accreditation, or certification of alignment.** Schools vary in their
high-school science order; Earth and Space Science in grade 12 is this track's
proposed pathway (following Biology in grade 9, Chemistry in grade 10, and
Physics in grade 11).

| NGSS performance expectation (verified 2026-10-08) | Track units |
|---|---|
| HS-ESS1-1 — develop an evidence-based model of the Sun's life span and how nuclear fusion in its core releases energy that reaches Earth as radiation | U04 (energy flow), U08 |
| HS-ESS1-2 — explain the Big Bang theory from astronomical evidence (light spectra, distant-galaxy motion, matter composition) | U08 |
| HS-ESS1-3 — communicate how stars produce elements over their life cycles | U08 |
| HS-ESS1-5 — evaluate plate-tectonics evidence to explain the ages of crustal rocks | U01, U02 |
| HS-ESS1-6 — construct an account of Earth's formation and early history from ancient materials, meteorites, and planetary surfaces | U01 |
| HS-ESS2-1 — model how Earth's internal and surface processes form continental and ocean-floor features across scales | U02 |
| HS-ESS2-2 — analyze geoscience data to claim that a surface change can create feedbacks in other Earth systems | U04, U06 |
| HS-ESS2-3 — model, from interior evidence, how thermal convection cycles matter | U01, U02 |
| HS-ESS2-4 — model how variations in energy flow into and out of Earth's systems change climate | U03, U04 |
| HS-ESS2-5 — plan and conduct an investigation of water's properties and effects on Earth materials and surface processes | U06 |
| HS-ESS2-6 — develop a quantitative model of carbon cycling among the hydrosphere, atmosphere, geosphere, and biosphere | U04 |
| HS-ESS2-7 — argue from evidence about the coevolution of Earth's systems and life | U05 |
| HS-ESS3-1 — explain from evidence how natural-resource availability, natural hazards, and climate changes have influenced human activity | U02, U06, U07 |
| HS-ESS3-2 — evaluate competing design solutions for developing, managing, and using energy and mineral resources by cost–benefit ratios | U07 |
| HS-ESS3-3 — create a computational simulation relating resource management, population sustainability, and biodiversity | U05, U07 (building-run option) |
| HS-ESS3-4 — evaluate or refine a technological solution that reduces human impacts on natural systems | U06, U07 |
| HS-ESS3-5 — analyze geoscience data and global climate model results to forecast the current rate of climate change and its impacts | U04 |
| HS-ESS3-6 — use a computational representation to show how human activity modifies relationships among Earth systems | U08 |
| HS-LS2-5 — model the role of photosynthesis and cellular respiration in carbon cycling among reservoirs | U04, U05 (bridge from grade-9 biology) |
| HS-LS2-7 — design, evaluate, and refine a solution for reducing human impacts on the environment and biodiversity | U05 |

HS-ESS1-4 (predicting orbital motion) is prior-track coverage: it was a
grade-11 physics objective (draft PR #118) and is reused, not retaught, here.
HS-ESS2 and HS-ESS3 performance expectations not mapped above are outside this
track's environmental-science emphasis; nothing here claims to cover the full
NGSS band. Crosscutting concepts of cause and effect (U02, U04, U06), systems
and system models (U03, U04, U08), energy and matter (U04, U07, U08), stability
and change (U01, U04, U06), and scale, proportion, and quantity (U01, U04, U07)
are named explicitly in unit objectives.

## 5. 36-week sequence

Five 50-minute sessions per week. A typical unit week mixes two concept
lessons with worked examples, one data-analysis or investigation session, one
reading or practice session, and one review or check session; the 20 sessions
of each four-week unit therefore hold 4–6 written lessons plus investigations,
reading, practice, and review — never six lessons alone. Weeks 1–2 are
diagnostic and routines; Weeks 35–36 are final review. Each unit's fourth week
ends with a formative check and a flex session for catch-up or extension.

### Weeks 1–2 — Diagnostic and routines (flexible)

- Math-skills diagnostic: measurement and uncertainty, graph interpretation,
  proportional reasoning, scientific notation, concentration vocabulary,
  spreadsheet basics. Notebook setup, field-safety contract, data-source
  literacy (real reference data vs. rounded vs. fictional practice data), and
  the simulation-vs-field decision rule for the year. Adult and learner agree
  on pacing and session routines.

### Unit 01 — Earth-system evidence, geologic time, and quantitative models (Weeks 3–6)

Objectives 1, 2, 3, 12.

- **Week 3 — Deep time and relative dating.** Stratigraphic principles
  (superposition, cross-cutting, original horizontality); index fossils;
  building a relative sequence from a geologic column; the 4.6-billion-year
  scale and why it is hard to picture (HS-ESS1-6 strand).
- **Week 4 — Radiometric dating.** Parent–daughter decay and half-life;
  worked age calculations with exponential decay; assumptions (closed system,
  known initial ratio) and where they break; dating the oldest Earth and
  meteorite materials (HS-ESS1-6).
- **Week 5 — Plate tectonics from crustal ages.** Seafloor rock ages
  increasing away from mid-ocean ridges; magnetic striping as a tape recorder;
  earthquake and volcano belts at plate boundaries; evaluating how the evidence
  supports moving plates and explains crustal-rock ages (HS-ESS1-5).
- **Week 6 — Convection and the whole system.** Thermal convection cycling
  matter in the mantle (HS-ESS2-3); linking interior motion to plate motion;
  first simple quantitative model of the year (a spreadsheet rate or flux
  estimate); formative check; flex session.

### Unit 02 — Plate tectonics, resources, and landscape processes (Weeks 7–10)

Objectives 2, 3, 10, 12.

- **Week 7 — Boundaries and landforms.** Convergent, divergent, and transform
  boundaries; which boundary builds which features; how internal and surface
  processes at different spatial and temporal scales form continental and
  ocean-floor features (HS-ESS2-1).
- **Week 8 — Reading the landscape.** Weathering, erosion, and deposition
  rates; stream-table or sandbox modeling (adult-supervised, simulation as
  alternative); interpreting topographic maps and local relief.
- **Week 9 — Resources and hazards.** How past and current geoscience
  processes distribute mineral, energy, and groundwater resources; why people
  settle near hazards; constructing evidence-based explanations for how
  resource availability, natural hazards, and climate shifts have influenced
  human activity (HS-ESS3-1).
- **Week 10 — Landscape investigation and check.** Investigation: measure a
  local slope, soil, or stream feature and connect it to a process model;
  formative check; flex session.

### Unit 03 — Atmosphere, ocean circulation, and weather (Weeks 11–14)

Objectives 4, 12.

- **Week 11 — Unequal heating and the atmosphere.** Solar angle and albedo;
  pressure, wind, and the Coriolis effect from Earth's rotation; building a
  circulation model from first principles (HS-ESS2-4 strand).
- **Week 12 — Ocean circulation.** Surface currents and gyres; thermohaline
  circulation at a qualitative level; why water's high heat capacity matters
  for climate; reading real SST or current maps from a public source.
- **Week 13 — Weather systems.** Air masses, fronts, and mid-latitude
  cyclones; reading weather maps; how circulation patterns produce regional
  climates.
- **Week 14 — Weather-data investigation and check.** Investigation: collect
  two weeks of local weather data and test a circulation-based prediction;
  formative check; flex session.

### Unit 04 — Climate evidence, feedbacks, and uncertainty (Weeks 15–18)

Objectives 4, 5, 6, 7, 12.

- **Week 15 — The greenhouse effect and energy budgets.** Incoming solar vs.
  outgoing infrared; a quantitative energy-budget model; which gases absorb
  where and why (HS-ESS2-4).
- **Week 16 — Feedbacks.** Ice–albedo, water vapor, and carbon-cycle
  feedbacks; analyzing geoscience data to claim that one surface change
  creates feedbacks in other Earth systems (HS-ESS2-2); reinforcing vs.
  balancing feedbacks.
- **Week 17 — Carbon cycling, quantified.** A quantitative carbon-cycle model:
  reservoirs, fluxes, and residence-time calculations; photosynthesis and
  respiration as biological fluxes (HS-LS2-5 bridge); evaluating sink/source
  claims against the model (HS-ESS2-6).
- **Week 18 — Midyear checkpoint.** Analyzing geoscience data and published
  climate-model results to forecast the current rate of climate change and its
  impacts (HS-ESS3-5); stating what is established, what is uncertain, and
  what one model run cannot decide; cumulative review of U01–U04; adult and
  learner reset pacing; flex session.

### Unit 05 — Biodiversity, ecosystem services, and conservation (Weeks 19–22)

Objectives 9, 12.

- **Week 19 — What biodiversity measures.** Species, genetic, and ecosystem
  diversity; reading biodiversity datasets; the argument from evidence about
  the coevolution of Earth's systems and life (HS-ESS2-7).
- **Week 20 — Ecosystem services.** Provisioning, regulating, cultural, and
  supporting services; valuing a local or regional ecosystem's services;
  who depends on them and who decides.
- **Week 21 — Threats and tradeoffs.** Habitat loss, invasive species,
  overexploitation, pollution, climate shifts; conservation strategies
  compared by evidence and cost.
- **Week 22 — Conservation design and check.** Design, evaluate, and refine
  a solution that reduces human impacts on the environment and biodiversity
  (HS-LS2-7); the adult reviews feasibility and safety of any field component;
  formative check; flex session.

### Unit 06 — Water, soil, land use, and pollution (Weeks 23–26)

Objectives 8, 10, 12.

- **Week 23 — The water cycle and watersheds.** Reservoirs and fluxes;
  watershed delineation from maps; where local drinking water comes from.
- **Week 24 — Water investigations.** Planning and conducting an investigation
  of water's properties and their effects on Earth materials and surface
  processes — for example infiltration rates through different soils, or
  stream velocity and sediment transport (HS-ESS2-5); adult approves all
  procedures; no sampled water is drunk.
- **Week 25 — Soil and land use.** Soil horizons and what they record; land-use
  change and its feedbacks on other Earth systems (HS-ESS2-2); point vs.
  nonpoint pollution; reading a local land-use or water-quality dataset.
- **Week 26 — Stewardship solutions and check.** Evaluating or refining a
  technological or management solution that reduces human impacts on a local
  water or soil system (HS-ESS3-4); connecting water and land decisions to how
  they have influenced, and been influenced by, human activity (HS-ESS3-1);
  formative check; flex session.

### Unit 07 — Energy systems, sustainability, and risk tradeoffs (Weeks 27–30)

Objectives 10, 11, 12.

- **Week 27 — Energy resources.** Solar, wind, hydro, nuclear, and fossil
  fuels: resource requirements, energy density, and emissions; reading real
  generation-mix data.
- **Week 28 — Cost–benefit evaluation.** Evaluating competing design solutions
  for developing, managing, and using energy and mineral resources with
  explicit cost–benefit criteria (HS-ESS3-2); land use, reliability, waste,
  and lifecycle tradeoffs.
- **Week 29 — Storage, grids, and transitions.** Why storage and transmission
  shape every transition plan; a spreadsheet scenario model comparing two
  mixes under stated constraints; uncertainty in the assumptions named, not
  hidden.
- **Week 30 — Energy-solution review and check.** Evaluating or refining a
  technological solution that reduces human impacts on natural systems
  (HS-ESS3-4); presenting the tradeoff analysis with its uncertainties;
  formative check; flex session.

### Unit 08 — Environmental investigation and Earth–space science capstone (Weeks 31–34)

Objectives 1, 4, 12.

- **Week 31 — The Sun's energy and Earth's systems.** Developing an
  evidence-based model of the Sun's life span and how fusion energy reaches
  Earth as radiation (HS-ESS1-1); connecting solar input to the U03/U04
  climate machinery; what solar variability can and cannot explain.
- **Week 32 — Stars, elements, and the early universe.** Communicating how
  stars produce elements over their life cycles (HS-ESS1-3); the Big Bang
  evidence — galactic redshifts, the cosmic microwave background, and the
  hydrogen–helium composition match (HS-ESS1-2); Earth's place in the story
  from U01.
- **Week 33 — Capstone investigation.** The learner plans and carries out a
  supervised local environmental investigation (water, soil, weather, energy
  use, or biodiversity) with a testable question, variables, data tables with
  units, graphs, error discussion, and an explicit link to at least one
  Earth–space mechanism; a computational representation shows how human
  activity modifies the relationships among the systems studied (HS-ESS3-6);
  the adult approves every procedure before it begins.
- **Week 34 — Capstone presentations and check.** Communicating evidence-based
  conclusions; peer-style critique of another learner's-free design (adult
  moderates; no real learner records shared); formative check; flex session.

### Weeks 35–36 — Final review (flexible)

- Cumulative data-analysis sets across all eight units; investigation
  portfolio review; re-check of any objectives still insecure. The R00 review
  package (diagnostic, midyear/final review, cumulative assessment and keys)
  is a separate checklist section and is planned, not delivered here.

## 6. Safety rules for this track

The adult reads every procedure before the learner begins and keeps veto
power over all field and bench work. Rules:

1. **Outdoor field work:** the adult knows the location, route, and return
   time; weather is checked first and work is cancelled for lightning, high
   winds, flooding, or extreme heat; sturdy footwear; insect repellent and
   tick checks where relevant; sun protection and water carried.
2. **Water sampling and testing:** gloves for collection; nothing collected
   outdoors is drunk, tasted, or used on skin; simple colorimetric test kits
   are used exactly per their instructions with adult supervision; wash hands
   after handling samples.
3. **Soil handling:** gloves; no tasting; wash hands and tools after; unknown
   or possibly contaminated sites are observed only, never sampled.
4. **Weather instruments:** observations only in safe conditions — no
   measurements during storms, on wet roofs, near power lines, or in flooded
   areas. Storm chasing of any kind is out of scope.
5. **Sun and heat:** limit midday exposure; the adult watches for heat illness;
   field sessions are rescheduled, not endured, in dangerous heat.
6. **No hazardous materials:** this track uses no hazardous chemicals, open
   flames, mains electricity, or high-voltage equipment. Household test kits
   only, exactly as labeled.
7. **Simulation alternative:** any procedure whose materials, weather, or
   supervision are inadequate is replaced by a PhET or equivalent simulation,
   a public dataset analysis, or a structured observation with the same
   data-analysis demand — never skipped silently.
8. **Emergency plan:** the adult states the household's first-aid and
   severe-weather plan before Week 3; the learner can recite how to get help.

## 7. Accessibility supports

Every unit's building run must provide, not merely promise:

- **Text alternatives:** alt text and a text-only data table or description
  for every image, map, diagram, and simulation screenshot used in an activity.
- **Simulation access:** the adult verifies keyboard operability and
  screen-reader labels of each simulation before assignment; where a sim is
  inaccessible, a worked data set with the same analysis stands in.
- **Reading:** key terms defined in place; large-print problem sets on
  request; captions required on all videos.
- **Doing:** extended time on investigations and assessments; seated or
  drive-by field options when mobility is limited; tactile alternatives
  (raised-line maps, textured soil models); color-blind-safe palettes for all
  graphs and maps the track provides.
- **Responding:** oral explanation accepted wherever a written explanation is
  not the assessed skill; adult scribing allowed for the investigation
  portfolio with the learner dictating the reasoning.

## 8. Internal resource reuse, new reference needs, and paths for units

- **Reuse at build time:** `resources/astronomy_fundamentals.md` (U08 space
  strand), `resources/solar_system_planets.csv` (U08 Earth-comparison data),
  `resources/biology_fundamentals.md` (U05 warm-ups),
  `resources/chemistry_fundamentals.md` (U06 warm-ups),
  `resources/thermodynamics_laws.md` (U04 warm-ups),
  `resources/semester-resource-library.md` (simulation discovery), and the
  `teachers/ai-assistants/resource_finder.md` Resource Pack format (every
  unit).
- **New reference needs (filled by building runs, not this audit):** verified
  public datasets with check dates and column/unit documentation — USGS
  earthquake and volcano data, NOAA climate and weather data, and a local
  watershed or water-quality dataset; a sourced constants table (Earth's age,
  solar luminosity, atmospheric composition) checked against an authoritative
  reference; verified per-simulation check records (name, URL, date checked,
  fit notes).
- **No generated images yet:** each unit's building run generates its own
  required educational raster image with alt text, caption, and a
  generation/source record; deterministic SVG/HTML is preferred for geologic
  time scales, maps, graphs, and energy-budget diagrams so no generated image
  can introduce false measurements, labels, or geographic boundaries.
- **Paths for future units:** each unit follows
  `docs/curriculum-expansion/unit-requirements.md` (4–6 written lessons,
  investigation with rubric, formative quiz, culminating assessment,
  separate teacher guide and answer key, verified Resource Pack). Units are
  built in prerequisite order U01 → U08; the R00 review package closes the
  track. Planned units are named in prose here and in the track README;
  no links to unbuilt unit files are created.
