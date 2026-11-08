# Lesson 03 — Solve by Substitution

**Goal (student-readable):** I can solve a system by substituting
one equation into the other, and check the answer in both original
equations.
**Time:** ~45 minutes · **Materials:** notebook, pencil.

## Readiness check

Solve `2x + 3x = 15` for `x`. (Answer: `5x = 15`, so `x = 3`.)
Then find `y` if `y = 3x`. (Answer: `y = 9`.) If that feels shaky,
warm up by combining like terms in two more equations before
starting.

## Teaching

Graphing is honest but slow, and it struggles when the solution is
not a whole-number pair. **Substitution** does the same job with
algebra: if one equation says `y` equals something, then wherever
`y` appears in the other equation, you may put that something in
its place — because they are equal, the equation stays true.

The method, step by step:

1. **Isolate.** Make sure one equation is solved for one variable
   (`y = ...` or `x = ...`). If neither is, solve one of them for
   the easier variable first.
2. **Substitute.** Replace that variable in the *other* equation
   with the expression. You now have one equation in one variable.
3. **Solve** the one-variable equation (Unit 03 skills).
4. **Back-substitute.** Put the value you found into either original
   equation to find the other variable.
5. **Check** the pair in *both* original equations.

Substitution is the best choice when one equation is already solved
for a variable — or nearly is. If neither equation is, elimination
(Lesson 04) is usually faster.

### Worked example 1

**Solve by substitution: `y = 3x` and `2x + y = 15`.**

The first equation is already solved for `y`, so substitute `3x`
for `y` in the second equation:

`2x + 3x = 15` → `5x = 15` → `x = 3`.

Back-substitute into `y = 3x`: `y = 3(3) = 9`. The solution is
`(3, 9)`.

Check in both original equations: `y = 3x` gives `9 = 3(3)`, true;
`2x + y = 15` gives `2(3) + 9 = 6 + 9 = 15`, true. Both pass, so
`(3, 9)` is the solution.

### Worked example 2

**Solve by substitution: `x = y + 4` and `3x − 2y = 18`.**

The first equation is solved for `x`, so substitute `y + 4` for `x`
in the second equation. Use parentheses — the whole expression
replaces `x`:

`3(y + 4) − 2y = 18` → `3y + 12 − 2y = 18` → `y + 12 = 18` →
`y = 6`.

Back-substitute into `x = y + 4`: `x = 6 + 4 = 10`. The solution
is `(10, 6)`.

Check: `x = y + 4` gives `10 = 6 + 4`, true; `3x − 2y = 18` gives
`3(10) − 2(6) = 30 − 12 = 18`, true. Both pass.

## Guided practice

Work these with the adult; say the substitution step out loud
before writing it.

1. Solve by substitution: `y = 2x + 3` and `5x − 2y = −4`.
2. Solve by substitution: `y = 4x − 7` and `y = 4x + 2`. What
   happens when you substitute? What does the result mean?

## Independent practice

1. Solve by substitution: `y = x − 2` and `3x + y = 10`.
2. Solve by substitution: `y = −2x + 5` and `x + y = 2`.
3. Solve by substitution: `x = 2y + 1` and `x + 3y = 11`.
4. Solve by substitution: `y = −2x + 8` and `2x + y = 8`. What
   happens? What does the result mean?
5. Solve by substitution: `y = 5x − 3` and `2x + y = 11`.
6. **Error analysis:** Sam solved `y = x + 1` and `2x − y = 3` as
   follows: "Substitute: `2x + x + 1 = 3`, so `3x = 2`, so
   `x = 2/3` and `y = 5/3`." Find Sam's error, explain why it
   breaks the equation, and give the correct solution with a check.

## Application

A streaming plan charges $5 per month plus $2 per movie; a second
plan charges $3 per movie with no monthly fee. Let `m` be movies
per month and `C` be the monthly cost. Write the system, solve it by
substitution, and say after how many movies the plans cost the same
and what that cost is. (The plans are `C = 2m + 5` and `C = 3m`.)

## Exit check

Solve by substitution: `y = x + 6` and `2x + y = 21`. Check your
answer in both equations.

## Supports, alternate modes, extension

- **Language access:** "Substitute" means "put one thing in place
  of another thing that is equal to it." "Back-substitute" means
  "put the value you just found back into an equation to find the
  other value." Keep both sentences visible during the lesson.
- **Alternate response mode:** Work the substitution step orally
  ("replace y with 3x") before writing; the adult scribes the
  arithmetic.
- **Extension:** Solve `y = 2x − 5` and `3x + 2y = 4` by
  substitution, then solve the same system by graphing and confirm
  both methods give the same point. (Answer: substitute to get
  `3x + 2(2x − 5) = 4`, so `7x = 14`, `x = 2`, `y = −1`.)

## Teacher note

Watch for the classic error in this lesson: substituting without
parentheses and losing a minus sign — `2x − y` with `y = x + 1`
becomes `2x − (x + 1)`, not `2x − x + 1`. Insist on the parentheses
around every substituted expression, and on the check in both
original equations: a sign slip almost always fails the check.
Answer-key reference:
[answer-key.md](../answer-key.md#lesson-03).

*Two items in this lesson are adapted, with solutions re-derived,
from the track's legacy
`quizzes/systems-of-linear-equations-by-graphing-substitution-quiz.md`
(questions 3, 4, 5, 6, 8); the legacy file keeps its inline key and
remains an untaught practice bank.*
