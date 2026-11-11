# Lesson 06 — Mathematical Induction

**Goal:** I can prove a statement about all counting numbers with
mathematical induction, and spot the flaw in a faulty induction
argument.

**Time:** 50 minutes. **Materials:** notebook.

**Readiness check (5 minutes):** Check that
`1 + 2 + 3 + 4 = 10` and that `4·5/2 = 10`. The formula
`1 + 2 + … + n = n(n + 1)/2` works for `n = 4`. Does checking
`n = 4` prove it for all `n`? (No — checking examples, even many
examples, is not a proof. Induction is the tool that turns one
checked case plus one implication into all cases.)

## Teaching

**Mathematical induction** proves a statement `P(n)` for every
counting number `n` in two steps:

1. **Base step:** prove `P(1)` (or `P(n₀)` for some stated starting
   value).
2. **Inductive step:** assume `P(k)` for an arbitrary `k` (the
   **inductive hypothesis**) and prove `P(k + 1)` from it.

The domino picture is exact: the base step tips the first domino,
and the inductive step shows that any tipped domino tips the next
one. Together they tip them all. Either step alone is worthless: a
base case without the step proves one case; a step without a base
case proves a chain that never starts.

A proof template for sum formulas:

> **Claim.** For all `n ≥ 1`, [statement].
> **Base step.** For `n = 1`: [check both sides].
> **Inductive step.** Assume the claim for `n = k`:
> [state `P(k)`]. Then for `n = k + 1`: [algebra that uses the
> assumption to reach `P(k + 1)`]. Therefore, by induction, the
> claim holds for all `n ≥ 1`.

The algebra in the inductive step almost always follows one move:
write the `k + 1` case as the `k` case plus the new term, substitute
the inductive hypothesis, then simplify to the claimed form. If you
cannot see where the hypothesis was used, the proof is incomplete.

Induction also proves non-sum statements: divisibility ("`3`
divides `4^n − 1` for all `n ≥ 1`") and inequalities. The structure
never changes — only the algebra inside the inductive step does.

### Worked Example 1 — a sum formula

**Claim.** For all `n ≥ 1`, `1 + 2 + … + n = n(n + 1)/2`.

**Base step.** For `n = 1`: left side 1; right side `1·2/2 = 1` ✓.

**Inductive step.** Assume `1 + 2 + … + k = k(k + 1)/2`. Then

```
1 + 2 + … + k + (k + 1) = k(k + 1)/2 + (k + 1)
                        = (k + 1)(k/2 + 1)
                        = (k + 1)(k + 2)/2
```

which is exactly the claimed formula with `n = k + 1`. Therefore,
by induction, the formula holds for all `n ≥ 1`. ∎

### Worked Example 2 — a sum of odd numbers

**Claim.** For all `n ≥ 1`,
`1 + 3 + 5 + … + (2n − 1) = n²`.

**Base step.** For `n = 1`: left side 1; right side `1² = 1` ✓.

**Inductive step.** Assume `1 + 3 + … + (2k − 1) = k²`. Then

```
1 + 3 + … + (2k − 1) + (2k + 1) = k² + (2k + 1) = (k + 1)²
```

which is the claim for `n = k + 1`. Therefore, by induction, the
formula holds for all `n ≥ 1`. ∎

A picture helps: adding the next odd number wraps a new layer
around a square, turning a `k × k` square into a `(k + 1) × (k + 1)`
square. The algebra and the picture say the same thing.

## Guided practice

1. Prove by induction that
   `5 + 10 + 15 + … + 5n = 5n(n + 1)/2` for all `n ≥ 1`.
2. Prove by induction that `3` divides `4^n − 1` for all `n ≥ 1`.
   (Hint: `4^(k+1) − 1 = 4·(4^k − 1) + 3`.)
3. **Error analysis.** A learner "proves" that all horses are the
   same color: "For `n = 1` it is trivial. Assume any `k` horses
   are the same color; in a group of `k + 1` horses, the first `k`
   are the same color and the last `k` are the same color, so all
   `k + 1` are." Find the flaw: for which step from `k` to
   `k + 1` does the argument break, and why?

## Independent practice

1. Prove by induction that
   `1 + 2 + 4 + … + 2^(n−1) = 2^n − 1` for all `n ≥ 1`.
2. Prove by induction that `n! ≥ 2^(n−1)` for all `n ≥ 1`.
3. Give two short explanations: (a) why a true inductive step with
   a false base case proves nothing (name a statement whose step
   works but whose base fails); (b) why a true base case with a
   failing inductive step proves nothing.

## Application

Prove the finite geometric sum formula of Lesson 03 by induction:
for `r ≠ 1` and all `n ≥ 1`,
`a_1 + a_1·r + … + a_1·r^(n−1) = a_1(1 − r^n)/(1 − r)`.
Write the base step and inductive step in full, and say where the
inductive hypothesis is used. (This closes the loop: Lesson 03
derived the formula by subtraction; induction proves it again
from the recursive structure of the sum.)

## Exit check

1. State the two steps of an induction proof in your own words.
2. Why does proving `P(k) → P(k + 1)` for every `k`, plus `P(1)`,
   prove `P(n)` for every `n`? Use the domino picture.

## Supports and extensions

- **Support:** Write "Assume for k:" and "Show for k + 1:" as
  labeled lines before doing any algebra; the labels keep the two
  roles distinct.
- **Alternate response mode:** Tell the proof aloud as a story
  ("I know it for k, so I add the next term…") before writing it.
- **Extension:** Prove by induction that `n³ − n` is divisible by
  3 for all `n ≥ 1`. (Hint: `(k + 1)³ − (k + 1) = (k³ − k) +
  3(k² + k)`.)

## Teacher note

Likely misconceptions: (a) treating examples as proof; (b) writing
the inductive step as if `P(k + 1)` were already known (assuming
the conclusion); (c) the horse-color flaw, which is specifically
the `k = 1 → k = 2` step: the "first k" and "last k" groups share
no horse when `k = 1`, so nothing forces the two horses to match.
Reteach with dominoes: knock over domino 1, then check that each
domino really reaches the next. Answer-key reference:
`answer-key.md`, Lesson 06.
