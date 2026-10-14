# Lesson 03 — Vectors: Components and Resultants

**Unit 01 · Session S6 · ~50 minutes**
**Standards:** unit objective 3 (track objective 2)

## Student goal

By the end of this lesson I can tell a scalar from a vector; I can add
vectors graphically by tip-to-tail; I can resolve a vector into
x- and y-components with sine and cosine; and I can compute a
resultant's magnitude and direction, always stating the unit and the
direction reference.

## Materials

Notebook, pencil, calculator, protractor and ruler (for the
graphical method).

## Readiness check (5 min)

3.1. In a 3-4-5 right triangle, the angle θ sits opposite the side of
length 3. Write sin θ, cos θ, and tan θ as fractions.
3.2. A car travels 60 km/h for 2 h. Is the *distance* 120 km a scalar
or a vector? What extra information would turn it into a vector?

(Adult: if 3.1 is insecure, do the Session S5 trig warm-up again here —
components depend on choosing the right ratio.)

## Explicit teaching

**Scalars** have magnitude only: 5 kg, 20 s, 300 K, 60 km/h of
speedometer reading. **Vectors** have magnitude *and* direction: 5 kg
is a scalar, but the 49 N weight force pulling *downward* is a vector;
60 km/h is a speed (scalar), 60 km/h *due north* is a velocity
(vector). Displacement, velocity, acceleration, and force are vectors;
distance, speed, time, mass, and energy are scalars.

**Graphical addition — tip-to-tail.** Draw the first vector, then draw
the second vector starting where the first one ends (its tail on the
first vector's tip). The **resultant** runs from the very first tail to
the very last tip. Order does not matter; the polygon always closes on
the same resultant.

**Components — resolving a vector.** Any vector **A** at angle θ above
the +x axis splits into perpendicular parts:

- A_x = A cos θ (the *adjacent* side — cosine touches the angle)
- A_y = A sin θ (the *opposite* side — sine reaches across from it)

Signs follow the axis directions: components pointing in −x or −y are
negative. To **recombine**: add all x-components (R_x = ΣA_x), add all
y-components (R_y = ΣA_y), then

- |R| = √(R_x² + R_y²)
- θ = arctan(|R_y| / |R_x|), stated with a direction reference
  ("35° above the +x axis" or "35° north of east").

The arctangent alone does not know the quadrant — check the signs of
R_x and R_y and name the quadrant yourself.

**Subtraction** is addition of the negative: **A** − **B** = **A** +
(−**B**), where −**B** has the same magnitude as **B** but points the
opposite way. In components, just subtract component-wise.

### Diagram: tip-to-tail addition (hand-built, to scale)

The diagram below shows Example 1's vectors. Every coordinate was
checked by hand: scale 30 px = 1.00 km.

<svg viewBox="0 0 260 200" width="520" height="400" role="img" aria-label="Tip-to-tail vector addition: A = 3.00 km east followed by B = 4.00 km north, with dashed resultant R = 5.00 km at 53.1 degrees north of east">
  <defs>
    <marker id="arrA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#111"/>
    </marker>
    <marker id="arrB" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#111"/>
    </marker>
    <marker id="arrR" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#b00020"/>
    </marker>
  </defs>
  <g stroke="#d8d8d8" stroke-width="1">
    <line x1="30" y1="20" x2="30" y2="190"/><line x1="60" y1="20" x2="60" y2="190"/>
    <line x1="90" y1="20" x2="90" y2="190"/><line x1="120" y1="20" x2="120" y2="190"/>
    <line x1="150" y1="20" x2="150" y2="190"/><line x1="180" y1="20" x2="180" y2="190"/>
    <line x1="210" y1="20" x2="210" y2="190"/><line x1="240" y1="20" x2="240" y2="190"/>
    <line x1="20" y1="20" x2="250" y2="20"/><line x1="20" y1="50" x2="250" y2="50"/>
    <line x1="20" y1="80" x2="250" y2="80"/><line x1="20" y1="110" x2="250" y2="110"/>
    <line x1="20" y1="140" x2="250" y2="140"/><line x1="20" y1="170" x2="250" y2="170"/>
  </g>
  <line x1="60" y1="170" x2="150" y2="170" stroke="#111" stroke-width="3" marker-end="url(#arrA)"/>
  <text x="105" y="190" text-anchor="middle" font-size="12" fill="#111">A = 3.00 km east</text>
  <line x1="150" y1="170" x2="150" y2="50" stroke="#111" stroke-width="3" marker-end="url(#arrB)"/>
  <text x="142" y="112" text-anchor="end" font-size="12" fill="#111">B = 4.00 km north</text>
  <line x1="60" y1="170" x2="150" y2="50" stroke="#b00020" stroke-width="3" stroke-dasharray="8 5" marker-end="url(#arrR)"/>
  <text x="105" y="30" text-anchor="middle" font-size="12" fill="#b00020">R = 5.00 km, 53.1° N of E</text>
  <path d="M 82 170 A 22 22 0 0 0 73.2 152.4" fill="none" stroke="#111" stroke-width="1.5"/>
  <text x="92" y="160" font-size="11" fill="#111">53.1°</text>
  <text x="20" y="196" font-size="10" fill="#666">Scale: 30 px = 1.00 km. B's tail sits on A's tip.</text>
</svg>

*Reading the diagram:* vector **A** runs horizontally from (60, 170)
to (150, 170) — 90 px = 3.00 km. Vector **B** starts at **A**'s tip
(150, 170) and runs up to (150, 50) — 120 px = 4.00 km. The dashed
resultant **R** runs from **A**'s tail (60, 170) to **B**'s tip
(150, 50): Δx = 90 px, Δy = 120 px, so |**R**| = √(90² + 120²) =
150 px = 5.00 km, at arctan(120/90) = 53.1° above the eastward axis.

## Worked examples (modeled reasoning)

**Example 1 — Tip-to-tail then verify by components.**

Walk 3.00 km east, then 4.00 km north. Find the resultant displacement.

*Graphical:* draw 3.00 km east, then 4.00 km north starting at its tip
(see diagram). The resultant is the dashed arrow from start to finish.

*By components (verify the drawing):*
A = (3.00 km, 0); B = (0, 4.00 km).
R_x = 3.00 + 0 = 3.00 km; R_y = 0 + 4.00 = 4.00 km.
|**R**| = √(3.00² + 4.00²) km = √(9.00 + 16.0) km = √25.0 km = **5.00 km**.
θ = arctan(4.00 / 3.00) = arctan(1.3333) = **53.1° north of east**.

*Check:* the resultant (5.00 km) is longer than either leg but shorter
than their sum (7.00 km) — a vector sum must fall between the
difference and the sum of the magnitudes. It does.

**Example 2 — Resolve, then recombine.**

A ball leaves a launcher at 10.0 m/s, 30.0° above the horizontal.

*Resolve:* θ is measured from the +x (horizontal) axis, so
v_x = v cos θ = 10.0 m/s × cos 30.0° = 10.0 × 0.86603 m/s = **8.66 m/s**,
v_y = v sin θ = 10.0 m/s × sin 30.0° = 10.0 × 0.50000 m/s = **5.00 m/s**.

*Recombine (self-check):* √(8.66² + 5.00²) m/s = √(75.0 + 25.0) m/s =
√100 m/s = 10.0 m/s ✓, and arctan(5.00/8.66) = 30.0° ✓. Resolving and
recombining must return the original vector — if they don't, the wrong
trig ratio was used.

## Guided practice (with hints)

3.3. Resolve a 20.0 N force applied at 40.0° above the horizontal.
*Hint:* cosine for the adjacent (horizontal) part, sine for the
opposite (vertical) part. cos 40.0° = 0.76604, sin 40.0° = 0.64279.

3.4. Two displacement vectors: **A** = (6.0 m, 2.0 m), **B** = (−2.0 m,
5.0 m). Add them by components, then find the resultant's magnitude
and direction.
*Hint:* R_x = 6.0 + (−2.0); R_y = 2.0 + 5.0. Then Pythagoras and
arctan. Which quadrant do the signs put you in?

## Independent practice

3.5. A surveyor walks 5.00 km at 0° (due east), then 5.00 km due north.
a) Find the resultant displacement graphically (describe the sketch)
and by components.
b) Could any two 5.00 km legs give a resultant of 0 km? Explain.
3.6. **A** = (10.0 m, 4.0 m), **B** = (3.0 m, 9.0 m). Compute **A** −
**B** by components, then its magnitude and direction.
3.7. An airplane's velocity relative to the air is 120 m/s due east;
the wind blows 25.0 m/s due south. Find the plane's velocity relative
to the ground (magnitude and direction). Which vector is being added
to which?

## Application

3.8. A boat crosses an 80.0 m wide river. The boat's speed relative to
the water is 2.50 m/s straight across (north); the current flows east
at 1.20 m/s.
a) How long does the crossing take?
b) How far downstream does the boat land?
c) What is the boat's resultant velocity relative to the shore
(magnitude and direction)?
d) The captain wants to land directly opposite. In one or two
sentences, explain what heading change this requires and why the
crossing then takes longer.

## Exit check (5 min)

3.9. Can two vectors of unequal magnitude add to zero? Explain in one
sentence.
3.10. A vector has components (3.0 m, 4.0 m). What are its magnitude
and direction? Show the two-line computation.

## Reading and language support

- The Session S7 PhET "Vector Addition" exploration (see
  `../resource-pack.md`) lets you drag vectors and watch the
  components update — use it to check every hand computation in 3.3
  and 3.4 before looking at the answer key.
- Say "adjacent = cosine, opposite = sine" while pointing at the
  angle in each new diagram; the physical pointing prevents the swap.
- Glossary additions: *scalar, vector, resultant, component,
  tip-to-tail* — each with a one-line example and its unit.

## Alternate response mode

The learner may construct the tip-to-tail diagrams with string and
tape on a table (or a whiteboard app), photograph/keep the layout,
and dictate the component arithmetic. The diagram's correctness and
the trig choice are assessed, not drafting skill.

## Extension

Two vectors **A** and **B** have magnitudes 7.00 m and 7.00 m with
120° between them. Find the resultant magnitude by components (place
**A** on the +x axis). Then explain geometrically why the answer is
7.00 m — what triangle does this form?

## Teacher note (misconception)

The #1 error is the sin/cos swap: learners write A_x = A sin θ when θ
is measured from the x-axis. The fix is positional, not mnemonic —
have them point at the angle, then at the side *touching* it
(adjacent → cosine), every single time, until the habit sticks. The #2
error is reporting "53.1°" with no direction reference; a bare angle
is an incomplete vector answer — require "north of east" or "above
the +x axis" on every resultant.

*Answers for all numbered items (3.1–3.10) are in `../answer-key.md`
under "Lesson 03".*
