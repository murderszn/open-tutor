# Lesson 03 — Taking Polynomials Apart

**Unit 02 · Session S6 · ~50 minutes**
**Standards:** A-SSE.1.a, A-SSE.1.b, A-SSE.2, A-APR.2, A-APR.3,
A-APR.4 (enrichment), A-APR.5 (+) (enrichment)

## Student goal

By the end of this lesson I can factor degree-3 and degree-4
polynomials by grouping and by special forms; I can use the Remainder
Theorem to test whether `x − a` is a factor; and I can divide out a
factor to reduce the degree (enrichment: I can state the Binomial
Theorem for small `n`).

## Materials

Notebook, pencil. Calculator optional.

## Readiness check (5 min)

1. Factor completely: `x³ − 4x` and `x⁴ − 16`. (Grade-9 factoring;
   the second one needs two rounds.)
2. Evaluate `p(2)` for `p(x) = x³ − 2x² − 5x + 6` by substitution.

(Adult: if question 1's `x⁴ − 16` stalls, redo difference of squares
twice — the lesson builds on exactly this. Question 2 previews the
Remainder Theorem; the point is how *fast* evaluation is compared to
long division.)

## Explicit teaching

**Factoring is reverse-multiplication.** In Lesson 02 you saw `x³ + x
= x(x − i)(x + i)`: finding what was multiplied to make the
polynomial. For cubics and quartics, two tools carry most of the
weight.

**Tool 1 — Grouping.** When four terms share no single common factor,
group them into pairs that do:

`x³ + 2x² − x − 2 = x²(x + 2) − 1(x + 2) = (x² − 1)(x + 2)`

The shared binomial `(x + 2)` is the prize — factor it out. Then keep
going: `x² − 1 = (x − 1)(x + 1)`, so the complete factorization is
`(x − 1)(x + 1)(x + 2)`. Always ask "can I factor further?" after each
round. Grouping sometimes needs a rearrangement of terms or a factored
minus sign — try it and check by multiplying back.

**Tool 2 — Special forms.** Memorize these as patterns, not as
separate rules:

- Difference of squares: `a² − b² = (a − b)(a + b)`
- Sum of cubes: `a³ + b³ = (a + b)(a² − ab + b²)`
- Difference of cubes: `a³ − b³ = (a − b)(a² + ab + b²)`

So `x³ − 27 = (x − 3)(x² + 3x + 9)` and `8x³ + 1 = (2x + 1)(4x² − 2x
+ 1)`. **Seeing structure** (A-SSE.2) means recognizing `x⁴ − 81` as
`(x²)² − 9²` before you touch a pencil.

**Tool 3 — The Remainder Theorem.** Dividing `p(x)` by `(x − a)` by
long division is slow. The theorem says: **the remainder is just
`p(a)`.** Evaluate, don't divide.

Why it works (one paragraph, worth reading twice): division writes
`p(x) = (x − a)·q(x) + r` where `r` is a constant (the divisor has
degree 1, so the remainder has degree 0). Substitute `x = a`: the
`(x − a)` term vanishes, leaving `p(a) = r`.

**The Factor Theorem** is the Remainder Theorem's sharper sibling:
**`(x − a)` is a factor of `p(x)` exactly when `p(a) = 0`.** This turns
factor-hunting into evaluation: test candidate values, and every hit
hands you a factor. Then divide it out (by grouping, inspection, or
synthetic division) and factor the lower-degree quotient.

Worked chain for `p(x) = x³ − 2x² − 5x + 6`: test `p(1) = 1 − 2 − 5 +
6 = 0` — hit, so `(x − 1)` is a factor. Divide out: `x³ − 2x² − 5x +
6 = (x − 1)(x² − x − 6) = (x − 1)(x − 3)(x + 2)`. Check: `(x − 1)(x −
3) = x² − 4x + 3`; times `(x + 2)`: `x³ + 2x² − 4x² − 8x + 3x + 6 = x³
− 2x² − 5x + 6`. ✓

**Identities and the Binomial Theorem (enrichment).** A **polynomial
identity** is an equation true for all values, like `(x² + y²)² = (x²
− y²)² + (2xy)²` — which generates Pythagorean triples (try `x = 2,
y = 1`: `25 = 9 + 16`). The **Binomial Theorem** expands `(x + y)ⁿ`
with coefficients from Pascal's Triangle: `(x + y)³ = x³ + 3x²y +
3xy² + y³`. The S8 reading session develops these.

## Worked examples (modeled reasoning)

**Example 1 — Grouping with a factored minus.**

Factor `x³ − 3x² − 4x + 12` completely.

*Reasoning.* Group as `(x³ − 3x²) − (4x − 12)` — note the minus is
factored out of the second pair, flipping `+12` to `−12` inside:

`= x²(x − 3) − 4(x − 3) = (x² − 4)(x − 3)`.

Now `x² − 4` factors further: `= (x − 2)(x + 2)(x − 3)`.

Multiply-back check on the last step: `(x − 2)(x + 2) = x² − 4` ✓,
and `(x² − 4)(x − 3) = x³ − 3x² − 4x + 12` ✓. The sign-flip in
grouping is the step to double-check; the multiply-back is how you
check it.

**Example 2 — The Remainder Theorem as a factor test.**

Is `(x + 2)` a factor of `p(x) = 2x³ − 5x² + x + 6`? If so, factor
`p(x)` completely.

*Reasoning.* By the Factor Theorem, test `p(−2)` (because `x + 2 = x
− (−2)`):

`p(−2) = 2(−8) − 5(4) + (−2) + 6 = −16 − 20 − 2 + 6 = −32 ≠ 0`.

Not a factor — no division needed; one evaluation settled it. Try
`x − 2`: `p(2) = 16 − 20 + 2 + 6 = 4 ≠ 0`. Try `x − 3`: `p(3) = 54 −
45 + 3 + 6 = 18 ≠ 0`. Try `x + 1`: `p(−1) = −2 − 5 − 1 + 6 = −2 ≠
0`. Try `x − 1`: `p(1) = 2 − 5 + 1 + 6 = 4 ≠ 0`.

Hmm — no integer hit. This happens: not every cubic has a rational
zero. The honest conclusion: `p(x)` has no linear factor with integer
`a`, so it doesn't factor over the rationals by this method. (Its one
real zero is irrational — technology or Lesson 05's approximation
methods would find it.) Knowing when the tool *doesn't* apply is part
of using it well.

**Example 3 — A full factor chain with the theorem.**

Factor `q(x) = x⁴ − 5x² + 4` completely over the reals, then over the
complex numbers.

*Reasoning.* See the structure first: this is quadratic in `x²`. Let
`u = x²`: `u² − 5u + 4 = (u − 1)(u − 4)`. Substitute back: `(x² −
1)(x² − 4) = (x − 1)(x + 1)(x − 2)(x + 2)`. Four real linear factors —
done over the reals.

Over the complex numbers nothing changes here (all zeros were real).
Contrast `r(x) = x⁴ − 16 = (x² − 4)(x² + 4) = (x − 2)(x + 2)(x² +
4)`. The last factor needs the complex extension from Lesson 02:
`x² + 4 = (x − 2i)(x + 2i)`, so `r(x) = (x − 2)(x + 2)(x − 2i)(x +
2i)` — four zeros counting the conjugate pair.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. Factor by grouping: `x³ + 5x² + 2x + 10`. [Group `(x³ + 5x²) +
   (2x + 10)`; factor each pair.]
2. Factor `x³ − 8` using the difference-of-cubes pattern. Then factor
   the quadratic piece over the complex numbers. [`a = x, b = 2`.]
3. Use the Remainder Theorem to find the remainder when `p(x) = x³ +
   4x² − 3x − 2` is divided by `(x − 1)`. [Evaluate `p(1)` — no long
   division.]
4. Is `(x − 2)` a factor of `p(x) = x³ − 3x² + 4`? Justify with one
   evaluation. [Factor Theorem: test `p(2)`.]
5. (Enrichment) Write out `(x + y)⁴` using Pascal's Triangle, then
   verify by setting `y = 1` and expanding `(x + 1)⁴` by repeated
   multiplication.

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Factor completely by grouping: `2x³ − 3x² − 8x + 12`.
2. Factor `27x³ + 64` using a special form.
3. Find the remainder when `p(x) = 3x³ − x² + 2x − 5` is divided by
   `(x + 1)`, using the Remainder Theorem only.
4. Factor `p(x) = x³ − 6x² + 11x − 6` completely: test integer
   candidates with the Factor Theorem, divide out each hit, and
   multiply back to verify.
5. Factor `x⁴ − 81` in two stages and name the structure you saw at
   each stage.
6. (Enrichment) Verify the identity `(x² + y²)² = (x² − y²)² +
   (2xy)²` by expanding both sides, then use `x = 3, y = 2` to
   produce a Pythagorean triple and check it.
7. **Error analysis:** A classmate factored `x³ − 2x² − x + 2` as
   `(x² − 1)(x − 2)` and stopped. Is the factorization complete?
   Finish it and explain what "complete" means.

## Application

A box is built from a square sheet by cutting squares of side `x`
from each corner and folding up the sides. The volume is `V(x) = x(10
− 2x)²` cubic inches for a 10-inch sheet. Expand `V(x)` into standard
polynomial form, factor it completely, and use the factored form to
list every value of `x` that makes the volume zero. Which of those
values are physically possible for the box, and why are the others
rejected? (Unit check: `x` is in inches; `V` in cubic inches.)

## Exit check

State the Remainder Theorem in your own words, then use it — without
long division — to decide whether `(x + 3)` is a factor of `x³ + 2x²
− 5x − 6`.

## Supports and extension

- **Reading access:** vocabulary cards for *grouping, Remainder
  Theorem, Factor Theorem, identity*; the adult reads Example 2's
  "no hit" reasoning aloud — it models honest mathematics.
- **Alternate response mode:** the learner may test factor candidates
  with a calculator's table feature; grouping steps may be shown with
  color-coded pairs.
- **Extension:** learn synthetic division as a faster divide-out
  method and use it on Independent Practice 4; prove the Remainder
  Theorem's "why it works" paragraph in full sentences.

## Teacher note

Likely misconceptions: (1) stopping after the first factorization
round — require the "can I factor further?" question after every
round; (2) sign errors when factoring a minus out of a group — the
multiply-back check is the cure, make it mandatory; (3) treating the
Factor Theorem test value as the sign shown (`x + 2` → test `2`
instead of `−2`) — always rewrite `x + 2 = x − (−2)` explicitly.
Example 2's "no integer factor" outcome is intentional: it prevents
the false belief that the theorem always produces a factor, and it
sets up Lesson 05's approximation methods.

Answer key: `../answer-key.md` § Lesson 03.
