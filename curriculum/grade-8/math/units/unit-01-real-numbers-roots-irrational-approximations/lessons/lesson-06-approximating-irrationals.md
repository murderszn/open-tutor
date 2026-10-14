# Lesson 06 — Approximating Irrationals

**Student goal:** I can bracket an irrational between rational
approximations and place it on a number line.
**Time:** ~45 minutes · **Unit:** [U01](../README.md) · **Session 11 of 16**

## Materials

- Notebook, pencil, graph paper, calculator (for squaring checks)
- [`assets/number-line-real-numbers.svg`](../assets/number-line-real-numbers.svg)
  (deterministic diagram — exact positions)

## Readiness check (5 minutes)

Order from least to greatest: 1.5, 1.414, 1.732, 1.6. (Expected: 1.414 <
1.5 < 1.6 < 1.732.) Then: "These are approximations of √2, 3/2, √3, and
8/5. Today we find the approximations ourselves."

## Teaching

An irrational number can't be written exactly as a decimal — but we can
trap it between two rational numbers as tightly as we like. The method is
**bracketing**: find two consecutive tenths (or hundredths) whose squares
straddle the radicand.

> **Bracket √2 between consecutive tenths:**
> 1.4² = 1.96 < 2 < 2.25 = 1.5², so **1.4 < √2 < 1.5**.
> Refine: 1.41² = 1.9881 < 2 < 2.0164 = 1.42², so **1.41 < √2 < 1.42**.

Each extra digit costs one more round of squaring. This is exactly what
the standard means by "truncating the decimal expansion of √2 to show it
lies between 1 and 2, then between 1.4 and 1.5, and explaining how to
continue."

**Placing on a number line:** once bracketed, plot the midpoint-ish
position honestly — √2 ≈ 1.414 sits just left of 1.5; √3 ≈ 1.732 sits
between 1.7 and 1.8; π ≈ 3.1416 sits just right of 3. The SVG diagram shows
−√5, √2, √3, 3/2, and π placed to scale.

**Estimating expressions:** replace each irrational with a 2–3 digit
approximation, then compute. π² ≈ (3.14)² = 9.8596 ≈ 9.9 — so π² is between
9 and 10. 2√3 ≈ 2(1.73) = 3.46.

**Key vocabulary:** *bracket* (trap between two rational bounds),
*truncate* (cut digits without rounding).

## Worked example 1 — bracketing √7

> Whole-number bracket: 2² = 4 < 7 < 9 = 3², so 2 < √7 < 3.
> Tenths: 2.6² = 6.76 < 7 < 7.29 = 2.7², so **2.6 < √7 < 2.7**.
> Hundredths: 2.64² = 6.9696 < 7 < 7.0225 = 2.65², so **2.64 < √7 < 2.65**.

**Reasoning to name aloud:** always square the *bounds* and compare with
the radicand — never "take the root" of anything. The work is all in
squaring decimals carefully (2.64² = 6.9696: 264² = 69696, shift four
places).

## Worked example 2 — ordering a mixed set

Order from least to greatest: √2, 1.5, π − 1.5, √3 − 0.1.

> Approximate each: √2 ≈ 1.414; 1.5 = 1.5; π − 1.5 ≈ 3.1416 − 1.5 =
> 1.6416; √3 − 0.1 ≈ 1.732 − 0.1 = 1.632.
> Order: **√2 (1.414) < 1.5 < √3 − 0.1 (1.632) < π − 1.5 (1.6416)**.

**Reasoning to name aloud:** convert everything to the same currency —
decimals — then compare. Keep 3–4 digits so close calls (1.632 vs. 1.6416)
resolve correctly.

## Guided practice (adult stays close, hints allowed)

1. Between which consecutive integers is √50? *(Hint: "7² and 8².")*
   Expected: 7 < √50 < 8 (49 < 50 < 64).
2. Between which consecutive tenths is √10? *(Hint: "Square 3.1 and
   3.2.")* Expected: 3.1 < √10 < 3.2 (9.61 < 10 < 10.24).
3. Estimate √3 + √2 to one decimal place. *(Hint: "1.73 + 1.41.")*
   Expected: ≈ 3.1 (1.732 + 1.414 = 3.146).
4. On the SVG number line, which plotted value is closest to 1.5 — √2 or
   √3? *(Hint: "Compute both distances.")* Expected: √2 (|1.414 − 1.5| =
   0.086 < |1.732 − 1.5| = 0.232).
5. A square garden has area 50 m². Give its side length between
   consecutive tenths. Expected: √50; 7.0² = 49 < 50 < 51.0841 = 7.1²… —
   compute: 7.0² = 49.0, 7.1² = 50.41, so **7.0 < √50 < 7.1**.
6. Error analysis: "Kai brackets √5 as 2.2 < √5 < 2.3 because 2.2² = 4.4
   and 2.3² = 4.6." Find the error. Expected: Kai squared wrong —
   2.2² = 4.84 and 2.3² = 5.29. The correct bracket is 2.2 < √5 < 2.3
   anyway (4.84 < 5 < 5.29 ✓), but his *reasoning* was broken — squaring
   must be exact.

## Independent practice

1. Bracket √13 between consecutive tenths.
2. Bracket √90 between consecutive integers, then tenths.
3. Estimate 3π to one decimal place.
4. Order least to greatest: 2√2, π, 3.1, √10.
5. The diagonal of a 5-by-5 square is 5√2 ≈ 7.07. Between which
   consecutive hundredths is 5√2? (Hint: bracket √2 to hundredths first.)

*Alternate response mode:* build the bracket on a string number line with
clothespins — pin "too small" and "too big" bounds, then narrow them.

## Application

Carpentry: a bookshelf diagonal brace must fit a 3-ft by 4-ft rectangle.
The exact diagonal is 5 ft (3-4-5 triangle). Now the carpenter scales the
design to a 5-ft by 5-ft square opening. What length brace should she cut,
to the nearest eighth of an inch? (Expected: 5√2 ft ≈ 7.071 ft = 84.85
in; nearest eighth: 84⅞ in = 84.875. Show the conversion: 0.071 ft × 12 =
0.852 in → 84.852 in ≈ 84⅞ in.)

## Exit check

"Between which consecutive tenths does √10 lie? Show the squaring."
Expected: 3.1² = 9.61 < 10 < 10.24 = 3.2², so 3.1 < √10 < 3.2. Record:
secure / developing / not yet.

## Supports

- **Language access:** "bracket" = "trap between two fences"; draw the
  fences on the number line before computing.
- **Alternate response mode:** the string-and-clothespin number line for
  all placement tasks; oral squaring with the adult scribing.
- **Precision note:** when bounds are close, keep one extra digit through
  the work and round only at the end.

## Extension

Which is larger, √2 + √3 or π? Approximate: √2 + √3 ≈ 1.4142 + 1.7321
= 3.1463 > 3.1416 ≈ π — so √2 + √3 wins, barely. Now prove it without a
calculator: both sides are positive, so √2 + √3 > π ⟺ (√2 + √3)² > π² ⟺
5 + 2√6 > π². Bound each side: 2.44² = 5.9536 < 6, so √6 > 2.44 and
5 + 2√6 > 9.88; and π < 3.1416 gives π² < 9.8697 < 9.88. Chain them:
5 + 2√6 > 9.88 > π². ∎ (The same bracketing idea as the lesson, used as a
proof technique.)

## Teacher note

**Likely misconceptions:** (1) Squaring errors when bracketing (Kai's
error) — insist on exact squaring; verify 2.2² = 4.84 by hand. (2)
Confusing truncation with rounding — bracketing needs *both* sides, not a
rounded middle. (3) Treating ≈ as = in chains of reasoning. (4) Placing
√2 at 1.5 "because it's between 1 and 2" — the SVG's to-scale positions
correct this.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-06) has
expected responses for all items, including √13 (3.6 < √13 < 3.7), √90
(9.4 < √90 < 9.5), 3π ≈ 9.4, the ordering, and the brace computation.
