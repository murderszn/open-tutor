# Lesson 03 — Repeating Decimals to Fractions

**Student goal:** I can convert a repeating decimal to a fraction using the
multiply-and-subtract method.
**Time:** ~45 minutes · **Unit:** [U01](../README.md) · **Session 5 of 16**

## Materials

- Notebook, pencil
- [L1](lesson-01-rational-numbers-decimal-expansions.md) notes (repetend notation)

## Readiness check (5 minutes)

Write 0.777… with the bar notation and name its repetend. (Expected:
0.7̄, repetend "7".) Then: "If this decimal really equals some fraction,
how could we *find* that fraction?" Collect guesses before teaching the
method.

## Teaching

A repeating decimal is secretly a fraction wearing a disguise. The
multiply-and-subtract trick unmasks it: shift the decimal point until the
repeating part lines up with itself, then subtract — the infinite tail
cancels.

**One-digit repetend.** Let x = 0.777…
Multiply by 10 (one digit in the repetend → shift one place):

> 10x = 7.777…
> − x = 0.777…
> 9x = 7.000… → 9x = 7 → **x = 7/9**

The infinite 7s subtracted away completely.

**Two-digit repetend.** Let x = 0.4545… Multiply by 100 (two digits → shift
two places):

> 100x = 45.4545…
> − x = 0.4545…
> 99x = 45 → **x = 45/99 = 5/11** (simplify!)

**Delayed repetend.** Let x = 0.8333… The repeat starts after the 8. Shift
twice, with two different shifts:

> 100x = 83.333…
> − 10x = 8.333…
> 90x = 75 → **x = 75/90 = 5/6**

Check: 5/6 = 0.8333… ✓ (from Lesson 01).

**The rule:** multiply by 10^k where k is the repetend length, align the
tails, subtract, solve, and simplify.

**Key vocabulary:** *repetend* (repeating block), *multiply-and-subtract*
(the conversion method).

## Worked example 1 — a two-digit repetend

Convert 0.1̄6̄.

> Let x = 0.161616…
> 100x = 16.1616…
> 99x = 16 → x = 16/99

16 and 99 share no common factor (99 = 9 × 11; 16 = 2⁴), so 16/99 is
simplest. Verify by dividing: 16 ÷ 99 = 0.1616… ✓

**Reasoning to name aloud:** the shift size always matches the repetend
length — two repeating digits, shift two places, subtract to get 99x.

## Worked example 2 — the famous 0.999… = 1

Let x = 0.999…

> 10x = 9.999…
> 9x = 9 → x = 1

So **0.999… = 1** exactly — not "almost 1." There is no number between
0.999… and 1, so they must be the same number. This surprises everyone the
first time; the algebra doesn't care about our surprise.

**Reasoning to name aloud:** this is the same method doing something
startling. Trust the steps: every line follows from the one above, so the
conclusion stands even when intuition protests.

## Guided practice (adult stays close, hints allowed)

1. Convert 0.3̄.
   *(Hint: "One repeating digit — multiply by what?")* Expected: x = 3/9 =
   1/3.
2. Convert 0.2̄7̄. *(Hint: "Two repeating digits.")* Expected: 27/99 =
   3/11.
3. Convert 0.6̄. Expected: 6/9 = 2/3.
4. Convert 1.1̄7̄ (a mixed number). *(Hint: "Convert the decimal part,
   then add the 1.")* Expected: 1 + 17/99 = 116/99.
5. Convert 0.41̄6̄. *(Hint: "Delayed repetend — try 100x and 1000x? No:
   the repeat starts after one digit, so use 10x and 1000x.")*
   Expected: 1000x = 416.666…, 10x = 4.1666…, 990x = 412.5? — careful!
   Better: x = 0.41666…; 100x = 41.666…; 10x = 4.1666…; 90x = 37.5;
   x = 37.5/90 = 375/900 = 5/12. Check: 5/12 = 0.41666… ✓
6. Error analysis: "Priya converts 0.7̄2̄ as x = 72/100 = 18/25." What went
   wrong? Expected: she treated a repeating decimal as terminating
   (0.72); the correct value is 72/99 = 8/11. 18/25 = 0.72 exactly, but
   0.7̄2̄ = 0.7272… > 0.72.

## Independent practice

Convert to simplest form, then verify with division:

1. 0.5̄
2. 0.8̄1̄
3. 2.4̄
4. 0.91̄6̄
5. Explain why the method always produces a fraction — what does that prove
   about *every* repeating decimal? (Expected: the subtraction always
   leaves an integer equation ax = b, so x = b/a is rational. This proves
   every repeating decimal is rational — the converse of Lesson 01's
   direction.)

*Alternate response mode:* narrate each algebra step aloud ("I multiply by
100 because two digits repeat…") while the adult scribes.

## Application

Repeating decimals in money: a store splits a $10 discount equally among 3
friends. Each share is 10/3 = 3.333… dollars. The register can only charge
whole cents. What does each friend actually pay, and where does the missing
fraction of a cent go? (Expected: each pays $3.33; 3 × $3.33 = $9.99, so
$0.01 is unaccounted — the repeating decimal can't be represented in cents,
so someone absorbs the extra cent or the store rounds one share to $3.34.)

## Exit check

"Convert 0.1̄2̄ to a fraction." Expected: 12/99 = 4/33. Record: secure /
developing / not yet.

## Supports

- **Language access:** "the infinite tail cancels" — mime scissors cutting
  the tail; the subtraction *removes* the endless part.
- **Alternate response mode:** line up the two shifted decimals in columns
  on graph paper so the subtraction's alignment is visible.
- **Scaffold:** for delayed repetends, first rewrite as a sum (0.4166… =
  0.4 + 0.01666…) and convert the pure-repeating part.

## Extension

Convert 0.123123… (repetend "123"): 1000x = 123.123…, 999x = 123,
x = 123/999 = 41/333. Then prove that 0.0̄9̄ = 1/11 two ways (direct
method: 9/99; and as (1/10) × 0.9̄0̄ = (1/10) × (10/11), since 0.9090… =
90/99 = 10/11).

## Teacher note

**Likely misconceptions:** (1) Treating repeating as terminating (Priya's
error) — always verify by re-dividing. (2) Forgetting to simplify (45/99
left unsimplified). (3) 0.999… < 1 — run the algebra; also show there is no
number strictly between them. (4) Shifting by the wrong power of 10 for
delayed repetends — match the shift to where the repeat *starts*, then to
its length.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-03) has
worked conversions for all items, including 0.91̄6̄ = 11/12 and the
0.123123… extension.
