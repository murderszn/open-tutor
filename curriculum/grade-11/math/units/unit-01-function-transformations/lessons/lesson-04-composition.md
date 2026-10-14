# Lesson 04 — Composition: Chaining Functions

**Unit 01 · Session S11 · ~50 minutes**
**Standards:** F-BF.1.c, F-IF.2, F-IF.6, A-REI.7, A-REI.11 (preview)

## Student goal

By the end of this lesson I can build a composite function from a
two-stage situation, compute compositions in both orders and explain
why they differ, break a composite back into its stages, and read the
solution of `f(x) = g(x)` from a graph intersection.

## Materials

Notebook, pencil, calculator. The illustration
`../assets/two-stage-function-machine.png` (see `assets/README.md`).

## Readiness check (5 min)

Let `f(x) = 2x + 1` and `g(x) = x²`.

1. Compute `f(3)` and then apply `g` to that result: `g(f(3))`.
2. Now compute `g(3)` first, then `f` of that result: `f(g(3))`.
3. Are the answers the same? Keep both numbers — the lesson explains
   why not.

## Explicit teaching

Look at the two-stage machine in `assets/two-stage-function-machine.png`:
shapes enter the left stage, something happens inside, the results flow
to the right stage, something else happens, and a final result exits.
*(Text alternative: imagine two boxes in a row. An input enters the
left box, which applies rule `g`; its output travels by arrow into the
right box, which applies rule `f`; the final output exits right.)*

That picture is **composition**. If `g` runs first and `f` runs second,
the composite is written `(f∘g)(x)` and read "f of g of x":

`(f∘g)(x) = f(g(x))` — evaluate the *inside* function first.

The notation is an order of operations, not multiplication. `f∘g` means
"g first, then f" — right to left, the way you read the nested
parentheses.

**Order matters.** From the readiness check: `g(f(3)) = g(7) = 49`,
but `f(g(3)) = f(9) = 19`. Doubling-then-squaring is not
squaring-then-doubling. In the machine picture, swapping the two stages
builds a different machine. Always compute inside-out, and never assume
`f∘g = g∘f`.

**Decomposition** is composition in reverse: given a composite like
`h(x) = √(3x + 1)`, name two stages whose chaining produces it — for
example, `g(x) = 3x + 1` (the inside stage) and `f(x) = √x` (the
outside stage), so `h = f∘g`. Decompositions are not unique; any pair
that chains correctly is acceptable, and saying *why* it chains is the
skill.

**Average rate of change** (F-IF.6) measures a composite's behavior
over an interval:

`average rate of change of h on [a, b] = (h(b) − h(a)) / (b − a)`

For a composite built from a context, this number has a meaning — for
example, average dollars per week over a two-stage pricing model.

**Where two graphs meet (preview).** If `y = f(x)` and `y = g(x)` cross
at `(a, b)`, then `f(a) = g(a) = b` — the x-coordinate `a` solves the
equation `f(x) = g(x)`. Graph intersections and equation solutions are
the same fact in two languages. A-REI.7 makes this concrete with a
line and a parabola: solve the system, and the solutions are exactly
the crossing points.

## Worked examples (modeled reasoning)

**Example 1 — Build a composite from a two-stage context.**

A print shop charges a $12 setup fee plus $0.40 per page: `C(p) = 12 + 0.40p`
dollars for `p` pages. A school orders `p = 25n` pages for `n`
classrooms. Write the cost as a function of `n`, and compute the cost
for 8 classrooms.

*Reasoning.* Two stages: `n → p` (pages from classrooms), then
`p → C` (cost from pages). The composite is `C(p(n))`:

`C(p(n)) = 12 + 0.40(25n) = 12 + 10n`.

Check units: `0.40` dollars/page × `25n` pages = `10n` dollars —
units cancel correctly (N-Q.1). For `n = 8`: `12 + 80 = $92`.
Sanity check against the stages: 8 classrooms → 200 pages →
`12 + 0.40·200 = 12 + 80 = 92` ✓. The composite and the two-stage
computation agree — they must.

**Example 2 — Order matters, and decomposition.**

Let `f(x) = x² − 1` and `g(x) = 3x`.

a) Compute `(f∘g)(x)` and `(g∘f)(x)`; evaluate both at `x = 2`.
b) Decompose `h(x) = (5x − 2)² − 1` into two stages.

*Reasoning.* a) `(f∘g)(x) = f(g(x)) = f(3x) = (3x)² − 1 = 9x² − 1`.
`(g∘f)(x) = g(f(x)) = g(x² − 1) = 3(x² − 1) = 3x² − 3`. At `x = 2`:
`f∘g` gives `9·4 − 1 = 35`; `g∘f` gives `3·4 − 3 = 9`. Different
machines, different outputs — and note the structure: in `f∘g` the
squaring happens *after* the tripling, so the 9 appears; in `g∘f`
the tripling happens after, so the 3 only scales.

b) Work outside-in: the last operation applied to `x` is "square,
then subtract 1." So let the inside stage be `g(x) = 5x − 2` and the
outside stage be `f(x) = x² − 1`; then `(f∘g)(x) = (5x − 2)² − 1 = h(x)`
✓. An equally valid decomposition: `g(x) = 5x − 2`, `f(x) = x² − 1`
is the natural one; `g(x) = x − 2/5`, `f(x) = (5x)² − 1` also chains
correctly — accept either with the chaining shown.

**Example 3 — Intersection preview: solve `f(x) = g(x)`.**

Solve the system `y = 2x + 1` and `y = x² − 3` (A-REI.7).

*Reasoning.* At an intersection the y-values are equal, so set the
expressions equal: `x² − 3 = 2x + 1`, giving `x² − 2x − 4 = 0`.
Quadratic formula: `x = (2 ± √(4 + 16))/2 = (2 ± √20)/2 = 1 ± √5`.
Exact solutions: `x = 1 + √5` and `x = 1 − √5`. Each is an
x-coordinate where the line meets the parabola; substituting back
(`y = 2(1 + √5) + 1 = 3 + 2√5`) gives the full points. Approximate
with technology to check: `1 + √5 ≈ 3.24`, `1 − √5 ≈ −1.24`. This is
the same move as "where do the graphs cross" — algebra and picture
agreeing.

## Guided practice

1. A car rental costs $45 per day plus $0.25 per mile. A road trip
   covers `m = 180d` miles in `d` days. Write total cost as a
   function of `d`; check the units; compute for `d = 5`. [Which
   stage runs first?]
2. For `f(x) = √x` and `g(x) = x + 9`: compute `(f∘g)(x)` and
   `(g∘f)(x)`, state the domain of each, and explain why the domains
   differ. [Where does each composite break?]
3. Decompose `h(x) = 1/(2x + 5)` into two stages two different ways.
   [Name the inside operation first.]
4. Find the intersection points of `y = −x + 4` and `y = x² − 2x`
   exactly, then approximate with a calculator and sketch-check.
   [Set the expressions equal; justify each step.]

## Independent practice

1. A phone battery drains 8% per hour of video: `B(h) = 100 − 8h`.
   Video length depends on episodes watched: `h = 0.75e`.
   a) Write battery as a function of episodes; state the realistic
      domain. b) After how many episodes does the battery hit 20%?
      Solve and interpret.
2. Let `f(x) = 2ˣ` and `g(x) = x − 3`. Compute `(f∘g)(x)` and
   `(g∘f)(x)`. Evaluate both at `x = 5` and explain in words what
   each composite *does* to its input.
3. Error analysis: "Since `(f∘g)(2) = 35` and `(g∘f)(2) = 9` for the
   functions in Example 2, composition is commutative up to order —
   you just get the numbers swapped." Identify every error in this
   claim.
4. Decompose `h(x) = √(x² + 4)` and `k(x) = (x² + 4)³`. What do the
   two decompositions share, and where do they differ?
5. Find where `f(x) = 3x − 2` meets `g(x) = x² + x − 6`. Give exact
   points, then use Desmos to graph both and confirm the crossings
   visually. Write one sentence connecting the algebra to the picture
   (A-REI.11).

## Application

A coffee shop's daily revenue depends on cups sold: `R(c) = 4.50c`
dollars. Cups sold depends on hours open: `c = 30h + 20` (regulars
plus walk-ins per hour).

a) Write revenue as a function of hours; interpret the slope and
   intercept in context with units.
b) The shop considers opening 2 extra hours. Use the composite to
   predict the revenue change, then compute the average rate of
   change of revenue over the interval `[8, 10]` hours and explain
   what that number means.
c) A rival models *its* revenue as `S(h) = 4.50(30h + 20)` too — but
   claims the decomposition is `f(h) = 4.50h`, `g(h) = 30h + 20`
   with `S = f∘g`. Verify the claim by expanding, and explain what
   `f` and `g` each represent in the shop's story.

## Exit check

1. For `f(x) = x² + 1`, `g(x) = 2x`: write `(f∘g)(x)` and `(g∘f)(x)`,
   and state in one sentence why they are different functions.
2. The graphs of `y = f(x)` and `y = g(x)` intersect at `(−1, 4)`
   and `(3, 8)`. What equation do `x = −1` and `x = 3` solve?

## Supports and extension

- **Reading/language access:** The phrase "f of g of x" is practiced
  aloud with a two-step gesture (tap right for the inner function,
  then left for the outer) before any symbolic work.
- **Alternate response mode:** Composites may be computed with a
  two-column table (inner outputs become outer inputs) instead of
  nested algebra.
- **Extension:** Show that if `f` and `g` are both odd, then `f∘g` is
  odd; find a counterexample to "the composite of two even functions
  is even" — or prove it true. Then: for what `f` does
  `f∘g = g∘f` hold for *every* `g`? Prove your answer.

## Teacher note

Watch for: (1) computing outside-in (`f(g(x))` with `f` evaluated
first); (2) "decomposition" that just renames instead of factoring
stages — require the chaining check `(f∘g)(x) = h(x)` shown; (3) in
the intersection work, solving `f(x) = g(x)` but reporting only
x-values when the task asked for points. The generated machine image
is intentionally text-free; all stage labels live in the prose so a
learner can relabel the stages for any decomposition task.
Answer-key reference: `answer-key.md`, Lesson 04.
