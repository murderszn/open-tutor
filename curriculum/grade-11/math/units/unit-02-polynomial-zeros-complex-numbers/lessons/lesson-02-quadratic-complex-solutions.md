# Lesson 02 — Every Quadratic Has Its Two Solutions

**Unit 02 · Session S3 · ~50 minutes**
**Standards:** N-CN.2, N-CN.3 (+) (enrichment), N-CN.8 (+) (enrichment),
A-REI.4.b

## Student goal

By the end of this lesson I can solve any quadratic equation — by
factoring, completing the square, or the quadratic formula — and write
nonreal solutions in `a ± bi` form; I can find conjugates and use them
to divide complex numbers (enrichment).

## Materials

Notebook, pencil. Calculator optional.

## Readiness check (5 min)

1. Solve `x² + 4x + 13 = 0` by completing the square. Where does the
   method get stuck over the real numbers?
2. Compute `(3 + 2i) + (3 − 2i)` and `(3 + 2i)(3 − 2i)`. What pattern
   do you see?

(Adult: question 1's sticking point — a negative under the square
root — is the lesson's launch. Question 2 previews conjugates; if the
products confuse, redo Lesson 01 Example 3.)

## Explicit teaching

**Completing the square hits the wall — and `i` walks through it.**
Take `x² + 4x + 13 = 0`:

`x² + 4x + 13 = 0`
`(x + 2)² − 4 + 13 = 0`
`(x + 2)² = −9`

Over the reals this is the end: no real square is −9. With `i`, keep
going: `x + 2 = ±√(−9) = ±3i`, so `x = −2 ± 3i`. The method never
changed — the number system grew to hold the answer. **Verify by
substitution** (a habit from Unit 01's justification work): plug `x =
−2 + 3i` back in and confirm both sides balance.

**The quadratic formula with complex solutions.** The discriminant
`b² − 4ac` tells the story before you finish:

- Positive: two distinct real solutions.
- Zero: one repeated real solution.
- **Negative: two nonreal solutions, written `a ± bi`.**

Example: `x² − 6x + 25 = 0` gives `x = (6 ± √(36 − 100)) / 2 = (6 ±
√(−64)) / 2 = (6 ± 8i) / 2 = 3 ± 4i`. Split the fraction across both
parts — a common error is to divide only the real part.

**Conjugates: the mirror.** The **conjugate** of `a + bi` is `a −
bi` — same real part, opposite imaginary part. Conjugates multiply to
a real number:

`(a + bi)(a − bi) = a² − abi + abi − b²i² = a² + b²`.

So `(3 + 4i)(3 − 4i) = 9 + 16 = 25`. The conjugate "erases" the
imaginary part — this is the tool that makes division possible.

**Dividing (enrichment): multiply by the conjugate.** Standard form
allows no `i` in the denominator, so clear it with the conjugate:

`(3 − i) / (2 + 7i) = ((3 − i)(2 − 7i)) / ((2 + 7i)(2 − 7i))`
`= (6 − 21i − 2i + 7i²) / (4 + 49)`
`= (−1 − 23i) / 53 = −1/53 − (23/53)i`.

The denominator becomes `a² + b²`, always real and positive. The final
split into real and imaginary parts is what "standard form" demands.

**Identities extend (enrichment).** Polynomial identities you know —
like `x² + 4` being unfactorable over the reals — factor completely
over the complex numbers: `x² + 4 = (x + 2i)(x − 2i)`. Nothing about
the algebra changed; the number system caught up.

## Worked examples (modeled reasoning)

**Example 1 — Quadratic formula with a negative discriminant.**

Solve `2x² + 8x + 17 = 0`. Write solutions in `a ± bi` form and verify
one by substitution.

*Reasoning.* `a = 2, b = 8, c = 17`. Discriminant: `64 − 4(2)(17) =
64 − 136 = −72`. Negative — expect nonreal solutions.

`x = (−8 ± √(−72)) / 4 = (−8 ± √(72)·i) / 4`.

`√72 = √(36·2) = 6√2`, so `x = (−8 ± 6√2 i) / 4 = −2 ± (3√2/2)i`.

Verify `x = −2 + (3√2/2)i`: rather than expand the full square by
hand twice, note that any root of `2x² + 8x + 17 = 0` must satisfy the
equation — substitute into a calculator-friendly check or expand:
`(−2)² = 4` term by term is tedious; the structural check is that the
discriminant logic forced this form. (Full verification appears in the
answer key; the habit to build is *attempting* the check, then
comparing with the key.)

**Example 2 — Factoring reveals the complex pair directly.**

Solve `x³ + x = 0` completely over the complex numbers.

*Reasoning.* Factor first: `x(x² + 1) = 0`. So `x = 0` or `x² + 1 =
0`. The quadratic gives `x = ±√(−1) = ±i`. All three solutions: `0,
i, −i`. This is the pattern Lesson 04 exploits: complex zeros come in
conjugate pairs `±i`, and every cubic has three zeros counting them.

**Example 3 — Division via the conjugate (enrichment).**

Write `(5 + i) / (1 − 2i)` in standard form.

*Reasoning.* Multiply top and bottom by the conjugate of the
denominator, `1 + 2i`:

`((5 + i)(1 + 2i)) / ((1 − 2i)(1 + 2i)) = (5 + 10i + i + 2i²) / (1 +
4) = (3 + 11i) / 5 = 3/5 + (11/5)i`.

The denominator `1² + 2² = 5` is the shortcut: `(a + bi)(a − bi) =
a² + b²`, no FOIL needed once you trust it.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. Solve `x² + 2x + 5 = 0` by completing the square. [Expect a
   negative under the radical — convert to `bi` form and keep
   going.]
2. Use the quadratic formula on `x² − 4x + 8 = 0`. [Split the
   fraction across *both* parts of `a ± bi`.]
3. What does the discriminant of `3x² − 12x + 15 = 0` tell you before
   you solve? Then solve it. [Compute `b² − 4ac` first; predict,
   then verify.]
4. Write the conjugate of each: `4 − 7i`, `−2 + i`, `9i`, `6`.
   [The conjugate of a real number is itself.]
5. (Enrichment) Divide `(2 + 3i) / (4 − i)`. [Multiply by the
   conjugate of the denominator; denominator becomes `4² + 1²`.]

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Solve `x² + 6x + 25 = 0`. Verify one solution by substitution.
2. Solve `4x² − 4x + 5 = 0`. Write the solutions in lowest `a ± bi`
   form.
3. For each equation, use the discriminant to predict the solution
   type, then solve: (a) `x² − 10x + 29 = 0`; (b) `x² + 8x + 16 = 0`.
4. Solve `x³ − 4x = 0` completely over the complex numbers.
5. Compute `(6 + i)(6 − i)` two ways: by FOIL and by the `a² + b²`
   shortcut. Confirm they agree.
6. (Enrichment) Write `8i / (1 + 2i)` in standard form.
7. (Enrichment) Factor `x² + 9` completely over the complex numbers
   and multiply back to check.
8. **Explain your reasoning:** A classmate says "the discriminant was
   negative, so there is no solution." Write three sentences
   correcting them, using one solved example as evidence.

## Application

The height (meters) of a model rocket `t` seconds after launch is
`h(t) = −5t² + 30t + 2`. Solve `h(t) = 0` and interpret both
solutions. Then solve `−5t² + 30t − 60 = 0` — the discriminant is
negative, so the solutions are genuinely complex. Compute them and
explain in one sentence why they have no physical meaning for the
launch, even though the algebra is valid. (Unit check: are your
answers in seconds?)

## Exit check

Write the conjugate of `−3 + 8i` and explain in your own words why
multiplying a complex number by its conjugate always gives a real
number.

## Supports and extension

- **Reading access:** vocabulary cards for *conjugate, discriminant,
  standard form*; the adult reads Example 1's reasoning aloud.
- **Alternate response mode:** the learner may verify solutions with
  a calculator's complex mode instead of hand substitution after one
  hand verification; division steps may be color-coded.
- **Extension:** prove that for any complex `z`, `z · z̄ = |z|²`
  where `z̄` is the conjugate (the modulus); plot `3 + 4i` and its
  conjugate on the complex plane and describe the geometric
  relationship.

## Teacher note

Likely misconceptions: (1) dividing only the real part by the
denominator in the quadratic formula — require the split fraction to
be written; (2) "negative discriminant means no solution" — the whole
point of the unit is that the number system expanded; (3) treating the
conjugate as "the opposite" (`−a − bi`) rather than the mirror (`a −
bi`). The application question's second half is deliberately
philosophical: valid algebra, no physical meaning — this distinction
matters for modeling in Lesson 05.

Answer key: `../answer-key.md` § Lesson 02.
