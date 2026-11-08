# Lesson 01 — Two Equations, One Pair

**Goal (student-readable):** I can test whether an ordered pair is a
solution of a system of two equations, and explain why both equations
must be checked.
**Time:** ~45 minutes · **Materials:** notebook, pencil.

## Readiness check

Test `x = 3` in `2x + 1 = 7`. (Answer: `2(3) + 1 = 7`, so `x = 3` is
a solution.) If that feels shaky, warm up by testing two more values
in the same equation before starting.

## Teaching

A **system of linear equations** is two (or more) equations that must
be true at the same time, with the same variables meaning the same
things in both. The curly brace is the usual way to write one:

```
{ y = x + 1
{ y = −x + 5
```

Read it as: "Find the pair `(x, y)` that makes *both* of these true
at once." A **solution of the system** is an ordered pair that makes
every equation in the system true. One equation is not enough to
decide: a pair can satisfy the first equation and fail the second.
That is why the test is always two substitution checks, one per
equation, with the same pair in both.

Think of it as two locks and one key. The pair `(2, 3)` is a key:
try it in the first lock, then try the *same* key in the second lock.
If it opens both, it is a solution. If it opens only one, it is not.

### Worked example 1

**Is `(2, 3)` a solution of the system `y = x + 1` and `y = −x + 5`?
Is `(1, 2)`?**

Test `(2, 3)` in the first equation: `y = x + 1` becomes
`3 = 2 + 1`, which is `3 = 3`. True.

Test the *same* pair in the second equation: `y = −x + 5` becomes
`3 = −2 + 5`, which is `3 = 3`. True.

Both checks pass, so `(2, 3)` **is** a solution of the system.

Test `(1, 2)` in the first equation: `2 = 1 + 1`, which is `2 = 2`.
True. Test it in the second: `2 = −1 + 5`, which is `2 = 4`.
False. One failure is enough: `(1, 2)` **is not** a solution. Notice
how close it came — it satisfied the first equation and still failed.
That is why both checks are required.

### Worked example 2

**Is `(3, 1)` a solution of `2x + y = 7` and `x − y = 2`? What
about `(2, 3)`?**

Test `(3, 1)` in the first equation: `2(3) + 1 = 6 + 1 = 7`. True.
In the second: `3 − 1 = 2`. True. So `(3, 1)` **is** a solution.

Test `(2, 3)` in the first equation: `2(2) + 3 = 4 + 3 = 7`. True.
In the second: `2 − 3 = −1`, and `−1` is not `2`. False. So
`(2, 3)` **is not** a solution — even though it passed the first
check. The second equation is the one that catches it.

## Guided practice

Work these with the adult; say each substitution out loud, and
check both equations every time.

1. Test `(1, 4)` in `y = 2x + 2` and `y = −x + 5`.
2. Test `(0, 1)` in `x + y = 5` and `2x − y = 1`.
3. Test `(3, 0)` in `y = −x + 3` and `2y + x = 3`.
4. Test `(2, 3)` in `x + y = 4` and `y = 3x − 4`.
5. Explain in one sentence why checking only the first equation can
   never prove a pair is a solution of a system.

## Independent practice

1. Test `(1, 5)` in `y = 4x + 1` and `y = −x + 6`.
2. Test `(3, 2)` in `x + y = 5` and `2x − y = 4`.
3. Test `(0, 4)` in `y = 2x + 4` and `x + y = 4`.
4. Test `(2, −1)` in `y = x − 3` and `2x + y = 3`.
5. Test `(5, 1)` in `x + 2y = 7` and `y = 3x − 14`.
6. Test `(1, 1)` in `3x + y = 4` and `x − y = 1`.
7. Test `(−2, 3)` in `y = −x + 1` and `2x + 3y = 5`.
8. **Explain your reasoning:** Test `(0, 0)` in `y = 2x` and
   `y = x + 1`. Is it a solution? Explain what the two checks show.

## Application

Write a system of two equations of your own whose solution is
`(2, 1)`. (Hint: pick two equations that are both true when `x = 2`
and `y = 1`.) Show both substitution checks. Trade with the adult:
can they tell, before reading your checks, that `(2, 1)` works?

## Exit check

Is `(4, 2)` a solution of `y = x − 2` and `x + y = 6`? Show both
substitution checks.

## Supports, alternate modes, extension

- **Language access:** "System" here means "a set of equations that
  must all be true together" — not "a computer system." "Ordered
  pair" means the first number is always `x` and the second is
  always `y`. Keep both sentences visible during the lesson.
- **Alternate response mode:** Answer checks orally, or point to the
  equation that fails; the adult scribes the arithmetic.
- **Extension:** Find a pair that satisfies `y = 2x` but fails
  `y = x + 3`, and a pair that satisfies `y = x + 3` but fails
  `y = 2x`. (Try `(1, 2)` for the first part: `2 = 2(1)` is true,
  but `2 = 1 + 3` is false. Try `(0, 3)` for the second part:
  `3 = 0 + 3` is true, but `3 = 2(0)` is false.) Then explain why
  the pair `(3, 6)` satisfies both — and what that tells you about
  the two lines, a preview of Lesson 02.

## Teacher note

Watch for the big misconception of this lesson: stopping after the
first equation passes. Insist on the second check every time — the
habit is what makes every later method trustworthy, because a wrong
" solution" that passes one equation will be caught by the other.
Answer-key reference:
[answer-key.md](../answer-key.md#lesson-01).
