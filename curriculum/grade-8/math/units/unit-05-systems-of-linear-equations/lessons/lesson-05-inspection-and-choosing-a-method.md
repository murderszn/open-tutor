# Lesson 05 — Inspection and Choosing a Method

**Goal (student-readable):** I can tell by inspection when a system
has one, none, or infinitely many solutions, and I can choose the
most efficient method to solve it.
**Time:** ~45 minutes · **Materials:** notebook, pencil.

## Readiness check

Write `2x + 2y = 8` in slope-intercept form. (Answer: divide by 2
to get `x + y = 4`, so `y = −x + 4`.) What are its slope and
intercept? (Answer: slope `−1`, intercept `4`.) If that feels
shaky, warm up by rewriting one more equation before starting.

## Teaching

Not every system needs to be solved to be understood. **Inspection**
means reading the equations and recognizing the case before you
compute anything. The test is always the same: compare the two
lines' slopes and intercepts.

- **Different slopes** → the lines must cross once → **one
  solution**. (For example, `y = 2x + 1` and `y = −x + 5` have
  slopes `2` and `−1`.)
- **Same slope, different intercepts** → parallel lines →
  **no solution**. (For example, `y = 3x − 2` and `y = 3x + 4`.)
- **Same slope and same intercept** → the same line →
  **infinitely many solutions**. (For example, `y = 2x + 1` and
  `2y = 4x + 2` — the second is the first multiplied by 2.)

The same three cases show up in algebra. When you solve and the
variables disappear, the result tells you the case — exactly as in
Unit 03: a true statement like `8 = 8` means infinitely many
solutions; a false statement like `−7 = 2` means no solution.

Once you know the case, you still have to solve the one-solution
systems. Choose the method that fits the system:

- **Substitution** when one equation is already solved for a
  variable (`y = ...` or `x = ...`).
- **Elimination** when a pair of terms is already opposite or equal,
  or becomes so after one easy multiplication.
- **Graphing** when you need a picture or an estimate — and always
  as a check on an algebraic answer.

A good solver looks first, then computes. The look takes seconds
and often saves minutes.

### Worked example 1

**Solve by inspection: `3x + 2y = 5` and `3x + 2y = 6`.**

The left sides are identical, but the right sides are different: `5`
and `6`. The same expression `3x + 2y` cannot be `5` and `6` at the
same time. So the system has **no solution** — this is the example
in the standard itself (8.EE.C.8.b). No graphing or algebra needed.
On a graph, these are two parallel lines: same slope, different
intercepts.

### Worked example 2

**Solve by inspection: `x + y = 4` and `2x + 2y = 8`.**

Divide the second equation by 2: `x + y = 4`. It is the *same*
equation as the first, so the two lines are the same line. Every
point on the line satisfies both equations, so the system has
**infinitely many solutions**. Inspection caught it because the
second equation is a multiple of the first.

### Worked example 3

**Choose the best method and solve: `y = 3x − 4` and `2x + 5y = 31`.**

The first equation is already solved for `y`, so substitution is
the efficient choice. Replace `y` in the second equation:

`2x + 5(3x − 4) = 31` → `2x + 15x − 20 = 31` → `17x = 51` →
`x = 3`. Back-substitute: `y = 3(3) − 4 = 5`. The solution is
`(3, 5)`.

Check: `y = 3x − 4` gives `5 = 9 − 4`, true; `2x + 5y = 31` gives
`2(3) + 5(5) = 6 + 25 = 31`, true.

### Worked example 4

**Choose the best method and solve: `3x + 2y = 12` and `5x − 2y = 4`.**

Neither equation is solved for a variable, but the `y` terms are
opposites (`2y` and `−2y`), so elimination by adding is the
efficient choice:

`3x + 5x = 8x`, `2y + (−2y) = 0`, `12 + 4 = 16` → `8x = 16` →
`x = 2`. Back-substitute: `3(2) + 2y = 12` → `2y = 6` → `y = 3`.
The solution is `(2, 3)`.

Check: `3(2) + 2(3) = 12`, true; `5(2) − 2(3) = 4`, true.

## Guided practice

Work these with the adult; say the case (or the chosen method) out
loud before computing.

1. Solve by adding, and name the method: `x + y = 10` and
   `2x − y = 5`.
2. Solve by substitution, and name the method: `y = −x + 7` and
   `3x + 2y = 12`.

## Independent practice

1. Classify by inspection: `2x + y = 3` and `2x + y = 9`. How many
   solutions? Explain in one sentence.
2. Classify by inspection: `y = 5x` and `2y = 10x`. How many
   solutions? Explain in one sentence.
3. Solve by the most efficient method and name it: `4x − y = 5`
   and `x + y = 10`.
4. Solve by substitution: `y = 2x − 3` and `4x − 2y = 6`. What
   happens? What does the result mean?
5. Solve by the most efficient method and name it: `2x + y = 11`
   and `x − y = 4`.
6. **Explain your reasoning:** A learner says, "These two lines
   have the same slope, so the system has no solution." Is that
   always true? Give a counterexample or explain why not.

## Application

Write a system with exactly one solution, solve it by your chosen
method, and explain why you chose that method. Then change one
number so the new system has no solution, and explain the change.

## Exit check

Classify by inspection: `y = −2x + 3` and `4x + 2y = 7`. How many
solutions? Explain with slopes and intercepts.

## Supports, alternate modes, extension

- **Language access:** "By inspection" means "by looking carefully,
  without computing." "Efficient" means "the least work that still
  gives the right answer." Keep both sentences visible during the
  lesson.
- **Alternate response mode:** State the case and the method orally
  before writing any algebra; the adult scribes the solving steps.
- **Extension:** A system has slopes `3` and `3` and intercepts `1`
  and `1`. How many solutions? What if the intercepts are `1` and
  `−4`? Write the two systems in slope-intercept form and explain
  both answers. (Answers: same slope and same intercept → the same
  line → infinitely many solutions; same slope and different
  intercepts → parallel lines → no solution.)

## Teacher note

Watch for the over-generalization in independent item 6: "same slope
means no solution" is false when the intercepts also match. The fix
is the two-part check — slope *and* intercept — every time. Also
watch learners choosing substitution for an elimination-shaped
system (and vice versa): neither is wrong, but ask them to name the
cost — extra distribution steps, or extra multiplication — so the
choice becomes deliberate. Answer-key reference:
[answer-key.md](../answer-key.md#lesson-05).
