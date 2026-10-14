# Lesson 01 — SI Units, Dimensional Analysis, and Significant Figures

**Unit 01 · Session S1 · ~50 minutes**
**Standards:** HS-PS2-1 (strand connection: kinematics-data background); unit objective 1

## Student goal

By the end of this lesson I can name the seven SI base units and the
common prefixes; I can convert between units by multiplying with
conversion factors so that unwanted units cancel; I can tell an exact
number from a measured number; and I can apply significant-figure rules
to multiplication/division and addition/subtraction. Every number I
write carries its unit.

## Materials

Notebook, pencil, calculator. A ruler marked in millimeters if available.

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

1.1. Convert 60.0 cm to meters. Show the conversion factor you used.
1.2. A lab partner records a length as 2.50 m. How many significant
figures does the measurement have? What does the trailing zero tell
you?

(Adult: if 1.1 is insecure, spend 10 minutes on prefix conversion
before continuing; everything downstream assumes it.)

## Explicit teaching

**The SI system.** Seven base units describe everything physics
measures: the **meter (m)** for length, the **kilogram (kg)** for mass,
the **second (s)** for time, the **ampere (A)** for electric current,
the **kelvin (K)** for temperature, the **mole (mol)** for amount of
substance, and the **candela (cd)** for luminous intensity. Every other
SI unit is *derived* from these — for example, speed is meters per
second (m/s) and force is the newton (N), which is kg·m/s².

**Prefixes** scale base units by powers of ten. The ones you will use
constantly: milli (m, 10⁻³), centi (c, 10⁻²), kilo (k, 10³), micro
(μ, 10⁻⁶), mega (M, 10⁶), nano (n, 10⁻⁹). A conversion is just
multiplication by 1 in a clever form: `1 km = 1000 m` gives the factor
`1000 m / 1 km`, and multiplying by it changes the *name* of the unit
without changing the *amount*.

**Dimensional analysis.** Write every quantity as number × unit, and
treat units like algebraic symbols that multiply and cancel. If the
units do not cancel to what you expect, the setup is wrong — fix the
setup before touching the calculator. This is the single most reliable
error-catching habit in physics.

**Measured vs. exact numbers.** A *measured* number carries the limits
of its instrument: a ruler marked in millimeters gives 12.4 cm, not
12.4000 cm. An *exact* number is counted or defined: 5 trials, 12
objects, `1000 m = 1 km` by definition. Only measured numbers limit
significant figures.

**Significant-figure rules.**

- Multiplication/division: the result keeps as many significant figures
  as the *least precise* measured input.
- Addition/subtraction: the result keeps the precision of the input
  with the *fewest decimal places*.
- Zeros: leading zeros are never significant (0.00450 m has three
  significant figures); trailing zeros after a decimal point are
  significant (2.50 m has three); trailing zeros without a decimal
  point are ambiguous — use scientific notation (1.0 × 10² m is two,
  1.00 × 10² m is three).
- Exact numbers never limit significant figures.

## Worked examples (modeled reasoning)

**Example 1 — Dimensional analysis with unit cancellation.**

Convert a highway speed of 72.0 km/h to m/s.

*Reasoning:* I need kilometers to become meters and hours to become
seconds. I know `1 km = 1000 m` and `1 h = 3600 s`. I arrange the
factors so km cancels with km and h cancels with h:

72.0 km/h × (1000 m / 1 km) × (1 h / 3600 s)

*Units check before arithmetic:* km/h × m/km × h/s = m/s. The setup
cancels to meters per second, which is what I want.

*Arithmetic:* 72.0 × 1000 / 3600 = 72000 / 3600 = 20.0 m/s. Both
inputs have three significant figures, so the answer keeps three:
**20.0 m/s**.

*Sense check:* highway speeds are tens of m/s, so 20.0 m/s is
reasonable; a number like 0.0200 m/s would signal a flipped factor.

**Example 2 — Significant figures in multiplication and addition.**

A lab table measures 2.40 m long and 1.5 m wide.

*Area:* 2.40 m × 1.5 m = 3.60 m² by the calculator, but the width has
only two significant figures, so the area is limited to two:
**3.6 m²**. The answer cannot know more about the area than the width
measurement knew about the width.

*Perimeter:* 2.40 + 1.5 + 2.40 + 1.5 = 7.80 m by the calculator, but
addition follows the *decimal-place* rule: 1.5 m is known only to the
tenths place, so the sum rounds to the tenths place: **7.8 m**.

*Why two different rules:* multiplication chains relative
uncertainties (digits count); addition stacks absolute uncertainties
(decimal places count). A rough check: the unknown digit in 1.5 m
(±0.1 m) dominates the unknown digit in 2.40 m (±0.01 m) in both
operations.

## Guided practice (with hints)

Work these with the adult or a partner; hints are included — try the
problem first, then peek.

1.3. Convert 850. mm to meters.
*Hint:* milli means 10⁻³. Write the factor `1 m / 1000 mm` and check
the cancellation before computing.

1.4. Show that `v² / (2a)` has units of meters, given `v` in m/s and
`a` in m/s². (The 2 is exact.)
*Hint:* write `(m/s)² / (m/s²)` and cancel like fractions.

## Independent practice

1.5. Convert 2.50 × 10⁵ mg to kilograms. Show the canceling units.
1.6. A circuit board is 3.25 cm by 4.0 cm. Compute its area with
correct significant figures.
1.7. Add: 12.4 s + 5.08 s. Report with correct significant figures and
explain which rule applied.

## Application

1.8. A marathon is 42.195 km and the winning time is 2.00 h.
a) Compute the winner's average speed in m/s with correct significant
figures.
b) A commentator says "about 5.9 m/s." Is the commentator's rounding
consistent with the data's precision? Explain.

## Exit check (5 min)

1.9. Convert 5.00 L to cubic meters. (1 m³ = 1000 L exactly.)
1.10. A learner writes `10.0 cm × 10.0 cm = 100 cm²`. Identify the
significant-figure error and write the correct result.

## Reading and language support

- Read the worked examples aloud and point to each canceled unit as it
  disappears; saying "kilometers cancel" cements the algebra-of-units
  idea.
- Key terms defined in place above; add *dimensional analysis*,
  *cancellation*, and *exact number* to the notebook glossary with an
  example each.
- The resource pack lists a short reading on SI prefixes for Session
  S2 — complete its two tasks before Practice Set A.

## Alternate response mode

If writing out full conversion chains is difficult, the learner may
narrate the setup orally while the adult writes the factors, then the
learner points to each canceling unit pair. The reasoning (which factor
goes on top and why) is the assessed skill, not the handwriting.

## Extension

Research why the kilogram is the only SI base unit whose name already
contains a prefix, and write a four-sentence summary of how it is
currently defined (constant-based definition). Cite the source used.

## Teacher note (misconception)

Watch for learners converting by "moving the decimal" without a
factor — the decimal moves correctly only when the direction is right,
and it hides the unit check that catches flipped conversions. Insist
on the written factor with its canceling units through Lesson 02.
A second trap: counting `1000` in `1000 m = 1 km` as four significant
figures — it is exact and never limits the result.

*Answers for all numbered items (1.1–1.10) are in `../answer-key.md`
under "Lesson 01".*
