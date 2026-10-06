# Grade 9 Science (Biology) — Scope and Sequence

Audit section A00 of [issue #43](https://github.com/murderszn/open-tutor/issues/43).
Status: **validated draft** (this document, the track README, and the grade-9
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-9 hub page | `curriculum/grade-9/README.md` | **New** — created by this run: math and science listed as audited drafts; language arts, social studies planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-9/science/README.md` | **New** — written by this run as a real subject index with course description, 13 measurable objectives, verified standards summary, planned-unit list, and adult guidance |
| Scope and sequence | `curriculum/grade-9/science/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-9/science/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-9/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, or diagnostics exist to keep, revise, or retire |
| `assignments/stem/biology/README.md` + `resources/photosynthesis/index.html`, `resources/water-cycle/index.html` | shared assignments | **Reference only** — two interactives (photosynthesis, water cycle) and a topic README at unspecified band. Not inspected for grade-9 fit in this run; U03's build will preview the photosynthesis interactive and decide keep/adapt/replace. Not cited as instruction until reviewed |
| `curriculum/grade-4/stem/assignments/{animal-cells,plant-cells,photosynthesis}.md`, `curriculum/grade-7/stem/assignments/{animal-cells,plant-cells,photosynthesis}.md` | grade-4/7 STEM | **No reuse as grade-9 instruction** — elementary/middle-grade assignments. Kept in place; their labeled-diagram approach may inform U02/U03 visual design, but no content is copied upward |
| Same-grade other subjects (#42 math, #44 language arts, #45 social studies) | #42 audited (open draft PR #106), #44/#45 unaudited | **Prerequisite reference only** — the grade-9 math audit's data-modeling language (residuals, model comparison) informs U07's quantitative work; no lessons copied; no learner-facing cross-grade links |
| `resources/biology_fundamentals.md` | general reference, kid-friendly vocabulary with Wikipedia links | **Bridge reference only** — entry warm-ups where middle-grade recall is insecure; never assigned as grade-9 instruction; the adult checks every external link's date and fit before reuse |
| `resources/chemistry_fundamentals.md` | general chemistry reference | **Reuse with verification** — U01 atom/molecule language and bond-breaking/forming models (U03); the adult verifies facts against an authoritative source before any unit cites them |
| `resources/physics_fundamentals.md` | general physics reference | **Reuse with verification** — U03 energy-flow language; verify before citing |
| `resources/thermodynamics_laws.md` | energy laws reference | **Reuse with verification** — U03 net-energy-transfer reasoning; verify wording and grade fit before citing |
| `resources/cooking_and_nutrition.md` | food/nutrition guide | **Reuse with verification** — U01 biomolecules-in-food contexts (starch, protein, fat tests use real food); verify any nutritional claims before reuse |
| `resources/periodic_table_elements.csv` | element dataset | **Reuse** — U01 composition-of-biomolecules tasks (C, H, O, N, P); every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| PhET simulations, HHMI BioInteractive, Khan Academy biology | free no-account browser tools | **Verify before citing** — candidate core digital tools for U03 energy models, U06 natural-selection simulations, U07 population models; each unit previews for advertising, accuracy, and age suitability before recommending |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no assessments, no keys, no diagnostics, no resource packs, and no
teaching images exist anywhere in `curriculum/grade-9/`.

## 2. Prerequisites

Learners typically enter grade-9 biology with (expected from grades 6–8
science exposure; the grade-8 science audit is not yet delivered, so this
list is provisional and the diagnostic verifies it):

- Basic cell vocabulary: cell as the unit of life; nucleus, cell membrane,
  and the plant/animal cell distinction — but **not** organelle-level
  function or membrane-transport mechanisms
- That plants make food using sunlight, water, and air — but **not**
  balanced equations, energy bookkeeping, or the cellular-respiration
  connection
- That offspring inherit traits from parents — but **not** DNA structure,
  chromosomes, meiosis, or probability-based inheritance reasoning
- Familiarity with food chains/webs and the idea that ecosystems change —
  but **not** carrying-capacity analysis, quantitative energy transfer, or
  human-impact evaluation
- Metric measurement, reading tables and bar graphs, and proportional
  reasoning sufficient for percent change and simple ratios

The diagnostic weeks (Weeks 1–2) verify these; the track re-teaches insecure
skills in use before assuming them. The audit never assumes fluency with
model-based explanation, controlled investigation design, biomolecular
structure, membrane transport, mitosis/meiosis, DNA-to-protein reasoning,
statistical trait reasoning, or argument from multiple lines of evidence —
those are this track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (13 objectives; numbered in the track
README):

1. Plan and carry out investigations with defined variables, controls, and
   repeated trials; record data precisely; use evidence to support, revise,
   or reject a claim.
2. Model how biomolecules are assembled from and broken down into atoms
   (C, H, O, N, P); explain with evidence how sugars combine with other
   elements to form amino acids and other large carbon-based molecules.
3. Model cell structures and explain how specialized parts carry out the
   cell's essential functions; compare plant and animal cells and explain
   what each difference makes possible.
4. Explain and model selective permeability: predict diffusion/osmosis
   direction from concentration differences; explain active transport.
5. Model photosynthesis (light energy → stored chemical energy) and cellular
   respiration (bond breaking/formation, net energy transfer); trace matter
   and energy through both.
6. Model mitosis and meiosis; explain mitosis + differentiation in
   growth/maintenance; defend a claim about the sources of heritable
   variation.
7. Explain DNA structure → protein structure → trait through specialized
   cells; clarify how DNA/chromosomes code inherited traits; apply
   probability to trait variation in populations.
8. Communicate, in more than one format, that common ancestry and evolution
   are supported by multiple lines of empirical evidence.
9. Explain evolution via the four-factor interaction; use data to show how
   natural selection shifts trait distributions and adapts populations.
10. Use mathematical/graphical representations for carrying capacity,
    biodiversity/population factors, matter cycling, and energy flow; model
    the carbon cycle across biosphere, atmosphere, hydrosphere, geosphere.
11. Evaluate claims about ecosystem stability/resilience and human impacts;
    evaluate group-behavior evidence; design, refine, and simulate solutions
    that reduce biodiversity harm.
12. Plan and conduct an investigation showing feedback mechanisms maintain
    homeostasis.
13. Develop and use models of hierarchical organization (cell → tissue →
    organ → organ system → organism); explain how interacting systems perform
    life functions.

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards (NGSS), high-school
life-science performance expectations** (HS-LS1, HS-LS2, HS-LS3, HS-LS4).
Codes and wording were verified 2026-10-06 against a full official-text
transcription, cross-checked against an NGSS HS-biology unit guide for the
HS-LS1 phrasings; descriptions below are paraphrases, not reproductions. No
state adoption, accreditation, or alignment certification claimed.

**Course choice note.** The expansion plan proposes Biology as the grade-9
science pathway. No state or district graduation requirement was specified;
this is a proposed pathway, not a universal requirement. A learner placed in
chemistry or physics in 9th grade should not use this track as-is. Each
unit's build will state its middle-grade prerequisites explicitly so a
guiding adult can re-sequence.

### From Molecules to Organisms: Structures and Processes — U01, U02, U03, U08

- **HS-LS1-1** (U05 also) — construct an evidence-based explanation of how
  DNA structure determines protein structure, and how proteins carry out
  life's essential functions through systems of specialized cells.
- **HS-LS1-2** (U02, U08) — develop and use a model of the hierarchical
  organization of interacting systems (cells → tissues → organs → systems)
  that provide specific functions in multicellular organisms.
- **HS-LS1-3** (U08) — plan and conduct an investigation providing evidence
  that feedback mechanisms maintain homeostasis.
- **HS-LS1-4** (U04) — use a model to show the role of mitosis and
  differentiation in producing and maintaining complex organisms.
- **HS-LS1-5** (U03) — use a model to show how photosynthesis transforms
  light energy into stored chemical energy (matter inputs/outputs plus
  energy transfer).
- **HS-LS1-6** (U01) — construct and revise an evidence-based explanation of
  how carbon, hydrogen, and oxygen from sugars combine with other elements
  to form amino acids and/or other large carbon-based molecules.
- **HS-LS1-7** (U03) — use a model to show that cellular respiration is a
  chemical process in which bonds of food and oxygen molecules break and new
  compounds form, with a net transfer of energy.

### Ecosystems: Interactions, Energy, and Dynamics — U03, U07, U08

- **HS-LS2-1** (U07) — use mathematical/computational representations to
  support explanations of factors affecting carrying capacity at different
  scales.
- **HS-LS2-2** (U07) — use mathematical representations to support and revise
  evidence-based explanations of factors affecting biodiversity and
  populations in ecosystems at different scales.
- **HS-LS2-3** (U03, U07) — construct and revise an evidence-based
  explanation of matter cycling and energy flow under aerobic and anaerobic
  conditions.
- **HS-LS2-4** (U07) — use mathematical representations to support claims
  about matter cycling and energy flow among organisms in an ecosystem.
- **HS-LS2-5** (U03, U07) — develop a model of the role of photosynthesis
  and cellular respiration in cycling carbon among biosphere, atmosphere,
  hydrosphere, and geosphere.
- **HS-LS2-6** (U07) — evaluate claims, evidence, and reasoning that stable
  ecosystems keep organism numbers/types relatively constant, while changing
  conditions can produce a new ecosystem.
- **HS-LS2-7** (U07, U08 capstone) — design, evaluate, and refine a solution
  that reduces human impacts on the environment and biodiversity.
- **HS-LS2-8** (U07) — evaluate evidence for the role of group behavior in
  individual and species survival and reproduction.

### Heredity: Inheritance and Variation of Traits — U04, U05

- **HS-LS3-1** (U05) — ask questions to clarify how DNA and chromosomes code
  the instructions for traits passed from parents to offspring.
- **HS-LS3-2** (U04, U05) — make and defend an evidence-based claim that
  heritable genetic variation arises from new meiotic combinations, viable
  replication errors, and/or environment-caused mutations.
- **HS-LS3-3** (U05) — apply statistics and probability to explain the
  variation and distribution of expressed traits in a population.

### Biological Evolution: Unity and Diversity — U06, U08

- **HS-LS4-1** (U06) — communicate scientific information that common
  ancestry and biological evolution are supported by multiple lines of
  empirical evidence.
- **HS-LS4-2** (U06) — construct an evidence-based explanation that
  evolution results from four interacting factors: potential for population
  increase, heritable variation from mutation and sexual reproduction,
  competition for limited resources, and proliferation of better-adapted
  organisms.
- **HS-LS4-3** (U06) — apply statistics and probability to support
  explanations that organisms with an advantageous heritable trait increase
  in proportion to those lacking it.
- **HS-LS4-4** (U06) — construct an evidence-based explanation of how
  natural selection leads to adaptation of populations.
- **HS-LS4-5** (U06) — evaluate evidence that environmental change can grow
  some species, produce new species over time, and drive others extinct.
- **HS-LS4-6** (U08 capstone) — create or revise a simulation to test a
  solution that mitigates adverse human impacts on biodiversity.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 50-minute sessions per week** (20 sessions
per unit): 5–6 core lessons, data-analysis and modeling practice sessions,
a reading/reference session, the investigation or project block, a formative
quiz, the culminating assessment, one review-and-reteach session, and flex
sessions for catch-up. Objectives numbered below are the track objectives
from [README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Week 1 goal:** probe cell vocabulary, plant-food basics, inherited-trait
  ideas, food-web reasoning, metric measurement, and graph reading. The adult
  scores same-day and maps gaps to objectives 1–13. Practice sessions use
  anonymous familiar examples (e.g., a houseplant, a grocery receipt) rather
  than new content.
- **Week 2 goal:** establish routines — science-notebook setup, conventions
  for recording observations vs. inferences, microscope or prepared-slide
  orientation, safety norms (adult supervision, no tasting lab materials,
  hand-washing). Begin catch-up for flagged gaps (measurement, graphing). No
  new grade-9 content yet.

### Unit 01 — Biological investigation: evidence and biomolecules (Weeks 3–6)

- **Standards:** HS-LS1-6; SEPs: planning investigations, constructing
  explanations, using models
- **Week 3 goal:** investigation design — variables, controls, repeated
  trials; the difference between an observation and an inference; safe
  household-scale protocols. Sessions: two lessons, one protocol-design
  practice session, one reading session (resource_finder-picked reference).
- **Week 4 goal:** biomolecule classes — carbohydrates, lipids, proteins,
  nucleic acids; food tests (iodine for starch, brown-paper for fats, with
  adult supervision and no tasting); which atoms each class is built from.
  Investigation launch: test a set of grocery foods, record evidence.
- **Week 5 goal:** building large molecules — model how sugars supply carbon,
  hydrogen, oxygen that recombine with other elements into amino acids and
  other large carbon molecules; ball-and-stick or digital models; explain in
  writing, revised against evidence.
- **Week 6 goal:** review week — investigation reports completed and peer
  critiqued against a claim-evidence-reasoning frame; formative check.
  Objectives 1, 2 in play.

### Unit 02 — Cells: membranes and transport (Weeks 7–10)

- **Standards:** HS-LS1-2 (hierarchical organization, cellular level);
  LS1.A structure/function
- **Week 7 goal:** cell structures — organelle functions as specialized jobs
  (nucleus, ribosomes, ER, Golgi, mitochondria, chloroplasts, wall, vacuole,
  membrane); plant vs. animal comparison with labeled diagrams the learner
  annotates. Practice: match structure to malfunction ("what breaks if this
  stops?").
- **Week 8 goal:** membranes and selective permeability — model the bilayer
  with household analogies checked against the real structure; predict
  diffusion direction from concentration differences (dye-in-water or
  dialysis-tubing observations, adult-supervised).
- **Week 9 goal:** osmosis and active transport — egg or potato-slice osmosis
  investigation with controls and repeated trials; when cells spend energy to
  move substances against a gradient; relate transport to homeostasis preview.
- **Week 10 goal:** review week — labeled-diagram reconstruction from memory,
  transport-prediction scenarios; formative check. Objectives 1, 3, 4 in
  play.

### Unit 03 — Photosynthesis: respiration and energy transformations (Weeks 11–14)

- **Standards:** HS-LS1-5, HS-LS1-7; HS-LS2-3, HS-LS2-5
- **Week 11 goal:** photosynthesis as energy transformation — inputs and
  outputs of matter, transfer and transformation of energy; leaf-disk or
  elodea observation (adult-supervised); build the word and symbol equation
  from evidence.
- **Week 12 goal:** cellular respiration as a chemical process — bonds
  broken, new compounds formed, net energy transfer; contrast inputs/outputs
  with photosynthesis; aerobic vs. anaerobic conditions (yeast fermentation
  observation as the anaerobic case, adult-supervised).
- **Week 13 goal:** matter and energy through ecosystems — trace a carbon
  atom through photosynthesis, respiration, and the carbon cycle; model the
  cycle across biosphere, atmosphere, hydrosphere, geosphere; energy-flow vs.
  matter-cycling distinction.
- **Week 14 goal:** review week — equation-balancing checks, energy-tracing
  tasks, carbon-cycle model revision; formative check. Objectives 1, 5 in
  play.

### Unit 04 — Cell cycle: mitosis and meiosis (Weeks 15–18)

- **Standards:** HS-LS1-4; HS-LS3-2 (meiotic combinations as variation source)
- **Week 15 goal:** the cell cycle and mitosis — growth then division;
  identical genetic material to daughter cells; model the stages with pipe
  cleaners, drawings, or a verified simulation; what goes wrong when
  division is uncontrolled (kept at the conceptual level).
- **Week 16 goal:** meiosis — reduction division producing variation-ready
  gametes; contrast with mitosis in purpose and products; model crossing-over
  as a source of new combinations.
- **Week 17 goal:** sources of heritable variation — new meiotic
  combinations, viable replication errors, environment-caused mutations;
  defend a claim about variation sources with evidence; differentiation's
  role in producing specialized cells from one starting cell.
- **Week 18 goal:** midyear review (flexible) — cumulative modeling and
  explanation tasks across objectives 1–6; re-teach the highest-need
  objective; formative check.

### Unit 05 — Inheritance: molecular genetics and gene expression (Weeks 19–22)

- **Standards:** HS-LS1-1; HS-LS3-1, HS-LS3-3
- **Week 19 goal:** DNA structure → protein structure — genes as DNA regions
  coding for proteins; proteins do most of the cell's work; build and
  annotate a DNA model; read a simplified codon chart (no rote memorization
  of the full table).
- **Week 20 goal:** chromosomes and inheritance — each chromosome a long DNA
  molecule; all cells share the genetic content but express different genes;
  ask and refine questions about how DNA codes trait instructions.
- **Week 21 goal:** probability and trait variation — Punnett squares as
  probability models; apply statistics/probability to explain trait
  distributions in a population; environmental influence on expression.
- **Week 22 goal:** review week — gene-to-trait tracing tasks, probability
  problems solved two ways; formative check. Objectives 1, 7 in play.

### Unit 06 — Evolution: population genetics and evidence (Weeks 23–26)

- **Standards:** HS-LS4-1 through HS-LS4-5
- **Week 23 goal:** evidence for common ancestry — DNA-sequence comparisons,
  anatomical homologies, embryological development, fossils; communicate the
  case in two formats (written argument + annotated visual).
- **Week 24 goal:** the four-factor model — overproduction potential,
  heritable variation (mutation + sexual reproduction), competition for
  limited resources, differential survival/reproduction; simulation
  (beads/dice or a verified browser simulation) showing selection across
  generations.
- **Week 25 goal:** adaptation and environmental change — trait-distribution
  shifts analyzed with simple statistics; evidence evaluation for
  speciation/extinction claims under changing conditions.
- **Week 26 goal:** review week — argument-critique tasks ("evaluate this
  claim's evidence"), simulation re-runs with changed parameters; formative
  check. Objectives 1, 8, 9 in play.

### Unit 07 — Ecology: ecosystems and matter cycling (Weeks 27–30)

- **Standards:** HS-LS2-1, HS-LS2-2, HS-LS2-4, HS-LS2-5, HS-LS2-6, HS-LS2-8;
  HS-LS2-7 (design)
- **Week 27 goal:** populations and carrying capacity — mathematical
  representations (graphs of population data, limiting-factor analysis) to
  explain carrying capacity at different scales; factors affecting
  biodiversity and populations.
- **Week 28 goal:** matter cycling and energy flow — food-web energy
  transfer with proportional reasoning; carbon-cycle model from U03
  extended; aerobic/anaerobic decomposition contrast.
- **Week 29 goal:** stability, resilience, and group behavior — evaluate
  claims about ecosystem stability under disturbance; evaluate evidence for
  group behavior's survival value; design (on paper) a solution reducing a
  local human impact, with criteria and tradeoffs.
- **Week 30 goal:** review week — data-interpretation tasks, solution
  evaluation and refinement; formative check. Objectives 1, 10, 11 (partial)
  in play.

### Unit 08 — Human systems: homeostasis and biology capstone (Weeks 31–34)

- **Standards:** HS-LS1-3, HS-LS1-2; HS-LS2-7, HS-LS4-6 (capstone)
- **Week 31 goal:** hierarchical organization in humans — cell → tissue →
  organ → organ system → organism models; how interacting systems perform
  life functions; systems-diagram construction.
- **Week 32 goal:** feedback and homeostasis — negative/positive feedback;
  plan and conduct an investigation (e.g., heart-rate response to exercise,
  adult-supervised) providing evidence that feedback maintains internal
  conditions.
- **Week 33 goal:** capstone project — revise the U07 biodiversity-impact
  solution into a tested simulation or refined design (HS-LS4-6 / HS-LS2-7);
  integrate evidence strands from the year.
- **Week 34 goal:** review week — capstone presentations with
  claim-evidence-reasoning defense; formative check. Objectives 1, 11–13 in
  play.

### Weeks 35–36 — Final review (flexible)

Cumulative modeling, investigation-critique, and explanation tasks across all
thirteen objectives; re-teach where evidence shows gaps; final observational
assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit opens with a retrieval warm-up from prior units (for example, U02
reprises U01's variables-and-controls language when designing the osmosis
investigation; U03's carbon tracing retrieves U01's biomolecule vocabulary;
U05's DNA models retrieve U04's meiosis language; U07's population math
retrieves U05's probability work; U08's capstone retrieves U07's solution
design). Each unit's Week 4 re-teaches and re-checks that unit's objectives;
the midyear week (Week 18) and final weeks (35–36) are full-track reviews.
Formative checks are short written or modeled tasks the adult reviews the
same day; each unit's teacher guide specifies what "ready to move on" looks
like. All fluency work is strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/biology_fundamentals.md` — entry warm-ups only, where
  middle-grade recall is insecure; never grade-9 instruction; the adult
  checks external-link dates before reuse.
- `resources/chemistry_fundamentals.md`, `resources/physics_fundamentals.md`,
  `resources/thermodynamics_laws.md` — U01/U03 background; verify facts and
  grade fit before any unit cites them.
- `resources/cooking_and_nutrition.md` — U01 food-test contexts; verify any
  nutritional claims before reuse.
- `resources/periodic_table_elements.csv` — U01 element-composition tasks;
  every dataset task names columns and units and states whether values are
  real, rounded, or fictional practice data.
- `assignments/stem/biology/resources/photosynthesis/index.html` — candidate
  U03 interactive; the unit build previews it and decides keep/adapt/replace
  (not cited until reviewed).
- PhET, HHMI BioInteractive, Khan Academy biology (free, no-account browser
  versions) — candidate core tools for U03 energy models, U06 selection
  simulations, U07 population models; each unit previews for advertising,
  accuracy, and age suitability before recommending.

## 8. Safe materials

Standard science-class supplies: notebook, pencils, ruler, index cards for
vocabulary, ball-and-stick or craft modeling materials, prepared slides or a
low-cost microscope, grocery-store foods for biomolecule tests (iodine
solution, brown paper — adult handles and supervises; nothing is tasted),
dialysis tubing or eggs for osmosis, yeast and sugar for fermentation
observation, thermometers, measuring cups, pH paper. Digital tools: the
verified simulations above (free, no-account browser versions); a spreadsheet
app for U05/U06/U07 data work — the adult previews for advertising and age
suitability. **No culturing of unknown microbes, no animal dissection, no
open flames beyond adult-operated hot water baths, no tasting of lab
materials.** Every investigation lists a simulation or observation-only
alternative for hazards, material access, or accessibility. Online sessions
follow the adult-supervised, no-account norms used throughout the track.

## 9. Accessibility supports

- **Multiple response modes** for all checks: written, oral, typed, drawn,
  or modeled; adult scribes when writing stamina lags.
- Labeled diagrams described in words as well as drawn; color is never the
  only cue (e.g., osmosis diagrams labeled with arrows and text, not color
  alone); high-contrast, large-format models.
- Sessions of about 50 minutes with movement breaks; every investigation has
  a seated-table and a standing/digital variant.
- Language support: vocabulary taught with models and objects first, word
  second; visual word walls (homeostasis, osmosis, allele, natural
  selection, biodiversity); home-language labels welcomed alongside English
  terms.
- Every diagram and simulation ships with a text-only alternative (data table
  or verbal description). Simulations chosen for keyboard navigability —
  the unit guides note the keystrokes.
- Fluency work is strategy-based, never timed — no speed tests in any unit.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #43.
- No taught lessons exist anywhere in the track — the largest gap.
- Generated raster teaching images (one per unit, used in an activity with
  alt text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- U02/U03/U08 need reproducible labeled diagrams (SVG/HTML, not generated
  art) for exact cell, membrane, cycle, and systems models; U06/U07 need a
  labeled fictional population dataset if real repository data does not fit
  the statistics tasks.
- The grade-8 science audit is not yet delivered; when it merges, confirm the
  entry-skills list against the merged version.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Biological investigation: evidence and biomolecules; U02 Cells: membranes
and transport; U03 Photosynthesis: respiration and energy transformations;
U04 Cell cycle: mitosis and meiosis; U05 Inheritance: molecular genetics and
gene expression; U06 Evolution: population genetics and evidence; U07
Ecology: ecosystems and matter cycling; U08 Human systems: homeostasis and
biology capstone; R00 diagnostic, midyear/final review, and cumulative
assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #43 body, comments, and label state re-read 2026-10-06 before
  claiming; no competing claim (0 comments prior to the claim comment);
  `curriculum-in-progress` label added with a timestamped claim comment.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time; open worker PRs (other tracks) were not touched. Cross-track reviews
  #58/#59/#60 are ineligible (all-track A00, all-track U01, and
  all-sections-merged dependencies unmet).
- `curriculum/grade-9/` re-inventoried on `main` @ `2c43d24`: 0 files —
  matches the issue's 2026-10-01 baseline of 0 Markdown files.
- Standards codes/descriptions verified 2026-10-06: HS-LS1-1–7, HS-LS2-1–8,
  HS-LS3-1–3, HS-LS4-1–6 against a full official-text transcription of the
  NGSS high-school life-science performance expectations, cross-checked
  against an NGSS HS-biology unit guide for the HS-LS1 phrasings.
  Descriptions in this document are paraphrases. No state adoption,
  accreditation, or alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and stated bands; legacy cell/photosynthesis assignments inspected at the
  path level and kept as reference-only pending unit-level review.
- The thirteen objectives map onto the issue's U01–U08 checklist order, kept
  as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
