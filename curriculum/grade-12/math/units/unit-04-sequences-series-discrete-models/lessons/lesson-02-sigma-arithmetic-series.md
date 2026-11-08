# Lesson 02 — Sigma Notation and Arithmetic Series

**Goal:** I can read, write, and evaluate sums in sigma notation,
and derive and apply the arithmetic series sum without miscounting
terms.

**Time:** 50 minutes. **Materials:** notebook, calculator.

**Readiness check (5 minutes):** Add `6 + 11 + 16 + 21 + 26` two
ways: directly, and by noticing the pattern. (Direct sum: 80. The
pattern is arithmetic with `a_1 = 6`, `d = 5`, five terms.)

## Teaching

A **series** is the sum of the terms of a sequence. **Sigma
notation** compresses a sum into one expression:

```
     5
    Σ  (3k + 1)  =  (3·1 + 1) + (3·2 + 1) + … + (3·5 + 1)
    k=1
```

Read it as: "the sum, for `k` running from 1 to 5, of `3k + 1`."
The letter under the sigma is the **index of summation**; the
numbers below and above it are the first and last index values.
Two warnings that save more points than any formula:

1. **Count the terms, don't assume.** `Σ_{k=1}^{5}` has 5 terms,
   but `Σ_{k=3}^{7}` also has 5 terms (7 − 3 + 1 = 5), and
   `Σ_{k=0}^{5}` has 6. Number of terms = last − first + 1.
2. **The index is a dummy.** `Σ_{k=1}^{4} 2k` and
   `Σ_{j=1}^{4} 2j` are the same sum. What matters is the rule and
   the range, not the letter.

### Deriving the arithmetic series sum

An **arithmetic series** adds the terms of an arithmetic sequence.
Write the sum forward and backward, then add the two lines:

```
S = a_1 + (a_1 + d) + … + (a_n − d) + a_n
S = a_n + (a_n − d) + … + (a_1 + d) + a_1
2S = (a_1 + a_n) + (a_1 + a_n) + … + (a_1 + a_n)   [n copies]
```

So `S_n = n/2 · (a_1 + a_n)`. This is the pairing argument: the
first and last terms pair to the same total as the second and
second-to-last, all the way in. It needs `a_n`, so a typical
solution first finds `a_n = a_1 + (n − 1)d`, then applies the sum
formula. The two-step structure — find the last term, then sum —
is the whole method.

### Worked Example 1 — evaluating a sigma sum

Evaluate `Σ_{k=1}^{5} (3k + 1)`.

Expand: `k = 1 → 4; k = 2 → 7; k = 3 → 10; k = 4 → 13; k = 5 → 16`.
Sum: `4 + 7 + 10 + 13 + 16 = 50`.

Check by the arithmetic structure: the terms are arithmetic with
`a_1 = 4`, `a_5 = 16`, `n = 5`, so
`S = 5/2 · (4 + 16) = 5/2 · 20 = 50` ✓. Expanding is the check;
the formula is the shortcut.

### Worked Example 2 — a series given as a list

Find `6 + 11 + 16 + … + 101`.

This is arithmetic with `a_1 = 6`, `d = 5`. First find how many
terms there are: `a_n = 6 + (n − 1)·5 = 101` gives
`(n − 1)·5 = 95`, so `n − 1 = 19` and `n = 20`.

Then `S_20 = 20/2 · (6 + 101) = 10 · 107 = 1070`.

The most common error here is skipping the term count and guessing
`n` from the last value. Solve for `n` from the explicit formula
every time.

## Guided practice

1. Evaluate `Σ_{k=1}^{4} 2^k` by expanding.
2. Evaluate `Σ_{k=0}^{3} (5 − 2k)`. How many terms does it have?
3. Find `3 + 8 + 13 + … + 53` using the two-step method.

## Independent practice

1. Evaluate `Σ_{k=1}^{6} k²`.
2. An arithmetic series has `a_1 = −4`, `d = 7`. Find `a_15` and
   the sum of the first 15 terms.
3. Find the sum of the first 40 positive multiples of 3.
4. Evaluate `Σ_{k=3}^{7} (2k − 1)` by expanding, and confirm the
   term count with last − first + 1.

## Application

A chair stacker builds 12 stacks. The first stack has 8 chairs and
each later stack has 3 more chairs than the one before it. How many
chairs are there in all? Set up `a_1`, `d`, `n`, and `a_n` before
computing, and give the total.

## Exit check

1. Write `5 + 9 + 13 + 17` in sigma notation.
2. A learner writes `Σ_{k=2}^{6}` and says it has 6 terms. Is that
   right? Explain with the counting rule.

## Supports and extensions

- **Support:** Always expand the first two and last terms of a
  sigma sum before evaluating; the expansion is the term count
  made visible.
- **Alternate response mode:** Read a sigma expression aloud in
  words ("sum from k equals 1 to 5 of…") before writing anything.
- **Extension:** Prove that `Σ_{k=1}^{n} k = n(n + 1)/2` using the
  pairing argument, then check it against `n = 100` (the classic
  5050 result).

## Teacher note

Likely misconceptions: (a) counting `Σ_{k=3}^{7}` as 7 or 4 terms;
(b) applying `n/2 · (a_1 + a_n)` with `n` equal to the last term's
value instead of the term count; (c) treating sigma notation as a
new kind of arithmetic rather than shorthand for a list. Reteach
with expansion first, formula second. Answer-key reference:
`answer-key.md`, Lesson 02.
