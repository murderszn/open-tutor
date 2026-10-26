# Lesson 05 — Inclines: Components of Weight

**Unit 02 · Session S11 · ~50 minutes**
**Standards:** unit objective 4 (track objective 4)

## Student goal

By the end of this lesson I can resolve weight into components
parallel and perpendicular to a slope; I can derive
`N = mg cos θ` and the downhill force `mg sin θ`; and I can
predict an incline's acceleration with and without friction,
checking the frictionless result against `a = g sin θ`.

## Materials

Notebook, pencil, calculator, protractor.

## Readiness check (5 min)

5.1. A 10.0 kg block sits on a flat table. State its weight and
its normal force.
5.2. Resolve a 100 N force at 30.0° above the +x axis into x- and
y-components. (sin 30.0° = 0.500, cos 30.0° = 0.866.) Which
component is "adjacent" to the angle, and which is "opposite"?

## Explicit teaching

On a flat surface, weight points straight down and the normal
force points straight up, and they balance. Tilt the surface,
and the geometry changes — but the physics does not. The trick
is to **tilt the axes with the surface**: choose one axis
parallel to the slope (call it x, positive downhill) and one
perpendicular to the slope (y, positive away from the surface).
Then:

- **Perpendicular axis:** the block does not accelerate into or
  away from the surface, so `ΣF_y = 0`. The forces on this axis
  are the normal force `N` (outward) and the perpendicular
  component of weight (inward). They must balance.
- **Parallel axis:** the block *can* accelerate along the slope,
  so `ΣF_x = ma_x`. The forces here are the parallel component
  of weight (downhill) and friction (uphill, if the block slides
  downhill or would slide downhill).

**Resolving the weight.** Weight `W = mg` points straight down.
The slope makes an angle `θ` with the horizontal. Draw the
weight arrow, then split it into components parallel and
perpendicular to the slope. By geometry (the angle between the
weight arrow and the perpendicular direction is also `θ` — the
two angles are formed by perpendicular lines, so they are
equal):

- Perpendicular component: `W_perp = mg cos θ` (adjacent to
  that angle — cosine touches it).
- Parallel component: `W_parallel = mg sin θ` (opposite the
  angle — sine reaches across from it).

Because `ΣF_y = 0`, the normal force equals the perpendicular
component:

> **N = mg cos θ**

and the downhill driving force is:

> **F_downhill = mg sin θ**

Two limits check the formulas, and you should use them on every
incline problem. At `θ = 0°` (flat): `cos 0° = 1`, so `N = mg`
(correct — the flat case), and `sin 0° = 0`, so no downhill
force (correct — nothing slides on flat ground by itself).
At `θ = 90°` (a vertical wall, i.e. free fall): `cos 90° = 0`,
so `N = 0` (nothing to press against), and `sin 90° = 1`, so the
downhill force is the full weight (correct — free fall). If your
answer fails either limit, your sine and cosine are swapped.

**Friction on an incline** follows the same rule as Lesson 04,
with the incline's normal force: `f_k = μ_k N = μ_k mg cos θ`.
The frictionless acceleration down the slope is therefore
`a = F_net / m = mg sin θ / m = g sin θ` — the mass cancels.
A heavy crate and a light crate slide down the same frictionless
slope with the same acceleration (air resistance ignored). With
kinetic friction, `a = g sin θ − μ_k g cos θ = g(sin θ − μ_k
cos θ)`. If `μ_k cos θ` exceeds `sin θ`, the block does not
accelerate downhill at all — and if it started at rest, static
friction may hold it there entirely.

### Image activity: draw the diagram for this scene

The illustration below is an **AI-generated illustration**
(not a photograph, not a measurement): a wooden crate on a
wooden ramp outdoors. Use it for items 5.3 and 5.8 — draw the
free-body diagram for the crate, then answer the questions
about it. The illustration carries no numbers, so every number
in your answers comes from the problem text, not from the
picture.

![A wooden crate resting on a long wooden plank ramp sloping down from left to right on grass outdoors](../assets/ramp-crate-illustration.png)

*Caption: AI-generated illustration for Lesson 05 — a crate on
a ramp. Use it to practice drawing a free-body diagram; it is
not a photograph and not a source of measurements.*

**Text-only alternative (all the information needed for the
activity):** a rectangular wooden crate sits on a straight
wooden plank ramp. The ramp slopes downward from upper left to
lower right at a gentle angle. The crate rests on the upper
middle part of the ramp, with flat grass and trees around it.
No rope, person, or other object touches the crate. For the
activity, take the ramp angle as 25.0° and the crate's mass as
12.0 kg, and assume the crate is sliding downhill.

### Diagram: free-body diagram on a 30.0° incline (hand-built, to scale)

The diagram below is drawn from the geometry, not traced from
the illustration: a slope at 30.0° to the horizontal (ramp from
(60, 210) to (320, 60): run 260 px, rise 150 px, so
tan θ = 150/260 = 0.577, θ = 30.0°). The block's center is at
(190, 135). Weight points straight down; the normal force is
perpendicular to the slope, tilted 30.0° from vertical; the
weight's components are dashed. Arrow lengths: weight 80 px,
normal 70 px, friction 52 px, components 60 px (parallel) and
69 px (perpendicular) — these are diagram proportions for a
5.00 kg block with friction, not a claim that all four arrows
share one scale; the labels carry the values.

<svg viewBox="0 0 400 260" width="400" height="260" role="img" aria-label="Free-body diagram on a 30 degree incline: weight straight down, normal force perpendicular to the slope, friction up the slope, and dashed weight components parallel and perpendicular to the slope">
  <defs>
    <marker id="arrW" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 10,3 0,6" fill="#111"/></marker>
    <marker id="arrN" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 10,3 0,6" fill="#b00020"/></marker>
    <marker id="arrD" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 10,3 0,6" fill="#666"/></marker>
  </defs>
  <line x1="40" y1="225" x2="340" y2="52" stroke="#8a6a3a" stroke-width="8"/>
  <line x1="60" y1="210" x2="320" y2="60" stroke="#111" stroke-width="2"/>
  <text x="330" y="48" font-size="12" fill="#111">30.0° slope</text>
  <rect x="170" y="112" width="44" height="36" fill="#e8e0d0" stroke="#111" stroke-width="2" transform="rotate(-30 192 130)"/>
  <line x1="190" y1="135" x2="190" y2="215" stroke="#111" stroke-width="3" marker-end="url(#arrW)"/>
  <text x="196" y="210" font-size="13" fill="#111">W = mg</text>
  <line x1="190" y1="135" x2="225" y2="75" stroke="#b00020" stroke-width="3" marker-end="url(#arrN)"/>
  <text x="230" y="72" font-size="13" fill="#b00020">N</text>
  <line x1="190" y1="135" x2="138" y2="105" stroke="#111" stroke-width="3" marker-end="url(#arrW)"/>
  <text x="96" y="100" font-size="13" fill="#111">f (up slope)</text>
  <line x1="190" y1="135" x2="242" y2="165" stroke="#666" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrD)"/>
  <text x="246" y="170" font-size="12" fill="#666">mg sin θ</text>
  <line x1="190" y1="135" x2="160" y2="187" stroke="#666" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrD)"/>
  <text x="104" y="196" font-size="12" fill="#666">mg cos θ</text>
  <text x="200" y="250" text-anchor="middle" font-size="11" fill="#666">Axes tilted with the slope: x downhill, y perpendicular to the surface.</text>
</svg>

*Reading the diagram:* the solid weight arrow is the sum of the
two dashed components (tip-to-tail, as in Unit 01). The normal
arrow cancels the perpendicular component exactly (no
acceleration off the surface); the parallel component minus
friction is the net force downhill.

## Worked examples (modeled reasoning)

**Example 1 — Frictionless incline.** A 5.00 kg block slides
down a frictionless 30.0° incline. Find the normal force, the
downhill force, and the acceleration.

*Reasoning:* Tilt the axes with the slope. Weight
`W = 5.00 × 9.80 = 49.0 N`. Perpendicular component:
`W_perp = 49.0 × cos 30.0° = 49.0 × 0.866 = 42.4 N`. Since
`ΣF_y = 0`, `N = 42.4 N` — note: *not* 49.0 N. The flat-surface
habit "`N` equals weight" fails on a slope, and this is the
single most tested incline fact. Parallel component:
`W_parallel = 49.0 × sin 30.0° = 49.0 × 0.500 = 24.5 N`
downhill. No friction, so `F_net = 24.5 N` downhill and
`a = 24.5 / 5.00 = 4.90 m/s²` — which equals `g sin θ =
9.80 × 0.500 = 4.90 m/s²`, as it must. Limit check: at 0° this
gives 0, at 90° it gives 9.80 m/s². Both pass.

**Example 2 — Same incline, with friction.** The same block,
same 30.0° slope, now with `μ_k = 0.200`. Find the acceleration.

*Reasoning:* The normal force is unchanged by friction:
`N = 42.4 N` (the perpendicular balance does not involve
friction). Kinetic friction:
`f_k = μ_k N = 0.200 × 42.4 = 8.48 N`, pointing *up* the slope
(opposing the downhill slide). Net force downhill:
`F_net = 24.5 − 8.48 = 16.0 N`. Acceleration:
`a = 16.0 / 5.00 = 3.20 m/s²` downhill. Check by the compact
form: `a = g(sin θ − μ_k cos θ) = 9.80 × (0.500 − 0.200 ×
0.866) = 9.80 × (0.500 − 0.173) = 9.80 × 0.327 = 3.20 m/s²`.
Agreement between the two routes is the check that no
component was dropped.

## Guided practice

5.3. Image activity: using the illustration (or its text
alternative) with ramp angle 25.0° and crate mass 12.0 kg,
sliding downhill: (a) draw the free-body diagram; (b) compute
the weight, the normal force, and the downhill component.
(sin 25.0° = 0.423, cos 25.0° = 0.906.)
5.4. A 4.00 kg block on a frictionless 20.0° incline. Compute
`N` and the acceleration. (sin 20.0° = 0.342, cos 20.0° = 0.940.)
Then state the acceleration a 8.00 kg block would have on the
same slope, and explain why.
5.5. A block is held at rest on a 35.0° incline by static
friction. Its mass is 3.00 kg. (a) What is the downhill
component of weight? (b) What static friction force must act?
(c) Why is `μ_s` not needed for part (b)? (sin 35.0° = 0.574,
cos 35.0° = 0.819.)

## Independent practice

5.6. A 6.00 kg crate slides down a 25.0° incline with
`μ_k = 0.150`. Compute `N`, `f_k`, the net force downhill, and
the acceleration. (sin 25.0° = 0.423, cos 25.0° = 0.906.)
5.7. A skier of mass 70.0 kg glides down a gentle 10.0° slope
with negligible friction. Compute the acceleration and the
normal force. Then explain why the skier's mass does not
appear in the acceleration. (sin 10.0° = 0.174, cos 10.0° =
0.985.)
5.8. (Error analysis.) A learner solves a 30.0° incline problem
with `N = mg = 49.0 N` for a 5.00 kg block, then computes
`f_k = 0.200 × 49.0 = 9.80 N`. Identify the error, give the
correct `N` and `f_k`, and explain in one sentence why the
learner's friction is too large.

## Application

A wheelchair ramp rises at 5.00° — a gentle slope, chosen for
access, not speed. A 90.0 kg person in a 15.0 kg chair (total
105 kg) rolls down it with negligible friction. (a) Compute the
downhill force and the acceleration. (b) Explain, using the
numbers, why even a gentle ramp needs a braking hand on the
chair: how large is the downhill force in newtons, compared with
the total weight? (sin 5.00° = 0.0872, cos 5.00° = 0.996.)

## Exit check

A block slides down a frictionless incline. A learner says,
"The steeper the incline, the larger the normal force, because
gravity pulls harder on a steeper slope." Agree or disagree,
and justify with the `N = mg cos θ` formula and the 0°/90°
limits.

## Supports and extension

- **Reading/language access:** always write "parallel to the
  slope" and "perpendicular to the slope" in full before
  abbreviating to x and y.
- **Alternate response mode:** cut a paper right triangle with
  the slope angle marked, and rotate it until its hypotenuse
  lies along the slope — the angle that appears at the weight
  arrow is the same `θ`.
- **Extension:** derive the angle at which a block with
  `μ_s = 0.400` first starts to slide from rest (set
  `mg sin θ = μ_s mg cos θ` and solve for `θ`), and explain
  why the mass cancels there too.

## Teacher note

The incline lesson is where the `N = mg` habit breaks, and
learners will re-assert it under time pressure in the
assessment. Keep returning to the 0°/90° limits — they are a
five-second check that catches the sine/cosine swap and the
flat-surface assumption together. The image activity is
deliberately number-free in the picture: if a learner quotes a
measurement "from the image," that is the misconception to
correct. Answer-key reference: items 5.1–5.8 and the application.
