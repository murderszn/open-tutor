# Lesson 05 — Two Radicals, Cube-Root Equations, and Real Contexts

**Goal (learner hears):** "I can solve an equation with two
radicals by isolating and powering twice, solve a cube-root
equation without fear of fake answers, and use a radical equation
to answer a pendulum or falling question — rejecting answers the
context forbids."
**Time:** ~50 minutes · **Materials:** paper, pencil, the
generated illustration
[`assets/pendulum-measurement-scene.png`](../assets/pendulum-measurement-scene.png)
(and its text alternative below), a calculator for decimal checks.
**Standards:** A-REI.2, A-CED.1, A-CED.2, N-Q.1, N-Q.3.

## Readiness check (5 min)

Solve `√(x + 3) = 2x` — no, that one is a trap for later. Instead:
isolate the radical in `√(2x − 1) − √(x + 2) = 1` by moving one
radical alone, and state the domain. (Isolated:
`√(2x − 1) = 1 + √(x + 2)`. Domain: `2x − 1 ≥ 0` and `x + 2 ≥ 0`,
so `x ≥ 1/2`.) Two radicals means two powering steps — that is the
only new idea today.

## Explicit teaching

**Two radicals.** Isolate one radical, square, simplify, and you
will usually still have one radical left. Isolate it and square
again. Every squaring can invent candidates, so the check at the end
covers both steps at once — but the sign pre-checks from Lesson 04
still apply at each step, and they are worth more here, because
they can kill a fake candidate before the second squaring doubles
the algebra.

**Cube-root equations.** Cubing is one-to-one: if `a^3 = b^3` then
`a = b`. So cubing both sides of an equation creates no extraneous
solutions. Isolate the cube root, cube, solve, and check anyway —
the check catches arithmetic slips, and "no extraneous solutions
possible" is a claim you verify, not a permission to skip checking.

**Contexts.** A pendulum of length `L` meters has period
`T = 2π√(L/g)` seconds, with `g = 9.8` m/s², for small swings. A
falling object obeys `t = √(2h/g)`. In both, state the domain and
the context restrictions *before* solving: lengths, heights, and
times are nonnegative, and the pendulum formula assumes small
angles. An answer that violates those is rejected for a stated
reason, not silently dropped.

![A simple pendulum experiment: a washer hangs from a string tied
to a horizontal support bar, beside a vertical measuring tape; a
stopwatch and an open notebook with a blank grid table sit on the
table below.](../assets/pendulum-measurement-scene.png)

*Caption: A pendulum setup for measuring period against length.
The tape's markings are illustrative, not a measurement source —
all lengths in this unit's tasks are given in text.*

**Text-only alternative:** A washer hangs from a string attached
to a horizontal bar. A vertical measuring tape stands beside it. A
stopwatch and an open notebook with an empty grid table rest on
the table below. Activity question: the string's length is changed
and the period is timed at each length — which quantity is the
input of the model `T = 2π√(L/g)`, and which is the output?
(Answer: length `L` is the input; period `T` is the output. The
picture supplies the setup; every number the task needs is in the
text.)

### Modeled example 1 — two radicals, one survivor

Solve `√(2x − 1) − √(x + 2) = 1`.

*Step 1 — isolate one radical:* `√(2x − 1) = 1 + √(x + 2)`.
Domain: `x ≥ 1/2`. Sign: the right side is `1` plus a
nonnegative root, so it is `≥ 1` — no sign problem on this step.

*Step 2 — square:* `2x − 1 = 1 + (x + 2) + 2√(x + 2)`, which
simplifies to `x − 4 = 2√(x + 2)`. Now the sign pre-check bites:
the right side is nonnegative, so `x − 4 ≥ 0`, i.e. `x ≥ 4`. Any
candidate below 4 is already doomed.

*Step 3 — square again:* `x^2 − 8x + 16 = 4x + 8`, so
`x^2 − 12x + 8 = 0`, and `x = 6 ± 2√7`. Candidates:
`6 + 2√7 ≈ 11.292` and `6 − 2√7 ≈ 0.708`.

*Step 4 — check in the original.* `6 + 2√7`: `√(2x − 1) ≈
√21.584 ≈ 4.646`; `√(x + 2) ≈ √13.292 ≈ 3.646`; difference
`≈ 1.000`. ✓. `6 − 2√7 ≈ 0.708` fails the `x ≥ 4` pre-check, and
the check confirms it: `√0.416 ≈ 0.645` minus `√2.708 ≈ 1.646`
gives `≈ −1.001`, not 1. ✗. **Solution set: {6 + 2√7}.** The
second squaring invented the rejected candidate, exactly as Lesson
04 predicted.

### Modeled example 2 — pendulum length from a period

A pendulum's period is 2 seconds. How long is it? Use
`T = 2π√(L/g)` with `g = 9.8`.

Set `2 = 2π√(L/9.8)`. Divide by `2π`: `1/π = √(L/9.8)`. Square:
`1/π² = L/9.8`, so `L = 9.8/π² ≈ 0.993` meters — about 1 meter.
Check: `2π√(0.993/9.8) ≈ 2π(0.318) ≈ 2.00` seconds. ✓. A
one-meter pendulum ticking at about 2 seconds per swing is the
classic result, and it is why old longcase clocks are about a meter
tall. Domain note: `L ≥ 0` is satisfied, and the small-angle
assumption is a context condition the adult confirms, not something
the algebra checks.

### Modeled example 3 — a cube-root equation, no fakes possible

Solve `∛(2x + 1) − 3 = 0`.

Isolate: `∛(2x + 1) = 3`. Cube: `2x + 1 = 27`, so `x = 13`.
Check: `∛27 − 3 = 3 − 3 = 0`. ✓. **Solution set: {13}.** Because
cubing is one-to-one, no extraneous solution could have appeared;
the check here guards against arithmetic slips only. Contrast with
Examples 1–2: the index's parity decides whether the check can
reject a candidate or only confirm it.

## Guided practice

1. Solve `√(x + 3) = x − 3`. *(Hint: candidates 1 and 6; check
   both.)*
2. Solve `∛(x + 10) = 4`. *(Hint: cube once; is any candidate
   rejectable?)*
3. A pendulum of length 0.64 m has what period? Use
   `T = 2π√(L/9.8)` and round to the hundredths place, as a hand
   stopwatch allows. *(Hint: √0.065306 ≈ 0.25555.)*

## Independent practice

See [Practice Set E](../practice.md#practice-set-e) (items E1–E8).

## Application

A playground designer wants a swing whose period is 3 seconds.
Using `T = 2π√(L/g)` with `g = 9.8`, find the chain length, and say
whether the small-angle assumption and the domain need any comment.
(`3 = 2π√(L/9.8)` gives `√(L/9.8) = 3/(2π)`, so
`L = 9.8 · 9/(4π²) ≈ 2.23` m. The length is plausible for a tall
swing frame; the designer must still keep swings small for the
formula to hold, and `L ≥ 0` is satisfied. A 2.23 m chain on a
playground frame is a design check for the adult, not an algebra
result.)

## Exit check

Solve `√(x − 5) + √(x + 1) = 4` — or show it has no solution.
(Isolate: `√(x − 5) = 4 − √(x + 1)`. Square:
`x − 5 = 16 + x + 1 − 8√(x + 1)`, so `8√(x + 1) = 22`, i.e.
`√(x + 1) = 11/4`. Square: `x + 1 = 121/16`, so `x = 105/16 = 6.5625`.
Check: `√(25/16) + √(121/16) = 5/4 + 11/4 = 4`. ✓. Solution set:
{105/16}. Note the sign pre-check that made this work: the step
`√(x − 5) = 4 − √(x + 1)` requires `4 − √(x + 1) ≥ 0`, which
holds at the candidate since `√(x + 1) = 11/4 < 4`.)

## Supports and extension

- **Reading/language access:** number the two squaring steps
  ("square 1", "square 2") in the margin so the check can be traced
  back to the step that invented a candidate.
- **Alternate response mode:** a learner may verify a candidate
  with a calculator's decimal evaluation instead of exact
  simplification, provided both sides are shown to match.
- **Extension:** solve `√(x + 3) = 2x` (the readiness-check trap)
  and explain which candidate is extraneous and why the equation
  still has a genuine solution. (Squaring: `x + 3 = 4x^2`, so
  `4x^2 − x − 3 = 0`, giving `x = 1` and `x = −3/4`. Check: `x = 1`
  gives `√4 = 2 = 2 · 1` ✓; `x = −3/4` gives `√(9/4) = 3/2` but
  `2x = −3/2` ✗. Solution set: {1}.)

## Teacher note

Likely misconceptions: (1) squaring only once for a two-radical
equation and stopping with a radical still in the equation; (2)
assuming cube-root equations can also produce extraneous solutions
and rejecting a valid answer on a sign pretext; (3) treating a
context answer as final without the domain/context comment.
Reteach: count the radicals, square that many times (at most), and
check once, thoroughly, at the end.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-05).
