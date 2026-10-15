# Lesson 05 — Convection and Quantitative Models

**Unit 01 · Session S16 · ~50 minutes**
**Standards:** HS-ESS2-3 (model, from interior evidence, how thermal convection cycles matter)

## Student goal

By the end of this lesson I can describe how thermal convection in the
mantle cycles matter, connect mantle motion to plate motion, and build
a simple rate model — reported with units, stated assumptions, and an
uncertainty range.

## Materials

Notebook, pencil, calculator. A spreadsheet (for Session S17) is
optional today.

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

1. Heat a pot of thick soup: where does the hot soup go, and where
   does the cooler surface soup go? What shape is the circulation?
2. In Lesson 04, old oceanic crust is destroyed at subduction zones
   while new crust forms at ridges. Where must the destroyed material
   *go*?

(Adult: question 2 is the bridge — matter is conserved, so "destroyed
crust" must go somewhere. The lesson names the somewhere.)

## Explicit teaching

**Thermal convection.** Heat the bottom of a fluid and the warm fluid
expands, becomes less dense, and rises; at the top it cools, becomes
denser, and sinks. The loop is a **convection cell**, and it moves
both heat and matter. Earth's mantle — the thick rocky layer between
crust and core — convects this way: hot rock rises (very slowly),
spreads sideways beneath the plates, cools, and sinks back down.
Convection **cycles matter** (Lesson 04's "destroyed" crust is not
destroyed — its matter returns to the mantle) and **moves energy**
from the hot interior toward the surface.

**Solid rock that flows.** The mantle is solid, not liquid — but over
millions of years, hot solid rock *creeps*. Think of extremely thick
honey: it holds its shape if you poke it, yet it flows if you wait.
Geologic time is the waiting. This is why "solid" and "flowing" are
both true.

**From mantle motion to plate motion.** The plates are the cold, rigid
outer shell (**lithosphere**) riding on the weaker, slowly creeping
layer below (**asthenosphere**). Two forces drive them, at the
conceptual level:

- **Ridge push:** the mid-ocean ridge stands higher than the abyssal
  plain; new, warm lithosphere slides downhill away from the ridge.
- **Slab pull:** at a subduction zone, cold dense oceanic plate sinks
  into the mantle, pulling the rest of the plate behind it — thought
  to be the stronger of the two.

Upwelling under ridges makes new crust, plates carry it outward,
subduction returns it to the mantle, and convection completes the
loop. One system, four lessons deep: deep time (L01) → absolute ages
(L02–L03) → surface evidence (L04) → the engine underneath (L05).

### Convection and plates (schematic cross-section)

<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic cross-section of two mantle convection cells beneath tectonic plates, with upwelling at a mid-ocean ridge and downwelling at a subduction zone">
  <rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
  <text x="260" y="20" text-anchor="middle" font-size="13" font-family="sans-serif">Mantle convection and plate motion (schematic, not to scale)</text>
  <rect x="30" y="60" width="460" height="22" fill="#8a8a8a" stroke="#333" stroke-width="1.5"/>
  <text x="260" y="75" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#fff">lithosphere (rigid plates)</text>
  <rect x="30" y="82" width="460" height="18" fill="#c9a06a" stroke="#333" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="260" y="95" text-anchor="middle" font-size="10" font-family="sans-serif">asthenosphere (weak, creeping layer)</text>
  <rect x="30" y="100" width="460" height="170" fill="#f5e6c8" stroke="#333" stroke-width="1.5"/>
  <text x="260" y="285" text-anchor="middle" font-size="11" font-family="sans-serif">mantle (solid rock, convecting over millions of years)</text>
  <ellipse cx="160" cy="185" rx="105" ry="75" fill="none" stroke="#c0392b" stroke-width="2.5"/>
  <ellipse cx="360" cy="185" rx="105" ry="75" fill="none" stroke="#c0392b" stroke-width="2.5"/>
  <polygon points="260,118 252,132 268,132" fill="#c0392b"/>
  <polygon points="108,185 122,177 122,193" fill="#c0392b"/>
  <polygon points="212,185 198,177 198,193" fill="#c0392b"/>
  <polygon points="308,185 322,177 322,193" fill="#c0392b"/>
  <polygon points="412,185 398,177 398,193" fill="#c0392b"/>
  <polygon points="260,238 252,224 268,224" fill="#c0392b"/>
  <line x1="260" y1="118" x2="260" y2="224" stroke="#c0392b" stroke-width="2" stroke-dasharray="7,5"/>
  <text x="260" y="112" text-anchor="middle" font-size="10" font-family="sans-serif">hot rock rises</text>
  <text x="260" y="252" text-anchor="middle" font-size="10" font-family="sans-serif">cool rock sinks</text>
  <text x="105" y="172" text-anchor="middle" font-size="10" font-family="sans-serif">spreads sideways</text>
  <text x="415" y="172" text-anchor="middle" font-size="10" font-family="sans-serif">spreads sideways</text>
  <polygon points="248,82 272,82 260,60" fill="#1f6fb2" stroke="#333" stroke-width="1.5"/>
  <text x="260" y="52" text-anchor="middle" font-size="11" font-family="sans-serif">mid-ocean ridge — new crust forms</text>
  <polygon points="470,82 490,100 462,128 448,104" fill="#5b5b5b" stroke="#333" stroke-width="1.5"/>
  <text x="420" y="52" text-anchor="middle" font-size="11" font-family="sans-serif">trench — plate sinks (subduction)</text>
  <text x="140" y="52" text-anchor="middle" font-size="11" font-family="sans-serif">ridge push →</text>
  <text x="330" y="52" text-anchor="middle" font-size="11" font-family="sans-serif">← slab pull</text>
</svg>

*(Arrows show the circulation sense only — not speeds or depths. The
two cells share the central upwelling, like neighboring loops in the
soup pot.)*

**Building a quantitative model.** A model is an equation plus stated
assumptions plus an uncertainty. Today's model answers: *how far does
a plate travel in 100 million years?* The parts:

- **Inputs:** plate speed v (cm/yr), time t (yr).
- **Equation:** distance = v × t.
- **Assumptions:** speed roughly constant; motion in a straight line;
  the 2–10 cm/yr range (real reference values) brackets real plates.
- **Output:** a distance **with units** and an **uncertainty range**
  from the input range — never a single naked number.

## Worked examples (modeled reasoning)

**Example 1 — What fraction of Earth's history does the seafloor record?**

Question: the oldest oceanic crust is ~200 Ma; Earth is 4.54 Ga. What
fraction of Earth's history is recorded in the ocean floor?

*Reasoning.* Step 1 — same units: 200 Ma = 0.200 Ga.
Step 2 — divide: 0.200 / 4.54 = 0.04405…
Step 3 — as a percent: 0.04405 × 100 = **4.4%**.

Interpretation: the entire ocean floor — every seamount, trench, and
abyssal plain — records only the most recent 4.4% of Earth's story.
The other 95.6% survives only on the continents (and in meteorites).
This single number is why Lesson 03 needed meteorites to date Earth.

**Example 2 — Plate-travel model with uncertainty.**

Question: how far has a plate moving at 5 cm/yr traveled in 100 Ma?
Report with units and an uncertainty range using the real 2–10 cm/yr
spreading-rate range.

*Reasoning.* Step 1 — equation: d = v × t.
Step 2 — substitute: v = 5 cm/yr, t = 100 Ma = 100,000,000 yr.
d = 5 cm/yr × 100,000,000 yr = 500,000,000 cm.
Step 3 — convert: 500,000,000 cm = 5,000,000 m = **5,000 km**.
Step 4 — uncertainty from the input range:
- slow end: 2 cm/yr × 10⁸ yr = 2×10⁸ cm = 2,000 km;
- fast end: 10 cm/yr × 10⁸ yr = 10⁸×10 cm = 10⁹ cm = 10,000 km.

Reported result: **about 5,000 km, plausibly 2,000–10,000 km** given
real rate variation. Assumptions: constant speed, straight-line
motion, no subduction removing the plate mid-journey.

Step 5 — sense-check: 5,000 km is roughly the width of the Atlantic
Ocean — a plate can cross an ocean basin in 100 million years. The
model's scale matches the planet's scale. ✓

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. In the convection diagram: trace one full loop with your finger
   (ridge → sideways → trench → down → back). At which two places
   does matter cross between the lithosphere and the deeper mantle?
   [Look at the up and down arrows.]
2. A plate moves at 3 cm/yr for 50 Ma. How far does it travel, in km?
   [d = v × t; convert cm·yr⁻¹ × yr carefully.]
3. Using the 2–10 cm/yr range: give the uncertainty range (in km) for
   the distance in question 2. [Compute the slow end and the fast
   end.]
4. Error analysis: a learner writes "slab pull pushes plates apart at
   ridges." Identify the two errors (wrong force, wrong place) and
   state what each force actually does and where.

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Define in your own words: thermal convection, lithosphere,
   asthenosphere, ridge push, slab pull. One sentence each.
2. Explain the full loop: starting with new crust at a ridge, trace
   matter through spreading, subduction, and mantle return. (Four to
   five sentences; use "conserved.")
3. Model: a plate moves at 8 cm/yr. (a) How far in 25 Ma, in km?
   (b) Report the result with an uncertainty range using 2–10 cm/yr.
   (c) Name two assumptions your model makes.
4. A classmate claims convection means "the mantle is liquid like
   water." Write a three-sentence correction using the honey analogy
   and the word "creep."
5. Revisit Example 1: if the oldest oceanic crust were instead
   400 Ma, what fraction of Earth's history would the seafloor
   record? What does the *actual* 4.4% tell you about how completely
   the seafloor samples Earth's history? (Real 200-Ma value for the
   interpretation; the 400-Ma case is fictional practice.)

## Application

Build the unit's "first quantitative model" as a short report (half a
notebook page) answering: **how old is seafloor 750 km from a ridge
spreading at a full rate of 4 cm/yr, and how far would that flank
travel in the next 50 Ma?**

a) Compute the seafloor age (half rate first).
b) Compute the 50-Ma travel distance with an uncertainty range from
   the 2–10 cm/yr bracket.
c) Write the report: equation, substituted numbers, result with
   units, two stated assumptions, and the uncertainty range. Then
   one sentence: what would make your estimate wrong?

## Exit check

1. In two sentences: how does mantle convection connect to the
   seafloor-age pattern from Lesson 04?
2. A model reports "3,000 km." What three things are missing from that
   report? (Hint: units, assumptions, uncertainty.)

## Supports and extension

- **Reading/language access:** "Convection," "ridge push," and "slab
  pull" go in the notebook with the soup-pot sketch. The model report
  format (equation → numbers → units → assumptions → uncertainty) is
  a reusable template — copy it onto a notebook card.
- **Alternate response mode:** The convection loop may be explained
  orally while tracing the diagram; the model may be computed in a
  spreadsheet with labeled cells instead of hand arithmetic.
- **Extension:** Estimate how long a complete convection loop takes if
  mantle rock creeps at 5 cm/yr around a loop 10,000 km long. (Real
  rate-range value; the loop length is fictional practice.) Compare
  your answer to the age of the oldest seafloor — what does the
  comparison suggest about how many "laps" the mantle runs per
  ocean-basin lifetime?

## Teacher note

Likely misconceptions: (1) "convection = boiling liquid" — keep
returning to *solid creep over millions of years*; (2) reporting model
outputs without units or uncertainty — refuse the naked number every
time until the habit sticks; (3) thinking ridge push and slab pull are
rival theories rather than co-operating forces; (4) "destroyed crust"
as vanished matter — Lesson 04's teacher note applies: conserved,
recycled. The model-report template in the Application is the year's
first; it returns in every later unit. Answer-key reference:
`answer-key.md`, Lesson 05.
