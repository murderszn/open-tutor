# Lesson 02 — Kinetic Energy and the Work–Energy Theorem

**Goal:** You will be able to calculate kinetic energy and use
the work–energy theorem to find speeds without tracking the
motion step by step.
**Time:** ~50 minutes. **Materials:** notebook, calculator.
**Readiness check (3 minutes):** Two identical balls roll at
3 m/s and 6 m/s. How many times more kinetic energy does the
faster ball have — two times, or four times? (Answer: four
times. If you said two, this lesson's square will surprise you
— in a good way.)

## Teaching

**Kinetic energy (KE)** is the energy of motion. For an object of
mass `m` moving at speed `v`:

```
KE = ½mv²
```

Kinetic energy is measured in joules, is always zero or positive
(speed is squared), and grows with the *square* of speed: double
the speed, quadruple the energy. That square is why highway
safety rules care so much about speed — a car at 60 km/h carries
four times the crash energy of the same car at 30 km/h, not twice.

The **work–energy theorem** connects Lesson 01 to motion:

```
W_net = ΔKE = KE_final − KE_initial = ½mv_f² − ½mv_i²
```

The net work done on an object — the sum of the work of *every*
force, signs included — equals its change in kinetic energy. This
is not a new law of nature; it follows from Newton's second law
plus the definition of work. Its power is practical: when a
problem asks for a *speed* and gives forces and distances, the
theorem often answers in two lines where force-and-acceleration
reasoning would take ten. It says nothing about *time* — if a
problem asks how long something takes, use kinematics or
impulse (Unit 04) instead.

A useful special case: if an object starts and ends at rest,
`ΔKE = 0`, so `W_net = 0`. The positive work and the negative
work cancel exactly. That is why pushing a crate at constant
velocity means your push's work equals friction's work in size.

### Worked example 1 — kinetic energy and the square

A 2.0 kg ball rolls at 6.0 m/s. (a) Find its kinetic energy.
(b) Find its kinetic energy at 12 m/s.

(a) `KE = ½(2.0 kg)(6.0 m/s)² = (1.0)(36) = 36 J`.

(b) `KE = ½(2.0 kg)(12 m/s)² = (1.0)(144) = 144 J`.

Doubling the speed quadrupled the energy (36 J → 144 J). A
common error is to say 72 J — that treats energy as proportional
to speed, and the square says otherwise.

### Worked example 2 — finding a speed from net work

A net work of 150 J is done on a 3.0 kg cart that starts from
rest. Find its final speed.

Start from rest, so `KE_initial = 0` and `W_net = KE_final`:

```
150 J = ½(3.0 kg)v²
150 = 1.5v²
v² = 100
v = 10 m/s
```

Check: `½(3.0)(10)² = 150 J`. ✓ The answer has two
significant figures (150 J and 3.0 kg), so 10 m/s is right.

### Worked example 3 — braking: work, energy, distance

A 1200 kg car travels at 20 m/s and brakes to a stop with a
constant braking force of 6000 N. (a) How much net work stops
it? (b) How far does it travel while stopping?

(a) `KE_initial = ½(1200 kg)(20 m/s)² = 240,000 J`.
`KE_final = 0`. So `W_net = 0 − 240,000 J = −2.40 × 10⁵ J`.
The negative sign says energy leaves the car's motion.

(b) The braking force does all the net work, opposing the
motion: `W = −Fd`, so `−240,000 J = −(6000 N)d`, giving
`d = 40 m`. If the car had been traveling at 40 m/s instead,
its kinetic energy would be four times larger — and so would
its stopping distance (160 m). Speed limits are energy limits.

## Guided practice

1. A 0.50 kg ball moves at 8.0 m/s. Find its kinetic energy.
2. A 5.0 kg cart starts from rest and receives 100 J of net work.
   Find its final speed.
3. An 800 kg car travels at 15 m/s. Find its kinetic energy.
   If it brakes with a 4500 N force, how far does it travel
   before stopping?
4. A 2.0 kg object speeds up from 4.0 m/s to 10 m/s. Find its
   change in kinetic energy (compute both KE values, then
   subtract).
5. **Error analysis.** A learner writes: "The ball's speed
   doubled, so its kinetic energy doubled." Correct the error
   and give the right factor, with a number example.

## Independent practice

1. A 4.0 kg object moves at 3.0 m/s. Find its kinetic energy.
2. A 1.0 kg object moves at 6.0 m/s and then experiences a net
   work of −10 J (friction). Find its final kinetic energy and
   final speed.
3. A cyclist (60 kg total) rides at 10 m/s and brakes with a
   300 N force. Find the stopping distance.
4. **Explain your reasoning.** A driver says, "Doubling my speed
   doubles my stopping distance." Use kinetic energy to show
   whether this is right, and state the correct scaling.

## Applied task — the crash-energy comparison

Two identical cars brake with the same braking force. Car A
travels at 15 m/s; car B at 30 m/s. (a) How many times more
kinetic energy does car B carry? (b) How many times longer is
car B's stopping distance? (c) Write two sentences a driving
instructor could use to explain why a 30 m/s zone feels so much
more dangerous than a 15 m/s zone. Numbers first, then the
sentences — the sentences must follow from the numbers.

## Exit check

1. A 3.0 kg object moves at 4.0 m/s. KE = ?
2. Net work of 90 J acts on a 5.0 kg object starting from rest.
   Final speed = ?
3. True or false: "If speed triples, kinetic energy triples."
   Correct it if false.

## Supports and extensions

- **Reading access:** keep the two formulas (`KE = ½mv²`,
  `W_net = ΔKE`) visible while working; the skill is choosing
  which one answers the question, not memorizing them.
- **Alternate response mode:** answer the applied task as a
  short oral explanation with a bar sketch of the two cars'
  energies before writing.
- **Extension:** a 1500 kg car at 25 m/s brakes with 7500 N.
  Find the stopping distance, then find it again for 50 m/s and
  confirm the ×4 scaling. (Answers: 62.5 m → 250 m.)

## Teacher note

Misconceptions to watch: KE proportional to speed (not speed
squared); forgetting the sign of net work (braking is negative
work); using one force's work instead of the *net* work in the
theorem. The answer key solves every item independently. Next
lesson: energy of position — gravitational potential energy.
