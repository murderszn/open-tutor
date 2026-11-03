# Lesson 01 — The Energy Budget and the Greenhouse Effect

**Goal:** By the end of this lesson you can build Earth's
global-mean energy budget from the solar constant, compute the
temperature of a planet with no greenhouse effect, and explain why
the real Earth is about 33 °C warmer than that calculation.

**Time:** ~50 minutes. **Materials:** notebook, calculator, the
energy-budget diagram in `../assets/energy-budget.svg` (used at the
end, not at the start).

**Readiness check (2 minutes):** From Unit 03: albedo is the
fraction of incoming light a surface reflects, and energy per square
metre falls as the cosine of the Sun's zenith angle. If you can say
both and use albedo 0.8 for fresh snow, you are ready.

## 1. From a solar constant to a global mean

The Sun delivers about **1,361 watts per square metre (W/m²)** to a
surface held square-on to the rays just outside Earth's atmosphere.
That number is the **solar constant** (it varies slightly with the
solar cycle and Earth's elliptical orbit; 1,361 is the rounded
teaching value used all through this unit).

But Earth is a sphere, not a flat disc held square-on, and only one
side is lit at a time. The sunlight intercepted by the whole planet
is spread over four times the area of the disc that intercepts it
(the surface area of a sphere is 4πR²; the intercepting disc is
πR²). So the **global-mean incoming flux** is:

1,361 ÷ 4 = 340.25 ≈ **340 W/m²**.

That 340 is an average over the whole globe and the whole year:
noon at the equator gets far more, polar night gets zero, and the
average is what a climate budget must balance. If Earth absorbed
more than it emitted, it would warm until the two matched; if it
emitted more, it would cool. A stable climate is, to first order,
an energy balance.

**Worked example 1 — The budget in three numbers.** About 30% of
the incoming 340 W/m² is reflected straight back to space — by
clouds, by the atmosphere, and by bright surfaces. Earth's
**planetary albedo** is therefore about 0.30.

- Reflected: 340 × 0.30 = **102 W/m²**.
- Absorbed: 340 − 102 = **238 W/m²**.
- For balance, outgoing infrared to space must also be
  **238 W/m²**.

Those three numbers — 340 in, 102 out by reflection, 238 out as
infrared — are the whole global-mean budget in one line. Every
climate change in this unit is, at bottom, a change in one of
them: more absorption, less reflection, or a change in how easily
infrared escapes.

**Worked example 2 — A darker planet.** Suppose a planet identical
to Earth except that its planetary albedo is 0.20 instead of 0.30.
Reflected = 340 × 0.20 = 68 W/m². Absorbed = 340 − 68 = 272 W/m².
It absorbs 34 W/m² more than Earth does, so it must emit 34 W/m²
more infrared to balance — and, as section 2 shows, emitting more
means being warmer. Albedo is not a decoration on the budget; it
*is* the budget, in part.

**Misconception check:** "The Sun heats the ground, and the ground
heats the air, so the greenhouse effect is heat trapped under a
lid." No lid is involved. The atmosphere is mostly transparent to
incoming visible sunlight and partly *absorbing* to outgoing
infrared. Greenhouse gases absorb infrared coming up from the
surface and re-emit it in all directions — half of it back down.
The surface must then warm until the infrared that finally escapes
to space once again equals the 238 W/m² absorbed. Nothing is
sealed; the flow is slowed, not stopped.

## 2. How warm would Earth be with no greenhouse effect?

A warm object emits infrared radiation. The **Stefan–Boltzmann
law** says the emitted flux E (in W/m²) is:

E = σT⁴, where σ = 5.67 × 10⁻⁸ W/m²/K⁴ and T is the absolute
temperature in kelvin.

If Earth had no greenhouse gases at all, the surface would emit
directly to space, so the emitted flux would have to equal the
absorbed flux, 238 W/m². Solve for T:

T⁴ = 238 ÷ (5.67 × 10⁻⁸) = 4.20 × 10⁹.
T = (4.20 × 10⁹)^(1/4) ≈ **255 K**.

Convert: 255 − 273 = **−18 °C**. That is the **effective
radiating temperature** of Earth — the temperature a bare,
airless Earth at our distance from the Sun would average.

But Earth's actual global-mean surface temperature is about
**288 K (15 °C)**. The gap is 288 − 255 = **33 °C**. That gap is
the greenhouse effect: the surface emits about
σ × 288⁴ = 5.67 × 10⁻⁸ × 6.88 × 10⁹ ≈ **390 W/m²** of infrared,
far more than the 238 W/m² that leaves at the top of the
atmosphere, because greenhouse gases absorb much of the upward
infrared and send part of it back down. The surface sits warmer
until the trickle that finally escapes equals the 238 coming in.
(Do not confuse the two numbers: 390 is what the *surface*
emits; 238 is what *space* receives. The difference is recycled
inside the atmosphere.)

**Worked example 3 — Checking 390.** Compute σ × 288⁴ step by
step: 288² = 82,944; 288⁴ = 82,944² ≈ 6.88 × 10⁹. Multiply by
5.67 × 10⁻⁸: 6.88 × 10⁹ × 5.67 × 10⁻⁸ = 6.88 × 5.67 × 10 ≈
390 W/m². A calculator's power key does the same job; the point
is that a 33 K temperature difference corresponds to a large flux
difference because emission grows as the *fourth power* of
temperature — doubling the temperature would multiply emission
by sixteen.

**Worked example 4 — A brighter Sun.** Suppose the solar constant
rose 1%, to about 1,375 W/m². Global-mean incoming becomes
1,375 ÷ 4 ≈ 344 W/m²; absorbed becomes 344 × 0.70 ≈ 241 W/m².
The new effective temperature is (241 ÷ σ)^(1/4) ≈ 256 K — only
about 1 K warmer. Small forcing, small direct response: this is
why Lesson 02's feedbacks matter so much, and why the observed
warming cannot be explained by the small measured changes in
solar output (Lesson 04).

## 3. Why only some gases are greenhouse gases

Sunlight arrives mostly as visible light, which nitrogen (N₂) and
oxygen (O₂) — about 99% of dry air — let straight through, and
which they also do not absorb as infrared. Greenhouse gases are
the minority gases whose molecules can vibrate in ways that absorb
infrared: water vapor (H₂O), carbon dioxide (CO₂), methane (CH₄),
nitrous oxide (N₂O), and ozone (O₃). Two consequences follow:

- **Abundance is not the same as importance.** CO₂ is only about
  0.04% of the atmosphere (about 426 ppm in autumn 2026), yet it
  matters because it absorbs in a part of the infrared spectrum
  where water vapor does not already absorb everything — the
  "window" around 15 micrometres — and because it stays in the
  air for centuries, so its concentration is set by cumulative
  emissions, not by today's weather.
- **Water vapor is a feedback, not a forcing, in this story.**
  Warm air holds more water vapor (about 7% more per 1 °C), so
  water vapor amplifies a warming started by something else — but
  it rains out within days, so humans cannot set its level
  directly. Lesson 02 takes this up properly. Do not let any
  account that ranks gases by abundance alone mislead you: the
  question is always *which wavelengths* a gas absorbs and *how
  long* it stays.

A classroom greenhouse is a poor analogy and a useful warning:
a real greenhouse warms mostly because its glass stops warm air
from rising away (convection), not because it absorbs infrared.
Earth's greenhouse effect is radiative, not a sealed box. The
PhET Greenhouse Effect simulation (Session S3) shows the
radiative version: sunlight photons pass the atmosphere, the
surface emits infrared photons, and greenhouse-gas concentration
controls how many infrared photons escape.

## Guided practice

1. Incoming solar radiation averages 340 W/m² and planetary albedo
   is 0.30. Show the reflected and absorbed fluxes.
2. A planet absorbs 200 W/m² and has no greenhouse effect. Use
   E = σT⁴ to estimate its effective radiating temperature in K
   and °C. (Hint: rearrange E = σT⁴ to solve for T.)
3. Explain in two sentences why Earth's surface can emit 390 W/m²
   while only 238 W/m² leaves the top of the atmosphere.

## Independent practice

4. If Earth's albedo fell from 0.30 to 0.25, what would the new
   absorbed flux be? By how many W/m² would absorbed energy rise?
5. The Moon has almost no atmosphere and absorbs about 238 W/m²
   on average (it is at Earth's distance, with low albedo partly
   offsetting its dark surface — use 238 as given). Estimate its
   mean surface temperature and compare it with Earth's 288 K.
   Why is the comparison instructive but not exact? (The Moon's
   day–night swing is enormous; a single mean hides it.)
6. A learner says: "CO₂ is only 0.04% of the air, so it cannot
   matter." Write the correction, using wavelength and lifetime,
   in at most four sentences.

## Applied task

7. Sketch the energy-budget diagram from memory: incoming 340,
   reflected 102, absorbed 238, outgoing infrared 238, surface
   emission about 390 with a downward return arrow. Then check it
   against `../assets/energy-budget.svg` and correct every label
   you missed. Write one sentence saying which arrow a rise in
   greenhouse gases changes first, and why.

## Exit check

8. Without notes: state the three budget numbers, the
   no-greenhouse temperature, and the observed surface
   temperature — and say in one sentence what the 33 °C gap is.

## Supports and extensions

- **Reading access:** read the lesson aloud in pairs; say every
  unit ("watts per square metre") in full the first time it
  appears.
- **Alternate response mode:** the diagram task (item 7) may be
  answered as a labeled sketch or as a spoken walk-through of the
  arrows.
- **Extension:** compute the effective temperature if absorbed
  flux rose to 242 W/m² (the Lesson 01 worked-example family) and
  explain why the direct temperature response to a few W/m² is
  small — then predict what Lesson 02 will add to the story.

**Teacher note:** the common failure here is treating 390 and
238 as contradictory. Re-teach with the two-level picture: the
surface and the top of the atmosphere are different levels with
different budgets. Answers: see `answer-key.md`, Lesson 01.
