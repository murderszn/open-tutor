# Lesson 02 — SI Prefixes and Multi-Step Unit Conversion

**Goal:** You will convert among SI units — including multi-step conversions and °C↔K — using the
factor-label method with units canceling correctly.
**Time:** ~50 minutes · **Materials:** notebook, calculator.
**Readiness check (2 min):** How many centimeters are in 2 meters? If you multiplied by 100, you
already think in conversion factors — today you will write them so the units prove the math.

## 1. SI prefixes: scaling the base units

A prefix attached to a unit multiplies it by a power of ten. Memorize the six you will use
constantly; recognize the rest.

| Prefix | Symbol | Means | Example |
|---|---|---|---|
| kilo- | k | × 1,000 | 1 kg = 1,000 g |
| hecto- | h | × 100 | (recognition only) |
| deca- | da | × 10 | (recognition only) |
| — (base) | — | × 1 | 1 m, 1 g, 1 L |
| deci- | d | × 0.1 | 1 dm = 0.1 m |
| centi- | c | × 0.01 | 1 cm = 0.01 m |
| milli- | m | × 0.001 | 1 mL = 0.001 L; 1 mm = 0.001 m |
| micro- | µ | × 0.000001 | (recognition only) |

Memory aid: **k**ing **h**enry **d**ied **u**nexpectedly **d**rinking **c**hocolate **m**ilk —
kilo, hecto, deca, (unit), deci, centi, milli.

## 2. The factor-label method

A **conversion factor** is a fraction equal to 1, built from an exact definition: e.g.
(1000 mL / 1 L) = 1, because numerator and denominator name the same amount. Multiplying by 1 does
not change the quantity — it only changes the unit. The method:

1. Write the starting quantity with its unit.
2. Multiply by conversion factors, arranging each so the unwanted unit cancels (one on top, one on
   the bottom).
3. Cancel units like algebra, then multiply/divide the numbers.

**Worked example 1 — one step.** Convert 250 mL to liters.
Reasoning: mL is smaller than L, so the number in liters should be smaller — a sanity check at
the end. Set up:
250 mL × (1 L / 1000 mL) = 0.250 L. The mL units cancel; liters remain. Sanity: 0.250 < 250 ✓.

**Worked example 2 — multi-step.** Convert 60.0 km/h to m/s (a speed-unit conversion with two
unit changes).
Reasoning: kilometers → meters and hours → seconds, so two factors are needed.
60.0 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 60,000 m / 3600 s = 16.666… m/s → **16.7 m/s**
(3 significant figures, matching 60.0 — significant figures are Lesson 04; for now, keep the
digits your starting value had).
Unit check: km cancels with km, h cancels with h; only m/s remains ✓. Sanity: 60 km/h is highway
speed ≈ 17 m/s ✓.

**Worked example 3 — temperature is special.** Convert 25.0 °C to kelvin.
Reasoning: Celsius and kelvin degrees are the *same size*, but their zeros differ (0 °C = 273.15 K).
This is a shift, not a scaling — the factor-label method does not apply. Use **K = °C + 273.15**.
25.0 + 273.15 = 298.15 → **298.2 K** (rounded to the tenths place of 25.0; see Lesson 04).
Common error: multiplying 25.0 °C by a factor. Temperature conversions between °C and K always add
or subtract 273.15.

## 3. Conversions you will use in the lab

- mL ↔ L (volumes): 1 L = 1000 mL
- g ↔ kg (masses): 1 kg = 1000 g
- cm ↔ m ↔ mm (lengths): 1 m = 100 cm = 1000 mm
- °C ↔ K (temperatures): K = °C + 273.15
- mL = cm³ (volume↔length³ bridge, used in the density lab)

## Guided practice

1. Convert 1.8 kg to grams. Set up the factor, cancel, and give the sanity check in one sentence.
2. Convert 2.50 L to milliliters.
3. A thermometer reads −10.0 °C. What is this in kelvin? Why can't you use a conversion factor here?

## Independent practice

4. Convert 0.045 kg to milligrams (two steps: kg→g→mg).
5. A runner's pace is 5.00 min per kilometer. Convert to seconds per meter. *(Hint: two factors;
   keep 3 significant figures.)*
6. A graduated cylinder holds 0.125 L. How many cubic centimeters is that? *(Hint: use the mL bridge.)*
7. **Error analysis:** a learner converts 300 cm to meters and writes 30,000 m. Identify the error,
   show the correct setup, and state the rule they broke.

## Application

Your lab procedure calls for 0.250 L of water, but your graduated cylinder is marked in
milliliters. How many milliliters do you measure? Then: the balance reads in grams and you need
0.020 kg of a solid. How many grams do you weigh? Show both factor-label setups — this is exactly
the arithmetic you will do in the density investigation.

## Exit check

1. Convert 750 mL to liters.
2. Convert 15.5 °C to kelvin.
3. In the factor-label method, what must be true of the units for the setup to be correct?

## Supports and extensions

- **Reading access:** keep the prefix table visible during all practice; unit cancellation may be
  shown by crossing out units with a pencil.
- **Alternate response mode:** conversions may be narrated aloud step by step ("milliliters cancel,
  liters remain") instead of written.
- **Extension:** derive the conversion between km/h and m/s as a single combined factor
  (1 km/h = ? m/s, exact to 4 significant figures), and use it to convert 100 km/h.

## Teacher note

Common misconception: learners multiply when they should divide because they memorize "big-to-small
multiply" as a rule instead of letting the units cancel. Insist on writing every factor as a
fraction and physically canceling units for the first two weeks. Watch for the temperature error —
° C→K is addition, never multiplication. Answer-key reference: `answer-key.md`, Lesson 02.
Reteach path: if Session-4 practice is below 80%, re-do guided items with the learner narrating
each cancellation aloud before the quiz.
