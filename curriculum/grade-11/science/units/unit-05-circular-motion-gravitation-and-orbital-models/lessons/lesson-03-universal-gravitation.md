# Lesson 03 — Newton's Law of Universal Gravitation

**Unit 05 · Session S5 · ~50 minutes**
**Standards:** unit objective 3 (track objective 7)

## Student goal

By the end of this lesson I can compute the gravitational force
between two masses with `F = G M m / r²`; I can use inverse-square
reasoning to predict how the force changes; and I can compute
weight on Earth, the Moon, and Mars and explain why weight is not
mass.

## Materials

Notebook, pencil, calculator. Constants table (from the unit
README): `G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²`,
`M_earth = 5.9722 × 10²⁴ kg`, `R_earth = 6.371 × 10⁶ m`.

## Readiness check (5 min)

3.1. You weigh 700 N on Earth. Your mass is about 71 kg. If you
traveled to the Moon, would your mass change? Would your weight
change? Answer before reading on — and say which one a bathroom
scale actually measures.
3.2. Two identical magnets attract each other. Move them twice as
far apart. Does the pull get twice as weak, four times as weak,
or stay the same? Gravity behaves the same way — hold that
thought.

## Explicit teaching

Every mass attracts every other mass. Newton's law of universal
gravitation says how much:

`F = G × (M × m) / r²`

- `F` is the magnitude of the gravitational force, in newtons.
  It pulls each mass toward the other, equal and opposite
  (Newton's third law — Unit 02, Lesson 02).
- `M` and `m` are the two masses, in kilograms.
- `r` is the distance **between the centers** of the two masses,
  in meters — not between their surfaces. For a person standing
  on Earth, `r` is Earth's radius, about `6.371 × 10⁶ m`.
- `G` is the gravitational constant,
  `G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²` (NIST CODATA). It is tiny,
  which is why you never feel the pull of a classmate — only
  planet-sized masses produce noticeable gravity.

**Inverse-square reasoning.** The `1 / r²` is the whole shape of
the law. Double the distance and the force falls to one quarter
(`1 / 2² = 1/4`). Triple the distance and it falls to one ninth.
Halve the distance and it grows four times. Double one mass and
the force doubles; double both masses and it quadruples. Every
gravitation question in this unit is one of these scalings, or a
direct substitution — never a memorized special case.

**Weight is a force; mass is not.** Your weight on Earth is the
gravitational force Earth exerts on you:

`W = m g`, with `g = G M_earth / R_earth²`

Check it: `G M_earth / R_earth² = 6.67430 × 10⁻¹¹ × 5.9722 × 10²⁴
/ (6.371 × 10⁶)² = 9.82 m/s²`, which is `g = 9.80 m/s²` to three
significant figures. The `g` you have used all year *is* Earth's
gravitation, written in local form. Your mass is the same
everywhere; your weight changes with `g`. On the Moon,
`g_moon = 1.62 m/s²`, so the same person weighs about one sixth
as much — same mass, weaker pull.

**Why the Moon's orbit and the falling apple are one law.**
Lesson 01 computed the Moon's centripetal acceleration:
`a_c = 2.7 × 10⁻³ m/s²`. Earth's gravity at the Moon's distance
is `g = G M_earth / r² = 6.67430 × 10⁻¹¹ × 5.9722 × 10²⁴ /
(3.844 × 10⁸)² = 2.70 × 10⁻³ m/s²`. The two numbers match. The
same pull that drops an apple `9.80 m/s²` at Earth's surface
also bends the Moon's path — weaker only because the Moon is
about 60 Earth radii away (`1 / 60² ≈ 1 / 3600`, and
`9.80 / 3600 = 2.72 × 10⁻³ m/s²`). Newton saw that one
inverse-square law covers both. Lesson 05 turns this match into
orbital speeds.

## Worked examples (modeled reasoning)

**Example 1 — Your weight, three ways.** A 70.0 kg person stands
on Earth. What is their weight on Earth, on the Moon
(`g_moon = 1.62 m/s²`), and at a height of one Earth radius above
the surface (so `r = 2 R_earth`)?

*Reasoning:* Weight is `W = m g`. On Earth:
`W = 70.0 kg × 9.80 m/s² = 686 N`. On the Moon:
`W = 70.0 kg × 1.62 m/s² = 113 N` — same mass, one-sixth the
weight. At `r = 2 R_earth` the distance has doubled, so by the
inverse-square law the pull is one quarter:
`W = 686 N / 4 = 172 N`. Equivalently,
`g = 9.80 / 4 = 2.45 m/s²` there, and `70.0 × 2.45 = 172 N`.
A bathroom scale would read about 70 kg on Earth, about 12 kg on
the Moon, and about 18 kg at that height — but the person's mass
is 70.0 kg in all three places. The scale measures force and
divides by Earth's `g`; off Earth, its reading is meaningless.

**Example 2 — Earth pulls the Moon; the Moon pulls back.**
Compute the gravitational force between Earth
(`M = 5.9722 × 10²⁴ kg`) and the Moon
(`m = 7.342 × 10²² kg`) at their mean separation
`r = 3.844 × 10⁸ m`.

*Reasoning:* Substitute directly:
`F = G M m / r² = 6.67430 × 10⁻¹¹ × 5.9722 × 10²⁴ × 7.342 × 10²²
/ (3.844 × 10⁸)²`. The numerator is
`6.67430 × 10⁻¹¹ × 4.385 × 10⁴⁷ = 2.927 × 10³⁷`;
the denominator is `1.478 × 10¹⁷`. So
`F = 1.98 × 10²⁰ N`. That is an enormous force — and it is also
exactly the centripetal force the Moon needs:
`F_c = m a_c = 7.342 × 10²² kg × 2.7 × 10⁻³ m/s² = 1.98 × 10²⁰ N`.
Gravity *is* the centripetal force for the Moon. The Moon pulls
Earth back with the same `1.98 × 10²⁰ N` (third law), which is
why Earth wobbles slightly and why the Moon raises the tides.

## Guided practice

Work these with the adult or a partner; write the scaling factor
before computing any number.

3.3. Two 50 kg students stand 1.0 m apart (center to center).
Compute the gravitational force between them. Explain in one
sentence why they do not feel it.
3.4. A 60.0 kg astronaut stands on Mars
(`M_mars = 6.39 × 10²³ kg`, `R_mars = 3.39 × 10⁶ m`). First
compute Mars's surface gravity `g_mars = G M / R²`, then the
astronaut's weight there. (Known value to check against:
`g_mars ≈ 3.71 m/s²`.)
3.5. The Sun–Earth gravitational force is `3.54 × 10²² N`. If
Earth were moved to twice its current distance from the Sun (same
masses), what would the force become? If instead the Sun's mass
doubled at the same distance, what would it become? Answer both
with the scaling rule, then confirm the first by calculation.

## Independent practice

3.6. A 1,000 kg satellite orbits Earth at `r = 2 R_earth`.
Compute the gravitational force on it. (Hint: its weight at the
surface would be 9,800 N; use the inverse-square scaling, then
confirm by direct substitution.)
3.7. Explain why `g` is slightly smaller at the top of a tall
mountain than at sea level, and estimate the change for a 5.0 km
mountain: use `g ∝ 1 / r²` with `r = 6.371 × 10⁶ m` at sea level.
Is the change big enough to notice on a bathroom scale?
3.8. (Error analysis.) A learner writes: "Gravity gets weaker
with distance, so at twice the distance the force is half."
Identify the error, state the correct factor, and give the
general rule in one sentence.

## Application

The International Space Station orbits at about 400 km above
Earth's surface (`r = 6.771 × 10⁶ m`). (a) Compute `g` at the
station's altitude from `g = G M_earth / r²`. (b) A 75 kg
astronaut's weight there is how many newtons — and what fraction
of their 735 N surface weight is that? (c) Explain in two
sentences why the astronaut floats even though gravity there is
still strong. (Numbers are practice values; the free-fall
explanation is Lesson 06.)

## Exit check

State Newton's law of universal gravitation in words and in
symbols. A planet moves to three times its original distance
from its star. By what factor does the star's pull on it change?
Would the planet's mass change? Would its weight (the pull) change?

## Supports and extension

- **Reading/language access:** say "pull gets weaker as the square
  of the distance" instead of "inverse-square law" until the idea
  is secure, then attach the term.
- **Alternate response mode:** use a table of distance factors
  (1, 2, 3, 4) and force factors (1, 1/4, 1/9, 1/16) and point to
  the row that answers each question before writing any equation.
- **Extension:** compute the Sun–Earth force yourself from
  `G`, `M_sun = 1.989 × 10³⁰ kg`, `M_earth = 5.9722 × 10²⁴ kg`,
  and `r = 1.496 × 10¹¹ m`, and check it against the
  `3.54 × 10²² N` quoted in Guided Practice 3.5.

## Teacher note

The durable errors are "weight = mass" and "twice the distance,
half the force." Both are fixed by the scaling table, not by more
calculation: make the learner say the factor first, then compute.
The Moon's `a_c` matching `g` at the Moon's distance is the
unit's central insight — do not rush past it; it is the whole
reason Lesson 05's derivation works. Note the assessment boundary
(HS-PS2-4): two-body systems only; three-body problems are out
of scope. Answer-key reference: items 3.1–3.8 and the application.
