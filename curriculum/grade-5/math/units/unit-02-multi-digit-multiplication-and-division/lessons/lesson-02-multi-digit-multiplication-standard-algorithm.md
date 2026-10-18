# Lesson 02 — Multi-Digit Multiplication and the Standard Algorithm

**My goal:** I can multiply multi-digit whole numbers using the standard
algorithm, showing each partial product, and check the result with an estimate
and with an area model.

**Time:** about 40 minutes (5 readiness · 12 teaching · 8 guided · 12
independent · 3 exit).

**Materials:** paper and pencil, grid paper (helpful for lining up digits),
the [area-model SVG](../assets/area-model-23-x-45.svg) printed or on screen.

**Standards:** 5.NBT.B.5 · **Unit objectives:** UO1, UO5

## Readiness check (5 minutes)

1. Multiply: 7 × 253 (show your method).
2. Estimate 46 × 32. (Round first — no exact work yet.)
3. Expand 23 × 45 as (20 + 3) × (40 + 5). What four multiplications does that
   give you?

## Retrieval warm-up (3 minutes, from Unit 01)

- 34 × 100 = 3,400 · 5 × 1,000 = 5,000 — the digit shifts because each place
  is 10 times its neighbor.
- A partial product is just "one piece of the whole multiplication, written
  out." The standard algorithm is partial products written compactly.

## Explicit teaching

### The standard algorithm is partial products in shorthand

You already know **partial products**: break each factor apart by place value,
multiply every piece, and add. For 23 × 45:

| Pieces | Product |
|---|---|
| 20 × 40 | 800 |
| 20 × 5 | 100 |
| 3 × 40 | 120 |
| 3 × 5 | 15 |
| **Total** | **1,035** |

The [area model](../assets/area-model-23-x-45.svg) draws exactly this: a 23-by-45
rectangle split into four labeled boxes — 800, 100, 120, and 15 — that add to
1,035.

The **standard algorithm** does the same four multiplications in two rows:

```
      23
   ×  45
   ----
     115      ← 3 × 45  (the ones row: 3×5=15, write 5 carry 1; 3×4=12+1=13)
    920       ← 40 × 23 (the tens row: write a 0 in the ones place first!)
   ----
   1,035
```

**Why the 0 in the tens row?** You are multiplying by 40, not 4. Writing the 0
lines every digit up under its true place. Forgetting it is the #1 error —
your answer lands in the wrong place-value neighborhood and your Lesson 01
estimate will scream.

### Worked example 1 — two two-digit numbers, step by step

**23 × 45.**

Ones row: 3 × 45. 3 × 5 = 15 → write 5, carry 1. 3 × 4 = 12, plus the carried
1 = 13. Write 13. Ones row = **115**.
Tens row: 40 × 23. Write 0 in the ones place. 4 × 3 = 12 → write 2, carry 1.
4 × 2 = 8, plus 1 = 9. Tens row = **920**.
Add: 115 + 920 = **1,035**.
Estimate check: 20 × 50 = 1,000. 1,035 is close. ✓
Area-model check: 800 + 100 + 120 + 15 = 1,035. ✓ (All three agree.)

### Worked example 2 — three-digit × two-digit

**126 × 14.**

Ones row: 4 × 126. 4 × 6 = 24 → write 4, carry 2. 4 × 2 = 8 + 2 = 10 → write
0, carry 1. 4 × 1 = 4 + 1 = 5. Ones row = **504**.
Tens row: 10 × 126. Write 0, then 1 × 126 = 126 → **1,260**.
Add: 504 + 1,260 = **1,764**.
Estimate check: 15 × 130 = 1,950. 1,764 is reasonably near. ✓

### Worked example 3 — error analysis (read carefully!)

Jonah's work:

```
     36
   × 27
   ----
    162
```

Jonah stopped after the ones row (6 × 27 = 162). He **forgot the tens row**
entirely. The tens digit of 36 means 30, so the missing row is 30 × 27 = 810.
The correct total is 162 + 810 = **972**. Jonah's 162 is missing 810.

Takeaway: every digit of the second factor gets its own row, and each row's
place value must be honored.

### Worked example 4 — a four-digit factor

**1,208 × 6.**

6 × 8 = 48 → write 8, carry 4. 6 × 0 = 0 + 4 = 4. 6 × 2 = 12 → write 2,
carry 1. 6 × 1 = 6 + 1 = 7. Answer: **7,248**.
Estimate check: 1,200 × 6 = 7,200. Close. ✓

## Guided practice (with hints)

**G1.** Compute **57 × 18** by the standard algorithm, then verify with
partial products (50 × 10, 50 × 8, 7 × 10, 7 × 8).
*Hint: 57 × 8 = 456; 57 × 10 = 570. Add them.*

**G2.** Compute **38 × 25**. Estimate first.
*Hint: ones row = 5 × 38; tens row = 20 × 38. Don't skip the 0.*

**G3.** Find the error: "4,231 × 3 = 12,963." Recompute digit by digit and say
what went wrong — a carry slip, a copying slip, or something else?
*Hint: 3 × 4,231 — do it digit by digit and watch the middle places.*

## Independent practice

**I1.** Compute: (a) 46 × 32 (b) 64 × 29. Show both rows and an estimate.
**I2.** Compute 317 × 8. (One row only — but every carry still matters.)
**I3.** Estimate, then compute: 287 × 42.
**I4.** **Explain your reasoning:** Why does the tens row of the standard
algorithm always end in 0? Use the words *place value* in your answer.

## Applied task

The art club orders 25 supply boxes at $38 each (this is real data from the
track's legacy budget task). Estimate the total, compute it exactly by the
standard algorithm, and write one sentence explaining why your exact answer is
trustworthy.

## Exit check

Compute **3,742 × 6** by the standard algorithm. Show the carried digits.

## Supports, alternate response modes, extensions

- **Reading/language access:** keep "partial product," "carry/regroup," and
  "row" on the word wall; grid paper keeps columns aligned for everyone.
- **Alternate response mode:** narrate each step aloud ("6 times 8 is 48, write
  8, carry 4") while a partner writes; or point to each partial product in the
  area-model SVG instead of writing it.
- **Extension:** multiply 4,806 × 29 (estimate first; then verify by partial
  products and by the inverse check 139,374 ÷ 29 = 4,806).

## Teacher note

- **Likely misconceptions:** dropped tens-row 0 (answer off by a factor of 10 —
  the estimate catches it); carries added to the wrong digit; stopping after
  the ones row (Jonah's error); misaligning rows on unlined paper.
- **Answer-key reference:** all items solved in `answer-key.md` (Lesson 02).
