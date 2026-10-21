# Unit 02 — Atomic Models, Isotopes, and Periodicity

**Grade 10 Science (Chemistry pathway) · Weeks 7–10 · 20 sessions of ~50 minutes**

Unit 02 of [issue #47](https://github.com/murderszn/open-tutor/issues/47). Status: **validated
draft** — delivered for educator review, not merged. This unit is self-contained for one grade-10
learner; a guiding adult supervises all work. There is no bench chemistry in this unit: the
investigation is a dataset and simulation investigation, so no chemicals, heat, or glassware are
required. The adult previews every linked simulation and video before the learner opens it.

## Essential question

How can a table of elements — built from evidence about things far too small to see — let us
predict how an element we have never handled will behave?

## What the learner will be able to do

1. For any atom or ion given as a symbol, a particle count, or a name, state its numbers of
   protons, neutrons, and electrons, its mass number, its charge, and its full isotope notation
   (for example, ³⁷₁₇Cl⁻).
2. Describe the progression of atomic models — Dalton, Thomson, Rutherford (with Chadwick's
   neutron), Bohr, and the quantum-mechanical model — and explain, for each revision, the
   specific evidence that forced it.
3. Write electron configurations for main-group elements with atomic numbers 1–20 (and read
   configurations for heavier main-group elements by pattern), identify valence electrons, and
   relate valence electrons to an element's group.
4. Calculate average atomic mass from isotopic masses and abundances, and explain why the
   atomic mass printed on the periodic table is usually not a whole number.
5. Use position on the periodic table to predict, for main-group elements, relative atomic
   size, relative ionization energy and electronegativity trends, likely ion charges, and
   likely bond types — and justify each prediction from electron patterns (HS-PS1-1).
6. Model nuclear changes qualitatively — alpha decay, beta decay, gamma emission, fission,
   and fusion — and explain how a nuclear change differs from a chemical change (HS-PS1-8,
   enrichment level: qualitative models only, no energy calculations).

Objectives 1–6 above serve track objectives 3, 4, 5, and 12 of the
[grade-10 science track](../../README.md) and the practices named in
[scope-and-sequence.md](../../scope-and-sequence.md) (developing and using models, analyzing
data, using mathematics, constructing explanations from evidence). Crosscutting concept:
**patterns** — the repeating patterns of the table reflect patterns of outer electron states.

## Prerequisites

- Unit 01: SI units, significant figures, reading data tables, writing a structured lab-style
  report (question, data, calculation, conclusion) — reused in the project report.
- Grade-9 science: basic atomic structure (protons, neutrons, electrons); the idea that
  chemical reactions rearrange atoms; reading data tables and graphs.
- Grade-9 math: proportional reasoning, percentages and decimal fractions, multi-step
  arithmetic with units, interpreting simple rankings and trends from data.
- The Weeks 1–2 diagnostic (see scope-and-sequence) confirms percentage and graph-reading
  readiness; learners who need it get percentage warm-ups inside Lesson 04 rather than a
  separate remediation unit.

## Vocabulary

atom · proton · neutron · electron · nucleus · atomic number (Z) · mass number (A) ·
isotope · ion · cation · anion · isotope notation · average atomic mass (atomic weight) ·
unified atomic mass unit (u) · abundance · cathode-ray tube · gold-foil experiment ·
nuclear model · energy level (shell) · orbital · electron configuration · valence electron ·
core electron · group · period · block (s, p, d, f) · metal · nonmetal · metalloid ·
alkali metal · alkaline earth metal · halogen · noble gas · atomic radius · ionization
energy · electronegativity · reactivity · alpha particle · beta particle · gamma ray ·
fission · fusion · radioactive decay · chemical change · nuclear change

## Standards and source notes

Reference framework: Next Generation Science Standards (NGSS), high-school (9–12) band.
Codes and descriptions were re-verified 2026-10-21 against the NGSS physical-science topic
arrangement (see the resource pack for the checked pages). Descriptions below are short
paraphrases for mapping purposes, not reproductions of the standards text. **This crosswalk is
a planning reference, not a claim of state adoption, accreditation, or certification of
alignment.**

- **HS-PS1-1** — use the periodic table as a model to predict the relative properties of
  elements based on the patterns of electrons in the outermost energy level of atoms.
  Clarification: properties that can be predicted include reactivity of metals, types of bonds
  formed, numbers of bonds formed, and reactions with oxygen. Assessment boundary (applied
  throughout this unit): assessment is limited to **main-group elements**, and does not include
  a quantitative understanding of ionization energy beyond relative trends. (Lessons 03, 05,
  06; project; unit assessment.)
- **HS-PS1-8** — develop models to illustrate the changes in the composition of the nucleus
  of the atom and the energy released during the processes of fission, fusion, and radioactive
  decay. Clarification: emphasis is on simple qualitative models and on the scale of energy
  released in nuclear processes relative to other kinds of transformations. Assessment
  boundary: no quantitative calculation of energy released; radioactive decay is limited to
  **alpha, beta, and gamma** decays. (Lesson 06, enrichment strand; not the main assessment
  focus.)
- **Science and engineering practices:** SEP-2 developing and using models (Lessons 02, 03,
  06); SEP-4 analyzing and interpreting data (Lessons 04, 05; project); SEP-5 using
  mathematics and computational thinking (Lesson 04; practice Sets D and F).

Numerical values used in this unit, and their status:

- Isotope masses and abundances for worked examples are **real reference values, rounded for
  classroom use**: chlorine-35, 34.96885 u, 75.76%; chlorine-37, 36.96590 u, 24.24%
  (average 35.453 u); copper-63, 62.9296 u, 69.15%; copper-65, 64.9278 u, 30.85%
  (average 63.546 u); bromine-79, 78.9183 u, 50.69%; bromine-81, 80.9163 u, 49.31%
  (average 79.904 u); lithium-6, 6.015 u, 7.59%; lithium-7, 7.016 u, 92.41%
  (average 6.94 u); magnesium textbook example, 23.98 u at 78.70%, 24.99 u at 10.13%,
  25.98 u at 11.17% (average 24.31 u). Where a worked example uses whole-number
  (integer) masses instead — boron (10 and 11 u) and carbon (12 and 13 u) — the text says so
  explicitly, and the small difference from the printed table value is discussed as the cost
  of that approximation.
- The project's mystery elements are **fictional practice data**, labeled as such. They are
  modeled on real group patterns but are not observations of real samples and must not be
  cited as data about any real element.
- The internal dataset `resources/periodic_table_elements.csv` is real reference data
  (118 elements; columns: atomic_number, symbol, name, period, group, block, category,
  state_at_room_temp, protons, electrons_neutral, max_elements_in_period, fact,
  google_search_url). It has **no atomic-mass column** (a gap recorded in the track audit), so
  every average-atomic-mass value in this unit comes from the verified table above, not from
  that file.
- Historical dates are given as "around" dates: Dalton's atomic theory, around 1808;
  Thomson's electron, 1897; Rutherford's gold-foil experiment, 1909, with the nuclear model
  published 1911; Chadwick's neutron, 1932; Bohr's model, 1913; the quantum-mechanical model
  developed in the 1920s (Schrödinger, 1926). These are framing dates for a school timeline,
  not a scholarly history.

## 20-session pacing

Five sessions per week. Lessons are written for ~50 minutes; practice, simulation,
investigation, review, and assessment sessions fill the unit as shown — six lessons alone do
not fill twenty sessions.

| Session | Week | Activity | Success criterion |
|---|---|---|---|
| 1 | 7 | Lesson 01 — Particles, atomic number, mass number, ions | Learner writes correct notation for a given particle count |
| 2 | 7 | Guided practice Set A + PhET "Build an Atom" exploration | All Set A guided items correct; sim observations recorded |
| 3 | 7 | Lesson 02 — Evidence forces new models (gold-foil image activity) | Learner explains what each experiment changed and why |
| 4 | 7 | Model-timeline activity: build a dated model timeline with evidence cards | Each model paired with its forcing evidence |
| 5 | 7 | Reading (resource pack) + retrieval: Sessions 1–3 questions | Reading notes recorded; retrieval ≥ 80% |
| 6 | 8 | Lesson 03 — Electron configurations and valence electrons | Learner writes configurations for elements 1–20 |
| 7 | 8 | Practice Set C + PhET "Build an Atom" (orbits view) check | Configurations correct; valence identified for each |
| 8 | 8 | Lesson 04 — Isotopes and average atomic mass | Learner calculates a weighted average with units |
| 9 | 8 | Practice Set D + error-analysis task | ≥ 80% on averages; can explain one worked error |
| 10 | 8 | **Formative quiz** (`assessments/week-08_quiz.md`) + review | Gaps identified; reteach plan set with teacher guide |
| 11 | 9 | Lesson 05 — The periodic table as a map | Learner locates any main-group element by group/period/block |
| 12 | 9 | Project Part A (dataset patterns) + Practice Set E | CSV patterns recorded; trend predictions attempted |
| 13 | 9 | Lesson 06 — Periodic trends, predictions, and nuclear change | Learner justifies a prediction from electron patterns |
| 14 | 9 | Project Part B — mystery-element identification | Each mystery assigned a group with evidence |
| 15 | 9 | Project Part C — prediction report + peer review | Draft report with all sections; peer feedback recorded |
| 16 | 10 | Unit review: mixed practice (Set F) + reading | Learner explains their two weakest objectives aloud |
| 17 | 10 | Project presentations (short) + revision | Revised report submitted |
| 18 | 10 | **Unit assessment** (`assessments/unit-assessment.md`) | Completed under adult supervision |
| 19 | 10 | Flex: catch-up, extension, or PhET "Isotopes" exploration via search link | Open items closed; extension or sim reflection done |
| 20 | 10 | Flex: nuclear-enrichment discussion (Lesson 06 extension) + unit reflection | Learner states one nuclear-vs-chemical distinction in own words |

Retrieval practice is built into Sessions 5, 9, 12, and 16 (each opens with 3 questions from an
earlier lesson). The adult gives feedback on every written product before the next session
begins.

## Files in this unit

- `README.md` — this overview (learner + adult).
- `lessons/` — six fully written lessons (learner-facing).
- `practice.md` — Practice Sets A–F with guided and independent items (learner-facing;
  solutions in `answer-key.md`).
- `project.md` — the periodic-trends investigation: dataset work, mystery elements,
  prediction report, rubric (learner-facing).
- `resource-pack.md` — verified references, queries, and task mapping (learner + adult).
- `assessments/week-08_quiz.md` — formative quiz after Lesson 04 (25 pts).
- `assessments/unit-assessment.md` — culminating assessment (50 pts).
- `teacher-guide.md` — per-lesson notes, misconceptions, reteaching (adult only).
- `answer-key.md` — independently solved solutions for every item (adult only).
- `assets/` — `gold-foil-experiment.png` (generated illustration),
  `electron-shells-sodium-chlorine.svg` (exact diagram), and `assets/README.md` (generation
  record, alt text, captions).

## Safety

No bench chemistry, heat, glassware, or chemicals are used in this unit. The investigation
uses a spreadsheet/dataset and a browser simulation. The adult previews the PhET simulation
and any video before the learner opens it, and confirms the device's browser has no account
sign-in requirement for the linked simulation. If the simulation is unavailable, the
text-only alternatives in Lessons 02 and 03 and the dataset tasks in the project carry the
same objectives without it.
