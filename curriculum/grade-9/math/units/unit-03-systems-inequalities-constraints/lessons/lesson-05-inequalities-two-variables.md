# Lesson 05 — Inequalities in Two Variables: Half-Planes

**Goal:** I can graph a linear inequality in two variables as a
half-plane, choosing the boundary style and the shaded side with a test
point.
**Time:** 50 minutes · **Materials:** notebook, ruler, colored pencil
(optional).

## Readiness check (5 min)

Graph `y = 2x − 1` and mark the point `(0, 0)`. Is `(0, 0)` above or
below the line? If you said "above" (because `0 > −1`), you are
ready: today's whole lesson is deciding which side of a line holds the
solutions of an inequality.

## Teaching: a boundary line splits the plane in two (15 min)

A **linear inequality in two variables** looks like `ax + by < c`,
`ax + by ≤ c`, `ax + by > c`, or `ax + by ≥ c`. Its solutions are
ordered pairs that make the inequality true — and they fill an entire
**half-plane**: one side of the line `ax + by = c`, which is called
the **boundary line**.

Graph it in three steps:

1. **Graph the boundary line** as if the inequality were an equation.
   Use a **solid** line when the inequality includes the boundary
   (`≤` or `≥`) — points on the line are solutions. Use a **dashed**
   line when it does not (`<` or `>`) — points on the line are not
   solutions.
2. **Pick a test point** that is *not* on the boundary line. `(0, 0)`
   is the easiest choice whenever it is not on the line.
3. **Substitute the test point.** If it makes the inequality true,
   shade the half-plane containing it. If false, shade the other side.

A test point on the boundary line tells you nothing — it gives an
equality statement either way — so never choose one. And never shade
by guessing "greater means above": that shortcut fails for inequalities
like `x + 2y < 6` in forms where `y` is not isolated. The test point
is the rule, not the shortcut.

### Worked example 1 — a strict inequality

> Graph `y > 2x − 1`.

1. Boundary: graph `y = 2x − 1` with a **dashed** line, because `>`
   excludes the boundary.
2. Test point `(0, 0)`: `0 > 2(0) − 1`, i.e. `0 > −1` — true.
3. Shade the half-plane containing `(0, 0)` (the side above the line
   here, but the test point is what decides it).
4. Spot-check: `(2, 5)` gives `5 > 3` ✓, inside the shading;
   `(1, 0)` gives `0 > 1` ✗, outside it. Both checks agree with the
   shading.

### Worked example 2 — an inequality that includes its boundary

> Graph `2x + 3y ≤ 12`.

1. Boundary: graph `2x + 3y = 12` with a **solid** line, because `≤`
   includes the boundary. (Intercepts help: `(6, 0)` and `(0, 4)`.)
2. Test point `(0, 0)`: `0 ≤ 12` — true. Shade the half-plane
   containing `(0, 0)`.
3. Spot-check: `(3, 2)` gives `6 + 6 = 12 ≤ 12` ✓ — on the boundary,
   and included because the line is solid. `(0, 5)` gives
   `15 ≤ 12` ✗ — outside the shading.

## Guided practice (10 min, with hints)

1. Graph `y < x + 3`. *Hint: dashed or solid? Test `(0, 0)`.*
2. Graph `x − y ≥ 2`. *Hint: test `(0, 0)` — if it fails, shade the
   opposite side.*
3. Is `(2, 4)` a solution of `3x + y > 9`? Is `(1, 2)`?
   *Hint: substitute; do not graph.*

## Independent practice (10 min)

1. Graph `y ≥ −x + 2`, stating the boundary style and the test-point
   result.
2. Graph `x + 2y < 6`, stating the boundary style and the test-point
   result.
3. Is `(4, 1)` a solution of `y ≤ 2x − 5`? Is `(2, 0)`?
4. A shaded region lies strictly below a dashed line with equation
   `y = x − 2` (the line itself is not shaded). Write the inequality
   it represents.
5. Explain in two sentences why a test point that lies on the boundary
   line cannot tell you which side to shade.

## Application (5 min)

You have $20 to spend. Notebooks cost $4 each and pens cost $2 each.
Let `n` = notebooks and `p` = pens. Write the inequality for what you
can afford, graph its boundary style, and list three affordable
combinations, including one that spends exactly $20. (Fictional
practice data.)

## Exit check (5 min)

Graph `y > −2x + 3`. State whether the boundary is solid or dashed,
give your test point and its result, and name one point in the shaded
region and one point outside it.

## Supports, extension, teacher note

- **Reading/language access:** pair every inequality with its spoken
  form ("`y` is greater than `2x − 1`") before graphing, and keep a
  posted chart: `≤`, `≥` → solid; `<`, `>` → dashed.
- **Alternate response mode:** a learner may describe the shading in
  words ("the side with the origin") and list test points instead of
  coloring, if coloring is hard to manage.
- **Extension:** graph `y ≥ 2` and `x < −1` on the same axes and
  describe, in words, the region where *both* hold — a preview of
  Lesson 06's intersections.
- **Teacher note — misconception:** learners often shade by the
  inequality's direction ("greater means up") even when the inequality
  is not solved for `y`. Require a test point in every solution until
  the habit is automatic. **Answer key:** `answer-key.md`, Lesson 05.
