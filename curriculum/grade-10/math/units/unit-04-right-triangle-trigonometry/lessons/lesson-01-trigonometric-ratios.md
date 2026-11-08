# Lesson 01 — Sine, Cosine, and Tangent: Ratios That Belong to the Angle

**Unit 04 · Week 15, Session 1 · ~50 minutes**

**Goal (learner-facing):** I can define sine, cosine, and tangent for
an acute angle, explain why each ratio depends only on the angle, use
the complementary-angle relationship, and give exact values for 30°,
45°, and 60°.

**Materials:** this lesson, notebook, ruler, protractor, calculator
(degree mode — check it now).

**Readiness check (5 min):** Draw a right triangle with legs 3 cm and
4 cm. Measure the hypotenuse (it should be 5 cm). Now draw a second
right triangle with the same acute angles but legs 6 cm and 8 cm. Its
hypotenuse is 10 cm. Compute (opposite leg) ÷ (hypotenuse) for the
same acute angle in both triangles. What do you notice? Keep that
observation — it is the whole lesson.

---

## Part 1 — Why a ratio can belong to an angle (explicit teaching, 12 min)

Name the parts first, because every error in this unit starts with a
misnamed side. In a right triangle, pick one acute angle and call it
θ (theta). Relative to θ:

- The **hypotenuse** is the side opposite the right angle — always the
  longest side, and it never changes its name.
- The **opposite side** is the side across the triangle from θ; it
  does not touch θ.
- The **adjacent side** is the side that touches θ and is not the
  hypotenuse.

Now the readiness observation, made precise. Two right triangles with
the same acute angle θ are similar by AA: they share the right angle
and they share θ, so their third angles match too. Similar triangles
have proportional sides (Unit 03). So if one triangle has opposite
side *o* and hypotenuse *h*, and a larger similar triangle has
opposite side *o′* and hypotenuse *h′*, then *o′*/*h′* = *o*/*h* —
the scale factor cancels. **The ratio does not care how big the
triangle is. It cares only about θ.** That is why the ratio deserves
a name of its own. The three names are:

- **sine of θ:** sin θ = opposite ÷ hypotenuse.
- **cosine of θ:** cos θ = adjacent ÷ hypotenuse.
- **tangent of θ:** tan θ = opposite ÷ adjacent.

A memory aid, used with care: **SOH–CAH–TOA** (Sine = Opposite over
Hypotenuse, Cosine = Adjacent over Hypotenuse, Tangent = Opposite
over Adjacent). The aid is only safe if you first name the sides
relative to θ. Naming them relative to the *other* acute angle gives
the cofunction values instead — which is not an error, as Part 2
shows, but it is a different answer, so name first, compute second.

**Complementary angles.** The two acute angles of a right triangle
add to 90°, so they are complementary. Call them θ and 90° − θ. The
side opposite θ is adjacent to 90° − θ, and vice versa. Therefore:

- sin θ = cos(90° − θ), and cos θ = sin(90° − θ).
- tan θ = 1 ÷ tan(90° − θ) (because opposite and adjacent swap).

In words: the sine of an angle is the cosine of its complement. That
is why the pair is called **cofunctions**. You will use this in
Lesson 05 to check calculator work: if sin 38° ≈ 0.616, then
cos 52° must also be ≈ 0.616.

**Exact values from special triangles.** Most angles need a
calculator, but two triangles give exact values by hand:

- **45–45–90:** legs 1 and 1, hypotenuse √2 (Pythagorean Theorem:
  1² + 1² = 2). So sin 45° = 1/√2 = √2/2, cos 45° = √2/2,
  tan 45° = 1.
- **30–60–90:** start from an equilateral triangle of side 2, cut it
  in half: short leg 1, hypotenuse 2, long leg √3 (1² + (√3)² = 4).
  So sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; and
  sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Notice the 30°/60°
  rows swap — that is the cofunction relationship again.

---

## Part 2 — Working the ratios (modeled reasoning, 15 min)

**Worked example 1 — ratios from a 3–4–5 triangle.** Right triangle
*ABC*, right angle at *C*, *AC* = 4, *BC* = 3, *AB* = 5. Let θ = ∠*A*.

- Opposite θ: *BC* = 3. Adjacent to θ: *AC* = 4. Hypotenuse: 5.
- sin θ = 3/5 = 0.6. cos θ = 4/5 = 0.8. tan θ = 3/4 = 0.75.
- Check: sin²θ + cos²θ = (3/5)² + (4/5)² = 9/25 + 16/25 = 1. This
  always holds (Lesson 05 proves it); a sum that is not 1 means a
  side was misnamed or miscalculated.
- The other acute angle, ∠*B*, is 90° − θ. Its sine is the side
  opposite *B* over the hypotenuse: 4/5 — exactly cos θ, as the
  cofunction relationship promises.

**Worked example 2 — the same angle, a bigger triangle.** Right
triangle *DEF*, right angle at *F*, ∠*D* = θ (the same angle as
above), hypotenuse *DE* = 10. By AA, triangle *DEF* is similar to
triangle *ABC*, with scale factor 2. So *EF* (opposite θ) = 6 and
*DF* (adjacent) = 8. Then sin θ = 6/10 = 0.6, cos θ = 8/10 = 0.8,
tan θ = 6/8 = 0.75 — identical to Example 1. If your ratios ever
change when a triangle is scaled, the triangles were not similar:
check the angles before doubting the ratios.

**Worked example 3 — an exact value, no calculator.** Find the
missing sides of a right triangle with a 30° angle and hypotenuse 14.

- The side opposite 30° is sin 30° × hypotenuse = (1/2) × 14 = 7.
- The side adjacent to 30° is cos 30° × hypotenuse = (√3/2) × 14
  = 7√3 ≈ 12.12.
- Check with Pythagoras: 7² + (7√3)² = 49 + 147 = 196 = 14². ✓
- The third angle is 60°, and indeed the side opposite 60° is 7√3
  (sin 60° × 14 = (√3/2) × 14) — consistent.

---

## Guided practice (with hints)

1. Right triangle, right angle at *C*, *AC* = 5, *BC* = 12,
   *AB* = 13. Let θ = ∠*B*. Name the side opposite θ, the side
   adjacent to θ, and the hypotenuse; then give sin θ, cos θ,
   tan θ. *(Hint: draw the triangle and label θ first; the side
   that does not touch θ is the opposite side.)*
2. A right triangle has acute angle 25° and hypotenuse 20. Without
   computing, explain why sin 25° must be less than 1, and why
   sin 65° equals cos 25°. *(Hint: which side is longest? Which
   angle is complementary to 25°?)*
3. Use the 45–45–90 triangle to find the legs of a right isosceles
   triangle whose hypotenuse is 8√2. *(Hint: each leg is
   sin 45° × hypotenuse.)*

## Independent practice

4. Right triangle with legs 9 and 12 (hypotenuse 15). For the angle
   opposite the leg of length 9, give sin, cos, and tan as fractions.
5. A right triangle has a 60° angle and the side adjacent to 60° is
   6. Find the other two sides exactly (no calculator).
6. Explain in two or three sentences why tan 45° = 1, using the
   45–45–90 triangle — not a calculator display.

## Applied task

7. A ramp rises at an angle of 30° to the horizontal and its sloped
   surface is 6 m long. How high does it rise? Give an exact answer
   and a decimal. (This is the same computation as Worked example 3
   with a story attached; the skill transfers when the triangle is
   not drawn for you.)

## Exit check

8. State sin 30°, cos 60°, and tan 45° from memory, and in one
   sentence say why sin 30° = cos 60°.

## Supports, extension, teacher note

- **Reading/language access:** the words *opposite* and *adjacent*
  are defined by position, not by size — "opposite" means "across
  from," "adjacent" means "next to." Rehearse them by pointing
  before computing.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by labeling a drawn triangle instead of writing ratios.
- **Extension:** prove that tan θ = sin θ ÷ cos θ for any acute
  angle θ, using the definitions (opposite/hypotenuse divided by
  adjacent/hypotenuse). Then explain why tan θ grows without bound
  as θ approaches 90°.
- **Teacher note — likely misconception:** the commonest error is
  naming "opposite" and "adjacent" relative to the right angle or to
  the wrong acute angle. If a learner's sin² + cos² does not equal 1,
  re-name the sides before re-computing. **Answer-key reference:**
  Lesson 01 in `answer-key.md`.
