# Lesson 04 — Choosing the Right Tool: Surveying, Forces, and Accuracy

**Unit 04 · Week 16, Session 8 · ~50 minutes**

**Goal (learner-facing):** I can decide — before computing — whether
a problem needs a trig ratio, the law of sines, the law of cosines,
or the Pythagorean Theorem; solve surveying and resultant-force
problems; and report an answer with sensible accuracy.

**Materials:** this lesson, notebook, calculator (degree mode).

**Readiness check (5 min):** For each set of known parts, name the
tool *before* any computation: (a) right triangle, hypotenuse 13,
one leg 5; (b) triangle with angles 40° and 80° and the side between
them 9; (c) triangle with sides 7 and 11 and their included angle
50°; (d) triangle with sides 5, 7, 8. (Answers: (a) Pythagoras (or
a ratio — the right angle is known); (b) law of sines; (c) law of
cosines; (d) law of cosines rearranged for an angle. If you named
the tool from the *known parts* rather than from the *unknown*, you
are doing it right — the known parts choose the tool.)

---

## Part 1 — The decision procedure (explicit teaching, 10 min)

Work in this order, every time:

1. **Is there a right angle?** If yes, ratios and Pythagoras are
   available. A ratio solves a side from an angle (or an angle from
   two sides); Pythagoras solves a side from two sides.
2. **Is there a complete angle–side opposite pair?** (You know an
   angle and the side opposite it, plus one more part.) If yes, the
   **law of sines** finishes the triangle — except SSA, where you
   must run the supplement test.
3. **Do you know two sides and the included angle, or all three
   sides?** Then the **law of cosines** is the tool: SAS gives the
   third side; SSS gives an angle.
4. **Is the answer an area?** The area formula needs two sides and
   their *included* angle; if the angle you know is not included,
   find it (or a usable pair) first.

Two traps to check before trusting a result:

- **The tool–parts mismatch.** Applying the law of sines to SAS
  fails because no angle–side pair is complete; applying the law of
  cosines to ASA wastes effort but works only after you have found
  a side — it is the wrong first move, not a wrong law.
- **The impossible triangle.** A computed sine above 1, an angle
  sum above 180°, or a side longer than the sum of the other two
  (triangle inequality) means the given parts cannot form a
  triangle, or a step went wrong. State the impossibility; do not
  report the calculator's error as an answer.

**Accuracy, restated as a rule.** If the inputs carry 2 significant
figures (say, a 30 m baseline and a 36° angle), the answer carries
about 2–3 significant figures. The project rubric enforces this: a
height reported as 23.397 m from a tape-measured baseline is marked
down, not up.

---

## Part 2 — Working the applications (modeled reasoning, 15 min)

**Worked example 1 — surveying with two angles (ASA).** Two
survey stations *P* and *Q* are 120 m apart. From *P*, the angle to
a tower *T* is 52°; from *Q*, the angle to *T* is 68°. How far is
the tower from *P*?

- Angle at *T* = 180° − 52° − 68° = 60°.
- The side asked for, *PT*, is opposite the angle at *Q* (68°);
  the known side *PQ* = 120 m is opposite the angle at *T* (60°).
  That is a complete angle–side pair (60°, 120 m), so the law of
  sines applies: *PT* ÷ sin 68° = 120 ÷ sin 60°.
- *PT* = 120 × sin 68° ÷ sin 60° ≈ 120 × 0.9272 ÷ 0.8660
  = 128.47 m, about **128 m**.
- Check: *PT* is opposite the largest angle (68°), so it should be
  the longest side — 128 m > 120 m ✓. And the distance from *Q*
  (opposite 52°) would be 120 × sin 52° ÷ sin 60° ≈ 109 m,
  shorter, as it must be. ✓

**Worked example 2 — resultant force (law of cosines).** Two forces
of 30 N and 40 N act at a point with a 60° angle between them. What
is the magnitude of their resultant (the single force with the same
effect)?

- Place the forces tail-to-tail, then complete the parallelogram:
  the resultant is the diagonal. In the triangle formed by the two
  forces and the resultant, the angle opposite the resultant is
  180° − 60° = 120° (consecutive angles of a parallelogram are
  supplementary) — or, equivalently, use the vector form
  *R*² = *F*₁² + *F*₂² + 2*F*₁*F*₂·cos θ with θ = 60° between the
  forces.
- *R*² = 30² + 40² + 2 × 30 × 40 × cos 60° = 900 + 1600 + 1200
  = 3700, so *R* = √3700 ≈ 60.83 N, about **61 N**.
- Check: the resultant must exceed each force (60.83 > 40 ✓) but
  be less than their sum (60.83 < 70 ✓). A resultant outside that
  range would betray a sign error in the cosine term — the commonest
  force-problem mistake, since cos 120° is negative and cos 60° is
  positive, and the two forms of the formula differ exactly by that
  sign.

**Worked example 3 — a problem that needs two tools.** A triangular
plot has sides 9 m and 13 m with an included angle of 48°. (a) Find
its area. (b) Find its third side.

- (a) Area = (1/2) × 9 × 13 × sin 48° = 58.5 × 0.7431 ≈ 43.47 m²,
  about **43 m²**.
- (b) Third side: law of cosines,
  *a*² = 9² + 13² − 2 × 9 × 13 × cos 48° = 81 + 169 − 234 × 0.6691
  = 250 − 156.57 = 93.43, so *a* ≈ 9.67 m, about **9.7 m**.
- Check: the third side is opposite the 48° angle, the smallest
  angle in the triangle (the other angles must exceed 48° since
  they sum to 132°), so it should be the shortest side — 9.67 m
  is longer than 9 m, the shortest given side. Contradiction? No:
  the side of 9 m is adjacent to the 48° angle, not opposite any
  computed angle, so "shortest side" here means "opposite the
  smallest angle" — and the smallest angle is not yet known. The
  honest check is the triangle inequality: 9 + 9.67 > 13 ✓, and
  the area check via Heron (semiperimeter 15.83 m) gives
  √(15.83 × 6.83 × 2.83 × 6.16) ≈ √1885 ≈ 43.4 m², agreeing with
  (a). ✓ Two independent routes, one answer — that is what a
  check is for.

---

## Guided practice (with hints)

1. A ship sails from port on a bearing that forms a triangle with
   two known stations 80 km apart; the angles at the stations are
   41° and 73°. Find the ship's distance from the second station.
   *(Hint: find the third angle first; the side you want is
   opposite the first station's angle.)*
2. Two forces of 50 N and 70 N act at 120° to each other. Find the
   resultant's magnitude. *(Hint: decide which cosine sign your
   chosen form needs, and run the range check: between
   |70 − 50| = 20 N and 70 + 50 = 120 N.)*
3. A triangle has sides 9, 10, 15. Find its largest angle.
   *(Hint: largest angle is opposite the longest side; rearrange
   the law of cosines.)*

## Independent practice

4. A triangular garden has sides 12 m and 15 m with included angle
   70°. Find its area and its third side.
5. From a lighthouse 25 m above sea level, the angle of depression
   to a boat is 33°. How far is the boat from the base of the
   lighthouse, horizontally? (Which lesson's tool is this, and why
   is no law needed?)
6. Explain why a triangle with sides 4, 5, and 12 cannot exist, and
   what a law-of-cosines computation would do if you tried it
   anyway (compute cos of the angle opposite 12 and interpret it).

## Applied task

7. **Choose before you compute.** A drone photographs a triangular
   field. The photo's scale gives two sides, 60 m and 80 m, and the
   angle between them, 55°. A second photo gives all three sides of
   a different field: 45 m, 60 m, 75 m. For each field, (a) name the
   tool that finds the missing area or angle, (b) carry out the
   computation, and (c) run one check. (Field 1: area by the area
   formula. Field 2: the 45–60–75 triangle — check Pythagoras first:
   45² + 60² = 2025 + 3600 = 5625 = 75², so it is right-angled and
   no law is needed at all.)

## Exit check

8. Write the four-step decision procedure from Part 1 in your own
   words, in four short lines.

## Supports, extension, teacher note

- **Reading/language access:** "resultant" means "the single force
  that results from combining forces." "Bearing" problems are
  ordinary triangles with compass directions attached; strip the
  compass words first, draw the triangle, then compute.
- **Alternate response mode:** a learner may solve the surveying
  example by scale drawing (1 cm : 10 m) and measuring, then compare
  with the computed 128 m, instead of computing first.
- **Extension:** derive the vector form
  *R*² = *F*₁² + *F*₂² + 2*F*₁*F*₂·cos θ from the law of cosines
  applied to the supplementary angle, and explain the sign change.
- **Teacher note — likely misconception:** learners choose the law
  by what is *asked* rather than by what is *known*. Insist on the
  sentence "I know ___, so I use ___" before any computation.
  **Answer-key reference:** Lesson 04 in `answer-key.md`.
