# Grade 12 Social Studies — Scope and Sequence

Economics and policy inquiry: how individuals, firms, and governments make
decisions under scarcity; how markets coordinate production, prices, and
trade; where markets falter; how the national economy is measured and steered;
and how to model personal finances and argue policy from evidence. Audit
delivered 2026-10-09 against `main` for issue #57 (A00). The subject track
folder had **0 existing files**; this audit plans the full track from scratch
and inventories reusable material elsewhere in the repository. This is a
proposed pathway, not a universal graduation requirement: high-school
social-studies course order varies by system, and core social studies in this
library stays inquiry-based and **nonpartisan**.

## 1. Audit: existing-file inventory

Re-audited 2026-10-09 against `main`. The issue's 2026-10-01 baseline said the
target folder held 0 Markdown files; that still holds — `curriculum/grade-12/`
does not exist on `main` yet (grade-12 math, science, and language-arts audits
exist only as validated drafts on unmerged branches: PRs #122, #124, #123).
Decisions are **Keep** (reuse as-is or as a formative bank), **Revise**
(needs substantive improvement before unit use), **Enrichment** (optional), or
**Gap** (missing; to be authored).

| Item | Location | Decision |
|---|---|---|
| Track index page | `curriculum/grade-12/social-studies/README.md` | **Gap** — created by this audit: track description, measurable objectives, keep/revise/gap map, unit plan |
| Track scope-and-sequence | `curriculum/grade-12/social-studies/scope-and-sequence.md` | **Gap** — this document |
| Grade-12 hub page | `curriculum/grade-12/README.md` | **Gap** — created by this audit; lists the social-studies track truthfully and marks the other three subjects planned |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — Grade 12 line added; "Grades 9–12 have no folders" wording corrected for grade 12 |
| Curriculum manifest | `curriculum/manifest.json` (main) | **Revise** — three new entries under the existing schema |
| Supply-and-demand guide | `resources/supply_and_demand_economics.md` | **Keep as adult-side reference** — market vocabulary, supply/demand shift logic, macro indicator definitions frame U01–U02 and U05. Its "kid-friendly" framing targets grades 5–8; the adult re-levels every explanation for grade 12 and never assigns it as lesson text |
| Financial tools guide | `resources/financial_tools_and_principles.md` | **Keep as adult-side reference** — budgeting, credit, compounding, mortgage vocabulary frames U08's personal-finance models. Wikipedia quick-links verified as real encyclopedia entries; adult re-checks dates on any live rate or price at authoring |
| Government basics guide | `resources/government_basics.md` | **Adult-side reference** — three-branches, federalism, and tax/spend vocabulary behind U04 and U06 policy work; re-leveled, never assigned as lesson text |
| U.S. principles guide | `resources/united_states_understanding_and_principles.md` | **Adult-side reference** — rule-of-law and constitutional-economy framing for U04's institutions discussion (D2.Eco.9.9-12) |
| Black excellence figures | `resources/black_excellence_figures.md` | **Adult-side reference** — the adult pre-selects entrepreneur/business figures for U03 (innovation and entrepreneurship). Entries are research prompts, not lesson text; check grade fit at authoring |
| Careers guide | `resources/careers.md` | **Adult-side reference** — labor-market and earnings vocabulary candidate for U03 and U08; verify currency at authoring |
| World facts guide | `resources/world_facts.md` | **Reference only** — global-market scope useful as background for U07 trade comparisons; never assigned as lesson text |
| U.S. states dataset | `resources/us_states.csv` | **Keep as candidate for U05/U07 data tasks** — columns: `name_common`, `name_official`, `usps`, `capital`, `region`, `subregion`, `population_approx`, `area_sq_mi`, `area_sq_km`, `population_density_per_sq_mi`, `statehood_year`, `biggest_city`, `biggest_city_population`, `state_fact`, `google_maps_url`. **Caution:** figures are labeled `approx`; verify and date before learner-facing use |
| UN countries dataset | `resources/un_countries.csv` (+ `.json`) | **Keep as candidate for U07 comparative tasks** — country/code/region columns. **Caution:** the `population` column is empty in the current snapshot; verify every figure and date at authoring |
| U.S. presidents dataset | `resources/us_presidents.csv` | **Reference only** — marginal for economics; policy-era sequencing at most. `fact` strings are templated boilerplate; re-verify officeholder data at authoring |
| Global conflicts guide | `resources/wars_fundamentals.md` | **Reference only** — sanctions/trade-restriction vocabulary marginally useful for U07; not a lesson text |
| Assignment catalog | `assignments/README.md` | **Inspect during unit sections** — any economics-flavored legacy assignments get age-fit and accuracy review before reuse; none are core lessons |
| Semester resource library | `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link is opened and assessed before recommendation |
| Resource Finder prompt | `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives each unit's Resource Pack |
| Grade-11 social-studies draft (unmerged PR #121) | `curriculum/grade-11/social-studies/` (branch) | **Prerequisite reference only** — its policy-evaluation arc (U05 budgets/regulation, U08 policy inquiry) is the assumed inquiry background (see §2); this course does not re-teach civics |
| Grade-11 math draft (unmerged PR #117) | `curriculum/grade-11/math/` (branch) | **Prerequisite reference only** — Algebra II function/graphing skills (linear functions, slope, reading scatterplots) are assumed entry math; re-taught in-context where needed |
| Lessons, teacher guides, separate answer keys, quizzes, assessments, diagnostics, resource packs, generated images | none exist | **Gap** — all to be authored in U01–U08 and R00 |

No existing file was found to be factually inaccurate in the sampled re-read
(the supply/demand guide's laws and shift factors, the financial guide's
definitions, and the states CSV's column headers check out). The dominant
condition is **absence**: no lessons, no teacher support, no assessments, no
resource packs, and no grade-12 folder at all. The dataset cautions that
matter: `us_states.csv` and `un_countries.csv` carry approximations and empty
columns — usable for structure, never for content, until re-verified and
dated.

## 2. Prerequisites

Entry assumes the grade-11 social-studies draft arc (U.S. government and
civics) or equivalent: the learner can frame compelling and supporting
questions, classify sources by kind, evaluate evidence with attention to
limitations, write a claim supported by two pieces of evidence, and
deliberate a contested question from multiple perspectives. Entry math from
the grade-11 math draft arc (Algebra II) or equivalent: graph and interpret
linear functions, compute and interpret slope, read scatterplots, work with
percentages and ratios, and interpret tables of data. The diagnostic weeks
(Weeks 1–2) verify both; U01 re-teaches opportunity-cost and marginal
reasoning from scratch rather than assuming them, and each unit's S2
practice re-teaches the graphing move it needs.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. **Apply scarcity, incentive, and opportunity-cost reasoning** to personal
   and policy decisions; show how incentives shape policies with different
   costs and benefits for different groups. (D2.Eco.1.9-12)
2. **Use marginal analysis**: construct an argument for or against an economic
   approach from marginal benefits and marginal costs. (D2.Eco.2.9-12)
3. **Analyze market coordination**: explain how incentives influence what is
   produced and distributed in a market system; model supply and demand
   shifts and compute the resulting price and quantity changes, including
   price elasticity of demand. (D2.Eco.3.9-12)
4. **Evaluate competition** among buyers and sellers in specific real markets
   and describe the consequences of that competition — for prices, wages,
   and output. (D2.Eco.4.9-12; D2.Eco.5.9-12)
5. **Evaluate the economic role of firms**: compare business organizations,
   explain how firms set price and output, and describe the roles of
   innovation and entrepreneurship. (D2.Eco.3–D2.Eco.5.9-12 applied)
6. **Diagnose market failures**: generate explanations for a government role
   where market inefficiencies exist (externalities, public goods,
   information problems); evaluate policies to improve market outcomes by
   benefits and costs; describe intended and unintended consequences.
   (D2.Eco.6.9-12; D2.Eco.7.9-12; D2.Eco.8.9-12)
7. **Explain the institutions of a market economy**: clearly defined property
   rights, the rule of law, and contract enforcement. (D2.Eco.9.9-12)
8. **Read the national economy**: use current, dated data to explain how
   changes in spending, production, and the money supply affect economic
   conditions; use GDP, inflation, and unemployment indicators to analyze the
   current and expected state of the economy. (D2.Eco.10.9-12; D2.Eco.11.9-12)
9. **Evaluate stabilization policy**: evaluate the selection of monetary and
   fiscal policies under different conditions; explain the Federal Reserve's
   tools and the federal budget process. (D2.Eco.12.9-12)
10. **Explain long-run growth**: show why technology, capital investment, and
    human capital raise growth and living standards. (D2.Eco.13.9-12)
11. **Analyze the global economy**: apply comparative advantage to trade in
    goods and services; explain how globalization trends and policies affect
    growth, labor markets, citizens' rights, the environment, and income
    distribution across nations. (D2.Eco.14.9-12; D2.Eco.15.9-12)
12. **Inquire and argue**: develop questions, evaluate sources, build and
    critique evidence-based policy arguments, present conclusions, and assess
    informed-action options within lawful, adult-supervised channels.
    (D1.1–D1.5.9-12; D3.1–D3.4.9-12; D4.1–D4.4.9-12; D4.6.9-12; D4.7.9-12)
13. **Model personal finance**: build and interpret a budget/saving/borrowing
    model with verified current rates and fees; explain assumptions, risks,
    and limits — as education, not financial advice.

## 4. Standards crosswalk

Source: the College, Career, and Civic Life (C3) Framework for Social Studies
State Standards (National Council for the Social Studies). The economics
indicator codes below were verified against published C3 indicator text
(Smithsonian Learning Lab's standards mirror for D2.Eco.1–D2.Eco.2.9-12,
opened 2026-10-09; independent school-curriculum mirrors for D2.Eco.3–
D2.Eco.15.9-12, cross-checked against each other 2026-10-09) and against the
official framework's documented four-dimension inquiry structure
(socialstudies.org/standards/c3, opened 2026-10-09). **Codes are exact;
descriptions are brief paraphrases** — check the authoritative framework for
exact wording. **No state adoption, accreditation, or alignment certification
is claimed.** This is a proposed pathway; high-school social-studies course
order varies by system.

The Council for Economic Education's *National Content Standards in
Economics* and its *National Standards for Financial Literacy* (with the
Jump$tart Coalition) are reference shelf only: consulted during unit
authoring for concept coverage, never cited as adopted standards.

### Dimension 1 — Developing Questions and Planning Inquiries

- **D1.1–D1.5.9-12** — the inquiry arc used in every unit: compelling and
  supporting questions, explanation of expert agreement/disagreement, and
  planning source gathering across viewpoints and uses (the U08 capstone is
  the full-arc demonstration).

### Dimension 2 — Economics: Economic Decision Making

- **D2.Eco.1.9-12** — analyzing how incentives influence choices that can
  produce policies with a range of costs and benefits for different groups
  (U01 opportunity cost and policy incentives; U04 distributional effects).
- **D2.Eco.2.9-12** — using marginal benefits and marginal costs to construct
  an argument for or against an economic approach (U01 marginal analysis;
  U04 marginal policy evaluation; U08 capstone arguments).

### Dimension 2 — Economics: Exchange and Markets

- **D2.Eco.3.9-12** — analyzing how incentives influence what is produced and
  distributed in a market system (U01 production possibilities; U02 market
  mechanics; U03 firm decisions).
- **D2.Eco.4.9-12** — evaluating how much competition among sellers and among
  buyers exists in specific markets (U03 market structures).
- **D2.Eco.5.9-12** — describing the consequences of competition in specific
  markets (U03 prices, wages, output under competition).
- **D2.Eco.6.9-12** — generating explanations for a government role in
  markets when market inefficiencies exist (U04 externalities, public goods,
  information failures).
- **D2.Eco.7.9-12** — using benefits and costs to evaluate whether
  government policies improve market outcomes (U04 policy evaluation; U06
  fiscal evaluation).
- **D2.Eco.8.9-12** — describing intended and unintended consequences of
  government policies to improve market outcomes (U04; U06).
- **D2.Eco.9.9-12** — describing the roles of institutions such as clearly
  defined property rights and the rule of law in a market economy (U04
  institutions; U03 entrepreneurship under rule of law).

### Dimension 2 — Economics: The National Economy

- **D2.Eco.10.9-12** — using current data to explain how changes in
  spending, production, and the money supply affect economic conditions
  (U05 data investigations; U06 policy transmission).
- **D2.Eco.11.9-12** — using economic indicators to analyze the current and
  future state of the economy (U05 GDP, inflation, unemployment).
- **D2.Eco.12.9-12** — evaluating the selection of monetary and fiscal
  policies under a variety of economic conditions (U06).
- **D2.Eco.13.9-12** — explaining why technology and investment in capital
  goods and human capital increase growth and living standards (U05 growth;
  U03 human capital; U07 development).

### Dimension 2 — Economics: The Global Economy

- **D2.Eco.14.9-12** — analyzing the role of comparative advantage in
  international trade of goods and services (U07).
- **D2.Eco.15.9-12** — explaining how globalization trends and policies
  affect economic growth, labor markets, citizens' rights, the environment,
  and resource and income distribution in different nations (U07).

### Dimension 3 — Evaluating Sources and Using Evidence

- **D3.1–D3.4.9-12** — gathering and evaluating sources; developing claims
  and using evidence, with attention to limitations (S2–S4 of every unit;
  the U05 data labs, U07 trade-data investigations, and U08 source work).

### Dimension 4 — Communicating Conclusions and Taking Informed Action

- **D4.1–D4.4.9-12** — communicating and critiquing conclusions: argument
  construction, critique, and presentation (S4–S5 of every unit).
- **D4.6.9-12** — using disciplinary lenses on local, regional, and national
  problems across contexts (U04 community observation; U08 policy inquiry).
- **D4.7.9-12** — assessing options for individual and collective action on
  such problems (U08 action proposal within lawful, adult-supervised
  channels).

## 5. Eight-unit sequence with weekly pacing

Model: five ~50-minute sessions per week. Each unit = 4 weeks = 20 sessions:
**S1** concept launch (explicit explanation + modeled reasoning), **S2** close
reading, graphing, and computation practice (guided then independent), **S3**
data/model investigation (datasets, simulations, field observation), **S4**
evidence-based writing or structured deliberation, **S5** review and unit
check. Eight units give 32 weeks; four flexible weeks cover diagnostic (2),
midyear review (1), and final review (1), totaling 36 weeks / 180 sessions.
Weekly goals below are adult-checkable; session notes show the shape of each
week. Unit sections will expand these into full lessons. Reading and modeling
stamina steps up through the year: guided worked examples in U01–U02,
independent multi-source data work from U05.

> Nonpartisanship note (applies all year): markets, policies, and arguments
> are presented without endorsing parties, candidates, or causes. Contested
> current questions get multiple sourced perspectives. The adult checks that
> examples stay institutional (roles, rules, and evidence) rather than
> partisan commentary, and dates every current-data claim.

> Currency note: rates, prices, figures, election officeholders, and policy
> details change. Unit sections date every current-data claim and re-verify
> at authoring. Financial examples are **educational, not investment
> advice**; verify current prices, law, and market claims per
> `docs/content-review.md`.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry graphing, data, and percent skills | S1: graph a linear function from a schedule and interpret slope; S2: read a two-variable table and compute percent changes; S3: interpret one scatterplot; S4: re-teach weak spots; S5: short skills check — adult records gaps |
| 2 | Verify entry inquiry and economic-intuition skills | S1: write one claim about an economic question with two pieces of evidence; S2: identify a tradeoff and its opportunity cost in a scenario; S3: draft a compelling + supporting question pair about a current economic issue; S4: source-classification re-teach; S5: diagnostic review — adult records gaps that U01–U04 re-teach |

### U01 — Economic reasoning: scarcity, incentives, and opportunity cost (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Apply scarcity and opportunity cost to decisions | S1: launch — scarcity means choice; the production possibilities frontier as a model of tradeoffs; S2: close read one PPF explanation with vocabulary support; S3: investigation — build a PPF from a two-good schedule and find the opportunity cost of each point (D2.Eco.1.9-12); S4: write one paragraph applying opportunity cost to a real decision; S5: review + check |
| 4 | Analyze how incentives shape choices | S1: positive and negative incentives for consumers, producers, and policymakers; S2: practice identifying incentives in three scenarios (taxes, subsidies, fines); S3: investigation — one policy's incentives and who bears its costs and benefits across groups; S4: deliberation — do incentives always work as intended?; S5: review + check |
| 5 | Use marginal analysis | S1: marginal benefits and marginal costs; "how much" decisions at the margin; S2: worked example — decide the optimal study hours with a marginal schedule; S3: investigation — apply marginal reasoning to one business or policy decision; S4: argument — construct a marginal case for or against an economic approach (D2.Eco.2.9-12); S5: review + check |
| 6 | Compare economic systems | S1: how market, command, traditional, and mixed systems answer what/how/for whom; S2: close read country sketches of three system types (analytical, non-endorsing); S3: investigation — sort five economies by the mix of market and command features; S4: argument — which questions does each system answer best?; S5: unit review + U01 assessment |

### U02 — Supply, demand, markets, and price signals (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain the laws of supply and demand | S1: launch — demand schedules and curves; the law of demand; S2: supply schedules and curves; the law of supply; S3: investigation — build both curves from a schedule and find equilibrium price and quantity; S4: write one paragraph explaining what equilibrium means; S5: review + check |
| 8 | Analyze shifts vs. movements along curves | S1: demand shifters (income, tastes, substitutes, complements, expectations, buyers); S2: supply shifters (input prices, technology, taxes/subsidies, sellers, expectations); S3: investigation — classify eight shocks as shifters or movements and predict price/quantity effects (D2.Eco.3.9-12); S4: argument — one current price change, two competing explanations; S5: review + check |
| 9 | Compute price elasticity of demand | S1: elasticity as responsiveness; the elasticity formula with a worked example; S2: practice computing elasticities from schedules and classifying elastic/inelastic; S3: investigation — why necessities differ from luxuries: compute and explain; S4: write one paragraph on how elasticity changes a firm's pricing decision; S5: review + check |
| 10 | Explain shortages, surpluses, and price controls | S1: price floors and ceilings; S2: worked example — a rent ceiling's shortage and a minimum wage's surplus, with the graphs; S3: evidence lab — two sourced assessments of one price-control policy (D2.Eco.7.9-12 preview); S4: deliberation — who gains and who loses under the control?; S5: unit review + U02 assessment |

### U03 — Firms, labor, competition, and market structures (Weeks 11–14)

| Week | Goal | Sessions |
|---|---|---|
| 11 | Explain how firms organize and decide | S1: sole proprietorships, partnerships, corporations — liability and scale tradeoffs; S2: revenue, cost, and profit; fixed vs. variable costs; S3: investigation — build a cost schedule and find the profit-maximizing output (worked marginal example); S4: write one paragraph on why a firm stops expanding; S5: review + check |
| 12 | Analyze labor markets | S1: wages as the price of labor — supply, demand, and human capital; S2: practice reading earnings-by-education data (verified, dated); S3: investigation — how one occupation's wages respond to a demand shock; S4: argument — what explains wage differences?; S5: review + check |
| 13 | Compare market structures | S1: perfect competition, monopolistic competition, oligopoly, monopoly — number of sellers, product differences, barriers; S2: practice classifying four real markets with evidence (D2.Eco.4.9-12); S3: investigation — consequences of competition: price, quality, innovation in two markets (D2.Eco.5.9-12); S4: deliberation — when is bigness a problem?; S5: review + check |
| 14 | Explain innovation, entrepreneurship, and institutions | S1: the entrepreneur's role — risk, new combinations, creative destruction; S2: research lab — one entrepreneur's venture (adult-selected from verified sources), its market, and its outcome; S3: investigation — property rights and rule of law as growth conditions: compare two country cases (D2.Eco.9.9-12); S4: argument — what matters more for prosperity: resources or institutions?; S5: unit review + U03 assessment |

### U04 — Market failures, public goods, and policy tradeoffs (Weeks 15–18)

| Week | Goal | Sessions |
|---|---|---|
| 15 | Diagnose externalities and public goods | S1: launch — when private costs differ from social costs: pollution, congestion, spillovers; S2: worked example — graph a negative externality and the efficient quantity; S3: investigation — classify six goods by excludability and rivalry; find the free-rider problem in each; S4: write one paragraph explaining why markets under-provide public goods (D2.Eco.6.9-12); S5: review + check |
| 16 | Analyze information failures and market power | S1: asymmetric information — lemons markets and insurance; S2: natural monopoly and network effects; S3: investigation — one market failure case, adult-selected, traced from mechanism to harm; S4: argument — which failure is hardest for markets to self-correct?; S5: review + check |
| 17 | Evaluate policy responses with benefit–cost reasoning | S1: the policy toolkit — taxes/subsidies, regulation, cap-and-trade, direct provision; S2: worked example — evaluate one policy by benefits and costs, with a marginal check (D2.Eco.7.9-12); S3: evidence lab — intended vs. unintended consequences of one real policy, two sourced perspectives (D2.Eco.8.9-12); S4: deliberation — the intervention tradeoff: when is the cure worse than the disease?; S5: review + check |
| 18 | Weigh distributional tradeoffs | S1: who pays, who benefits — incidence across income groups; S2: equity vs. efficiency: the classic tradeoff; S3: investigation — distributional analysis of one tax or transfer policy (dated figures); S4: argument — a fair policy, defended with evidence and acknowledged tradeoffs; S5: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Week | Goal | Sessions |
|---|---|---|
| 19 | Consolidate U01–U04; close diagnostic gaps | S1: big-picture map — scarcity → markets → firms → failures; S2: re-teach the weakest modeling skill from unit checks (graphing, elasticity, marginal math); S3: policy-evaluation clinic — benefits/costs, intended/unintended; S4: argument-writing clinic — claims, counterclaims, limitations; S5: midyear check — adult records standing and adjusts U05–U08 pacing |

### U05 — Macroeconomic indicators: growth, inflation, and unemployment (Weeks 20–23)

| Week | Goal | Sessions |
|---|---|---|
| 20 | Measure output: GDP | S1: launch — GDP as the value of final goods and services; nominal vs. real; S2: worked example — compute GDP from an expenditure table (C+I+G+NX); S3: data investigation — read one official GDP release (dated) and explain what changed and why (D2.Eco.10.9-12); S4: write one paragraph on what GDP misses; S5: review + check |
| 21 | Measure prices: inflation | S1: the CPI basket and how an index works; S2: worked example — compute inflation from index values; who inflation helps and hurts; S3: data investigation — one official inflation release (dated): read the release, check the basket, explain the drivers (D2.Eco.11.9-12); S4: argument — is a little inflation good or bad?; S5: review + check |
| 22 | Measure work: unemployment | S1: employed, unemployed, out of the labor force; the unemployment rate formula; S2: frictional, structural, cyclical unemployment; S3: data investigation — one official employment release (dated): the rate, the participation rate, and what the headline hides (D2.Eco.11.9-12); S4: write one paragraph connecting unemployment to well-being; S5: review + check |
| 23 | Explain growth and the business cycle | S1: the business cycle — expansion, peak, contraction, trough; S2: growth drivers — technology, capital, human capital (D2.Eco.13.9-12); S3: data investigation — compare two countries' growth paths over a decade (verified, dated figures); S4: argument — what should count as economic success?; S5: unit review + U05 assessment |

### U06 — Fiscal and monetary policy and economic institutions (Weeks 24–27)

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain fiscal policy | S1: launch — taxes, spending, and the budget balance; S2: close read one federal budget summary (verified, dated figures); S3: investigation — how a spending increase or tax cut transmits to demand, with a worked multiplier example; S4: argument — deficits: stimulus or burden? (D2.Eco.12.9-12); S5: review + check |
| 25 | Explain monetary policy | S1: the Federal Reserve's structure and mandates; S2: the tools — interest on reserves, open-market operations, discount window; how rate changes transmit to borrowing and spending; S3: data investigation — one Fed policy statement (dated): read it, identify the decision, and predict the intended transmission (D2.Eco.12.9-12); S4: deliberation — should the central bank be independent?; S5: review + check |
| 26 | Compare policy in different conditions | S1: recessions vs. inflations — which tool fits which problem; S2: worked comparison — evaluate fiscal vs. monetary responses to one historical downturn (dated data, institutional framing); S3: investigation — policy lags and political-economy frictions: why good policy is hard; S4: argument — the best policy mix for a stated scenario, defended with evidence; S5: review + check |
| 27 | Analyze economic institutions and financial regulation | S1: banks, the money supply, and how money is created; S2: financial crises in outline — what breaks, who pays; S3: investigation — one regulation's path: statute → agency rule → market effect (dated, institutional); S4: deliberation — stability vs. innovation in finance; S5: unit review + U06 assessment |

### U07 — International trade, finance, development, and inequality (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Apply comparative advantage | S1: launch — absolute vs. comparative advantage with a worked two-country, two-good example; S2: practice computing opportunity costs and predicting trade patterns; S3: investigation — apply the model to one real trading pair (dated data; note the model's simplifications); S4: argument — who gains from trade, and who can lose? (D2.Eco.14.9-12); S5: review + check |
| 29 | Analyze trade policy and exchange rates | S1: tariffs, quotas, and trade agreements — who pays a tariff; S2: exchange rates: what moves them and how they affect trade; S3: data investigation — one country's trade balance over time (dated, verified figures; D2.Eco.15.9-12 preview); S4: deliberation — protection vs. openness, argued from evidence; S5: review + check |
| 30 | Explain development and inequality | S1: how development is measured — income, health, education; S2: growth drivers in poor countries (D2.Eco.13.9-12 revisited); S3: data investigation — compare inequality within and across countries with dated figures; S4: argument — what should a development policy target first?; S5: review + check |
| 31 | Evaluate globalization | S1: supply chains, multinational firms, and financial flows; S2: close read two sourced assessments of one globalization trend (framing check); S3: evidence lab — globalization's effects on growth, labor, rights, environment, and distribution across two nations (D2.Eco.15.9-12); S4: structured writing — a balanced verdict with acknowledged tradeoffs; S5: unit review + U07 assessment |

### U08 — Personal-finance models, economic evidence, and policy capstone (Weeks 32–35)

> Education-not-advice note: personal-finance work teaches modeling and
> comparison. It is never a recommendation to buy, borrow, or invest. Rates
> and fees are verified and dated at authoring; the adult re-checks anything
> current before the learner sees it.

| Week | Goal | Sessions |
|---|---|---|
| 32 | Model budgeting and saving | S1: launch — budgets as allocation under scarcity; S2: worked example — build a monthly budget from a pay stub scenario (fictional practice data, clearly labeled); S3: investigation — compare two saving vehicles on fees, access, and risk with dated figures; S4: write one paragraph explaining the model's assumptions; S5: review + check |
| 33 | Model borrowing and compounding | S1: interest, APR vs. APY, amortization in outline; S2: worked example — compare the total cost of the same loan at two rates; S3: investigation — compounding: run the numbers on starting early vs. starting late; S4: argument — when is borrowing worth it?; S5: review + check |
| 34 | Frame and research a policy question | S1: choose a real, current policy question (adult-approved, institutional framing); S2: build the compelling/supporting question set and a source plan (D1, D3); S3: evidence lab — gather sources across perspectives, evaluate limitations, assemble the benefit–cost table (D2.Eco.2.9-12); S4: draft the argument with counterclaims; S5: peer-style critique using the rubric |
| 35 | Argue, present, and assess action | S1: structured deliberation on the capstone questions; S2: present conclusions to a real audience (adult-supervised); S3: assess individual and collective action options within lawful channels (D4.6.9-12; D4.7.9-12); S4: final reflection — what the evidence changed in the learner's view; S5: unit review + U08 assessment |

### Weeks 36 — Final review (flexible)

| Week | Goal | Sessions |
|---|---|---|
| 36 | Cumulative synthesis and final check | S1: concept map — the year's models on one page; S2: data-task stations — one indicator, one market, one policy question; S3: argument clinic — re-argue the U08 capstone's counterclaims; S4: re-teach the highest-need objective from unit checks; S5: final assessment — adult records standing against all thirteen objectives (R00 package authored later) |

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each
unit opens with a retrieval warm-up from prior units (U02 opens with
opportunity-cost quick problems; U04 opens with supply/demand curve sketching;
U06 opens with indicator-reading; U08 opens with marginal and benefit–cost
reasoning). Week 19 and Week 36 are full-track reviews. Formative checks mix
short written work, graph/model tasks, and evidence-based paragraphs; each
unit's teacher guide specifies what "ready to move on" looks like and what to
re-teach when evidence says otherwise. The U08 capstone's S4 deliberation
doubles as the track's inquiry-arc performance check.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/supply_and_demand_economics.md` — adult-side vocabulary and
  shift-logic reference (U01–U02, U05); the adult re-levels the grade 5/8
  framing for grade 12; never assigned as lesson text.
- `resources/financial_tools_and_principles.md` — adult-side reference for
  U08's models; its Wikipedia quick-links are verified encyclopedia entries;
  rates and fees re-verified at authoring.
- `resources/government_basics.md` — policy-tool vocabulary behind U04/U06.
- `resources/united_states_understanding_and_principles.md` — rule-of-law
  framing for U04 (D2.Eco.9.9-12).
- `resources/black_excellence_figures.md` — adult pre-selects research
  subjects for U03's entrepreneurship lab.
- `resources/careers.md` — labor-market vocabulary candidate for U03/U08.
- `resources/us_states.csv`, `resources/un_countries.csv` (+ `.json`) —
  data-task candidates with the cautions in §1; every figure re-verified and
  dated at authoring.
- The grade-11 social-studies and grade-11 math draft arcs (unmerged PRs
  #121, #117) serve as **prerequisite reference only** — never as grade-12
  lesson content. Grade-12 economics does not re-teach civics or Algebra II.
- `docs/content-review.md` privacy and finance-education boundaries apply
  to every unit: no learner records in the repo; financial material stays
  educational, never investment advice.

## 8. Safe materials

Household and free digital materials: paper graphing supplies or a free
spreadsheet, calculator, current-event articles (adult-selected), public
datasets from official statistical agencies (BLS, BEA, Census, Federal
Reserve — verified and dated at authoring), interview/observation tasks for
U03 and U04. Adult supervises any visit to a business, public meeting, or
interview; every field task has a simulation or documentary alternative
(watch a public meeting recording; analyze a published case study). No
hazards; no learner purchases, accounts, or real financial transactions.

## 9. Accessibility supports

- **Multiple response modes** for all checks: written, oral, diagrammed, or
  adult-scribed; every graph task accepts a text/table alternative.
- Data tables ship with row/column headers and units named; color is never
  the only cue in any chart.
- Vocabulary pre-taught with concrete examples before abstract use; visual
  economics word wall; home-language labels welcomed alongside English terms.
- Chunked readings with vocabulary support; longer documentary texts only
  from U05, with the adult pre-marking key passages.
- Session length (50 min) breaks into 15–20 minute blocks with movement
  between; every investigation has a seated-table and a
  discussion/movement variant.
- Economic scenarios use fictional practice data clearly labeled as such;
  real-data tasks always name source and date so the learner can check
  currency.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #57.
- No grade-12-appropriate internal datasets exist beyond the CSV candidates
  above; official-agency data tasks are authored fresh in U05–U07 with
  verified, dated figures.
- A tribal-economies and Native-nation economic-development reference was
  noted as a gap in the grade-11 civics audit; it stays a candidate
  enrichment reference for U04/U07, authored from authoritative sources
  during those unit sections.
- Generated raster teaching images (one per unit, used in an activity with
  alt text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Economic reasoning: scarcity, incentives, and opportunity cost; U02
Supply, demand, markets, and price signals; U03 Firms, labor, competition,
and market structures; U04 Market failures, public goods, and policy
tradeoffs; U05 Macroeconomic indicators: growth, inflation, and unemployment;
U06 Fiscal and monetary policy and economic institutions; U07 International
trade, finance, development, and inequality; U08 Personal-finance models,
economic evidence, and policy capstone; R00 diagnostic, midyear/final review,
and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #57 body, comments, and label state re-read 2026-10-09 before
  claiming; no `curriculum-in-progress` claims active on any queue issue; no
  conflicting worker claims on the chosen issue (0 comments, no claim label
  at selection).
- `curriculum/grade-12/` re-inventoried on `main`: the folder does not exist
  (0 Markdown files); created by this run.
- C3 Framework economics indicator codes/descriptions verified 2026-10-09
  against published C3 indicator text (Smithsonian Learning Lab standards
  mirror for D2.Eco.1–D2.Eco.2.9-12; independent curriculum mirrors for
  D2.Eco.3–D2.Eco.15.9-12, cross-checked) and the framework's documented
  four-dimension structure (socialstudies.org/standards/c3, opened
  2026-10-09). Codes exact; descriptions paraphrased. No state adoption,
  accreditation, or alignment certification claimed. The Council for Economic
  Education standards are reference shelf only.
- Internal resources re-read on `main` (supply/demand guide, financial
  tools guide, government basics, U.S. principles, black excellence figures,
  careers, world facts; states/countries/presidents CSV headers) with
  cautions recorded in §1.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
