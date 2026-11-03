# Lesson 01 — Sequences as Functions: Recursive and Explicit Forms

**Goal:** I can write a sequence recursively and explicitly, translate
between the two forms, and tell whether a sequence is arithmetic,
geometric, or neither.

**Time:** 50 minutes. **Materials:** notebook, spreadsheet or
calculator for checking terms.

**Readiness check (5 minutes):** Write the first four terms of
`a_n = 5n − 2`. (Answer: 3, 8, 13, 18.) Then describe in one sentence
how to get from one term to the next. If the sentence is "add 5,"
you already have the recursive idea.

## Teaching

A **sequence** is an ordered list of numbers, `a_1, a_2, a_3, …`.
The subscript is the term's position, called its **index**. A sequence
is a function: the input is the position `n` (a counting number) and
the output is the term `a_n`. That is the content of F-IF.3, and it
matters because it licenses everything functions can do — graphing
terms as points `(n, a_n)`, composing rules, and asking "what is the
value at input 20?" without listing twenty terms.

There are two standard ways to define a sequence:

- **Explicit formula:** a rule for `a_n` directly from `n`.
  Example: `a_n = 4n + 3` gives `a_20 = 83` immediately.
- **Recursive formula:** a starting term plus a rule for getting
  `a_n` from earlier terms. Example: `a_1 = 7`,
  `a_n = a_{n−1} + 4` for `n ≥ 2`. To find `a_20` you walk the chain
  — or translate to the explicit form first, which is usually wiser.

Two families recur constantly:

- **Arithmetic:** the same number `d` (the **common difference**) is
  added each step. Explicit: `a_n = a_1 + (n − 1)d`. Recursive:
  `a_1` given, `a_n = a_{n−1} + d`.
- **Geometric:** each term is multiplied by the same number `r`
  (the **common ratio**). Explicit: `a_n = a_1 · r^(n−1)`.
  Recursive: `a_1` given, `a_n = r · a_{n−1}`.

The indexing convention must be stated every time. In this unit,
unless a problem says otherwise, the first term is `a_1` and the
index starts at 1. A sequence defined with `a_0` as its first term
is the same sequence shifted by one index — a frequent source of
off-by-one errors, and the reason every model in this unit names its
indexing in words ("after `n` months," "in row `n`").

Not every sequence is arithmetic or geometric. The Fibonacci
sequence `1, 1, 2, 3, 5, 8, …` is defined by
`f_1 = 1, f_2 = 1, f_n = f_{n−1} + f_{n−2}`: each term is the sum of
the two before it. Its differences change and its ratios change, so
neither family fits — and that is a complete answer, not a failure.

### Worked Example 1 — arithmetic, both forms

Sequence: `7, 11, 15, 19, …`.

Differences: `11 − 7 = 4`, `15 − 11 = 4`, `19 − 15 = 4`. Constant
difference 4, so arithmetic with `a_1 = 7`, `d = 4`.

- Recursive: `a_1 = 7`, `a_n = a_{n−1} + 4` for `n ≥ 2`.
- Explicit: `a_n = 7 + (n − 1)·4 = 4n + 3`.
- Check: `a_1 = 7` ✓, `a_4 = 19` ✓. Then `a_20 = 4·20 + 3 = 83`.

Notice the translation step: the explicit form is the recursive
rule "unrolled" — start at 7, add 4 a total of `n − 1` times.

### Worked Example 2 — geometric, both forms

Sequence: `5, 10, 20, 40, …`.

Ratios: `10/5 = 2`, `20/10 = 2`, `40/20 = 2`. Constant ratio 2, so
geometric with `a_1 = 5`, `r = 2`.

- Recursive: `a_1 = 5`, `a_n = 2·a_{n−1}` for `n ≥ 2`.
- Explicit: `a_n = 5 · 2^(n−1)`.
- Check: `a_4 = 5 · 8 = 40` ✓. Then `a_10 = 5 · 2^9 = 5 · 512 = 2560`.

A common error: writing `a_n = 5 · 2^n` (forgetting the `n − 1`).
That gives `a_1 = 10`, which contradicts the sequence. Always check
`n = 1` in your explicit formula.

## Guided practice

1. Sequence `2, 6, 18, 54, …`. Identify the family, give recursive
   and explicit forms, and find `a_8`.
2. A sequence is defined by `b_1 = 12`, `b_n = b_{n−1} − 5`.
   Translate to an explicit formula and find `b_12`.
3. Sequence `3, 7, 12, 18, …`. Is it arithmetic? Geometric?
   Justify with differences and ratios, and give an explicit
   formula if you can find one.

## Independent practice

1. Write the first four terms and `a_10` of `a_n = 2n² − n`.
2. A geometric sequence has `a_1 = 81` and `r = 1/3`. List the
   first four terms and find `a_6`.
3. Write the first eight terms of the Fibonacci-style rule
   `f_1 = 1, f_2 = 1, f_n = f_{n−1} + f_{n−2}`.
4. A theater's rows start with 20 seats and add 4 seats per row.
   Write the explicit formula for row `n` and find the seats in
   row 15. State what `n` counts.

## Application

A learner starts a savings jar with $200 and adds $35 at the end of
each month. Let `B_n` be the balance after `n` months
(`B_0 = 200`). Write a recursive rule for `B_n`, translate it to an
explicit formula, and find the balance after 12 months. Then explain
in one sentence why this model is arithmetic and not geometric.

## Exit check

1. Write an explicit formula for `9, 4, −1, −6, …`.
2. In your own words: why is a sequence a function, and what is its
   domain?

## Supports and extensions

- **Support:** Build the first six terms in a table before writing
  any formula; circle the repeated operation (+4, ×2) in the table.
- **Alternate response mode:** Explain the recursive rule aloud as
  "to get the next term, I…" before writing symbols.
- **Extension:** A sequence has `a_1 = 2` and `a_n = 3a_{n−1} − 1`.
  Find the first five terms, then decide whether an explicit
  formula of the form `a_n = A·3^(n−1) + B` can fit it, and find
  `A` and `B` if so. (Hint: find the fixed point of the rule.)

## Teacher note

Likely misconceptions: (a) `a_n = a_1 · r^n` instead of `r^(n−1)`;
(b) calling any increasing sequence "arithmetic"; (c) mixing up
`a_0`-based and `a_1`-based indexing when translating. The fix for
all three is the same habit: check `n = 1` and `n = 2` in the
formula you just wrote. Answer-key reference: `answer-key.md`,
Lesson 01.
