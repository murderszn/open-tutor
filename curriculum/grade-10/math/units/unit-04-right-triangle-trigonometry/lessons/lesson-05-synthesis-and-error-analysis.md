# Lesson 05 — Synthesis: Errors, Proofs, and the Midyear Map

**Unit 04 · Week 17, Session 11 · ~50 minutes**

**Goal (learner-facing):** I can find and repair the five classic
trigonometry errors, prove sin²θ + cos²θ = 1 and the cofunction
relationship from the definitions, and place this unit's results on
the Units 01–04 map.

**Materials:** this lesson, notebook, calculator (degree mode),
Units 01–03 notes.

**Readiness check (5 min):** A learner writes: "sin 30° = 0.5, so the
side opposite 30° in a triangle with hypotenuse 20 is 0.5." What is
wrong, and what is the correct side? (The ratio is not a length:
opposite = sin 30° × hypotenuse = 0.5 × 20 = 10. A ratio without
its "times what" is an unfinished sentence.) Keep that instinct —
every error below is a sentence left unfinished in some way.

---

## Part 1 — The five classic errors (explicit teaching, 12 min)

**Error 1 — Wrong side named.** Sin uses the opposite side; cos
uses the adjacent side. The names are relative to the angle you
chose. Repair: label the diagram (H, O, A relative to θ) before
writing any ratio.

**Error 2 — Radians instead of degrees.** A calculator in radian
mode reports sin 30 ≈ −0.988 (the sine of 30 *radians*). Repair:
check the mode display before the first computation, and sanity
check: sin of an acute angle in degrees is between 0 and 1.

**Error 3 — The missing eye height (or the missing "plus what").**
See Lesson 02. Repair: end every elevation/depression solution with
the sentence "plus eye height" or "eye height already included."

**Error 4 — The untested supplement (SSA).** Reporting one SSA
solution without testing 180° − *B*. Repair: the supplement test
is a written step, not a mental note.

**Error 5 — Rounding in the middle.** Using tan 38° ≈ 0.78 instead
of 0.7813 through three steps, then reporting four significant
figures. Repair: carry full calculator precision; round once, at
the end, to the precision the measurements justify.

A sixth, quieter error: **trusting the diagram's proportions.**
A sketch is not to scale. If a computed side contradicts the
sketch's look, trust the computation and re-check the setup — but
if a computed side contradicts a *theorem* (longest side opposite
the largest angle, triangle inequality), trust the theorem and
re-check the computation.

## Part 2 — Two proofs that pay old debts (modeled reasoning, 15 min)

**Worked example 1 — the Pythagorean identity.** For any acute
angle θ in a right triangle with opposite side *o*, adjacent side
*a*, hypotenuse *h*: sin θ = *o*/*h*, cos θ = *a*/*h*. Then
sin²θ + cos²θ = *o*²/*h*² + *a*²/*h*² = (*o*² + *a*²)/*h*².
By the Pythagorean Theorem, *o*² + *a*² = *h*², so the fraction is
*h*²/*h*² = 1. **sin²θ + cos²θ = 1, for every acute angle θ.**
This is Pythagoras wearing trigonometry's clothes — and it is a
free error check: any computed sin/cos pair whose squares do not
sum to 1 contains a mistake.

**Worked example 2 — cofunctions, proved, not asserted.** In the
same triangle, the other acute angle is φ = 90° − θ. The side
opposite φ is *a* (the side adjacent to θ), and the hypotenuse is
still *h*. So sin φ = *a*/*h* = cos θ. That is,
**sin(90° − θ) = cos θ**, exactly as Lesson 01 claimed. The same
swap gives cos(90° − θ) = sin θ. Nothing was measured; the
definitions did the work.

**The midyear map (Units 01–04).** Read this chain aloud and check
that each link is one you can now justify:

1. Unit 01: precise definitions and proof — every statement needs a
   reason.
2. Unit 02: congruence is a rigid motion; SSS/SAS/ASA/AAS are earned
   from that definition; SSA does *not* determine a triangle.
3. Unit 03: similarity is a rigid motion plus a dilation; AA gives
   proportional sides; Pythagoras is proved by similarity.
4. Unit 04: proportional sides in similar right triangles *are* the
   trig ratios; the ratios plus Pythagoras solve right triangles;
   an altitude extends the same idea to the laws of sines and
   cosines and the area formula.

Notice what Lesson 02's SSA warning and Lesson 03's ambiguous case
have in common: they are the same fact at two levels of precision —
congruence first, measurement second. That is how a year of
mathematics is supposed to feel: old results returning, sharper.

**Worked example 3 — error repair, full solution.** A learner's
work: "Tower problem: distance 50 m, angle of elevation 47°, eye
height 2 m. Height = 50 × sin 47° = 36.6 m." Find every error.

- The ratio is wrong: the known side (50 m) is *adjacent* to the
  angle, and the unknown is *opposite*, so the ratio is tangent,
  not sine. 50 × tan 47° ≈ 53.62 m.
- The eye height is missing: total height = 53.62 + 2 = 55.62 m,
  about **55.6 m**.
- The reported 36.6 m is also implausible on its face: at 47°,
  nearly 45°, the vertical side should be nearly equal to the
  50 m baseline, not 36.6 m. A 45° sense-check catches this before
  any recomputation: tan 45° = 1, so near 45° the two legs are
  near-equal.

---

## Guided practice (with hints)

1. A learner computes sin θ = 0.6 and cos θ = 0.9 for the same
   angle. Use the Pythagorean identity to show a mistake was made,
   and name the most likely cause. *(Hint: 0.6² + 0.9² = ?)*
2. Prove tan θ = sin θ ÷ cos θ from the definitions, and use it to
   find tan θ when sin θ = 3/5 and cos θ = 4/5. *(Hint: divide the
   two fractions; the hypotenuses cancel.)*
3. A calculator in radian mode gives sin 38 ≈ 0.296. Explain, without
   recomputing, why that value cannot be sin 38°, and state the
   correct value to 3 decimal places (use the cofunction check:
   cos 52° should match). *(Hint: sin 38° must exceed sin 30° =
   0.5, since sine increases on acute angles; sin 38° ≈ 0.616.)*

## Independent practice

4. Find and repair all errors in this work: "Right triangle,
   hypotenuse 10, angle 60°. Adjacent side = 10 × sin 60° = 8.66.
   Opposite side = 10 × cos 60° = 5. So the legs are 8.66 and 5."
   (The numbers are right; something else is wrong.)
5. A learner solves an SSA problem, finds sin *B* = 0.8, reports
   *B* ≈ 53.1°, and stops. What is missing? Give the second
   candidate angle and the test that decides whether it survives.
6. Write the Units 01–04 chain (Part 2) in your own words, in four
   lines, each line naming the unit's one big idea.

## Applied task

7. **Two observations, one height (extension setup).** A treetop is
   sighted at 30° from point *P* and at 45° from point *Q*, where
   *Q* is 80 m closer to the tree than *P* (same eye height, flat
   ground). Let *h* be the height above eye level and *d* the
   distance from *Q* to the tree. Write the two tangent equations,
   solve for *h*, and explain why one observation alone cannot fix
   both *h* and the distance. (Solution: tan 30° = *h*/(*d* + 80),
   tan 45° = *h*/*d* = 1, so *h* = *d*; then
   *h* = (*h* + 80) × tan 30°, giving *h* ≈ 109.3 m above eye
   level. The single-observation equation has two unknowns.)

## Exit check

8. Name the five classic errors from Part 1, and for each, give its
   one-line repair.

## Supports, extension, teacher note

- **Reading/language access:** "identity" here means an equation
  true for *every* angle, not just for one triangle — contrast with
  an equation like sin θ = 0.6, which picks out particular angles.
- **Alternate response mode:** a learner may present the error
  repairs orally, working through one planted error at a time on a
  whiteboard or paper, instead of writing all five.
- **Extension:** prove the sine rule's supplement symmetry
  directly: sin(180° − *B*) = sin *B*, using the cofunction
  relationship and the fact that 180° − *B* = 90° + (90° − *B*).
  (For the ambitious: this is why the SSA ambiguity exists at all.)
- **Teacher note — likely misconception:** learners treat the
  identity sin²θ + cos²θ = 1 as a formula to memorize rather than
  as Pythagoras in disguise. If a learner cannot re-derive it in
  two lines, re-teach Worked example 1 before the assessment.
  **Answer-key reference:** Lesson 05 in `answer-key.md`.
