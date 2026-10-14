# Lesson 05 — Inverse Functions: Running the Machine Backwards

**Unit 01 · Session S13 · ~50 minutes**
**Standards:** F-BF.4.a, F-BF.4.c (+) (enrichment), F-IF.5, F-IF.2

## Student goal

By the end of this lesson I can solve `f(x) = c`, write the inverse of
a simple invertible function, prove a pair are inverses by composing
them, and explain what an inverse means — with its domain and units —
in a real situation.

## Materials

Notebook, pencil, calculator.

## Readiness check (5 min)

Let `f(x) = 3x − 5`.

1. Solve `f(x) = 10`. Show each step.
2. If `f(a) = 10`, what is `a`? How is this question different from
   question 1 — or is it?

## Explicit teaching

An **inverse function** undoes its partner. If `f` sends input `a` to
output `b`, then the inverse `f⁻¹` sends `b` back to `a`. Written
carefully:

`f(a) = b`  exactly when  `f⁻¹(b) = a`.

The `−1` is **not** an exponent — `f⁻¹(x)` does not mean `1/f(x)`.
It is notation for "the function that reverses `f`." This is the
single most misread symbol in the unit; say "f-inverse," never
"f to the negative one."

**Not every function has an inverse.** Reversing requires that no two
inputs share an output — the function must be **one-to-one**. The
graph test is the **horizontal line test**: if any horizontal line
hits the graph more than once, the function is not one-to-one and has
no inverse (over its whole domain). `f(x) = x²` fails it (both 2 and
−2 give 4); `f(x) = 2x + 1` passes it.

**Writing an inverse (the swap-and-solve method).**

1. Write `y = f(x)`.
2. Swap `x` and `y` — this is the "run it backwards" move: old
   outputs become new inputs.
3. Solve for `y`.
4. Rename: the result is `y = f⁻¹(x)`.

**Verifying by composition.** `g` is the inverse of `f` exactly when
both compositions return the input unchanged:

`f(g(x)) = x`  **and**  `g(f(x)) = x`

(for all `x` in the relevant domains). One direction is not enough in
general — check both.

**Inverses inherit domain and range — swapped.** The domain of `f⁻¹`
is the range of `f`, and the range of `f⁻¹` is the domain of `f`.
In a context, the units swap too: if `f` maps hours → dollars, `f⁻¹`
maps dollars → hours.

## Worked examples (modeled reasoning)

**Example 1 — Write and verify an inverse.**

Find the inverse of `f(x) = 3x − 5` and verify it by composition.

*Reasoning.* Swap-and-solve: `y = 3x − 5` → swap → `x = 3y − 5` →
solve: `3y = x + 5`, so `y = (x + 5)/3`. Thus `f⁻¹(x) = (x + 5)/3`.

Verify both directions. First: `f(f⁻¹(x)) = f((x+5)/3) = 3·((x+5)/3) − 5
= (x + 5) − 5 = x` ✓. Second: `f⁻¹(f(x)) = f⁻¹(3x − 5) = ((3x − 5) + 5)/3
= 3x/3 = x` ✓. Both return the input, so the pair is confirmed. Note
the meaning: `f` "triples and subtracts 5"; `f⁻¹` "adds 5 and
divides by 3" — the inverse runs the steps backwards in reverse order,
like unwinding.

**Example 2 — Inverse in context, with domain and units.**

A taxi charges `C(m) = 2.50 + 1.75m` dollars for `m` miles
(`0 ≤ m ≤ 40`).

a) Solve `C(m) = 20`: how many miles for $20?
b) Write `C⁻¹` and interpret it, with domain and units.

*Reasoning.* a) `2.50 + 1.75m = 20` → `1.75m = 17.50` → `m = 10`.
Check: `C(10) = 2.50 + 17.50 = 20` ✓. Each step follows from the
equality before it (A-REI.1): subtracting 2.50 from equal quantities
keeps them equal; dividing by 1.75 (nonzero) keeps them equal.

b) Swap-and-solve: `C = 2.50 + 1.75m` → `m = (C − 2.50)/1.75`, so
`C⁻¹(x) = (x − 2.50)/1.75`. Interpretation: "`C⁻¹(x)` is the number
of miles you can ride for `x` dollars." Domain of `C⁻¹` = range of
`C` = [2.50, 72.50] dollars; its outputs are miles. The units flipped,
exactly as promised. A $20 fare gives `(20 − 2.50)/1.75 = 10` miles —
matching part (a), which is the point of an inverse.

**Example 3 — When there is no inverse (and the fix).**

Does `f(x) = x²` (domain: all real numbers) have an inverse? If not,
can a smaller domain fix it?

*Reasoning.* Horizontal line test: `y = 4` hits the parabola at
`x = 2` and `x = −2` — two inputs, one output. Not one-to-one, so no
inverse on this domain. But restrict the domain to `x ≥ 0`: now each
nonnegative output comes from exactly one input, the horizontal line
test passes, and the inverse is `f⁻¹(x) = √x` (domain `x ≥ 0`).
Verify: `f(f⁻¹(x)) = (√x)² = x` for `x ≥ 0` ✓, and
`f⁻¹(f(x)) = √(x²) = |x| = x` for `x ≥ 0` ✓. Restricting the domain
is the standard repair — it returns as enrichment in Unit 06 with
inverse trigonometry.

## Guided practice

1. Solve `g(x) = 14` for `g(x) = 4x + 2`, justifying each step in a
   half-sentence. [What justifies "subtract 2 from both sides"?]
2. Find the inverse of `h(x) = (x/2) − 7` by swap-and-solve; verify
   with **both** compositions. [Show the algebra, not just the
   answer.]
3. Does `f(x) = x³` have an inverse on all real numbers? Use the
   horizontal line test, then write the inverse and verify it.
   [Cube roots undo cubes.]
4. A gym charges `M(v) = 35 + 12v` dollars for `v` visits in a month
   (`0 ≤ v ≤ 20`). Write `M⁻¹`, interpret it in a sentence with
   units, and state its domain. [Which quantity is the input now?]

## Independent practice

1. Find and verify the inverses of: a) `f(x) = 5 − 2x`
   b) `g(x) = ∛(x + 4)`  c) `h(x) = x² + 3` with domain `x ≥ 0`.
   For (c), state the domain of `h⁻¹`.
2. A function `f` has the table: `x` = 1, 2, 3, 4 → `f(x)` = 3, 7, 11,
   15. a) Does `f⁻¹` exist? b) Write the table of `f⁻¹`. c) Read
   `f⁻¹(11)` from your table (F-BF.4.c enrichment: reading an
   inverse from a table).
3. Error analysis: "To find the inverse of `f(x) = 2x + 6`, I computed
   `1/f(x) = 1/(2x+6)`." Name the notational confusion and give the
   correct inverse with verification.
4. Show that if `f` and `g` are inverses, then the graph of `g` is the
   reflection of the graph of `f` across the line `y = x`. (Hint:
   `f(a) = b` means the point `(a, b)` is on `f`'s graph; where is
   the matching point on `g`'s graph?)
5. A bakery's daily cost is `C(n) = 180 + 1.20n` dollars for `n`
   loaves (`0 ≤ n ≤ 500`). The manager asks: "How many loaves can we
   afford on a $600 budget?" Answer with `C⁻¹`, interpret, and check
   that your answer's units make sense (N-Q.1). Then explain why
   `C⁻¹(600)` and "solve `C(n) = 600`" are the same question.

## Application

A drug's concentration in the bloodstream (mg/L) `t` hours after a
dose is modeled by `D(t) = 48·(1/2)^(t/6)` for `0 ≤ t ≤ 48`. (This
is an exponential model — Unit 05's territory — but inverses don't
wait for permission; use a calculator.)

a) Evaluate `D(6)` and `D(12)`; interpret both with units.
b) A nurse needs the time when the concentration falls to 12 mg/L.
   Explain why this is an inverse question, then solve it (a
   calculator or Desmos table is fine) and verify by evaluating `D`
   at your answer.
c) State the domain and range of `D`, then state the domain and
   range of `D⁻¹` (as sets), and interpret each in one sentence.

## Exit check

1. `f(x) = 4x − 8`. Write `f⁻¹(x)` and verify with one composition
   of your choice — then say why checking only one direction is
   risky.
2. In one sentence: what does `f⁻¹(20) = 10` mean if `f` maps miles
   to dollars?

## Supports and extension

- **Reading/language access:** A two-column "forward / backward"
  notebook table: left column the function's steps in order, right
  column the inverse's steps in reverse order.
- **Alternate response mode:** Inverses may be found by "unwinding"
  described aloud ("add 5, then divide by 3") before any algebra is
  written; the adult scribes the symbolic version.
- **Extension (F-BF.4.c):** Given the graph of an invertible function
  (adult supplies), read three values of `f⁻¹` directly from the
  graph by swapping coordinates, and explain the `y = x` reflection
  connection in your own words.

## Teacher note

The `f⁻¹` vs. `1/f(x)` confusion will appear — confront it the first
time it surfaces, not later. Also watch for swap-and-solve done
mechanically with the swap forgotten (solving for `x` instead of
`y`); require the explicit "swap" line. Learners often verify only
one composition — the extension counterexample `f(x) = x²`,
`g(x) = √x` on restricted domains shows why both matter (on all
reals, `g(f(−2)) = 2 ≠ −2`). Answer-key reference: `answer-key.md`,
Lesson 05.
