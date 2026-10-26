# Lesson 05 — Solving Trigonometric Equations

**Goal:** You will solve trigonometric equations over stated intervals
completely — including factored, identity-reduced, and multiple-angle
forms — and check every candidate for extraneous solutions. **Time:**
~50 minutes. **Materials:** unit-circle table, paper, calculator for
approximate values only.

## Readiness check

1. Solve `2x − 1 = 0` and `x² − x = 0`. Which step in the second
   solution must you never skip? (Factoring, not dividing by `x`.)
2. If `sin x = 1/2`, name two solutions in `[0, 2π)`. How do you know
   there are no others?
3. What does "check your solution in the original equation" mean when
   the original equation was squared during solving?

## Teaching

A trigonometric equation has infinitely many solutions in general,
because sine and cosine repeat. A problem therefore always states an
interval, and the job is to find *every* solution in that interval — no
more, no fewer. The method has four steps:

1. **Isolate one trigonometric function** (or factor so each factor
   gives a simple equation). Never divide both sides by a trigonometric
   expression: you would delete its zeros. Factor instead.
2. **Find the reference solutions** from the unit circle: one solution
   per quadrant where the sign matches.
3. **Handle multiple angles by substitution**: for `sin 2x = a`, set
   `u = 2x`, solve for `u` over the *stretched* interval, then divide.
   If `x ∈ [0, 2π)`, then `u = 2x ∈ [0, 4π)` — two full periods, so twice
   as many solutions.
4. **Check every candidate in the original equation.** Squaring,
   multiplying by an expression that can be zero, and replacing
   `sin²x` by `1 − cos²x` can all introduce values that satisfy the
   transformed equation but not the original. A checked-and-discarded
   solution is a success, not a failure.

**General solutions** (all solutions, no interval) are written with
`+ 2πn` for sine/cosine (period `2π`) or `+ πn` for tangent (period `π`),
where `n` is any integer. State the general solution first when a
problem asks for "all solutions," then specialize to the interval.

### Worked example 1 — A basic equation

Solve `2 sin x − 1 = 0` on `[0, 2π)`.

Isolate: `sin x = 1/2`. The reference angle is `π/6`, and sine is
positive in Quadrants I and II. Solutions: `x = π/6` and
`x = π − π/6 = 5π/6`. General solution: `x = π/6 + 2πn` or
`x = 5π/6 + 2πn`. No other solutions exist in `[0, 2π)` because sine
takes the value `1/2` exactly twice per period.

### Worked example 2 — A factored equation

Solve `cos²x − cos x = 0` on `[0, 2π)`.

Factor — do not divide by `cos x`: `cos x (cos x − 1) = 0`. So
`cos x = 0` or `cos x = 1`. From `cos x = 0`: `x = π/2, 3π/2`. From
`cos x = 1`: `x = 0`. (Note `2π` is excluded by the half-open interval.)
Solution set: `{0, π/2, 3π/2}`. Dividing by `cos x` at the start would
have lost `π/2` and `3π/2` entirely.

### Worked example 3 — An identity-reduced equation

Solve `2cos²x + sin x − 1 = 0` on `[0, 2π)`.

Replace `cos²x` by `1 − sin²x`: `2(1 − sin²x) + sin x − 1 = 0`, which
simplifies to `−2sin²x + sin x + 1 = 0`, or `2sin²x − sin x − 1 = 0`.
Factor: `(2sin x + 1)(sin x − 1) = 0`. So `sin x = −1/2` or `sin x = 1`.
From `sin x = −1/2`: reference angle `π/6`, sine negative in Quadrants
III and IV: `x = π + π/6 = 7π/6` and `x = 2π − π/6 = 11π/6`. From
`sin x = 1`: `x = π/2`. Solution set: `{π/2, 7π/6, 11π/6}`. Check each in
the original: for `x = π/2`, `2(0) + 1 − 1 = 0` ✓; the others check
similarly (see the key).

### Worked example 4 — Squaring creates an extraneous solution

Solve `sin x = 1 − cos x` on `[0, 2π)`.

Square both sides: `sin²x = (1 − cos x)² = 1 − 2cos x + cos²x`. Replace
`sin²x` by `1 − cos²x`: `1 − cos²x = 1 − 2cos x + cos²x`, so
`2cos²x − 2cos x = 0`, i.e., `2cos x(cos x − 1) = 0`. Candidates:
`cos x = 0` gives `x = π/2, 3π/2`; `cos x = 1` gives `x = 0`. Now check
in the *original*: `x = 0`: `sin 0 = 0`, `1 − cos 0 = 0` ✓.
`x = π/2`: `sin = 1`, `1 − cos = 1` ✓. `x = 3π/2`: `sin = −1` but
`1 − cos = 1` ✗ — extraneous, introduced by squaring (squaring erases
the sign of `sin x`). Solution set: `{0, π/2}`.

### Worked example 5 — A multiple-angle equation

Solve `sin 2x = √3/2` on `[0, 2π)`.

Let `u = 2x`. Since `x ∈ [0, 2π)`, `u ∈ [0, 4π)`. `sin u = √3/2` has
reference angle `π/3`, sine positive in Quadrants I and II:
`u = π/3, 2π/3` in the first period, plus `2π` added for the second:
`u = 7π/3, 8π/3`. Divide by 2: `x = π/6, π/3, 7π/6, 4π/3`. Four solutions
— twice as many as the basic equation, because the interval holds two
periods of `sin 2x`.

## Guided practice (with hints)

1. Solve `2cos x + √3 = 0` on `[0, 2π)`. (Hint: cosine negative —
   which quadrants? Reference angle `π/6`.)
2. Solve `sin x cos x = 0` on `[0, 2π)` by factoring logic, and explain
   why the solution set has four members.
3. Solve `cos 2x = 1/2` on `[0, 2π)`. (Hint: substitute `u = 2x` and
   remember the stretched interval.)

## Independent practice

1. Solve `tan x = −1` on `[0, 2π)`, and write the general solution with
   `+ πn`.
2. Solve `2sin²x − 3sin x + 1 = 0` on `[0, 2π)`. (Hint: factor as a
   quadratic in `sin x`.)
3. Solve `sin x = cos x` on `[0, 2π)` by dividing by `cos x` — and
   justify why division is safe *here* (what would be lost if
   `cos x = 0`?).
4. Solve `2cos²x − 1 = sin x` on `[0, 2π)`, checking every candidate.
   (Hint: this reduces to a quadratic in `sin x` — work it fresh and
   compare with Worked example 3.)
5. **Error analysis.** A learner solves `sin 2x = 0` on `[0, 2π)` and
   reports `{0, π}`. Explain the missing solutions and the interval
   mistake behind them.

## Applied task

A tide height (in meters) `t` hours after midnight is modeled by
`h(t) = 3 + 2sin(πt/6)`. Find all times in the first 12 hours when the
height is exactly 4 m, and interpret each time in words: is the tide
rising or falling then? (Hint: `sin(πt/6) = 1/2`; the sine is rising
through `1/2` at the first time and falling through it at the second.)

## Exit check

Solve `4cos²x − 3 = 0` on `[0, 2π)` completely, showing the factoring
step and the quadrant reasoning.

## Supports, alternate modes, and extensions

- **Reading/language access:** before solving, write the interval and
  the substitution interval (`u ∈ …`) at the top of the work; most
  multiple-angle errors are interval errors.
- **Alternate response mode:** solutions may be marked on a unit-circle
  sketch (one dot per solution, labeled with its angle) plus the list.
- **Extension:** solve `sin x + cos x = 1` on `[0, 2π)` exactly by
  writing `sin x + cos x = √2 sin(x + π/4)` (prove that identity with
  the sine sum formula first), and confirm the solution set
  `{0, π/2}` by checking.

## Teacher note

Likely misconceptions: (a) dividing by a trig expression and losing
solutions; (b) forgetting the stretched interval for multiple angles;
(c) reporting the squared equation's candidates without checking;
(d) giving one solution per period instead of two. Answers:
`answer-key.md`, Lesson 05.
