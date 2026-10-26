# Lesson 01 — The Invented Number: Complex Numbers

**Unit 02 · Session S1 · ~50 minutes**
**Standards:** N-CN.1, N-CN.2

## Student goal

By the end of this lesson I can explain why mathematicians invented the
number `i`; I can write any complex number in `a + bi` form; and I can
add, subtract, and multiply complex numbers using the one new rule,
`i² = −1`.

## Materials

Notebook, pencil. Calculator optional.

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

1. Solve `x² = 25` and `x² = −25`. Which one has a real answer? Why?
2. Simplify `(2x + 3) + (4x − 7)` and `(2x + 3)(x − 1)`. What rules did
   you use?

(Adult: if question 1's second half stalls, that is exactly the
lesson's opening — proceed; the lesson re-teaches it. If question 2 is
insecure, spend 10 minutes on combining like terms and FOIL first:
complex arithmetic is polynomial arithmetic with one extra rule.)

## Explicit teaching

**The gap.** `x² = 25` has the solutions `x = 5` and `x = −5`. But `x²
= −25` has no real solution, because no real number squared is
negative. In Unit 01 you learned to respect domain restrictions; here
mathematicians made the opposite choice. Rather than leave the gap,
they *invented* a number to fill it.

**The invention.** Define

`i = √(−1)`, which means `i² = −1`.

That is the whole invention — one new fact. Everything else about
complex numbers is ordinary arithmetic plus this fact. The name
"imaginary" is historical baggage: `i` is no more imaginary than a
negative number, which was once considered just as suspicious. Think of
it as a number the real line was too narrow to hold.

**The standard form.** A **complex number** is any number you can write
as

`a + bi`, where `a` and `b` are real numbers.

- `a` is the **real part**; `b` is the **imaginary part**.
- If `b = 0` you get an ordinary real number (`5 + 0i = 5`). The real
  numbers are a *subset* of the complex numbers.
- If `a = 0` you get a **pure imaginary** number like `3i`.

So `3 + 5i`, `√6 − 10i`, `16i`, and `113` are all complex numbers.
Before doing arithmetic, put square roots of negatives into this form:
`√(−9) = √(9 · −1) = 3√(−1) = 3i`. Convert first, compute second —
this one habit prevents most errors.

**Adding and subtracting: collect like terms.** Treat `i` like a
variable and combine like terms:

`(2 + 3i) + (4 − 7i) = (2 + 4) + (3 − 7)i = 6 − 4i`

Subtraction distributes the minus sign exactly as with polynomials:

`(5 + 2i) − (1 + 6i) = 5 + 2i − 1 − 6i = 4 − 4i`

**Multiplying: FOIL, then apply `i² = −1`.** Multiply complex numbers
exactly as you multiply binomials, then replace every `i²` with `−1`:

`(2 + 3i)(1 − i) = 2 − 2i + 3i − 3i² = 2 + i − 3(−1) = 5 + i`

Watch the sign: `−3i² = −3(−1) = +3`. The most common error in this
lesson is forgetting the final replacement step and leaving `i²` in
the answer. Standard form has no `i²`, no `i³`, no radicals of
negatives — apply `i² = −1` until only `i` to the first power remains.

**Powers of `i` cycle.** Because `i² = −1`:

`i¹ = i`, `i² = −1`, `i³ = i² · i = −i`, `i⁴ = (i²)² = 1`, then the
pattern repeats every four powers: `i⁵ = i`, `i⁶ = −1`, and so on.
To simplify `iⁿ`, divide `n` by 4 and keep the remainder: `i²³ =
i²⁰ · i³ = 1 · (−i) = −i`.

## Worked examples (modeled reasoning)

**Example 1 — Adding, subtracting, and the convert-first habit.**

Compute `(4 − √(−36)) + (1 + √(−25))` in standard form.

*Reasoning.* The radicals of negatives must become complex numbers
*before* any arithmetic — this is the rule of thumb that prevents the
classic trap (multiplying two negative radicands under one root).

`√(−36) = 6i` and `√(−25) = 5i`.

`(4 − 6i) + (1 + 5i) = (4 + 1) + (−6 + 5)i = 5 − i`.

Check: the real parts combine (4 + 1), the imaginary parts combine
(−6 + 5). Nothing else to do — no `i²` appeared, so the answer is
already in standard form.

**Example 2 — Multiplying with the `i²` replacement.**

Compute `(3 + 2i)(4 − 5i)` and verify by checking each step.

*Reasoning.* FOIL first:

`(3 + 2i)(4 − 5i) = 12 − 15i + 8i − 10i² = 12 − 7i − 10i²`.

Now the replacement step — the one that is easy to skip:

`−10i² = −10(−1) = +10`.

So `12 − 7i + 10 = 22 − 7i`. Standard form has no `i²`: confirmed.

A quick sanity check on size: the real part came out positive and
large, the imaginary part moderate — nothing here contradicts the
arithmetic. When you are unsure, expand again slowly; most errors are
sign errors on the `−10i²` term.

**Example 3 — A power of `i` and a product that turns real.**

Simplify `i¹⁷` and compute `(2 − i)(2 + i)`.

*Reasoning.* `17 ÷ 4 = 4` remainder `1`, so `i¹⁷ = i`. (Or: `i¹⁶ =
(i⁴)⁴ = 1⁴ = 1`, so `i¹⁷ = i¹⁶ · i = i`.)

`(2 − i)(2 + i) = 4 + 2i − 2i − i² = 4 − (−1) = 5`.

A product of complex numbers can be real — don't be alarmed when it
happens. Notice the middle terms canceled: `(2 − i)(2 + i) = 2² +
1² = 5`. This pattern (a number times its "mirror") returns in Lesson
02 with a name: the conjugate.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. Write each in standard `a + bi` form: `√(−49)`, `7 − √(−16)`.
   [Convert the radical first: `√(−49) = 7i`.]
2. Add: `(−3 + 4i) + (8 − 2i)`. [Real with real, imaginary with
   imaginary.]
3. Subtract: `(6 − i) − (−2 + 5i)`. [Distribute the minus to both
   terms of the second number.]
4. Multiply: `(1 + 4i)(2 − 3i)`. Show the FOIL and the `i²`
   replacement as separate lines. [Expect the answer in standard
   form with no `i²` left.]
5. Simplify `i³⁰`. [Divide the exponent by 4; keep the remainder.]

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Write `−5 + √(−81)` in standard form.
2. Compute `(3 − 2i) + (−3 + 2i)`. What do you notice about the
   answer?
3. Compute `(10 + i) − (4 + 9i)`.
4. Compute `3i(2 − 5i)`. (Distribute, then replace `i²`.)
5. Compute `(5 − 2i)²`. (Treat it as `(5 − 2i)(5 − 2i)`.)
6. Simplify `i¹⁰³`.
7. Find two complex numbers whose product is the real number 25.
   (Hint: use the mirror pattern from Example 3.)
8. **Error analysis:** A classmate computed `(2 + i)(3 − 2i)` and got
   `6 − 4i + 3i − 2i² = 6 − i − 2i²`, then stopped. Finish the problem
   correctly and name the step that was skipped.

## Application

A square garden has side length `x` meters. A designer extends two
adjacent sides by `2i` meters and `3i` meters (this is a thought
experiment — lengths stay real in the real world; the algebra is what
matters). Expand `(x + 2i)(x + 3i)` into standard form `a + bi` and
explain what the real part and the imaginary part each represent in
terms of `x`.

## Exit check

In your own words: what does `i² = −1` let mathematicians do that the
real numbers alone cannot? Give one example of a multiplication where
forgetting the final replacement step would leave a wrong answer.

## Supports and extension

- **Reading access:** the adult reads the worked-example reasoning
  aloud on request; keep a vocabulary card for *imaginary unit,
  standard form, real part, imaginary part, pure imaginary*.
- **Alternate response mode:** color-code real parts (blue) and
  imaginary parts (red) through every computation; the adult accepts a
  verbal walk-through of one multiplication in place of writing it.
- **Extension:** plot complex numbers on the complex plane (real part
  on the horizontal axis, imaginary part on the vertical axis);
  describe geometrically what adding `3 + 2i` does to a point. (This
  geometry returns in the Lesson 04 enrichment.)

## Teacher note

Likely misconceptions: (1) treating `i` as a variable and "solving for
it" — `i` is a fixed number, `√(−1)`; (2) stopping after FOIL and
leaving `i²` in the answer — require the replacement line to be
written explicitly; (3) the belief that a real product of two complex
numbers signals an error — normalize it early (Example 3). If
readiness check 2 is insecure, the whole lesson becomes polynomial
review with a new symbol; fix the polynomials first.

Answer key: `../answer-key.md` § Lesson 01.
