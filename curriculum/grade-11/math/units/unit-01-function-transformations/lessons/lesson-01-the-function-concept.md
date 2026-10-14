# Lesson 01 — The Function Concept, Rebuilt

**Unit 01 · Session S1 · ~50 minutes**
**Standards:** F-IF.1, F-IF.2, F-IF.4, F-IF.5

## Student goal

By the end of this lesson I can say, in my own words, what a function
*promises*; I can find a function's domain and range from a graph, a
table, or a situation; I can evaluate and interpret `f(x)` in context;
and I can spot even and odd symmetry in a graph.

## Materials

Notebook, pencil, ruler. Graph paper helps but is not required.

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

1. If `g(x) = 3x − 7`, what is `g(4)`? Show the substitution.
2. A bus fare is $2.50 per ride. Write a rule that gives the total cost
   for `n` rides. What rides-values make sense as inputs?

(Adult: if question 1 is insecure, spend 10 minutes on substitution
before continuing; the rest of the lesson depends on it.)

## Explicit teaching

A function is a machine with one rule it never breaks: **every allowed
input gets exactly one output.** Allowed inputs are the *domain*; the
outputs that actually happen are the *range*.

That "exactly one" is the whole test. The graph of a machine that gives
two different outputs for one input fails the **vertical line test**:
draw every possible vertical line; if any line hits the graph more than
once, it is not the graph of a function of `x`.

Function notation is a naming system, not multiplication. In `f(2) = 5`:

- `f` is the function's name — like a machine's label.
- `2` is the input we fed it.
- `5` is the output it produced.
- The statement means "the point (2, 5) is on the graph of `f`."

In a situation, always name the quantities: "Let `f(x)` be the cost in
dollars of `x` rides." Then `f(3) = 7.50` means "3 rides cost $7.50."
The notation carries the units; an interpretation without units is
incomplete.

**Domain in context vs. domain of the formula.** The formula
`f(x) = 2.50x` accepts any real number, but a bus-fare model accepts
only whole numbers of rides — and realistically only 0 through some
daily maximum. The *context* trims the domain. Always state both: the
formula's natural domain and the situation's realistic domain.

**Even and odd — symmetry with a name.** Look at a graph's symmetry:

- A function is **even** when its graph is symmetric about the **y-axis**:
  the left side mirrors the right. Algebraically, `f(−x) = f(x)` for
  every `x` in the domain. Example: `f(x) = x²` — because
  `(−3)² = 3² = 9`.
- A function is **odd** when its graph is symmetric about the **origin**
  (a half-turn): Algebraically, `f(−x) = −f(x)`. Example:
  `f(x) = x³` — because `(−2)³ = −8 = −(2³)`.

Most functions are **neither** even nor odd. The words "even" and
"odd" describe the *exponents' behavior*, not the numbers involved.

## Worked examples (modeled reasoning)

**Example 1 — Domain, range, and a context interpretation.**

A shipping company charges by package weight. Its price table:

| weight `w` (lb) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| price `p` ($w$) (dollars) | 6 | 8 | 10 | 12 | 14 |

a) Is this a function? What is its domain and range?
b) Write the rule in function notation and interpret `p(4) = 12`.

*Reasoning.* a) Each weight has exactly one price — function confirmed.
Domain (the inputs actually listed): {1, 2, 3, 4, 5} pounds. Range:
{6, 8, 10, 12, 14} dollars. b) The pattern rises $2 per pound from a
$4 base: `p(w) = 2w + 4` for `w ∈ {1, 2, 3, 4, 5}`. `p(4) = 12` means
"a 4-pound package costs $12." Note the check: the formula gives
`2(4) + 4 = 12`, matching the table — always verify the rule against
the data.

**Example 2 — Even or odd? From the graph and the expression.**

Classify `h(x) = x³ − 2x` as even, odd, or neither. Justify both ways.

*Reasoning.* Compute `h(−x)`:

`h(−x) = (−x)³ − 2(−x) = −x³ + 2x = −(x³ − 2x) = −h(x).`

Every output flips sign when the input flips sign — that is exactly
the definition of odd. Graphically, the curve has origin symmetry: the
point (2, 4) on the graph pairs with (−2, −4). So `h` is odd.

Contrast with `k(x) = x² + 1`: `k(−x) = (−x)² + 1 = x² + 1 = k(x)`,
so `k` is even (y-axis symmetry). And `m(x) = x² + x` satisfies
neither test: `m(−x) = x² − x`, which equals neither `m(x)` nor
`−m(x)` — so `m` is neither. A common error: assuming every
function must be one or the other. "Neither" is a full answer when
earned by the algebra.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. For the graph consisting of the points (0, 1), (1, 3), (2, 5),
   (3, 7): is it a function? State domain and range. [Plot the points;
   check each x-value appears once.]
2. A phone plan costs $30 plus $0.10 per text message `t`. Write
   `C(t)`, state the realistic domain, and interpret `C(200) = 50`.
   [Is a negative number of texts sensible? Include units in the
   interpretation.]
3. Classify `f(x) = 5x⁴ − 3x²` as even, odd, or neither, showing the
   `f(−x)` computation. [Watch the signs on each term.]
4. The graph of `y = x²` is given. Does it pass the vertical line
   test? What are its domain and range? [Range: which y-values
   actually occur?]

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Table: `x` = −2, −1, 0, 1, 2 with `y` = 4, 1, 0, 1, 4. Function?
   Domain? Range? Rule in function notation?
2. A parking garage charges $3 for the first hour and $2 for each
   additional hour, for up to 8 hours. Write `P(h)` with its realistic
   domain and interpret `P(5)`.
3. Is the relation `x = y²` (all points where x equals y-squared) a
   function of `x`? Use the vertical line test in your explanation.
4. Classify as even, odd, or neither, with algebraic justification:
   a) `f(x) = x⁵ − x`  b) `g(x) = x⁴ + 2x² − 1`  c) `h(x) = 2ˣ`
   (for c, note `h(−x) = 2⁻ˣ = 1/2ˣ`; compare with `h(x)` and
   `−h(x)`).
5. Error analysis: "The function `f(x) = x³` has domain all real
   numbers, so `f⁻¹`..." — no, stay in this lesson. Instead: a
   classmate claims the graph of `y = ±√x` passes the vertical line
   test because "it's just the square root." Identify the error and
   name two points with the same x-value on that graph.

## Application

A city's taxi charges a $2.50 flag drop plus $1.75 per mile. An app
charges no flag drop but $2.60 per mile.

a) Write `T(m)` (taxi) and `A(m)` (app), with realistic domains.
b) Interpret `T(6)` and `A(6)` in a full sentence each, with units.
c) At what mileage do the two cost the same? Solve and interpret the
   ordered pair as an intersection of two functions — this question
   returns in Lesson 04.

## Exit check

1. State the function promise in one sentence.
2. For `f(x) = 4 − x²`: domain, range, and even/odd classification
   with one line of justification each.

## Supports and extension

- **Reading/language access:** Vocabulary (`domain`, `range`, `even`,
  `odd`) goes in the notebook with a sketch and a non-example.
  Interpretations may be dictated to the adult.
- **Alternate response mode:** Domain/range may be shown by pointing
  to shaded intervals on a number line, and even/odd by folding a
  traced graph along the y-axis or rotating it a half-turn.
- **Extension:** Show that the product of two odd functions is even,
  using `f(−x)g(−x) = (−f(x))(−g(x)) = f(x)g(x)`. Then test: is the
  sum of an even and an odd function ever even? Prove your answer
  with an example or a general argument.

## Teacher note

Likely misconceptions: (1) confusing `f(x)` with `f` times `x`;
(2) reporting the formula's domain instead of the context's; (3) calling
a relation a function when the table "looks like" a pattern;
(4) "even function" misread as "function of an even number." The
exit check's range for `4 − x²` is `(−∞, 4]` — learners often write
`[4, ∞)`. Answer-key reference: `answer-key.md`, Lesson 01.
