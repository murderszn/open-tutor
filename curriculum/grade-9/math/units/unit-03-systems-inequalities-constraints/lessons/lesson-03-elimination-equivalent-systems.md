# Lesson 03 — Elimination and Equivalent Systems

**Goal:** I can solve a system by elimination, prove the step keeps the
same solutions, and classify a system as one solution, infinitely many,
or no solution.
**Time:** 50 minutes · **Materials:** notebook.

## Readiness check (5 min)

Add the equations `x + y = 10` and `x − y = 2` left sides together and
right sides together. If you got `2x = 12`, you are ready: adding
equations is today's whole method — the question is why it is legal.

## Teaching: elimination adds equations to delete a variable (15 min)

**Elimination** works like this: arrange both equations so that one
variable has opposite coefficients, then add the equations. That
variable cancels, leaving one equation in one variable. Solve it, then
substitute back into either original equation for the other value.

If the coefficients are not already opposites, multiply one (or both)
equations by a nonzero constant first. Multiplying every term of an
equation by the same nonzero number does not change its solutions —
that is Unit 01 reasoning — so the system keeps the same solutions.

### Why adding is legal: equivalent systems

Two systems are **equivalent** when they have exactly the same
solutions. Replacing one equation by the sum of it and a multiple of
the other produces an equivalent system (A-REI.5). Here is why, in one
direction and back:

- Forward: if a pair satisfies both original equations, then the left
  sides are equal to the right sides, so their sum is also equal — the
  pair satisfies the new equation too.
- Backward: the original equation you replaced can be recovered by
  subtracting — the new equation minus the equation you added — so any
  pair satisfying the new system also satisfies the original one.

Nothing is lost and nothing is gained. That reversibility is the whole
justification, and it is what you write when a task asks you to
"justify elimination."

### Worked example 1 — add directly, then justify

> Solve `x + y = 10` and `x − y = 2` by elimination.

1. Add: `(x + y) + (x − y) = 10 + 2`, so `2x = 12` and `x = 6`.
2. Substitute into the first equation: `6 + y = 10`, so `y = 4`.
3. Check: `6 + 4 = 10` ✓; `6 − 4 = 2` ✓. Solution: `(6, 4)`.
4. Justification: the new system `x + y = 10`, `2x = 12` is equivalent
   to the original, because the second original equation can be
   recovered as `(2x = 12) − (x + y = 10)`, i.e. `x − y = 2`.

### Worked example 2 — multiply first, then add

> Solve `2x + 3y = 12` and `x + y = 5` by elimination.

1. The `y` coefficients are `3` and `1`. Multiply the second equation
   by `−3` (every term): `−3x − 3y = −15`.
2. Add to the first equation: `(2x + 3y) + (−3x − 3y) = 12 + (−15)`,
   so `−x = −3` and `x = 3`.
3. Substitute into `x + y = 5`: `3 + y = 5`, so `y = 2`.
4. Check: `2(3) + 3(2) = 12` ✓; `3 + 2 = 5` ✓. Solution: `(3, 2)`.

### Worked example 3 — three possible endings

> (a) `y = 2x + 1` and `y = 2x − 3`. (b) `2x + 2y = 6` and `x + y = 3`.
> (c) `x + y = 4` and `x − y = 0`.

1. (a) Set equal: `2x + 1 = 2x − 3` gives `1 = −3`, false. The lines
   are parallel (same slope, different intercepts): **no solution**,
   an inconsistent system.
2. (b) Divide the first equation by 2: `x + y = 3` — the same line as
   the second. Every point on the line works: **infinitely many
   solutions**, written as all pairs `(x, 3 − x)`; a dependent system.
3. (c) Add: `2x = 4`, `x = 2`, `y = 2`. The lines cross once:
   **one solution**, `(2, 2)`; an independent system.

## Guided practice (10 min, with hints)

1. Solve `3x + y = 11` and `x − y = 1` by elimination.
   *Hint: which variable cancels if you add as written?*
2. Solve `x + 2y = 8` and `3x − 2y = 4` by elimination.
   *Hint: the `y` coefficients are already opposites.*
3. Classify `y = −x + 4` and `2x + 2y = 8`: one, infinitely many, or
   none? *Hint: divide the second equation by 2 first.*
4. Classify `2x − y = 3` and `2x − y = 7`: one, infinitely many, or
   none? *Hint: can one pair make the same expression equal two
   different numbers?*

## Independent practice (10 min)

1. Solve `2x − y = 5` and `x + y = 4` by elimination.
2. Solve `4x + 3y = 11` and `2x − 3y = 1` by elimination.
3. Solve `3x + 2y = 10` and `x − 2y = −2` by elimination.
4. Solve `5x − 2y = 9` and `3x + 2y = 11` by elimination. (Fractions
   are acceptable answers — check them in both equations.)
5. Classify `x + 3y = 6` and `2x + 6y = 12`, with a reason.
6. Classify `y = 3x − 2` and `3x − y = 5`, with a reason.

## Application (5 min)

Two numbers have sum 27 and difference 5. Write the system, solve it
by elimination, and name the two numbers. (Let the larger number be
`x` and the smaller be `y`, so `x − y = 5`.)

## Exit check (5 min)

Solve `2x + 5y = 17` and `4x − 5y = 7` by elimination, and write one
sentence justifying why the system you solved after adding has the
same solutions as the original.

## Supports, extension, teacher note

- **Reading/language access:** post the sentence frame "I multiplied
  ___ by ___ so that ___ cancels; the new system is equivalent because
  ___" and let learners fill it in before computing.
- **Alternate response mode:** a learner may sort pre-written systems
  into "one / infinite / none" piles by comparing slopes and
  intercepts, then solve one system from each pile.
- **Extension:** prove that multiplying an equation by `0` would
  *not* preserve the solution set (it turns the equation into `0 = 0`,
  which every pair satisfies), and explain why elimination always
  multiplies by a *nonzero* constant.
- **Teacher note — misconception:** learners often multiply only part
  of an equation (the `x` term but not the constant). Insist on
  "every term, both sides" and have them rewrite the full multiplied
  equation before adding. **Answer key:** `answer-key.md`, Lesson 03.
