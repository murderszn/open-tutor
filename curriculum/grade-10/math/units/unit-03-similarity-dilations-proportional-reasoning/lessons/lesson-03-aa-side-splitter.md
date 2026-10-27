# Lesson 03 — The AA Criterion, the Side-Splitter Theorem, and Pythagoras by Similarity

**Goal:** You will prove triangles similar with just two angles,
prove that a line parallel to one side divides the other two
proportionally (and conversely), and prove the Pythagorean Theorem
using similarity. **Time:** ~50 minutes. **Materials:** notebook,
grid paper, ruler, protractor.

## Readiness check (5 minutes)

1. The angles of a triangle are 40° and 75°. What is the third
   angle? (Answer: 180 − 40 − 75 = 65°.)
2. In ΔABC, D is on AB with AD = 3 and DB = 6. What is AD/AB?
   (Answer: 3/9 = 1/3.)
3. From Unit 02: if two triangles have two pairs of corresponding
   angles equal, what about the third pair? (Answer: equal, by
   the 180° angle sum.)

## Teaching

### The AA criterion (G-SRT.3)

> **AA criterion.** If two angles of one triangle equal two angles
> of another triangle (in matching order), then the triangles are
> similar.

*Why this is true — the proof in outline.* Suppose ΔABC and
ΔDEF have angle A = angle D and angle B = angle E. Then angle C
= angle F as well (180° sum). Now use the definition: dilate
ΔABC by the factor k = DE/AB, centered at a point that carries
A to D (a rigid motion first, if needed, to align the figures).
The dilated triangle has sides in ratio k to ΔABC, has the same
angles as ΔABC, and shares the side DE with ΔDEF along the same
ray structure; because its angles match ΔDEF's and it shares two
vertices' worth of angle placement, it coincides with ΔDEF by
the ASA congruence argument of Unit 02. So a similarity
transformation carries ΔABC onto ΔDEF. The triangles are
similar — and, crucially, their sides are proportional even
though we never measured a side of ΔDEF beyond DE.

The practical payoff: to prove two triangles similar, you now
need only **two** angle equalities. The third angle and the side
proportions follow. This is the single most-used similarity tool
in geometry — and it is why Lesson 02's "angle check alone is not
enough" warning had the qualifier "for figures that are not
triangles": for triangles, AA *earns* the side proportions.

### The triangle-proportionality theorem (G-SRT.4)

> **Side-splitter theorem.** If a line parallel to one side of a
> triangle intersects the other two sides, then it divides those
> two sides proportionally.

Precisely: in ΔABC, if D is on AB, E is on AC, and DE ∥ BC, then
AD/DB = AE/EC (equivalently AD/AB = AE/AC).

*Proof (vectors, as directed segments — the cleanest route).*
Write vectors from A: let **b** be the vector AB and **c** the
vector AC. Since D lies on AB, D = λ**b** for some number λ
(so AD/AB = λ). Since E lies on AC, E = μ**c** for some μ (so
AE/AC = μ). The segment DE is the vector μ**c** − λ**b**, and
BC is **c** − **b**. DE ∥ BC means DE is a scalar multiple of
BC: μ**c** − λ**b** = t(**c** − **b**) for some t. Rearranged:
(μ − t)**c** + (t − λ)**b** = 0. But **b** and **c** point in
different directions (they form a triangle), so the only way a
combination of them is zero is if both coefficients are zero:
μ − t = 0 and t − λ = 0. Hence μ = λ = t. So AD/AB = AE/AC = λ,
and therefore AD/DB = λ/(1 − λ) = AE/EC. ∎

*Converse.* If a line divides two sides of a triangle
proportionally (AD/DB = AE/EC), then it is parallel to the third
side. (Proof sketch: draw through D the line parallel to BC; by
the theorem it meets AC at a point E′ with AD/DB = AE′/E′C; but
the given line meets AC at E with the same ratio, and only one
point of AC divides it in a given ratio — so E′ = E, and the
given line is the parallel one. The uniqueness of the
ratio-point is the step to state explicitly.)

### Pythagoras, proved by similarity (G-SRT.4)

> **Theorem.** In a right triangle, a² + b² = c², where c is the
> hypotenuse.

*Proof.* Let ΔABC be right-angled at C, with BC = a, AC = b,
AB = c. Draw the altitude from C to the hypotenuse AB, meeting
it at D. The altitude splits ΔABC into two smaller triangles,
ΔACD and ΔCBD, each sharing an acute angle with ΔABC (angle A
for ΔACD, angle B for ΔCBD) and each having a right angle — so
by AA, ΔACD ~ ΔABC and ΔCBD ~ ΔABC.

From ΔACD ~ ΔABC (matching the right angles and angle A):
AC/AB = AD/AC, i.e., b/c = AD/b, so **b² = AD · c**.
From ΔCBD ~ ΔABC (matching the right angles and angle B):
BC/AB = BD/BC, i.e., a/c = BD/a, so **a² = BD · c**.
Adding: a² + b² = (BD + AD) · c = c · c = c², since D lies on
AB and AD + BD = AB = c. ∎

Notice what this proof buys: the same altitude also gives the
geometric-mean relationships (b² = AD · c and a² = BD · c) and,
by a similar argument, CD² = AD · BD — the extension task in
this lesson's practice.

### A useful diagram (exact, deterministic)

Triangle ABC is right-angled at C, with A(0, 0), B(5, 0),
C(1.8, 2.4) — a 3-4-5 triangle: AC = √(1.8² + 2.4²) = √9 = 3,
BC = √(3.2² + 2.4²) = √16 = 4, and the vectors CA and CB are
perpendicular (their dot product is (−1.8)(3.2) + (−2.4)(−2.4) =
0). The altitude from C meets the hypotenuse AB (the x-axis)
at D(1.8, 0), splitting it into AD = 1.8 and DB = 3.2. Check the
similarity relationships: AC² = 9 = 1.8 · 5 = AD · AB, and
BC² = 16 = 3.2 · 5 = DB · AB — exactly the products the proof
above predicts.

Text-only alternative: "A right triangle has hypotenuse AB = 5
and legs AC = 3, BC = 4. The altitude from the right angle meets
the hypotenuse at D, splitting it into AD = 1.8 and DB = 3.2.
Check: 3² = 1.8 · 5 = 9, and 4² = 3.2 · 5 = 16."

## Worked Example 1 — AA in action

In ΔABC, the right angle is at B, angle A is marked equal to
angle D of ΔDEF, and the right angle of ΔDEF is at F. The sides
of ΔABC are AB = 6, BC = 8, AC = 10 (a 6-8-10 right triangle).
The hypotenuse of ΔDEF is 15. Prove the triangles similar and
find the other two sides of ΔDEF.

*Reasoning.* Two angle pairs match: the marked acute angles
(A and D) and the right angles (B and F). The correspondence is
therefore A ↔ D, B ↔ F, C ↔ E (the remaining angles match by
the 180° sum). By AA, the triangles are similar.

The scale factor from ΔABC to ΔDEF comes from corresponding
hypotenuses: the hypotenuse of ΔABC is AC = 10 (opposite the
right angle B), and the hypotenuse of ΔDEF is DE = 15 (opposite
the right angle F). So k = 15/10 = 1.5. The legs scale by the
same factor: AB = 6 → 6 · 1.5 = 9; BC = 8 → 8 · 1.5 = 12. So
ΔDEF has sides 9, 12, 15. Check: 9² + 12² = 81 + 144 = 225 =
15². ✓

*Lesson of the example:* write the correspondence from the
angles first, not from the order the triangles happen to be
named in. Matching angles before sides prevents the classic
hypotenuse mix-up.

## Worked Example 2 — the side-splitter, numerically

In ΔABC, AB = 12, AC = 9. Point D is on AB with AD = 4, and
DE ∥ BC meets AC at E. Find AE and EC.

*Reasoning.* By the side-splitter theorem, AD/AB = AE/AC, so
4/12 = AE/9, giving AE = 9 · (1/3) = 3. Then EC = AC − AE = 9 − 3
= 6. Check with the other form: AD/DB = 4/8 = 1/2, and AE/EC =
3/6 = 1/2. ✓ Both forms agree, as they must.

## Guided practice (with hints)

**G1.** Two triangles have angles 50° and 60° (first triangle)
and 60° and 70° (second triangle). Are they similar? *Hint:
find the third angle of each.* (Answer: yes — both have angle
sets {50°, 60°, 70°}, so AA applies with the 50° angles matched
and the 60° angles matched.)

**G2.** In ΔABC, D is on AB with AD = 2, DB = 3; a line through D
parallel to BC meets AC at E with AE = 4. Find EC. *Hint:
AD/DB = AE/EC.* (Answer: 2/3 = 4/EC, so EC = 6.)

**G3 (error analysis).** A learner writes: "DE divides AB and
AC proportionally, so DE ∥ BC — and also, any line that cuts
two sides in *any* ratio is parallel to the third side." Which
half is right? (Answer: the first half is the converse, correctly
stated — but only when the *same* ratio holds on both sides
(AD/DB = AE/EC). A line cutting the sides in *different*
ratios is not parallel. The learner's second half drops the
equal-ratio condition.)

**G4.** Use the altitude-to-hypotenuse argument to prove, for a
right triangle with hypotenuse 13 and one leg 5, that the other
leg is 12 — without using a² + b² = c² directly. *Hint: find
the segments of the hypotenuse first.* (Answer: leg² = segment
· hypotenuse: 5² = 25 = segment · 13, so the adjacent segment
is 25/13; the other segment is 13 − 25/13 = 144/13; the other
leg² = (144/13) · 13 = 144, so the leg is 12. This *is* the
similarity proof, run backwards from a leg.)

## Independent practice

Do Practice Set C (`practice.md`). It continues this lesson's
skills: AA proofs, side-splitter computations and proofs, the
converse, and the similarity proof of Pythagoras.

## Application

A triangular park has AB = 60 m along a road and AC = 45 m along
a path, with the third side BC along a river. A straight
walking path parallel to the riverbank (BC) crosses AB at a
point D that is 20 m from A. Where does the path meet AC?

*Reasoning.* The path is parallel to BC, so by the side-splitter
theorem AD/AB = AE/AC, where E is the meeting point on AC:
20/60 = AE/45, so AE = 45 · (1/3) = 15 m from A — and therefore
45 − 15 = 30 m from C. The path divides both sides in the ratio
1:2 (20:40 on AB, 15:30 on AC). If the path were *not* parallel
to the riverbank, this proportion would fail — which is exactly
what the converse lets you test in the field.

## Exit check

State the AA criterion in one sentence, and state the
side-splitter theorem in one sentence. Then: in ΔABC, DE ∥ BC
with AD = 5, DB = 10, AE = 6 — find EC. (Answers: AA: two
matching angle pairs imply similarity. Side-splitter: a line
parallel to one side divides the other two proportionally. EC:
5/10 = 6/EC, so EC = 12.)

## Supports and extensions

- **Support:** for every AA argument, write the two angle
  equalities in a two-column "angle | reason" list before
  concluding similarity (reasons: vertical angles, parallel-line
  theorems, angle sum, given).
- **Support:** draw the small triangle and the large triangle
  separately, in the same orientation, before writing a
  proportion — most side-splitter errors are orientation errors.
- **Extension:** prove CD² = AD · BD for the altitude to the
  hypotenuse (ΔACD ~ ΔCBD by AA), and use it to find an altitude
  length from the hypotenuse segments.
- **Extension:** prove the SSS and SAS similarity criteria from
  the dilation definition (hint for SAS: dilate one triangle so
  the included sides match, then use SAS congruence).

## Teacher note

The vector proof of the side-splitter theorem is rigorous but
abstract; if a learner is not ready for vectors, the area proof
is the fallback (triangles sharing an altitude have areas in
ratio of their bases — prove AD/DB = AE/EC via the two area
ratios through the common vertex). Either proof earns the
theorem; do not accept "it looks proportional" as a proof. In
the diagram paragraph, have learners verify the 3-4-5 claims
themselves (distances and the dot product) before using the
altitude values.
Answer-key reference: `answer-key.md`, Lesson 03 and Practice
Set C.
