# Lesson 04 — Newton's Second Law and Friction

**Unit 02 · Session S7 · ~50 minutes**
**Standards:** unit objective 4 (track objective 4); HS-PS2-1

## Student goal

By the end of this lesson I can use `F_net = ma` to solve for net
force, mass, or acceleration; I can compute kinetic friction from
`f_k = μ_k N`; I can explain static friction as a self-adjusting
force up to a maximum; and I can check every answer against its
free-body diagram.

## Materials

Notebook, pencil, calculator. Data table from the teaching
(Example 1) to be copied into the notebook.

## Readiness check (5 min)

4.1. A 4.00 kg object has a net force of 12.0 N on it. Compute its
acceleration, with units.
4.2. A block weighs 98.0 N on a flat table. What is the normal
force? What mistake would a learner make if they wrote
"N = 98.0 kg"?

## Explicit teaching

**Newton's second law** connects the diagram to the motion:

> The acceleration of an object is directly proportional to the
> net force on it, in the direction of the net force, and
> inversely proportional to its mass: **a = F_net / m**, or
> **F_net = ma**.

Three warnings before any calculation:

1. **It is the *net* force, not any one force.** A 150 N push
   against 60 N of friction accelerates a 20.0 kg crate at
   `(150 − 60) / 20.0 = 4.50 m/s²` (Lesson 03, Example 2) — not
   `150 / 20.0 = 7.50 m/s²`. Every second-law problem starts with
   the diagram and the net force on each axis.
2. **Mass is not weight.** `m` in `F = ma` is mass in kilograms.
   Weight is a force, `W = mg`, in newtons. If a problem gives
   weight, divide by `g = 9.80 m/s²` to get mass before using
   `F = ma`.
3. **One axis at a time.** Write `ΣF_x = ma_x` and `ΣF_y = ma_y`
   separately. Most mistakes in this unit are really
   axis-mixing mistakes: a vertical force subtracted from a
   horizontal one, or a normal force used where a weight
   component belongs.

**How the law is established — from data.** Imagine a cart on a
nearly frictionless track, pulled by a hanging mass over a pulley
so the pulling force is known. Three runs, same cart (mass
2.00 kg):

| Run | Pulling (net) force (N) | Measured acceleration (m/s²) | Force ÷ acceleration (kg) |
|---|---|---|---|
| 1 | 4.00 | 2.00 | 2.00 |
| 2 | 8.00 | 4.00 | 2.00 |
| 3 | 12.0 | 6.00 | 2.00 |

Doubling the force doubles the acceleration; tripling it triples
the acceleration — acceleration is proportional to net force.
And `F / a` is the same every run: it *is* the mass, 2.00 kg.
That table is the whole content of HS-PS2-1: data supporting the
claim that the relationship among net force, mass, and
acceleration is `F_net = ma`. The quiz (Q10) asks you to make
exactly this argument from a fresh table.

**Friction — two kinds, one direction rule.** Friction always
opposes motion or *impending* motion (the motion that would
happen without it), parallel to the surfaces in contact.

- **Kinetic friction** (sliding): `f_k = μ_k N`, where `μ_k` is
  the coefficient of kinetic friction (a pure number, no units)
  and `N` is the normal force. It does not depend on speed
  (in this unit's model) or on contact area — only on `μ_k`
  and on how hard the surfaces are pressed together.
- **Static friction** (not sliding): `f_s ≤ μ_s N`. Static
  friction is *self-adjusting*: it grows to match the applied
  force, up to a maximum `μ_s N`. A 6.00 N push on a block that
  does not move meets exactly 6.00 N of static friction — not
  `μ_s N`. Only when the push exceeds `μ_s N` does the block
  break free, and kinetic friction takes over (usually a little
  smaller than the static maximum, which is why breaking free
  feels like a jump).

Because `f = μN` uses the normal force — not the weight — any
situation where `N ≠ W` (an incline, an angled pull, an
accelerating elevator) changes the friction too. That is the
most common friction error in this unit.

## Worked examples (modeled reasoning)

**Example 1 — Straight second-law solving.** A 5.00 kg crate is
pushed with a net force of 20.0 N to the right. Find the
acceleration. Then: the same net force acts on a 10.0 kg crate.
Find its acceleration, and explain the change in words.

*Reasoning:* Diagram first: the problem already gives the net
force, so no subtraction is needed here (in real problems, check
that). `a = F_net / m = 20.0 / 5.00 = 4.00 m/s²` to the right.
For the heavier crate: `a = 20.0 / 10.0 = 2.00 m/s²`. Doubling
the mass halves the acceleration for the same net force — the
inverse-proportionality half of the second law, and the
quantitative form of Lesson 01's inertia.

**Example 2 — Kinetic friction, then a static check.** A
2.00 kg block on a flat table is pulled with 12.0 N. Kinetic
friction is 4.00 N. (a) Find the acceleration. (b) The pull is
then reduced to 3.00 N. The coefficient of static friction is
0.400. Does the block move? What is the friction force now?

*Reasoning:* (a) Diagram: weight `W = 2.00 × 9.80 = 19.6 N` down,
normal `N = 19.6 N` up (no vertical acceleration), applied
12.0 N forward, kinetic friction 4.00 N backward.
`F_net = 12.0 − 4.00 = 8.00 N`; `a = 8.00 / 2.00 = 4.00 m/s²`
forward. (b) Static maximum: `f_s,max = μ_s N = 0.400 × 19.6 =
7.84 N`. The 3.00 N pull is less than 7.84 N, so the block does
not break free — but wait: if the block was already sliding,
kinetic friction would keep acting. Read the problem as a fresh
start from rest (the block was stopped, then pulled gently):
static friction adjusts to exactly 3.00 N backward, net force
zero, acceleration zero. The trap answer is "friction =
7.84 N" — that is the *maximum*, not the friction in this
situation. State the assumption (starting from rest) in your
answer; without it, part (b) is ambiguous, and noticing that is
good physics.

## Guided practice

4.3. A 3.00 kg object accelerates at 2.50 m/s². What net force
acts on it? If the applied force is 15.0 N, what friction force
must be acting?
4.4. A block's weight is 49.0 N. (a) Find its mass. (b) It sits on
a flat surface with `μ_k = 0.250`. Find the kinetic friction
force while it slides.
4.5. A learner computes a friction force as `f = μ × W` for a
block on a ramp. Explain why that formula is wrong on a ramp,
and write the correct one.

## Independent practice

4.6. A 0.500 kg hockey puck is struck and then slides with
kinetic friction 1.50 N opposing it. (a) Find its acceleration
(magnitude and direction relative to motion). (b) If it was
moving at 12.0 m/s when struck, how long until it stops? (Use
Unit 01 kinematics: `v = v_0 + at`.)
4.7. A 8.00 kg crate is pushed with 60.0 N on a floor with
`μ_k = 0.300`. (a) Find the normal force. (b) Find kinetic
friction. (c) Find the acceleration. Show the diagram's net
force before the division.
4.8. (Error analysis.) A learner writes: "A 10 kg object has
`F = ma = 10 × 9.80 = 98.0 N`, so its acceleration is
98.0 m/s²." Identify every error in that sentence, and write
the correct statement for an object in free fall (net force =
weight).

## Application

A delivery robot of mass 25.0 kg must accelerate at 1.20 m/s²
on a warehouse floor where kinetic friction is 40.0 N. What
forward drive force must its motors produce? Then the robot's
load doubles its total mass to 50.0 kg (friction rises to
80.0 N). What drive force is now needed for the same
acceleration? Explain in words why the answer more than doubles
— or, if it does not, why not. (Numbers are practice values.)

## Exit check

State, in one sentence each: (a) what `F_net = ma` says about
doubling the net force at fixed mass; (b) what it says about
doubling the mass at fixed net force; (c) why static friction
cannot be computed as `μ_s N` in general.

## Supports and extension

- **Reading/language access:** write the words under each symbol
  the first time it appears in a solution ("net force = mass ×
  acceleration"), every time, until the symbols are fluent.
- **Alternate response mode:** solve by ratio first ("twice the
  force, same mass → twice the acceleration"), then by numbers,
  and check that the two agree.
- **Extension:** a 1,500 kg car brakes from 25.0 m/s with a net
  braking force of 9,000 N. Find the deceleration and the
  stopping distance (Unit 01: `v² = v_0² + 2aΔx`), and explain
  why doubling the speed more than doubles the stopping distance.

## Teacher note

The two errors that survive into the assessment are (1) using a
single force instead of the net force, and (2) writing
`f_s = μ_s N` as an equality. Drill both with the "what is the
net force on this axis?" question before any division is
allowed. Example 2(b)'s starting-from-rest assumption is
deliberate — reward learners who flag it. Answer-key reference:
items 4.1–4.8 and the application.
