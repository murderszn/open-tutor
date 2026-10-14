# Lesson 04 — Significant Figures

**Goal:** You will count significant figures in measurements, distinguish measured from exact
numbers, and round addition/subtraction and multiplication/division results correctly.
**Time:** ~50 minutes · **Materials:** notebook, calculator.
**Readiness check (2 min):** A balance reads 52.48 g and a cylinder reads 24.5 mL. If you divide
them on a calculator you get 2.14204081… g/mL. How many digits is it honest to keep? Today you
learn the rules that answer that.

## 1. What significant figures mean

**Significant figures** are the digits in a measurement that carry real information: every certain
digit plus the one estimated digit (Lesson 03). They are how a number reports its own precision.
Rules for counting:

1. All nonzero digits are significant: 24.5 mL → 3.
2. Zeros *between* nonzero digits are significant: 20.05 g → 4.
3. Leading zeros are never significant (they only place the decimal): 0.00450 m → the 4, 5, and
   final 0 are significant → 3.
4. Trailing zeros *after* a decimal point are significant: 25.0 °C → 3; 13.20 g → 4.
5. Trailing zeros *without* a decimal point are ambiguous: 1000 mL could be 1, 2, 3, or 4
   significant figures. In this course, write ambiguous values in scientific notation:
   1.000 × 10³ mL (4) vs. 1 × 10³ mL (1).

**Measured vs. exact numbers.** A measurement (24.5 mL) has limited significant figures. An
**exact** number — a count (3 trials) or a definition (1000 mL = 1 L, exactly) — has effectively
infinite significant figures and never limits a result.

## 2. Addition and subtraction: line up the decimals

Rule: the answer is rounded to the **fewest decimal places** of any measurement in the sum.
Reason: you cannot know a digit in a place nobody measured.

**Worked example 1.** Add 12.5 mL + 3.75 mL.
Reasoning: 12.5 is known only to the tenths place. Calculator: 16.25 → round to tenths →
**16.3 mL**. The hundredths digit from 3.75 is discarded because 12.5 never measured that finely.

**Worked example 2.** 25.0 °C + 273.15 = 298.15 → round to the tenths place (from 25.0) →
**298.2 K**. This is the temperature conversion from Lesson 02, now rounded honestly.

## 3. Multiplication and division: count the figures

Rule: the answer keeps the **fewest significant figures** of any *measured* factor. Exact numbers
do not count.

**Worked example 3 — the density division.** mass = 52.48 g (4 s.f.), volume = 24.5 mL (3 s.f.).
52.48 ÷ 24.5 = 2.14204081… → keep 3 significant figures → **2.14 g/mL**.
Reasoning: the volume was measured to 3 figures, so the density cannot honestly claim 4. The
calculator's extra digits are arithmetic exhaust, not information.

**Worked example 4 — exact numbers don't limit.** Convert 2.50 L to mL: 2.50 × 1000 = 2500 mL.
Reasoning: the conversion factor (1000 mL / 1 L) is a definition — exact. The answer keeps the
measurement's 3 figures, so write **2.50 × 10³ mL** to show all three are significant (plain
"2500 mL" is ambiguous per rule 5).

## 4. Multi-step calculations: round once, at the end

**Worked example 5.** A strip measures 66.5 mm long, 12.0 mm wide. Area = 66.5 × 12.0 = 798.0 mm²
→ 3 s.f. → **798 mm²**. Then convert to cm²: 1 cm² = 100 mm² (exact definition), so
798 mm² × (1 cm² / 100 mm²) = 7.98 cm² → **7.98 cm²** (3 s.f.).
Reasoning: intermediate rounding would inject error; the only rounding happens on the final
answer, limited by the 3-figure measurements. (Note: 798 has 3 significant figures — the trailing
zero in 798.0 was dropped by rounding, correctly.)

## Guided practice

1. Count the significant figures: (a) 0.00450 m; (b) 25.0 °C; (c) 1000 mL (explain the problem);
   (d) 52.48 g.
2. Add: 8.2 cm + 1.75 cm. Show the calculator result and the correctly rounded answer.
3. Divide: 13.20 g by 4.0 mL. How many significant figures does the answer keep, and why?

## Independent practice

4. A learner multiplies 3 trials × 24.5 mL and writes 73.5 mL. Is the factor 3 exact or measured?
   How many significant figures should the answer have?
5. Subtract: 50.00 mL − 12.5 mL. Give the rounded result with reasoning.
6. Compute the density from mass 27.35 g and volume 10.2 mL. Show the unrounded calculator value
   and the correctly rounded answer with units. *(You will meet these numbers again in the
   density investigation.)*
7. **Error analysis:** "0.250 L × 1000 = 250 mL, and 250 has 3 significant figures." Find the
   error and fix it.

## Application

Revisit your Session-7 measurement table (or the Lesson 03 practice readings). For each recorded
value, write its significant-figure count and mark whether it is measured or exact. Then combine
two of your measurements in a calculation (e.g., density, area, or a sum) and round the result
correctly, showing the unrounded value first.

## Exit check

1. A result's factors have 4, 2, and 3 significant figures (all measured). How many does the
   answer keep?
2. Why do we round only at the end of a multi-step calculation?
3. 20.05 g + 3.1 g = ? (rounded correctly)

## Supports and extensions

- **Reading access:** the two rounding rules are boxed in §2 and §3 — copy them onto a reference
  card for the rest of the unit.
- **Alternate response mode:** sig-fig counts may be shown by underlining significant digits in
  the written number.
- **Extension:** investigate the "guard digit" practice: carry one extra digit through intermediate
  steps and round only the final answer. Redo Worked example 5 rounding at *each* step instead,
  and compute how far the answer drifts. Report the drift.

## Teacher note

Common misconception: learners apply the multiplication rule to addition ("16.25 has 4 digits, and
12.5 has 3, so the answer keeps 3" — wrong operation, wrong rule). Drill the distinction: *places*
for +/−, *figures* for ×/÷. Another: treating conversion factors as limiting — stress that defined
equalities are exact. Answer-key reference: `answer-key.md`, Lesson 04.
