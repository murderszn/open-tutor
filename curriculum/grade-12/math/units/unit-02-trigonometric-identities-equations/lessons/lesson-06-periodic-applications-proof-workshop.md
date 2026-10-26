# Lesson 06 — Periodic Applications and Proof Workshop

**Goal:** You will solve periodic models for angles and times, interpret
every parameter in the situation's words, and present two identity
proofs in writing. **Time:** ~50 minutes. **Materials:** the generated
illustration below, paper, calculator for approximate values only.

## Readiness check

1. A sinusoidal model is `h(t) = A + B sin(ωt + φ)`. Which letter is
   the midline, which controls the period, and what is the period in
   terms of `ω`?
2. Solve `cos x = −1/2` on `[0, 2π)` from the unit circle.
3. What is the difference between an identity and an equation? (One
   sentence each.)

## Teaching

A periodic model is a contract: each parameter promises something about
the situation, and solving the model means collecting on those
promises. For `h(t) = M + A·trig(ω(t − t₀))`:

- `M` (midline) is the average value the quantity oscillates around.
- `A` (amplitude) is how far it swings above and below that average.
- The period `T = 2π/ω` is how long one full cycle takes.
- `t₀` (phase shift) is when a chosen feature — a peak, a zero crossing
  — happens.

When a problem asks "when does the quantity first reach value `v`?", it
is asking you to solve a trigonometric equation and then to *choose*
among the solutions: the first one, the ones in a time window, the ones
where the quantity is rising. The algebra gives candidates; the
situation picks.

### The lighthouse illustration

![A lighthouse on a rocky coastline at dusk, its beam shining out over calm sea](../assets/lighthouse-trig-scene.png)

*Figure: AI-generated illustration for this activity (see
`assets/README.md` for the generation record). The picture carries no
measurements — every number below comes from the text-only alternative.*

**Text-only alternative (all numbers for this activity):** A lighthouse
lamp stands 30 m above sea level on a rocky point. A boat sits on calm
water. The lamp's beam points downward toward the boat at an angle of
depression of 12° measured from the horizontal. The sea is flat, so the
line of sight, the vertical drop, and the horizontal distance form a
right triangle with vertical side 30 m.

### Worked example 1 — The lighthouse distance

How far, horizontally, is the boat from the base of the lighthouse?

Draw the right triangle: vertical side 30 m (lamp height), horizontal
side `d` (unknown), and the angle of depression 12° at the lamp. The
angle of depression from the lamp equals the angle of elevation from
the boat (alternate interior angles for parallel horizontal lines), so
at the boat the triangle has angle 12° with opposite side 30 m and
adjacent side `d`. Then `tan 12° = 30/d`, so `d = 30/tan 12°`.
`tan 12° ≈ 0.2126`, so `d ≈ 30/0.2126 ≈ 141.1 m`. Answer: about 141 m,
horizontally. Note what the picture does and does not do: it shows the
geometry, but the 30 m and the 12° come from the text — never measure
lengths or angles off an illustration.

### Worked example 2 — A Ferris-wheel model

A Ferris wheel has center 22 m above the ground and radius 20 m. A
capsule starts at the bottom at time `t = 0` and the wheel turns once
every 20 minutes. Write its height model and find when it first reaches
32 m.

Bottom at `t = 0` suggests a negative cosine: `h(t) = 22 − 20cos(πt/10)`.
Check: `h(0) = 22 − 20 = 2` (bottom: 22 − 20) ✓; period `2π/(π/10) = 20`
minutes ✓; `h(10) = 22 − 20cos π = 42` (top: 22 + 20) ✓. Solve
`h(t) = 32`: `22 − 20cos(πt/10) = 32` gives `cos(πt/10) = −1/2`, so
`πt/10 = 2π/3` or `4π/3` in the first revolution, giving `t = 20/3 ≈
6.67` minutes and `t = 40/3 ≈ 13.33` minutes. First reaches 32 m at about
6.7 minutes, while rising; it passes 32 m again at about 13.3 minutes,
while falling. Both solutions are real; the question "first" picks one.

### Worked example 3 — A proof for the portfolio

Prove `tan θ + cot θ = 2 csc 2θ`.

Work on the left side. Write both terms as sine/cosine ratios:
`tan θ + cot θ = sin θ/cos θ + cos θ/sin θ`. Common denominator
`sin θ cos θ`: `(sin²θ + cos²θ)/(sin θ cos θ) = 1/(sin θ cos θ)` by the
Pythagorean identity. Multiply numerator and denominator by 2:
`2/(2 sin θ cos θ)`. By the double-angle formula, `2 sin θ cos θ =
sin 2θ`, so the expression is `2/sin 2θ = 2 csc 2θ`. ∎

## Guided practice (with hints)

1. In the lighthouse situation, the boat moves until the angle of
   depression is 20°. Is the boat now closer to or farther from the
   lighthouse than before, and what is its new horizontal distance?
   (Hint: `tan 20° ≈ 0.3640`; larger angle, same height — what happens
   to `d = 30/tan(angle)`?)
2. For the Ferris-wheel model, find all times in the first 20 minutes
   when the capsule is at 22 m (midline height), and state whether it is
   rising or falling at each.
3. Prove `(sin θ + cos θ)² = 1 + sin 2θ` by expanding the left side.

## Independent practice

1. A buoy's height above a datum follows `h(t) = 1.5 + 0.9 sin(πt/3)`,
   with `t` in hours. Find the maximum and minimum heights, the period,
   and all times in `[0, 12)` when `h(t) = 2.0`. (Hint: the sine equals
   `0.5/0.9 = 5/9`; use a calculator for the reference angle and give
   times to two decimal places.)
2. Prove `sin 3θ = 3 sin θ − 4 sin³θ` using the sum formula
   (`3θ = 2θ + θ`) and the double-angle formulas.
3. A rotating beacon sweeps a full circle every 24 seconds. Write an
   angle function `θ(t)` in radians, and find the first two times the
   beam points at an angle of `5π/6` radians from its starting
   direction, assuming it starts at angle 0 and rotates counterclockwise.
4. **Error analysis.** A learner models a tide with period 12 hours as
   `h(t) = 5 + 3 sin t`. Identify two errors (period and units/argument)
   and write a corrected model with period 12 hours and midline 5 m,
   amplitude 3 m.

## Applied task

Choose one: (a) using the lighthouse illustration and the text-only
facts, write a new problem of your own (different height or angle),
solve it, and state the answer with units and a reasonableness check;
or (b) explain in a paragraph why the Ferris-wheel model's two
solutions for 32 m must be symmetric around the top time `t = 10`
minutes, using the cosine graph's symmetry rather than recomputing.

## Exit check

A tide model is `h(t) = 4 + 2 cos(π(t − 1)/6)`, `t` in hours. State the
midline, amplitude, and period, the time of the first high tide after
`t = 0`, and the first time after `t = 0` when `h(t) = 5` while the tide
is falling.

## Supports, alternate modes, and extensions

- **Reading/language access:** for every model, write a four-line
  parameter card (midline / amplitude / period / phase) before solving.
- **Alternate response mode:** the applied task may be answered as a
  labeled diagram with the parameter card and the solution steps, or as
  prose.
- **Extension:** the project asks for safe-passage *windows*, not single
  times. Preview it now: solve `h(t) ≥ 7` for the project model as an
  inequality, and explain why the answer is intervals, not points.

## Teacher note

Likely misconceptions: (a) measuring numbers off the illustration
instead of the text facts; (b) reporting all equation solutions when
the question asks for the first, or the rising ones; (c) confusing the
angle of depression with the angle at the boat's triangle vertex — they
are equal, but for a reason (alternate interior angles), not by
definition. Answers: `answer-key.md`, Lesson 06.
