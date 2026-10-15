# Lesson 06 — Building, Comparing, and Choosing Models

**Student goal:** I can propose candidate function families for a dataset,
fit them, and defend my choice in writing using residuals and rate-of-change
reasoning.
**Time:** ~50 minutes · **Unit:** [U01 — Advanced function analysis and
mathematical modeling](../README.md) · **Session S14 (Week 6)**

Standards addressed (paraphrased): compare function families by how their
rates of change behave (F-LE); fit a function to data and interpret the fit,
including residuals (S-ID); define quantities with appropriate units and use
them through the solution (N-Q).

## Materials

- The three datasets below (all **fictional practice data**, invented for
  this lesson; columns and units are named on each table)
- Desmos graphing calculator and a spreadsheet (for regression and residual
  tables)
- The diagram `../assets/ferris-wheel-modeling.png` (or its text-only
  alternative below)

## Readiness check (5 minutes)

For the sequence 3, 7, 11, 15: first differences are 4, 4, 4 (constant → a
linear pattern). For 2, 6, 18, 54: ratios are 3, 3, 3 (constant → an
exponential pattern). Compute the first and second differences of
1, 4, 9, 16, 25. (Expected first: 3, 5, 7, 9; second: 2, 2, 2 — constant
second differences, the signature of a quadratic.) These signatures are
today's main tool.

## Teaching

Modeling is a decision, not a guess. The cycle:

1. **Propose candidate families** using the situation and the data's shape.
2. **Fit** each candidate (by hand with key points, or with Desmos/spreadsheet
   regression).
3. **Check residuals.** A **residual** is observed value minus predicted
   value: residual = y − ŷ. Good models have residuals that are small *and*
   patternless. Small residuals with a visible pattern (all the early ones
   positive, all the late ones negative) mean the wrong family — the model is
   systematically missing something.
4. **Check rate-of-change behavior.** Each family has a signature: linear →
   constant first differences; quadratic → constant second differences;
   exponential → constant ratios; sinusoidal → periodic, bounded, repeating
   highs and lows.
5. **Check meaning.** Does the model respect the situation — its domain, its
   long-run behavior, its units? A model that fits the numbers but predicts
   impossible values is a bad model.
6. **Defend in writing.** State the choice and cite the evidence: residuals,
   rate-of-change reasoning, and situational meaning.

**Key vocabulary:** *residual* (observed − predicted), *rate-of-change
signature* (the differences/ratios pattern each family produces),
*regression* (technology's best-fit procedure), *viable model* (fits the
data and respects the situation).

## The three situations (fictional practice data)

**Situation A — Ball toss.** A ball is tossed straight up; a sensor records
height h (meters) at time t (seconds). *Fictional practice data:*

| t (s) | 0 | 0.5 | 1.0 | 1.5 | 2.0 |
|---|---|---|---|---|---|
| h (m) | 2 | 5.75 | 7 | 5.75 | 2 |

**Situation B — Cooling soup.** A pot of soup cools on the counter; a
thermometer records temperature T (degrees Celsius) at time t (minutes).
*Fictional practice data:*

| t (min) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| T (°C) | 90 | 76.4 | 65.5 | 56.8 | 49.9 |

**Situation C — Ferris wheel.** A rider's height h (meters) above the ground
is recorded every 10 seconds during one rotation. *Fictional practice data:*

| t (s) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| h (m) | 2 | 17 | 32 | 17 | 2 |

## Worked example 1 — fitting and residuals, by hand (Situation A)

**Propose:** the height rises then falls symmetrically — quadratic candidate.
**Fit:** the vertex is at (1, 7). Vertex form h(t) = a(t − 1)² + 7. Use
(0, 2): a(0 − 1)² + 7 = 2 → a + 7 = 2 → a = −5. So h(t) = −5(t − 1)² + 7.
Check t = 0.5: −5(0.25) + 7 = −1.25 + 7 = 5.75 ✓; t = 1.5: same, 5.75 ✓;
t = 2: −5 + 7 = 2 ✓.

**Residual table (observed − predicted):**

| t | observed h | predicted h | residual |
|---|---|---|---|
| 0 | 2 | 2 | 0 |
| 0.5 | 5.75 | 5.75 | 0 |
| 1.0 | 7 | 7 | 0 |
| 1.5 | 5.75 | 5.75 | 0 |
| 2.0 | 2 | 2 | 0 |

All zeros — a perfect fit. Now compare with a **linear** rival. The mean
time is 1 s and the mean height is (2 + 5.75 + 7 + 5.75 + 2)/5 = 22.5/5 =
4.5 m. The best-fit slope is
[(−1)(−2.5) + (−0.5)(1.25) + 0(2.5) + (0.5)(1.25) + (1)(−2.5)] / (1 + 0.25 +
0 + 0.25 + 1) = (2.5 − 0.625 + 0 + 0.625 − 2.5)/2.5 = 0/2.5 = 0, so the line
is h = 4.5. Its residuals: −2.5, 1.25, 2.5, 1.25, −2.5 — they arch
systematically (negative, positive, positive, positive, negative). Even
though no single residual is enormous, the **pattern** convicts the linear
model: it is structurally wrong.

**Rate-of-change check:** first differences of the heights: 3.75, 1.25,
−1.25, −3.75 (not constant — not linear); second differences: −2.5, −2.5,
−2.5 (constant — quadratic signature ✓).

## Worked example 2 — rate-of-change reasoning (Situation B)

**Propose:** cooling slows as the soup approaches room temperature —
exponential-decay candidate. **Rate check:** temperature drops:
76.4 − 90 = −13.6; 65.5 − 76.4 = −10.9; 56.8 − 65.5 = −8.7;
49.9 − 56.8 = −6.9. The drops shrink — not linear. But the *ratios of
consecutive drops*: 10.9/13.6 ≈ 0.80; 8.7/10.9 ≈ 0.80; 6.9/8.7 ≈ 0.79.
Approximately constant at 0.80: each minute the soup loses about 80% of
what it lost the minute before — the exponential signature (of the
temperature *excess* above room temperature).

**Fit:** T(t) = 22 + 68(0.8)^t, where 22 °C is room temperature and 68 °C is
the initial excess. Predictions: t = 0: 22 + 68 = 90; t = 1: 22 + 54.4 =
76.4; t = 2: 22 + 43.52 = 65.52; t = 3: 22 + 34.816 = 56.816; t = 4: 22 +
27.8528 = 49.8528. Residuals (observed − predicted): 0, 0, −0.02, −0.016,
+0.047 — tiny and patternless. **Meaning check:** as t → ∞, T → 22, the
room temperature — the horizontal asymptote has a physical meaning. A
quadratic or linear model would eventually predict the soup cooling below
room temperature, which the situation forbids.

## Guided practice (hints allowed)

1. Compute the first and second differences of the Situation A heights
   (2, 5.75, 7, 5.75, 2). What signature do you get, and which family does
   it support?
   *Hint: do first differences first, then difference those results.*
2. For Situation B, the first two drop-ratios are 10.9/13.6 ≈ 0.80 and
   8.7/10.9 ≈ 0.80. Compute 6.9/8.7 and interpret: what does a roughly
   constant ratio of *drops* tell you about the family?
   *Hint: constant ratios are the exponential signature — here applied to
   the drops, not the raw temperatures.*
3. Build the residual table for the Ferris wheel model
   h(t) = 17 − 15cos(πt/20) against the Situation C data at t = 0, 10, 20,
   30, 40. (Recall cos(0) = 1, cos(π/2) = 0, cos(π) = −1, cos(2π) = 1.)
   *Hint: compute each prediction, then observed − predicted.*
4. **Error analysis.** A student fits a straight line to the cooling-soup
   data, notices every residual is under 4 °C, and concludes "linear is
   fine." Give two reasons this conclusion is wrong — one about the
   residuals, one about the situation.
   *Hint: small is not the same as patternless; and what does a line do
   eventually?*
5. **The Ferris wheel diagram.** The wheel in the diagram is our Situation C
   wheel. The diagram itself carries no numbers — the wheel's numeric
   facts are in the text-only list below. (a) From the facts, identify
   the wheel's diameter, its rotation period, and the boarding (lowest)
   height; convert these to the model's amplitude, period, and midline.
   (b) Write the height function `h(t)`. (c) On a printed copy of the
   diagram (or a hand sketch), mark the rider's positions at t = 0, 10,
   20, 30, 40 s and label the minimum, midline, and maximum heights.

![Flat vector-style illustration of a Ferris wheel viewed straight on: a large circle with eight spokes, a central hub, and eight orange gondola cabins evenly spaced around the rim, held by a simple A-frame support on a base platform, against a plain light-blue background. The image carries no text, numbers, or markings.](../assets/ferris-wheel-modeling.png)
*Caption: AI-generated illustration of the practice Ferris wheel — not a photograph or data source. The wheel's numeric facts are listed below; print a copy and mark the rider positions and height lines yourself.*

**Text-only alternative (same numeric facts):** The fictional wheel has
diameter 30 m (radius 15 m), completes one full rotation every 40 s, and the
rider boards at the lowest point, 2 m above the ground. At t = 0 the rider
is at the bottom (2 m); at t = 10 s at mid-height rising (17 m); at t = 20 s
at the top (32 m); at t = 30 s at mid-height falling (17 m); at t = 40 s
back at the bottom (2 m).

## Independent practice

1. Two candidate models were fit to a (fictional) dataset. Model X
   residuals: −2.5, 1.25, 2.5, 1.25, −2.5. Model Y residuals: 0.1, −0.1,
   0.0, 0.2, −0.1. Which model wins, and why? Write two sentences — one
   about size, one about pattern.
2. A (fictional) savings account balance B (dollars) after t years:
   t = 0, 1, 2, 3 → B = 1000, 1050, 1102.5, 1157.6. Compute the ratios of
   consecutive balances. Which family fits, and what does the constant
   ratio mean in context?
3. The Ferris wheel ride ends after one rotation (t = 40 s), so the model's
   viable domain is 0 ≤ t ≤ 40. Compute h(50) from h(t) = 17 − 15cos(πt/20)
   and explain in one or two sentences why that number is not a viable
   prediction even though the algebra works.

## Application — defend a model in writing

Choose **Situation B (cooling soup)**. Write a defense paragraph (5–8
sentences) for the model T(t) = 22 + 68(0.8)^t that includes:

- the family you chose and the rate-of-change evidence for it (differences
  and drop-ratios, with numbers);
- the residual evidence (size and pattern);
- why the model's long-run behavior (the 22 °C asymptote) makes sense in
  the situation — and why a linear model would fail this test.

*Sentence starters if you want them: "I chose an exponential model because
…", "The residuals show …", "The asymptote means …, which fits the
situation because …"*

## Formative review — the whole unit (S14)

Answer each in a few words or one sentence.

1. State the domain of $k(x) = \dfrac{x + 1}{x^2 - 9}$.
2. Write the inverse of p(x) = 3x + 7 (show the steps).
3. A car's value follows V(t) = 18000(0.88)^t dollars after t years. What
   does 0.88 mean in context?
4. For $s(x) = \begin{cases} 4, & x \le 2 \\ x + 1, & x > 2 \end{cases}$:
   compute s(2) and say whether the pieces join at x = 2.
5. A model predicts 65.52 °C at t = 2 min but the thermometer reads
   65.5 °C. What is the residual, and what does its sign tell you?
6. A dataset's consecutive ratios are all about 1.05. Which function
   family would you try first?

## Exit check

A dataset's **second differences are constant** (each equals 2.0). Which
function family should you try first, and what is the one-sentence
rate-of-change justification?

Record: secure / developing / not yet.

## Supports

- **Language access:** *residual* = "how far off the prediction was"
  (observed − predicted, keep the sign); *defend* = "give the evidence that
  your choice is the best one." A word bank (residual, pattern, signature,
  asymptote, viable, domain) with one-line definitions may stay on the desk.
- **Alternate response mode:** record the defense paragraph as audio, or
  build the residual tables in a spreadsheet and narrate each row's meaning
  instead of writing.
- **Reading support:** the Application paragraph may be dictated; the
  sentence starters are always available, not only on request.

## Extension

Use Desmos regression on the Situation C data to fit (a) a sine model and
(b) a degree-4 polynomial. Compare the largest absolute residual of each.
Which would you choose for predicting the *next* rotation, and why does the
situational meaning (not just the fit) decide?

## Teacher note

**Likely misconceptions:** (1) "small residuals = good model" — drill that
*patternless* matters as much as *small*; a curved residual pattern is a
rejected model wearing a disguise; (2) fitting the raw temperatures' ratios
in Situation B instead of the drops' ratios — the constant-ratio signature
belongs to the *excess* above the asymptote, a subtle point worth naming;
(3) treating R² or "the line looks close" as a defense — this unit requires
residual and rate-of-change reasoning in writing, not vibes; (4) extending a
model past its viable domain (Independent practice 3) — always ask "does
the situation still exist there?"; (5) confusing residual sign — negative
residual means the model *over*predicted (observed below predicted).

**Answer-key reference:** Worked solutions for every scored item (guided,
independent, application, formative review, exit check, extension) are in
`../answer-key.md`
(Lesson 06 section). Answer keys are kept separate from student materials —
never place a key beside a student question.
