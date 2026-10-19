# Lesson 02 — Function Notation, Domain, and Range

**Goal:** I can read and evaluate `f(x)` notation, interpret
notation-based statements in context, and state a function's domain and
range from its graph and its story.
**Time:** 50 minutes · **Materials:** notebook, calculator (check only)

## Readiness check (5 min)

The rule `R = {(1, "chips"), (2, "chips"), (5, "crackers")}` is a function.
(a) What is the output for input 2? (b) What is the domain? If you can do
both, you are ready: (a) "chips"; (b) `{1, 2, 5}`.

## Teaching: naming functions and reading f(x) (15 min)

Writing "the output of the rule for input 4" gets old fast. **Function
notation** gives the rule a name and a shorthand:

- Name the function `C`. Write `C(h) = 12 + 2.5h`.
- Read `C(4)` as "**C of 4**" or "the value of C at 4" — the output when the
  input is 4. **Never read it as "C times 4"**; the parentheses mark an
  input, not multiplication.
- The **domain** is the set of all allowed inputs. The **range** is the set
  of all possible outputs. For a linear function with no restrictions, both
  are "all real numbers" — but real situations almost always restrict them
  (F-IF.5).

**Interpreting notation in context.** A notation statement is a sentence in
disguise. `C(4) = 22` says: "4 hours of tutoring cost $22." To interpret,
name the input quantity, name the output quantity, and use the units.

### Worked example 1 — evaluate and interpret

> A plumber's bill is `P(h) = 60 + 45h` dollars, where `h` is hours worked.

1. **Evaluate** `P(3)`: `P(3) = 60 + 45(3) = 60 + 135 = 195`. Three hours
   cost $195.
2. **Interpret** `P(0) = 60`: zero hours cost $60 — the visit fee you pay
   even if no work is done. The intercept from Unit 01 has a name in
   function language: it is the output for input 0.
3. **Work backwards:** for what `h` is `P(h) = 330`? Solve
   `60 + 45h = 330` → `45h = 270` → `h = 6`. Six hours of work cost $330.
   Function notation also asks "which input gives this output?"

### Worked example 2 — domain and range from a story and a graph

> A water bottle fills at 250 mL per second: `V(t) = 250t` mL, for the
> 12 seconds it takes to fill.

1. **Domain from the story:** time runs from 0 to 12 seconds, so the domain
   is `0 ≤ t ≤ 12`. A domain of "all real numbers" would claim the bottle
   fills before you start pouring and keeps filling after it overflows —
   nonsense. The story constrains the mathematics.
2. **Range from the story:** at `t = 0`, `V = 0`; at `t = 12`,
   `V = 250(12) = 3000`. The range is `0 ≤ V ≤ 3000` (mL). Because the
   function is increasing, the range runs from the first output to the last.
3. **Relate to the graph:** graph `V = 250t` for `0 ≤ t ≤ 12`. The segment
   starts at `(0, 0)` and ends at `(12, 3000)`. The domain is the segment's
   **shadow on the t-axis** (0 to 12); the range is its **shadow on the
   V-axis** (0 to 3000). Endpoints included means the segment's dots are
   filled — there is no time `t = 12.5` with an output.

## Guided practice (10 min, with hints)

1. For `g(x) = 3x − 8`, find `g(5)`, `g(0)`, and `g(−2)`. *Hint: replace every
   `x` with the input before computing.*
2. A gym charges `G(m) = 40 + 25m` dollars for `m` months. Interpret
   `G(6) = 190` in a sentence, and find the `m` with `G(m) = 340`. *Hint:
   for the second part, set the expression equal to 340 and solve.*
3. For `V(t) = 250t` above, is `t = 15` in the domain? Is `V = 1500` in the
   range? Explain each. *Hint: check the inequality, not the formula.*
4. **Error analysis:** "Kai says the domain of `V(t) = 250t` is all real
   numbers, because you can substitute any `t`." Explain why the formula
   alone is not the whole story.

## Independent practice (12 min)

5. For `f(x) = −2x + 7`, find `f(4)`, `f(−3)`, and the input `x` with
   `f(x) = 1`.
6. A parking garage charges `C(h) = 5 + 3h` dollars for `h` hours (whole
   hours, maximum 24). Interpret `C(10) = 35`; give the domain and range
   with units; explain why `h = 10.5` is not in the domain.
7. A line segment runs from `(−2, 1)` to `(4, 13)`. Write the domain and
   range as inequalities. (The line is `y = 2x + 5`; check both endpoints.)
8. For the segment in #7, what is `f(1)`? What input gives output 9?
   Answer with a sentence for each, not just a number.

## Application (5 min)

A phone plan costs `M(d) = 30 + 0.10d` dollars for `d` texts in a month.
(a) Interpret `M(0) = 30` and `M(200) = 50`. (b) State a sensible domain for
`d` and explain your choice. (c) If a family's bill is $62, how many texts
did they send? (`30 + 0.10d = 62` → `d = 320`.)

## Exit check (3 min)

For `h(x) = 5x − 2`: (a) find `h(6)`; (b) in one sentence, explain what
`h(6)` means if `h` gives the cost in dollars of `x` concert tickets.

## Supports and extensions

- **Reading access:** read `P(3)` aloud as "P of 3" before evaluating;
  translate each notation statement into a full sentence first.
- **Alternate response:** build a two-column input/output table for each
  evaluation instead of writing the substitution line.
- **Extension:** For `V(t) = 250t`, `0 ≤ t ≤ 12`, sketch the graph and mark
  where the domain and range appear as "shadows." Then: if the bottle were
  twice as large (6000 mL), how would the domain, the range, and the formula
  change?

## Teacher note

Likely misconception: learners read `f(x)` as multiplication ("f times x")
and then try to "solve for f." Drill the read-aloud ("f of x") until it is
automatic. A second trap: treating domain as a property of the formula
rather than the situation — Kai's error in Guided 4 is worth a class
discussion, because U02's modeling work depends on story-constrained
domains. Answer-key reference: [answer-key.md](../answer-key.md#lesson-02).
