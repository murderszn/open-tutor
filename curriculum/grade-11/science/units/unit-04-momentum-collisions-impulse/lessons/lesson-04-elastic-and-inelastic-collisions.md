# Lesson 04 — Elastic, Inelastic, and the Kinetic-Energy Check

**Unit 04 · Session S8 · ~50 minutes**
**Standards:** unit objective 4 (track objective 6); HS-PS2-2

## Student goal

By the end of this lesson I can classify a collision as elastic,
inelastic, or perfectly inelastic by testing momentum and kinetic
energy before and after, and I can compute and explain kinetic energy
lost in an inelastic collision.

## Materials

Notebook, pencil, calculator.

## Readiness check (5 min)

4.1. Two carts stick together after colliding. Is their total
kinetic energy after the collision larger, smaller, or equal to
before? Defend your answer without numbers, using what "sticking"
does to the motion.

4.2. A learner claims, "Momentum is conserved, so kinetic energy
must be conserved too — they are both conserved quantities." What
is wrong with the word "so" in that sentence?

## Explicit teaching

Lesson 03 established one conservation law. This lesson adds a test
that separates collisions into types — and shows that a second
quantity, kinetic energy, obeys a different rule.

**Momentum is conserved in every collision** of an isolated system,
whatever happens to the objects. Kinetic energy is conserved **only
in elastic collisions**. The three types:

- **Elastic collision:** Objects rebound with no lasting deformation
  and (ideally) no heat or sound loss. Both momentum **and** kinetic
  energy are conserved. Real examples are approximate: billiard
  balls and the spring-bumper carts of Lesson 03 come close, but
  some energy always escapes as sound and heat in practice.
- **Inelastic collision:** Objects deform, warm up, or make sound.
  Momentum is conserved; kinetic energy is **not** — some of it is
  transformed into thermal energy, sound, and deformation energy.
  The objects may or may not stick together.
- **Perfectly inelastic collision:** The extreme inelastic case: the
  objects stick together and move with one common velocity. Momentum
  is conserved; kinetic energy loss is at its maximum for the given
  initial motion.

The classification routine is a **two-quantity test**:

1. Compute total momentum before and after. (In an isolated system
   they match — if they do not, check signs and arithmetic first,
   then whether an external force acted.)
2. Compute total kinetic energy before and after with
   `KE = ½mv²` summed over both objects.
3. If kinetic energy matches (within rounding), the collision is
   elastic. If it is smaller afterwards, the collision is inelastic;
   the difference is the energy transformed, and a good answer names
   where it went: deformation, heat, sound.

Note what `½mv²` implies: kinetic energy uses speed squared, so
direction does not matter for energy, and doubling a speed quadruples
that object's kinetic energy while only doubling its momentum. That
is why a head-on stick-together collision can conserve momentum
(the opposite momenta cancel) while losing a large fraction of its
kinetic energy.

**A special elastic result worth remembering.** When two objects of
**equal mass** collide elastically in one dimension and one is
initially at rest, they **exchange velocities**: the moving object
stops and the resting object takes its velocity. Lesson 03's image
carts are not this case (different masses), but the PhET simulation
in Session S7 will show the exchange directly. The result follows
from solving the momentum and energy equations together; the
extension below sketches that solution for the general case.

## Worked examples (modeled reasoning)

**Example 1 — Elastic exchange.** A 1.0 kg cart moves right at
4.0 m/s and collides elastically with a 1.0 kg cart at rest. The
carts exchange velocities: afterwards the first cart is at rest and
the second moves right at 4.0 m/s. Verify both conservation laws.

*Reasoning:* Test momentum first, then kinetic energy.

- Momentum before: `(1.0)(4.0) + (1.0)(0) = 4.0 kg·m/s`
- Momentum after: `(1.0)(0) + (1.0)(4.0) = 4.0 kg·m/s` ✓
- KE before: `½(1.0)(4.0)² + 0 = 8.0 J`
- KE after: `0 + ½(1.0)(4.0)² = 8.0 J` ✓

Both quantities match, so the collision is consistent with elastic.
Note the check runs both ways: given the after-velocities, the test
confirms the type; it does not by itself prove the velocities,
which came from solving both equations.

**Example 2 — Perfectly inelastic, energy lost.** A 2.0 kg cart
moves right at 3.0 m/s and sticks to a 1.0 kg cart at rest. From
Lesson 03 the common velocity is 2.0 m/s. How much kinetic energy
is lost, and where does it go?

*Reasoning:* Momentum is conserved by construction (2.0 m/s came
from that equation). Now test energy.

- KE before: `½(2.0)(3.0)² + 0 = 9.0 J`
- KE after: `½(3.0)(2.0)² = 6.0 J`
- Lost: `9.0 − 6.0 = 3.0 J` — one third of the initial kinetic energy.

The 3.0 J does not vanish: it becomes deformation energy in the
joining mechanism, thermal energy (slight warming), and sound. Energy
as a whole is conserved (Unit 03); **kinetic** energy is not, because
some of it changed form.

## Guided practice

Work these with the adult or a partner; test momentum first, then
kinetic energy, and state the classification in words.

4.3. A 2.0 kg cart moves right at 2.0 m/s toward a 1.0 kg cart at
rest. After an elastic collision the velocities are 0.67 m/s and
2.67 m/s (first and second carts). Verify that both momentum and
kinetic energy are conserved (allow rounding), and classify the
collision.

4.4. A 3.0 kg cart moves right at 4.0 m/s and a 3.0 kg cart moves
left at 2.0 m/s. They stick together. Find the common velocity,
the kinetic energy before and after, and the energy lost.

4.5. A car crash bends metal, shatters glass, and makes a loud
noise. The cars do not stick together. Using the two-quantity test
in words, explain why this collision is inelastic even though
momentum is (approximately) conserved, and name where the lost
kinetic energy went.

## Independent practice

4.6. Two 1.5 kg carts move toward each other at +2.0 m/s and
−2.0 m/s and collide elastically. State their velocities after the
collision (equal-mass exchange, with directions), and verify total
kinetic energy before and after.

4.7. A 4.0 kg cart moves right at 1.5 m/s and sticks to a 2.0 kg
cart at rest. Find the common velocity, the kinetic energy before
and after, and the energy lost.

4.8. **Error analysis.** A learner applies kinetic-energy
conservation to a stick-together collision and concludes the joined
carts move faster than momentum conservation allows. Explain the
error and say which conservation law is the reliable one for a
sticky collision, and why.

## Application

4.9. **Simulation prediction.** In PhET "Collision Lab" (adult
previews), a 1.0 kg ball moves right at 3.0 m/s toward a 1.0 kg ball
at rest. Predict, for elasticity 100% and for elasticity 0%:
(a) the velocities after, (b) the kinetic energy before and after
in each case, and (c) the energy lost in each case. In Session S7
you will test both predictions.

## Exit check

4.10. State, in two sentences, what is conserved in **every**
collision and what is conserved **only** in an elastic collision.

## Supports and extensions

- **Reading/language access:** Say "elastic = bouncy, energy kept;
  inelastic = energy changed form; perfectly inelastic = stuck
  together" as a chant before classifying.
- **Alternate response mode:** A learner may present the
  two-quantity test as a before/after table (momentum row, kinetic
  energy row) instead of paragraph solutions.
- **Extension:** For a general one-dimensional elastic collision,
  momentum and kinetic-energy conservation together give
  `v₁′ = [(m₁−m₂)v₁ + 2m₂v₂] / (m₁+m₂)` and
  `v₂′ = [(m₂−m₁)v₂ + 2m₁v₁] / (m₁+m₂)`. Verify that these formulas
  reproduce Example 1 and task 4.3, and use them to predict an
  elastic collision between a 3.0 kg cart at 2.0 m/s and a 1.0 kg
  cart at rest (answers: 1.0 m/s and 3.0 m/s).

## Teacher note

Likely misconceptions: "conserved momentum implies conserved kinetic
energy"; using speed instead of velocity squared correctly in KE;
rounding a 0.67/2.67 check into a false mismatch (allow ±0.1 J).
Answers: see the answer key, Lesson 04. Extension check: momentum
before 6.0 kg·m/s, after `3.0(1.0) + 1.0(3.0) = 6.0` ✓; KE before
`½(3)(2.0)² = 6.0 J`, after `½(3)(1.0)² + ½(1)(3.0)² = 1.5 + 4.5 =
6.0 J` ✓.
