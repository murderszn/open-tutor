# Lesson 05 — Cube Roots and x³ = p

**Student goal:** I can evaluate cube roots of perfect cubes and solve
equations of the form x³ = p.
**Time:** ~45 minutes · **Unit:** [U01](../README.md) · **Session 9 of 16**

## Materials

- Notebook, pencil, linking cubes or sugar cubes (optional, for the
  geometry link)
- [L4](lesson-04-square-roots-x2-equals-p.md) notes (compare solution counts)

## Readiness check (5 minutes)

Compute: 4³, 6³, 10³, (−3)³, (−5)³. (Expected: 64, 216, 1000, −27, −125.)
Then: "Yesterday, x² = −25 had no solution. What about x³ = −27?" Let the
contrast land before teaching.

## Teaching

The **cube root** of a number a, written ∛a, is the number that *cubes* to
a. So ∛27 = 3, because 3³ = 27. Unlike square roots, cube roots work for
negative numbers too: ∛(−64) = −4, because (−4)³ = −64.

> **∛a = "the number whose cube is a"** (sign follows a)

A **perfect cube** is a whole number that is some integer cubed: 1, 8, 27,
64, 125, 216, 343, 512, 729, 1000. Notice the sign rule: cubing preserves
sign (positive³ = positive, negative³ = negative), so every real number —
positive, negative, or zero — has exactly one real cube root.

Solving **x³ = p** therefore always gives exactly one real solution:

> **x³ = p → x = ∛p (one real solution, whatever sign p has)**

Compare with Lesson 04: x² = p has two solutions (p > 0), one (p = 0), or
none (p < 0) — because squaring erases sign. Cubing keeps sign, so nothing
is lost and nothing doubles up.

**Geometry connection:** a cube with volume V has edge length ∛V. A storage
cube holding 512 cm³ has edge ∛512 = 8 cm.

**Key vocabulary:** *cube root (∛)*, *perfect cube*.

## Worked example 1 — evaluating cube roots

Evaluate: ∛216, ∛1000, ∛(−125), −∛27.

- ∛216 = 6, because 6³ = 216. (Bracket: 5³ = 125 < 216 < 343 = 7³.)
- ∛1000 = 10, because 10³ = 1000.
- ∛(−125) = −5, because (−5)³ = −125. The negative lives *inside* the
  root — and that is allowed for cube roots.
- −∛27 = −(∛27) = −3. Here the negative is outside: negate after
  evaluating.

**Reasoning to name aloud:** ask "where is the minus?" Inside the cube
root, it survives (∛(−125) = −5). Outside, it negates the result
(−∛27 = −3). Same placement rule as square roots — but inside is legal
here.

## Worked example 2 — solving x³ = p

Solve y³ = −64.

> y = ∛(−64) = −4. Check: (−4)³ = −64 ✓. One solution — done.

Solve x³ = 100.

> x = ∛100. 4³ = 64 < 100 < 125 = 5³, so 4 < ∛100 < 5 (about 4.64). The
> solution is exact as ∛100; the decimal is an approximation.

**Reasoning to name aloud:** for x³ = p, take the cube root of both sides
once — no ±, no case split. Then ask whether the answer should be exact
(∛100) or approximate (4.6), depending on what the problem wants.

## Guided practice (adult stays close, hints allowed)

1. Evaluate ∛64. *(Hint: "Which integer cubes to 64?")* Expected: 4.
2. Evaluate ∛(−8). *(Hint: "Negative inside is fine for cube roots.")*
   Expected: −2.
3. Solve x³ = 27. Expected: x = 3 (only solution).
4. Solve x³ = −125. Expected: x = −5.
5. How many real solutions does x³ = −30 have? *(Hint: "Compare with
   x² = −30.")* Expected: exactly one, x = ∛(−30) ≈ −3.11.
6. Error analysis: "Omar says x³ = 8 has two solutions, x = 2 and x = −2,
   because x² = 64 has two solutions." What's wrong? Expected: cubing
   keeps sign — (−2)³ = −8 ≠ 8, so −2 is not a solution. The ± rule belongs
   to squares, not cubes.

## Independent practice

1. Evaluate: ∛343, ∛1, ∛(−1000), −∛125.
2. Solve, giving the solution set: x³ = 64, x³ = −1, x³ = 0, x³ = 15.
3. A cube-shaped gift box holds 729 cm³. What is its edge length? What if
   it held 700 cm³ — exact edge and one-decimal approximation?
4. Fill in the comparison table from memory, then check against Lessons 04
   and 05:

   | Equation | p > 0 | p = 0 | p < 0 |
   |---|---|---|---|
   | x² = p | ? solutions | ? | ? |
   | x³ = p | ? solution(s) | ? | ? |

*Alternate response mode:* build 4³ = 64 with linking cubes (4×4×4), then
point to the edge and say "the edge is the cube root of the volume."

## Application

Shipping math: a company ships grain in cube-shaped containers. Container
A holds 27 cubic feet, container B holds 64. How much longer is B's edge
than A's? If they build container C with double A's volume (54 ft³), is
C's edge double A's edge? (Expected: A: ∛27 = 3 ft; B: ∛64 = 4 ft —
difference 1 ft. C: ∛54 ≈ 3.78 ft, not 6 ft — doubling volume does *not*
double edge length, because volume grows with the *cube* of the edge.)

## Exit check

"Evaluate ∛(−8) and solve t³ = 343. How many solutions does t³ = 343
have, and why only that many?" Expected: ∛(−8) = −2; t = 7, exactly one
real solution — cubing is one-to-one (it preserves order and sign).
Record: secure / developing / not yet.

## Supports

- **Language access:** "cube root" = "the edge of the volume"; sketch a
  cube and label edge e, volume e³, so ∛V = e reads off the picture.
- **Alternate response mode:** sort equation cards (x² = 36, x³ = 27,
  x² = −16, x³ = −16, …) into "two solutions / one solution / no real
  solution" bins.
- **Sign safety:** color-code the minus sign's position (inside vs.
  outside the radical) until the placement rule is automatic.

## Extension

Find ∛2 to one decimal place by bracketing: 1.2³ = 1.728 < 2 <
2.197 = 1.3³, so 1.2 < ∛2 < 1.3; then 1.26³ = 2.000376… ≈ 2.0004, so
∛2 ≈ 1.26. Is ∛2 rational or irrational? (Irrational — 2 is not a perfect
cube.)

## Teacher note

**Likely misconceptions:** (1) Copying the ± rule from squares to cubes
(Omar's error). (2) "No cube root of a negative" — confusing with square
roots. (3) −∛27 vs. ∛(−27): both equal −3 here, which can mask the
placement rule — use ∛(−125) = −5 vs. −∛125 = −5? No — those are also
equal! Use different magnitudes: ∛(−64) = −4 vs. −∛64 = −4… also equal.
The placement distinction matters for *even* roots (√(−25) undefined vs.
−√25 = −5); for cube roots both placements are valid and equal. Teach the
placement rule with square roots, and teach "inside is legal" for cube
roots.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-05) has
expected responses for all items, including the comparison table (x² = p:
2/1/0 solutions; x³ = p: 1/1/1) and the shipping computation.
