# Lesson 05 — Rational Equations, Extraneous Solutions, and Variation Models

**Goal (learner hears):** "I can solve a rational equation, check
every solution in the original equation, reject the ones that fail
the check — and say why — and write inverse and joint variation
models with units."
**Time:** ~50 minutes · **Materials:** paper, pencil, graphing
calculator (Desmos) for the intersection check.
**Standards:** A-REI.2, A-CED.1, A-REI.11, N-Q.1, N-Q.2.

## Readiness check (5 min)

Solve `x/(x - 2) = 3` and check the answer in the original equation.
(Answer: `x = 3(x - 2)`, so `x = 3x - 6`, `2x = 6`, `x = 3`. Check:
`3/(3 - 2) = 3`. Valid. Note the first move: the restriction
`x ≠ 2` was stated before multiplying — that habit is the whole
lesson.)

## Explicit teaching

**Solving a rational equation, step by step:**

1. State the restrictions: every denominator's zeros are excluded.
2. Multiply both sides by the least common denominator (or combine
   into a single fraction and cross-multiply where that is valid).
   This step can *create* solutions that were not solutions of the
   original equation — that is the whole point of step 4.
3. Solve the resulting (usually polynomial) equation.
4. **Check every candidate in the original equation.** A candidate
   that makes any original denominator zero, or that fails the
   original equation, is **extraneous**: it solves the multiplied
   equation, not the original one. Reject it, and say why. An
   unchecked solution is unfinished work.

**Why extraneous solutions arise.** Multiplying both sides of an
equation by an expression containing `x` is only reversible when
that expression is nonzero. When you multiply by `(x - a)`, you
quietly allow the case `x = a` — the very case the original equation
forbids. The multiplied equation therefore has, potentially, one
extra solution: `x = a` itself. The check is what removes it.

**Variation models.** A quantity can depend on another through a
rational formula:

- **Inverse variation:** `y = k/x` for a constant `k` (the constant
  of variation). As `x` doubles, `y` halves; the product `xy = k`
  stays constant. Example: travel time `t = d/v` for fixed distance
  `d` — double the speed, halve the time.
- **Joint variation:** `y = kxz` (varies jointly with `x` and `z`),
  or combinations such as `y = kx/z` (directly with `x`, inversely
  with `z`). Find `k` from one known pair, then use the model —
  and check that the answer's units and domain make sense in context.

**The intersection check (A-REI.11).** Solving `f(x) = g(x)` is
finding where two graphs intersect. A solution found algebraically
can be verified by graphing `y = f(x)` and `y = g(x)` in Desmos and
reading the intersection's x-coordinate; a solution that does not
appear as an intersection (or appears where a graph is undefined)
has failed the check.

### Modeled example 1 — a valid solution, checked

Solve `(x + 1)/(x - 2) = 3`.

*Step 1 — restrictions:* `x ≠ 2`.

*Step 2 — multiply:* multiply both sides by `(x - 2)`:
`x + 1 = 3(x - 2)`, so `x + 1 = 3x - 6`.

*Step 3 — solve:* `2x = 7`, so `x = 7/2`.

*Step 4 — check in the original:* left side `(7/2 + 1)/(7/2 - 2) =
(9/2)/(3/2) = 3`. Right side 3. Match, and `7/2 ≠ 2`, so `x = 7/2`
is a genuine solution. (This is the equation from the readiness
check's family — same moves, different numbers.)

### Modeled example 2 — an extraneous solution, caught by the check

Solve `(x - 1)/(x - 2) = 1/(x - 2)`.

*Step 1 — restrictions:* `x ≠ 2`.

*Step 2 — multiply:* multiply both sides by `(x - 2)`:
`x - 1 = 1`.

*Step 3 — solve:* `x = 2`.

*Step 4 — check in the original:* at `x = 2`, both denominators are
zero — the original equation has no meaning there. So `x = 2` is
**extraneous**, and the equation has **no solution**.

Say it exactly that way: "no solution," not "x = 2, but it doesn't
count." The multiplied equation `x - 1 = 1` has a solution; the
original equation does not. Confusing those two sentences is the
error this lesson exists to prevent.

*Graph view:* rewrite the left side by division:
`(x - 1)/(x - 2) = 1 + 1/(x - 2)`. So the graph of the left side is
the graph of the right side shifted up by 1 — the two graphs never
meet. In Desmos, `y = (x - 1)/(x - 2)` and `y = 1/(x - 2)` have no
intersection, and the algebra and the graph agree: there is no
solution.

## Guided practice (adult and learner together; 5 tasks)

1. Solve `2/x = 6`, with restriction and check.
   (`x ≠ 0`; `2 = 6x`, `x = 1/3`; check `2/(1/3) = 6`. Valid.)
2. Solve `1/(x + 1) + 1/(x - 1) = 0`, with restriction and check.
   (`x ≠ 1, -1`. Combine: `((x - 1) + (x + 1))/(x^2 - 1) =
   2x/(x^2 - 1) = 0`, so `x = 0`. Check: `1/1 + 1/(-1) = 0`.
   Valid.)
3. Solve `(x + 2)/(x - 3) = (x - 1)/(x - 3)` and classify the
   result. (Restrictions `x ≠ 3`. Multiply: `x + 2 = x - 1`,
   i.e. `2 = -1`, false — no candidate at all, so no solution.
   Contrast with Modeled example 2, where a candidate existed and
   was rejected; here the multiplied equation itself has none.)
4. Inverse variation: a trip of 240 miles takes 4 hours at a steady
   speed. Write `t = k/v`, find `k`, and find the time at 60 mph.
   (`k = 240` mile-hours in the sense `t = 240/v`; at 60 mph,
   `t = 4` hours. Units: miles divided by miles per hour gives
   hours — the unit check passes.)
5. Joint variation: the safe load `L` of a beam varies jointly with
   its width `w` and the square of its depth `d`, and inversely
   with its length `l`: `L = kwd^2/l`. If `L = 480` when
   `w = 2`, `d = 4`, `l = 8` (in consistent units), find `k`, then
   find `L` when `w = 3`, `d = 4`, `l = 6`. (Substitute:
   `480 = k * 2 * 16 / 8 = 4k`, so `k = 120`. Then
   `L = 120 * 3 * 16 / 6 = 960`, in the same load units.
   Solving for `k` as `k = 480 * 8/(2 * 16)` gives the same 120;
   either arrangement is accepted if the substitution is shown.)

## Independent practice (learner tries; adult reviews same day; 6 tasks)

1. Solve `3/(x - 1) = 2`, with restriction and check.
2. Solve `1/x + 1/(x + 2) = 0`, with restrictions and check.
3. Solve `(2x)/(x + 1) = (x + 3)/(x + 1)` and classify the result
   (genuine solution, extraneous solution, or no solution — with
   the check shown).
4. Solve `(x^2 - 9)/(x - 3) = 6` and classify the result.
   (Hint: simplify first, but keep the restriction.)
5. Work-rate equation: pipe A fills a tank in `x` hours, pipe B in
   `x + 3` hours; together they fill it in 2 hours. Write and
   solve `1/x + 1/(x + 3) = 1/2`, reject any nonviable solution
   with a reason, and state the two times.
6. Inverse variation: the intensity `I` of light varies inversely
   with the square of the distance `d` from the source:
   `I = k/d^2`. If `I = 80` (in given units) at `d = 2`, find `k`,
   then find `I` at `d = 5`, and say what happens to `I` as `d`
   grows large, in the language of Lesson 04.

## Application

A cyclist rides 30 miles out at speed `v` mph and returns at
`v - 4` mph, taking 4 hours in total. Write the rational equation
for the total time, solve it, and reject any nonviable speed with a
reason. (Equation: `30/v + 30/(v - 4) = 4`, `v ≠ 0, 4`, and in
context `v > 4`. Multiply by `v(v - 4)`: `30(v - 4) + 30v =
4v(v - 4)`, so `60v - 120 = 4v^2 - 16v`, i.e. `4v^2 - 76v + 120 =
0`, i.e. `v^2 - 19v + 30 = 0`. This quadratic does not factor
over the integers, so use the quadratic formula:
`v = (19 ± √(361 - 120))/2 = (19 ± √241)/2`,
about `(19 ± 15.52)/2`, so `v ≈ 17.26` or `v ≈ 1.74`. The second
candidate is less than 4, so the return speed `v - 4` would be
negative — nonviable in context, rejected. The viable speed is
about 17.3 mph out, about 13.3 mph back. Check approximately:
`30/17.26 + 30/13.26 ≈ 1.74 + 2.26 = 4.00` hours. This problem is
deliberately harder than the quiz items: an approximate,
unit-checked, context-rejected answer is the goal, not a tidy
integer.)

## Exit check

1. Solve `4/(x + 2) = 1` and check it. (`x ≠ -2`; `4 = x + 2`,
   `x = 2`; check `4/4 = 1`. Valid.)
2. Solve `(x - 5)/(x - 5) = 2` and classify the result.
   (Restriction `x ≠ 5`. Multiplying gives `x - 5 = 2(x - 5)`,
   i.e. `x = 5` — which is excluded, so extraneous, and the
   equation has no solution. Equivalently: the left side equals 1
   wherever it is defined, never 2.)
3. In one sentence, why must the check use the *original* equation?
   (Because multiplying can introduce candidates that satisfy the
   multiplied equation but not the original — only the original
   can tell them apart.)

## Supports and extension

- **Reading access:** write "Restrictions: ___" as the first line
  of every solution, before any algebra; the adult checks that
  line first.
- **Alternate response mode:** a learner may verify a solution by
  graphing both sides in Desmos and reading the intersection,
  provided the restriction is still stated in words.
- **Extension:** solve `1/(x - 1) + 2/(x + 1) = 3/(x^2 - 1)` and
  classify every candidate. (Answer: combine the left side:
  `((x + 1) + 2(x - 1))/(x^2 - 1) = (3x - 1)/(x^2 - 1)`. Set equal
  to `3/(x^2 - 1)`: `3x - 1 = 3`, so `x = 4/3`, which is not
  excluded (`x ≠ 1, -1`), and checks: left side at `4/3` is
  `1/(1/3) + 2/(7/3) = 3 + 6/7 = 27/7`; right side is
  `3/((16/9) - 1) = 3/(7/9) = 27/7`. Valid — a good example where
  combining first avoids a messier multiplication.)

## Teacher note — likely misconceptions

- *Checking in the multiplied equation:* the check must be in the
  original. A candidate that "checks" after multiplying is exactly
  the extraneous case, not a validation.
- *Extraneous reported as the answer:* require the final sentence
  to be "no solution" or "the solution is …" — never a bare
  candidate list.
- *Context-viable vs. algebraically valid:* Lesson 05's work-rate
  and cyclist problems separate the two rejections. A negative
  time is not an extraneous solution in the algebraic sense — it
  solves the equation — but it is nonviable in context, and the
  reason must be stated as a context reason, not an algebra one.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-05).
