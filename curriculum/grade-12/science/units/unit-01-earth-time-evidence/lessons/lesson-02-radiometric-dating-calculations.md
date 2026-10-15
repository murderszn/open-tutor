# Lesson 02 — Radiometric Dating Calculations

**Unit 01 · Session S6 · ~50 minutes**
**Standards:** HS-ESS1-6 (Earth's formation and early history from ancient materials)

## Student goal

By the end of this lesson I can use the half-life equation to compute a
rock's age from a parent/daughter measurement, showing every arithmetic
step — both when the answer is a whole number of half-lives and when it
needs the logarithm form.

## Materials

Notebook, pencil, calculator. (A spreadsheet is a fine substitute and
previews Session S17.)

## Readiness check (5 min)

Answer in the notebook before the lesson starts:

1. Start with 100 coins. Remove half, then half of what is left, then
   half again. How many coins remain after each removal? Write the
   three numbers.
2. If 1/8 of the original coins remain, how many removals happened?
   What pattern connects "fraction remaining" to "number of removals"?

(Adult: question 2 previews the whole lesson — "fraction remaining →
number of half-lives → age." If the powers-of-two pattern is insecure,
run the coin exercise physically before continuing.)

## Explicit teaching

**The idea.** Some atoms are unstable: they decay into a different
element at a steady, measurable rate. The original atom is the
**parent isotope**; what it becomes is the **daughter isotope**. A rock
that started with only parent atoms accumulates daughters over time —
so the parent/daughter ratio is a clock.

**Half-life.** The **half-life** (t½) is the time for exactly half of
the parent atoms in a sample to decay. After one half-life, 1/2 of the
parent remains; after two, 1/4; after three, 1/8. The pattern is
exponential, and it never depends on how much you started with:

> **N = N₀ · (1/2)^(t / t½)**

N₀ is the starting number of parent atoms, N is how many remain after
time t. This one equation is the whole clock.

**Two ways to solve for the age t.**

*Route A — count half-lives (no calculator tricks).* If the remaining
fraction N/N₀ is a power of 1/2 (1/2, 1/4, 1/8, 1/16…), count how many
halvings that took, then multiply by t½. Example: 1/4 remaining = 2
half-lives, so t = 2·t½.

*Route B — the logarithm form (any fraction).* Take the log of both
sides of the clock equation and solve for t:

> **t = t½ · ln(N₀/N) / ln 2**

Read it as: "the age equals the half-life times how many halvings the
measured ratio represents." The quantity ln(N₀/N)/ln 2 is just the
number of half-lives — possibly fractional. (ln is the natural log key
on your calculator; ln 2 = 0.6931.)

**From a lab ratio to the fraction.** A lab reports amounts, e.g.
"equal masses of parent and daughter." Convert first:

> **N/N₀ = parent / (parent + daughter)**

— *assuming no daughter was present when the rock formed.* That
assumption is Lesson 03's business; for today's calculations, take it
as given unless the problem says otherwise.

**The isotope systems we will use** (real reference values):

| System | Half-life | Good for dating |
|---|---|---|
| U-238 → Pb-206 | 4.468 billion years (Ga) | Very old rocks and minerals |
| K-40 → Ar-40 | 1.248 Ga | Volcanic rocks, old to middle-aged |
| Rb-87 → Sr-87 | 48.8 Ga | Very old rocks (long clock) |
| C-14 → N-14 | 5,730 years | Organic material, thousands of years old |

Why four systems? A clock should tick at a speed comparable to the
interval it measures — you do not time a marathon with a stopwatch that
only runs for a minute, and you do not date a 4-billion-year rock with
a 5,730-year clock.

### The decay curve (reference for the whole unit)

<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exponential decay curve: fraction of parent remaining versus time in half-lives">
  <rect x="0" y="0" width="420" height="320" fill="#ffffff"/>
  <text x="210" y="22" text-anchor="middle" font-size="13" font-family="sans-serif">Fraction of parent remaining vs. time (half-lives)</text>
  <line x1="60" y1="20" x2="60" y2="270" stroke="#333" stroke-width="1.5"/>
  <line x1="60" y1="270" x2="400" y2="270" stroke="#333" stroke-width="1.5"/>
  <text x="14" y="150" font-size="11" font-family="sans-serif" transform="rotate(-90 24 150)" text-anchor="middle">fraction of parent remaining</text>
  <text x="235" y="300" text-anchor="middle" font-size="11" font-family="sans-serif">time, in half-lives</text>
  <text x="50" y="275" font-size="10" font-family="sans-serif">0</text>
  <text x="126" y="275" font-size="10" font-family="sans-serif">1</text>
  <text x="196" y="275" font-size="10" font-family="sans-serif">2</text>
  <text x="266" y="275" font-size="10" font-family="sans-serif">3</text>
  <text x="336" y="275" font-size="10" font-family="sans-serif">4</text>
  <text x="396" y="275" font-size="10" font-family="sans-serif">5</text>
  <text x="44" y="60" font-size="10" font-family="sans-serif">1.0</text>
  <text x="44" y="165" font-size="10" font-family="sans-serif">0.5</text>
  <text x="36" y="218" font-size="10" font-family="sans-serif">0.25</text>
  <path d="M60,55 C120,100 180,170 260,230 C320,262 370,272 400,275" fill="none" stroke="#1f6fb2" stroke-width="2.5"/>
  <circle cx="60" cy="55" r="4" fill="#1f6fb2"/><text x="66" y="48" font-size="10" font-family="sans-serif">1</text>
  <circle cx="130" cy="162" r="4" fill="#1f6fb2"/><text x="136" y="155" font-size="10" font-family="sans-serif">1/2</text>
  <circle cx="200" cy="216" r="4" fill="#1f6fb2"/><text x="206" y="209" font-size="10" font-family="sans-serif">1/4</text>
  <circle cx="270" cy="243" r="4" fill="#1f6fb2"/><text x="276" y="236" font-size="10" font-family="sans-serif">1/8</text>
  <circle cx="340" cy="257" r="4" fill="#1f6fb2"/><text x="346" y="250" font-size="10" font-family="sans-serif">1/16</text>
  <line x1="130" y1="162" x2="130" y2="270" stroke="#999" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="200" y1="216" x2="200" y2="270" stroke="#999" stroke-width="1" stroke-dasharray="4,3"/>
</svg>

*(Schematic curve for reasoning, not lab data. The points are exact
powers of one-half — the only fractions Route A can handle.)*

## Worked examples (modeled reasoning)

**Example 1 — One half-life, read straight off (U-238 system).**

A zircon crystal contains equal amounts of U-238 and Pb-206, and the
geologist has shown that all the Pb-206 is radiogenic (produced by
decay, none present at formation). How old is the crystal? (U-238 t½ =
4.468 Ga.)

*Reasoning.* Step 1 — convert the lab ratio to a remaining fraction.
Parent = 1 part, daughter = 1 part:
N/N₀ = 1 / (1 + 1) = 1/2.

Step 2 — read the half-lives. 1/2 remaining means exactly one half-life
has passed (Route A): number of half-lives = 1.

Step 3 — multiply. t = 1 × 4.468 Ga = **4.468 Ga ≈ 4.47 Ga**.

Step 4 — sanity check. 4.47 Ga is slightly younger than Earth's 4.54 Ga
age — a very old crystal in a very old rock. Plausible; nothing in the
arithmetic contradicts known geology. (If the answer had come out
older than the Earth, that would be a red flag — see Lesson 03.)

**Example 2 — Three half-lives, counted (K-40 system).**

A volcanic rock sample holds 7 times as much Ar-40 as K-40. Find its
age. (K-40 t½ = 1.248 Ga.)

*Reasoning.* Step 1 — fraction remaining:
N/N₀ = parent / (parent + daughter) = 1 / (1 + 7) = 1/8.

Step 2 — count halvings: 1/2 → 1 halving, 1/4 → 2, 1/8 → 3. Three
half-lives.

Step 3 — multiply: t = 3 × 1.248 Ga.
1.248 × 3 = 3.744 Ga.

Answer: **t ≈ 3.74 Ga.**

Step 4 — sanity check via the log form (Route B, independent check):
t = 1.248 × ln(8)/ln 2. ln 8 = 2.0794, ln 2 = 0.6931,
2.0794 / 0.6931 = 3.000. 1.248 × 3.000 = 3.744 Ga. Both routes agree.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. A sample has 1/16 of its original U-238 left. How many half-lives
   have passed, and what is the age in Ga? [Count the halvings; t½ =
   4.468 Ga.]
2. Charcoal from a campfire has 1/4 the C-14 of living wood. What is
   its age in years? [C-14 t½ = 5,730 y; this is Route A.]
3. A mineral retains 37% of its original K-40. Use Route B:
   t = 1.248 × ln(1/0.37)/ln 2. Compute ln(1/0.37), divide by
   ln 2 = 0.6931, and multiply by 1.248. [1/0.37 ≈ 2.70.]
4. Error analysis: a learner measures a parent:daughter ratio of 1:3
   and plugs "1/3" into the clock equation as N/N₀, getting
   t = t½·ln(3)/ln 2 ≈ 1.58·t½. Identify the error, compute the
   correct N/N₀, and give the correct age in half-lives.

## Independent practice

Complete in the notebook; the adult scores same-day.

1. A meteorite fragment shows Rb-87 and Sr-87 in a 1:1 ratio (all
   Sr-87 radiogenic). Compute its age using t½ = 48.8 Ga.
2. A bone fragment has 60% of the C-14 of a living bone. Use Route B
   to find its age in years (t½ = 5,730 y). Show the substitution.
3. A granite contains K-40 and Ar-40 in the ratio 3:1 (parent:daughter
   = 3:1). Find its age in Ga. (First convert the ratio to N/N₀.)
4. Two zircons from the same rock: Zircon A gives 4.40 Ga by U-Pb;
   Zircon B gives 4.43 Ga by U-Pb. A learner concludes the rock is
   "between 4.40 and 4.43 billion years old." Is that a fair statement
   of what the two numbers show? Explain in two to three sentences —
   and name one assumption that could still be wrong. (Fictional
   practice numbers; the assumption question previews Lesson 03.)
5. A museum label claims a fossil is "65 million years old, dated by
   carbon-14." Use the C-14 half-life to explain why that claim cannot
   be right: how many half-lives is 65 million years, and what fraction
   of C-14 would remain? (Compute 65,000,000 / 5,730 first.)

## Application

A geologist dates three minerals from one rock layer using three
different clocks (fictional practice data, t½ values from the table):

- Mineral X (U-238): parent fraction 0.82 → age = ?
- Mineral Y (K-40): parent fraction 1/2 → age = ?
- Mineral Z (Rb-87): parent fraction 0.98 → age = ? (use Route B)

a) Compute all three ages with full steps.
b) Do the three ages agree with each other? The accepted age of the
   layer is 1.25 Ga. For each mineral, compute the difference from
   1.25 Ga in Ma, and judge whether the set is concordant.
c) Which clock do you trust most here, and why? (Hint: compare each
   clock's half-life to the ~1.25 Ga interval — and consider how much
   of each parent has actually decayed.)

## Exit check

1. Write both forms of the clock equation from memory.
2. A sample's parent fraction is 0.125. How many half-lives have passed?
   If it is a K-40 sample, what is its age in Ga?

## Supports and extension

- **Reading/language access:** "Parent/daughter," "half-life," and the
  two equation forms go in the notebook with a worked micro-example
  each. Calculator steps may be dictated; the reasoning must be the
  learner's.
- **Alternate response mode:** The decay curve may be explored
  physically — fold a strip of paper in half repeatedly and label each
  fold with the remaining fraction and the half-life count.
- **Extension:** Derive the Route B formula from N = N₀(1/2)^(t/t½) by
  taking the natural log of both sides and solving for t. Then show
  that a sample with parent fraction 0.37 has undergone about 1.43
  half-lives — and explain why the age is *not* 1.43 × t½ "by
  definition" but by the algebra you just did.

## Teacher note

Likely misconceptions: (1) "after two half-lives, all the parent is
gone" — no: 1/4 remains; the curve approaches zero but never reaches
it; (2) plugging the parent:daughter *ratio* into the equation instead
of parent/(parent+daughter) — Guided Practice 4 exists for exactly
this; (3) thinking a bigger half-life means "decays faster" — invert
it explicitly: long half-life = slow clock; (4) calculator errors with
ln — have the learner write ln(N₀/N) and ln 2 as separate lines before
dividing. Answer-key reference: `answer-key.md`, Lesson 02.
