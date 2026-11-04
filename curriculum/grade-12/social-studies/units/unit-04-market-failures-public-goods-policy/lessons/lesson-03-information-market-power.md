# Lesson 03 — Information Failures and Market Power

**Student goal:** I can explain adverse selection, moral hazard,
signaling, screening, natural monopoly, and network effects — and show
how each one can shrink, distort, or unravel a market.

**Time:** two ~50-minute sessions (Week 16 S1–S2) · **Materials:**
this lesson, Practice Set C.

**Readiness check (5 minutes).** In Units 01–03, buyers and sellers
knew what they were trading and many sellers competed. Now remove one
of those assumptions at a time. What breaks first: the price, or the
market itself?

## 1. When one side knows more: asymmetric information

**Asymmetric information** means one side of a deal knows something
material that the other side does not. It produces two distinct
failures, and keeping them apart matters:

- **Adverse selection** happens *before* the deal: the uninformed side
  cannot tell good from bad, so it offers a price for the average —
  and the good types walk away, leaving a worse pool. Selection is
  adverse because the deal selects *against* quality.
- **Moral hazard** happens *after* the deal: once insured, protected,
  or paid regardless of outcome, a party takes risks it would not have
  taken unprotected, because someone else now bears part of the cost.
  Hazard is moral in the old sense of behavior, not of blame: the
  incentive changed, so the behavior changed.

**Worked example A — the lemons market (fictional practice data).**
A town's used-car market has two kinds of car, and buyers cannot tell
them apart before purchase:

| Car type | Buyer's value | Seller's lowest acceptable price |
|---|---|---|
| Good car ("peach") | $10,000 | $9,000 |
| Bad car ("lemon") | $4,000 | $3,000 |

Half the cars on the market are peaches, half lemons. A buyer who
cannot tell which car is which will pay at most the *expected* value:

> Expected value = ½ × $10,000 + ½ × $4,000 = $5,000 + $2,000 = $7,000.

But a peach owner will not sell for $7,000 — peaches are worth $9,000
to their owners at minimum. So peach owners leave the market. Once
they leave, every car left is a lemon, and the price falls toward
$4,000. The market has not merely become cheaper; the good cars have
vanished from it. This is George Akerlof's "market for lemons"
(1970): with asymmetric information, bad products can drive out good
ones, and a market can unravel completely.

Markets fight back, and the fight is the interesting part:

- **Signaling:** the informed side credibly reveals quality — a
  warranty, a degree, a certified inspection. A signal works only if
  it is costly to fake: a warranty is cheap to offer for a peach and
  ruinous for a lemon.
- **Screening:** the uninformed side designs a test — an insurer
  asks health questions, an employer runs a trial task, a lender
  checks credit history. Screening works only if the test separates
  types: a question everyone answers the same way screens nothing.

**Worked example B — insurance, both failures in one market.**
Adverse selection first: an insurer charges one premium for all
applicants. Healthy people, who expect low medical costs, find the
premium too high and drop out; sicker people stay. The pool's average
cost rises, the premium rises, more healthy people leave — a spiral.
Then moral hazard: once insured, a person may take slightly less care
(a skipped checkup, a riskier hobby) because the insurer now pays
part of the bill. Insurers respond with deductibles, copayments,
screening questions, and waiting periods — each one a tool that
reduces the failure while creating its own costs and exclusions, which
Lesson 04's benefit–cost lens will judge.

A common error: calling every surprise after a deal "moral hazard."
If the insurer misjudged a risk that existed *before* the policy was
sold, that is adverse selection. The timing test — before or after the
deal — settles almost every classification question.

## 2. When one firm is cheapest: natural monopoly and network effects

Unit 03 showed that a monopolist restricts output and raises price.
But some monopolies arise not from a barrier built to exclude rivals,
but from cost structure itself. A **natural monopoly** exists when one
firm can serve the whole market more cheaply than two or more firms
could — typically because fixed costs are huge and marginal costs are
low, so average cost keeps falling as output grows.

**Worked example C — a water utility (fictional practice data).**
Building the pipe network costs $1,000,000 (fixed), and delivering each
additional unit of water costs $1 (marginal cost). Average cost is
fixed cost ÷ quantity + marginal cost:

| Quantity served | Average cost per unit |
|---|---|
| 10,000 | $1,000,000 ÷ 10,000 + $1 = $101 |
| 100,000 | $1,000,000 ÷ 100,000 + $1 = $11 |
| 200,000 | $1,000,000 ÷ 200,000 + $1 = $6 |

One firm serving 200,000 units spends $1,000,000 once. Two firms
serving 100,000 each would spend $1,000,000 *twice* — two pipe
networks under the same streets — for the same total water. Splitting
the market raises cost. That is why water, electricity distribution,
and similar networks are usually regulated monopolies rather than
competitive markets: the policy question is not "how do we get more
competitors?" but "how do we keep the one firm's price near its cost?"
(Lesson 04 returns to this with regulation.)

A **network effect** is a different force with a similar result: a
good becomes more valuable as more people use it — a phone network, a
payment app, a social platform. Early leads compound: users join the
network their friends already use, which makes that network more
valuable still, which attracts more users. Network effects can tip a
market toward one dominant firm even with low fixed costs, and they
make "just add a competitor" remedies weak: a new network with no
users is worth little no matter how good its technology is.

A second common error: treating natural monopoly as a moral verdict
("monopolies are bad, so break it up"). The efficiency question is
comparative: is one regulated firm cheaper and better controlled than
several duplicating firms, or than a government provider? The answer
differs by industry, and Lesson 04's toolkit exists to compare those
answers rather than assume one.

## 3. Guided practice

1. A used-phone market: working phones are worth $300 to buyers and
   $260 to sellers; broken phones are worth $50 to buyers and $40 to
   sellers. Half the phones are working, and buyers cannot tell.
   Compute the expected value, state whether working-phone sellers
   stay, and name the failure.
2. Classify each as adverse selection or moral hazard, with the
   timing test: (a) a driver with full coverage drives faster;
   (b) only the riskiest borrowers accept a high-interest loan;
   (c) a firm hires only workers with a costly certification.
   (For (c), name the response type too: signaling or screening?)
3. A bridge's fixed cost is $500,000 and marginal cost per crossing
   is $0.50. Compute average cost at 10,000 and at 500,000 crossings.
   Is this a natural-monopoly cost structure? Explain in one sentence.

## 4. Independent practice

Complete Practice Set C (in [practice.md](../practice.md)).

## 5. Applied task

Pick one market you use (streaming, food delivery, a game marketplace,
a school club's ticket sales). Name one piece of information one side
knows that the other does not, say whether it creates adverse
selection or moral hazard (or neither — and why), and propose one
signal or screen that market actually uses. If you cannot find one,
say so and explain what that absence predicts.

## 6. Exit check

In three sentences: (a) why do peach owners leave the lemons market?
(b) what timing difference separates adverse selection from moral
hazard? (c) why would two water networks cost more than one?

**Teacher note.** Likely misconceptions: (a) swapping adverse
selection and moral hazard; (b) treating signaling as "advertising"
rather than a costly, hard-to-fake action; (c) assuming competition
always lowers cost, even with large fixed costs. Full solutions and
reteaching moves are in the [teacher guide](../teacher-guide.md) and
[answer key](../answer-key.md).
