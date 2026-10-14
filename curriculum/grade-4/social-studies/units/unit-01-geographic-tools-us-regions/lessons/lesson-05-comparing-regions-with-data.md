# Lesson 05 — Comparing Regions with Data

**Time:** two sessions, about 35 minutes each · **Materials:** the
`us_states.csv` dataset (adult side — printed rows or a screen); a U.S.
map; paper and pencil; the learner's four region profiles from Lesson 03

**Goal (read to the learner):** Today you will learn to read a real data
table about the states and use it to compare places. By the end, you will
explain what "approximate" means, compare two states by area, population,
and crowdedness, and start your five-states investigation.

**Readiness check:** Adult: "Which is bigger — Texas or Rhode Island?
How could you prove it without visiting either one?" Accept any answer;
today's lesson gives the tool: the dataset.

## Teaching (adult reads and models)

A **dataset** is a table of facts you can sort, compare, and question.
Our dataset is `resources/us_states.csv` — one row per state. The columns
we use today:

- `capital` — the state's capital city.
- `population_approx` — how many people live there. **Approx** means
  *approximate*: rounded, close to the real number, not exact. Texas
  says 29,145,000 — that is a rounded estimate, and it changes every
  year as people are born, move, and pass away.
- `area_sq_mi` — the state's land area in square miles.
- `population_density_per_sq_mi` — how crowded: people per square mile.
  Rhode Island's 710.0 means about 710 people share each square mile on
  average. Alaska's 1.1 means about one person per square mile.
- `statehood_year` — the year it became a state.
- `state_fact` — one interesting fact (check it before you quote it).

Rule one of data work: **name the column you used.** "Texas is bigger
than Florida" is a claim; "Texas's `area_sq_mi` is 268,596 and Florida's
is 65,758" is a claim with data evidence.

**Worked example 1 — comparing two states:**

> Adult reads the rows: "Texas: population_approx 29,145,000,
> area_sq_mi 268,596, density 108.5. Florida: population_approx
> 21,538,000, area_sq_mi 65,758, density 327.5. Comparison: Texas has
> more people (29.1M > 21.5M) and much more land (268,596 > 65,758 sq
> mi) — but Florida is more crowded (327.5 > 108.5 people per square
> mile). Bigger land does not always mean more crowded. Steps: (1) read
> both rows, (2) compare column by column, (3) say what the numbers
> mean in words."

**Worked example 2 — most crowded, and what "approx" means:**

> Adult: "Which is more crowded — Alaska or Rhode Island? Alaska's
> density is 1.1 people per square mile; Rhode Island's is 710.0. Rhode
> Island is far more crowded, even though Alaska's area (665,384 sq mi)
> dwarfs Rhode Island's (1,545 sq mi). Now 'approx': Alaska's
> population_approx is 733,000. That does not mean exactly 733,000
> people — it means *about* that many, rounded. If someone moved to
> Alaska tomorrow, the real number changes but the rounded figure stays
> useful. Always write 'about' with approximate numbers."

Key idea to say plainly: **A dataset lets you compare places you have
never visited. Read the row, name the column, compare column by column —
and remember that approximate numbers are rounded: say "about."**

## Guided practice (adult leads, learner decides)

1. "Find California's row. Read its `capital`, `population_approx`, and
   `area_sq_mi` out loud." *(Sacramento; 39,538,000; 163,695)*
2. "Which has more people — California or New York? Name the column and
   the two numbers." *(California: 39,538,000 > 20,201,000)*
3. "Which is more crowded — Montana or Illinois? What do the density
   numbers tell you?" *(Illinois, 221.2 vs. 7.4 — Illinois is much more
   crowded)*
4. "Alaska's population_approx is 733,000. If 500 babies were born in
   Alaska tomorrow, would the rounded number change? Why is it still
   useful?" *(no — 733,000 rounded stays about right; rounded numbers
   are useful for comparing big differences)*
5. "Both Texas and Florida are in the South region. Does the data show
   they are identical? Give one similarity and one difference."
   *(similarity: both large-population Southern states; difference:
   Texas has ~4× the land; Florida is ~3× as crowded)*
6. Error-analysis: "A friend says, 'Montana must have more people than
   Rhode Island because it is so much bigger.' Use the data to answer."
   *(area ≠ people: Montana 1,084,000 people on 147,040 sq mi vs. Rhode
   Island 1,097,000 on 1,545 sq mi — nearly the same people, hugely
   different land)*

## Independent practice

- The learner compares two adult-chosen states (different regions) by
  area, population, and density, writing the three comparisons as full
  sentences with the numbers.
- The learner writes a 2–3 sentence explanation of "approximate" in
  their own words, using one dataset number as the example.
- The learner picks the dataset's `state_fact` for one state and writes
  whether the fact connects to its region's environment (Lesson 03
  profiles help).

## Application

The learner **launches the project**: picks 5 states never visited
(spanning at least two regions — see [project.md](../project.md)),
copies each row's six columns into a comparison table, and writes the
first "biggest / most people / most crowded / oldest statehood" answers
from the kept
[Five States report](../../../assignments/creed-five-states-report.md)
template. The adult checks the table for copied-vs.-read errors before
Week 6, S3.

## Exit check

1. What does `population_approx` mean, and why does it say "approx"?
   *(the approximate, rounded number of people; real counts change, so
   the figure is rounded, not exact)*
2. Which is larger by area — Washington or Hawaii? By about how much?
   *(Washington: 71,298 sq mi vs. Hawaii: 10,932 sq mi — about 60,000
   sq mi larger; accept "about six times as big")*
3. Name one thing the dataset can prove and one thing it cannot.
   *(can: which state is more crowded; cannot: what it feels like to
   live there, or anything not in the columns)*

## Supports

- **Reading access:** the adult reads all rows aloud; the learner works
  from printed row cards for the two comparison states.
- **Alternate response mode:** comparisons may be spoken or built as a
  two-column chart instead of sentences.
- **Math support:** the adult handles subtraction for "by how much";
  the learner decides which numbers to compare and what they mean.

## Extension

The learner computes which of their two comparison states is "older"
by statehood year and writes one sentence on whether older states are
always more crowded (check with the density column — they are not).

## Teacher note — likely misconceptions

- Learners treat rounded numbers as exact ("Texas has EXACTLY
  29,145,000 people"). Keep the word "about" attached to every
  `population_approx` reading until it is automatic.
- "Bigger state = more people" is the stickiest error. The
  Montana/Rhode Island and Alaska/Rhode Island pairs exist precisely to
  break it — area and population are different columns.
- Dataset values are snapshots, not eternal truths. If the learner
  quotes a number months later, re-check the CSV. (Answer key:
  `answer-key.md`, Lesson 05 — all numbers verified against
  `us_states.csv` on main, 2026-10-11.)
