# Lesson 05 — Slope and Intercept in Context

**Goal (student-readable):** I can say what the slope and the
intercept mean in a real situation, and use an equation to predict
and to check whether an answer makes sense.
**Time:** ~45 minutes · **Materials:** notebook, pencil, calculator
for checking only.

## Readiness check

A tank holds 80 gallons and drains 4 gallons per minute. How much
is left after 5 minutes? (Answer: 80 − 4 × 5 = 60 gallons.) After
how many minutes is it empty? (Answer: 80 ÷ 4 = 20 minutes.) If
that feels shaky, practise "start minus rate times time" with
smaller numbers first.

## Teaching

In a story, the slope and the intercept are not just numbers in an
equation — they are facts about the situation, and they must be
stated with units and a meaning:

- **Slope = rate of change.** "The slope is −4" is unfinished.
  "The slope is −4 gallons per minute" says the tank loses 4
  gallons every minute. The sign matters: negative slope means
  decreasing, positive means increasing.
- **Intercept = starting value.** "The intercept is 80" is
  unfinished. "The intercept is 80 gallons at time 0" says the
  tank starts full. It answers "what was true before the change
  began?"

Three habits make context work reliable:

1. **Name the variables with units** before writing anything:
   `t` = minutes since draining started, `V` = gallons left.
2. **Predict, then judge.** After computing, ask: does the answer
   fit the story? A negative number of gallons, a cost below the
   joining fee, a time after the tank is empty — all signal an
   error or a limit of the model.
3. **Know where the model stops.** A tank equation that gives
   negative gallons after 20 minutes is not wrong for the first 20
   minutes; it just stops describing reality at empty. Say so.

Comparing two plans in this unit means comparing tables or graphs,
not solving a system algebraically (that is Unit 05). Build both
tables, line them up, and read where they cross — the crossing
point is where the two plans cost the same, and on either side of
it a different plan wins.

### Worked example 1

**A tank drains steadily. Its volume in gallons after `t` minutes
is `V = −4t + 80`. What do the slope and intercept mean? How much
water is left after 5 minutes? When is the tank empty?**

Variables: `t` = minutes, `V` = gallons remaining.

Slope −4: the tank loses 4 gallons per minute (negative because
the volume decreases). Intercept 80: at `t = 0` the tank holds 80
gallons — it starts full.

After 5 minutes: `V = −4(5) + 80 = −20 + 80 = 60` gallons.

Empty means `V = 0`: `0 = −4t + 80`, so `4t = 80` and `t = 20`
minutes. (This is one-variable equation solving from Unit 03, used
inside a line story.) After 20 minutes the model would give
negative gallons — that is the model's stopping point, not a real
volume. A good answer says so.

### Worked example 2

**Two tutoring plans: Plan A charges $12 per hour with no signup
fee (`A = 12h`). Plan B charges $8 per hour plus a $20 signup fee
(`B = 8h + 20`). Compare them with a table for 2, 5, and 10 hours.
When do they cost the same, and which plan wins on each side of
that point?**

Build the table (hours `h`, costs in dollars):

| `h` | Plan A: `12h` | Plan B: `8h + 20` |
|---|---|---|
| 2 | 24 | 36 |
| 5 | 60 | 60 |
| 10 | 120 | 100 |

The plans cost the same at 5 hours ($60 each) — that is their
crossing point, read from the table. Below 5 hours, Plan B costs
more (its $20 fee outweighs its lower hourly rate); above 5 hours,
Plan A costs more (its higher rate takes over). In slope language:
Plan A is steeper (12 vs. 8) but starts lower (0 vs. 20), so the
steeper line starts behind and catches up — exactly at 5 hours.

Recommendation rule a customer can use: at 2 hours Plan A costs $24
and Plan B $36, so Plan A is cheaper for few hours; at 10 hours
Plan A costs $120 and Plan B $100, so Plan B is cheaper for many
hours. The rule is: **under 5 hours, choose A; over 5 hours,
choose B; at exactly 5 hours it does not matter.** The intercept
explains the left side (B's fee hurts when hours are few); the
slope explains the right side (A's rate hurts when hours are many).

## Guided practice

Work these with the adult; every slope/intercept answer needs units
and a meaning sentence.

1. A candle burns by `H = −2t + 24`, where `H` is height in
   centimetres and `t` is hours. State the slope and intercept
   with meanings. Find the height after 7 hours and the time when
   the candle burns out.
2. A phone plan costs `C = 6m + 15` (dollars, `m` months). What do
   6 and 15 mean? Find the cost after 4 months.
3. Two delivery plans: P charges `P = 15h`, Q charges `Q = 10h + 30`
   (dollars, `h` hours). Build a table for 3, 6, and 10 hours.
   Where do they tie? Which wins on each side?
4. A distance-time story: a walker goes `d = 5t` (miles, hours).
   What do the slope and the (zero) intercept mean in plain words?
5. A tank equation `V = −3t + 90` predicts −15 gallons at 35
   minutes. Is that a real volume? What should you say instead?
6. Explain why a steeper line does not always mean "costs more":
   use Plan A and Plan B from Worked example 2 at 2 hours and at
   10 hours.

## Independent practice

1. A plant grows by `H = 2w + 9` (centimetres, `w` weeks). State
   slope and intercept meanings. Find the height after 6 weeks.
2. A taxi charges `C = 3m + 2` (dollars, `m` miles). Find the cost
   of a 15-mile ride. What would a slope of 3 with an intercept of
   0 mean instead?
3. A pool drains by `V = −5t + 100` (gallons, minutes). When is it
   empty? How much is left after 8 minutes?
4. Two gym plans: G charges `G = 20m`, H charges `H = 12m + 40`
   (dollars, `m` months). Table for 2, 5, and 10 months: who ties
   where, and who wins on each side?
5. A cyclist rides `d = 14t` while a second cyclist, starting 9
   miles ahead, rides `d = 11t + 9`. Build a table for 0, 1, 2, and
   3 hours. When are they at the same place? Who is ahead after
   that?
6. **Error analysis.** A learner reads `V = −4t + 80` and says "the
   tank gains 4 gallons per minute and starts empty." Correct both
   errors, and state what each number really means.

## Application

A school is choosing between two bus companies for a field trip.
Company X charges $400 per bus with no booking fee; Company Y
charges $300 per bus plus a $500 booking fee. Let `b` be the number
of buses. Write both equations, build a table for 2, 5, and 8 buses,
find where they tie, and recommend a company for a 3-bus trip and
for a 7-bus trip, with reasons. Where does this model stop making
sense? (Hint: think about what happens with very large numbers of
buses — or with zero buses.)

## Exit check

A line in context has slope −6 (gallons per minute) and intercept
72 (gallons). Write its equation with variables defined, and say in
one sentence each what the slope and the intercept mean.

## Supports and extension

- **Language access:** always write the unit after a rate
  ("gallons per minute," "dollars per hour") — a bare number is an
  incomplete answer in this lesson.
- **Alternate response mode:** answer context questions with a
  labeled table instead of sentences; the table must carry the
  variable meanings as column headings.
- **Extension:** find the crossing point of `A = 12h` and
  `B = 8h + 20` by setting the expressions equal and solving
  (Unit 03 skill) and confirm it matches the table's 5 hours.
  This previews Unit 05's algebraic method — it is optional here,
  and the table method remains the required route.

## Teacher note

Likely misconceptions: dropping units ("slope is −4"), reading the
intercept as a rate, and treating model outputs past a physical
limit (negative gallons) as real answers. The bus-company
application also tests the zero-bus edge: with 0 buses, Company Y
still "costs" $500 by the equation, which is why the model only
makes sense once a booking actually happens. Answer-key reference:
[answer key, Lesson 05](../answer-key.md#lesson-05).
