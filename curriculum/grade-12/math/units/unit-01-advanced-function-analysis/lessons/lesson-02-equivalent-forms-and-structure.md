# Lesson 02 — Equivalent Forms and Structure

**Unit 01 · Session S3 · ~50 minutes**
**Standards:** F-IF.8 (write a function in different but equivalent
forms to reveal key features), A-SSE.1.a (interpret parts of an
expression, such as terms, factors, and coefficients), A-SSE.1.b
(interpret complicated expressions by viewing one or more of their
parts as a single entity), A-SSE.2 (use the structure of an expression
to identify ways to rewrite it)

## Student goal

By the end of this lesson I can look at a function, choose the
equivalent form that exposes the feature I need — factored form for
zeros, completed-square form for extrema, polynomial division for a
rational function's end behavior and asymptotes — and rewrite
complicated expressions by treating a repeated chunk as a single
object.

## Materials

Notebook, pencil, Desmos (free, no account needed) for verification.

## Readiness check (5 min)

1. Factor `x² − 5x + 6`.
2. Expand `(x − 4)²`. What is the constant term, and where did it
   come from?
3. Divide: `(x² + 7x + 12) ÷ (x + 3)`. Give the quotient and the
   remainder.

## Explicit teaching

### The same function, wearing different clothes

Two expressions are **equivalent** when they produce the same output
for every allowed input. The same function can be written many ways,
and each form is a spotlight aimed at one feature:

- **Factored form** — `f(x) = a(x − r₁)(x − r₂)…` — spotlights the
  **zeros**: the x-intercepts are `r₁, r₂, …`. A repeated factor, like
  `(x − 1)²`, signals a zero of **multiplicity** 2: the graph touches
  the x-axis at `x = 1` and turns around instead of crossing.
- **Vertex (completed-square) form** — `f(x) = a(x − h)² + k` —
  spotlights the **extremum**: the vertex `(h, k)` is the maximum when
  `a < 0` and the minimum when `a > 0`, and `x = h` is the axis of
  symmetry.
- **Division form for rationals** — writing `P(x)/Q(x)` as
  `quotient + remainder/divisor` — spotlights **end behavior** and
  **asymptotes**: far out, the remainder fraction dies away and the
  graph follows the quotient.

The skill is not just rewriting — it is *choosing*. Ask "what do I
need to know?" first, then pick the form that answers it.

### Seeing a chunk as one thing

Sometimes an expression looks complicated until you notice a repeated
piece. In `3^{2x} − 10·3ˣ + 9`, the chunk `3ˣ` appears twice — once
squared, once plain. If you cover `3ˣ` with your thumb and call it
`u`, the equation becomes `u² − 10u + 9 = 0`, an ordinary quadratic.
This move — **viewing part of an expression as a single entity** — turns
unfamiliar problems into familiar ones. After solving for `u`, you
uncover the thumb and solve for x.

### Division reveals a rational function's skeleton

For a rational function where the numerator's degree is exactly one
more than the denominator's, polynomial division produces a linear
quotient plus a leftover fraction:

`r(x) = (x² + 3x + 1)/(x − 2) = (x + 5) + 11/(x − 2)`

As `|x|` grows, `11/(x − 2)` shrinks toward 0, so the graph hugs the
line `y = x + 5` — a **slant asymptote**. Division also exposes
**holes**: if a factor cancels between numerator and denominator, the
function equals the simplified form everywhere *except* at the
canceled x-value, where there is a single missing point.

## Worked examples (modeled reasoning)

**Example 1 — Factored form for zeros, vertex form for the extremum:
`q(x) = −2x² + 12x − 7`.**

*What do I need?* The zeros (x-intercepts) and the maximum. One form
cannot spotlight both, so I will produce two.

*Zeros via factoring.* Factor out the leading coefficient first:
`q(x) = −2(x² − 6x + 7/2)`. The quadratic `x² − 6x + 7/2` does not
factor over the integers (no two integers multiply to `7/2` and add
to `−6`), so the zeros are irrational — factoring over the rationals
is a dead end. Rather than force it, I switch tools: complete the
square, then solve.

*Extremum via completing the square.*
`q(x) = −2x² + 12x − 7`
`= −2(x² − 6x) − 7`  (factor −2 out of the x-terms only)
`= −2[(x − 3)² − 9] − 7`  (half of −6 is −3; `(−3)² = 9`)
`= −2(x − 3)² + 18 − 7`
`= −2(x − 3)² + 11`

Vertex form spotlights the answer: the vertex is `(3, 11)`, and since
the leading coefficient `−2` is negative, this is a **maximum** of 11
at `x = 3`. Check by evaluating: `q(3) = −2(9) + 36 − 7 = −18 + 36
− 7 = 11` ✓.

*Zeros from the vertex form.* Set `−2(x − 3)² + 11 = 0`:
`(x − 3)² = 11/2`, so `x = 3 ± √(11/2) = 3 ± √22/2 ≈ 3 ± 2.345`,
giving `x ≈ 0.655` and `x ≈ 5.345`. Check one: `q(0.655) ≈
−2(0.429) + 7.86 − 7 = −0.858 + 7.86 − 7 = 0.002 ≈ 0` ✓ (rounding).
The factored-over-the-reals form is `q(x) = −2(x − 0.655)(x − 5.345)`
approximately — exact zeros live in the square-root form.

**Example 2 — Division for end behavior and asymptotes:
`r(x) = (x² + 3x + 1)/(x − 2)`.**

*What do I need?* The asymptotes and the end behavior. The fraction
form hides them; division will expose the skeleton.

*Divide.* `x² + 3x + 1` divided by `x − 2`:
`x² ÷ x = x` → `x(x − 2) = x² − 2x` → subtract: `5x + 1`.
`5x ÷ x = 5` → `5(x − 2) = 5x − 10` → subtract: `11`.
So `r(x) = (x + 5) + 11/(x − 2)`.

*Read the form.* The denominator is zero at `x = 2` with no canceling
factor, so `x = 2` is a **vertical asymptote** (check:
`r(1.9) = (3.61 + 5.7 + 1)/(−0.1) = 10.31/(−0.1) = −103.1`,
blowing up ✓). As `|x| → ∞`, `11/(x − 2) → 0`, so the graph
approaches the line `y = x + 5`: a **slant asymptote**. The sign of
the remainder tells which side: for `x > 2` the remainder is positive,
so the graph sits *above* the slant line on the right branch; for
`x < 2` it sits below it.

*Zeros from the numerator.* `x² + 3x + 1 = 0` gives
`x = (−3 ± √5)/2 ≈ −0.382, −2.618`. Sign check across the pieces:
at `x = −3`: `(9 − 9 + 1)/(−5) = −0.2` (negative); at `x = −1`:
`(1 − 3 + 1)/(−3) = 1/3` (positive); at `x = 0`: `1/(−2) = −0.5`
(negative); at `x = 3`: `(9 + 9 + 1)/1 = 19` (positive). The sign
flips at each zero and at the asymptote — consistent with the sketch,
which Desmos confirms.

**Example 3 — Viewing a chunk as a single entity: solve
`3^{2x} − 10·3ˣ + 9 = 0`.**

*Reasoning.* The chunk `3ˣ` repeats: `3^{2x}` is `(3ˣ)²`. Let
`u = 3ˣ` (covering the chunk with my thumb). The equation becomes
`u² − 10u + 9 = 0`, which factors: `(u − 1)(u − 9) = 0`, so `u = 1`
or `u = 9`. Uncover: `3ˣ = 1` gives `x = 0` (since `3⁰ = 1`), and
`3ˣ = 9` gives `x = 2` (since `3² = 9`). Verify in the original:
`x = 0`: `1 − 10 + 9 = 0` ✓; `x = 2`: `81 − 90 + 9 = 0` ✓.
A quadratic in disguise — the structure, not the exponents, decided
the method.

## Guided practice

1. Factor `f(x) = x³ − 4x² − 7x + 10` completely and state the zeros.
   [Hint: test small integer candidates in the polynomial; one of
   them is a root, and then divide it out.]
2. Write `m(x) = 3x² − 12x + 5` in vertex form by completing the
   square. Identify the vertex, say whether it is a maximum or a
   minimum, and give the axis of symmetry. [Hint: factor the 3 out
   of the x-terms first, before completing the square.]
3. **Error analysis.** Mara looks at `d(x) = (x² − 9)/(x + 3)` and
   says: "The denominator is zero at `x = −3`, so there is a
   vertical asymptote at `x = −3`." Simplify the function, decide
   whether she is right, and describe what the graph actually looks
   like near `x = −3`.
4. Solve `x⁴ − 5x² + 4 = 0` by viewing `x²` as a single entity.
   [Hint: let `u = x²`; solve the quadratic for `u` first, then
   remember that each positive `u` gives *two* x-values.]

## Independent practice

1. For `g(x) = −x² + 8x − 12`: (a) write the factored form and state
   the zeros; (b) write the vertex form and state the maximum value
   and where it occurs; (c) expand your factored form to prove it
   equals the original.
2. For `r(x) = (2x² + 5x − 3)/(x + 1)`: (a) use polynomial division
   to write it as `quotient + remainder/(x + 1)`; (b) name the
   vertical asymptote and the slant asymptote; (c) find the zeros by
   factoring the numerator.
3. **Explain your reasoning.** A student writes `x² + 6x + 9` and
   `(x + 3)²` and claims they "must have different graphs, because
   one has three terms and the other has one." Explain the error.
   Then say what each form is *good for*: which feature does each
   spotlight?
4. A gardener has 30 meters of fencing to enclose a rectangular
   garden along three sides (the fourth side is a wall). If the two
   sides perpendicular to the wall each have length `x` meters, the
   area is `A(x) = x(30 − 2x)` square meters (fictional scenario).
   (a) Rewrite `A(x)` in vertex form. (b) What dimensions give the
   maximum area, and what is that area? (c) Explain why the vertex
   form — not the factored form — was the right tool for part (b).

## Application

A ball is launched straight up. Its height in feet after `t` seconds
is modeled by `h(t) = −16t² + 64t + 5` (fictional data).

a) Write `h(t)` in vertex form. What is the maximum height, and when
   does the ball reach it?
b) Factor out −16 and write the height in the form
   `−16(t − r₁)(t − r₂)`. Find `r₁` and `r₂` (exact square-root form,
   then decimal approximations). Which root is the landing time, and
   why do you discard the other?
c) A teammate says: "To find when the ball lands, the vertex form
   from part (a) is the best tool." Do you agree? Explain which form
   answers which question, in one short paragraph.

## Exit check

1. You need the x-intercepts of `y = 2x² − 8x + 6`. Which equivalent
   form do you reach for, and what are the intercepts?
2. You need the end behavior of `y = (x³ − 8)/(x² + 1)` as
   `x → ±∞`. Which equivalent form do you reach for, and what does
   the graph approach?

## Supports and extension

- **Reading/language access:** Before starting, write each of these
  sentence frames in your notebook and complete one for every
  problem: "The form ______ spotlights the feature ______." The
  terms *equivalent*, *factored form*, *vertex form*,
  *multiplicity*, *remainder*, *slant asymptote*, and *hole* each get
  a one-line definition with an example from this lesson.
- **Alternate response mode:** For the worked-example methods, you
  may record a "commentary track": read each algebra line aloud and
  say *why* that step was chosen (not just what it computes),
  instead of writing the justifications.
- **Extension:** Prove the connection between completing the square
  and the quadratic formula: start with `ax² + bx + c = 0`
  (`a ≠ 0`), complete the square step by step, and show that the
  solutions are `x = (−b ± √(b² − 4ac))/(2a)`. Where in your proof
  did you divide by `a`, and why was `a ≠ 0` required there?

## Teacher note

Two stubborn misconceptions: (1) learners cancel a common factor in
a rational function and then forget the hole — they graph the
simplified function as if the canceled x-value were still allowed.
Require the restriction written next to every simplification.
(2) Learners treat completing the square as a ritual rather than a
choice: drill the question "what do I need to know?" *before* any
rewriting, or every problem becomes "factor everything." Answer-key reference: `../answer-key.md` (adults-only file), Lesson 02.
