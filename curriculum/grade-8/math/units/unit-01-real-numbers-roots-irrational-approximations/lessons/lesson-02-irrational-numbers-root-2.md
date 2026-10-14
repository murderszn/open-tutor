# Lesson 02 — Irrational Numbers and Why √2 Is Irrational

**Student goal:** I can identify irrational numbers and explain the
contradiction argument that √2 cannot be written as a fraction.
**Time:** ~45 minutes · **Unit:** [U01](../README.md) · **Session 3 of 16**

## Materials

- Notebook, pencil, calculator
- [L1](lesson-01-rational-numbers-decimal-expansions.md) notes (decimal-expansion rules)

## Readiness check (5 minutes)

Classify: 0.25, 0.333…, 0.8333…, 5/11 as terminating or repeating — then
say what each has in common. (Expected: all rational; every one terminates
or repeats.) Ask: "Could a decimal *never* stop and *never* repeat? What
would that number be?"

## Teaching

An **irrational number** is a real number that is *not* rational — it cannot
be written as a fraction a/b. Its decimal expansion never terminates and
never settles into a repeating block. The digits go on forever with no
loop.

Three famous irrationals: π ≈ 3.14159265… (the circle constant), e ≈
2.71828… (the growth constant), and √2 ≈ 1.41421356… (the diagonal of a
1-by-1 square).

The most important one for this unit is √2. Here is the classic argument
that it is irrational — a **proof by contradiction**:

> **Claim:** √2 cannot be written as a fraction.
> **Suppose the opposite:** √2 = a/b, where a/b is in lowest terms (no
> common factors).
> Then 2 = a²/b², so **a² = 2b²**.
> Since a² equals 2 times something, a² is even. And if a² is even, then a
> itself must be even (an odd number squared is odd: try 3² = 9, 5² = 25).
> So write a = 2k for some integer k.
> Substituting: (2k)² = 2b² → 4k² = 2b² → **b² = 2k²**.
> By the same reasoning, b² is even, so b is even.
> **Contradiction:** a and b are both even, so a/b was *not* in lowest
> terms — but we assumed it was. Our assumption must be wrong. √2 is not a
> fraction. ∎

**Key vocabulary:** *irrational number* (not a/b; non-terminating,
non-repeating decimal), *proof by contradiction* (assume the opposite, find
an impossibility), *lowest terms*.

## Worked example 1 — sorting rationals from irrationals

Classify each, with a reason:

- 0.123456789101112… (the digits of 1, 2, 3, … written in order) —
  **irrational**: the digits never stop and never loop (the blocks get
  longer as the counting numbers grow).
- 3/7 — **rational** by definition (a fraction).
- √9 — **rational**: √9 = 3 = 3/1. A root symbol does not automatically
  mean irrational!
- √7 — **irrational**: 7 is not a perfect square, and its decimal
  2.64575… never terminates or repeats.
- 0.777… — **rational**: the block "7" repeats (it equals 7/9, Lesson 03).
- π — **irrational**: a famous non-repeating, non-terminating constant.

**Reasoning to name aloud:** the test is never "how many digits can I see"
— it is "does a block repeat, or can I prove it never does?" A symbol like
√ or π is a clue, not a verdict: √9 is rational.

## Worked example 2 — using the perfect-square test

Which of these are certainly rational: √16, √20, √25, √2, −√36?

- √16 = 4 ✓ rational; √25 = 5 ✓ rational; −√36 = −6 ✓ rational.
- √20 and √2: 20 and 2 are not perfect squares, so these roots are
  irrational (their decimals never terminate or repeat).

**Reasoning to name aloud:** for whole numbers, "perfect square or not" is
a fast first filter. But the filter only works for whole-number radicands —
decimals like √0.25 = 0.5 need the fraction test instead (√0.25 = √(1/4) =
1/2, rational).

## Guided practice (adult stays close, hints allowed)

1. Classify with a reason: 0.101001000100001… *(Hint: "Does any block
   repeat?")* Expected: irrational — the zero-blocks grow; no repetend.
2. Classify: −5/8. Expected: rational (a fraction; equals −0.625).
3. Classify: √49. Expected: rational (equals 7).
4. Classify: √11. *(Hint: "Is 11 a perfect square?")* Expected:
   irrational.
5. A classmate says "0.232323… is irrational because the decimal goes on
   forever." Do you agree? Why? Expected: disagree — "23" repeats forever,
   so it is rational (23/99).
6. Error analysis: "Leo says √2 ≈ 1.4142, and 1.4142 = 14142/10000, so √2
   is rational." Where is the flaw? Expected: 1.4142 is an
   *approximation*, not √2 itself; the true decimal never stops, so no
   fraction with those digits equals √2.

## Independent practice

1. Classify each with one reason: π/2, 0.6̄, √64, √0.09, 2.718281828459045…
   (the digits of e), −√121.
2. Write your own example of (a) a rational number with a 3-digit repetend,
   (b) an irrational number between 4 and 5.
3. Explain in 2–3 sentences why the contradiction proof in the Teaching
   section shows √2 cannot be a fraction. (Use your own words.)

*Alternate response mode:* sort pre-written number cards into two labeled
bins ("rational" / "irrational") and defend two placements orally.

## Application

Phone-screen math: a phone screen is 6.1 inches diagonally with a 19.5:9
aspect ratio. The exact width involves √(19.5² + 9²)/19.5 × 6.1 — a mess of
roots. Engineers don't need the exact value; they need 2–3 reliable digits.
Approximate the width to the nearest tenth of an inch and explain why an
approximation is *better* than the exact root expression for building the
phone. (Expected: ≈ 2.8 in; manufacturing works in tolerances, and the
root's infinite digits carry no extra usable information.)

*Check:* 19.5² + 9² = 380.25 + 81 = 461.25; √461.25 ≈ 21.477…; width =
21.477…/19.5 × … wait — recompute: width = 6.1 × 9 / √461.25 = 54.9 /
21.477… ≈ 2.556… ≈ 2.6 in. Let me redo carefully: diagonal d = 6.1,
ratio w:h = 9:19.5. w = d × 9/√(9² + 19.5²) = 6.1 × 9/√461.25. √461.25:
21² = 441, 22² = 484; 21.4² = 457.96, 21.5² = 462.25, so √461.25 ≈ 21.477.
6.1 × 9 = 54.9; 54.9/21.477 ≈ 2.556. Nearest tenth: **2.6 inches**.

## Exit check

"Is 0.999… rational or irrational? Defend your answer in one sentence."
Expected: rational — the block "9" repeats (and it equals 1, proved in
Lesson 03). Record: secure / developing / not yet.

## Supports

- **Language access:** "contradiction" = "the story breaks itself";
  act out the proof's punchline ("both even — but we said lowest terms!").
- **Alternate response mode:** two-bin card sort for classification;
  oral proof retelling instead of written.
- **Reading support:** the proof is a story with four beats (assume →
  a even → b even → broken promise). Number the beats; retell in order.

## Extension

Adapt the contradiction proof to √3: assume √3 = a/b in lowest terms; then
a² = 3b², so 3 divides a², so 3 divides a (if a prime divides a square it
divides the number); write a = 3k and finish the same way. Which step needs
the extra fact about primes? (The "a² divisible by 3 → a divisible by 3"
step — for 2 it followed from even/odd, but for 3 it needs the prime
divisor property.)

## Teacher note

**Likely misconceptions:** (1) "Long decimal = irrational" — pattern, not
length, decides. (2) "√ always means irrational" — √9 = 3. (3) The
approximation/rational confusion (Leo's error): an approximation's being a
fraction says nothing about the number itself. (4) "0.999… < 1."

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-02) has
expected responses for all guided/independent items, the application
computation (2.6 in), and the exit check.
