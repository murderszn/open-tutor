# Lesson 01 — Unequal Heating, Pressure, Wind, and the Coriolis Effect

**Goal:** By the end of this lesson you can explain, with a model, how
unequal solar heating and Earth's rotation produce the world's wind
belts — and predict the prevailing surface wind in any latitude band.

**Time:** ~50 minutes. **Materials:** notebook, calculator, the
three-cell diagram in `../assets/three-cell-circulation.svg` (used at
the end, not at the start).

**Readiness check (2 minutes):** Warm air rises; cool air sinks. Wind
is air moving from higher pressure toward lower pressure. If you can
say both sentences and mean them, you are ready.

## 1. The Sun does not heat Earth evenly

Sunlight arrives as nearly parallel beams. Where the Sun is directly
overhead, a beam's energy lands on the smallest patch of ground, so
each square metre gets the most energy. Where the Sun is low in the
sky, the same beam spreads over a larger patch, so each square metre
gets less — and the light also travels through more atmosphere on the
way in, losing more energy before it arrives.

The rule is simple: energy per square metre is proportional to the
cosine of the angle between the Sun's rays and the vertical (the
"zenith angle"). Overhead, the zenith angle is 0° and cos 0° = 1, full
energy. At a 60° zenith angle (Sun only 30° above the horizon),
cos 60° = 0.5, half the energy per square metre.

**Worked example 1 — Sun angle.** Suppose the noon Sun delivers
about 1,000 watts per square metre (W/m²) to a surface when directly
overhead, ignoring atmospheric losses for this comparison. At a place
where the noon zenith angle is 60°, the same beam spreads over twice
the area, so the surface receives about 1,000 × cos 60° = 1,000 × 0.5
= 500 W/m². The tropics are warm largely because the Sun is high
there all year; high latitudes are cold largely because the Sun stays
low and its energy is spread thin. (Real values vary with clouds,
elevation, and atmospheric absorption; the comparison isolates the
angle effect.)

**Worked example 2 — Albedo.** Not all surfaces keep the energy they
receive. Albedo is the fraction reflected back: fresh snow reflects
about 0.8 (80%), dark ocean only about 0.06 (6%). If 500 W/m² arrives
at a snowfield, about 500 × 0.8 = 400 W/m² is reflected and only about
100 W/m² is absorbed. The same 500 W/m² over dark ocean leaves about
500 × 0.94 = 470 W/m² absorbed. That is why snow cover cools a region
twice over — it reflects energy *and* keeps the surface cold — and
why melting ice is a feedback, not just a symptom (Lesson 05 returns
to this).

**Misconception check:** "The seasons happen because Earth is closer
to the Sun in summer." No — Earth's orbit is nearly circular, and
Earth is actually slightly *farthest* from the Sun during Northern
Hemisphere summer. Seasons come from tilt: tilt aims each hemisphere's
Sun higher in its summer and lower in its winter.

## 2. From uneven heating to wind

Warm air expands, becomes less dense, and rises. Where air rises, the
surface pressure falls (a **low**). Where air sinks, surface pressure
rises (a **high**). Air flows from high pressure toward low pressure
to even the difference out — that flow is wind. The steeper the
pressure difference over a given distance (the **pressure gradient**),
the stronger the wind. This is the whole engine; everything else in
this lesson is a bend in the road.

If Earth did not rotate, the pattern would be one giant loop per
hemisphere: hot air rising at the equator, flowing toward the poles
aloft, sinking at the poles, and returning along the surface. Earth
*does* rotate, so that single loop breaks into three cells per
hemisphere. Picture a cross-section of the Northern Hemisphere:

- **Hadley cell (0°–30°):** air rises at the equator (the
  intertropical convergence zone, ITCZ — cloudy, rainy), flows
  poleward aloft, and sinks around 30° latitude. Sinking air warms
  and dries, which is why the great deserts (Sahara, Sonoran,
  Australian outback's northern edge) cluster near 30° north and
  south. The surface return flow heads back toward the equator.
- **Ferrel cell (30°–60°):** a weaker, indirect cell driven by its
  neighbors. Its surface flow heads poleward — the **westerlies**,
  the winds that carry most mid-latitude weather from west to east.
- **Polar cell (60°–90°):** cold air sinks at the pole, flows toward
  60° along the surface — the **polar easterlies** — and rises where
  it meets the Ferrel cell.

The Southern Hemisphere mirrors this, with the cells flipped.

## 3. The Coriolis effect bends everything

Earth rotates eastward. A parcel of air moving poleward carries the
eastward speed of the latitude it left; as it moves to a latitude
that rotates at a different speed, it appears to curve. The result,
the **Coriolis effect**, deflects moving air to the **right** in the
Northern Hemisphere and to the **left** in the Southern Hemisphere.
It is zero at the equator and strongest at the poles, growing roughly
with sin(latitude): at 30°, sin 30° = 0.5, about half the polar
deflection strength.

Apply it to the surface return flows:

- Hadley surface flow heads toward the equator. In the Northern
  Hemisphere it bends right — from the northeast. These are the
  **northeast trade winds**. In the Southern Hemisphere the same
  flow bends left — the **southeast trade winds**.
- Ferrel surface flow heads poleward. In the Northern Hemisphere it
  bends right — from the southwest. These are the **westerlies**
  (named for where the wind comes *from*, always).
- Polar surface flow heads toward 60°. In the Northern Hemisphere it
  bends right — from the northeast: the **polar easterlies**.

Aloft, the same logic gives the fast **jet streams** near the
boundaries between cells, especially the polar jet near 60° and the
subtropical jet near 30°. Aloft, wind can blow nearly parallel to
isobars (lines of equal pressure) because the Coriolis deflection
balances the pressure-gradient push — a qualitative balance called
geostrophic balance. At the surface, friction slows the wind, weakens
the Coriolis deflection, and lets air spiral *into* lows and *out of*
highs instead.

**Worked example 3 — Predict a wind belt.** Question: a sailing ship
at 45° N with no engine wants the most reliable wind toward Europe
from North America. Answer: it sits in the Ferrel cell, where surface
flow heads poleward and Coriolis bends it right, giving westerlies —
wind *from* the west, blowing toward the east. Sail east. Check: at
15° N the answer would instead be the northeast trades, blowing
toward the west — the wrong direction for that trip. The mechanism,
not the memorized name, is the answer.

**Worked example 4 — Why a low spins counterclockwise (NH).** Air
flows toward a surface low from all sides. Each inflowing parcel is
deflected right by Coriolis. Rightward deflection of inward flow
produces counterclockwise rotation around the low in the Northern
Hemisphere (clockwise in the Southern Hemisphere). Around a high,
outward flow deflected right produces clockwise rotation in the
Northern Hemisphere. If your sketch shows a Northern Hemisphere low
spinning clockwise, the Coriolis deflection is backwards — fix the
arrows, not the labels.

## Guided practice

1. At solar noon the zenith angle is 30°. What fraction of the
   overhead energy per square metre reaches the surface? (Use
   cos 30° ≈ 0.87.)
2. A surface with albedo 0.25 receives 800 W/m². How much is
   absorbed? How much is reflected?
3. A parcel at 20° N moves toward the equator. Which way does
   Coriolis deflect it, and what wind belt does it join?
4. Explain in two sentences why sinking air at 30° latitude tends
   to make deserts rather than rainforests.
5. **Error analysis:** A classmate writes, "The Coriolis effect is
   caused by Earth's orbit around the Sun, and it makes toilets flush
   counterclockwise in the Northern Hemisphere." Identify both
   errors and correct them. (Hint: toilet swirl is set by the bowl's
   shape and jets, not Coriolis — the effect is far too small at
   that scale.)

## Independent practice

See Practice Set A in `../practice.md`.

## Application

Using only the three-cell model, predict the prevailing surface wind
direction at (a) 10° S, (b) 50° N, (c) 75° S. For each, name the cell,
the direction of the surface flow before deflection, the Coriolis
bend, and the resulting wind name. Then check your answers against
the diagram in `../assets/three-cell-circulation.svg`.

## Exit check

In one paragraph, explain why the wind at your latitude blows the
way it usually does, naming unequal heating, a pressure difference,
and the Coriolis deflection. If you cannot name all three, re-read
sections 2 and 3 before moving on.

## Supports and extensions

- **Reading access:** read section 2 aloud with a partner and point
  to each cell on the diagram as it is named.
- **Alternate response:** answer the application by sketching arrows
  on a blank latitude strip instead of writing sentences.
- **Extension:** research how the ITCZ shifts with the seasons and
  why that shift brings a rainy season to places like India (the
  monsoon). Write a half-page mechanism, not a list of dates.

## Teacher note

Likely misconceptions: Coriolis as a force that "pushes" (it is an
apparent deflection in a rotating frame); wind named by where it goes
to (it is named by where it comes from); deserts caused by "heat
alone" (sinking, drying air is the mechanism — the hottest place on
Earth is not automatically a desert, and some deserts are cold).
Answer-key reference: `../answer-key.md` § Set A.
