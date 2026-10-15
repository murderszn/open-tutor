# Unit 01 — Advanced Function Analysis and Mathematical Modeling

**Grade 12 · Math · Precalculus pathway · Weeks 3–6 of the course year**
(draft, delivered 2026-10-14 for issue #54; not educator-reviewed)

## Overview

Algebra II treated functions as rules you could shift, chain, and reverse.
This unit turns the function itself into an object of study: take any
member of any function family apart — domain, range, intercepts, intervals
of increase and decrease, extrema, end behavior, asymptotes, symmetry —
choose the algebraic form that *reveals* those features, chain functions
into two-stage models and run them backwards, measure how fast they change,
and finally decide which family deserves a real dataset. The unit's central
habit is **analyze first, then verify**: the learner predicts a graph's
features from the formula and checks with Desmos; predicts a model's
behavior from its family and checks with residuals.

The unit runs in six moves:

1. **The analysis toolkit** — systematic feature analysis of one member of
   each family (polynomial, rational, radical, exponential, logarithmic,
   trigonometric, piecewise); sketch-from-analysis, then verify.
2. **Equivalent forms** — factored form for zeros, completed-square form
   for extrema, polynomial division for rational end behavior; reading
   structure to choose the revealing form.
3. **Composition, decomposition, inverses** — two-stage models from
   context; decomposing into stages; restricting a domain to invert (the
   tool Unit 02's inverse trigonometry will use).
4. **Average rate of change** — rates over intervals; the difference
   quotient simplified by hand; a slope preview for the Unit 07 calculus
   bridge.
5. **Piecewise and rational rigor** — continuity at seams, holes versus
   asymptotes, sign charts, full hand-graphing with a feature list.
6. **Modeling week** — build, compare, and select among function families
   for a dataset; defend the choice in writing with rate-of-change and
   residual reasoning.

The essential question running through all four weeks is: **how do a
function's graph features — and the algebraic form we write it in — reveal
what the function says about a real situation?**

## Prerequisites

From the grade-11 Algebra II pathway (Weeks 1–2 diagnostics verify these;
the unit re-teaches insecure skills in use before assuming them):

- Graph transformations `f(x) + k`, `kf(x)`, `f(kx)`, `f(x + k)`; even/odd
  functions; composition, decomposition, and inverses of simple functions.
- Polynomial factoring; the Remainder and Factor Theorems; zeros including
  complex zeros; polynomial graphs with end behavior.
- Rational expressions and functions: simplification, asymptotes,
  extraneous solutions.
- Exponential and logarithmic forms; logarithm properties; solving
  `ab^(ct) = d`; fitting exponential models to data.
- The unit circle, radian measure, the Pythagorean identity; sine/cosine
  models with amplitude, period, midline.
- Written justification of every solution step; Desmos and spreadsheet
  fluency; choosing and interpreting units (N-Q.1).

The audit assumes no prior fluency with vectors, parametric or polar
forms, probability distributions, infinite series, induction, trig
identities, algebraic optimization, or limits — those are later units'
new content.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Analyze functions across families (polynomial, rational, radical,
   exponential, logarithmic, trigonometric, piecewise) for domain, range,
   intercepts, intervals of increase and decrease, extrema, end behavior,
   asymptotes, and symmetry; sketch graphs from the analysis and verify
   with technology. (F-IF.1, 2, 4–9; track objective 1)
2. Choose equivalent forms of expressions to reveal zeros, extrema, and
   end behavior, justifying each rewrite from the expression's structure.
   (F-IF.8; A-SSE.1.a, 1.b, 2; track objective 1)
3. Compose and decompose functions in context; construct inverse
   functions, including restricting a domain to produce an invertible
   function; verify inverse pairs by composition and interpret an
   inverse's meaning in a real situation. (F-BF.1.a, 1.b, 3, 4.a,
   4.d (+); track objective 2)
4. Compute and interpret average rates of change over intervals;
   simplify the difference quotient for polynomial functions and
   interpret it as a slope preview. (F-IF.6; track objective 1)
5. Build, compare, and select among function-family models for a dataset;
   defend the choice in writing with rate-of-change and residual
   reasoning; define quantities and units appropriate to the situation.
   (F-LE.1–5 review; A-CED.1–4; N-Q.1–3; track objectives 2, 13)

## Vocabulary

domain, range, intercept, interval of increase/decrease, local and global
extremum, end behavior, vertical / horizontal / slant asymptote, symmetry
(even, odd, neither), equivalent form, composition, decomposition, inverse
function, domain restriction, average rate of change, difference quotient,
residual, piecewise-defined function, removable discontinuity (hole), sign
chart, midline, amplitude, period.

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**, high
school conceptual categories. Codes below were verified against the
official framework text on thecorestandards.org by the track audit runs on
2026-10-07 and 2026-10-08; descriptions here are plain-language
paraphrases, not reproductions. Codes marked **(+)** are advanced in the
published document; where this unit teaches one, the marking is stated.
No state adoption, accreditation, or alignment certification is claimed.

- **F-IF.1, 2** — a function as a rule assigning each domain element
  exactly one range element; function notation and evaluation.
- **F-IF.4–6** — key features of graphs and tables; relating domain to the
  relationship described; average rate of change over an interval.
- **F-IF.7.a–e** — graphing functions by hand and with technology; 7.b
  (rational) and 7.d (+) (trigonometric: amplitude, period, midline) are
  the precalculus-rigor targets.
- **F-IF.8** — writing a function in different but equivalent forms to
  reveal zeros, extrema, and symmetry.
- **F-IF.9** — comparing properties of two functions in different
  representations.
- **F-BF.1.a, 1.b** — writing functions that describe relationships;
  combining standard function types by composition.
- **F-BF.3** — describing the effect of transformations (prerequisite
  fluency, applied throughout).
- **F-BF.4.a, 4.d (+)** — finding inverse functions; 4.d (+) restricts
  domains to produce invertible functions.
- **F-LE.1–5** — distinguishing linear, quadratic, and exponential models
  (review); interpreting parameters in context.
- **A-SSE.1.a, 1.b, 2** — interpreting and rewriting expressions by their
  structure.
- **A-CED.1–4** — creating and rearranging equations for modeling;
  interpreting solutions as viable or nonviable.
- **A-REI.1, 11** — justifying solution steps; reading `f(x) = g(x)`
  solutions from intersections.
- **N-Q.1–3** — using units to guide multi-step solutions; choosing
  accuracy appropriate to measurement limits.

## Session pacing (20 sessions, ~50 minutes each)

Sessions are five per week. The adult adapts pacing privately; a session
may stretch across two sittings for a learner who needs it.

| Session | Focus | Activity and success criterion |
|---|---|---|
| S1 | Lesson 01 core | Read and work Lesson 01 (function analysis toolkit); produce a complete feature list for one polynomial and one rational function. Success: every listed feature is justified from the formula, not from memory of the shape. |
| S2 | Practice Set A | Independent practice on L01 analyses; two retrieval items from grade-11 transformation fluency. Success: sketches drawn *before* Desmos checks match the checks on intercepts, asymptotes, and end behavior. |
| S3 | Lesson 02 core | Lesson 02 (equivalent forms); rewrite three expressions each in a revealing form and name what the form reveals. Success: each rewrite is paired with a one-sentence justification from structure. |
| S4 | Practice Set B | Independent practice on L02 rewrites; two retrieval items on L01 feature analysis. Success: zeros/extrema/end behavior read directly off the chosen forms. |
| S5 | Fluency clinic | Re-teach insecure skills from S1–S4 in use (no new content); short mixed retrieval. Success: the learner names what is now solid and what still needs watching. |
| S6 | Lesson 03 core | Lesson 03 (composition, decomposition, inverses); build two two-stage models from context and invert one restricted-domain function. Success: inverse verified by composition both ways. |
| S7 | Practice Set C | Independent practice on L03; two retrieval items on equivalent forms. Success: decompositions name the inner and outer stages in the context's words. |
| S8 | Lesson 04 core | Lesson 04 (average rate of change, difference quotient); compute and simplify two difference quotients fully by hand. Success: every algebra step shown; the quotient interpreted as a slope. |
| S9 | Practice Set D | Independent practice on L04; two retrieval items on composition/inverses. Success: rates carry correct units and a context interpretation. |
| S10 | Formative quiz | Week-04 quiz (L01–L04, ~30 min), then same-day error review with the adult. Success: every error is classified (concept / algebra / reading) and one is re-worked correctly. |
| S11 | Lesson 05 core | Lesson 05 (piecewise and rational rigor); graph one piecewise and one rational function from a complete feature list. Success: holes vs asymptotes decided by factored form before graphing. |
| S12 | Practice Set E | Independent practice on L05; two retrieval items on rate of change. Success: sign charts shown for the rational inequality. |
| S13 | Project studio 1 | Model Shootout launch: choose a dataset, define quantities and units, fit the first candidate family. Success: a written plan naming the two families and why each is plausible. |
| S14 | Lesson 06 core | Lesson 06 (modeling from data); complete the three-family comparison activity including the Ferris-wheel sine model. Success: a residual table computed by hand for one fit. |
| S15 | Project studio 2 | Fit the second family; compute residuals; draft the rate-of-change comparison. Success: residuals and rate reasoning both written down before any conclusion. |
| S16 | Project studio 3 | Write the one-page defense; gallery review with the adult against the rubric. Success: the defense cites residuals *and* rate behavior *and* domain fit. |
| S17 | Practice Set F | Mixed retrieval across all six lessons. Success: the learner sorts each item to its lesson's toolkit without prompting. |
| S18 | Review | Targeted re-teach from S10/S17 evidence; no new content. Success: the learner explains one old error's fix in their own words. |
| S19 | Unit assessment | Culminating assessment (~50 min). Success: every objective attempted; written justifications complete. |
| S20 | Debrief | Assessment debrief with the adult; track-forward: what U02 (trigonometry) will reuse. Success: a one-paragraph self-assessment naming the strongest and weakest objective. |

## Materials

Notebook, pencil, ruler, graph paper, scientific calculator, printed copy
of `assets/ferris-wheel-modeling.png` for Lesson 06, Desmos graphing
calculator (free, no account: desmos.com/calculator), spreadsheet software
for the project residual tables. The adult previews all external tools for
advertising and age suitability before first use.

## Safety and accessibility

No hazards: all investigations are paper, pencil, and screen-based. The
adult supervises screen time and previews external links. Each lesson
includes reading/language-access supports and an alternate response mode
(oral, sketched, or adult-scribed); the adult chooses the mode that fits
the learner. No learner work, names, photos, or schedules go into any
public repository.

## Files in this unit

- `README.md` — this file.
- `lessons/lesson-01-function-analysis-toolkit.md` through
  `lessons/lesson-06-modeling-from-data.md` — six fully written lessons.
- `practice.md` — Practice Sets A–F.
- `project.md` — the Model Shootout investigation with rubric.
- `resource-pack.md` — verified resources with task mappings.
- `assessments/week-04-quiz.md` — formative quiz (S10).
- `assessments/unit-assessment.md` — culminating assessment (S19).
- `teacher-guide.md` — adults-only teaching notes (no answer keys).
- `answer-key.md` — adults-only worked solutions for every scored item.
- `assets/ferris-wheel-modeling.png` + `assets/README.md` — generated
  modeling-prompt image with generation record, alt text, caption, and
  text-only alternative.
