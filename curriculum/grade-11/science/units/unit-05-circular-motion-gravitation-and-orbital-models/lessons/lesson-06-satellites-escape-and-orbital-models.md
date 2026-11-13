# Lesson 06 — Satellites, Escape, and Orbital Models

**Unit 05 · Session S13 · ~50 minutes**
**Standards:** unit objective 5 (track objective 7); HS-PS3-5
(field model)

## Student goal

By the end of this lesson I can explain why satellites stay in
orbit using the free-fall argument; I can compute escape velocity
`v_esc = √(2 G M / r)`; and I can describe what the circular-orbit
model gets right, what it leaves out, and when it breaks down.

## Materials

Notebook, pencil, calculator. Constants table (from the unit
README). Optional: the PhET "Gravity and Orbits" simulation
(adult previews first).

## Readiness check (5 min)

6.1. An astronaut on the ISS floats. A learner says, "There is
no gravity in space." Use Lesson 03's application (g at 400 km
is about 8.7 m/s²) to correct that claim in two sentences.
6.2. Throw a ball horizontally from a cliff. Throw it faster and
it lands farther away. What would happen if you could throw it
fast enough that the ground curves away beneath it as fast as it
falls? Sketch or describe the path.

## Explicit teaching

**A satellite is falling — and missing.** A satellite in orbit
is in continuous free fall toward Earth, exactly like a dropped
ball. The difference is sideways speed. Throw a ball horizontally
and it falls while it moves forward, landing some distance away.
Throw it faster and it lands farther. At about 7.7 km/s (for a
low orbit), the ball falls toward Earth at exactly the rate the
curved surface of Earth falls away beneath it — so it never gets
any closer to the ground. It is falling around Earth, not onto
it. That is why astronauts float: they and the station are
falling together, so nothing pushes them against a floor. Gravity
at 400 km is still about 89% of surface gravity — "weightlessness"
is free fall, not zero gravity. This is the answer to Readiness
6.1 and the core of the whole unit: orbit is falling with enough
sideways speed to keep missing the ground.

**Escape velocity.** How fast must an object go to leave Earth
altogether — to coast to infinity and never fall back? Energy
gives the answer (Unit 03: kinetic energy `½ m v²`, and the
gravitational potential energy of a mass `m` at distance `r`
from a mass `M` is `−G M m / r`). Escape means reaching infinity
with zero speed left, where the total energy is zero:

`½ m v_esc² − G M m / r = 0`, so `v_esc = √(2 G M / r)`

For Earth at its surface (`r = R_earth`):
`v_esc = √(2 × 6.67430 × 10⁻¹¹ × 5.9722 × 10²⁴ / 6.371 × 10⁶)
= 11.2 km/s`. Compare with orbital speed at the surface,
7.91 km/s: escape is exactly `√2` times orbital speed at the
same distance. For the Moon: `v_esc = 2.38 km/s`. For the Sun's
surface: `v_esc = 618 km/s`. Escape velocity depends only on the
central body's mass and the starting distance — not on the
escaping object's mass, and not on the direction of launch (in
the no-atmosphere idealization; real rockets also fight air
resistance and use Earth's rotation).

**Geostationary orbits.** A satellite whose period is one day
(23.9 h) stays above the same point on the equator. Lesson 05's
practice showed its distance: `r ≈ 4.22 × 10⁷ m`, altitude about
35,800 km, speed about 3.07 km/s. Communications and weather
satellites live there because a ground antenna can point at one
fixed spot in the sky. The price is distance: signals take about
a quarter of a second to go up and back, which is why satellite
internet feels laggy.

**The orbital model and its limits (HS-PS3-5).** The model in
this unit is: two bodies, a central mass, a circular orbit, a
gravitational field that falls off as `1 / r²`. It predicts
speeds, periods, and Kepler's law, and the planet data confirms
it. It leaves out: elliptical orbits (Kepler's first law — real
orbits are ellipses, and planets speed up near the Sun); the
pull of other bodies (the Moon tugs Earth, Jupiter tugs the
asteroids); non-spherical mass (Earth's equatorial bulge slowly
turns satellite orbits); and the atmosphere (low orbits decay
as air drag steals energy — the ISS is regularly reboosted).
A model is judged by what it predicts correctly and by knowing
where it stops working. This one predicts the solar system to
within a few percent and fails gracefully — exactly what a good
first model should do.

## Worked examples (modeled reasoning)

**Example 1 — Escape from Mars.** Compute the escape velocity
from Mars's surface (`M_mars = 6.39 × 10²³ kg`,
`R_mars = 3.39 × 10⁶ m`) and compare with Earth's 11.2 km/s.

*Reasoning:* `v_esc = √(2 G M / R) = √(2 × 6.67430 × 10⁻¹¹ ×
6.39 × 10²³ / 3.39 × 10⁶) = √(2.52 × 10⁷) = 5.02 × 10³ m/s`,
about 5.0 km/s — less than half Earth's, because Mars is smaller
and less massive. A Mars rocket needs far less speed to leave,
which is one reason Mars sample-return missions are planned
around a small ascent vehicle rather than a Saturn-scale rocket.
Check the pattern: escape velocity grows with `√(M / R)`.

**Example 2 — Why the ISS needs reboosts.** The ISS orbits at
about 7.67 km/s. Air drag at 400 km is tiny but not zero; it
removes energy, so the station slowly loses altitude. Suppose
drag lowers its speed by 1.0 m/s. Does it speed up or slow down
as it falls to a lower orbit?

*Reasoning:* This is the classic trap, and the answer is
counterintuitive: it speeds up. A lower orbit has a *higher*
orbital speed (`v = √(G M / r)` — smaller `r`, larger `v`), so
as the station sinks it moves faster, even though drag is
removing total energy (the lost energy comes out of
gravitational potential energy, and more than enough converts to
kinetic energy). The station falls inward and speeds up until
drag grows strong enough to burn it up — which is why the ISS is
periodically reboosted to a higher orbit. Satellites do not slow
down and drop; they speed up and burn.

## Guided practice

Work these with the adult or a partner; name the model you are
using before substituting numbers.

6.3. Compute the escape velocity from the Moon's surface
(`M_moon = 7.342 × 10²² kg`, `R_moon = 1.7374 × 10⁶ m`).
Compare with Earth's 11.2 km/s and explain the difference in
one sentence.
6.4. A communications satellite must stay over the equator with
a period of 24 h. Use `v = √(G M_earth / r)` and
`T = 2π r / v` (or Kepler's third law) to confirm its orbital
speed is about 3.07 km/s at `r = 4.22 × 10⁷ m`. Why must it
orbit above the equator, and not above some other latitude?
6.5. A learner says, "The ISS astronauts float because there is
no gravity at 400 km." Correct the claim with two numbers from
this unit (g at 400 km, and what the astronauts and the station
are doing together).

## Independent practice

6.6. A satellite orbits Earth at `r = 3 R_earth`. Compute its
orbital speed and its escape velocity at that distance. Show
that escape is `√2` times orbital speed there too.
6.7. List three things the two-body circular-orbit model leaves
out, and for each one name a real situation where leaving it out
would give a wrong prediction.
6.8. (Error analysis.) A learner writes: "A satellite stays up
because the centrifugal force balances gravity." Identify the
error and rewrite the sentence correctly, using the free-fall
argument.

## Application

A space agency plans a small probe to orbit the asteroid Bennu
(`M ≈ 7.3 × 10¹⁰ kg`, radius ≈ 250 m). (a) Compute the orbital
speed for a circular orbit at `r = 1.0 km` from Bennu's center.
(b) Compute the escape velocity there. (c) Explain in two
sentences why orbiting an asteroid is slow, delicate work — and
why a walking-speed nudge could escape it entirely. (Numbers are
practice values.)

## Exit check

In two sentences, explain why a satellite does not fall to the
ground, using the words *free fall* and *sideways speed*. Then
state the escape-velocity formula and the value for Earth.

## Supports and extension

- **Reading/language access:** say "falling around Earth, not
  onto it" instead of "orbital free fall" until the idea is
  secure, then attach the term.
- **Alternate response mode:** draw the cannonball sequence —
  three throws at increasing speed, the third circling the planet
  — and narrate what changes at each step.
- **Extension:** research, in one paragraph, one real mission
  that used a gravity assist (for example, Voyager, Cassini, or
  Parker Solar Probe) and explain, qualitatively, how a planet's
  gravity changed the spacecraft's speed without any fuel.

## Teacher note

The durable errors are "no gravity in space" and "centrifugal
force holds satellites up." Both are fixed by the free-fall
argument, which is worth acting out: drop a ball while walking
forward, then imagine walking faster and faster. The ISS-speeds-up
example is genuinely surprising — let the learner sit with the
surprise and check it against `v = √(G M / r)` rather than
arguing from intuition. Note the model-limits discussion is a
required HS-PS3-5 element: the learner must name what the model
omits, not just what it predicts. Answer-key reference: items
6.1–6.8 and the application.
