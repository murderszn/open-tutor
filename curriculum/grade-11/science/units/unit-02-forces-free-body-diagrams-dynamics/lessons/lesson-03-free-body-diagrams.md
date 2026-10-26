# Lesson 03 — Free-Body Diagrams: The Diagram-First Routine

**Unit 02 · Session S5 · ~50 minutes**
**Standards:** unit objective 3 (track objective 4)

## Student goal

By the end of this lesson I can draw a complete free-body diagram
for one object: every force on that object, correct directions
and labels, and nothing else — no forces the object exerts on
other things, and no velocity or acceleration arrows drawn as if
they were forces.

## Materials

Notebook, pencil, ruler. (A ruler matters: in a free-body
diagram, arrow length shows relative magnitude.)

## Readiness check (5 min)

3.1. A crate is pushed to the right across a floor at constant
velocity. List every force you expect on the crate, and say which
two balance horizontally.
3.2. A ball is thrown upward and is now on its way up, after
leaving the hand. List the forces on the ball (ignore air
resistance). Is the throwing force still acting? Why or why not?

## Explicit teaching

A **free-body diagram (FBD)** isolates one object and shows every
force acting on it. "Free" means freed from everything else: the
table, the rope, the hand are gone; only the object and the
arrows remain. The diagram-first routine, used for every dynamics
problem from now on, is:

1. **Choose the object.** One object, one diagram. (Lesson 06
   draws one diagram per body, then combines them.)
2. **Draw the object as a dot or a box.** Not a detailed picture
   — a box you can draw arrows from.
3. **Draw every force on it, tail at the object, arrow pointing
   in the force's direction.** Arrow length is proportional to
   magnitude: a 100 N force gets an arrow twice as long as a 50 N
   force, when both magnitudes are known.
4. **Label every arrow** with a symbol and, when known, a value:
   weight `W = mg` (straight down), normal force `N`
   (perpendicular to the surface, away from it), tension `T`
   (along the rope, away from the object), friction `f` (parallel
   to the surface, opposing motion or impending motion), applied
   force `F` (in the direction of the push or pull).
5. **Choose axes, then read the net force.** Usually one axis
   along the motion and one perpendicular to it. Sum the
   components on each axis separately — that is the net force,
   and Lesson 04 turns it into acceleration.

The forces that appear in this unit, and only these, are:

| Force | Symbol | Direction | Notes |
|---|---|---|---|
| Weight (gravity) | `W = mg` | Straight down, always | Acts even in free fall; `g = 9.80 m/s²` |
| Normal force | `N` | Perpendicular to the surface, away from it | Not always equal to weight — on an incline it is `mg cos θ` (Lesson 05); in an accelerating elevator it differs too |
| Tension | `T` | Along the rope/cable, away from the object | Same magnitude throughout one ideal rope |
| Friction | `f` | Parallel to the surface, opposing motion or impending motion | Kinetic: `f_k = μ_k N` while sliding. Static: whatever it takes, up to `μ_s N`, to prevent sliding |
| Applied push/pull | `F` | In the direction of the push or pull | The hand, the engine, the rope's pull — named by its source |

**What never belongs on an FBD:**

- Forces the object exerts on *other* objects (the book's push on
  the table is not on the book's diagram — it belongs on the
  table's diagram, as Lesson 02 showed).
- Velocity `v` and acceleration `a`. They are not forces. You
  may draw `a` beside the diagram, clearly labeled and in a
  different style, to show the direction of the net force — but
  never as an arrow from the object mixed in with the forces.
- "Inertia," "momentum," or "the force of motion." None of these
  is a force on the object.
- Forces that stopped acting. The hand's push on a thrown ball
  ends at release (readiness item 3.2); after release, only
  weight (and air resistance, if counted) remains.

### Diagram: a crate pushed at constant velocity (hand-built, to scale)

A 50.0 kg crate is pushed to the right at constant velocity.
Applied force `F = 120 N` to the right; kinetic friction
`f_k = 120 N` to the left; weight `W = 490 N` down; normal force
`N = 490 N` up. Horizontal arrows are drawn at 1 px = 2 N
(60 px = 120 N); vertical arrows at 1 px = 5 N (98 px = 490 N) —
different scales are noted, never hidden, because a single scale
would make the horizontal arrows unreadably short next to the
vertical ones. The point of the diagram is the balance: equal
and opposite pairs on each axis, so the net force is zero.

<svg viewBox="0 0 420 260" width="420" height="260" role="img" aria-label="Free-body diagram of a crate pushed at constant velocity: applied force 120 newtons right, friction 120 newtons left, weight 490 newtons down, normal force 490 newtons up">
  <defs>
    <marker id="arrF" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 10,3 0,6" fill="#111"/></marker>
    <marker id="arrR" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 10,3 0,6" fill="#b00020"/></marker>
  </defs>
  <rect x="170" y="100" width="80" height="60" fill="#e8e0d0" stroke="#111" stroke-width="2"/>
  <text x="210" y="132" text-anchor="middle" font-size="13" fill="#111">crate</text>
  <line x1="210" y1="130" x2="270" y2="130" stroke="#111" stroke-width="3" marker-end="url(#arrF)"/>
  <text x="280" y="134" font-size="13" fill="#111">F = 120 N</text>
  <line x1="210" y1="130" x2="150" y2="130" stroke="#111" stroke-width="3" marker-end="url(#arrF)"/>
  <text x="60" y="134" font-size="13" fill="#111">f_k = 120 N</text>
  <line x1="210" y1="130" x2="210" y2="228" stroke="#b00020" stroke-width="3" marker-end="url(#arrR)"/>
  <text x="218" y="222" font-size="13" fill="#b00020">W = 490 N</text>
  <line x1="210" y1="130" x2="210" y2="32" stroke="#b00020" stroke-width="3" marker-end="url(#arrR)"/>
  <text x="218" y="40" font-size="13" fill="#b00020">N = 490 N</text>
  <text x="210" y="252" text-anchor="middle" font-size="11" fill="#666">Horizontal scale 60 px = 120 N; vertical scale 98 px = 490 N. Net force = 0 on each axis.</text>
</svg>

*Reading the diagram:* the horizontal arrows are equal (60 px
each) and opposite, so `F_net,x = 0`; the vertical arrows are
equal (98 px each) and opposite, so `F_net,y = 0`. Constant
velocity, exactly as Lesson 01 predicted for zero net force.

## Worked examples (modeled reasoning)

**Example 1 — Book at rest on a table.** Mass 1.20 kg.

*Reasoning:* Choose the book. Forces on the book: weight down,
`W = mg = 1.20 × 9.80 = 11.8 N`; normal force up from the table.
Nothing else touches the book. Because the book is at rest and
stays at rest, the net force is zero, so `N = W = 11.8 N` up.
Do not add the book's push on the table — that force acts on
the table, not the book. Do not add a "force of the book staying
still." Two arrows, equal, opposite, done.

**Example 2 — Crate accelerating to the right.** Mass 20.0 kg,
pushed right with 150 N, kinetic friction 60.0 N opposing.

*Reasoning:* Choose the crate. Forces: weight down
`W = 20.0 × 9.80 = 196 N`; normal force up — the crate does not
accelerate vertically, so `N = 196 N`; applied force 150 N right;
kinetic friction 60.0 N left (opposing the motion, which is to
the right). Horizontally the forces do not balance:
`F_net,x = 150 − 60.0 = 90.0 N` to the right. Vertically they do:
`F_net,y = 0`. The diagram already tells us the direction of
the acceleration (right) before Lesson 04 computes its size:
`a = 90.0 / 20.0 = 4.50 m/s²`. If your diagram had shown friction
pointing right, or an extra "motion force" pointing right, the
net force — and the prediction — would be wrong. The diagram is
where dynamics problems are won or lost.

## Guided practice

Draw each diagram (box, arrows, labels, and the net force on each
axis where numbers are given). State anything you cannot yet
determine, and why.

3.3. A 5.00 kg box hangs at rest from a rope. (Weight? Tension?
Net force?)
3.4. A 5.00 kg box hangs from a rope and is pulled upward with an
acceleration — the rope tension is 60.0 N. Draw the diagram and
state the net force (direction and magnitude).
3.5. A book rests on a ramp, not sliding. Name every force on the
book and state each one's direction relative to the ramp surface
(parallel or perpendicular, and which way along it).

## Independent practice

3.6. A person stands in an elevator that accelerates upward. Draw
the person's diagram. Is the normal force equal to, greater than,
or less than the person's weight? Justify from the net force.
3.7. A sled is pulled by a rope angled 30.0° above the horizontal
at constant velocity. Draw the diagram, including the direction
of friction, and explain why the normal force is *less* than the
sled's weight in this case.
3.8. (Error analysis.) A learner's diagram for a ball thrown
upward (after release, air resistance ignored) shows weight down
and a "throwing force" up, larger than the weight. Identify every
error, and describe the correct diagram.

## Application

A 2.00 kg block sits on a horizontal table. A horizontal spring
scale pulls it with 6.00 N, but the block does not move. Draw the
diagram, name the friction type acting, and state the friction
force's magnitude and direction. Then the pull is increased to
12.0 N and the block slides at constant velocity. Draw the second
diagram and state the kinetic friction force. (Numbers are
practice values.)

## Exit check

Draw the free-body diagram for a crate sliding to the right on a
flat floor while slowing down (no one is pushing it). List every
arrow, its direction, and the direction of the net force.

## Supports and extension

- **Reading/language access:** name each force by its source
  ("Earth pulls," "table pushes," "rope pulls") before writing
  its symbol.
- **Alternate response mode:** build the diagram with cut-out
  arrows on a table, sizing each arrow by magnitude, before
  drawing it in the notebook.
- **Extension:** draw the diagram for a car rounding a flat
  curve at constant speed. Which force points toward the center
  of the curve, and why must the net force point there?

## Teacher note

Grade the diagram, not the final number, in this lesson: a
correct diagram with a later arithmetic slip is a different
problem from a diagram with a missing or invented force. The
three recurring diagram errors are (a) the object's own forces
on other objects, (b) velocity drawn as a force, and (c) a
lingering "push" after contact ends. Answer-key reference:
items 3.1–3.8 and the application.
