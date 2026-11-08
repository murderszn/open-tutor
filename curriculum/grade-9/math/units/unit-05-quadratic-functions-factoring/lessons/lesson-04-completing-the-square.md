# Lesson 04 — Completing the Square, Vertex Form

**Goal:** I can complete the square to write a quadratic in vertex form
and read off its vertex, axis of symmetry, and maximum or minimum value.
**Time:** 50 minutes · **Materials:** notebook, Lesson 03 pattern notes.

## Readiness check (5 min)

Expand `(x + 3)²` and `(x − 4)²`. If you got `x² + 6x + 9` and
`x² − 8x + 16`, you are ready: completing the square runs that expansion
backwards, and the number you add is always half the middle coefficient,
squared.

## Teaching: make a perfect square, keep the balance (15 min)

A quadratic in **standard form**, `f(x) = x² + bx + c`, hides its
highest or lowest point. **Vertex form**,
`f(x) = a(x − h)² + k`, shows it plainly: the vertex is `(h, k)`, the
axis of symmetry is `x = h`, and `k` is the maximum value (if the
parabola opens down) or the minimum value (if it opens up).

**Completing the square** turns standard form into vertex form. For
`x² + bx`, add `(b/2)²` — half the `x`-coefficient, squared — and
subtract the same amount, so the value does not change. The first three
terms then collapse into `(x + b/2)²`. If `a ≠ 1`, factor `a` out of the
`x`-terms first, complete the square inside, and remember that the
number you add inside the parentheses is multiplied by `a` when it
comes out.

The sign of `a` decides max vs. min: `a > 0` opens up, so the vertex is
the lowest point; `a < 0` opens down, so the vertex is the highest
point. This is the same vertex you found from the zeros in Lesson 03 —
now you can find it even when the quadratic does not factor nicely.

### Worked example 1 — complete the square, `a = 1`

> Write `f(x) = x² + 6x + 5` in vertex form. Name the vertex, the axis
> of symmetry, and the minimum value.

1. Half of 6 is 3; `3² = 9`. Add and subtract 9:
   `f(x) = x² + 6x + 9 − 9 + 5`.
2. The first three terms are a perfect square:
   `f(x) = (x + 3)² − 4`.
3. Vertex form is `f(x) = (x + 3)² − 4`, so `h = −3` and `k = −4`.
   The vertex is `(−3, −4)`, the axis of symmetry is `x = −3`, and
   since `a = 1 > 0`, the minimum value is `−4`, reached at `x = −3`.
4. **Check by expanding:** `(x + 3)² − 4 = x² + 6x + 9 − 4
   = x² + 6x + 5`. ✓

### Worked example 2 — a negative middle term

> Write `f(x) = x² − 8x + 12` in vertex form.

1. Half of −8 is −4; `(−4)² = 16`. Add and subtract 16:
   `f(x) = x² − 8x + 16 − 16 + 12 = (x − 4)² − 4`.
2. The vertex is `(4, −4)`, the axis of symmetry is `x = 4`, and the
   minimum value is `−4` at `x = 4`.
3. **Check:** `(x − 4)² − 4 = x² − 8x + 16 − 4 = x² − 8x + 12`. ✓
   Notice the vertex form says `(x − 4)`, not `(x + 4)` — the sign
   inside the parentheses is the opposite of the vertex's x-coordinate.

### Worked example 3 — `a ≠ 1`

> Write `f(x) = 2x² + 12x + 7` in vertex form.

1. Factor 2 out of the `x`-terms: `f(x) = 2(x² + 6x) + 7`.
2. Inside the parentheses, half of 6 is 3; `3² = 9`. Add and subtract
   9 inside: `f(x) = 2(x² + 6x + 9 − 9) + 7 = 2(x + 3)² − 18 + 7`.
3. `f(x) = 2(x + 3)² − 11`. The vertex is `(−3, −11)`, the axis is
   `x = −3`, and the minimum value is `−11` at `x = −3`.
4. **Check:** `2(x + 3)² − 11 = 2x² + 12x + 18 − 11 = 2x² + 12x + 7`. ✓

## Guided practice (10 min, with hints)

1. Write `f(x) = x² + 10x + 21` in vertex form and name the vertex.
   *Hint: half of 10 is 5.*
2. Write `f(x) = x² − 2x − 8` in vertex form and name the vertex.
   *Hint: half of −2 is −1.*
3. Write `f(x) = 3x² − 18x + 20` in vertex form. *Hint: factor 3 out of
   the `x`-terms first; the 9 you add inside becomes 27 outside.*

## Independent practice (10 min)

1. Write `f(x) = x² + 4x + 1` in vertex form; give the vertex and the
   minimum value.
2. Write `f(x) = x² − 12x + 27` in vertex form; give the vertex and the
   minimum value.
3. Write `f(x) = 2x² − 8x + 3` in vertex form; give the vertex and the
   minimum value.
4. Write `f(x) = −x² + 6x − 5` in vertex form; give the vertex and the
   **maximum** value.
5. In one or two sentences, explain why completing the square on
   `x² + 6x` means adding 9 — and why you must also subtract 9.

## Application (5 min)

A garden's area is modeled by `A(x) = −2x² + 48x` square feet, where
`x` is the width in feet. Complete the square to write `A` in vertex
form, then state the width that gives the greatest area and what that
greatest area is. (You will meet this garden again in the project.)

## Exit check (5 min)

Write `f(x) = x² + 14x + 40` in vertex form and name the vertex.

## Supports, extension, teacher note

- **Reading/language access:** keep the rule "half the middle
  coefficient, squared" on the board; say "add and subtract the same
  number, so the value stays the same" every time.
- **Alternate response mode:** a learner may use algebra tiles or a
  drawn square to show why `(b/2)²` completes the square before
  writing symbols.
- **Extension:** write `f(x) = x² + 5x + 3` in vertex form (answer:
  `(x + 5/2)² − 13/4`; vertex `(−5/2, −13/4)`) and explain why the
  vertex can have fractional coordinates even when the coefficients
  are whole numbers.
- **Teacher note — misconception:** learners often add `(b/2)²` but
  forget to subtract it, or forget that the added number inside
  parentheses is multiplied by `a` when `a ≠ 1`. The expand-back check
  catches both. **Answer key:** `answer-key.md`, Lesson 04.
