# Lesson 03 — Gravitational Potential Energy and Reference Levels

**Goal:** You will be able to calculate gravitational potential
energy, choose a reference level, and explain why only changes
in potential energy matter.
**Time:** ~50 minutes. **Materials:** notebook, calculator.
**Readiness check (3 minutes):** A book sits on a shelf 1.5 m
above the floor. Is its gravitational potential energy a fixed
property of the book — or does it depend on something you
choose? (Answer: it depends on where you put zero height. If
that sounds strange, this lesson makes it precise.)

## Teaching

Lifting an object against gravity stores energy in the
object–Earth system. That stored energy is **gravitational
potential energy (PE)**:

```
PE_grav = mgh
```

where `m` is the mass, `g = 9.80 m/s²`, and `h` is the height
above a chosen **reference level (datum)** — the height you call
zero. Potential energy is measured in joules.

The key idea: **only changes in potential energy are
physically meaningful.** Lifting a mass through a height `Δh`
always changes its potential energy by `ΔPE = mgΔh`, no matter
where you put zero. The reference level is a bookkeeping choice,
like choosing where a ruler's zero sits: it changes the numbers
you write down, never the physics.

Two consequences follow. First, potential energy can be
negative: an object below your datum has negative PE, and that
is fine — it simply means the object would need energy input to
reach the datum. Second, a problem that asks for a *change* can
be solved from any datum, while a problem that asks for "the
PE" must state or imply its datum — if it doesn't, say so and
pick one explicitly.

Potential energy belongs to a *system* (object plus Earth), not
to the object alone — but at this level we write `mgh` for the
object and keep that language note in mind. Gravity is a
**conservative force**: the work it does between two heights
depends only on the heights, never on the path taken. A ball
carried up the stairs and a ball lifted straight up through the
same height gain the same potential energy. Friction, met in
Lesson 05, is the opposite kind: path-dependent.

### Worked example 1 — a straightforward lift

A 2.5 kg book is lifted 1.8 m onto a shelf. How much does its
gravitational potential energy increase?

```
ΔPE = mgΔh = (2.5 kg)(9.80 m/s²)(1.8 m) = 44.1 J ≈ 44 J
```

The book–Earth system now stores 44 J more than before. The
lifting force did +44 J of work; gravity did −44 J.

### Worked example 2 — a diver, and a speed from energy

A 55 kg diver stands on a 10 m board, then dives into the water
(ignoring air resistance). (a) How much potential energy does
the diver lose reaching the water? (b) How fast is the diver
moving at the water?

Take the water surface as the datum (`h = 0`).

(a) `PE_top = (55 kg)(9.80 m/s²)(10 m) = 5390 J ≈ 5.4 × 10³ J`.
At the water, `PE = 0`. The diver loses about 5.4 × 10³ J of
potential energy.

(b) The lost potential energy becomes kinetic energy:
`KE = 5.4 × 10³ J`. So `½(55 kg)v² = 5390 J`, giving
`v² = 196` and `v = 14 m/s`. (Exactly: `v = √(2gh) =
√(2 × 9.80 × 10) = 14 m/s`.) Lesson 04 generalizes this into
conservation of mechanical energy.

### Worked example 3 — the same lift, two datums

A 2.0 kg book is lifted from the floor to a shelf 1.2 m up.
(a) With the floor as datum, what are the book's initial and
final PE, and the change? (b) With the shelf as datum, what are
they? (c) What stays the same?

(a) Floor datum: initial `PE = 0`; final
`PE = (2.0)(9.80)(1.2) = 23.5 J ≈ 24 J`; change `+24 J`.
(b) Shelf datum: initial `PE = (2.0)(9.80)(−1.2) = −24 J`;
final `PE = 0`; change `+24 J`.
(c) The *change* (+24 J) is identical. Only the labels moved.
Any answer that depends on the datum choice for a *change* is
wrong — a good self-check on every PE problem.

## Guided practice

1. A 10 kg box is lifted 5.0 m. Find its PE gain.
2. A 0.20 kg apple falls 2.0 m from a branch. How much PE does
   it lose?
3. A 70 kg hiker climbs 300 m up a trail. Find the PE gain.
   Does it matter whether the trail zigzags or goes straight
   up? Why?
4. A 3.0 kg object sits 2.0 m below a chosen datum. Find its PE
   relative to that datum, and the PE change in rising to the
   datum.

## Independent practice

1. A 3.0 kg mass is raised 4.0 m. Find the PE change.
2. A 600 kg elevator rises 20 m. Find its PE gain.
3. **Explain your reasoning.** A learner says, "Potential
   energy can't be negative — energy is a real thing." Use the
   datum idea to correct this in two or three sentences.
4. A 1.0 kg ball sits on a cliff 50 m above the beach, and an
   identical ball sits on a ledge 25 m above the beach (same
   datum). What is the ratio of their potential energies?

## Applied task — the PE bank

You are designing a demonstration that stores energy by lifting
masses. Option A lifts 5.0 kg to a height of 10 m. Option B
lifts 10 kg to a height of 4.0 m. (a) Compute the stored energy
of each. (b) Which stores more, and by how much? (c) Write one
sentence explaining why "heavier" does not automatically mean
"more stored energy." Show all working; the adult checks that
both products (`mgh`) were computed, not just the masses or
the heights compared.

## Exit check

1. A 4.0 kg object is 2.5 m above the datum. PE = ?
2. True or false: "Changing the datum changes the PE change."
   Correct it if false.
3. A ball is carried up a winding staircase to a landing 3.0 m
   up, gaining 150 J of PE. If it had been lifted straight up
   the same 3.0 m, its PE gain would be ____ J. Why?

## Supports and extensions

- **Reading access:** before each problem, write "datum: ___"
  explicitly. Most PE errors are missing datums, not bad
  arithmetic.
- **Alternate response mode:** answer the applied task with a
  two-column table (mass, height, product) before writing
  sentences.
- **Extension:** a 0.40 kg ball is thrown upward at 12 m/s.
  Use energy (Lesson 04 previews it, but try now): its KE is
  28.8 J; how high does it rise before stopping? (Answer:
  `h = 28.8 / (0.40 × 9.80) = 7.3 m`.)

## Teacher note

Misconceptions to watch: PE as an absolute property (no datum
stated); PE depending on path; negative PE treated as
impossible. The answer key solves every item independently.
Next lesson: the second stored-energy form — elastic potential
energy — and the conservation law that ties them together.
