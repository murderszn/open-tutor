# Lesson 06 — Key Features in Context, Comparing Quadratics

**Goal:** I can read a quadratic's key features from its graph or table
in context, and compare two quadratic functions given in different
representations.
**Time:** 50 minutes · **Materials:** notebook, graph paper, Lesson 05 notes.

## Readiness check (5 min)

For `f(x) = x² − 4x + 3`, name the zeros, the vertex, and the
y-intercept. If you got zeros 1 and 3, vertex `(2, −1)`, y-intercept 3,
you are ready: today those features answer questions about a real
throw.

## Teaching: every feature is a fact about the situation (15 min)

A quadratic's graph has a fixed vocabulary of features, and in a
context each one means something concrete:

- **y-intercept** — the value when the input is 0 (the launch height).
- **Zeros** — the inputs where the output is 0 (when the ball lands).
- **Vertex** — the highest or lowest point (the maximum height, and
  when it happens).
- **Axis of symmetry** — the vertical line through the vertex; values
  the same distance from it on either side are equal.
- **Increasing / decreasing intervals** — where the outputs rise and
  where they fall as the input grows (rising, then falling).
- **Domain** — the inputs the situation allows (time from launch to
  landing, not before or after).
- **End behavior** — what the outputs do as the inputs grow large;
  in a context, the model usually stops applying at the boundary of
  the domain.

The ball's height in feet after `t` seconds is modeled by
`h(t) = −16t² + 24t + 5` (fictional practice data). Its table shows the
symmetry directly:

| `t` (s) | 0 | 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 |
|---|---|---|---|---|---|---|---|
| `h(t)` (ft) | 5 | 10 | 13 | 14 | 13 | 10 | 5 |

The values at `t = 0.25` and `t = 1.25` match, and the values at
`t = 0.5` and `t = 1` match — pairs the same distance from `t = 0.75`,
the axis of symmetry. When two quadratics are given in different
representations — one as an equation, one as a table, one as a graph —
compare them feature by feature: vertex against vertex, zeros against
zeros, value at a shared input against value. And when two graphs
cross, the crossing's x-coordinate solves `f(x) = g(x)`: that is
A-REI.11, the same idea as a system's intersection from Unit 03.

### Worked example 1 — read the throw

> For `h(t) = −16t² + 24t + 5`, find the launch height, the maximum
> height and when it happens, the landing time, and the domain in
> context.

1. **Launch height:** the y-intercept, `h(0) = 5` feet.
2. **Maximum height:** complete the square or use the axis:
   the axis is `t = −24 / (2 · −16) = 0.75` seconds, and
   `h(0.75) = −16(0.75)² + 24(0.75) + 5 = −9 + 18 + 5 = 14` feet.
   The vertex is `(0.75, 14)`: the ball reaches 14 feet after 0.75
   seconds.
3. **Landing time:** solve `−16t² + 24t + 5 = 0`. The quadratic
   formula gives `t = (3 ± √14) / 4` seconds, about `−0.19` and
   `1.69`. The negative root is before the launch, so the ball lands
   about **1.69 seconds** after the throw.
4. **Domain in context:** `0 ≤ t ≤ 1.69` seconds. The function is
   increasing on `[0, 0.75]` and decreasing on `[0.75, 1.69]`.
   Past the landing time the height model no longer applies — the
   ball is on the ground.

### Worked example 2 — compare two quadratics, two representations

> `f(x) = x² − 4x + 3` is given as an equation. `g` is given by a
> table: `g(0) = 5`, `g(1) = 2`, `g(2) = 1`, `g(3) = 2`, `g(4) = 5`.
> Which function has the smaller minimum value, and which one ever
> reaches 0?

1. For `f`: vertex form `(x − 2)² − 1` gives vertex `(2, −1)`, so the
   minimum value is `−1`. Factored form `(x − 1)(x − 3)` gives zeros
   1 and 3, so `f` reaches 0.
2. For `g`: the table is symmetric about `x = 2` and lowest there, so
   the vertex is `(2, 1)` and the minimum value is `1`. In fact
   `g(x) = (x − 2)² + 1`.
3. `f` has the smaller minimum (`−1 < 1`), and only `f` reaches 0 —
   `g` never goes below 1. Same axis of symmetry, different vertex:
   the comparison is feature by feature, not form by form.

### Worked example 3 — where two graphs cross

> Find where the graphs of `f(x) = x² − 4x + 3` and `g(x) = 2x − 5`
> intersect, and check the answer.

1. The intersections solve `f(x) = g(x)`: `x² − 4x + 3 = 2x − 5`,
   so `x² − 6x + 8 = 0`, and `(x − 2)(x − 4) = 0` gives `x = 2`
   and `x = 4`.
2. At `x = 2`: `f(2) = −1` and `g(2) = −1` — the point `(2, −1)`.
   At `x = 4`: `f(4) = 3` and `g(4) = 3` — the point `(4, 3)`.
3. Both checks pass in both functions, so the graphs cross at
   `(2, −1)` and `(4, 3)`. The first crossing is exactly the vertex
   of `f` — the line touches the parabola at its lowest point.

## Guided practice (10 min, with hints)

1. Using the ball table above: at what two times is the ball 13 feet
   high? *Hint: look for the repeated value 13, and check the
   symmetry about 0.75.*
2. A garden's area is `A(x) = −2x² + 48x` (Lesson 04). What is its
   domain in context, and on what interval is the area increasing?
   *Hint: the zeros are 0 and 24; the vertex is at `x = 12`.*
3. `p(x) = x² − 6x + 5` and `q(x) = (x − 3)² − 4` are the same function
   in two forms. Which form tells you the zeros faster, and which
   tells you the vertex faster? *Hint: factor `p`.*

## Independent practice (10 min)

1. For `f(x) = x² − 6x + 8`: give the factored form, the zeros, the
   vertex form, the vertex, the axis of symmetry, the y-intercept,
   and the intervals where `f` is increasing and decreasing.
2. `f(x) = x² − 4x + 3` has minimum `−1`. `g(x) = −x² + 6x − 5` has
   vertex `(3, 4)` and opens downward. Which function's vertex has
   the greater y-value? At `x = 2`, which function has the greater
   value? Show both evaluations.
3. `p(x) = x² + 2x − 3` and `q(x) = −x² + 4x − 3`. Find the
   x-coordinates where their graphs intersect, and give both
   intersection points, checking each in both functions.
4. A second garden has area `A₂(x) = −x² + 30x` square feet. Its
   maximum area is 225 square feet (vertex at `x = 15`). The first
   garden's maximum is 288 square feet. Which garden can be larger,
   and by how many square feet?
5. In one or two sentences, explain why the domain of the ball's
   height function is `0 ≤ t ≤ 1.69` in context, even though the
   formula `−16t² + 24t + 5` accepts any real number as input.

## Application (5 min)

Two functions model two throws: `h₁(t) = −16t² + 24t + 5` and
`h₂(t) = −16t² + 32t + 6`. Without solving anything, which throw goes
higher? Explain by comparing one feature of the two functions.

## Exit check (5 min)

For `h(t) = −16t² + 32t + 6`: find the maximum height and the time it
happens, and estimate the landing time to two decimal places.

## Supports, extension, teacher note

- **Reading/language access:** keep a feature list on the board with
  the ball meaning beside each term (vertex = highest point, zero =
  landing, intercept = launch height).
- **Alternate response mode:** a learner may answer feature questions
  by pointing to the table, the graph, or the image before writing
  numbers.
- **Extension:** for `h(t) = −16t² + 24t + 5`, find the exact landing
  time `(3 + √14) / 4` seconds and explain why the other root,
  `(3 − √14) / 4`, is negative and outside the domain.
- **Teacher note — misconception:** learners often report the
  formula's domain (all real numbers) instead of the context's domain,
  and often name the vertex's x-coordinate as the maximum height.
  Always ask for *both* coordinates, and for what each one means.
  **Answer key:** `answer-key.md`, Lesson 06.
