# Lesson 05 — Climate Models, Projections, and Uncertainty

**Goal:** By the end of this lesson you can explain what a
global climate model computes, interpret a scenario range
without mistaking it for a prediction, separate the three kinds
of uncertainty, and make an evidence-based forecast of the
current rate of change and one associated impact.

**Time:** ~50 minutes. **Materials:** notebook, calculator.

**Readiness check (2 minutes):** From Lesson 01: a few W/m² of
forcing gives only about 1 K of direct response; from Lesson
02: feedbacks amplify it. If you can say both, you are ready
for why models exist at all: the feedbacks cannot be done on
the back of an envelope for a whole planet.

## 1. What a model actually is

A **global climate model (GCM)** divides the atmosphere and
ocean into a three-dimensional grid of cells — typically about
100 km across horizontally, with dozens of vertical layers —
and, for each cell and each short time step (minutes), solves
the physics: sunlight in, infrared out, winds moving heat and
moisture, water evaporating and condensing, ocean currents
transporting heat. Processes too small for a grid cell — a
single cloud, a turbulent eddy — cannot be resolved, so they
are **parameterized**: represented by a formula tuned to
observations (for example, "this fraction of moisture in a
humid cell becomes cloud"). Parameterization is not cheating;
it is the honest admission that no computer can track every
cloud. It is, however, exactly where models legitimately
differ: different cloud formulas give different feedback
fractions, which is why Lesson 02's f is the main spread in
model results.

A model is tested the way any scientific instrument is tested:
run it on the past and see whether it reproduces what happened
without being tuned to the answer. Models reproduce the
20th-century warming, the cooling after major volcanic
eruptions, and the seasonal and geographic patterns of
temperature — but only when human greenhouse-gas increases are
included. Run them with natural forcings alone (Sun and
volcanoes) and they miss the post-1970 warming entirely. That
comparison — same model, two forcing sets, one matches, one
does not — is an attribution test, not a curve fit.

**Worked example 1 — Resolution in plain numbers.** A grid cell
100 km wide and 100 km long covers 10,000 km² — larger than a
small country. A thunderstorm 10 km wide fits inside one cell
ten times over, so the model cannot draw it; it must estimate
its average effect. This is why models are trustworthy about
continental averages and poor about whether *your town* gets
rain next Tuesday — and why Lesson 05 insists on the right
scale for every claim. "The model says" is meaningless until
you ask: at what scale, averaged over what period, under what
scenario?

**Worked example 2 — Ensemble, not oracle.** A modeling center
runs the same model 20 times with tiny differences in starting
weather. The runs disagree about individual years (one has a
hot 2043, another a cool one) but agree about the 30-year
trend. The spread across those runs measures **internal
variability** — the climate system's own chaos, the same chaos
that makes weather forecasts fail past about two weeks. The
*ensemble mean* is smoother than any single run, and the
spread is information, not error: it tells you how much of the
future is genuinely unpredictable at yearly scale even with a
perfect model.

## 2. Scenarios are not predictions

Future emissions depend on human choices — energy systems,
policies, economies — that no physics equation can forecast.
Models therefore run **scenarios**: "if emissions follow this
path, the climate follows that path." The IPCC AR6 scenarios
are named SSPs (Shared Socioeconomic Pathways). Three teaching
examples, with their very-likely warming ranges for 2081–2100
relative to 1850–1900 (IPCC AR6):

| Scenario (teaching shorthand) | Story | Warming by 2081–2100 |
|---|---|---|
| SSP1-1.9 (very low emissions) | Deep, rapid cuts; net-zero CO₂ around mid-century | 1.0–1.8 °C |
| SSP2-4.5 (intermediate) | Emissions stay near current levels, then slowly fall | 2.1–3.5 °C |
| SSP5-8.5 (very high) | Fossil-fuel-heavy growth through the century | 3.3–5.7 °C |

Read the table correctly: it does *not* say "the planet will
warm 1.0–5.7 °C." It says: *depending on the emissions path*,
the range is that wide — and even within one path, the range
(SSP2-4.5: 2.1–3.5) reflects model differences and internal
variability. Quoting the full 1.0–5.7 span as "model
uncertainty" is a category error: most of that span is
*human-choice* uncertainty, not physics uncertainty. And note
what is already settled: 1.1 °C of warming has already
happened (2011–2020 vs. 1850–1900), so the bottom of every
range is in the past — the question is how much more, not
whether any.

**Worked example 3 — Separating the three uncertainties.**
A headline says: "Models project 2–4 °C of warming by 2100."
Ask three questions. (1) *Scenario uncertainty:* which
emissions path — the answer moves the center of the range.
(2) *Model uncertainty:* which models, and do they differ in
cloud feedback — the answer widens or narrows the range within
a scenario. (3) *Internal variability:* which 20-year average
— a single hot decade can sit above the trend without changing
it. Over the next 20 years, internal variability dominates;
over the century, scenario uncertainty dominates; model
uncertainty sits in between and shrinks slowly as models
improve. A forecast that does not say which uncertainty it is
talking about has not yet been stated clearly enough to judge.

**Worked example 4 — Forecasting the current rate (HS-ESS3-5).**
The task is not "predict 2100" but: given the observed rate
and the models, what happens next at the current trajectory?
Observed: about 1.1 °C already; CO₂ rising about 2.4 ppm/yr;
sea level rising a few mm/yr. Models run at near-current
policies land near the SSP2-4.5 family. An honest forecast
therefore reads: *if emissions stay near current levels, the
current rate of warming — roughly 0.2 °C per decade in recent
decades — continues, reaching about 1.5 °C above 1850–1900
within the next couple of decades, with sea-level rise and
hot-extreme intensity rising with it; the exact decade depends
on internal variability, and the century's endpoint depends on
emissions choices not yet made.* Every clause earns its place:
the rate is observed, the trajectory is stated, the impact is
tied to the warming level, and the unknowns are named rather
than hidden.

**Misconception check:** "Models were wrong before — they
predicted warming that didn't happen." Test it properly: pick
a specific past projection, its scenario, and its time window,
and compare like with like. The famous check is James Hansen's
1988 scenarios: his middle scenario (Scenario B, moderate
emissions growth) tracked observed warming closely over the
following decades, while his high scenario overshot because
its emissions assumption overshot reality — a scenario miss,
not a physics miss. The recurring pattern in model evaluation
is the opposite of the slogan: when a projection misses, the
miss is usually traceable to the emissions assumption or to a
volcanic eruption nobody could schedule — not to the
greenhouse physics, which has been stable since the 1800s
(Fourier, Tyndall, Arrhenius).

## Guided practice

1. A model grid cell is 100 km × 100 km. How many such cells
   cover a 1,000 km × 1,000 km region? What does that tell you
   about what the model can and cannot resolve there?
2. Two models run the same scenario. One projects 2.4 °C by
   2100, the other 3.2 °C. Which kind of uncertainty does that
   gap illustrate — scenario, model, or internal variability?
   Justify in one sentence.
3. A headline reads: "Scientists predict 5.7 °C warming by
   2100." Using the scenario table, correct the headline in
   two sentences.

## Independent practice

4. An ensemble of 20 runs under one scenario gives a 2081–2100
   mean warming of 2.8 °C, with runs ranging from 2.3 to 3.3 °C.
   State the ensemble mean and the range, and say which
   uncertainty the range mostly reflects.
5. Which uncertainty dominates a 10-year forecast, and which
   dominates a 100-year forecast? Give one reason for each.
6. **Error analysis:** A learner averages the SSP1-1.9 and
   SSP5-8.5 ranges and reports "models predict 1.0–5.7 °C, so
   models can't agree within 4.7 °C." Identify the error:
   averaging across scenarios mixes human choices with physics.
   State the correct reading in one sentence.

## Applied task

7. Write your own HS-ESS3-5 forecast in five sentences:
   (1) the observed rate, with its source; (2) the scenario
   you are assuming; (3) the warming level and timescale;
   (4) one associated impact, tied to that warming level;
   (5) what is uncertain and which kind of uncertainty it is.
   The adult scores whether every sentence is checkable and
   whether sentence (5) names its kind correctly.

## Exit check

8. Without notes: name the three kinds of uncertainty, say
   which dominates at 10 years and which at 100 years, and
   explain in one sentence why a scenario range is not a
   prediction.

## Supports and extensions

- **Reading access:** the scenario table stays open beside
  every projection question; no range has to be memorized.
- **Alternate response mode:** the applied-task forecast may
  be delivered as a table (rate / scenario / level / impact /
  uncertainty) instead of prose.
- **Extension:** compare two published projection graphics
  (adult previews; see resource pack) and identify, for each,
  whether its spread is mostly scenario, model, or internal
  variability — and what the graphic's caption does or does
  not say about it.

**Teacher note:** learners who can sort an uncertainty claim
into one of the three kinds have the unit's most transferable
skill; drill the sorting, not the SSP numbers. Answers: see
`answer-key.md`, Lesson 05.
