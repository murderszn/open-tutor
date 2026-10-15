# Lesson 05 — Where Graphs Meet: Solving f(x) = g(x)

**Unit 02 · Session S13 · ~50 minutes**
**Standards:** A-REI.11, A-CED.1, N-Q.1

## Student goal

By the end of this lesson I can solve `f(x) = g(x)` exactly when the
algebra allows it, approximately with graphing technology when it
doesn't, and explain what the solutions mean in a real situation —
with units.

## Materials

Notebook, pencil. Desmos (free, no account) — essential today, not
optional.

## Readiness check (5 min)

1. Solve `x² = 2x + 3` by factoring. What do the two solutions
   represent on the graphs of `y = x²` and `y = 2x + 3`?
2. Use Desmos to graph `y = x³` and `y = 3x − 2`. About where do they
   cross?

(Adult: question 1's answer — the x-coordinates of the intersection
points — is the whole lesson in miniature. Question 2's "about where"
sets up approximation; the exact values come later.)

## Explicit teaching

**Intersections are equations.** The graphs of `y = f(x)` and `y =
g(x)` meet exactly where their y-values are equal — at the x-values
satisfying `f(x) = g(x)`. This is A-REI.11, and Unit 01 previewed it
with linear–quadratic systems. The method:

1. Set the expressions equal: `f(x) = g(x)`.
2. Bring everything to one side: `f(x) − g(x) = 0`.
3. Solve the resulting equation — by factoring (Lessons 02–03) when
   possible, with technology when not.
4. **Check** each candidate in the original equation, especially when
   the functions have domain restrictions.

**When algebra wins.** `x² = 2x + 3` becomes `x² − 2x − 3 = 0 = (x −
3)(x + 1)`: solutions `x = 3, x = −1`. The intersection points are
`(3, 9)` and `(−1, 1)` — find the y-values by substituting back into
either function (they agree there, which is itself a check).

**When algebra stalls, technology approximates.** Consider `f(x) =
x³` and `g(x) = 3x − 2`: the equation `x³ − 3x + 2 = 0` factors as
`(x − 1)²(x + 2) = 0` (check it), giving exact solutions `x = 1`
(double) and `x = −2`. But `x³ = x + 1` gives `x³ − x − 1 = 0`, which
has no rational zero (test ±1: both fail the Factor Theorem) — its
one real zero is irrational. In Desmos, graph both sides and read the
intersection: `x ≈ 1.3247`. Then **verify by substitution**: `(1.3247)³
≈ 2.3247` and `1.3247 + 1 = 2.3247` ✓. An approximate solution is
only finished when it's checked.

**Intersections in context (A-CED.1, N-Q.1).** Two cost models, a
revenue curve and a cost line, a drug concentration rising and
falling — "when are they equal?" is one of the most asked questions
in applied mathematics. The setup is always the same: name the
functions with units, set them equal, solve, interpret the
x-coordinate in the situation's units, and ask whether the answer is
reasonable. A negative time or a fractional person usually means the
model's domain needs trimming — Unit 01's context-trimming habit.

**A non-intersection is also an answer.** `x² + 1 = 2x − 1` becomes
`x² − 2x + 2 = 0`, discriminant `4 − 8 = −4`: no real solutions. The
graphs never meet — the line passes below the parabola everywhere.
Over the complex numbers the "solutions" `1 ± i` exist but correspond
to no real point. Lesson 02's distinction returns: valid algebra, no
physical (here: geometric) meaning.

## Worked examples (modeled reasoning)

**Example 1 — Exact solution, then the intersection points.**

Solve `x² + 1 = 3x − 1` exactly and give the intersection points.

*Reasoning.* Set equal and move everything left: `x² + 1 − 3x + 1 =
0`, i.e. `x² − 3x + 2 = 0`. Factor: `(x − 1)(x − 2) = 0`, so `x = 1`
or `x = 2`.

Find the points: at `x = 1`, both functions give `1² + 1 = 2` and
`3(1) − 1 = 2` ✓ — the point is `(1, 2)`. At `x = 2`: `2² + 1 = 5`
and `3(2) − 1 = 5` ✓ — the point is `(2, 5)`. The two agreement
checks (each function giving the same y) are the verification; if
they disagreed, the algebra would be wrong.

**Example 2 — Approximation with a substitution check.**

Approximate the real solution of `x³ = 2x + 5`.

*Reasoning.* Rewrite: `x³ − 2x − 5 = 0`. Factor Theorem test: `x =
1` gives `−6`; `x = 2` gives `−1`; `x = −1` gives `−4`; `x = −2`
gives `−9`. No integer zero — algebra stalls, so graph `y = x³` and
`y = 2x + 5` in Desmos and read the crossing: `x ≈ 2.0946`.

Verify by substitution: `(2.0946)³ ≈ 9.1892`; `2(2.0946) + 5 =
9.1892` ✓ (both sides agree to four decimal places — the
approximation is sound). Report the answer honestly: `x ≈ 2.0946`,
not `x = 2.0946`. The `≈` is part of the mathematics.

**Example 3 — A context with a unit check.**

A phone plan A costs `A(m) = 20 + 0.10m` dollars for `m` minutes;
plan B costs `B(m) = 0.25m` dollars. When do they cost the same, and
which plan is cheaper for 200 minutes?

*Reasoning.* Set equal: `20 + 0.10m = 0.25m` → `20 = 0.15m` → `m =
133.33…` minutes. Check: `A(133.33) = 20 + 13.33 = 33.33`;
`B(133.33) = 33.33` ✓.

Interpretation: at about 133 minutes the plans tie (units: minutes;
cost in dollars — both stated). For 200 minutes: `A(200) = 40`,
`B(200) = 50`, so plan A is cheaper. The intersection divides the
domain into "B cheaper" (`m < 133.33`) and "A cheaper" (`m >
133.33`) — one equation answers the whole comparison. Reasonableness:
133 minutes is about 2.2 hours of calls, a plausible monthly figure;
a negative answer here would have signaled a setup error.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. Solve `x² − 1 = 2x − 1` exactly and give both intersection
   points. [Move everything left; factor out the common term.]
2. Graph `y = x² − 4` and `y = x + 2` in Desmos. Solve exactly by
   algebra, then confirm the technology shows the same crossings.
   [The algebra should give `x = 3` and `x = −2`.]
3. Show that `x² + 2x + 5 = x − 1` has no real solution, and explain
   what this means geometrically. [Complete the square or check the
   discriminant.]
4. Approximate the solution of `x³ = 4x + 1` with Desmos (it has three
   real solutions — find all three approximately) and verify one by
   substitution. [Zoom near each crossing; report with `≈`.]

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Solve `2x² = 8x − 6` exactly. Give the intersection points of `y =
   2x²` and `y = 8x − 6`.
2. Solve `x³ − 2x² = 3x` exactly by factoring. How many intersection
   points do `y = x³ − 2x²` and `y = 3x` have?
3. A company's revenue is `R(x) = 50x` dollars and its cost is `C(x)
   = x² + 10x + 200` dollars, where `x` is units sold. Find the
   break-even quantities exactly, state the units, and say which
   quantity is the realistic one to plan around.
4. Approximate all real solutions of `x⁴ = 3x² − 1` with technology
   and verify one by substitution. (Hint: let `u = x²` first — then
   decide whether technology is even needed.)
5. **Error analysis:** A classmate solved `x² = 4x` by dividing both
   sides by `x`, getting `x = 4` only. Name the lost solution, explain
   where it went, and give the correct intersection points of `y =
   x²` and `y = 4x`.
6. **Explain your reasoning:** In Example 2, why was the Factor
   Theorem test on `±1, ±2` worth doing *before* opening Desmos?
   When is it not worth doing?

## Application

Two delivery services charge for a package by weight `w` (pounds):
`S(w) = 8 + 1.50w` dollars and `T(w) = 3w + 0.05w²` dollars.

a) Find the weight(s) where the services cost the same. Show the
   algebra.
b) Graph both cost functions for `0 ≤ w ≤ 40` (Desmos) and identify
   which service is cheaper for a 10-pound package and for a
   30-pound package.
c) The `0.05w²` term models "dimensional weight" surcharges kicking
   in. In one sentence, explain why service T becomes more expensive
   for heavy packages, using the end behavior of the two functions.

## Exit check

Solve `x² + 5x + 6 = 2x + 6` exactly, give the intersection points,
and state one sentence about what solving `f(x) = g(x)` always means
geometrically.

## Supports and extension

- **Reading access:** vocabulary cards for *intersection point,
  approximate solution*; the adult reads Example 2's reasoning aloud.
- **Alternate response mode:** the learner may capture Desmos
  screenshots (private, not committed) and annotate the crossing
  coordinates by hand; approximations may be reported to two decimal
  places.
- **Extension:** use Desmos to explore `x³ = kx + 1` for several
  values of `k` and describe how the number of real solutions
  changes; connect this to the discriminant idea from Lesson 02.

## Teacher note

Likely misconceptions: (1) dividing by a variable and losing `x = 0`
— make "bring everything to one side and factor" the non-negotiable
first move; (2) reporting approximations with `=` — insist on `≈`
and on the substitution check; (3) stopping at the x-value and never
finding the point — the intersection *point* needs both coordinates.
IP 4's hint is a deliberate nudge: `x⁴ = 3x² − 1` becomes `u² − 3u +
1 = 0` with `u = x²`, solvable exactly — technology is the backup,
not the first resort.

Answer key: `../answer-key.md` § Lesson 05.
