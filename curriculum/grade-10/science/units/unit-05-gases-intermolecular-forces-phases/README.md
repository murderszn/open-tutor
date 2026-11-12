# Unit 05 — Gases, Intermolecular Forces, and Phases

**Grade 10 Science (Chemistry pathway) · Weeks 19–22 · 20 sessions of ~50 minutes**

Unit 05 of [issue #47](https://github.com/murderszn/open-tutor/issues/47). Status: **validated
draft** — delivered for educator review, not merged. This unit is self-contained for one grade-10
learner; a guiding adult supervises all work. The bench investigation (Lesson 06 and the
project) uses only small drops of water, ethanol, and acetone-based nail polish remover in a
well-ventilated room with goggles — no flames, no heating, no hexane, no ether at the bench.
Hexane and diethyl ether appear only as reference data in tables. The adult previews every
linked simulation and video before the learner opens it.

## Essential question

Why does a gas fill any container it is given, while a liquid keeps its volume — and why do
some liquids vanish into the air in minutes while others sit for hours?

## What the learner will be able to do

1. Explain gas pressure, temperature, volume, and diffusion with kinetic molecular theory —
   including why gas-law temperatures must be in kelvin — and predict what happens when one
   variable changes while the others are held fixed.
2. Apply Boyle's law, Charles's law, Gay-Lussac's law, and the combined gas law to predict gas
   behavior, showing the set-up, the unit conversions, and a reasonableness check.
3. Use the ideal gas law (PV = nRT) and the molar volume at STP (about 22.4 L/mol at 0 °C and
   1 atm) to convert among pressure, volume, temperature, moles, mass, and particle counts.
4. Distinguish intramolecular bonds (the bonds *inside* a molecule) from intermolecular forces
   (the attractions *between* molecules); rank London dispersion, dipole–dipole, and hydrogen
   bonding; and predict which substance has stronger forces from its structure.
5. Explain how intermolecular-force strength controls boiling point, vapor pressure, and
   evaporation rate, and use the verified data table below to rank real liquids and defend
   the ranking with evidence.
6. Describe phase changes with a heating curve and read a phase diagram qualitatively
   (melting, boiling, sublimation, triple point, critical point); and plan and conduct the
   HS-PS1-3 bulk-properties investigation, inferring relative force strength from bulk
   observations.

Objectives 1–6 above serve track objectives 6, 8, and 12 of the
[grade-10 science track](../../README.md) and the practices named in
[scope-and-sequence.md](../../scope-and-sequence.md) (planning and carrying out investigations,
developing and using models, analyzing data, using mathematics, constructing explanations from
evidence). Crosscutting concepts: **systems and system models** (a gas as a system of moving
particles) and **patterns** (boiling point and vapor pressure rise and fall together across a
series of liquids).

## Prerequisites

- Unit 01: SI units and prefixes, significant figures, data tables with units, structured
  lab-style reports — reused in the project report.
- Unit 02: atomic structure and the periodic table (molar mass from U02's table work is needed
  for mole–volume conversions in Lesson 03).
- Unit 03: intramolecular bonding — ionic, covalent, polar vs. nonpolar molecules (Lesson 04
  builds directly on polarity: a learner who cannot yet tell a polar molecule from a nonpolar
  one should re-do Unit 03, Lesson 02 before starting Lesson 04).
- Unit 04: the mole, molar mass, and balanced equations (mole ratios are reused for
  gas-volume stoichiometry in Lesson 03).
- Grade-9 math: proportional reasoning, rearranging formulas, reading graphs, and working with
  ratios; the gas laws are proportional relationships, and every calculation in Lesson 03 is
  a proportion with units attached.

## Vocabulary

kinetic molecular theory (KMT) · ideal gas · pressure · atmosphere (atm) · pascal (Pa) ·
kilopascal (kPa) · millimeter of mercury (mmHg, torr) · kelvin (K) · absolute zero ·
diffusion · effusion · Boyle's law · Charles's law · Gay-Lussac's law · combined gas law ·
ideal gas law · gas constant (R) · STP (standard temperature and pressure) · molar volume ·
intramolecular bond · intermolecular force (IMF) · London dispersion force · dipole–dipole
force · hydrogen bond · polar molecule · nonpolar molecule · polarizability · vapor pressure ·
boiling point · normal boiling point · evaporation · condensation · melting point · freezing
point · sublimation · deposition · heat of fusion · heat of vaporization · heating curve ·
phase diagram · triple point · critical point · surface tension · viscosity

## Standards and source notes

Reference framework: Next Generation Science Standards (NGSS), high-school (9–12) band.
Codes and descriptions were re-verified 2026-11-12 against the California Department of
Education's NGSS pages and the NGSS evidence statements. Descriptions below are short
paraphrases for mapping purposes, not reproductions of the standards text. **This crosswalk is
a planning reference, not a claim of state adoption, accreditation, or certification of
alignment.**

- **HS-PS1-3** — plan and conduct an investigation to gather evidence to compare the structure
  of substances at the bulk scale to infer the strength of electrical forces between
  particles. Clarification: emphasis is on understanding the *strengths* of forces between
  particles, not on naming specific intermolecular forces; examples of bulk properties include
  melting point, boiling point, vapor pressure, and surface tension. Assessment boundary:
  assessment does not include Raoult's law calculations of vapor pressure — this unit never
  asks for them. (Lessons 04, 05, 06; project; unit assessment.) Note: this unit *does* teach
  the names London dispersion, dipole–dipole, and hydrogen bonding, because the track's
  scope-and-sequence and the chemistry content require them; the standard's clarification
  governs what the investigation must *infer* (relative strength from bulk evidence), not
  what vocabulary the lessons may teach.
- **HS-PS1-1** (supporting) — periodic-table patterns predict relative properties from
  outermost-electron patterns; used in Lesson 04 when polarity and IMF strength are predicted
  from structure.
- **Gas laws and the ideal gas law** are foundational chemistry content, not a separate NGSS
  performance expectation at this band. They are taught here because kinetic molecular theory
  (PS1.A: structure and properties of matter) explains them, and because track objective 8
  requires them. The unit never claims an NGSS code for the gas laws themselves.
- **Science and engineering practices:** SEP-3 planning and carrying out investigations
  (Lesson 06; project); SEP-2 developing and using models (Lessons 01, 02, 05); SEP-4
  analyzing and interpreting data (Lessons 03, 06; project); SEP-5 using mathematics and
  computational thinking (Lesson 03; Practice Sets B and C).

Numerical values used in this unit, and their status:

- **Vapor pressures at 25 °C and normal boiling points** (NIST Chemistry WebBook Antoine-equation
  fits, checked 2026-11-12): water 23.8 mmHg, 100 °C; ethanol 59.0 mmHg, 78.3 °C; acetone
  229.5 mmHg, 56.3 °C; n-hexane 151.3 mmHg, 68.7 °C; diethyl ether about 520 mmHg,
  34.6 °C. Values are rounded to one decimal place or to three significant figures as shown.
  Hexane and ether are reference data only — never used at the bench in this unit.
- **Boiling points used for comparison** (rounded reference values at 1 atm): hydrogen sulfide
  (H₂S) about −60 °C; methane (CH₄) about −162 °C; ammonia (NH₃) about −33 °C. These are
  rounded from standard reference values and are labeled as such wherever they appear.
- **Heating-curve values for water** (standard textbook values, stated as given constants in
  Lesson 05): specific heat of ice 2.09 J/g·°C, liquid water 4.18 J/g·°C, steam
  2.01 J/g·°C; heat of fusion 334 J/g; heat of vaporization 2,260 J/g. The worked total
  (about 309 kJ to take 100 g of ice at −20 °C to steam at 120 °C) is computed from these
  constants in the lesson and re-solved in the answer key.
- **Phase-diagram points for water** (rounded reference values): triple point 0.01 °C at
  0.006 atm; critical point 374 °C at 218 atm. Carbon dioxide: triple point −56.6 °C at
  5.11 atm; dry ice sublimes at −78.5 °C at 1 atm. Labeled as rounded reference values.
- **Gas constant:** R = 0.08206 L·atm/(mol·K) (used with pressure in atm and volume in liters);
  R = 8.314 J/(mol·K) is named but not used for calculations in this unit.
- **STP** in this unit means 0 °C (273 K) and 1 atm, the definition used by most high-school
  chemistry courses; at STP one mole of an ideal gas occupies about 22.4 L. (IUPAC's newer
  STP definition uses 100 kPa and gives 22.7 L; the unit names the difference so a learner
  who meets the other value is not confused.)
- The project's evaporation measurements are **real measurements the learner makes**; the
  sample dataset in the project is labeled **fictional practice data** and must not be cited
  as an observation.

## 20-session pacing

Five sessions per week. Lessons are written for ~50 minutes; practice, simulation,
investigation, review, and assessment sessions fill the unit as shown — six lessons alone do
not fill twenty sessions.

| Session | Week | Activity | Success criterion |
|---|---|---|---|
| 1 | 19 | Lesson 01 — Kinetic molecular theory (image activity) | Learner states the five KMT postulates and critiques the image |
| 2 | 19 | Practice Set A + PhET "States of Matter" exploration | Set A complete; sim observations recorded |
| 3 | 19 | Lesson 02 — Pressure, temperature, and diffusion | Learner explains pressure as collisions and predicts diffusion order |
| 4 | 19 | Practice Set B (first half) + reading (resource pack) | Gas-law set-ups correct; reading notes recorded |
| 5 | 19 | Retrieval: Sessions 1–3 questions + PhET "Gas Properties" exploration | Retrieval ≥ 80%; sim variables identified |
| 6 | 20 | Lesson 03 — Boyle's, Charles's, Gay-Lussac's, combined gas law | Learner solves one problem per law with units |
| 7 | 20 | Practice Set B (second half) + Set C (ideal gas law, STP) | Combined-law and PV = nRT set-ups correct |
| 8 | 20 | Syringe or simulation investigation: pressure–volume data | P×V constant within measurement error; graph drawn |
| 9 | 20 | **Formative quiz** (`assessments/week-20_quiz.md`) + review | Gaps identified; reteach plan set with teacher guide |
| 10 | 20 | Flex: catch-up or extension (Graham's law) | Open items closed; extension or sim reflection done |
| 11 | 21 | Lesson 04 — Intermolecular forces | Learner ranks IMF types and justifies from structure |
| 12 | 21 | Practice Set D + vapor-pressure data table work | Rankings match the verified data; reasoning written |
| 13 | 21 | Lesson 05 — Phases, heating curves, phase diagrams | Learner reads a heating curve and a phase diagram |
| 14 | 21 | Practice Set E + heating-curve SVG work | Curve segments labeled; energy total reproduced |
| 15 | 21 | Project Part A — plan the evaporation investigation | Plan approved by adult before any bench work |
| 16 | 22 | Lesson 06 — Bulk-properties investigation (HS-PS1-3) | Data table complete; first inference drafted |
| 17 | 22 | Project Parts B–C — data, graph, conclusion, report | Draft report with all sections; peer/adult feedback recorded |
| 18 | 22 | Unit review: mixed practice (Set F) + reading | Learner explains their two weakest objectives aloud |
| 19 | 22 | **Unit assessment** (`assessments/unit-assessment.md`) | Completed under adult supervision |
| 20 | 22 | Flex: project presentations + unit reflection | Learner states one KMT-to-bulk-property chain in own words |

Retrieval practice is built into Sessions 5, 12, 14, and 18 (each opens with 3 questions from
an earlier lesson). The adult gives feedback on every written product before the next session
begins.

## Files in this unit

- `README.md` — this overview (learner + adult).
- `lessons/` — six fully written lessons (learner-facing).
- `practice.md` — Practice Sets A–F with guided and independent items (learner-facing;
  solutions in `answer-key.md`).
- `project.md` — the evaporation-rate investigation: plan, data, graph, report, rubric
  (learner-facing).
- `resource-pack.md` — verified references, queries, and task mapping (learner + adult).
- `assessments/week-20_quiz.md` — formative quiz after Lesson 03 (25 pts).
- `assessments/unit-assessment.md` — culminating assessment (50 pts).
- `teacher-guide.md` — per-lesson notes, misconceptions, reteaching (adult only).
- `answer-key.md` — independently solved solutions for every item (adult only).
- `assets/` — `gas-particles-cool-hot.png` (generated illustration),
  `heating-curve-water.svg` (exact heating-curve diagram), and `assets/README.md` (generation
  record, alt text, captions).

## Safety

The only bench work is the Lesson 06 / project evaporation investigation: three small drops
(about 0.5 mL each) of water, ethanol, and acetone-based nail polish remover on watch glasses
or ceramic tiles, at room temperature, in a well-ventilated room, with safety goggles on and
no flames, heat, or sparks anywhere nearby. The adult dispenses the acetone; the learner never
handles the bottle. Ethanol and acetone are flammable — keep them away from stoves, candles,
and heaters, and cap the bottles immediately after use. **Never** use hexane, diethyl ether,
or any other solvent at the bench; they appear in this unit only as reference data. If
ventilation is poor, if goggles are unavailable, or if the adult is unsure about any step, use
the PhET "States of Matter" simulation and the provided practice dataset instead — the
objectives are identical. All other work is paper, dataset, and simulation work with no
chemicals, heat, or glassware.
