# Lesson 03 — Prime and Composite: Decided by Factors, Not by Memory

**Session:** 5 · **Time:** 35 minutes · **Goal:** I can determine whether a
whole number 1–100 is **prime** or **composite** by finding its factors, and
justify the decision in words. I can run the sieve on a 1–100 chart without
using a memorized list.

**Materials:** 1–100 chart (a second, blank copy), tiles, two crayons, paper
and pencil.

## Readiness check (4 min)

Retrieval warm-up from Unit 01: round 4,832 to the nearest thousand (5,000)
and name the halfway case 99,750 → nearest thousand (100,000). Then ask:
"List all factor pairs of 12." ((1, 12), (2, 6), (3, 4).) If the hunt stalls,
rebuild one pair with tiles first.

## Explicit teaching (10 min)

Some numbers are generous with factors and some are stingy. We name the two
kinds:

- **Prime** — a whole number greater than 1 with **exactly two** factors: 1
  and itself. Example: 7's only factor pairs are (1, 7). Two factors. Prime.
- **Composite** — a whole number with **more than two** factors. Example: 12
  has (1, 12), (2, 6), (3, 4) — six factors. Composite.
- **Neither** — the number **1** has only one factor (1 itself). It is not
  prime and not composite. It is the only whole number in this club.

The test is always the factor list — never a memorized chart. "Is 29 prime?
Well, I checked 2 through 28 and only 1 and 29 worked" is a complete,
correct justification.

Now the sieve — a 2,000-year-old trick (Eratosthenes) that finds *all* primes
to 100 with almost no hunting:

1. Cross out **1** (neither).
2. Circle **2** (prime), then cross out every multiple of 2 after it
   (4, 6, 8, …) — they all have a factor 2, so they are composite.
3. Circle **3** (the next un-crossed number — prime), cross out its multiples
   (6, 9, 12, …, 99).
4. Circle **5**, cross out its multiples (10, 15, …, 100). Circle **7**,
   cross out its multiples (14, 21, …, 98).
5. Stop. The next un-crossed number is 11, and 11 × 11 = 121 is past 100 —
   anything composite left would need a factor ≤ 10, and we already crossed
   out all multiples of 2, 3, 5, 7.

Everything circled is prime. Count them: there are exactly **25**:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
73, 79, 83, 89, 97.

## Worked example 1 — Is 51 prime or composite?

Hunt factor pairs of 51: (1, 51). Try 2: no. Try 3: 3 × 17 = 51 — found a
partner! So 51 has factors 1, 3, 17, 51 — four factors. **Composite.**
Justification sentence: "51 is composite because, besides 1 and 51, it has
factors 3 and 17 (3 × 17 = 51)."

Common slip: "51 ends in 1, so it looks prime" — appearance means nothing;
only the factor list decides.

## Worked example 2 — Is 97 prime?

Hunt: (1, 97). Check 2 (odd — no), 3 (9 + 7 = 16, not divisible by 3 — no),
5 (doesn't end in 0 or 5 — no), 7 (7 × 13 = 91, 7 × 14 = 98 — no). Keep
checking prime factors up to √97 ≈ 9.8: we already tried 2, 3, 5, 7. Any
composite factor would itself have a prime factor ≤ 7, already tested.
**Prime.** Justification: "The only whole-number factor pair of 97 is
(1, 97), so it has exactly two factors — prime."

## Guided practice (with hints)

Work through these together; the adult gives the hint, the learner does the
writing.

1. Classify **13** and justify with its factor list. *(Hint: check every
   number 2 through 6 — why is that enough?)*
2. Classify **21** and justify. *(Hint: which small factor jumps out? Pair
   it.)*
3. True or false: "1 is prime because it has fewer than two factors."
   *(Hint: how many factors does 1 have — and what does the definition say?)*
4. Run the sieve through the 3s on your chart. How many numbers are still
   un-crossed and un-circled below 30? *(Hint: don't rush — cross every
   multiple of 3, including ones already crossed.)*

## Independent practice

5. Classify each as prime, composite, or neither — with a one-sentence
   factor-list justification: **2, 9, 15, 23, 33, 49, 50**.
6. Complete the sieve on your 100 chart through the 7s. List your 25 primes
   and count them.
7. A learner says "even numbers are all composite." Give a counterexample and
   explain what is wrong with the claim.
8. Find all composite numbers between 60 and 70. For one of them, write the
   full factor list.

## Application

Prime detective report: pick any number 80–100. Run the full factor hunt,
classify it, and write a three-sentence "detective report": the number, the
factor evidence, and the verdict with the definition quoted ("exactly two
factors" or "more than two factors").

## Exit check

Classify **37** and **39**. For each, write the factor list and one
justification sentence.

## Supports

- **Reading/language access:** read "prime" as "exactly two factors" every
  time you say it, until the phrase sticks; read "composite" as "more than
  two factors."
- **Alternate response mode:** the learner may sort number cards into three
  labeled bins (prime / composite / neither) and narrate one justification
  per bin instead of writing all lists.
- **Extension:** numbers with **exactly three** factors (4, 9, 25, 49) — what
  are they? (Squares of primes.) Why does a prime square always have exactly
  three factors? (1, p, p² — the square pair collapses.)

## Teacher note

Likely misconception: classifying by appearance ("91 looks prime") or by
memorized lists from the sieve. Reteach: the sieve is a *tool*, not the
answer — after the chart, every classification still needs the factor list
as evidence. The critical shortcut to teach: to test a number up to 100, you
only need to try prime factors 2, 3, 5, 7 (because any composite factor has a
prime factor ≤ √n ≤ 10). Also watch: learners often call 1 prime "because it
only has 1 and itself" — stress "exactly *two* (different) factors."
Answer-key reference: [answer-key.md](../answer-key.md#lesson-03).
