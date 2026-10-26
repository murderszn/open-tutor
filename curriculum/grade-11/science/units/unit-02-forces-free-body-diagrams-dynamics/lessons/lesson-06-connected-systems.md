# Lesson 06 — Connected Systems: Pulleys and Two-Body Problems

**Unit 02 · Session S13 · ~50 minutes**
**Standards:** unit objective 4 (track objective 4)

## Student goal

By the end of this lesson I can solve connected systems two
ways — as one system and as separate bodies — and I can check
that both ways agree on the tension; I can state the ideal-rope
and ideal-pulley assumptions and say when they stop being safe.

## Materials

Notebook, pencil, calculator.

## Readiness check (5 min)

6.1. Two blocks are tied together with a rope and pulled as one
unit. If the total mass is 6.00 kg and the net external force
is 12.0 N, what is the acceleration of the unit?
6.2. A 2.00 kg mass hangs from a rope at rest. What is the rope
tension? What changes if the mass accelerates upward at
2.00 m/s²? (Do not compute yet — just say whether tension
rises, falls, or stays the same, and why.)

## Explicit teaching

A **connected system** is two or more bodies joined by a rope,
a rod, or direct contact, so they move together (with the same
speed, and — with an ideal rope over an ideal pulley — the same
magnitude of acceleration). Two methods solve every such
problem, and a good solution uses both as a check on each other.

**Method A — the whole system.** Treat the joined bodies as one
object of total mass `M_total`. Add up only the *external*
forces on the whole system (forces from outside the group);
internal forces — the tension pulling one body, the contact
push between two touching blocks — cancel in pairs inside the
system and drop out. Then `a = F_net,external / M_total`.

**Method B — each body separately.** Draw one free-body
diagram per body, write `ΣF = ma` for each, and solve the
equations together. The unknowns are usually the shared
acceleration `a` and the tension `T` (or contact force). This
method finds the internal forces that Method A hides.

**The ideal-rope and ideal-pulley assumptions** make the two
methods agree simply:

- The rope is **massless**: it cannot need a net force to
  accelerate itself, so the tension is the same at both ends.
  (A real heavy rope has different tensions at its ends.)
- The rope does not stretch: both bodies share the same
  acceleration magnitude.
- The pulley is **massless and frictionless**: it changes the
  rope's direction without changing the tension's magnitude and
  without needing a torque to spin up.

When a problem says "light rope" and "frictionless pulley" (or
says nothing, in this unit's convention), use these assumptions
and state them. When a real system has a heavy chain or a
rusted pulley, say so — the ideal answer is then an
approximation, and the direction of the error (real tension
lower at the load, real acceleration smaller) should be named.

**The Atwood machine** is the classic connected system: two
masses `m_1` and `m_2` hang from one rope over a pulley. Take
`m_1 > m_2`, positive in the direction `m_1` falls. System
method: the external forces along the rope are `m_1 g` (pulling
`m_1` down) and `m_2 g` (pulling `m_2` down, i.e. opposing the
motion). Net external force `= (m_1 − m_2) g`; total mass
`= m_1 + m_2`; so `a = (m_1 − m_2) g / (m_1 + m_2)`. Then either
body separately gives the tension: for `m_2` (accelerating up),
`T − m_2 g = m_2 a`, so `T = m_2 (g + a)`. Check with `m_1`
(accelerating down): `m_1 g − T = m_1 a`, so
`T = m_1 (g − a)`. Both must give the same `T` — if they do
not, an equation has a sign error.

**Two blocks pushed together** use the same idea with a
contact force instead of tension: the trailing block is pushed
by the leading block, and the contact pair obeys Lesson 02.
Method A gives the shared acceleration; Method B, applied to
the trailing block alone, gives the contact force.

## Worked examples (modeled reasoning)

**Example 1 — Atwood machine.** `m_1 = 3.00 kg`,
`m_2 = 2.00 kg`, over a frictionless pulley. Find the
acceleration and the tension.

*Reasoning (Method A):* Positive in the direction `m_1` falls.
Net external force along the rope:
`(3.00 − 2.00) × 9.80 = 9.80 N`. Total mass `= 5.00 kg`.
`a = 9.80 / 5.00 = 1.96 m/s²`. Sanity check: less than `g`
(because the lighter mass holds the heavier one back) and
greater than zero (the masses differ) — plausible.

*Reasoning (Method B, tension two ways):* For `m_2`
(accelerating upward): `T − 2.00 × 9.80 = 2.00 × 1.96`, so
`T = 19.6 + 3.92 = 23.5 N`. For `m_1` (accelerating
downward): `3.00 × 9.80 − T = 3.00 × 1.96`, so
`T = 29.4 − 5.88 = 23.5 N`. Agreement — and note the tension
lies between the two weights (19.6 N and 29.4 N), as it must:
the lighter mass is pulled up harder than its weight, the
heavier mass is held back.

**Example 2 — Table and hanging mass.** A 4.00 kg block on a
frictionless table is connected by a light rope over a pulley
to a hanging 1.00 kg mass. Find the acceleration and tension.

*Reasoning (Method A):* The only external force along the
direction of motion is the hanging mass's weight, 9.80 N
(the table block's weight and normal force cancel vertically
and do not act along the rope). Total mass `= 5.00 kg`.
`a = 9.80 / 5.00 = 1.96 m/s²`. (Same numbers as Example 1 by
design — the driving force and total mass are the same.)

*Reasoning (Method B):* Hanging mass (accelerating down):
`9.80 − T = 1.00 × 1.96`, so `T = 9.80 − 1.96 = 7.84 N`.
Table block (accelerating horizontally): `T = 4.00 × 1.96 =
7.84 N`. Agreement again. Note the tension (7.84 N) is *less*
than the hanging weight (9.80 N) — a hanging mass in
accelerated fall always has `T < mg`, and a learner who writes
`T = mg` here has assumed equilibrium where there is none.
That is the readiness item 6.2 trap, answered: tension falls
when the mass accelerates downward, rises when it accelerates
upward, and equals weight only at rest or constant velocity.

## Guided practice

6.3. An Atwood machine has masses 5.00 kg and 3.00 kg. (a) Find
the acceleration by the system method. (b) Find the tension
two ways and confirm they agree.
6.4. A 6.00 kg block on a frictionless table is tied to a
hanging 2.00 kg mass. (a) Find the acceleration. (b) Find the
tension two ways. (c) What would the tension be if the hanging
mass were held at rest? Explain the difference in one sentence.
6.5. Two blocks in contact on a frictionless table, 3.00 kg in
front and 2.00 kg behind, are pushed from behind with 25.0 N.
(a) Find the shared acceleration. (b) Find the contact force
between the blocks (use the front block alone). (c) Check it
with the rear block alone.

## Independent practice

6.6. A 4.00 kg block on a frictionless 30.0° incline is tied
over a pulley to a hanging 3.00 kg mass that pulls it *up* the
slope. (a) Compute the downhill weight component of the incline
block. (b) Decide which way the system accelerates, and find
its magnitude. (c) Find the tension two ways.
6.7. A 10.0 kg sled is pulled by a rope with tension 60.0 N
while kinetic friction of 20.0 N opposes it. A second, identical
sled is tied behind the first with a light rope and slides
frictionlessly (friction on the second sled is negligible).
Find the shared acceleration and the tension in the rope
between the sleds. (State your system choice for each step.)
6.8. (Error analysis.) A learner solves an Atwood problem with
`m_1 = 4.00 kg`, `m_2 = 1.00 kg` by writing `a = g = 9.80 m/s²`
"because the heavier mass falls freely." Identify the error,
compute the correct acceleration, and explain in one sentence
why the lighter mass slows the fall.

## Application

An elevator (mass 800 kg) and a counterweight (mass 700 kg) are
connected by a cable over a pulley, as in a simplified Atwood
machine. (a) Find the system's acceleration (which side falls?).
(b) Find the cable tension. (c) Explain why a real elevator
uses a motor as well: what does the motor add that this
idealized calculation leaves out? (Numbers are practice
values; a real elevator's safety systems are outside this
model.)

## Exit check

State the two-method check in your own words: what does the
system method give you, what does the separate-bodies method
give you, and what must agree between them?

## Supports and extension

- **Reading/language access:** label every equation with its
  object ("for `m_2`:", "for the whole system:") before writing
  any symbols.
- **Alternate response mode:** act out the Atwood machine with
  two unequal masses on a string over a door handle (adult
  supervises; light masses only, clear floor below), and predict
  the direction before releasing.
- **Extension:** add kinetic friction (`μ_k = 0.100`) to the
  table block in Example 2 and re-solve for acceleration and
  tension. State whether tension rises or falls compared with
  the frictionless case, and why.

## Teacher note

The sign convention is the whole difficulty: fix "positive =
the direction the system actually moves" before writing
equations, and never let a learner solve an Atwood problem by
subtracting weights without dividing by total mass. The
two-way tension check catches nearly every sign error — make it
non-negotiable in marking. Answer-key reference: items 6.1–6.8
and the application.
