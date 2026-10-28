# Teacher Guide — Unit 03: Vectors, Parametric Equations, and Polar Representations

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**state the reference**: a direction angle without its reference
(standard position, bearing, east of north) is an incomplete answer,
and a parametrization without its interval and direction is an
incomplete model. Enforce both from S1 — they are the unit's actual
curriculum, and the vector/parametric/polar content is its vehicle.

This unit sits between Unit 02 (trigonometric identities and
equations; draft PR #225, not yet on `main`) and Unit 04 (sequences
and series). Two Unit 02 habits are load-bearing here: inverse
trigonometric functions with quadrant care (Lesson 04's polar
conversions fail without it), and the check-in-the-original rule
(Lesson 03's parameter elimination is the same discipline: squaring
and restricting can change the solution set). If either habit is
insecure at S1, re-teach it in use before S6 rather than pressing on.

## Pacing notes

- **S4 image debrief is not decoration.** The harbor picture is
  deliberately unmeasured. If the learner tries to read a speed or
  angle off it, stop and re-establish the contract: numbers come
  from text, pictures show structure. The project rubric enforces
  this by voiding any row that reads numbers off the picture.
- **S5 reading/reference is the consolidation point for Lessons 01–02.**
  The learner should be able to rebuild the operation rules and the
  conversion formulas from memory (or from a right-triangle sketch)
  before parametric work compounds them. A learner who cannot yet
  place a direction angle in its quadrant will fail Lesson 04's
  conversions silently.
- **S7 clinic is the same-curve/different-motion checkpoint.** If the
  learner cannot yet say why `(t, t²)` and `(2t, 4t²)` are different
  models of motion on the same curve, the project Part B will be
  written as a rectangular equation with time bolted on, not as a
  parametric model. Re-teach with the table, not with the formula.
- **S10 project studio needs the adult present but not directing.**
  The rubric rewards correct, complete, explained mathematics; a
  direction without a reference earns at most half credit for its row,
  and the learner should know that before writing.
- **S18 quiz is formative:** score it the same day, classify every
  error (concept / algebra / reading), and re-work one error of each
  type with the learner before S19. A learner who still adds
  magnitudes will lose the most points on the assessment's Task 1(c)
  and Task 6.
- **S20 debrief sets up Unit 04:** the learner should leave able to
  say which objective is strongest and which needs watching, and to
  state the unit's two most reusable tools (magnitude-direction
  reasoning, and translation between representations with its domain
  and direction carried along).

## Lesson-by-lesson notes

### Lesson 01 — Vectors as quantities (S1)

Watch for vectors-as-locations: a learner who insists the vector from
`(1, 2)` to `(4, 6)` differs from `<3, 4>` at the origin has not yet
absorbed the definition. Move the same arrow to three starting points
on graph paper until the sameness is visual. Also watch the
arctangent-as-angle error; require the quadrant sentence first.

### Lesson 02 — Operations and applications (S3)

Watch tip order in subtraction: `u − v` runs from `v`'s tip to `u`'s
tip, not the reverse. Watch bearing/standard-position mixing in the
river example: accept either reference, reject an unstated one.
The dot-product orthogonality check in Example 3 is worth making the
learner run unprompted by S4.

### Lesson 03 — Parametric equations (S6)

Watch for the eliminated equation presented as the whole model.
Every elimination answer in this unit must carry its domain and its
direction; mark an answer without them incomplete, not merely
informal. The semicircle example (`0 ≤ t ≤ π` on the unit circle) is
the cleanest demonstration — use it if the `t²` example does not land.

### Lesson 04 — Polar coordinates (S8)

Watch edge cases: axis points, negative `r`, and the pole (where `θ`
is undefined). The guided practice deliberately includes them; do not
let the learner skip to the "normal" cases. Also watch degree/radian
mixing: require the unit on every angle answer.

### Lesson 05 — Polar graphs (S11)

Watch petal counting for even `n` and the failed-symmetry-test
fallacy (a failed test proves nothing). Both are named in the lesson;
quote them back when they appear. Require one hand-computed table
per new family before the Desmos check.

### Lesson 06 — Complex polar form (S13)

Watch single-root answers: a cube root exercise with one root listed
is partial credit even when that root is correct. Require the full
set, evenly spaced, with the modulus stated. The principal-argument
convention (`−π < θ ≤ π`) should be stated in the learner's answers
whenever an argument could be read two ways.

## Differentiation and accessibility

- **Reading/language access:** direction vocabulary (bearing, standard
  position, east of north) is defined in the lessons, not assumed;
  a learner may answer direction questions orally with a pointing
  gesture plus the reference sentence.
- **Alternate response modes:** sketches with labeled maxima, zeros,
  and symmetry axes earn the same credit as paragraphs describing
  them; parametrizations may be presented as tables plus a direction
  arrow on the plotted curve.
- **Extensions:** the parallelogram-law proof (Lesson 02), the ellipse
  parametrization (Lesson 03), the Archimedean spiral (Lesson 05),
  and the regular-`n`-gon root picture (Lesson 06) are optional and
  are never prerequisites for later units.
- **Technology access:** every Desmos check has a by-hand equivalent
  (table of values, graph paper). No core objective requires an
  account; Desmos is free in the browser without an account to graph.

## Reteach triggers

- Cannot place a direction angle in its quadrant after S2 → return to
  Lesson 01's quadrant rule with position vectors only, before S8.
- Adds magnitudes for a resultant after S4 → return to the 5-12-13
  river example and the parallelogram sketch; do not proceed to the
  project until the resultant is drawn, not just computed.
- Eliminates a parameter without a domain after S7 → return to the
  semicircle example and require domain + direction on every
  elimination in Set C before S15.
- Lists one root after S14 → return to Lesson 06's evenly-spaced
  picture; require the full set on every root item in Set F.
