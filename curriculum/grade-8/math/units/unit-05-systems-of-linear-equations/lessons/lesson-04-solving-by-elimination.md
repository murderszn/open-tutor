# Lesson 04 — Solve by Elimination

**Goal (student-readable):** I can solve a system by adding or
subtracting the equations — multiplying first when needed — to
eliminate one variable, and check the answer in both original
equations.
**Time:** ~45 minutes · **Materials:** notebook, pencil.

## Readiness check

Add the two equations `3x + 2y = 19` and `5x − 2y = 13` term by
term. What happens to the `y` terms? (Answer: `2y + (−2y) = 0`,
so the sum is `8x = 32`.) If that feels shaky, warm up by adding
two more pairs of equations before starting.

## Teaching

**Elimination** uses a fact from Unit 03: adding equals to equals
keeps an equation true. If you add the two equations of a system,
left side to left side and right side to right side, you get a new
equation that the solution must also satisfy. When the `y` terms
(or the `x` terms) are opposites, adding makes that variable vanish
— it is *eliminated* — and you are left with one equation in one
variable.

The method, step by step:

1. **Line up** the variables: put both equations in the same form,
   `x` terms under `x` terms, `y` terms under `y` terms.
2. **Choose** the variable to eliminate. If a pair of terms is
   already opposite (like `2y` and `−2y`), add the equations. If a
   pair is already equal (like `4x` and `4x`), subtract them.
   Otherwise, multiply one or both equations by a number so a pair
   becomes opposite or equal — and multiply *every* term, including
   the constant.
3. **Add or subtract** to eliminate the chosen variable, then solve
   the one-variable equation.
4. **Back-substitute** into either original equation to find the
   other variable.
5. **Check** the pair in *both* original equations.

Elimination is the best choice when neither equation is solved for a
variable and the coefficients line up nicely — especially when a
pair of terms is already opposite or equal.

### Worked example 1

**Solve by elimination: `3x + 2y = 19` and `5x − 2y = 13`.**

The `y` terms are opposites (`2y` and `−2y`), so add the equations:

```
 3x + 2y = 19
+5x − 2y = 13
--------------
 8x       = 32
```

So `x = 4`. Back-substitute into the first equation:
`3(4) + 2y = 19` → `12 + 2y = 19` → `2y = 7` → `y = 7/2`. The
solution is `(4, 7/2)`.

Check: first equation, `3(4) + 2(7/2) = 12 + 7 = 19`, true;
second, `5(4) − 2(7/2) = 20 − 7 = 13`, true. A fractional answer
is fine — the check is what confirms it.

### Worked example 2

**Solve by elimination: `4x + 3y = 25` and `4x − y = 13`.**

The `x` terms are equal (`4x` and `4x`), so subtract the second
equation from the first. Watch the signs — subtracting means
flipping every sign in the second equation:

`(4x + 3y) − (4x − y) = 25 − 13` → `4y = 12` → `y = 3`.

Back-substitute into the second equation: `4x − 3 = 13` →
`4x = 16` → `x = 4`. The solution is `(4, 3)`.

Check: `4(4) + 3(3) = 16 + 9 = 25`, true; `4(4) − 3 = 13`, true.

### Worked example 3

**Solve by elimination: `2x + 5y = 20` and `3x + 10y = 35`.**

No pair is opposite or equal yet. The `y` terms are `5y` and `10y`,
so multiply the first equation by `−2` to make `−10y` (multiply
*every* term):

`−2(2x + 5y) = −2(20)` → `−4x − 10y = −40`.

Add that to the second equation: `−4x + 3x = −x`, `−10y + 10y = 0`,
`−40 + 35 = −5`. So `−x = −5`, and `x = 5`. Back-substitute into
the first equation: `2(5) + 5y = 20` → `10 + 5y = 20` → `5y = 10`
→ `y = 2`. The solution is `(5, 2)`.

Check: `2(5) + 5(2) = 10 + 10 = 20`, true; `3(5) + 10(2) = 15 + 20
= 35`, true.

## Guided practice

Work these with the adult; write the equations lined up before
adding or subtracting.

1. Solve by elimination: `3x + 4y = 18` and `2x − 3y = −5`.
   (Hint: multiply to make the `y` terms opposites.)
2. Solve by elimination: `x + y = 7` and `x − y = 3`. Which move
   eliminates a variable with no multiplying at all?

## Independent practice

1. Solve by elimination: `2x + y = 9` and `x + y = 6`.
2. Solve by elimination: `5x − 3y = 23` and `2x + y = 7`.
3. Solve by elimination: `6x − 2y = 10` and `−3x + y = −5`. What
   happens? What does the result mean?
4. Solve by elimination: `2x + 3y = 12` and `4x + 6y = 18`. What
   happens? What does the result mean?
5. Solve by elimination: `2x − y = 7` and `x + y = 5`.
6. **Error analysis:** Dana solved `2x + 3y = 7` and `3x − 3y = 8`
   as follows: "Subtract the second equation from the first:
   `−x + 0y = −1`, so `x = 1`. Then `2(1) + 3y = 7`, so `y = 5/3`."
   Find Dana's error, explain why it breaks the equation, and give
   the correct solution with a check.

## Application

Two numbers have a sum of 48 and a difference of 14. Write the
system (let the numbers be `x` and `y`), solve it by elimination,
and name the two numbers.

## Exit check

Solve by elimination: `x + 2y = 11` and `3x − 2y = 5`. Check your
answer in both equations.

## Supports, alternate modes, extension

- **Language access:** "Eliminate" means "make a variable disappear
  by adding or subtracting." "Back-substitute" means "put the value
  you just found back into an equation to find the other value."
  Keep both sentences visible during the lesson.
- **Alternate response mode:** Work the add/subtract step orally
  ("two y plus negative two y is zero") before writing; the adult
  scribes the arithmetic.
- **Extension:** Solve `7x + 2y = 16` and `5x − 2y = 8` by
  elimination, then solve the same system by substitution and
  confirm both methods give the same point. (Answer: add to get
  `12x = 24`, so `x = 2`; then `14 + 2y = 16`, so `y = 1`.)

## Teacher note

Watch for two errors: (1) multiplying only *some* terms when
preparing an equation — every term, including the constant, gets
multiplied; (2) subtracting without flipping signs — write the
subtraction as "add the opposite" (`−(4x − y) = −4x + y`) until the
habit is automatic. A failed check almost always points at one of
these two moves. Answer-key reference:
[answer-key.md](../answer-key.md#lesson-04).

*Three items in this lesson are adapted, with solutions re-derived,
from the track's legacy
`quizzes/systems-of-linear-equations-by-elimination-word-problems-quiz.md`
(questions 1–4, 7, 8, 11); the legacy file keeps its inline key and
remains an untaught practice bank.*
