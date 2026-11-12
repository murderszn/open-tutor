# Lesson 03 — The Gas Laws: Boyle, Charles, Gay-Lussac, Combined, Ideal

**Goal:** By the end of this lesson you can solve Boyle's, Charles's, Gay-Lussac's, and combined
gas-law problems — and ideal-gas-law problems with moles and STP — showing the set-up, the
unit conversions, and a reasonableness check.

**Time:** ~50 minutes. **Materials:** notebook, calculator, Practice Sets B (second half) and C.

## Readiness check (5 minutes)

1. Write the conversion 25 °C → K. Then write 0 °C → K.
2. If a gas is squeezed into half its volume at constant temperature, what happens to its
   pressure? (Think collisions, Lesson 02.)
3. What does "STP" mean, and why would chemists want a standard set of conditions?

(If the readiness check is shaky, re-read Lesson 02 on pressure and kelvin before continuing.)

## Teaching

### The three simple laws

Each law holds **two** variables fixed and relates the other two. All temperatures are in
kelvin — every time, no exceptions.

**Boyle's law** (constant temperature, constant amount): pressure and volume are *inversely*
proportional. Squeeze the volume in half and the pressure doubles.

> P₁V₁ = P₂V₂

**Charles's law** (constant pressure, constant amount): volume and kelvin temperature are
*directly* proportional. Heat a gas and it expands.

> V₁/T₁ = V₂/T₂

**Gay-Lussac's law** (constant volume, constant amount): pressure and kelvin temperature are
*directly* proportional. Heat a sealed rigid container and the pressure rises.

> P₁/T₁ = P₂/T₂

### The combined gas law

The three laws combine into one equation that handles changes in pressure, volume, *and*
temperature at once:

> P₁V₁/T₁ = P₂V₂/T₂

Use it whenever two or three variables change. (If only two change, it reduces to the simple
law — check that it does, as a habit.) Pressure and volume may be in any *consistent* units on
both sides (atm with atm, mL with mL), because the units cancel — but **temperature must be
kelvin on both sides**, because the relationship is proportional to absolute temperature.

### The ideal gas law and STP

When the *amount* of gas changes too, use the ideal gas law:

> PV = nRT, with R = 0.08206 L·atm/(mol·K)

Use pressure in atm, volume in liters, temperature in kelvin, and n in moles. **STP** (standard
temperature and pressure) in this unit means **0 °C (273 K) and 1 atm**. At STP, one mole of
an ideal gas occupies:

> V = nRT/P = (1.00 mol)(0.08206 L·atm/(mol·K))(273 K) / 1.00 atm ≈ **22.4 L**

That number — **22.4 L/mol at STP** — is a workhorse: it converts gas volumes at STP directly
to moles, and moles to mass, with no calculator-heavy step. (Note: IUPAC's newer STP uses
100 kPa instead of 1 atm and gives 22.7 L/mol. If you meet that value elsewhere, it is the
same idea with a slightly different standard pressure — not a contradiction.)

### Worked example 1 — Boyle's law

*A syringe holds 60.0 mL of air at 1.00 atm. The plunger is pushed until the volume is
20.0 mL, at constant temperature. What is the new pressure?*

Step 1 — P₁V₁ = P₂V₂ → P₂ = P₁V₁/V₂ = (1.00 atm)(60.0 mL)/(20.0 mL).
Step 2 — P₂ = 3.00 atm.
Check: the volume fell to one-third, so the pressure should triple — 1.00 → 3.00 atm. ✓
(Units: mL cancels; any volume unit works as long as both sides match.)

### Worked example 2 — Charles's law, with the kelvin trap

*A balloon holds 2.00 L of air at 27 °C. It is cooled to −73 °C at constant pressure. What is
the new volume?*

Step 1 — Convert first: T₁ = 27 + 273 = 300 K; T₂ = −73 + 273 = 200 K.
Step 2 — V₂ = V₁ × T₂/T₁ = 2.00 L × (200 K/300 K) = 1.33 L.
Check: the kelvin temperature fell to two-thirds, so the volume should fall to two-thirds —
2.00 × ⅔ = 1.33 L. ✓
Trap avoided: using Celsius (27 → −73) would give a negative, meaningless answer.

### Worked example 3 — combined gas law

*A gas occupies 4.00 L at 1.20 atm and 300 K. It is compressed to 2.00 L and heated to 450 K.
What is the new pressure?*

Step 1 — P₂ = P₁ × (V₁/V₂) × (T₂/T₁) = 1.20 atm × (4.00/2.00) × (450/300).
Step 2 — (4.00/2.00) = 2.00; (450/300) = 1.50; P₂ = 1.20 × 2.00 × 1.50 = 3.60 atm.
Check: halving the volume doubles the pressure; heating by 1.5× raises it 1.5× more — 1.20 ×
3 = 3.60 atm. ✓

### Worked example 4 — ideal gas law and STP

*What mass of oxygen gas, O₂ (molar mass 32.00 g/mol), occupies 5.60 L at STP?*

Step 1 — Moles from molar volume: n = 5.60 L / 22.4 L/mol = 0.250 mol.
Step 2 — Mass: 0.250 mol × 32.00 g/mol = 8.00 g.
Check by PV = nRT: n = (1.00 atm)(5.60 L)/(0.08206 × 273) = 5.60/22.4 = 0.250 mol. ✓

### A common trap

"The temperature doubled, so the volume doubled" — with Celsius. 20 °C → 40 °C is 293 K →
313 K, a factor of only 1.07, not 2. **Every** gas-law problem starts the same way: convert
temperatures to kelvin *before* writing the proportion. The answer key marks any solution
that skips this step as incomplete, even if the arithmetic happens to look right.

## Guided practice

Work these with your adult or a partner; hints are in brackets.

1. A gas at 3.00 atm occupies 2.00 L. At constant temperature it expands to 6.00 L. Find the
   new pressure. [Boyle: P₂ = P₁V₁/V₂.]
2. A gas at 400 K occupies 5.00 L at constant pressure. It is cooled to 200 K. Find the new
   volume. [Charles: V₂ = V₁ × T₂/T₁; temperatures already kelvin.]
3. A rigid tank at 300 K holds gas at 150 kPa. It is heated to 600 K. Find the new pressure
   in kPa. [Gay-Lussac: P₂ = P₁ × T₂/T₁.]
4. How many moles of gas occupy 11.2 L at STP, and what mass is that if the gas is nitrogen,
   N₂ (28.02 g/mol)? [11.2 L / 22.4 L/mol; then × molar mass.]

## Independent practice

Complete the second half of Practice Set B (items B5–B8) and all of Practice Set C (in
`practice.md`). Then answer this application question in your notebook: a weather balloon is
filled with 500 L of helium at ground level (1.00 atm, 300 K). As it rises, the outside
pressure falls to 0.50 atm and the temperature falls to 250 K. Estimate the balloon's new
volume with the combined gas law, and explain in one sentence why balloon designers must
leave room for this expansion.

## Exit check

Without looking back: (a) write Boyle's law and say when it applies; (b) a gas goes from
300 K to 150 K at constant pressure — what happens to its volume? (c) How many liters does
1.00 mol of gas occupy at STP?

## Supports and extensions

- **Reading/language access:** for every problem, write the "before" and "after" table first
  (P₁, V₁, T₁ / P₂, V₂, T₂) and circle what is unknown before choosing a law.
- **Alternate response mode:** run the PhET "Gas Properties" simulation (resource pack) and
  change one variable at a time; record the pattern in words before doing the calculation.
- **Extension:** use PV = nRT to find the density of carbon dioxide at STP (molar mass
  44.01 g/mol) and compare it with air's density (about 1.29 g/L at STP) — then predict
  whether CO₂ sinks or rises in air.

## Teacher note

Likely misconceptions: (1) Celsius used in proportions — the single most common error in this
unit; require the kelvin conversion line in every solution; (2) learners pick the wrong law
because they match on letters instead of on what is held constant — insist on the before/after
table; (3) learners treat 22.4 L/mol as valid at any conditions — stress "at STP only." The
Session 8 syringe/simulation investigation is the concrete anchor for Boyle's law; do not skip
it. Answer-key reference: `answer-key.md`, Sets B (B5–B8) and C.
