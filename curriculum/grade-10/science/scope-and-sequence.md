# Grade 10 Science — Scope and Sequence

Audit section A00 of [issue #47](https://github.com/murderszn/open-tutor/issues/47).
Status: **validated draft** (this document, the track README, and the grade-10
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| `curriculum/grade-10/science/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-10/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy lessons, labs, assessments, keys, or diagnostics exist to keep, revise, or retire |
| Grade-10 hub page | `curriculum/grade-10/README.md` | **New** — created by this run: science track listed as audited draft; mathematics audit noted as delivered in unmerged draft PR #114; language arts and social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-10/science/README.md` | **New** — written by this run as a real subject index with course description, 12 measurable objectives, safety summary, and adult guidance |
| Scope and sequence | `curriculum/grade-10/science/scope-and-sequence.md` | **New** — this document |
| Grade-9 science track (#43, Biology; audit in open draft PR #107, unmerged) | PR branch | **Prerequisite reference only** — its end-of-year objectives (atomic structure basics, chemical reactions in photosynthesis/cellular respiration, investigation practices) define the entry skills below; no grade-9 lessons copied upward; no learner-facing cross-grade links |
| Grade-9 math track (#42, Algebra I; audit in open draft PR #106, unmerged) | PR branch | **Prerequisite reference only** — proportional reasoning, scientific notation, formula rearrangement, and graphing are the entry math skills below |
| Same-grade other subjects (#46 math, #48 language arts, #49 social studies) | #46 delivered in draft PR #114 (unmerged); #48/#49 unaudited | **No lesson reuse** — science units will coordinate only on shared math skills at build time |
| `resources/chemistry_fundamentals.md` | self-described grades 4–8 guide | **Bridge reference only** — useful for warm-up vocabulary (atom, ion, isotope, mole) where grade-9 skills are insecure; never assigned as grade-10 instruction. Its "Facts & Numbers" (Avogadro's number, water composition, pH scale) must be re-verified against authoritative sources before reuse in grade-10 work |
| `resources/periodic_table_elements.csv` | 118 elements; columns: atomic_number, symbol, name, period, group, block, category, state_at_room_temp, protons, electrons_neutral, max_elements_in_period, fact, google_search_url | **Reuse with a gap filled** — U02/U03 practice on groups, periods, blocks, and categories; values are real reference data. **Gap:** no atomic-mass column, so U02 average-atomic-mass work needs an external mass table (e.g., a periodic table reference checked at build time). Every dataset task names columns and units and states that values are real, unrounded reference data except where practice rounding is explicit |
| `resources/thermodynamics_laws.md` | self-described grades 4–8 guide | **Bridge reference only** — everyday-language framing for U07 warm-ups; quantitative thermochemistry is new grade-10 content |
| `resources/physics_fundamentals.md` | general physics reference | **Reuse** — energy, temperature, and kinetic-theory background feeding U05/U07; the building run verifies the specific sections it cites |
| `resources/semester-resource-library.md` | discovery shelf | **Discovery only** — its PhET chemistry filter link is a starting point; every linked simulation will be opened and checked for fit by the building run |
| PhET Interactive Simulations (University of Colorado) | free, no-account browser simulations: "Build an Atom", "Balancing Chemical Equations", "Molarity", "pH Scale", "Reactions & Rates", "States of Matter" | **Reuse as simulation alternatives and core practice** — the adult previews each sim for advertising and age suitability before the learner opens it |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| `stem/` | 0 Markdown files at `main` | **No reuse** — nothing to preserve; existing `stem/` links elsewhere stay untouched |
| `assignments/` catalog, grade 4/5/7/8 quiz libraries | legacy material | **Not reused** — no grade-10 chemistry content found; the building runs will re-check before each unit rather than assume |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no labs, no assessments, no keys, no diagnostics, no resource packs,
and no teaching images exist anywhere in `curriculum/grade-10/science/`.

## 2. Prerequisites

Learners typically enter grade-10 science with the grade-9 track's stated
end-of-year objectives (Biology pathway, currently in unmerged draft
PR #107) and Algebra I skills (draft PR #106):

- **From grade-9 science:** basic atomic structure (protons, neutrons,
  electrons); the idea that chemical reactions rearrange atoms (traced
  through photosynthesis and cellular respiration); reading data tables
  and graphs; planning simple investigations with variables; lab safety
  habits.
- **From grade-9 math:** proportional reasoning and unit conversion;
  scientific notation; evaluating and rearranging formulas; interpreting
  linear graphs and rates of change; solving multi-step numerical problems
  with units.
- **From grade 8:** the particle model of matter; conservation of mass in
  physical and chemical changes (MS-PS1-5); thermal energy and particle
  motion (MS-PS1-4).

The Weeks 1–2 diagnostic checks unit conversion, scientific notation,
graph reading, and basic lab-safety judgment. Learners missing the math
prerequisites get targeted warm-ups in U01; learners missing the science
prerequisites get the middle-school bridge references above, never as a
substitute for the grade-10 lessons.

## 3. Track objectives

The twelve measurable, adult-assessed objectives are stated in the
[track README](README.md) (§ "Track objectives") and are not repeated here.
Each unit below names the objectives it serves; the R00 review will assess
all twelve.

## 4. Standards crosswalk

Reference framework: the Next Generation Science Standards (NGSS), high
school (9–12) band. Codes and descriptions were verified on 2026-10-07
against [nextgenscience.org](https://www.nextgenscience.org/search-standards)
(the PS1A/PS1B disciplinary core idea pages and the high-school topic
arrangement) and the California Department of Education's NGSS physical
science DCI document. Descriptions below are short paraphrases for mapping
purposes, not reproductions of the standards text. **This crosswalk is a
planning reference, not a claim of state adoption, accreditation, or
certification of alignment.** Schools vary in their high-school science
order; chemistry in grade 10 is this track's proposed pathway.

| NGSS performance expectation (verified 2026-10-07) | Track units |
|---|---|
| HS-PS1-1 — use the periodic table as a model to predict relative element properties from outermost-electron patterns | U02, U03 |
| HS-PS1-2 — construct and revise an explanation for the outcome of a simple chemical reaction from outermost electron states, periodic trends, and property patterns | U04, U08 |
| HS-PS1-3 — plan and conduct an investigation comparing bulk-scale substance structure to infer strength of electrical forces between particles | U03, U05, U06 |
| HS-PS1-4 — develop a model showing that energy released/absorbed in a chemical reaction depends on changes in total bond energy | U07 |
| HS-PS1-5 — explain effects of temperature or concentration changes on reaction rate using scientific principles and evidence | U07 |
| HS-PS1-6 — refine the design of a chemical system by specifying a condition change that increases product yield at equilibrium | U07 |
| HS-PS1-7 — use mathematical representations to support the claim that atoms, and therefore mass, are conserved in a chemical reaction | U04 |
| HS-PS1-8 — develop models of nuclear composition changes and energy release in fission, fusion, and radioactive decay (qualitative; assessment limited to alpha, beta, gamma) | U02 (enrichment strand) |
| HS-PS2-6 — communicate why molecular-level structure matters in the functioning of designed materials (candidate connection; exact wording to be re-verified at unit build) | U03 |
| HS-PS3-1 / HS-PS3-4 — energy accounting in systems; thermal-energy transfer toward uniform distribution (candidate connections for calorimetry; exact wording to be re-verified at unit build) | U07 |

Science and engineering practices run through the year: planning and
carrying out investigations (U01, U05, U07), developing and using models
(U02, U03, U07, U08), analyzing data (every unit), using mathematics
(U01, U04, U06, U07), and constructing explanations from evidence
(U02, U04, U07, U08). Crosscutting concepts of patterns (U02, U03),
cause and effect (U04, U07), systems and system models (U05, U07), and
energy and matter (U04, U07, U08) are named explicitly in unit objectives.

## 5. 36-week sequence

Five 50-minute sessions per week. A typical unit week mixes two concept
lessons, one lab or simulation session, one data/practice session, and one
review or check session; the 20 sessions of each four-week unit therefore
hold 4–6 written lessons plus investigations, reading, practice, and
review — never six lessons alone. Weeks 1–2 are diagnostic and routines;
Weeks 35–36 are final review. Each unit's fourth week ends with a
formative check and a flex session for catch-up or extension.

### Weeks 1–2 — Diagnostic and routines (flexible)

- Math-skills diagnostic: unit conversion, scientific notation, graph
  reading, proportional reasoning. Lab-safety judgment scenarios and
  notebook setup. Adult and learner agree on pacing, session routines,
  and the simulation-vs-bench decision rule for the year.

### Unit 01 — Chemical measurement: lab methods and uncertainty (Weeks 3–6)

Objectives 1, 2, 12.

- **Week 3 — Safety, SI, and unit conversion.** Lab safety contract and
  equipment tour; SI base units and prefixes (milli–kilo); multi-step
  conversions with canceling units. Practice: converting lab quantities
  (mL→L, g→kg, °C↔K).
- **Week 4 — Reading instruments; significant figures.** Meniscus,
  balance, thermometer, and ruler reading to instrument precision;
  significant-figure rules for measured vs. exact numbers; rounding in
  multi-step calculations.
- **Week 5 — Precision, accuracy, and the density lab.** Repeated
  measurements of one object; range as a simple uncertainty estimate;
  bench lab: determine the density of an unknown metal or liquid from
  mass and volume, with a written error discussion.
- **Week 6 — Lab reports and check.** Structure of a lab report
  (question, procedure, data table with units, calculation, error
  analysis, conclusion); formative check on measurement and
  conversions; flex session.

### Unit 02 — Atomic models, isotopes, and periodicity (Weeks 7–10)

Objectives 3, 4, 5, 12.

- **Week 7 — Evidence for atoms.** Dalton, Thomson (cathode-ray),
  Rutherford (gold-foil), Bohr, and the quantum-mechanical model; what
  evidence forced each revision. Timeline-modeling activity.
- **Week 8 — Electrons and the table.** Electron configurations for
  main-group elements (1–20, then selected transition metals by
  pattern); valence electrons; groups vs. periods; using the CSV
  element dataset to find group/period/block patterns (real reference
  data; atomic masses from a checked external table).
- **Week 9 — Isotopes and average atomic mass.** Isotope notation;
  weighted-average calculations from abundance data; introduction to
  nuclear vs. chemical change; qualitative models of alpha, beta,
  gamma decay and of fission vs. fusion (HS-PS1-8, enrichment level —
  no quantitative energy calculations).
- **Week 10 — Periodic trends and check.** Reactivity, ion charges, and
  bond-type predictions from table position (HS-PS1-1); formative
  check; flex session.

### Unit 03 — Chemical bonding, structure, and properties (Weeks 11–14)

Objectives 5, 6, 12.

- **Week 11 — Why atoms bond.** Ionic vs. covalent vs. metallic bonding
  from electron behavior; electronegativity difference as a classifier;
  properties predicted from bond type.
- **Week 12 — Lewis structures and shape.** Drawing Lewis structures for
  simple molecules and polyatomic ions; VSEPR for up to four electron
  domains; polar vs. nonpolar molecules.
- **Week 13 — Bonding explains bulk properties.** Investigation
  (HS-PS1-3): compare melting behavior, conductivity, and solubility of
  an ionic solid, a covalent molecular solid, and a metal; infer relative
  interparticle force strength from bulk observations.
- **Week 14 — Materials and check.** How molecular structure serves
  designed materials (candidate HS-PS2-6 connection: e.g., polymers,
  alloys, semiconductors at a qualitative level); formative check; flex.

### Unit 04 — Reactions, balancing, and stoichiometry (Weeks 15–18)

Objectives 2, 7, 12.

- **Week 15 — Reaction types and evidence.** Synthesis, decomposition,
  single- and double-replacement, combustion; evidence of chemical
  change; writing skeleton equations; safe bench observations
  (e.g., vinegar + baking soda, steel wool + vinegar).
- **Week 16 — Balancing and the mole.** Balancing by inspection with
  atom inventories; the mole as a counting unit; conversions among
  moles, mass, and particles (HS-PS1-7: atoms conserved ⇒ mass
  conserved, shown mathematically).
- **Week 17 — Stoichiometry lab.** Mole-ratio calculations from
  balanced equations; limiting reactants; percent yield; bench or
  simulation investigation measuring product mass vs. predicted mass.
- **Week 18 — Midyear checkpoint.** Cumulative problems spanning
  U01–U04 (measurement, atomic structure, bonding, stoichiometry);
  adult and learner review the year's objectives and reset pacing;
  flex session.

### Unit 05 — Gases, intermolecular forces, and phases (Weeks 19–22)

Objectives 6, 8, 12.

- **Week 19 — Kinetic molecular theory.** Particle model of gases;
  pressure, temperature, and diffusion explained by molecular motion;
  absolute temperature scale.
- **Week 20 — Gas laws.** Boyle's, Charles's, and the combined gas
  law from data; predicting gas behavior quantitatively; syringe or
  simulation investigation of pressure–volume relationships.
- **Week 21 — Intermolecular forces and phases.** Intramolecular bonds
  vs. intermolecular forces (London dispersion, dipole–dipole,
  hydrogen bonding); how IMF strength controls boiling point, vapor
  pressure, and phase changes; phase-diagram reading at a
  qualitative level.
- **Week 22 — Bulk properties investigation and check.** Investigation
  (HS-PS1-3): rank liquids by evaporation rate and boiling point, then
  infer relative IMF strength; formative check; flex session.

### Unit 06 — Solutions, concentration, and aqueous chemistry (Weeks 23–26)

Objectives 2, 9, 12.

- **Week 23 — Dissolution at the particle level.** Solute/solvent;
  "like dissolves like"; factors affecting dissolving rate; preparing
  solutions safely at the bench.
- **Week 24 — Molarity and dilution.** Calculating molarity; dilution
  equation M₁V₁ = M₂V₂; preparing a solution of stated concentration;
  PhET "Molarity" simulation as practice or alternative.
- **Week 25 — Aqueous reactions.** Solubility rules; precipitation
  reactions with net ionic equations; electrolytes vs.
  nonelectrolytes; conductivity testing (low-voltage, adult-supervised).
- **Week 26 — Check and flex.** Formative check on concentration and
  aqueous reaction types; flex session.

### Unit 07 — Thermochemistry, kinetics, and equilibrium (Weeks 27–30)

Objectives 10, 12.

- **Week 27 — Energy in reactions.** Exothermic vs. endothermic from
  bond-energy accounting (HS-PS1-4); Hess's-law cycles; calorimetry
  investigation with a simple coffee-cup calorimeter (temperature
  measurement only — no flames).
- **Week 28 — Reaction rates.** Collision theory; how temperature,
  concentration, surface area, and catalysts change rate (HS-PS1-5);
  rate investigation (e.g., effervescent tablet in varied-temperature
  water, or PhET "Reactions & Rates").
- **Week 29 — Equilibrium.** Dynamic equilibrium; Le Chatelier's
  principle applied to concentration, temperature, and pressure shifts
  (HS-PS1-6); qualitative predictions verified by simulation.
- **Week 30 — Check and flex.** Formative check spanning energy, rate,
  and equilibrium; flex session.

### Unit 08 — Acids, bases, oxidation–reduction, and chemistry capstone (Weeks 31–34)

Objectives 9, 11, 12.

- **Week 31 — Acids and bases.** Arrhenius vs. Bronsted–Lowry
  definitions; strong vs. weak; pH calculations for strong acids and
  bases; pH measurement of household solutions with test strips
  (adult-approved list only).
- **Week 32 — Titration and redox.** Titration curve described
  qualitatively (PhET "pH Scale" and acid–base sim
...[truncated 5200 chars]