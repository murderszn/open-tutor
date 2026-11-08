# Lesson 03 — Special Forms, and Zeros from Factored Form

**Goal:** I can factor differences of squares and perfect-square
trinomials, factor completely, and read a quadratic's zeros off its
factored form.
**Time:** 50 minutes · **Materials:** notebook, Unit 04 special-products notes.

## Readiness check (5 min)

Multiply `(x + 7)(x − 7)` and `(x + 6)²`. If you got `x² − 49` and
`x² + 12x + 36`, you are ready: today you recognize those two shapes
and run them backwards.

## Teaching: two patterns worth recognizing on sight (15 min)

Two products from Unit 04 come back as factoring patterns. Learn to
spot them before you reach for the ac method:

- **Difference of squares:** `a² − b² = (a − b)(a + b)`. Both terms
  must be perfect squares, joined by a minus sign. A *sum* of squares,
  `a² + b²`, does **not** factor over the integers.
- **Perfect-square trinomial:** `a² + 2ab + b² = (a + b)²` and
  `a² − 2ab + b² = (a − b)²`. Check all three parts: the first term is
  a square, the last term is a square, and the middle term is twice
  the product of their square roots.

"Factor completely" now means: GCF first, then the pattern, then ask
whether any factor can be factored again. A difference of squares can
hide inside a GCF step, and it can appear twice.

Then the payoff. If `f(x) = (x − 2)(x − 3)`, the zeros of `f` — the
`x`-values where `f(x) = 0` — are 2 and 3, because a product is zero
exactly when one of its factors is zero. The factored form hands you
the graph's x-intercepts for free, and the x-intercepts plus the vertex
sketch the whole parabola.

### Worked example 1 — difference of squares

> Factor `x² − 49` and `4x² − 25`.

1. `x² − 49`: both terms are squares (`x²` and `7²`), joined by minus.
   `x² − 49 = (x − 7)(x + 7)`.
2. `4x² − 25`: `4x² = (2x)²` and `25 = 5²`, so
   `4x² − 25 = (2x − 5)(2x + 5)`.
3. **Check:** `(x − 7)(x + 7) = x² − 49` ✓;
   `(2x − 5)(2x + 5) = 4x² − 25` ✓.

### Worked example 2 — perfect-square trinomials

> Factor `x² + 12x + 36` and `9x² − 30x + 25`.

1. `x² + 12x + 36`: first term `x²`, last term `6²`, middle term
   `12x = 2 · x · 6`. All three checks pass:
   `x² + 12x + 36 = (x + 6)²`.
2. `9x² − 30x + 25`: first term `(3x)²`, last term `5²`, middle term
   `30x = 2 · 3x · 5`. The middle term is negative, so
   `9x² − 30x + 25 = (3x − 5)²`.
3. **Check:** `(x + 6)² = x² + 12x + 36` ✓;
   `(3x − 5)² = 9x² − 30x + 25` ✓.

### Worked example 3 — factor completely, then read the zeros

> Factor `2x³ − 32x` completely. Then find the zeros of
> `f(x) = x² − 5x + 6` and sketch its graph from the zeros, the
> y-intercept, and the vertex.

1. GCF first: `2x³ − 32x = 2x(x² − 16)`. Inside the parentheses is a
   difference of squares, so `2x(x − 4)(x + 4)`. Nothing factors
   further. **Check:** `2x(x − 4)(x + 4) = 2x(x² − 16) = 2x³ − 32x`. ✓
2. `f(x) = x² − 5x + 6 = (x − 2)(x − 3)`, so the zeros are `x = 2`
   and `x = 3`: the graph crosses the x-axis at `(2, 0)` and `(3, 0)`.
3. The y-intercept is `f(0) = 6`, the point `(0, 6)`.
4. The axis of symmetry is halfway between the zeros: `x = 2.5`.
   The vertex is `(2.5, f(2.5)) = (2.5, −0.25)`, since
   `2.5² − 5(2.5) + 6 = 6.25 − 12.5 + 6 = −0.25`.
5. Sketch: a upward-opening parabola through `(0, 6)`, `(2, 0)`,
   `(2.5, −0.25)`, and `(3, 0)`, symmetric about `x = 2.5`.

## Guided practice (10 min, with hints)

1. Factor `16x² − 9`. *Hint: write each term as a square first.*
2. Factor `x² − 14x + 49`. *Hint: check the middle term against `2 · x · 7`.*
3. Factor `3x² − 27` completely. *Hint: GCF first — the pattern is hiding.*

## Independent practice (10 min)

1. Factor `25x² − 1`.
2. Factor `x² + 18x + 81`.
3. Factor `5x² − 45` completely.
4. For `f(x) = x² + 3x − 10`: factor it, state its zeros, give the
   y-intercept, and find the vertex.
5. In one or two sentences, explain why `x² + 16` cannot be factored
   over the integers, while `x² − 16` can.

## Application (5 min)

The function `f(x) = x² − 7x + 12` models a quantity that is zero at
two moments. Factor it, name the two zeros, and explain in one
sentence what the points `(3, 0)` and `(4, 0)` mean on the graph of `f`.

## Exit check (5 min)

Factor `8x² − 50` completely, showing the GCF step and the pattern step.

## Supports, extension, teacher note

- **Reading/language access:** keep the two pattern boxes on the
  board; say "square minus square" and "square, twice the product,
  square" as memory hooks.
- **Alternate response mode:** a learner may sort expressions into
  "difference of squares / perfect-square trinomial / neither" by
  pointing before factoring any of them.
- **Extension:** factor `x⁴ − 81` completely (answer:
  `(x² + 9)(x + 3)(x − 3)`, applying the pattern twice) and explain why
  `x² + 9` stops the process.
- **Teacher note — misconception:** learners often factor `x² − 16`
  as `(x − 4)²` or try to factor a sum of squares. The multiply-back
  check catches both — `(x − 4)² = x² − 8x + 16`, not `x² − 16`.
  **Answer key:** `answer-key.md`, Lesson 03.
