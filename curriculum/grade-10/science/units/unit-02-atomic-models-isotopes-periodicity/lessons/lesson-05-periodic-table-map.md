# Lesson 05 — The Periodic Table as a Map

**Goal:** By the end of this lesson you can locate any main-group element by group, period,
and block, classify it as metal, nonmetal, or metalloid, and explain why the table is arranged
the way it is.

**Time:** ~50 minutes. **Materials:** periodic table, the internal dataset file
`resources/periodic_table_elements.csv` (or a printed extract), Practice Set E.

## Readiness check (5 minutes)

1. Sodium (group 1) and potassium (group 1) both react violently with water. Chlorine (group
   17) and bromine (group 17) are both reactive, colored, sharp-smelling elements. What do
   members of a group share that could explain this?
2. Find hydrogen on your table. Why is its position sometimes drawn twice (above group 1 and
   above group 17)? (There is no single perfect spot for it — a good first sign that the table
   is a model, not a law of nature.)

## Teaching

### Rows, columns, blocks

- A **period** is a horizontal row. The period number equals the number of occupied energy
  levels in the atom's ground state: sodium (2, 8, 1) is in period 3 because its electrons
  reach level 3. Across a period, protons are added one by one and electrons fill the same
  outer level.
- A **group** (also called a family) is a vertical column. For main-group elements, the group
  number tells you the valence-electron count (Lesson 03): group 1 → 1, group 2 → 2,
  groups 13–18 → 3–8. Down a group, each step adds a new energy level, so atoms get larger
  and their outer electrons sit farther from the nucleus.
- A **block** names which subshell is filling: the **s-block** (groups 1–2, and helium by
  its 1s² configuration), the **p-block** (groups 13–18), the **d-block** (transition
  metals), the **f-block** (lanthanides and actinides, usually drawn below the table). One
  convention note: this unit's dataset file lists helium's block as "p" because helium sits in
  group 18, even though its electrons fill the s subshell. Either placement is a table
  convention; assessments in this unit use group and period for helium, never its block.

### Metals, nonmetals, metalloids

Draw a staircase from boron down to polonium on your table. To its left (plus hydrogen, the
odd one out) sit the **metals**: shiny, good conductors of heat and electricity, malleable,
and tending to *lose* electrons to form positive ions. To the right sit the **nonmetals**:
mostly dull, poor conductors, brittle as solids, tending to *gain* electrons to form negative
ions (or share them). On the staircase itself sit the **metalloids** (boron, silicon,
germanium, arsenic, antimony, tellurium, and sometimes polonium/astatine by some tables):
elements with intermediate properties, notably the semiconductors that make modern
electronics possible. Metalloid membership varies slightly between tables — if your table and
this lesson disagree on one borderline element, that is a table-convention difference, not an
error in your reasoning.

Named main-group families worth knowing:

- **Group 1, alkali metals** (lithium, sodium, potassium…): 1 valence electron, very reactive
  metals that form +1 ions. Never found pure in nature — they react too readily.
- **Group 2, alkaline earth metals** (beryllium, magnesium, calcium…): 2 valence electrons,
  reactive metals that form +2 ions.
- **Group 17, halogens** (fluorine, chlorine, bromine, iodine): 7 valence electrons, reactive
  nonmetals that form −1 ions.
- **Group 18, noble gases** (helium, neon, argon…): full outer levels (8 valence electrons,
  except helium with 2), famously unreactive.

### Worked example 1 — locating an element three ways

*Locate selenium (Se) by group, period, and block, and classify it.*

Selenium is in group 16, period 4. Its configuration ends in 4s²4p⁴, so the p subshell is
filling: **p-block**. It sits right of the staircase, so it is a **nonmetal**, with 6 valence
electrons. Prediction preview (Lesson 06): it will tend to gain 2 electrons (Se²⁻) and to form
covalent bonds with other nonmetals.

### Worked example 2 — reading the dataset

*The file `resources/periodic_table_elements.csv` lists 118 elements with columns including
atomic_number, symbol, name, period, group, block, category, and state_at_room_temp. Use it to
answer: how many elements are in group 18, and what do they have in common?*

Filter the rows where group = 18: helium, neon, argon, krypton, xenon, radon, oganesson —
seven elements. Their shared pattern: full outer levels (the dataset's `category` column calls
them noble gases). Six are gases at room temperature in the dataset; oganesson's state is
listed as "unknown" (it is synthetic and its bulk state has not been established) — so the
honest statement is "noble gases, gases at room temperature except oganesson, whose state is
unknown in this dataset." The dataset gives you the *pattern*;
Lesson 03 gives you the *reason* (valence electrons). In the project you will do exactly this
kind of filtering for blocks and categories, and you must name the columns you used.

## Guided practice

1. Locate calcium: group, period, block, category. [Group 2, period 4, s-block, alkaline earth
   metal.]
2. Which is the metalloid: silicon, sulfur, or sodium? Explain using the staircase.
   [Silicon — it sits on the staircase; sulfur is a nonmetal, sodium a metal.]
3. An unknown element is in group 17, period 4. Name it, state its valence count, and predict
   its likely ion. [Bromine; 7 valence electrons; Br⁻.]

## Independent practice

Complete the first half of Practice Set E (items E1–E3) in `practice.md`. Then answer: why
does the periodic table put elements with the same valence count in the same column, rather
than grouping them by, say, color or density? Give one reason that connects to Lesson 03.

## Exit check

Without looking back: an element has configuration 1s²2s²2p⁶3s²3p¹. Give its group, period,
block, and category (metal/nonmetal/metalloid), each with one reason.

## Supports and extensions

- **Reading/language access:** color-code a printed table (one color per block, one symbol per
  family) before answering any location question.
- **Alternate response mode:** answer location questions by pointing to the table and reading
  the row/column numbers aloud, then writing the answer.
- **Extension:** investigate why hydrogen is hard to place (it can lose an electron like a
  group-1 metal or gain one like a halogen) and write a paragraph arguing for one placement —
  then a sentence conceding the other side's best point.

## Teacher note

Likely misconceptions: (1) "period = number of electrons" — it is the number of occupied
*levels*; (2) group numbers 3–12 (transition metals) also counting valence simply — this unit
restricts the group = valence rule to main groups, and the teacher guide states this boundary
explicitly; (3) metalloids as a sharp category — note table variation honestly. Answer-key
reference: `answer-key.md`, Set E.
