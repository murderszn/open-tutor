# Lesson 04 — Isotopes and Average Atomic Mass

**Goal:** By the end of this lesson you can calculate average atomic mass from isotopic masses
and abundances, and explain why the periodic table's atomic mass is usually not a whole number.

**Time:** ~50 minutes. **Materials:** calculator, periodic table, Practice Set D. **Warm-up
(percentage check):** convert 75.76% to a decimal (0.7576) and check that 75.76 + 24.24 = 100.

## Readiness check (5 minutes)

1. A class has 20 learners: 15 score 10 points and 5 score 20 points. What is the class average
   — 15, or something else? (Compute it: (15 × 10 + 5 × 20) ÷ 20 = 12.5. The average is pulled
   toward the larger group.)
2. Chlorine's table mass is 35.45. Why is that clue that chlorine has more than one isotope?

## Teaching

### The average that is not an average atom

No single chlorine atom weighs 35.45 u. Individual chlorine atoms weigh about 35 u or about
37 u — they are the isotopes chlorine-35 and chlorine-37. The table value is a **weighted
average**: each isotope's mass multiplied by its share (abundance) of all natural chlorine,
added together. The more abundant isotope pulls the average closer to itself — exactly like
the class average above.

The formula:

> average atomic mass = Σ (isotopic mass × fractional abundance)

where fractional abundance = percentage ÷ 100, and the fractions must add to 1.00. Report the
result in u (unified atomic mass units), rounded sensibly: with the data given in this unit,
two decimal places is appropriate, matching the table values quoted.

### Worked example 1 — boron with whole-number masses

*Boron has two isotopes: boron-10 (mass 10 u, abundance 19.9%) and boron-11 (mass 11 u,
abundance 80.1%). Calculate boron's average atomic mass.*

Step 1 — Convert percentages: 19.9% → 0.199; 80.1% → 0.801. Check: 0.199 + 0.801 = 1.000 ✓.
Step 2 — Multiply and add: (10 × 0.199) + (11 × 0.801) = 1.99 + 8.811 = 10.801 u.
Step 3 — Round to two decimals: **10.80 u**, which agrees with the printed table value of
about 10.81 u (the tiny difference comes from using whole-number masses instead of the exact
isotopic masses — see the note below).
Step 4 — Sanity check: the answer lies between 10 and 11, closer to 11 because boron-11 is far
more abundant ✓. An answer outside the range of the isotope masses is always wrong.

### Worked example 2 — chlorine with exact masses

*Chlorine-35 has mass 34.96885 u and abundance 75.76%; chlorine-37 has mass 36.96590 u and
abundance 24.24%. Calculate chlorine's average atomic mass.*

Step 1 — Fractions: 0.7576 and 0.2424 (sum 1.0000 ✓).
Step 2 — Contributions: 34.96885 × 0.7576 = 26.4924 u; 36.96590 × 0.2424 = 8.9605 u.
Step 3 — Sum: 26.4924 + 8.9605 = **35.4529 u → 35.45 u**, matching the periodic table.
Step 4 — Sanity check: between 35 and 37, much closer to 35 ✓.

Compare the two examples. With whole-number masses, chlorine would give (35 × 0.7576) +
(37 × 0.2424) = 26.5160 + 8.9688 = 35.4848 u → 35.48 u. That is close to, but not equal to,
the table value. **Whole-number masses are an approximation.** They are fine for learning the
method and for estimating, but the table's value comes from exact isotopic masses. Whenever
this unit gives exact masses, use them; whenever it gives whole numbers, say so and expect a
small difference.

### Why the table value is the best single number — and its limit

The weighted average is the mass you should use for a *large sample* of the element (for
example, in mole calculations in Unit 04), because a real sample contains the isotopes in
their natural proportions. It is not the mass of any one atom, and it does not mean an atom can
have a fractional number of neutrons. The average of 12.01 for carbon does not mean a carbon
atom has 6.01 neutrons; it means a huge pile of carbon atoms averages out to that mass.

## Guided practice

1. Carbon: carbon-12 (12 u, 98.93%) and carbon-13 (13 u, 1.07%). Calculate the average.
   [Fractions 0.9893, 0.0107. Expect about 12.01 u.]
2. Copper (exact masses): copper-63, 62.9296 u, 69.15%; copper-65, 64.9278 u, 30.85%. Calculate
   the average. [Expect about 63.55 u.]
3. A student calculates a chlorine average of 38.2 u and says it "seems fine." Give two reasons
   it cannot be right. [It lies outside the 35–37 range; it is not between the isotope masses.]

## Independent practice

Complete Practice Set D (in `practice.md`). Then answer: neon's table mass is about 20.18 u.
Neon-20 is by far the most abundant isotope. Without calculating, explain why the table value
is just above 20 rather than, say, 21 — and what that tells you about the other neon isotopes'
abundances.

## Exit check

Without looking back: write the weighted-average formula in words, and state the two checks
every answer must pass (fractions sum to 1; answer lies between the smallest and largest
isotope mass).

## Supports and extensions

- **Reading/language access:** write each calculation as a table with columns (isotope, mass,
  fraction, contribution) before adding — the layout prevents the commonest error, forgetting
  to convert percentages to decimals.
- **Alternate response mode:** estimate first ("closer to which isotope, and roughly how far?")
  and compare the estimate with the calculated answer; a mismatch means re-checking, not
  re-guessing.
- **Extension:** given chlorine's exact average (35.453 u) and its two exact isotopic masses,
  solve backwards for the abundance of chlorine-35 (set up: 34.96885x + 36.96590(1 − x) =
  35.453). You should get x ≈ 0.758, or 75.8%.

## Teacher note

Likely misconceptions: (1) using percentages directly (75.76 instead of 0.7576) — the
table-layout support above catches this; (2) taking a simple (unweighted) mean of the isotope
masses; (3) believing 35.45 u is a real atom's mass — repeat the "no single atom" point and
the class-average analogy. Answer-key reference: `answer-key.md`, Set D.
