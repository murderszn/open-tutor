# Project — The Average-Cost Studio

**Type:** investigation and technical memo · **Sessions:** S10
(Part 1) and S14 (Part 2), gallery S17 · **Deliverables:** a chosen
context, a rational model with domain, a hand sketch checked against
a technology graph, and a one-page technical memo.
**Standards:** A-CED.1, A-REI.11, F-IF.7.d (+), N-Q.1, N-Q.2.

## The situation

A small workshop makes one product. It pays a fixed setup cost `F`
(dollars) once, plus a variable cost `v` dollars for each item made.
If it makes `n` items, the total cost is `F + vn` dollars, and the
**average cost per item** is

`A(n) = (F + vn) / n = v + F/n` dollars per item.

That formula is a rational function in `n`, and its shape tells the
workshop's whole pricing story: average cost starts high (the fixed
cost spread over few items), falls as more items share it, and
approaches — but never reaches — the variable cost `v`.

## Part 1 — Choose and define (Session S10)

1. Choose a product and plausible numbers: a fixed cost `F` between
   $500 and $5,000 and a variable cost `v` between $2 and $50 per
   item. State them as assumptions, not facts about a real business
   (no real business's costs are used here).
2. Define every quantity with units: `n` (items, a positive whole
   number), `F` (dollars), `v` (dollars per item), `A(n)` (dollars
   per item). State the domain twice: algebraically (`n ≠ 0`) and
   in context (`n` a positive integer; a fractional or negative
   number of items is meaningless).
3. Write `A(n)` in both forms — `(F + vn)/n` and `v + F/n` — and
   show the algebra that connects them.
4. Get the adult's approval for the situation and the quantity
   definitions before Part 2. (Approval criterion: the units divide
   correctly — total dollars divided by items gives dollars per
   item — and the context domain is stated.)

## Part 2 — Model, graph, memo (Session S14)

1. Compute `A(n)` for at least five values of `n` spanning small to
   large production (for example, 10, 50, 100, 500, 1,000 items),
   and show the arithmetic.
2. Identify, from the formula: the vertical asymptote of the
   underlying rational function (`n = 0`), the horizontal asymptote
   (`A = v`), and the end behaviour in words ("as production grows
   without bound, average cost approaches the variable cost from
   above").
3. Sketch `A(n)` by hand for `n > 0` — the context branch only —
   marking the horizontal asymptote `A = v` as a dashed line and
   plotting the five computed points. Then check the sketch against
   a Desmos graph of the same formula, and note any feature the
   hand sketch got wrong (or confirm that it got them right).
4. Answer, in the memo, three questions:
   (a) Why can average cost never fall below `v` in this model,
   and what would have to change in reality for it to do so?
   (b) At what production level does average cost first fall
   within 10% of `v`? (Solve `A(n) ≤ 1.10v` and give the smallest
   whole `n` that satisfies it; show the solving step.)
   (c) Where does this model break down? Name at least two limits
   (for example: the formula treats `n` as continuous, but items
   are whole; variable cost is assumed constant, but bulk
   discounts, overtime, and capacity limits change it; fixed cost
   is assumed to be paid once, but a second shift or a new machine
   adds a new fixed cost).
5. Present the memo (one page) at the S17 gallery. The adult
   critique addresses: are the units right, is the domain stated
   both ways, does the graph match the table, and are the model's
   limits named honestly?

## Worked anchor (not a substitute for the learner's own numbers)

With `F = 2400` and `v = 18` (the Lesson 03 concert example):
`A(n) = (2400 + 18n)/n = 18 + 2400/n`. At `n = 100`, `A = 42`
dollars per item; at `n = 600`, `A = 22` dollars per item. The
horizontal asymptote is `A = 18`. Average cost first falls within
10% of 18 — that is, `A(n) ≤ 19.80` — when `2400/n ≤ 1.80`, i.e.
`n ≥ 2400/1.80 = 1333.33…`, so the smallest whole `n` is 1,334
items. A learner who chooses different `F` and `v` will get
different numbers; the method — and the check that the inequality
is solved for `n` with the direction preserved, since `n > 0` —
is what is marked.

## Rubric (40 points)

| Criterion | Full marks | Partial | Missing |
|---|---|---|---|
| Context and quantities (8) | Product, `F`, `v` stated as assumptions; every quantity defined with units; domain stated algebraically and in context | Units or one domain statement missing | No definitions, or real business data claimed |
| Model and table (10) | `A(n)` in both forms with connecting algebra; five computed values, arithmetic shown, all correct | One form, or one arithmetic error, or fewer values | No table, or values unchecked |
| Graph and asymptotes (10) | Hand sketch for `n > 0` with dashed `A = v`, plotted points, and a Desmos check noted; vertical asymptote `n = 0` and end behaviour stated correctly | Sketch without the asymptote line, or no technology check | Graph contradicts the table, or asymptotes misidentified |
| Memo questions (8) | (a) "never below `v`" explained from `F/n > 0`; (b) 10% level solved with the inequality step; (c) two model limits named | One question weak or missing its reasoning | Memo missing, or limits not named |
| Presentation and honesty (4) | One page, readable, assumptions labelled as assumptions; critique addressed or logged | Overlong, or critique ignored | No presentation |

**Scoring note for the adult:** a project with correct arithmetic
but no stated domain, no asymptote, or no model limits is capped at
24/40 — those are the unit's objectives, not decoration. A project
that uses a real business's actual costs must be returned: this
investigation uses invented, labelled assumptions only.
