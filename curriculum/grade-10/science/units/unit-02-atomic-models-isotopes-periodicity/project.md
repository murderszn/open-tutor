# Project — Predicting Properties from the Periodic Table

**Type:** Dataset and simulation investigation (no bench chemistry, no chemicals, no heat).
**Time:** Sessions 12, 14, 15, and 17 (plus homework reading). **Deliverable:** a written
prediction report (3–5 pages or equivalent) and a short presentation (Session 17).

## Question

Can you predict an unknown element's behavior from its position on the periodic table — and
how do you know when your prediction is justified rather than a guess?

## Part A — Find the patterns in real data (Session 12)

Use the repository dataset `resources/periodic_table_elements.csv` (118 elements). Name the
columns you use for every claim below. The columns include: atomic_number, symbol, name,
period, group, block, category, state_at_room_temp, protons, electrons_neutral,
max_elements_in_period, fact, google_search_url.

1. Filter the dataset by **block**. How many elements are in the s-block, the p-block, the
   d-block, and the f-block? (Count them; do not guess from the table's shape alone.)
2. Filter by **group** = 18. List the seven elements and state what they share (use the
   `category` and `state_at_room_temp` columns, plus Lesson 03's valence rule).
3. Filter by **category**. Pick one category (for example, "alkali metal" or "halogen") and
   write two sentences: what its members share in the dataset, and what Lesson 03 says is the
   electron reason for that shared behavior.
4. Note the dataset's gap, recorded in the track audit: it has **no atomic-mass column**. State
   in your report where your average-atomic-mass values come from instead (the verified table
   in the unit README and Lesson 04), and why you did not invent masses for the dataset.

**A note on honest data handling:** the dataset's values are real reference data. If a count
you get differs from a count in a textbook, check your filter first (for example, whether you
included hydrogen in the s-block count), and report the filter you used so your adult can
reproduce your count.

## Part B — Identify four mystery elements (Session 14)

The four descriptions below are **fictional practice data**, modeled on real group patterns.
They describe no real sample and must not be cited as measurements of a real element. For each
mystery element: (a) assign it to a group (and, where the evidence allows, a family name);
(b) state its valence-electron count; (c) predict its likely ion (or "forms no ion" with a
reason); (d) predict one bond type it will form and with what kind of partner; (e) give the
evidence from the description that supports each claim.

- **Mystery A:** A soft, silvery solid. It reacts vigorously with water, releasing a gas, and
  it is never found pure in nature. It forms compounds in which it carries a +1 charge.
- **Mystery B:** A colorless gas. It does not react with other substances under ordinary
  conditions. Its outer energy level is full.
- **Mystery C:** A yellow-green gas with a sharp smell. It reacts readily with metals, and in
  its compounds with metals it carries a −1 charge.
- **Mystery D:** A brittle, dull solid that does not conduct electricity well. In its compounds
  with metals it carries a −2 charge.

**Check yourself:** if your group assignment and your ion prediction disagree (for example,
group 17 but a +1 ion), one of them is wrong — re-read Lessons 03 and 06 before writing the
report.

## Part C — Prediction report and peer review (Sessions 15, 17)

Write a report with these sections:

1. **Question** — the project question, in your own words.
2. **Dataset patterns** — your Part A counts and patterns, with the columns named.
3. **Mystery identifications** — Part B answers, each with evidence.
4. **Three predictions** — choose any three elements you have *not* already analyzed in Part B
   (main-group elements only), predict for each: valence count, likely ion, and one bond type
   with a named partner element — each prediction justified from electron patterns, not from
   memory of the compound.
5. **Limitations** — two honest limits of table-based prediction (for example: the group =
   valence rule is a main-group rule; real reactivity also depends on conditions; the
   dataset lacks atomic masses). State one case where you would *not* trust a table prediction
   without further evidence.
6. **Conclusion** — one paragraph answering the project question.

In Session 15, exchange drafts with your adult (or a peer, if working in a class) and record
two pieces of feedback you received and how you addressed each. In Session 17, present your
three predictions (Part C, section 4) in five minutes or less, then submit the revised report.

## Materials

- Periodic table (print or the RSC table in the resource pack).
- Spreadsheet software or paper for filtering/counting the CSV file (the adult may pre-filter
  the file to the columns listed in Part A).
- PhET "Build an Atom" simulation (resource pack) as an optional check for Part B ions:
  build the assigned ion and confirm its charge.
- Notebook for the report draft.

## Safety and alternatives

No hazards: this is a data investigation. If the simulation or spreadsheet is unavailable,
complete all parts on paper with a printed periodic table and a printed extract of the CSV
file — no objective depends on the software.

## Rubric (20 points)

| Criterion (5 pts each) | 5 — Strong | 3 — Developing | 1 — Beginning |
|---|---|---|---|
| Dataset patterns (Part A) | Counts correct and reproducible; columns named for every claim; the missing-mass gap stated | Counts mostly correct; some columns unnamed or one count unreproducible | Counts guessed or missing; columns not named |
| Mystery identification (Part B) | All four assigned to the correct group with valence, ion, and bond predictions, each tied to evidence | Most assignments correct, but one ion/bond prediction unjustified or inconsistent | Assignments contradict the evidence or lack ion/bond predictions |
| Predictions (Part C §4) | Three main-group predictions, each justified from electron patterns (group → valence → gain/lose → ion/bond) | Predictions present but one justification missing or based on memorized compounds | Predictions without justification, or non-main-group elements used without noting the boundary |
| Communication | Report has all six sections; peer feedback recorded and visibly addressed; presentation clear | One section thin or missing; feedback recorded but not addressed | Report incomplete; no feedback record |

**Readiness signals:** a report scoring 16+ with all four mystery elements correct shows the
unit's prediction objectives are met. Below 12, or with an inconsistent group/ion pair,
reteach Lessons 03 and 06 (see `teacher-guide.md`) before the unit assessment.
