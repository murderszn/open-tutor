# Lesson 01 — Translations and Reflections: Motions That Keep Every Measurement

**Unit 02 · Week 7, Session 1 · ~50 minutes**

**Goal (learner-facing):** I can define a rigid motion, perform a
translation and a reflection precisely, and verify — by measurement and
by reasoning — that both preserve every distance and every angle.

**Materials:** this lesson, notebook, tracing paper, ruler, protractor,
grid paper, pencil (blue for preimage, red for image).

**Readiness check (5 min):** Draw segment *AB* 5 cm long. Mark its
midpoint *M* (Unit 01 construction or ruler). If you slide the whole
drawing 3 cm to the right without turning it, how long is the segment
now? How do you know? Write the answer before reading on — today's
lesson makes that "how do you know" precise.

---

## Part 1 — Transformations are functions (explicit teaching, 10 min)

A **transformation** of the plane is a *function*: it takes every point
of the plane as an input and returns another point of the plane as the
output. The original figure is the **preimage**; its output is the
**image**. We write the image of point *P* as *P′* (read "P prime").

A **rigid motion** (also called an *isometry*) is a transformation that
preserves **every distance and every angle measure**:

- For any two points *P* and *Q*, the distance *P′Q′* equals *PQ*.
- For any angle ∠*ABC*, the measure of ∠*A′B′C′* equals the measure of
  ∠*ABC*.

That is the whole definition. Everything else in this unit is a
consequence of it. (Unit 01's readiness answer: the segment is still
5 cm long, because a slide — a *translation* — is a rigid motion.)

**Translation.** A translation is determined by a **vector**: a directed
segment that says *how far* and *in which direction*. Every point of
the plane moves by that same vector — same distance, same direction.
Write *T* for the translation: *T(P)* is the point reached by starting
at *P* and moving along the vector.

**Reflection.** A reflection is determined by a line, the **line of
reflection** (also called the *mirror line*). The image *P′* of *P* is
the point on the opposite side of the line such that the line of
reflection is the **perpendicular bisector** of segment *PP′* (Unit 01's
perpendicular-bisector work, now earning its keep). Points *on* the
mirror line stay fixed.

Both are rigid motions. A translation slides the plane over itself; a
reflection folds it. In both cases, nothing stretches.

*Why we believe the preservation claims.* Take a reflection. The fold
carries the whole plane onto itself, matching *P* to *P′* along
perpendicular bisectors. Any segment *PQ* is carried to segment *P′Q′*
lying exactly on top of where *PQ* was, so the lengths match; any angle
is carried to an angle lying exactly on top of the original, so the
measures match. (A fully formal proof that reflections preserve
distance uses the perpendicular-bisector theorem — which you will prove
in Lesson 04. Notice how the unit is built: each lesson's claims are
paid for by a later lesson's proof. That is honest mathematics.)

**Non-example (important).** A *dilation* — "zoom in by a factor of 2" —
is a transformation but **not** a rigid motion: it doubles every
distance. Rigid motions are the motions with *no zoom*. Keep this
contrast handy; Unit 03 (similarity) lives on the other side of it.

---

## Part 2 — Working the motions (modeled reasoning, 15 min)

**Worked example 1 — translation on a grid.** Triangle *ABC* has
*A*(1, 1), *B*(4, 1), *C*(4, 3). Translate by the vector "3 right, 2
up" — that is, (*x*, *y*) → (*x* + 3, *y* + 2).

- *A′* = (4, 3), *B′* = (7, 3), *C′* = (7, 5).
- Check a distance: *AB* = 3 (from (1,1) to (4,1)); *A′B′* = 3 (from
  (4,3) to (7,3)). ✓
- Check an angle: ∠*B* is a right angle (AB horizontal, BC vertical);
  ∠*B′* is also a right angle. ✓
- Notice the bookkeeping: *every* point moved by the *same* vector.
  A translation is one rule applied everywhere, not three separate
  moves.

The diagram below shows this translation. (Deterministic SVG — exact
grid, exact coordinates.)

<svg width="420" height="240" viewBox="0 0 420 240" role="img" aria-label="Grid showing triangle ABC translated 3 right and 2 up to A prime B prime C prime">
  <defs><pattern id="g1" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ccc" stroke-width="1"/></pattern></defs>
  <rect x="30" y="10" width="360" height="210" fill="url(#g1)"/>
  <polygon points="60,190 150,190 150,130" fill="none" stroke="#1a56db" stroke-width="2.5"/>
  <polygon points="150,130 240,130 240,70" fill="none" stroke="#d11a2a" stroke-width="2.5"/>
  <text x="52" y="208" font-size="13" fill="#1a56db">A(1,1)</text>
  <text x="152" y="208" font-size="13" fill="#1a56db">B(4,1)</text>
  <text x="152" y="124" font-size="13" fill="#1a56db">C(4,3)</text>
  <text x="142" y="148" font-size="13" fill="#d11a2a">A′(4,3)</text>
  <text x="242" y="148" font-size="13" fill="#d11a2a">B′(7,3)</text>
  <text x="242" y="64" font-size="13" fill="#d11a2a">C′(7,5)</text>
  <line x1="150" y1="190" x2="150" y2="130" stroke="#1a56db" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="240" y1="130" x2="240" y2="70" stroke="#d11a2a" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="200" y="235" font-size="12" fill="#333">Blue: preimage ABC · Red: image A′B′C′ (each point +3 in x, +2 in y)</text>
</svg>

**Worked example 2 — reflection and symmetry.** Reflect the same
triangle *ABC* across the vertical line *x* = 5.5.

- Rule: a point (*x*, *y*) goes to (11 − *x*, *y*), because the mirror
  *x* = 5.5 is the midpoint: (*x* + *x′*)/2 = 5.5.
- *A′* = (10, 1), *B′* = (7, 1), *C′* = (7, 3).
- Check: *AB* = 3, *A′B′* = 3. The midpoint of *AA′* is ((1+10)/2, 1) =
  (5.5, 1) — on the mirror line — and *AA′* is horizontal, perpendicular
  to the vertical mirror. ✓ (This is the perpendicular-bisector
  definition, verified numerically.)

**Symmetry connection.** A figure has **line symmetry** (reflection
symmetry) when some reflection carries the figure onto itself. An
isosceles triangle has exactly one line of symmetry (through the vertex
angle, bisecting the base — you will prove why in Lesson 05). A
non-square rectangle has exactly **two** (through midpoints of opposite
sides). *Common error:* the diagonals of a non-square rectangle are
*not* lines of symmetry — fold along a diagonal and the corners miss.
Check it with tracing paper; the error is instructive.

---

## Part 3 — Guided practice (10 min)

Work on tracing paper or grid paper; the adult checks as you go.

1. Translate △*DEF*, *D*(0, 2), *E*(2, 5), *F*(5, 2), by the vector
   "4 left, 1 down": (*x*, *y*) → (*x* − 4, *y* − 1). Label *D′E′F′*.
   Compute *DE* and *D′E′* to verify preservation.
   *(Hint: DE is a 3-4-5 right triangle leg pattern — DE = 5? Check:
   from (0,2) to (2,5): dx=2, dy=3, so DE = √13. Careful — verify with
   the distance formula, not a guess.)*
2. Reflect △*DEF* from problem 1 across the *y*-axis. Write the image
   coordinates and the coordinate rule you used.
3. A rectangle is 6 cm by 4 cm. (a) Draw both lines of symmetry.
   (b) Explain in one sentence why a diagonal is not a line of
   symmetry. (c) What is its **rotational symmetry** — preview: by what
   angles can you turn it about its center and have it look unchanged?

## Part 4 — Independent practice (10 min)

4. On graph paper, draw any scalene triangle. Translate it by a vector
   of your choice, then reflect the *image* across a vertical line you
   draw. Label every vertex. Measure one side and one angle in the
   preimage and in the final image; record both.
5. **Error analysis.** A learner says: "I translated a triangle 2 units
   right, and its area doubled because it moved into bigger grid
   squares." Identify the two errors (one about the motion, one about
   the grid).
6. Which capital letters have at least one line of symmetry? Sort these
   into groups: A, B, C, D, E, F, G, H, K, M, N, R, S, Z. (Letters with
   *no* symmetry form their own group.)

## Part 5 — Application: the pool-table aim (5 min)

A cue ball must bounce off one cushion (a straight rail) and hit a
target ball. Model the rail as a line and the target ball's position as
point *T*. Reflect *T* across the rail line to *T′*; aim the cue ball
at *T′*. Explain why this works: the incoming path and outgoing path
make equal angles with the rail — exactly what a reflection
guarantees, because the fold maps the straight line "cue → T′" onto the
broken path "cue → bounce point → T" with the rail as perpendicular
bisector of *TT′* at the bounce point. (This is the *reflection
principle*; physicists use it in optics — the angle of incidence
equals the angle of reflection — and you just derived the geometry
behind it.)

## Exit check (5 min)

1. State the definition of a rigid motion in your own words.
2. A dilation with scale factor 3 maps segment *AB* (length 4) to
   *A′B′*. Is it a rigid motion? What is *A′B′*? Why does this confirm
   your answer to (1)?
3. Reflection across line *m* sends *P* to *P′*. What is the geometric
   relationship between line *m* and segment *PP′*? (Answer with the
   Unit 01 term.)

**Teacher note:** The likely misconception is "rigid = doesn't move."
Stress the function view: a rigid motion moves *every* point; what is
"rigid" is the *measurements*. Watch for learners who translate each
vertex by a *different* vector — the "same vector everywhere" check in
Worked example 1 is the antidote. Answer-key reference: `answer-key.md`,
Lesson 01.
