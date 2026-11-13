# Lesson 04 — Coulomb's Law: The Other Inverse-Square Force

**Unit 05 · Session S7 · ~50 minutes**
**Standards:** unit objective 4 (track objective 7)

## Student goal

By the end of this lesson I can compute the electrostatic force
between two charges with `F = k q₁ q₂ / r²`; I can compare it
with gravitation, force for force; and I can explain why gravity
rules planets while electrostatics rules atoms.

## Materials

Notebook, pencil, calculator. Constants table: `k = 8.99 × 10⁹
N m² C⁻²`, elementary charge `e = 1.602 × 10⁻¹⁹ C`,
`G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²`.

## Readiness check (5 min)

4.1. Rub a balloon on cloth and hold it near a wall: it sticks.
Gravity also pulls the balloon toward Earth. Which force is
holding it to the wall — and why doesn't gravity win and pull it
straight down? Answer in two sentences.
4.2. Before reading on: gravity is always attractive. Is the
electrostatic force always attractive? If not, when does it
attract and when does it repel?

## Explicit teaching

Electric charge comes in two kinds, positive and negative. Like
charges repel; opposite charges attract. Coulomb's law gives the
size of the force:

`F = k × (q₁ × q₂) / r²`

- `q₁` and `q₂` are the two charges, in coulombs (C).
- `r` is the distance between the charges, in meters.
- `k = 8.99 × 10⁹ N m² C⁻²` is the Coulomb constant.
- The sign of the product `q₁ q₂` tells you the direction:
  positive means repulsion, negative means attraction. The
  magnitude is `|F|`.

**Same shape, different strength.** Put the two laws side by
side:

| | Gravitation | Electrostatics |
|---|---|---|
| Law | `F = G M m / r²` | `F = k q₁ q₂ / r²` |
| Constant | `G = 6.67 × 10⁻¹¹` | `k = 8.99 × 10⁹` |
| Source | mass (always positive) | charge (positive or negative) |
| Direction | always attractive | attract or repel |
| Range | infinite, never cancels | infinite, but cancels in neutral matter |

Both are inverse-square laws: double the distance, quarter the
force. Both act at a distance with no contact. The difference is
scale. `k` is about `10²⁰` times bigger than `G` in SI units, and
a single electron carries `1.602 × 10⁻¹⁹ C` — a small charge by
everyday standards, but an enormous one for its mass. The result:
between two protons, the electrostatic repulsion is about
`10³⁶` times stronger than their gravitational attraction; between
an electron and a proton in a hydrogen atom, the electric force
is about `10³⁹` times stronger than gravity (Worked Example 2).
Electrostatics rules the atomic world.

**So why does gravity rule the planets?** Because charge cancels
and mass does not. A planet is electrically neutral to a very
good approximation: its positive and negative charges balance,
so their electrostatic forces cancel almost exactly. Its mass
does not cancel — every kilogram adds to the pull. Gravity is
the weakest force between two particles, but it is the only one
that always adds up, so over astronomical distances it is the
only one left standing. That is the whole answer to the readiness
question: the balloon sticks because a small net charge on its
surface produces an electrostatic force larger than its tiny
weight — charge beats mass at small scales, every time.

**Fields (a first look).** Physicists describe both forces with
the idea of a *field*: a mass creates a gravitational field
around itself, and another mass feels a force from that field;
a charge creates an electric field, and another charge feels a
force from it. You will use the field model in Lesson 06 and
again in Unit 07. For now, the working idea is: the field is
what carries the force across empty space, and it falls off as
`1 / r²` for both laws.

## Worked examples (modeled reasoning)

**Example 1 — Two small charges.** Two charges of `+1.0 µC`
each (`1 µC = 1 × 10⁻⁶ C`) sit 0.10 m apart in air. Find the
force between them. What happens if the distance doubles?

*Reasoning:* Substitute:
`F = k q₁ q₂ / r² = 8.99 × 10⁹ × (1.0 × 10⁻⁶) × (1.0 × 10⁻⁶)
/ (0.10)² = 8.99 × 10⁹ × 1.0 × 10⁻¹² / 0.010 = 0.90 N`.
The charges are both positive, so the force is repulsive: each
charge is pushed away from the other with 0.90 N — about the
weight of a small apple, from charges you could hold on a
fingertip. If the distance doubles to 0.20 m, the inverse-square
law quarters the force: `0.90 / 4 = 0.22 N`. Same scaling as
gravity, same `1 / r²`.

**Example 2 — The hydrogen atom: electricity beats gravity by
10³⁹.** An electron (`m = 9.109 × 10⁻³¹ kg`,
`q = −1.602 × 10⁻¹⁹ C`) and a proton
(`m = 1.673 × 10⁻²⁷ kg`, `q = +1.602 × 10⁻¹⁹ C`) sit
`5.29 × 10⁻¹¹ m` apart (the Bohr radius). Compare the electric
and gravitational forces between them.

*Reasoning:* Electric:
`F_e = k e² / r² = 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)² / (5.29 × 10⁻¹¹)²
= 8.24 × 10⁻⁸ N` (attractive). Gravitational:
`F_g = G m_e m_p / r² = 6.67430 × 10⁻¹¹ × 9.109 × 10⁻³¹ ×
1.673 × 10⁻²⁷ / (5.29 × 10⁻¹¹)² = 3.63 × 10⁻⁴⁷ N`. The ratio
is `F_e / F_g = 8.24 × 10⁻⁸ / 3.63 × 10⁻⁴⁷ ≈ 2.3 × 10³⁹`.
Gravity is utterly negligible inside the atom — which is why
chemistry and atomic physics never mention it. But add up the
masses of `10²⁴` atoms with their charges canceled, and gravity
is the only force left. Scale decides which law matters.

## Guided practice

Work these with the adult or a partner; state the scaling factor
before computing any number.

4.3. Two charges, `+2.0 µC` and `−3.0 µC`, sit 0.50 m apart.
Compute the force magnitude and state whether it is attractive
or repulsive.
4.4. Two electrons sit 1.0 nm (`1.0 × 10⁻⁹ m`) apart. Compute the
electrostatic repulsion between them. (Use `e = 1.602 × 10⁻¹⁹ C`.)
4.5. A learner says, "Gravity is the strongest force, because it
holds the whole solar system together." Explain the error in two
sentences, using the hydrogen-atom comparison and the idea of
charge canceling.

## Independent practice

4.6. A proton and an electron sit `1.0 × 10⁻¹⁰ m` apart. Compute
the electric force between them. Then compute the gravitational
force between them and state how many times stronger the electric
force is (give the power of ten).
4.7. Two identical charges repel with 0.36 N at 0.20 m apart.
What is the force if they move to 0.60 m apart? Use the scaling
rule first, then confirm by noting that each charge must be
`q = √(F r² / k)` — compute `q` as a check.
4.8. (Error analysis.) A learner writes: "Coulomb's law only
works for attraction, like gravity." Identify the error and
rewrite the sentence correctly, including what decides attract
vs. repel.

## Application

A dust grain in a clean room carries a net charge of
`+5.0 × 10⁻⁹ C` and sits 0.020 m from an identical grain.
(a) Compute the electrostatic repulsion between them.
(b) Each grain has mass `2.0 × 10⁻⁹ kg`. Compute the
gravitational attraction between them. (c) Which force is larger,
and by what factor? Explain in one sentence why dust grains do
not clump together by gravity. (Numbers are practice values.)

## Exit check

Write both inverse-square laws side by side from memory. Name
one way they are alike and two ways they differ. A neutral planet
and a neutral star attract by gravity but (nearly) not by
electrostatics — why?

## Supports and extension

- **Reading/language access:** say "like pushes like away,
  opposites pull together" instead of "electrostatic repulsion /
  attraction" until the idea is secure, then attach the terms.
- **Alternate response mode:** sort a set of charge pairs
  (+/+, −/−, +/−) into "attract" and "repel" columns before doing
  any numbers.
- **Extension:** research, in one paragraph, how the Cavendish
  experiment (1798) measured `G` in a laboratory — and why no
  equivalent tabletop experiment is needed to measure `k`.

## Teacher note

The durable error is "gravity is strongest because it holds
planets together." The fix is the ratio: `10³⁹` at atomic scale
vs. total cancellation at planetary scale. Learners also
commonly forget that `r` is center-to-center and that the sign
of `q₁ q₂` carries the direction — require the
attract/repel word in every answer before the number. Note the
assessment boundary (HS-PS2-4): two-body systems only. Answer-key
reference: items 4.1–4.8 and the application.
