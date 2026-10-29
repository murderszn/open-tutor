# Lesson 04 — Radical Equations: Isolate, Power, Check

**Goal (learner hears):** "I can solve a radical equation, and I
can catch the fake answers squaring creates — by checking every
candidate in the original equation and explaining what went wrong
with the rejected ones."
**Time:** ~50 minutes · **Materials:** paper, pencil, factoring
reference from Unit 02.
**Standards:** A-REI.2, A-CED.1.

## Readiness check (5 min)

Solve `x^2 = 9`, then solve `√x = −3`. (Answers: `x = ±3` for the
first — squaring's twin answers appear when you *solve*; the second
has no solution, because a principal square root is never negative.)
Hold both facts at once: squaring creates twins, roots refuse
negatives. That tension is this lesson.

## Explicit teaching

The method has three steps, and the third is not optional:

1. **Isolate** the radical on one side of the equation.
2. **Power** both sides to the matching power (square for a square
   root, cube for a cube root) to undo the radical.
3. **Check** every candidate in the *original* equation. A
   candidate that fails is an **extraneous solution**: it satisfies
   the powered equation but not the one you were asked to solve.

Why does Step 2 invent answers? Squaring erases sign. The equations
`a = b` and `a = −b` both square to `a^2 = b^2`. So after squaring,
a candidate that makes the radical equal to the *negative* of the
other side will look like a solution — until the check exposes it.
Two cheap pre-checks catch most fakes before the algebra: the
radicand must satisfy the domain, and the isolated radical's other
side must have the sign a root can actually take (nonnegative for
an even index). But pre-checks never replace the check itself.

Cubing is different: cubing is one-to-one, so raising both sides to
the third power creates no extraneous solutions. You still check —
arithmetic slips happen — but a checked cube-root equation will not
reject a candidate for sign reasons.

### Modeled example 1 — one extraneous solution, explained

Solve `√(x + 5) = x − 1`.

*Step 1 — isolate.* The radical is already alone.

*Step 2 — domain and sign pre-checks.* Domain: `x + 5 ≥ 0`, so
`x ≥ −5`. Sign: the left side is a square root, so it is `≥ 0`;
the right side must therefore be `≥ 0` too, so `x ≥ 1`. Any
candidate below 1 is already suspect.

*Step 3 — square and solve.* `x + 5 = (x − 1)^2 = x^2 − 2x + 1`,
so `0 = x^2 − 3x − 4 = (x − 4)(x + 1)`. Candidates: `x = 4` and
`x = −1`.

*Step 4 — check in the original.* `x = 4`: `√9 = 3`, and
`4 − 1 = 3`. ✓. `x = −1`: `√4 = 2`, but `−1 − 1 = −2`. ✗.
**Solution set: {4}.** The rejected `−1` is extraneous: squaring
turned `2 = −2` (false) into `4 = 4` (true) by erasing the sign.
That is the whole mechanism, and naming it is the point of the
lesson.

### Modeled example 2 — a second extraneous solution, and a context check

Solve `√(2x + 3) + 1 = x`.

*Step 1 — isolate:* `√(2x + 3) = x − 1`.

*Step 2 — pre-checks.* Domain: `2x + 3 ≥ 0`, so `x ≥ −3/2`. Sign:
`x − 1 ≥ 0`, so `x ≥ 1`.

*Step 3 — square and solve.* `2x + 3 = (x − 1)^2 = x^2 − 2x + 1`,
so `0 = x^2 − 4x − 2`. By the quadratic formula,
`x = (4 ± √(16 + 8)) / 2 = 2 ± √6`. Candidates: `2 + √6 ≈ 4.449`
and `2 − √6 ≈ −0.449`.

*Step 4 — check.* `2 + √6`: left side `√(2(2 + √6) + 3) =
√(7 + 2√6)`; note `(√6 + 1)^2 = 7 + 2√6`, so the root is `√6 + 1 ≈
3.449`, and the right side is `(2 + √6) − 1 = 1 + √6 ≈ 3.449`. ✓.
`2 − √6 ≈ −0.449` already fails the sign pre-check (`x ≥ 1`), and
the check confirms it: left side `√(2.102) ≈ 1.450`, right side
`−1.449`. ✗. **Solution set: {2 + √6}.**

*Context note.* If this equation modeled a time or a length, the
rejected candidate would be doubly dead: negative times and lengths
are context-forbidden even before the algebra. State the
context restriction first, and a rejected answer is never a
surprise.

## Guided practice

1. Solve `√(x + 7) = 5`. *(Hint: isolate is done; square once.)*
2. Solve `√(5x − 4) = x − 2`. Find both candidates, check both,
   and name the extraneous one with its reason.
   *(Hint: candidates 1 and 8.)*
3. A classmate solved `√(x − 2) = −4` by squaring to get `x = 18`
   and stopped. What is wrong, in one sentence? *(Hint: can a
   principal root be negative?)*

## Independent practice

See [Practice Set D](../practice.md#practice-set-d) (items D1–D8).

## Application

An object dropped from rest falls `h` meters in `t` seconds by
`t = √(2h/g)` with `g = 9.8` m/s². From what height must it be
dropped to take exactly 3 seconds? Solve, then check in the original
equation. (Square both sides of `3 = √(2h/9.8)`: `9 = 2h/9.8`, so
`h = 44.1` m. Check: `2(44.1)/9.8 = 9`, `√9 = 3`. ✓. Domain and
context agree: heights and times are nonnegative, so no candidate
could be extraneous here for sign reasons — but the check still
catches arithmetic slips.)

## Exit check

Solve `√(3x − 2) = 4` and state the check. (`3x − 2 = 16`, so
`x = 6`; check `√16 = 4`. ✓.)

## Supports and extension

- **Reading/language access:** write the three steps as a margin
  checklist — ISOLATE, POWER, CHECK — and tick each one off on
  every problem for the first week.
- **Alternate response mode:** a learner may present the check as
  a two-column "left side / right side" table instead of a sentence.
- **Extension:** construct your own radical equation whose
  extraneous solution is a specific number you choose (say, −3),
  and show the class how squaring hid it. (One route: start from a
  false statement like `√(x + 7) = −2` at `x = −3` and square it
  into a true-looking equation, then rebuild.)

## Teacher note

Likely misconceptions: (1) skipping the check when the algebra
"looked clean"; (2) reporting both candidates as the solution set;
(3) believing extraneous solutions are arithmetic mistakes — they
are structural, produced by squaring itself, and the check is a
mathematical step, not housekeeping. Reteach: no solution set is
complete until every candidate has a check line.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-04).
