# Lesson 2 — From Crash to Depression: A Trigger Is Not a Cause

**Goal:** You will distinguish the October 1929 stock market crash
(a trigger) from the interacting causes that turned a crash into a
decade-long depression, and you will compute and interpret the
1929–1932 market decline and the 1929–1940 unemployment series.

**Time:** about 50 minutes. **Materials:** this lesson, a notebook,
the unemployment chart (`assets/unemployment-1929-1940.svg`, fully
tabled below). **Adult note:** no sensitive-content warnings beyond
financial hardship; keep the focus on mechanisms, not blame of
individual investors.

**Readiness check (2 minutes):** From Lesson 1, explain margin buying
in one sentence, and state what happens to a margin buyer when prices
fall 20%. (If you can't: re-read Worked example 2's hint — $100 of
stock, $10 of your own money.)

## Part 1 — October 1929: what actually fell, and by how much

The Dow Jones Industrial Average — an index of large companies'
stock prices — peaked at 381.17 on September 3, 1929. After weeks of
sharp swings, panic selling hit on Black Thursday (October 24),
Black Monday (October 28, down nearly 13%), and Black Tuesday
(October 29, down nearly 12%). By mid-November the Dow had lost
almost half its value. The slide did not stop there: it continued
through the summer of 1932, closing at 41.22 on July 8, 1932, and did
not return to its 1929 peak until November 1954. (Federal Reserve
History, "Stock Market Crash of 1929," data via FRED.)

### Worked example 1 — Computing the decline

*Question:* By what percentage did the Dow fall from its September
1929 peak (381.17) to its July 1932 trough (41.22)?

*Model reasoning:* Percentage change = (new − old) ÷ old × 100.
(41.22 − 381.17) ÷ 381.17 = (−339.95) ÷ 381.17 = −0.8918… × 100 =
about −89%. So the market lost about 89% of its peak value — roughly
nine dollars of every ten. A common error is to compute 41.22 ÷
381.17 = 10.8% and report "the market fell 10.8%": that 10.8% is what
*remained*, not what was lost. Always check: fall + remainder =
100% (89% + 11% ≈ 100%).

### Worked example 2 — Why a margin buyer loses everything

*Question:* A buyer puts $10 down and borrows $90 to buy $100 of
stock. Prices fall 20%, so the stock is worth $80. The buyer sells
and repays the $90 loan. What is the buyer's result?

*Model reasoning:* Sale $80 − loan repayment $90 = −$10. The buyer
not only loses the entire $10 put down, but owes $10 more — a 20%
market fall becomes a loss of more than 100% of the buyer's own
money. Now multiply by millions of margin accounts in October 1929:
brokers demanded more collateral ("margin calls"), investors sold
whatever they could to raise it, and forced selling pushed prices
down further, triggering more margin calls. This spiral is why a
stock market event could wipe out savings, close brokerages, and
frighten consumers into cutting spending — the first bridge from
Wall Street to Main Street.

## Part 2 — Five interacting causes

Historians and economists do not agree on one cause, and this unit
does not ask you to pick one. The defensible answer is interaction:

1. **Overproduction and underconsumption.** Factories and farms
   could produce more than people could afford to buy — especially
   since wages lagged behind productivity and farm income was
   already falling (Lesson 1). Unsold goods piled up; factories cut
   production and laid workers off; laid-off workers bought less.
2. **Fragile credit.** Installment debt (Lesson 1) and margin debt
   (above) meant many households and investors had no cushion. When
   incomes fell, debts did not — and defaults spread.
3. **A banking system with no safety net.** Before 1933 there was
   no federal deposit insurance. When depositors feared a bank
   would fail, the rational move was to withdraw first — a **bank
   run** — which could drain even a healthy bank. About 9,000 banks
   failed between 1930 and 1933, roughly 30% of the banks existing
   at the end of 1929, destroying savings and cutting off credit to
   farms and small businesses.
4. **The gold standard's discipline.** Under the gold standard,
   dollars were convertible into gold at a fixed rate, so the
   Federal Reserve could not simply expand the money supply to
   rescue banks without risking gold outflows. In 1931, after
   Britain left gold, the Fed *raised* interest rates to defend
   gold reserves — tightening credit in the middle of a depression.
   The Fed also failed to act forcefully as lender of last resort
   during the banking panics of 1930–31.
5. **Global links.** War debts and reparations tied economies
   together; when the U.S. economy contracted, it imported less and
   called in loans, spreading the crisis. The Smoot-Hawley Tariff
   (1930) raised U.S. duties sharply, inviting retaliation and
   shrinking world trade further. No single link caused the
   Depression, but the links made a national crisis international.

Note what the crash did *not* do by itself: by the fall of 1930, some
observers thought recovery was near. It was the banking collapse of
1930–33, layered on the weaknesses above, that turned a severe
recession into the longest, deepest depression in American history.
Trigger vs. cause is the distinction to keep: the crash lit the
fire; the five conditions above were the dry timber, the wind, and
the absence of a fire department.

### Worked example 3 — Cause, trigger, or condition?

*Question:* Classify each as a trigger, a long-term cause/condition,
or neither, with one reason: (a) Black Tuesday, October 29, 1929;
(b) the absence of deposit insurance; (c) the Smoot-Hawley Tariff.

*Model reasoning:* (a) Trigger — a sudden event that set off
panic selling and margin calls, but it did not by itself create
overproduction or bank fragility. (b) Long-term condition — it
existed before 1929 and shaped how the crisis spread, by making
bank runs rational and destructive. (c) Long-term cause/condition
with a twist — it was passed *after* the crash (1930), so it cannot
have caused the crash, but it deepened and spread the depression
that followed. A common error is to call everything that happened
before the Depression "the cause": timing matters, and a cause must
come before its effect.

## Part 3 — Reading the unemployment series

The table below is the data behind `assets/unemployment-1929-1940.svg`.
These are later historical estimates (Lebergott, as republished by
the Bureau of Labor Statistics): in 1933 nobody measured unemployment
with a modern monthly survey, so treat these as careful estimates,
not contemporary measurements.

| Year | 1929 | 1930 | 1931 | 1932 | 1933 | 1934 | 1935 | 1936 | 1937 | 1938 | 1939 | 1940 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Unemployed (% of labor force) | 3.2 | 8.9 | 15.9 | 23.6 | 24.9 | 21.7 | 20.1 | 17.0 | 14.3 | 19.0 | 17.2 | 14.6 |

Read it in three moves. First, the collapse: 3.2% to 24.9% in four
years — about one worker in four. Second, the partial recovery:
24.9% down to 14.3% by 1937 — real improvement, but still far above
any normal level. Third, the relapse: 14.3% back up to 19.0% in 1938,
the "recession within the Depression" that Lesson 5 returns to.
Anyone who claims the New Deal "ended" unemployment by 1937, or that
it "failed" because 1938 rose again, is reading only one move of
this table. Read all three.

## Guided practice

**G1.** Compute the Dow's fall from peak to mid-November 1929 if it
had "lost almost half its value": if the peak was 381.17, about what
level is "almost half"? Show the arithmetic.

**G2.** A margin buyer puts $20 down and borrows $180 for $200 of
stock. Prices fall 10% (stock now $180). The buyer sells and repays
the loan. What is the buyer's result, as a percentage of the $20 put
down?

**G3.** For each cause in Part 2, name one group of people it hurt
first (for example, bank fragility hurt depositors and small
borrowers first).

## Independent practice

**I1.** Using the unemployment table, compute the change in
percentage points from 1929 to 1933, and from 1937 to 1938. Explain
in two sentences why "percentage points" is the right unit here
rather than "percent."

**I2.** Error analysis: a classmate writes, "The stock market crash
caused the Great Depression, full stop." Rewrite the sentence to
include one trigger, two interacting causes, and the banking
collapse, in under 50 words.

**I3.** Which of the five causes in Part 2 could government policy
have fixed fastest in 1930, and which would have taken longest?
Defend each choice in two sentences. (There is no single right
answer; the key must show reasoning about what each fix requires.)

**I4.** Explain why the gold standard made the Fed's job harder in
1931, using the Britain example from Part 2. (Three sentences.)

## Applied task

Write a 150-word newspaper-style explainer, dated November 1929,
titled "Why yesterday's crash is not the whole story." It must
mention margin calls, one other cause from Part 2, and one reason
ordinary people who owned no stock still had reason to worry.
Label it "original student-style text — not a 1929 newspaper."

## Exit check

Complete both blanks: "The crash was a ______, not the whole cause,
because ______." (One cause or condition must fill the second blank.)

## Supports and extensions

- **Reading access:** the chart is fully tabled in Part 3; the adult
  may work the percentage computations on paper step by step.
- **Alternate response mode:** the applied task may be recorded
  orally as a 90-second radio explainer instead of written.
- **Extension:** compare the Dow's 89% fall with a later market
  fall you find in the Resource Pack (for example, 2008) and write
  two sentences on what is similar (forced selling, fear) and what
  differs (deposit insurance now exists).

## Teacher note

Likely misconceptions: (1) "the crash = the Depression" — press on
timing (banking collapse 1930–33) and interaction; (2) "10.8%
remained = 10.8% fell" — press on fall + remainder = 100%;
(3) "percentage points vs. percent" — press on I1's distinction.
Answer-key reference: Lesson 2, G1–G3 and I1–I4 in `answer-key.md`.
