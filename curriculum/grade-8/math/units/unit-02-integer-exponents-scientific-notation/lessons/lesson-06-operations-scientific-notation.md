# Lesson 06 — Operations in Scientific Notation

**Student goal:** I can add, subtract, multiply, and divide in scientific
notation, choose good units for extreme measurements, and read
calculator-style E notation.
**Time:** ~45 minutes · **Unit:** [U02](../README.md) · **Session 11 of 16**

## Materials

- Notebook, pencil, calculator (checking, and deliberately provoking
  E notation in the teaching)

## Readiness check (5 minutes)

Convert 4,700,000 to scientific notation and 2.5 × 10⁻³ to a decimal.
(Expected: 4.7 × 10⁶; 0.0025.) If conversion is shaky, re-do the
Lesson 05 jump-direction chant before continuing.

## Teaching

**Multiplying and dividing** in scientific notation is just the exponent
rules wearing a lab coat:

- Multiply: multiply coefficients, add exponents.
  (3 × 10⁴) × (2 × 10⁵) = 6 × 10⁹.
- Divide: divide coefficients, subtract exponents.
  (8 × 10⁷) ÷ (2 × 10³) = 4 × 10⁴.

Then **normalize**: the coefficient must land in [1, 10). If it doesn't,
shift a power of 10 in or out: (9 × 10³) × (8 × 10²) = 72 × 10⁵ =
7.2 × 10⁶.

**Adding and subtracting** needs matching exponents first — like common
denominators for fractions. Rewrite one number so both share an exponent,
then add coefficients:

4.2 × 10⁶ + 3 × 10⁵ = 42 × 10⁵ + 3 × 10⁵ = 45 × 10⁵ = 4.5 × 10⁶.

Check by decimals: 4,200,000 + 300,000 = 4,500,000 = 4.5 × 10⁶. ✓

**Choosing units.** A measurement's unit should fit its size. Seafloor
spreading moves tectonic plates a few centimeters per year — "0.00003 km
per year" hides the scale, while "3 cm per year" or "30 mm per year"
shows it. Scientific notation helps you *pick* the unit: write the
quantity, then choose the prefix (mm, km, …) that keeps the coefficient
readable. Distances between planets belong in millions of km
(1.5 × 10⁸ km); a cell's width belongs in micrometers
(7 × 10⁻⁶ m = 7 µm).

**Technology notation.** Calculators and computers often print scientific
notation as **E notation**: `4.2E6` means 4.2 × 10⁶; `1.5E-3` means
1.5 × 10⁻³. The E stands for "exponent of ten." It is *not* the letter e
from Euler's number, and it is not an error — it is the display running
out of room.

**Key vocabulary:** *normalize* (adjust the coefficient into [1, 10)),
*E notation* (4.2E6 = 4.2 × 10⁶), *unit prefix* (milli-, kilo-, micro-).

## Worked example 1 — multiplication with normalization

(5 × 10⁻³) × (4 × 10⁷).

Coefficients: 5 × 4 = 20. Exponents: −3 + 7 = 4 → 20 × 10⁴.
Normalize: 20 = 2 × 10¹, so 20 × 10⁴ = 2 × 10⁵.

**Reasoning to name aloud:** "Multiply the shapes, add the sizes — then
fix the shape if it escaped the [1, 10) corral. The normalization step
is part of the answer, not optional decoration."

## Worked example 2 — addition with matched exponents

3.6 × 10⁸ + 4 × 10⁷.

Match exponents: 4 × 10⁷ = 0.4 × 10⁸. Add: 3.6 + 0.4 = 4.0 → 4.0 × 10⁸
(usually written 4 × 10⁸). Check by decimals: 360,000,000 + 40,000,000
= 400,000,000. ✓

**Reasoning to name aloud:** "I shifted the *smaller* number's decimal
left (growing its exponent) because adding to the bigger scale keeps
digits meaningful. Adding 3.6 × 10⁸ + 0.4 × 10⁸ is adding like terms."

## Guided practice (adult stays close, hints allowed)

1. (2 × 10³) × (3 × 10⁴). *(Hint: "Shapes times, sizes added — then
   check the corral.")*
2. (9 × 10⁸) ÷ (3 × 10²). *(Hint: "Divide shapes, subtract sizes.")*
3. 7 × 10⁵ + 2 × 10⁴. *(Hint: "Match exponents first — which number
   shifts?")*
4. Error analysis: "Kim computes 5 × 10³ + 5 × 10³ = 10 × 10⁶."
   Find the two errors. *(Hint: "What did the exponent do — and did the
   shapes add correctly?")*
5. A calculator shows `6.02E23`. Write it in scientific notation and in
   words. (Avogadro's number: 6.02 × 10²³.)
6. Choose the better unit: the distance from Earth to Mars, 225 million
   km — write it in scientific notation twice, once in km and once in
   millions of km. Which reads better?

## Independent practice

1. (4 × 10⁻⁵) × (5 × 10⁻²); normalize.
2. (1.2 × 10⁹) ÷ (3 × 10⁻⁴).
3. 8 × 10⁻³ − 2 × 10⁻⁴; give the exact decimal check too.
4. A grain of rice is about 2 × 10⁻³ m long. A football field is about
   1 × 10² m. How many rice grains laid end to end span the field?
5. Error analysis: "Noah multiplies (3 × 10²) × (4 × 10³) and gets
   12 × 10⁵, then stops." Finish and correct.

## Application

Mixed-form problem (8.EE.A.4): a phone battery stores 15 watt-hours
(15 Wh). A sensor draws 0.0000004 watts (4 × 10⁻⁷ W). How many hours can
the sensor run? Divide: 15 ÷ (4 × 10⁻⁷) = 3.75 × 10⁷ hours. Is that a
sensible unit for the answer? Convert to years (÷ 8,760 h/yr) and decide
whether the real limit would be the battery or the sensor's lifespan.
(Expected: ≈ 4,280 years — the sensor will die of old age first; the
unit choice reveals the absurdity.)

## Exit check

"A calculator prints `2.5E-4`. Write the number two ways and say what
the E means." Expected: 2.5 × 10⁻⁴; 0.00025; E = "×10^". Record:
secure / developing / not yet.

## Supports

- **Language access:** "corral" the coefficient into [1, 10); "match the
  sizes before adding shapes." E notation: "E means times-ten-to."
- **Alternate response mode:** oral coefficient/exponent split —
  learner says "shapes: 5 times 4; sizes: minus 3 plus 7" while the
  adult writes.
- **Calculator boundary:** deliberately let the calculator produce E
  notation during practice — translating it is the lesson, not cheating.

## Extension

Derive the rule for (a × 10ᵐ) × (b × 10ⁿ) in full generality using the
commutative, associative, and exponent properties. Then explain why
addition has no such shortcut — the like-terms requirement is the reason.

## Teacher note

**Likely misconceptions:** (1) Adding exponents when adding numbers —
the most dangerous confusion in the unit; like-terms language prevents
it. (2) Forgetting to normalize (leaving 20 × 10⁴ or 0.4 × 10⁸).
(3) Reading 2.5E-4 as "2.5 minus 4" or as an error. (4) Shifting the
wrong number's decimal when matching exponents.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-06) has
expected responses for guided rounds, independent items, and the exit
check.
