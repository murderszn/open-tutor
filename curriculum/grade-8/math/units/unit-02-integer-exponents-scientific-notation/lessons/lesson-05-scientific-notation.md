# Lesson 05 — Scientific Notation

**Student goal:** I can write any number in scientific notation, convert
between scientific and decimal forms, and estimate how many times larger
one quantity is than another.
**Time:** ~45 minutes · **Unit:** [U02](../README.md) · **Session 9 of 16**

## Materials

- Notebook, pencil, calculator (for checking only)
- The generated poster
  [`assets/powers-of-ten-ladder.webp`](../assets/powers-of-ten-ladder.webp)
  (AI illustration — rung placements are illustrative; measured values come
  from the table in the activity, not the picture)

## Readiness check (5 minutes)

Write 10⁶ and 10⁻⁶ as decimals. (Expected: 1,000,000; 0.000001.) Then ask:
"Which kind of exponent — positive or negative — handles big numbers?
Small numbers?" If negative exponents are shaky, re-run the Lesson 02
dividing-down pattern.

## Teaching

Scientists, engineers, and calculators face numbers like 93,000,000
(Earth–Sun distance in miles) and 0.0000003 (a bacterium's width in
meters). Writing every zero is slow and error-prone. **Scientific
notation** splits a number into two parts: a *coefficient* (a number
from 1 up to, but not including, 10 — the "shape") and a *power of ten*
(the "size").

> **Scientific notation:** a × 10ⁿ, where 1 ≤ a < 10 and n is an integer.

93,000,000 = 9.3 × 10⁷. The 9.3 keeps the significant digits; the 10⁷
says "this big." 0.0000003 = 3 × 10⁻⁷ — the negative exponent says
"this small."

**Converting decimal → scientific:** move the decimal point until one
nonzero digit stands before it; the exponent counts the jumps (positive
if you moved left, negative if you moved right).

- 45,200 → 4.52 × 10⁴ (4 jumps left)
- 0.0081 → 8.1 × 10⁻³ (3 jumps right)

**Converting scientific → decimal:** move the point the exponent's
number of jumps (right for positive, left for negative), filling zeros.

- 6.2 × 10⁵ = 620,000
- 6.2 × 10⁻⁵ = 0.000062

**Estimating and comparing (8.EE.A.3).** The power of ten *is* the
magnitude. To compare two quantities, write each as a single digit times
a power of 10 and compare exponents:

U.S. population ≈ 3.4 × 10⁸ (about 340 million); world population ≈
8 × 10⁹ (about 8 billion). Ratio: (8 × 10⁹) ÷ (3.4 × 10⁸) ≈ 2.35 × 10¹
≈ 23.5 — the world's population is more than 20 times the U.S.
population. You can read that "more than 20 times" straight off the
exponents: 10⁹ ÷ 10⁸ = 10¹ = 10, times the coefficient ratio ~2.35.

**Key vocabulary:** *scientific notation* (a × 10ⁿ, 1 ≤ a < 10),
*coefficient* (the shape), *order of magnitude* (the power of ten).

## Worked example 1 — converting a small decimal

Write 0.00045 in scientific notation.

Move the decimal point right until one nonzero digit is before it:
0.00045 → 4.5. Count jumps: 4. Answer: 4.5 × 10⁻⁴.

**Reasoning to name aloud:** "Moving right means the number is smaller
than 1, so the exponent is negative. Four jumps → 10⁻⁴. Check: 4.5 ×
10⁻⁴ = 4.5 ÷ 10,000 = 0.00045. ✓"

## Worked example 2 — magnitude comparison

Which is greater, 2 × 10⁷ or 9 × 10⁶? How many times greater?

Exponents first: 10⁷ beats 10⁶ — the first number is bigger even though
9 > 2. Ratio: (2 × 10⁷) ÷ (9 × 10⁶) = (2/9) × 10¹ ≈ 0.222 × 10 = 2.22
times greater.

**Reasoning to name aloud:** "The exponent decides the winner; the
coefficient decides by how much. Never compare coefficients across
different exponents."

## Activity — placing objects on the poster (uses the generated image)

Open [`powers-of-ten-ladder.webp`](../assets/powers-of-ten-ladder.webp),
the "How Big Is That?" poster: a ladder from 10¹⁸ (distant galaxy) to
10⁻⁹ (atom). **Text-only alternative:** the poster is an AI illustration;
its rung placements are illustrative, not measurements. Use this table
of rounded reference values (meters; rounded practice data, verified
against standard reference values on 2026-10-19):

| Object | Rounded size (m) | Power of 10 | Scientific notation |
|---|---|---|---|
| Star cluster (the poster's "Distant Galaxy" rung) | 10¹⁸ m | 10¹⁸ | 1 × 10¹⁸ m |
| Sun's diameter | 1.4 × 10⁹ m | 10⁹ | 1.4 × 10⁹ m |
| Earth's diameter | 1.3 × 10⁷ m | 10⁷ | 1.3 × 10⁷ m |
| Tall mountain (Everest) | 8.8 × 10³ m | 10³ | 8.8 × 10³ m |
| A person | 1.7 m | 10⁰ | 1.7 × 10⁰ m |
| An ant | 5 × 10⁻³ m | 10⁻² | 5 × 10⁻³ m |
| A grain of sand | 5 × 10⁻⁴ m | 10⁻⁴ | 5 × 10⁻⁴ m |
| A human cell | 1 × 10⁻⁵ m | 10⁻⁵ | 1 × 10⁻⁵ m |
| A molecule (water) | 3 × 10⁻¹⁰ m | 10⁻¹⁰ | 3 × 10⁻¹⁰ m |
| An atom | 1 × 10⁻¹⁰ m | 10⁻¹⁰ | 1 × 10⁻¹⁰ m |

Task: for each row, (a) confirm the scientific notation from the rounded
size, (b) point to the closest poster rung, and (c) write one sentence
explaining any mismatch between the poster rung and the table. Note the
poster compresses the top of the scale: a real galaxy is about 10²¹ m
across, far above the poster's top rung — the 10¹⁸ rung stands in for
"star-cluster scale" as an illustration, not a measurement.

## Guided practice (adult stays close, hints allowed)

1. 73,000,000 → scientific notation. *(Hint: "One digit before the
   point; count the left jumps.")*
2. 5.9 × 10⁻⁶ → decimal form. *(Hint: "Six jumps left from the 5 —
   fill zeros.")*
3. Which is larger: 4 × 10⁵ or 7 × 10⁴? How many times larger?
   *(Hint: "Exponents decide; coefficients refine.")*
4. Error analysis: "Tara writes 0.00062 as 62 × 10⁻⁵." What is wrong?
   *(Hint: "What must the coefficient be between?")*
5. Estimate the number of grains of sand on a beach as a power of 10,
   then say whether 10²⁰ or 10¹⁸ is the better order of magnitude.
   *(Hint: "Think: beaches are long, wide, deep — each ~thousands of
   meters; sand grains are ~10⁻⁴ m.")*
6. A red blood cell is 7 × 10⁻⁶ m wide. A hair is 7 × 10⁻⁵ m wide. How
   many times wider is the hair? *(Hint: "Divide — subtract exponents.")*

## Independent practice

1. Convert: 208,000,000; 0.00000091; 6,020; 0.0047.
2. Convert to decimal: 3.3 × 10⁴; 9.15 × 10⁻²; 1 × 10⁰; 2.77 × 10⁶.
3. Order from smallest to largest: 5 × 10⁻³, 5 × 10², 4 × 10⁻³, 9 × 10⁻¹.
4. A blue whale is about 3 × 10¹ m long; a bacterium is about
   3 × 10⁻⁶ m. How many times longer is the whale? Show the exponent
   subtraction.
5. Error analysis: "Dev says 1.2 × 10⁵ = 120,000 is wrong because the
   coefficient 1.2 is not a single digit." Respond.

## Application

The standard's own example, refreshed: the U.S. population is about
3.4 × 10⁸ and the world population about 8 × 10⁹. (a) Write both as
decimals. (b) Show the world population is more than 20 times the U.S.
population, two ways (long division of the decimals; exponent-ratio
reasoning). (c) One sentence: why is the exponent-ratio way more
reliable for very large numbers?

## Exit check

"Write 0.00000052 in scientific notation and say how you chose the
exponent's sign." Expected: 5.2 × 10⁻⁷; moved right → negative.
Record: secure / developing / not yet.

## Supports

- **Language access:** anchor phrases — "shape" (coefficient) and "size"
  (exponent). Accept "the ×10-part" for "power of ten" alongside the
  formal term.
- **Alternate response mode:** decimal-point jumping with a finger on a
  printed number, counting jumps aloud, instead of written conversion.
- **Calculator boundary:** the calculator may check a finished conversion
  but not choose the exponent sign — the jump direction decides.

## Extension

Research (adult-supervised): find the mass of an electron
(≈ 9.1 × 10⁻³¹ kg) and the mass of Earth (≈ 6.0 × 10²⁴ kg). How many
times more massive is Earth? Express the ratio as a power of 10 and say
why the answer is only an order-of-magnitude estimate.

## Teacher note

**Likely misconceptions:** (1) Coefficient outside [1, 10) — 62 × 10⁻⁵
is not scientific notation. (2) Sign flips when converting: positive
exponents go with big numbers (point moved left). (3) Comparing
coefficients across different exponents. (4) Treating the poster rungs
as measured data — they are illustrative; tables and datasets are the
authority.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-05) has
expected responses for the poster activity, guided rounds, independent
items, and the exit check.
