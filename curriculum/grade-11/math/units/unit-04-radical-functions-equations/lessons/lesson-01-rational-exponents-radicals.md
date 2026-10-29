# Lesson 01 — Rational Exponents Are the Engine of Radicals

**Goal (learner hears):** "I can switch a radical to exponent form
and back, evaluate roots with rational exponents, and simplify a
radical expression — and I can say why a root of a sum is not the
sum of the roots."
**Time:** ~50 minutes · **Materials:** paper, pencil, exponent
properties from the grade-9/10 entry skills (product, power, and
quotient rules).
**Standards:** A-SSE.1.a.

## Readiness check (5 min)

Evaluate: (a) `2^3`, (b) `5^0`, (c) `4^(-1)`, (d) `(x^2)^3`.
(Answers: (a) 8; (b) 1; (c) 1/4; (d) `x^6`.) If exponent rules are
shaky, re-teach them before this lesson — every step below is an
exponent rule with new notation.

## Explicit teaching

A **radical** has three named parts: the **index** (the small number
in the notch), the **radicand** (what sits under the symbol), and the
radical symbol itself. The definition that runs this whole unit:

> `ⁿ√a = a^(1/n)`, for a positive integer index `n` greater than 1.

A square root drops its index by convention: `√a` means `²√a`. That
one definition turns every radical rule into an exponent rule you
already know. Two consequences matter most:

**Even indexes only take nonnegative radicands (in the reals).**
`√16 = 4` — always the positive answer, called the **principal
root**. `√(-16)` has no real value, because no real number squared
gives −16. **Odd indexes take any real radicand:** `∛(-125) = -5`,
because `(−5)^3 = −125`, and there is only one such number, so no
"principal" choice is needed.

**Simplified radical form** has four requirements: every exponent in
the radicand is smaller than the index; no exponent shares a factor
with the index; no fraction sits under the radical; no radical sits
in a denominator. The last requirement is why we **rationalize** a
denominator: multiply top and bottom by the radical so the
denominator becomes rational (for a single term).

And the error this lesson exists to kill: radicals do **not**
distribute over sums. `√(9 + 16) = √25 = 5`, but
`√9 + √16 = 3 + 4 = 7`. The two are not equal, and no amount of
wanting changes that.

### Modeled example 1 — evaluate with rational exponents

Evaluate (a) `16^(3/4)`, (b) `27^(-2/3)`, (c) `∛(-64)`.

*Part (a).* `16^(3/4)` means: take the 4th root, then cube — or cube,
then take the 4th root; the root-first order keeps numbers small.
`16^(1/4) = 2` because `2^4 = 16`. Then `2^3 = 8`. So
`16^(3/4) = 8`.

*Part (b).* The negative exponent means reciprocal:
`27^(-2/3) = 1 / 27^(2/3)`. `27^(1/3) = 3` because `3^3 = 27`;
squared, that is 9. So `27^(-2/3) = 1/9`.

*Part (c).* `∛(-64)`: the index 3 is odd, so a negative radicand is
fine. `(−4)^3 = −64`, so `∛(-64) = -4`. Check: cubing is
one-to-one, so this is the only answer.

### Modeled example 2 — simplify, and rationalize

Simplify (a) `√72`, (b) `∛54`, (c) `√50 + 3√8`, (d) `5/√3`.

*Part (a).* Find the largest perfect square factor of 72: 36.
`√72 = √(36 · 2) = √36 · √2 = 6√2`. The product rule
`√(ab) = √a · √b` is what licenses the split — and it only works
for products, never for sums.

*Part (b).* Largest perfect-cube factor of 54: 27.
`∛54 = ∛(27 · 2) = 3∛2`.

*Part (c).* Simplify each term first: `√50 = 5√2` (since
`50 = 25 · 2`), and `3√8 = 3 · 2√2 = 6√2` (since `8 = 4 · 2`).
Like radicals combine like like terms: `5√2 + 6√2 = 11√2`.

*Part (d).* Multiply top and bottom by `√3`:
`5/√3 = 5√3 / (√3 · √3) = 5√3 / 3`. The denominator is now
rational, and the value is unchanged because we multiplied by
`√3/√3 = 1`.

## Guided practice

Work these with a partner or aloud; hints follow each item.

1. Write the fifth root of `x^2` in exponent form. *(Hint: the index becomes
   the denominator.)*
2. Evaluate `8^(2/3)`. *(Hint: cube root first.)*
3. Simplify `√200`. *(Hint: largest perfect-square factor.)*
4. Simplify `∛(16x^4)` for `x > 0`. *(Hint: 16x^4 = 8x^3 · 2x.)*
5. Explain, with numbers, why `√(16 + 9)` is not `√16 + √9`.

## Independent practice

See [Practice Set A](../practice.md#practice-set-a) (items A1–A8).

## Application

A square garden has area 72 square meters. Its side length is `√72`
meters. Give the exact side length in simplified radical form, then a
decimal approximation, and say which one you would give a builder and
why. (Exact: `6√2` m, about 8.49 m. The builder gets the decimal —
a saw does not cut `√2` — but the exact form is what you keep for
further algebra, because rounding early compounds error.)

## Exit check

Convert `x^(2/5)` to radical form, and evaluate `32^(2/5)`.
(Radical form: `⁵√(x^2)`. Evaluation: `32^(1/5) = 2`, squared is 4.)

## Supports and extension

- **Reading/language access:** say "the fifth root of x squared"
  aloud for `⁵√(x^2)` before writing it; the spoken form prevents
  index/exponent swaps.
- **Alternate response mode:** a learner may answer simplification
  items by stating the perfect-power factor and the leftover factor
  orally instead of writing the full chain.
- **Extension:** prove from exponent rules that `(a^(1/n))^n = a`
  for `a ≥ 0`, and explain why the same argument fails to make
  `√(a + b) = √a + √b` true. (The power rule distributes over
  multiplication, not addition.)

## Teacher note

Likely misconceptions: (1) dropping the index when converting
(the fourth root of 16 read as the square root of 16); (2) taking the negative root as the
principal root (`√16 = ±4` — no: `√16 = 4`; `±` appears only when
*solving* `x^2 = 16`); (3) splitting roots over sums. Reteach: make
the learner say the index aloud on every conversion for a week.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-01).
