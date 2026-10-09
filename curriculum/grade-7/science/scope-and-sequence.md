# Grade 7 Science — Scope and Sequence

Draft audit for issue #35 (delivered 2026-10-05; branch
`curriculum/issue-35-grade-7-science`). Existing files were re-audited against
`main` at commit 2c43d244; NGSS codes and descriptions were verified against
the official NGSS "Read the Standards" page (nextgenscience.org) and the NGSS
middle-school life-science performance-expectation list on 2026-10-05. This is
a proposed pathway, not a claim of state adoption, accreditation, or complete
alignment.

## 1. Audit: existing-file inventory

`curriculum/grade-7/science/` does **not exist yet** (0 Markdown files; matches
issue #35's 2026-10-01 baseline). The audited legacy material lives in
`curriculum/grade-7/stem/`: **43 Markdown files** (matches the issue
baseline) — the subject README, 19 assignment files (including the three
physical-science-roadmap files), and 23 quiz files (weeks 1–12, most with a
parallel "set-02" form; week 7 has a single form). Every assignment file was
read this run; quiz files were inventoried from the stem README and
spot-read (weeks 1, 2, 7, 8, 9). Nothing here constitutes lessons, teacher
guides, answer keys, or a scope-and-sequence — those are the unit builds' job.
No quiz carries an answer key; "revise" below includes building full keys.

### Decisions

**Keep (as-is, referenced by future units)**

- `assignments/physical-science-roadmap/lab-report-template.md` — blank,
  reusable lab-report organizer (question, variables, procedure, data table,
  graph, conclusion). Sound scaffold; U01 and U08 embed it unchanged.
- `assignments/physical-science-roadmap/README.md` and `lab-menu.md` —
  keep as **optional enrichment** in `stem/`: the roadmap is labeled a
  "Grade 9 Track (Accelerated)" extension, too advanced to be core for
  grade 7, but its lab menu offers safe comparative tests an adult can
  adapt. Not linked from core units except the lab-report template.

**Revise (adapt into `science/` units with keys, rubrics, and instruction)**

- `assignments/animal-cells.md` — labeled-diagram task (membrane, nucleus,
  cytoplasm, mitochondria, ribosomes, ER, Golgi, lysosomes) plus an
  animal-vs-plant comparison paragraph. Concept is sound; the shared-guide
  anchors (`resources/biology_fundamentals.md#animal-cells`) resolve and the
  repo link checker passes. U01/U02 keep the task set, add a microscopy or
  micrograph-observation front end, a full answer key, and a rubric for the
  comparison paragraph.
- `assignments/plant-cells.md` — same pattern for plant cells (cell wall,
  chloroplasts, vacuole added). Keep → U02; add keys and an explicit
  energy-pathway comparison (chloroplasts/photosynthesis vs.
  mitochondria/respiration).
- `assignments/photosynthesis.md` — balanced equation
  (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, correctly balanced) plus a 5–7 sentence
  explanation of chlorophyll, chloroplasts, and the link to cellular
  respiration. Keep → U03; add the respiration equation, matter/energy
  tracing tasks, keys, and replace the "educator-provided equivalent
  reference" for the equation-builder interactive with an explicit
  paper-based modeling task so the assignment stands alone.
- `assignments/ecosystems-energy-flow.md` — five-organism food chain expanded
  to a food web (8+ arrows), keystone-species removal explanation, one
  human-impact example and one solution. Sound core; U03/U06 keep it, add a
  rubric, keys for the removal explanation, and optional-enrichment
  treatment of the "10% rule" of energy transfer.
- `assignments/reproduction.md` — mitosis-vs-meiosis comparison (purpose,
  divisions, chromosome number, identical vs. varied cells) plus one real
  example each of asexual and sexual reproduction and a benefit of genetic
  variation. Sound; U04 keeps the comparison, adds keys, and builds the
  missing variation-modeling activity around it.
- `assignments/cooking-and-nutrition.md` — pantry food-label lab (serving
  size, calories, macros, sodium, fiber, added sugars) plus a video response.
  **Defect:** the header cites a shared spec
  (`assignments/cooking-and-nutrition/README.md`) that does not exist in the
  assignments catalog. U07 revises it into a digestive-system/nutrition
  investigation with explicit directions instead of the dead spec link, and
  verifies the two named videos (TED-Ed digestive system; Khan Academy
  macronutrients) before recommending them.
- `assignments/micronutrients.md` — "Vitamin & Mineral Detective": fictional
  menu analysis (scurvy-risk question is good), deficiency table, menu fix.
  Same dead-spec defect as above. Keep → U07 with keys, explicit directions,
  and verified references.
- `quizzes/week-07-quiz.md` — "Biology & Anatomy": organelle functions,
  cells→tissues→organs→systems ordering, circulatory/respiratory
  cooperation, homeostasis, heredity unit question. The six new items are
  grade-appropriate; U02/U07 recycle them into keyed formative banks. (The
  four review items are physical-science; they stay with the enrichment
  banks.)
- `quizzes/week-08-quiz.md` — "Lab Skills": variables and controls,
  experimental error, data tables, precision vs. accuracy, line of best fit,
  lab-report conclusions. Sound investigation-literacy set; U01/U08 keep it
  with keys and a worked exemplar.
- `quizzes/week-01-quiz.md` and `week-01-quiz-set-02.md` — measurement and
  units (SI units, conversions, significant figures, dimensional analysis,
  accuracy vs. precision). Parallel forms that differ in items, not
  byte-identical copies. U01 consolidates them into one keyed bank for the
  evidence/measurement thread.

**Optional enrichment (kept in `stem/`, not core to this life-science track)**

- `assignments/earth-systems-data-story.md` — weather/climate data story
  (7-day data, graph, pattern + anomaly, systems connection). Method is
  reusable; Earth-systems content sits outside the eight life-science units,
  so it stays enrichment, available for U06/U08 data-literacy extensions.
- `assignments/water-cycle.md` — extended water-cycle diagram task with
  regional paragraph and human-impact example; shared-guide anchor resolves.
  Earth-science content; keep as enrichment, referenced by U06 for the
  water context ecosystems need.
- `assignments/solar-system-tour.md` — comparative planet field guide with
  scale calculation and cited mission recommendation. Sound; Earth/space
  enrichment.
- `assignments/thermodynamics-cooling-lab.md` — safe warm-water cooling test
  (2-minute readings, 12+ minutes), system/surroundings identification,
  single-variable comparison, laws-of-thermodynamics conclusion. **Defect:**
  the "Shared spec" line is a dangling placeholder ("Shared
  reference(use the selected grade's private workspace)"); the safety
  section is present but the spec reference must be replaced with explicit
  directions if this lab is ever promoted. Keep as physical-science
  enrichment.
- `assignments/forces-and-motion-design.md` — ramp test with three trials,
  data table, claim-evidence-reasoning paragraph, and a real safety section.
  Keep as physical-science enrichment.
- `assignments/engine-systems-investigation.md` — blank reusable four-stroke
  engine task with response organizer. Keep as engineering enrichment; no
  live-engine work required.
- `assignments/custom-pc-build.md`, `intro-to-algorithms.md`,
  `roblox-lua-intro.md` — computing; keep as optional enrichment per the
  track rule that coding/engineering stays optional.
- `quizzes/week-02-quiz.md` through `week-06-quiz.md` (and their set-02
  parallels) and `week-09` through `week-12` — atomic structure, bonding,
  energy/heat, motion/forces, waves/light, and cumulative physical-science
  sets. Correct in topic for the roadmap's accelerated track; enrichment
  only for this life-science sequence. Set-02 files are parallel forms,
  not duplicates.

### Repository references

- `resources/biology_fundamentals.md` (on `main`) — student-friendly
  reference with sections on the water cycle, plant cells, animal cells,
  cell theory, photosynthesis, ecosystems/food chains, the carbon cycle,
  and reproduction; every anchor cited by the grade-7 assignments resolves
  and the repo link checker passes. Reused as a warm-up reference across
  U01–U04 and U06; unit builds verify reading level per section.
- `resources/cooking_and_nutrition.md`, `resources/micronutrients.md` —
  support U07; check dates and figures at unit build.
- `resources/weights_and_measures.md` — SI/metric contexts for U01/U08
  measurement work.
- `resources/thermodynamics_laws.md` — background only; the cooling lab
  stays enrichment.
- `assignments/science/physical-science-roadmap/` (shared catalog) — the
  grade-7 stem quizzes link to this shared roadmap and the links resolve;
  the grade-7 `stem/assignments/physical-science-roadmap/` copy is a
  grade-specific fork (contents differ). Unit builds cite the shared
  catalog path for the lab-report template unless the fork is deliberately
  chosen.

## 2. Prerequisites

Entering the track, the learner can: make careful observations and
distinguish them from inferences; measure length, mass, volume, and
temperature with metric units; read and build simple bar graphs, line
graphs, and data tables; compute with ratios and percents (the grade-7
math track's U02–U03 sequence runs in parallel and is the assumed math
background for population and trait-frequency work in U05–U06); write a
paragraph that states a claim and cites evidence. No prior microscope use
is assumed — U01 teaches it from zero, with verified-micrograph
alternatives when no microscope is available. Familiarity with the idea
that living things need water, food, and air is assumed; cell theory,
genetics, and evolution are taught, not assumed.

## 3. Track objectives

The 18 measurable, adult-assessed objectives are published in
[README.md](README.md#track-objectives-measurable-adult-assessed) and are
not repeated here. Each objective maps to one or more NGSS middle-school
life-science performance expectations in the crosswalk below.

## 4. Standards crosswalk

NGSS organizes middle school as a single grades 6–8 band (codes verified
2026-10-05 against the official NGSS "Read the Standards" page and the
NGSS middle-school life-science performance-expectation list;
descriptions below are paraphrases, not reproductions). This grade-7
track takes the life-science (MS-LS) expectations as its reference
pathway. Physical-science (MS-PS), Earth/space-science (MS-ESS), and
engineering (MS-ETS) expectations are not core here; the existing `stem/`
physical-science material remains as optional enrichment. This crosswalk
is a reference pathway, not a claim of state adoption, accreditation, or
complete alignment.

### From Molecules to Organisms: Structures and Processes (MS-LS1) — U01, U02, U03, U04, U07

- **MS-LS1-1** — conduct an investigation to provide evidence that living
  things are made of cells, whether one cell or many different numbers and
  types of cells. → U01 (microscopy/micrograph evidence, "is it living?"
  sorts).
- **MS-LS1-2** — develop and use a model to describe the function of a cell
  as a whole and how the parts of cells contribute to that function. →
  U01/U02 (cell models; organelle-function explanations; membrane-transport
  demo).
- **MS-LS1-3** — use argument supported by evidence for how the body is a
  system of interacting subsystems composed of groups of cells. → U07
  (digestive/circulatory/respiratory cooperation; homeostasis).
- **MS-LS1-4** — use argument based on empirical evidence and scientific
  reasoning to explain how characteristic animal behaviors and specialized
  plant structures affect the probability of successful reproduction. →
  U04 (pollination/seed-dispersal structures; behavioral examples).
- **MS-LS1-5** — construct a scientific explanation based on evidence for
  how environmental and genetic factors influence the growth of organisms.
  → U04 (growth-factor investigation) and U08 (germination experiment).
- **MS-LS1-6** — construct a scientific explanation based on evidence for
  the role of photosynthesis in the cycling of matter and flow of energy
  into and out of organisms. → U03 (equation, chlorophyll/chloroplast
  role, matter/energy tracing).
- **MS-LS1-7** — develop a model to describe how food is rearranged through
  chemical reactions into new molecules that support growth and/or release
  energy as matter moves through an organism. → U03 (food → new molecules;
  growth and energy release).
- **MS-LS1-8** — gather and synthesize information showing that sensory
  receptors respond to stimuli by sending messages to the brain for
  immediate behavior or storage as memories. → U07 (nervous-system
  overview).

### Ecosystems: Interactions, Energy, and Dynamics (MS-LS2) — U03, U06, U08

- **MS-LS2-1** — analyze and interpret data to provide evidence for the
  effects of resource availability on organisms and populations in an
  ecosystem. → U06 (resource/population data tasks).
- **MS-LS2-2** — construct an explanation that predicts patterns of
  interactions among organisms across multiple ecosystems. → U06
  (comparing interaction patterns: predation, competition, symbiosis).
- **MS-LS2-3** — develop a model to describe the cycling of matter and flow
  of energy among living and nonliving parts of an ecosystem. → U03 (food
  webs feed in) and U06 (ecosystem models).
- **MS-LS2-4** — construct an argument supported by empirical evidence that
  changes to physical or biological components of an ecosystem affect
  populations. → U06 (disturbance case studies) and U08 (environmental-
  change investigation).
- **MS-LS2-5** — evaluate competing design solutions for maintaining
  biodiversity and ecosystem services. → U08 (design-evaluation project;
  engineering thread).

### Heredity: Inheritance and Variation of Traits (MS-LS3) — U04

- **MS-LS3-1** — develop and use a model to describe why structural changes
  to genes (mutations) on chromosomes may affect proteins and may result in
  harmful, beneficial, or neutral effects on the organism. → U04.
- **MS-LS3-2** — develop and use a model to describe why asexual
  reproduction results in offspring with identical genetic information and
  sexual reproduction results in offspring with genetic variation. → U04.

### Biological Evolution: Unity and Diversity (MS-LS4) — U05, U08

- **MS-LS4-1** — analyze and interpret data for patterns in the fossil
  record documenting the existence, diversity, extinction, and change of
  life forms through Earth's history. → U05.
- **MS-LS4-2** — apply scientific ideas to construct an explanation for
  anatomical similarities and differences among modern organisms, and
  between modern and fossil organisms, to infer evolutionary relationships.
  → U05.
- **MS-LS4-3** — analyze pictorial data to compare patterns of similarities
  in embryological development across species and identify relationships
  not evident in adult anatomy. → U05.
- **MS-LS4-4** — construct an explanation based on evidence for how genetic
  variations of traits in a population increase some individuals'
  probability of surviving and reproducing in a specific environment. →
  U05 (natural-selection mechanism).
- **MS-LS4-5** — gather and synthesize information about technologies that
  have changed how humans influence the inheritance of desired traits. →
  U05 (artificial selection) with an engineering-design link in U08.
- **MS-LS4-6** — use mathematical representations to support explanations
  of how natural selection may increase or decrease specific traits in
  populations over time. → U05 (trait-frequency tables and graphs).

Science and engineering practices (developing/using models, planning and
carrying out investigations, analyzing data, constructing explanations,
arguing from evidence) and crosscutting concepts (patterns; cause and
effect; scale, proportion, and quantity; systems and system models; energy
and matter; structure and function) are woven into every unit's lessons
and investigations rather than taught as a separate unit.

## 5. 36-week sequence

Session model: four 45–50-minute sessions per week. Each unit runs 16
sessions: 4–6 core lessons (written by the unit build), guided and
independent practice, a reading or reference session, the
investigation/project, a formative quiz, and a final review-and-reteach
session driven by the quiz evidence. The adult records which objectives
needed reteach.

### Weeks 1–2 — Diagnostic and routines (flexible)

- Observation-vs-inference sorts; metric measurement practice; graph and
  table reading; lab-safety routines and the lab notebook setup.
- Diagnostic tasks (written in U01 or R00): identify what the learner
  already knows about cells, food/energy, reproduction, and ecosystems so
  later units can place emphasis honestly.

### Unit 01 — Scientific evidence, microscopy, and cell models (Weeks 3–6)

- Week 3: what counts as scientific evidence; observation vs. inference;
  measurement with units; lab safety and notebook routines.
- Week 4: cell theory; microscope parts and focusing (or verified
  micrograph reading when no microscope is available); scale — why cells
  need magnification; scale-aware sketching.
- Week 5: unicellular vs. multicellular life; "is it living?" evidence
  sorts; first claim-evidence-reasoning paragraphs.
- Week 16th session: cell-model build (labeled plant/animal cell from the
  revised assignments), formative quiz (measurement + lab-skills banks),
  review-and-reteach.
- Legacy reuse: revised `animal-cells.md` / `plant-cells.md` diagram tasks;
  consolidated week-01 measurement bank; week-08 lab-skills items; the
  lab-report template.

### Unit 02 — Cell structures, functions, and organism organization (Weeks 7–10)

- Week 7: plant vs. animal cell structures; what each major organelle does
  for the cell as a whole; membrane as boundary.
- Week 8: diffusion and osmosis with safe kitchen materials (food coloring
  in water; potato or egg-membrane demo with the adult); the cell as a
  system.
- Week 9: levels of organization — cells to tissues to organs to systems;
  one human and one plant example traced end to end.
- Week 10: organization-model project; formative quiz (week-07 biology
  bank); review-and-reteach.

### Unit 03 — Photosynthesis, respiration, and matter–energy flow (Weeks 11–14)

- Week 11: the photosynthesis equation in words and symbols; chlorophyll
  and chloroplasts; light energy captured as chemical energy.
- Week 12: tracing matter (carbon dioxide, water) and energy through the
  process; what happens to the sugar the plant makes.
- Week 13: cellular respiration as the reverse flow — food rearranged into
  new molecules for growth and energy release; the revised photosynthesis
  assignment's respiration link, keyed.
- Week 14: matter–energy flow model project (food-web entry point);
  formative quiz; review-and-reteach.
- Legacy reuse: revised `photosynthesis.md`; revised `ecosystems-energy-flow.md`
  food-chain/web tasks feed forward into U06.

### Unit 04 — Reproduction, inheritance, and genetic variation (Weeks 15–18)

- Week 15: asexual vs. sexual reproduction; mitosis vs. meiosis comparison
  (purpose, divisions, chromosome number, identical vs. varied cells) —
  the revised `reproduction.md` core, keyed.
- Week 16: chromosomes, genes, and DNA basics; mutations as changes that
  can help, harm, or do nothing; variation-modeling activity.
- Week 17: environmental and genetic factors in growth (plant-growth
  factor investigation); inherited vs. acquired traits; animal behaviors
  and plant structures that affect reproductive success.
- Week 18: variation project; formative quiz; review-and-reteach.

### Week 19 — Midyear review and catch-up (flexible)

- Cumulative retrieval across U01–U04; reteach the objectives the quiz
  evidence flagged; catch-up time for the investigation write-ups.

### Unit 05 — Natural selection, adaptation, and evolutionary evidence (Weeks 20–23)

- Week 20: the fossil record — patterns of existence, diversity,
  extinction, and change; deep-time scale with a paper timeline.
- Week 21: anatomical similarities and differences (modern vs. fossil);
  embryological-development picture comparisons; inferring relationships.
- Week 22: the natural-selection mechanism — heritable variation,
  differential survival and reproduction; trait-frequency tables and
  simple graphs (ties to grade-7 math ratios/percent work).
- Week 23: adaptation case-study project; artificial-selection connections
  (human influence on inheritance); formative quiz; review-and-reteach.
- All new writing; no legacy evolution content exists.

### Unit 06 — Ecosystem interactions, populations, and biodiversity (Weeks 24–27)

- Week 24: resource availability and population data — analyze and
  interpret real or clearly labeled practice datasets (columns, units, and
  real-vs-practice status named).
- Week 25: food webs as matter-cycling and energy-flow models; patterns of
  interaction (predation, competition, symbiosis) across ecosystems.
- Week 26: ecosystem change → population effects; human-impact case
  studies argued from evidence.
- Week 27: revised `ecosystems-energy-flow.md` keystone-species task as the
  project core; formative quiz; review-and-reteach.
- Legacy reuse: revised `ecosystems-energy-flow.md`; `water-cycle.md` as
  enrichment for the water context; `earth-systems-data-story.md` method
  as an extension for learners who want a second dataset.

### Unit 07 — Human body systems and homeostasis (Weeks 28–31)

- Week 28: the body as interacting subsystems of cells; digestive system
  and nutrition — the revised `cooking-and-nutrition.md` pantry lab and
  `micronutrients.md` menu analysis, keyed, with verified references.
- Week 29: circulatory and respiratory systems moving oxygen and nutrients;
  how the two systems cooperate; homeostasis examples (temperature, water,
  blood sugar) in plain language.
- Week 30: sensory receptors → brain → response or memory; a
  musculoskeletal overview tied to movement investigations.
- Week 31: body-systems interaction model project; formative quiz
  (week-07 biology bank, keyed); review-and-reteach.

### Unit 08 — Life-science investigations, environmental change, and engineering (Weeks 32–35)

- Week 32: investigation design — variables, controls, sources of error;
  the lab-report template; week-08 lab-skills bank as the formative
  check.
- Week 33: guided investigation — seed germination under varied conditions
  (safe, cheap, adult-supervised; observation alternative provided).
- Week 34: environmental-change data investigation (MS-LS2-4); evaluating
  competing design solutions for biodiversity (MS-LS2-5) — the track's
  engineering thread.
- Week 35: independent investigation with a written report and short
  presentation; unit assessment.

### Week 36 — Final review (flexible)

- Cumulative review across all eight units; final reteach of flagged
  objectives; portfolio assembly from the unit projects.

## 6. Retrieval and review cadence

- Daily 10-minute warm-ups pull from earlier units (spaced practice:
  cell vocabulary in U03, equation tracing in U05, data-reading in U08).
- Each unit's 16th session is review-and-reteach driven by the formative
  quiz evidence; the adult records which objectives needed reteach.
- Week 19 (midyear) and Week 36 (final) are cumulative, plus short
  cumulative starters at each unit's week 1.
- The legacy quiz banks are recycled as spaced-practice sets only after
  being rewritten and keyed; unkeyed legacy quizzes are never assigned
  as-is.

## 7. Internal resource reuse for future units

| Unit | Repository resource | Use (with checks) |
|---|---|---|
| U01–U04, U06 | `resources/biology_fundamentals.md` | warm-up explanations and vocabulary; verify anchors and reading level per section |
| U01, U08 | `assignments/science/physical-science-roadmap/lab-report-template.md` (shared catalog) | investigation scaffold, embedded unchanged |
| U01 | `curriculum/grade-7/stem/quizzes/week-01-quiz*.md` | consolidated, keyed measurement bank |
| U01, U08 | `curriculum/grade-7/stem/quizzes/week-08-quiz.md` | keyed lab-skills bank |
| U01–U02 | `curriculum/grade-7/stem/assignments/animal-cells.md`, `plant-cells.md` | revised diagram/comparison tasks with keys and rubrics |
| U02, U07 | `curriculum/grade-7/stem/quizzes/week-07-quiz.md` | keyed biology/anatomy bank (new items only) |
| U03 | `curriculum/grade-7/stem/assignments/photosynthesis.md` | revised equation/tracing tasks with keys |
| U03, U06 | `curriculum/grade-7/stem/assignments/ecosystems-energy-flow.md` | revised food-web tasks with rubric and keys |
| U04 | `curriculum/grade-7/stem/assignments/reproduction.md` | revised mitosis/meiosis comparison with keys |
| U07 | `resources/cooking_and_nutrition.md`, `resources/micronutrients.md` | background; check dates and figures at unit build |
| U07 | `curriculum/grade-7/stem/assignments/cooking-and-nutrition.md`, `micronutrients.md` | revised labs with explicit directions (dead spec links removed) and verified videos |
| U06 (extension) | `curriculum/grade-7/stem/assignments/earth-systems-data-story.md`, `water-cycle.md` | optional data-literacy/water-context extensions |

The semester resource library and the assignment catalog
(`resources/semester-resource-library.md`, `assignments/README.md`) are
browsed before any citation. Physical-science datasets
(`periodic_table_elements.csv`, `solar_system_planets.csv`) are not core
to this life-science track and are not forced into units.

## 8. Safe materials

Household and classroom-safe materials only: paper, pencils, rulers,
magnifiers, prepared slides or printed micrographs (substitute when no
microscope is available), seeds, potting soil, clear cups, water, food
coloring, potatoes or eggshell membranes for osmosis demos (adult-led),
dried beans or counters for population modeling, scissors, tape, string,
cardboard for models. Adult supervises all procedures and previews every
video. No live cultures without adult handling protocols; no mouth
pipetting; handwashing after soil, seeds, or pond-water contact. No
live-animal experiments, no dissections, no heat sources, no chemicals
beyond kitchen-safe items used with the adult present. Pond-water or
outdoor observation is adult-accompanied; photographs must exclude private
information (faces, addresses, license plates). Simulation or
diagram-based alternatives are provided wherever equipment or supervision
is unavailable.

## 9. Accessibility supports

- Every diagram ships with a text-only description carrying the same
  information; no question depends on color alone.
- Microscope work always has a verified-micrograph alternative; no
  observation task requires equipment the learner does not have.
- Keyboard-operable, labeled HTML interactives with reset actions and
  printable text equivalents (tested narrow and desktop in unit builds).
- Science vocabulary defined in context with a unit glossary; word-heavy
  tasks available as adult read-aloud.
- Scribed or oral response modes for reflections and exit checks; chunked
  practice sets; extra time without timed speed tests.
- Large-print and high-contrast variants of practice pages;
  distraction-reduced workspace option and one-task-at-a-time layouts.

## 10. Gaps and paths for future units

- `science/` is new: no lessons, teacher guides, answer keys, or
  investigations exist — the eight unit builds supply them.
- No microscopy instruction exists anywhere in the repo; U01 writes it new
  (with no-microscope alternatives, not as an assumed prerequisite).
- No evolution, natural-selection, or fossil-record content exists; U05 is
  all new writing.
- No body-systems instructional sequence exists; U07 is mostly new writing
  on top of the two revised nutrition assignments.
- No diagnostic instrument; Week 1–2 tasks are written in U01 or R00.
- The two nutrition assignments cite a nonexistent shared spec and name
  videos that must be verified before recommendation; U07 fixes both.
- The thermodynamics cooling lab's dangling "Shared spec" line must be
  replaced with explicit directions if that enrichment is ever promoted.
- No generated educational images anywhere; each unit build must create at
  least one genuine raster asset with alt text, caption, and a text-only
  alternative (per unit-requirements), plus deterministic SVG/HTML diagrams
  for precision.
- Legacy quizzes are unkeyed and sometimes mix enrichment topics into the
  review items; unit builds consolidate them into keyed, topic-pure banks
  and document what moved where in their delivery comments.

## 11. Planned units (prose — no files yet; no links to missing files)

Unit builds follow the issue order. U01 (scientific evidence, microscopy,
and cell models) comes first and carries the diagnostic, the consolidated
measurement/lab-skills banks, and the revised cell-diagram tasks; U02
(cell structures, functions, and organism organization) revises the
plant/animal cell assignments and adds membrane-transport and
levels-of-organization instruction; U03 (photosynthesis, respiration, and
matter–energy flow) keys the photosynthesis tasks and builds the
matter/energy tracing sequence; U04 (reproduction, inheritance, and
genetic variation) keys the mitosis/meiosis comparison and builds the
variation-modeling and growth-factor investigations; U05 (natural
selection, adaptation, and evolutionary evidence) is new writing on
fossils, anatomy, embryology, and trait-frequency math; U06 (ecosystem
interactions, populations, and biodiversity) revises the food-web tasks
around resource data and ecosystem-change arguments; U07 (human body
systems and homeostasis) rebuilds the nutrition assignments with verified
references and adds the systems-interaction sequence; U08 (life-science
investigations, environmental change, and engineering) carries the
germination investigation, the environmental-change data task, and the
biodiversity design-evaluation project. R00 delivers the diagnostic,
midyear/final review instruments, cumulative assessment and keys, and the
coherence, accessibility, source, and manifest audit.
