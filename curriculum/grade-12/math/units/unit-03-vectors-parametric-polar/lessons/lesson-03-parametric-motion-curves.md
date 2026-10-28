# Lesson 03 — Parametric Equations: Motion, Curves, and the Parameter You Must Not Lose

**Goal:** Model motion and curves with `(x(t), y(t))`, eliminate the
parameter correctly, and read direction and speed from a parametrization.

**Time:** ~50 minutes. **Materials:** graph paper, Desmos in
parametric mode, a table of values (by hand first, technology second).

**Readiness check (5 minutes):** If `x = 2t` and `y = t²`, find the
point at `t = 3`, and eliminate `t` to find `y` in terms of `x`.
(Answers: `(6, 9)`; `t = x/2`, so `y = x²/4`.) Now ask: does the
rectangular equation alone tell you the object moves to the right as
`t` grows? (No — that is the parameter's job, and today's lesson.)

## 1. Why a third variable

A function `y = f(x)` gives one `y` for each `x`. It cannot describe a
circle traced twice, a path that backtracks over the same `x`, or an
object whose position depends on time. Parametric equations give up
the single-function frame:

`x = x(t)`, `y = y(t)`, for `t` in some interval.

The **parameter** `t` is usually time, but it need not be: any quantity
that drives both coordinates will do. Plotting the points
`(x(t), y(t))` as `t` increases traces a curve **with a direction** —
an arrow of travel the rectangular equation does not carry. Two
parametrizations can trace the same curve in opposite directions, or
at different speeds, and still be different models of motion. That
difference matters the moment the model is about a real moving object.

**Eliminating the parameter** means solving one equation for `t` and
substituting into the other, to recover a rectangular equation. The
rule that governs this whole lesson: **the rectangular equation may
describe more points than the parametrization actually visits.**
Squaring, or a restricted `t`-interval, can add or remove points. The
eliminated equation is only faithful if you carry its domain and its
direction with it — the same check-in-the-original discipline as
Unit 02's equation solving.

## 2. Worked examples

**Example 1 — a projectile, start to finish.** A ball is launched
with horizontal speed 10 m/s and vertical speed 20 m/s from ground
level. Ignoring air resistance and using `g ≈ 10 m/s²`, its position
after `t` seconds is

`x(t) = 10t`, `y(t) = −5t² + 20t`.

Table: `t = 0 → (0, 0)`; `t = 1 → (10, 15)`; `t = 2 → (20, 20)`;
`t = 3 → (30, 15)`; `t = 4 → (40, 0)`.

The ball lands when `y = 0` again: `−5t² + 20t = 5t(4 − t) = 0`, so
`t = 0` or `t = 4`. It lands after 4 seconds, 40 m away. The vertex of
the path is at `t = 2`: 20 m out, 20 m up — the highest point, halfway
through the flight in time, which is the symmetry the table shows.

Eliminate: `t = x/10`, so
`y = −5(x/10)² + 20(x/10) = −x²/20 + 2x`, for `0 ≤ x ≤ 40`.
The rectangular equation is a parabola, but the parabola continues
below ground for `x > 40` and `x < 0` — points the ball never visits.
The model is `y = −x²/20 + 2x` **on** `0 ≤ x ≤ 40`, traveled
left-to-right. Drop the interval and you have described a mathematical
curve, not the ball's flight.

**Example 2 — a circle, and direction as information.** Let

`x(t) = 5 cos t`, `y(t) = 5 sin t`, for `0 ≤ t ≤ 2π`.

Eliminate: `x² + y² = 25 cos²t + 25 sin²t = 25`. The trace is the circle
of radius 5 centered at the origin. But the parametrization says more:
at `t = 0` the point is `(5, 0)`; at `t = π/2` it is `(0, 5)`. As `t`
increases, the point moves **counterclockwise**. The parametrization
`x(t) = 5 cos t`, `y(t) = −5 sin t` traces the same circle clockwise.
Same rectangular equation, opposite motion — if the model is a wheel,
a satellite, or a Ferris wheel from Unit 02, the direction is the
difference between the model being right and being backwards.

**Example 3 — a hidden domain restriction.** Let `x(t) = t²`,
`y(t) = 2t`, for all real `t`.

Eliminate by solving `t = y/2`: then `x = (y/2)² = y²/4`, i.e.
`y² = 4x`. The rectangular equation, read alone, is a full sideways
parabola — but the parametrization only visits points with `x ≥ 0`,
since `x = t²` is never negative. Here the restriction is not even a
`t`-interval you chose; it is built into `t²`. The full parabola
`y² = 4x` includes points with `x ≥ 0` only anyway (since `y² ≥ 0`),
so in this case the trace *is* the whole parabola — but only because
`y² ≥ 0` already forces `x ≥ 0`. Contrast `x(t) = t²`, `y(t) = t` for
`t ≥ 0` only: eliminating gives `y = √x`, `x ≥ 0`, the upper half of
`y² = x`. The lower half (`y < 0`) is points the restricted
parametrization never visits. **Always ask: which `t` values are
allowed, and which points do they actually produce?**

A cleaner trap, for the notebook: `x(t) = cos t`, `y(t) = sin t` for
`0 ≤ t ≤ π` traces only the upper semicircle, though eliminating gives
the full circle `x² + y² = 1`. The interval is part of the model.

## 3. Guided practice

1. For `x(t) = 2 + 3t`, `y(t) = 1 − 2t`, eliminate the parameter, state
   the direction of travel as `t` increases, and give the points at
   `t = 0` and `t = 3` as a check.
2. A particle moves with `x(t) = t`, `y(t) = t²` for `t ≥ 0`, and a
   second particle with `x(t) = 2t`, `y(t) = 4t²` for `t ≥ 0`. Do they
   trace the same curve? Do they move the same way? Explain the
   difference in one paragraph: same trace, different speed.
3. Write a parametrization of the line segment from `(0, 0)` to
   `(4, 6)` using `0 ≤ t ≤ 1`, and another using `0 ≤ t ≤ 2`. What
   changes, and what stays the same?

## 4. Independent practice

1. Eliminate the parameter for `x(t) = 3t − 1`, `y(t) = 2t + 5`, and
   state the rectangular equation with its direction.
2. For `x(t) = 4 cos t`, `y(t) = 4 sin t`, `0 ≤ t ≤ π`, sketch the trace
   by hand from a table (`t = 0, π/4, π/2, 3π/4, π`), and state which
   semicircle it is and in which direction it is traveled.
3. A projectile has `x(t) = 15t`, `y(t) = −5t² + 30t` (meters, seconds).
   Find its landing time and distance, its maximum height and when it
   occurs, and its rectangular equation with domain.
4. **Error analysis.** A classmate eliminates `x(t) = t²`, `y(t) = t`
   for `t ≥ 0` and reports "the graph is the parabola `y² = x`."
   Explain what is right, what is missing, and what the correct
   statement is.

## 5. Application

A drone's planned path is `x(t) = 6t`, `y(t) = 8 − t²` for
`0 ≤ t ≤ 2` (meters, seconds, with `y` as height above a flat field).
Find its starting and ending points, its height at `t = 1`, the
rectangular equation of its path with its domain, and the time (if
any) at which it reaches the ground (`y = 0`) within the given
interval. Interpret the answer: does the drone land during the planned
interval, or is the plan cut short first?

## 6. Exit check

Parametrize the circle of radius 3 centered at the origin, traveled
clockwise starting at `(0, −3)`, and give its rectangular equation.
(One correct answer: `x(t) = 3 sin t`, `y(t) = −3 cos t` — check:
at `t = 0` you are at `(0, −3)`; as `t` grows small, `x` grows
positive while `y` stays near −3, which is clockwise motion. Any
equivalent parametrization with the starting point and direction
stated earns full credit.)

## Supports and extensions

- **Support:** Build the table before the graph, every time. A
  parametrization is a table with a rule; the graph is the table
  plotted in order.
- **Alternate response mode:** Direction may be shown with arrows on
  the plotted curve instead of, or in addition to, a written sentence.
- **Extension:** Show that `x(t) = a cos t`, `y(t) = b sin t` traces
  the ellipse `x²/a² + y²/b² = 1`, and explain why the grade-12 track
  treats ellipse/hyperbola equations as a documented gap (scope and
  sequence §4) rather than core content: the curve is reachable here,
  but its focus/directrix theory belongs to a later course.

## Teacher note

The two ideas students will conflate are "same curve" and "same
motion." Drill the distinction with the Lesson 03 guided-practice
pair (same trace, different speed) before the project, where the
crossing time — not just the path — is scored. See
`../teacher-guide.md` (adults only) and `../answer-key.md`.
