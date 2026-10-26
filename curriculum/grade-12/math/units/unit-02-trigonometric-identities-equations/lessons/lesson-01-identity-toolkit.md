# Lesson 01 — The Identity Toolkit: Pythagorean, Cofunction, Even/Odd

**Goal:** You will prove the toolkit identities from the unit circle and
use them to simplify expressions and find exact values, justifying every
step. **Time:** ~50 minutes. **Materials:** unit-circle diagram (text
table in the unit README), paper, Desmos for checking only.

## Readiness check

1. On the unit circle, what are `sin θ` and `cos θ` in terms of a point
   `(x, y)`? (Answer in the key: `cos θ = x`, `sin θ = y`.)
2. What is `sin²θ + cos²θ` for any angle? Why?
3. Evaluate `sin 210°` from the reference angle, with its sign explained.

## Teaching

An **identity** is an equation that is true for every angle in the
domain of both sides. That is stronger than an ordinary equation: `sin x
= 1/2` is true only for some `x`, but `sin²x + cos²x = 1` is true for
every `x`. Identities are tools for rewriting, and rewriting is how
hard problems become easy ones.

**The Pythagorean identity.** Take any angle `θ`. Its unit-circle point
is `(cos θ, sin θ)`, and because the circle has radius 1, the point
satisfies `x² + y² = 1`. Substituting gives `cos²θ + sin²θ = 1`, usually
written `sin²θ + cos²θ = 1`. Divide both sides by `cos²θ` (where
`cos θ ≠ 0`) and you get `tan²θ + 1 = sec²θ`; divide by `sin²θ` (where
`sin θ ≠ 0`) and you get `1 + cot²θ = csc²θ`. These are not three facts
to memorize separately — they are one fact divided two ways.

**Reciprocal and quotient identities** come straight from the
definitions: `csc θ = 1/sin θ`, `sec θ = 1/cos θ`, `cot θ = 1/tan θ`,
and `tan θ = sin θ/cos θ`, `cot θ = cos θ/sin θ`.

**Even and odd identities** come from reflecting the unit circle across
the x-axis: the angle `−θ` lands at `(cos θ, −sin θ)`. So `cos(−θ) =
cos θ` (cosine is **even**: it ignores the minus sign) while
`sin(−θ) = −sin θ` and `tan(−θ) = −tan θ` (sine and tangent are
**odd**: the minus sign comes out).

**Cofunction identities** come from complementary angles in a right
triangle: the two acute angles add to 90°, and the sine of one is the
cosine of the other. In radians: `sin(π/2 − θ) = cos θ` and
`cos(π/2 − θ) = sin θ`. The "co-" in cosine literally means "the sine of
the complement."

A proof habit to adopt now: **work on one side only** (usually the more
complicated side) until it becomes the other side, and write the reason
for each step — definition, Pythagorean identity, factoring, or a
previous identity. Never multiply both sides by something, and never
treat the identity you are proving as if it were already true.

### Worked example 1 — Find values from one value and a quadrant

Given `sin θ = 3/5` with `θ` in Quadrant II, find `cos θ` and `tan θ`.

From the Pythagorean identity: `cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25`,
so `cos θ = 4/5` or `cos θ = −4/5`. The quadrant decides: cosine is
negative in Quadrant II, so `cos θ = −4/5`. Then `tan θ = sin θ/cos θ
= (3/5)/(−4/5) = −3/4`. The quadrant, not the algebra, picks the sign —
forgetting that step is the most common error in this lesson.

### Worked example 2 — Simplify with a reason per step

Simplify `(1 − cos²θ)/sin θ`, stating the domain restriction.

Step 1: `1 − cos²θ = sin²θ` by the Pythagorean identity (rearranged).
So the expression is `sin²θ/sin θ`. Step 2: `sin²θ/sin θ = sin θ`,
dividing numerator and denominator by `sin θ`, valid only when
`sin θ ≠ 0`. Final answer: `sin θ`, for `sin θ ≠ 0` (that is,
`θ ≠ kπ` for any integer `k`). Dropping the restriction would claim the
original expression is defined at `θ = 0`, where it is `0/0` — a real
error, not a formality.

### Worked example 3 — Verify an identity

Verify `sec θ − cos θ = sin θ tan θ` for all `θ` where both sides are
defined.

Work on the left side only. By the reciprocal identity, `sec θ =
1/cos θ`, so the left side is `1/cos θ − cos θ`. Put it over the common
denominator `cos θ`: `(1 − cos²θ)/cos θ`. By the Pythagorean identity,
`1 − cos²θ = sin²θ`, giving `sin²θ/cos θ`. Split it as
`sin θ · (sin θ/cos θ)`, and by the quotient identity that is
`sin θ tan θ` — the right side. Every step has a reason, and the
identity is proved.

## Guided practice (with hints)

1. Given `sin θ = −5/13` with `θ` in Quadrant III, find `cos θ` and
   `tan θ`. (Hint: find `cos²θ` first; which sign does Quadrant III
   give cosine?)
2. Simplify `(tan θ)(cot θ)`, stating any restriction. (Hint: write both
   as sine/cosine ratios.)
3. Verify `cos θ/(1 + sin θ) + (1 + sin θ)/cos θ = 2 sec θ`. (Hint: the
   common denominator is `cos θ(1 + sin θ)`; the numerator becomes
   `cos²θ + (1 + sin θ)²` — expand and use the Pythagorean identity.)

## Independent practice

1. Prove `1 + tan²θ = sec²θ` starting from `sin²θ + cos²θ = 1`. State
   where the proof requires `cos θ ≠ 0`.
2. Simplify `csc²θ − cot²θ`. Then simplify `sin θ · csc θ`.
3. Use a cofunction identity to write `cos 20°` as a sine, and evaluate
   `sin 225°` exactly with reference-angle reasoning.
4. Simplify `(sin θ + cos θ)² + (sin θ − cos θ)²`. (A surprise is fine —
   show the algebra.)
5. **Error analysis.** A learner writes: "`sin θ = 4/5`, so `cos θ =
   3/5`." Explain everything missing from that claim, and give one
   angle where it is false.

## Applied task

A ramp makes an angle `θ` with level ground. The ramp's slope is
`tan θ = 0.4`. Use a cofunction identity to express the angle the ramp
makes with a vertical post, and explain in one sentence why the two
angles are complementary. (You do not need a numeric angle: the
expression `90° − θ`, equivalently `π/2 − θ`, with the reason, is the
answer.)

## Exit check

Simplify `sin²θ + cos²θ + tan²θ` to a single trigonometric function, and
name the identity used in the last step.

## Supports, alternate modes, and extensions

- **Reading/language access:** keep the unit README's exact-value table
  open; say each identity aloud in words ("sine squared plus cosine
  squared equals one") before writing symbols.
- **Alternate response mode:** a learner may give the guided-practice
  answers as a labeled unit-circle sketch (point, signs, ratios) plus a
  one-sentence reason per step, instead of a paragraph proof.
- **Extension:** verify `(1 − sin θ)/cos θ = cos θ/(1 + sin θ)` by
  multiplying numerator and denominator of the left side by
  `(1 + sin θ)` (one-sided reasoning, not cross-multiplication of the
  identity itself).

## Teacher note

Likely misconceptions: (a) dropping the sign choice when taking a square
root — the quadrant is part of the data; (b) "proving" an identity by
starting from it and simplifying both sides to the same thing, which
assumes the conclusion; (c) treating `sin²θ` as `(sin θ)²` correctly but
then writing `sin θ²` for it. Answers: `answer-key.md`, Lesson 01.
