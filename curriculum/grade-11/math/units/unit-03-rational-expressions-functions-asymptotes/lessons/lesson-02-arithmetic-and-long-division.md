# Lesson 02 — Adding, Subtracting, Multiplying, Dividing, and Rewriting by Long Division

**Goal (learner hears):** "I can add, subtract, multiply, and divide
rational expressions, and rewrite an improper rational expression as
a quotient plus a remainder over the divisor."
**Time:** ~50 minutes · **Materials:** paper, pencil, Lesson 01 notes.
**Standards:** A-APR.6, A-APR.7 (+).

## Readiness check (5 min)

Add 1/6 + 1/4 using a common denominator, and divide (x^2 + 3x + 5)
by (x + 1) by polynomial long division — or say which step you are
unsure of. (1/6 + 1/4 = 5/12. The division gives quotient `x + 2`,
remainder 3; the division algorithm is re-taught below, so a shaky
first attempt is expected, not a failure.)

## Explicit teaching

Rational expressions follow the number-fraction rules, with one
addition: **factor first, and state restrictions at every step.**
A sum or product is only defined where every factor in it is defined.

- **Multiply:** factor each numerator and denominator, cancel common
  factors, then multiply what remains. Restrictions: every original
  denominator's zeros, plus — for division — the numerator of the
  divisor (because you will flip it into a denominator).
- **Add/subtract:** find a common denominator (usually the least
  common multiple of the factored denominators), rewrite each
  fraction over it, then add/subtract numerators and keep the
  denominator. Then simplify, keeping the original restrictions.
- **Divide:** flip the second fraction and multiply. The flipped
  numerator's zeros become new restrictions.
- **Rewrite by division (A-APR.6):** for `a(x)/b(x)`, polynomial long
  division gives `a(x)/b(x) = q(x) + r(x)/b(x)`, where the degree of
  `r(x)` is less than the degree of `b(x)`. Check by multiplying
  back: `b(x) * q(x) + r(x)` must equal `a(x)`. This form is not a
  party trick — in Lesson 04, `q(x)` is the slant asymptote when the
  numerator's degree is exactly one more than the denominator's.

### Modeled example 1 — addition with unlike denominators

Compute `1/(x + 1) + 2/(x - 2)`, and state the domain.

*Step 1 — restrictions.* Denominators give `x ≠ -1, 2`.

*Step 2 — common denominator.* The denominators share no factor, so
the common denominator is `(x + 1)(x - 2)`. Rewrite:

`1/(x + 1) = (x - 2)/((x + 1)(x - 2))` and
`2/(x - 2) = (2x + 2)/((x + 1)(x - 2))`.

*Step 3 — add numerators.*

`(x - 2 + 2x + 2) / ((x + 1)(x - 2)) = 3x / ((x + 1)(x - 2))`.

*Step 4 — simplify?* Numerator `3x` shares no factor with the
denominator, so this is lowest terms. Answer: `3x/((x + 1)(x - 2))`,
`x ≠ -1, 2`.

*Check:* at `x = 0`: original `1/1 + 2/(-2) = 1 - 1 = 0`; answer
`0/((1)(-2)) = 0`. Match.

### Modeled example 2 — division rewritten by long division

Rewrite `(x^2 + 3x + 5)/(x + 1)` as `q(x) + r(x)/(x + 1)`, and verify
by multiplying back.

*Long division, in words:* How many times does `x + 1` go into
`x^2 + 3x + 5`? `x^2 / x = x`. Multiply: `x(x + 1) = x^2 + x`.
Subtract: `(x^2 + 3x) - (x^2 + x) = 2x`; bring down 5: `2x + 5`.
Next: `2x / x = 2`. Multiply: `2(x + 1) = 2x + 2`. Subtract:
`(2x + 5) - (2x + 2) = 3`. The remainder 3 has degree 0, less than
the divisor's degree 1, so stop.

Answer: `x + 2 + 3/(x + 1)`, with `x ≠ -1`.

*Verify by multiplying back:* `(x + 1)(x + 2) + 3 = x^2 + 3x + 2 + 3
= x^2 + 3x + 5`. Correct. If your multiplication-back does not
reproduce the original numerator, the division is wrong — that check
is mandatory, not optional.

A second division, done compactly for reference: `(2x^2 - 3x +
1)/(x - 2) = 2x + 1 + 3/(x - 2)`, `x ≠ 2`, because
`(x - 2)(2x + 1) + 3 = 2x^2 - 3x - 2 + 3 = 2x^2 - 3x + 1`.

## Guided practice (adult and learner together; 5 tasks)

1. Multiply and simplify: `(x^2 - 4)/(x + 3) * (x + 3)/(x - 2)`.
   (`x + 2`, `x ≠ -3, 2`. The factor `(x + 3)` cancels, but `x ≠ -3`
   stays.)
2. Divide and simplify: `(x^2 - 9)/(x + 1) ÷ (x - 3)/(x + 1)`.
   (Flip: `(x^2 - 9)/(x + 1) * (x + 1)/(x - 3) = x + 3`,
   `x ≠ -1, 3`. Note `x ≠ -1` survives even though `(x + 1)`
   cancels, and `x ≠ 3` comes from the divisor's numerator.)
3. Subtract: `3/(x - 1) - 2/(x + 1)`. (`(x + 5)/((x - 1)(x + 1))`,
   `x ≠ 1, -1`. Check: `3(x + 1) - 2(x - 1) = x + 5`.)
4. Rewrite by division: `(x^2 - 5x + 8)/(x - 3)`.
   (`x - 2 + 2/(x - 3)`, `x ≠ 3`; check: `(x - 3)(x - 2) + 2 =
   x^2 - 5x + 8`.)
5. Explain why dividing by `(x - 2)/(x + 1)` adds the restriction
   `x ≠ 2` even though 2 is not a denominator zero of the dividend.
   (Flipping turns the divisor's numerator into a denominator.)

## Independent practice (learner tries; adult reviews same day; 6 tasks)

1. Add: `2/(x + 2) + 1/(x - 1)`.
2. Subtract: `5/(x + 3) - 1/(x - 3)`.
3. Multiply and simplify: `(x^2 + 2x)/(x^2 - 9) * (x - 3)/(x + 2)`.
4. Divide and simplify: `(x^2 - 4x + 4)/(x + 2) ÷ (x - 2)/(x + 2)`.
5. Rewrite by division: `(3x^2 + 5x - 2)/(x + 2)`, and verify by
   multiplying back.
6. Error analysis: a classmate wrote `1/x + 1/(x + 1) = 2/(2x + 1)`.
   Find the error, and give the correct sum with its domain.
   (Error: numerators were added and denominators were added —
   fractions do not work that way. Correct: `(2x + 1)/(x(x + 1))`,
   `x ≠ 0, -1`.)

## Application

Two pipes fill a tank. Pipe A alone fills it in `x` hours, pipe B
alone in `x + 3` hours. Write the fraction of the tank filled per
hour when both run together, as a single simplified rational
expression, and state the domain in context. (Rates add:
`1/x + 1/(x + 3) = (2x + 3)/(x(x + 3))` per hour, `x > 0` in
context — and algebraically `x ≠ 0, -3`. Lesson 05 returns to this
rate model as an equation.)

## Exit check

1. Compute `1/(x - 1) + 1/(x + 1)` in lowest terms with domain.
   (`2x/(x^2 - 1)`, `x ≠ 1, -1`.)
2. Rewrite `(x^2 + x - 6)/(x + 2)` by division and check it.
   (`x - 1 + (-4)/(x + 2)`, i.e. `x - 1 - 4/(x + 2)`, `x ≠ -2`;
   check: `(x + 2)(x - 1) - 4 = x^2 + x - 6`.)
3. True or false: "When I divide rational expressions, I only need
   the restrictions from the two denominators." (False — the
   divisor's numerator becomes a denominator when flipped.)

## Supports and extension

- **Reading access:** write every add/subtract step as "over the
  common denominator" in words before writing symbols; keep the
  Lesson 01 factor bank visible.
- **Alternate response mode:** a learner may verify a division by
  multiplying back in a table (quotient × divisor, plus remainder)
  rather than in a single line.
- **Extension:** compute `(1/(x - 1) - 1/(x + 1)) ÷ (2/(x^2 - 1))`
  and simplify fully with restrictions. (Answer: 1, for `x ≠ 1, -1`.
  The subtraction gives `2/(x^2 - 1)`; dividing by itself gives 1
  wherever both are defined — a good test of whether restrictions
  were tracked through two operations.)

## Teacher note — likely misconceptions

- *Adding denominators:* the classic `1/a + 1/b = 2/(a + b)` error.
  Number counterexample first: 1/2 + 1/3 is 5/6, not 2/5.
- *Forgetting the flipped restriction in division:* require the
  student to list restrictions from all four polynomials (two
  denominators, divisor's numerator) before simplifying.
- *Division without the multiply-back check:* treat an unchecked
  long division as unfinished work, the way an unchecked rational
  equation is unfinished in Lesson 05.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-02).
