# Lesson 03 — Beyond Right Triangles: The Laws of Sines and Cosines

**Unit 04 · Week 16, Session 6 · ~50 minutes**

**Goal (learner-facing):** I can derive the laws of sines and
cosines from an altitude, derive the area formula
(1/2)·a·b·sin C, solve a general triangle, and recognize the
ambiguous SSA case.

**Materials:** this lesson, notebook, protractor, calculator (degree
mode).

**Readiness check (5 min):** In triangle *ABC*, side *a* is opposite
angle *A*, side *b* opposite *B*, side *c* opposite *C* — the
standard naming, used for the whole lesson. If *A* = 40°, *B* = 70°,
and *c* = 10, what is *C*? (180° − 40° − 70° = 70°.) Note that
*B* = *C*, so the triangle is isosceles with *b* = *c* = 10. The
laws below will confirm that — and will also handle triangles where
no such shortcut exists.

---

## Part 1 — Deriving the laws from one altitude (explicit teaching, 15 min)

Draw any triangle *ABC* and drop an altitude *h* from vertex *C*
onto side *c* (or its extension). The altitude splits the triangle
into two right triangles, and right triangles are territory we own.

**Law of sines.** In the left right triangle, sin *A* = *h* ÷ *b*,
so *h* = *b*·sin *A*. In the right right triangle,
sin *B* = *h* ÷ *a*, so *h* = *a*·sin *B*. Two expressions for the
same altitude give *b*·sin *A* = *a*·sin *B*, i.e.,

- *a* ÷ sin *A* = *b* ÷ sin *B*.

Repeating with an altitude from another vertex gives the full law:

- **a ÷ sin A = b ÷ sin B = c ÷ sin C.**

Use it when you know an angle–side opposite pair (ASA, AAS) — the
law pairs each side with the sine of its opposite angle, so one
complete pair unlocks the rest.

**Law of cosines.** Keep the same altitude, but now let it meet side
*c* at point *D*, splitting *c* into segments *x* (adjacent to *A*)
and *c* − *x*. In the left right triangle, cos *A* = *x* ÷ *b*, so
*x* = *b*·cos *A*; and by Pythagoras, *h*² = *b*² − *x*². In the
right right triangle, *a*² = *h*² + (*c* − *x*)². Substituting:

- *a*² = (*b*² − *x*²) + (*c* − *x*)² = *b*² + *c*² − 2*cx*
  = *b*² + *c*² − 2*b**c*·cos *A*.

So **a² = b² + c² − 2bc·cos A**, with matching forms for the other
sides. Use it when you know two sides and the included angle (SAS),
or all three sides (SSS, solving for an angle by rearranging).
Notice it *contains* Pythagoras: if *A* = 90°, cos *A* = 0 and the
correction term vanishes, leaving *a*² = *b*² + *c*². The law of
cosines is Pythagoras with a correction for the angle not being
right — the correction is negative when the angle is acute (the
opposite side is shorter than Pythagoras would give) and positive
when it is obtuse.

**Area formula.** The area of triangle *ABC* is (1/2)·base·height =
(1/2)·*c*·*h*. But *h* = *b*·sin *A* from above, so
area = (1/2)·*c*·*b*·sin *A*. In general:

- **Area = (1/2)·a·b·sin C** (half the product of two sides times
  the sine of their included angle).

Any pair of sides and their included angle works; the formula needs
the *included* angle, not just any angle.

**The ambiguous case (SSA).** Suppose you know side *a*, side *b*,
and angle *A* — but *A* is not between the known sides. The law of
sines gives sin *B* = *b*·sin *A* ÷ *a*. If that value exceeds 1,
no triangle exists. If it equals 1, exactly one (right) triangle
exists. If it is between 0 and 1, *two* angles have that sine:
*B* and 180° − *B*. Each is a candidate — but a candidate only
survives if *A* + *B* < 180°. So SSA can yield zero, one, or two
triangles, and a solution that reports only one without checking the
supplement is incomplete. Geometrically, the side of length *a*
swings on an arc from the end of side *b* and may cut the base ray
twice. This is the same SSA warning from Unit 02's congruence
criteria — now with numbers attached.

---

## Part 2 — Working the laws (modeled reasoning, 15 min)

**Worked example 1 — law of sines (AAS).** *A* = 40°, *B* = 70°,
*c* = 10. Then *C* = 70° (readiness check). Using
*a* ÷ sin *A* = *c* ÷ sin *C*:

- *a* = 10 × sin 40° ÷ sin 70° ≈ 10 × 0.6428 ÷ 0.9397 = 6.84.
- *b* = 10 × sin 70° ÷ sin 70° = 10 — confirming the isosceles
  observation. A solution that contradicts a known symmetry is
  wrong; here the law agrees with it.

**Worked example 2 — law of cosines (SAS) and the area formula.**
*b* = 7, *c* = 9, *A* = 60°. Find *a* and the area.

- *a*² = 7² + 9² − 2 × 7 × 9 × cos 60° = 49 + 81 − 126 × 0.5
  = 130 − 63 = 67, so *a* = √67 ≈ 8.19.
- Area = (1/2) × 7 × 9 × sin 60° = 31.5 × (√3/2) ≈ 27.28.
- Check: *a* should be the side opposite the 60° angle, between
  the other two sides in size — 8.19 sits between 7 and 9. ✓
  (For comparison, Pythagoras without the correction would give
  √130 ≈ 11.40 — far too long, because the 60° angle pulls the
  endpoints together.)

**Worked example 3 — the ambiguous case, both solutions.**
*a* = 10, *b* = 14, *A* = 30°. Find the possible triangles.

- sin *B* = *b*·sin *A* ÷ *a* = 14 × 0.5 ÷ 10 = 0.7.
- *B* ≈ 44.4° or *B* ≈ 180° − 44.4° = 135.6°. Check both:
  30° + 44.4° = 74.4° < 180° ✓; 30° + 135.6° = 165.6° < 180° ✓.
  Both survive — two triangles.
- Triangle 1: *C* = 180° − 30° − 44.4° = 105.6°;
  *c* = 10 × sin 105.6° ÷ sin 30° ≈ 10 × 0.9633 ÷ 0.5 = 19.27.
- Triangle 2: *C* = 180° − 30° − 135.6° = 14.4°;
  *c* = 10 × sin 14.4° ÷ sin 30° ≈ 4.98 (full precision; 4.97
  if sin 14.4° is rounded to 0.2487 first — round only at the end).
- Sanity: the larger angle *B* (135.6°) pairs with the smaller
  third side (4.98)? No — wait. Check: in Triangle 2 the angles
  are 30°, 135.6°, 14.4°, so the longest side must be opposite
  135.6°, namely *b* = 14, and the shortest opposite 14.4°,
  namely *c* = 4.98. Longest 14, shortest 4.98, middle 10. ✓
  Always run this ordering check on an ambiguous case: biggest
  angle ↔ longest side.

---

## Guided practice (with hints)

1. *A* = 50°, *B* = 65°, *a* = 12. Find *C* and the other two
   sides. *(Hint: find C first; then use one complete angle–side
   pair. Notice anything about B and C?)*
2. Sides *b* = 10, *c* = 14, included angle *A* = 45°. Find *a* and
   the triangle's area. *(Hint: law of cosines for a; the area
   formula needs the included angle — which is A.)*
3. SSA: *a* = 8, *b* = 12, *A* = 40°. How many triangles are there?
   Give each triangle's angles and its third side.
   *(Hint: compute sin B, then test both B and 180° − B against
   the 180° sum.)*

## Independent practice

4. A triangle has sides 6, 8, 10. Find its largest angle, and
   explain why the answer had to be what it is before computing.
5. Find the area of a triangle with sides 8 and 11 and included
   angle 35°.
6. Explain, in your own words, why the law of sines cannot be used
   to solve a triangle when the known parts are SSS, and which law
   you would use instead.

## Applied task

7. A surveyor stands at point *P* and sights a distant tower *T*.
   From a second point *Q*, 120 m from *P*, the angles of the
   triangle *PQT* at *P* and *Q* are 52° and 68°. How far is the
   tower from *Q*? (This is a law-of-sines surveying problem: the
   known side is *PQ*, and the side asked for is opposite the angle
   at *P*.)

## Exit check

8. You know two sides and the angle *between* them. Which law do
   you use, and why would the law of sines be a poor first choice
   there? Answer in two sentences.

## Supports, extension, teacher note

- **Reading/language access:** "included angle" means the angle
  *between* the two known sides; "included side" means the side
  *between* two known angles. Point to the included part before
  choosing a law.
- **Alternate response mode:** a learner may construct the SSA
  case with compass and straightedge (swing the arc, count the
  intersections) instead of computing both solutions first.
- **Extension:** prove that the common value
  *a* ÷ sin *A* = *b* ÷ sin *B* = *c* ÷ sin *C* equals the
  circumdiameter 2*R* of the triangle, using a diameter through
  one vertex.
- **Teacher note — likely misconception:** learners apply the law
  of sines to SAS (no complete angle–side pair exists there) and
  report only one SSA solution. Require the "supplement test" as a
  written step for every SSA problem. **Answer-key reference:**
  Lesson 03 in `answer-key.md`.
