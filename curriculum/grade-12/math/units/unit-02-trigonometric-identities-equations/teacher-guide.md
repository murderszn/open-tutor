# Teacher Guide — Unit 02: Trigonometric Identities, Equations, and Applications

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**justify every step**: an identity proof is a chain of reasons, and an
equation's solution set is checked in the original equation, not trusted
from the transformed one. Enforce the written reason — "by the
Pythagorean identity," "Quadrant II, so cosine is negative," "checked in
the original" — because the habit is the actual curriculum; the
identities are its vehicle.

This unit sits between Unit 01 (function analysis; draft PR #172, not
yet on `main`) and Unit 03 (vectors, parametric, polar). The
domain-restriction work from Unit 01 Lesson 03 is load-bearing for
Lesson 04's inverse functions: if restricting a domain to invert felt
arbitrary there, revisit it before S8. The equation-checking habit from
Lesson 05 is load-bearing for Unit 03's parametric work, where
squaring to eliminate a parameter also creates extraneous points.

## Pacing notes

- **S5 reading/reference is not optional padding.** The toolkit must be
  rebuildable from the unit circle without notes before sum/difference
  work compounds it. If the learner cannot reproduce the Pythagorean
  and cofunction identities cold at S5, re-teach them in use at S6
  rather than previewing Lesson 03.
- **S9 clinic is the principal-value checkpoint.** A learner who still
  writes `arcsin(sin x) = x` will fail Lesson 05's inverse-based
  solving silently. Use S9 to drill the three principal ranges until
  they are automatic.
- **S15 project studio needs the adult present but not directing.** The
  rubric rewards correct, complete, explained mathematics; the windows
  row requires endpoint checks — an unchecked window earns at most half
  credit for that row, and the learner should know that before writing.
- **S18 quiz is formative:** score it the same day, classify every
  error (concept / algebra / reading), and re-work one error of each
  type with the learner before S19. A learner who cannot yet find both
  solutions per period will lose the most points on the assessment's
  Task 4.
- **S20 debrief sets up Unit 03:** the learner should leave able to say
  which objective is strongest and which needs watching, and to state
  the unit's two most reusable tools (the Pythagorean identity and the
  check-in-the-original rule).

## Lesson-by-lesson notes

### Lesson 01 — Identity toolkit (S1)

Watch for one-sided proof discipline: the learner must not start from
the identity to be proved. If a "proof" begins by writing the identity
itself, stop and restart from one side. Also watch the square-root sign
choice — make the learner write the quadrant before the root, every
time, until it is automatic.

### Lesson 02 — Sum and difference (S3)

The sign flip in the cosine formulas is the week's most tested detail.
Teach the sentence ("cosine of a difference: cosine cosine plus sine
sine") and test it cold at the start of S4. The distance-formula proof
of `cos(A − B)` may be given as a guided read rather than a
from-scratch derivation if time is short, but the learner must be able
to state why rotation preserves the distance — that is the proof's idea.

### Lesson 03 — Double-angle and half-angle (S6)

Half-angle sign errors are the lesson's real content; the formulas are
easy. Require the halved interval written out (e.g., "`θ ∈ (3π/2, 2π)`
so `θ/2 ∈ (3π/4, π)`, Quadrant II") before any root is taken. Accept
the non-root half-angle forms (`tan(A/2) = sin A/(1 + cos A)`) as full
credit wherever they apply.

### Lesson 04 — Inverse functions (S8)

Drill notation explicitly: `sin⁻¹x` is the inverse function, not
`1/sin x` (that is `csc x`). Keep a principal-range card visible for
the whole lesson: arcsin `[−π/2, π/2]`, arccos `[0, π]`, arctan
`(−π/2, π/2)`. The triangle method for compositions is the assessed
skill, not calculator approximation.

### Lesson 05 — Equations (S11)

Three failure modes to pre-empt: dividing by a trig expression (factor
instead), forgetting the stretched interval for multiple angles (write
the `u`-interval at the top of the work), and reporting squared
candidates unchecked (the check is part of the solution, not an
optional extra). The extension (`sin x + cos x = 1` via the
`√2 sin(x + π/4)` rewrite) is the strongest readiness signal for
Lesson 06's modeling.

### Lesson 06 — Applications and proof workshop (S13)

The lighthouse illustration carries no measurements by design. If the
learner tries to measure the picture (ruler, protractor), redirect to
the text-only alternative: the 30 m and the 12° are the data, and the
picture is context. For the Ferris-wheel model, require the three
checks (`h(0)`, the period, `h(10)` in the lesson's model) before any solving — a
model that fails its own checks is not solved, it is replaced.

## Reteach and readiness signals

- **Ready for Unit 03** if the learner can: prove a two-step identity
  one-sidedly; solve a factored trig equation completely over
  `[0, 2π)`; and state a sinusoidal model's parameters in the
  situation's words.
- **Reteach before Unit 03** if the learner: takes half-angle roots
  without a quadrant; reports one solution per period for sine/cosine
  equations; or cannot state a principal range from memory.
- **Targeted follow-up:** Lesson 01 Set A for sign/quadrant errors;
  Lesson 04 Set D for principal-value errors; Lesson 05 Set E for
  interval/checking errors; the project for model-interpretation gaps.
