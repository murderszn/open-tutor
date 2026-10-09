# Grade 11 Social Studies — Scope and Sequence

U.S. government and civics: how the American political system is designed,
how its institutions work, and how people participate in, challenge, and
change it. Audit delivered 2026-10-08 against `main` for issue #53 (A00). The
subject track folder had **0 existing files**; this audit plans the full
track from scratch and inventories reusable material elsewhere in the
repository. This is a proposed pathway, not a universal graduation
requirement: high-school social-studies course order varies by system, and
core social studies in this library stays inquiry-based and **nonpartisan**.

## 1. Audit: existing-file inventory

Re-audited 2026-10-08 against `main`. The issue's 2026-10-01 baseline said the
target folder held 0 Markdown files; that still holds — `curriculum/grade-11/`
does not exist on `main` yet (grade-11 math, science, and language-arts audits
exist only as validated drafts on unmerged branches: PRs #117, #118, #119).
Decisions are **Keep** (reuse as-is or as a formative bank), **Revise**
(needs substantive improvement before unit use), **Enrichment** (optional), or
**Gap** (missing; to be authored).

| Item | Location | Decision |
|---|---|---|
| Track index page | `curriculum/grade-11/social-studies/README.md` | **Gap** — created by this audit: track description, measurable objectives, keep/revise/gap map, unit plan |
| Track scope-and-sequence | `curriculum/grade-11/social-studies/scope-and-sequence.md` | **Gap** — this document |
| Grade-11 hub page | `curriculum/grade-11/README.md` | **Gap** — created by this audit; lists all four subjects truthfully, including the unmerged draft PRs |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — Grade 11 line added; "Grades 9–12 have no folders" wording corrected for grade 11 |
| Curriculum manifest | `curriculum/manifest.json` (main) | **Revise** — three new entries under the existing schema; counts updated |
| Government basics guide | `resources/government_basics.md` | **Keep as adult-side reference** — three-branches, federalism, checks-and-balances vocabulary for U01–U02 and U05. Its "kid-friendly" framing skews elementary; the adult re-levels every term for grade 11 and never assigns it as lesson text |
| U.S. principles guide | `resources/united_states_understanding_and_principles.md` | **Keep as adult-side reference** — consent of the governed, the failed Articles, and the amendment mechanism frame U01. Brief founding-era summary is not assigned as lesson text |
| Black excellence figures | `resources/black_excellence_figures.md` | **Adult-side reference** — the adult pre-selects figures for U03 (civil rights leadership). Entries are research prompts, not learner reading; check grade fit at authoring |
| Economics guide | `resources/supply_and_demand_economics.md` | **Keep as adult-side reference** — market vocabulary and the government-role framing behind U08's policy evaluation and U05's budget/regulation work. Its age tracks target grades 5/8; the adult re-levels for grade 11 |
| U.S. presidents dataset | `resources/us_presidents.csv` | **Keep as candidate for U02/U04/U05 data tasks** — columns: `presidency_number`, `president_name`, `term_start`, `term_end`, `status`, `party`, `home_state`, `days_in_office_approx`, `years_in_office_approx`, `fact`, `google_maps_url`. **Cautions:** the `fact` strings are a template ("served as the Nth U.S. presidency") — usable for sequencing and party/term-length analysis, not for content; `status` and officeholder data may be dated — re-verify every name and date at authoring |
| U.S. states dataset | `resources/us_states.csv` | **Keep as candidate for U06 state/local comparison tasks** — columns: `name_common`, `name_official`, `usps`, `capital`, `region`, `subregion`, `population_approx`, `area_sq_mi`, `area_sq_km`, `population_density_per_sq_mi`, `statehood_year`, `biggest_city`, `biggest_city_population`, `state_fact`, `google_maps_url`. **Caution:** figures are labeled `approx`; verify and date before learner-facing use |
| Tribal-government reference | none exists | **Gap** — U06 requires a verified adult-side reference on tribal sovereignty, treaties, and contemporary tribal governance; authored during the U06 unit section from authoritative sources (see §6) |
| UN countries dataset | `resources/un_countries.csv` (+ `.json`) | **Reference only** — comparative-government use is marginal at most (U07). The `population` column is empty in the current snapshot |
| World facts guide | `resources/world_facts.md` | **Reference only** — global scope; tangential to a U.S. civics course |
| Global conflicts guide | `resources/wars_fundamentals.md` | **Reference only** — concept vocabulary (treaty, alliance) marginally useful for U02/U07; not a lesson text |
| History of War assignment | `assignments/social-studies/history-of-war/README.md` | **Reference only** — labeled grade 8; this civics course's content is authored from constitutional and legal primary sources, not this page |
| Semester resource library | `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link is opened and assessed before recommendation |
| Resource Finder prompt | `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives each unit's Resource Pack |
| Grade-9 social studies track (draft PR #112) | `curriculum/grade-9/social-studies/` (branch) | **Prerequisite reference only** — its modern-world-history inquiry toolkit (source classification, evidence-based argument writing) is an assumed entry skill (see §2) |
| Grade-10 social studies track (draft PR #120) | `curriculum/grade-10/social-studies/` (branch) | **Prerequisite reference only** — its U.S.-history arc (Reconstruction Amendments, the expanded federal state, civil rights movement) is the assumed historical background (see §2); this course does not re-teach that history |
| Lessons, teacher guides, separate answer keys, quizzes, assessments, diagnostics, resource packs, generated images | none exist | **Gap** — all to be authored in U01–U08 and R00 |

No existing file was found to be factually inaccurate in the sampled re-read
(the government guide's branch descriptions and the presidents CSV's term
dates for the first entries check out). The dominant condition is
**absence**: no lessons, no teacher support, no assessments, no resource
packs, and no grade-11 folder at all. The dataset cautions that matter:
`us_presidents.csv` facts are templated boilerplate and its officeholder
data can go stale; `us_states.csv` figures are approximations — both usable
for structure, not for content, until re-verified.

## 2. Prerequisites

Entry assumes the grade-9 social studies draft arc (modern world history
inquiry toolkit) and the grade-10 social studies draft arc (U.S. history
after Reconstruction), or equivalent: the learner can classify sources by
kind, infer a source's maker and audience, write a claim supported by two
pieces of evidence, name the Reconstruction Amendments and what they changed
on paper, and explain the New Deal's expansion of the federal role. Weeks 1–2
diagnose and re-teach those skills before U01. No cross-grade learner
references: prerequisite skills are described, never linked to another grade's
lessons. A guiding adult checks placement, previews every primary source, and
confirms reading stamina — the founding-era texts (Declaration, Constitution,
Federalist/Anti-Federalist excerpts) use 18th-century English and need
vocabulary support from the first unit. The adult also enforces the course's
nonpartisan stance: institutions and processes are presented without
endorsing parties, candidates, or causes; contested current questions get
multiple perspectives with evidence.

## 3. Track objectives

By the end of the year the learner will be able to:

1. **Explain founding political ideas and evaluate the constitutional
   founding:** describe social-contract, natural-rights, and limited-government
   ideas; analyze the Declaration of Independence and the failure of the
   Articles of Confederation; evaluate the Federalist–Anti-Federalist debate
   over ratification. (C3 D2.Civ.4.9-12; D2.Civ.8.9-12)
2. **Analyze federalism and the separation of powers as contested systems:**
   distinguish enumerated, reserved, and concurrent powers; explain checks
   and balances and judicial review; trace how federal–state relations and
   institutional powers have changed over time. (D2.Civ.1.9-12; D2.Civ.4.9-12)
3. **Distinguish civil liberties from civil rights and trace the
   equal-protection struggle:** explain the Bill of Rights and incorporation;
   analyze how people used and challenged law — litigation, legislation, and
   movements — to expand liberty and equality. (D2.Civ.12.9-12;
   D2.Civ.14.9-12)
4. **Explain elections, parties, and participation:** describe the American
   electoral system including the Electoral College debate; explain party
   functions, realignment, and interest groups; analyze citizens' roles and
   participation patterns with multiple perspectives on democratic theories.
   (D2.Civ.1.9-12; D2.Civ.2.9-12)
5. **Analyze how Congress, the presidency, and the courts make and check
   policy:** trace the legislative process with its real frictions; compare
   presidential powers formal and informal; explain judicial philosophies and
   the courts' role. (D2.Civ.4.9-12; D2.Civ.11.9-12)
6. **Compare state, local, and tribal governments and evaluate civic
   institutions:** describe state and local structures and direct-democracy
   tools; explain tribal sovereignty; evaluate how citizens and institutions
   address problems at each level. (D2.Civ.1.9-12; D2.Civ.5.9-12)
7. **Evaluate media and public-opinion evidence and compare political
   systems:** assess polls and news coverage for framing, selection, and
   omission; analyze democratic and nondemocratic systems across contexts.
   (D2.Civ.8.9-12; D2.Civ.9.9-12; D3.1–D3.4)
8. **Evaluate public policies by intended and unintended outcomes:** analyze a
   policy's aims, implementation, costs and benefits, and consequences for
   different groups. (D2.Civ.13.9-12; D2.Eco.7.9-12; D2.Eco.8.9-12)
9. **Frame civic questions and work with sources across viewpoints:** develop
   compelling and supporting questions, plan source gathering, and evaluate
   evidence with attention to limitations. (D1.1–D1.5.9-12; D3.1–D3.4.9-12)
10. **Communicate conclusions and assess options for informed civic action:**
    construct and critique evidence-based arguments, present to a real
    audience, and evaluate individual and collective action options within
    lawful, adult-supervised channels. (D4.1–D4.4.9-12; D4.6.9-12;
    D4.7.9-12)

## 4. Standards crosswalk

Source: the College, Career, and Civic Life (C3) Framework for Social Studies
State Standards (National Council for the Social Studies). The civics and
economics indicator codes below were verified against the published
framework's 9–12 band indicators (Dimension 2, Tables 9–11 and the Economic
Decision Making table) on 2026-10-08; the four-dimension inquiry arc
(developing questions, disciplinary tools and concepts, evaluating sources,
communicating conclusions and taking informed action) is the framework's
documented structure. **Codes are exact; descriptions are brief
paraphrases** — check the authoritative framework for exact wording. **No
state adoption, accreditation, or alignment certification is claimed.** This
is a proposed pathway; high-school social-studies course order varies by
system.

### Dimension 1 — Developing Questions and Planning Inquiries

- **D1.1–D1.5.9-12** — the inquiry arc used in every unit: compelling and
  supporting questions, explanation of expert agreement/disagreement, and
  planning source gathering across viewpoints and uses (the U08 capstone is
  the full-arc demonstration).

### Dimension 2 — Civics: Civic and Political Institutions

- **D2.Civ.1.9-12** — powers and responsibilities of local, state, tribal,
  national, and international civic and political institutions (U02
  federalism; U04 parties, interest groups, media roles; U05 institutions;
  U06 state/local/tribal and civil society).
- **D2.Civ.2.9-12** — role of citizens in the U.S. political system:
  democratic theories, changing participation, alternative models from other
  countries (U04 elections and participation; U07 comparative government).
- **D2.Civ.3.9-12** — impact of constitutions, laws, treaties, and
  international agreements on national and international order (U02 the
  Constitution as supreme law; U06 treaties and tribal sovereignty).
- **D2.Civ.4.9-12** — how the U.S. Constitution establishes a system of
  government whose powers, responsibilities, and limits have changed over
  time and remain contested (U01 the founding debate; U02 institutional
  powers; U05 Congress/presidency/courts).
- **D2.Civ.5.9-12** — citizens' and institutions' effectiveness in addressing
  social and political problems at every level (U03 movement strategies;
  U06 state/local/tribal problem-solving; U08 policy evaluation).
- **D2.Civ.6.9-12** — relationships among governments, civil societies, and
  economic markets (U05 regulation and the budget; U06 civil society; U08
  policy inquiry).

### Dimension 2 — Civics: Participation and Deliberation

- **D2.Civ.7.9-12** — applying civic virtues and democratic principles when
  working with others (every unit's S4 deliberation; U08 capstone teamwork).
- **D2.Civ.8.9-12** — evaluating social and political systems in different
  contexts, times, and places for civic virtues and democratic principles
  (U01 evaluating the founding's democratic claims; U07 comparative
  government).
- **D2.Civ.9.9-12** — using appropriate deliberative processes in multiple
  settings (structured deliberations in U01–U08; the U05 moot court and U08
  deliberative forum).
- **D2.Civ.10.9-12** — analyzing how personal interests and perspectives
  shape the application of civic virtues, democratic principles, and
  constitutional and human rights (U03 rights in conflict; U04 campaign and
  interest-group incentives; U07 media framing).

### Dimension 2 — Civics: Processes, Rules, and Laws

- **D2.Civ.11.9-12** — evaluating procedures for governmental decisions at
  local, state, national, and international levels by the civic purposes
  achieved (U05 how a bill becomes law — with its frictions; U06 direct
  democracy; U08 the policy process).
- **D2.Civ.12.9-12** — how people use and challenge laws at every level to
  address public issues (U03 litigation and movements; U02 amendment as
  formal change).
- **D2.Civ.13.9-12** — evaluating public policies' intended and unintended
  outcomes and related consequences (U05 regulation and the budget; U08 the
  policy capstone).
- **D2.Civ.14.9-12** — historical, contemporary, and emerging means of
  changing societies, promoting the common good, and protecting rights (U03
  movement repertoires; U04 participation options; U08 action proposals).

### Dimension 2 — Economics

Economics enters through disciplinary concepts with codes verified at unit
authoring: government roles in markets and cost–benefit policy evaluation
(U05, U08 — D2.Eco.6, D2.Eco.7, D2.Eco.8.9-12 verified 2026-10-08:
explanations for government action where markets falter, evaluating policies
by benefits and costs, and weighing intended and unintended policy
consequences). Unit sections will cite the verified codes during authoring.

### Dimension 3 — Evaluating Sources and Using Evidence

- **D3.1–D3.4.9-12** — gathering and evaluating sources; developing claims
  and using evidence, with attention to limitations (S2–S4 of every unit;
  the U07 media/polling labs and U08 source work).

### Dimension 4 — Communicating Conclusions and Taking Informed Action

- **D4.1–D4.4.9-12** — communicating and critiquing conclusions: argument
  construction, critique, and presentation (S4–S5 of every unit).
- **D4.6.9-12** — using disciplinary lenses on local, regional, and national
  problems across contexts (U06 community observation; U08 policy inquiry).
- **D4.7.9-12** — assessing options for individual and collective action on
  such problems (U08 action proposal within lawful, adult-supervised
  channels).

## 5. Eight-unit sequence with weekly pacing

Model: five ~50-minute sessions per week. Each unit = 4 weeks = 20 sessions:
**S1** concept launch (explicit explanation + modeled reasoning), **S2** close
reading and skills practice (guided then independent), **S3** investigation or
application (data, maps, simulations, deliberations), **S4** evidence-based
writing or structured deliberation, **S5** review and unit check. Eight units
give 32 weeks; four flexible weeks cover diagnostic (2), midyear review (1),
and final review (1), totaling 36 weeks / 180 sessions. Weekly goals below
are adult-checkable; session notes show the shape of each week. Unit sections
will expand these into full lessons. Reading stamina steps up through the
year: founding-era excerpts with vocabulary support in U01–U02, longer
documentary and legal texts from U03 on.

> Nonpartisanship note (applies all year): institutions, processes, and
> arguments are presented without endorsing parties, candidates, or causes.
> Contested current questions get multiple sourced perspectives. The adult
> checks that examples stay institutional (roles and rules) rather than
> partisan commentary, and dates every current-data claim.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry timeline, source, and constitutional-background skills | S1: sequence 8–10 founding-to-modern events on a timeline; S2: classify 5 sources by kind and infer one maker/audience; S3: name the Reconstruction Amendments and state what each changed on paper; S4: re-teach weak spots; S5: short skills check — adult records gaps |
| 2 | Verify entry argument and inquiry skills | S1: write one claim about a constitutional question with two pieces of evidence; S2: identify a counterclaim and its evidence; S3: draft a compelling + supporting question pair about a current public issue; S4: argument-writing re-teach; S5: diagnostic review — adult records gaps that U01–U04 re-teach |

### U01 — Foundations of constitutional government and political ideas (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Explain why governments exist and what makes them legitimate | S1: launch — order, security, and rights: the jobs people give governments; S2: close read the Declaration of Independence's argument (public domain) with vocabulary support; S3: investigation — compare three theories of legitimacy (divine right, social contract, force) against historical examples; S4: write one paragraph on where a government's right to rule comes from; S5: review + check |
| 4 | Analyze the Articles of Confederation's failure and the 1787 moment | S1: the Articles — powers granted, powers missing, and the crises that exposed them; S2: close read Anti-Federalist and Federalist excerpts on the same question (public domain; e.g., the size-of-republic debate); S3: investigation — Shays's Rebellion and the Annapolis Convention as evidence for change; S4: deliberation — was the Convention authorized to write a new Constitution?; S5: review + check |
| 5 | Explain the Constitution's core principles | S1: launch — popular sovereignty, limited government, separation of powers, checks and balances, federalism, judicial review's later arrival; S2: practice mapping one power through all three branches' checks; S3: investigation — the Bill of Rights as the price of ratification; S4: argument — which principle matters most for limiting power, and why; S5: review + check |
| 6 | Synthesize: a contested founding, not a finished one | S1: who was included and excluded in 1787 — the Constitution's silences; S2: source lab — two historians' contrasting verdicts on the founding (D2.Civ.8.9-12); S3: investigation — the amendment mechanism as designed change; S4: argument — was the Constitution democratic in 1788?; S5: unit review + U01 assessment |

### U02 — The Constitution, federalism, and institutional powers (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain Article I and the federal division of power | S1: launch — Congress's structure and enumerated powers; the necessary-and-proper and commerce clauses; S2: close read Article I, Section 8 excerpts with vocabulary support; S3: investigation — sort 12 powers into federal, state, and concurrent (D2.Civ.1.9-12); S4: write one paragraph on why the framers divided power this way; S5: review + check |
| 8 | Explain Articles II and III: presidency, courts, and contested powers | S1: the presidency's formal powers and the judiciary's structure; Marbury v. Madison and judicial review (public-domain opinion excerpts); S2: close read the Supremacy Clause and the 10th Amendment side by side; S3: investigation — one power each branch claims the others dispute (D2.Civ.4.9-12 — changed over time, still contested); S4: deliberation — should courts be able to strike down laws?; S5: review + check |
| 9 | Analyze federalism in practice | S1: dual, cooperative, and "new" federalism — grants, mandates, and preemption; S2: close read one federal and one state policy document on the same issue; S3: data/map task — federal grants and state policy variation (figures verified and dated at authoring); S4: argument — does federalism protect liberty or block solutions?; S5: review + check |
| 10 | Explain how the Constitution changes | S1: the Article V amendment process — proposal and ratification paths; S2: close read one amendment's journey (proposal, debate, ratification); S3: investigation — informal change: court interpretation, custom, and political practice (D2.Civ.12.9-12); S4: argument — is the Constitution hard or easy to change, and should it be?; S5: unit review + U02 assessment |

### U03 — Civil liberties, civil rights, and equal protection (Weeks 11–14)

> Sensitive-content note: this unit covers racial discrimination, state
> violence, and rights denied. Every lesson is adult-supervised; sources are
> documentary and textual (no graphic imagery); the adult previews all
> materials and provides a reflection alternative for any overwhelming
> material. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 11 | Distinguish civil liberties from civil rights | S1: launch — liberties (freedoms the government must not take) vs. rights (equal treatment the government must ensure); the Bill of Rights' origins; S2: close read the 1st and 14th Amendment texts (public domain); S3: investigation — incorporation: how the 14th Amendment extended the Bill of Rights to the states; S4: write one paragraph explaining the distinction with an example of each; S5: review + check |
| 12 | Analyze First Amendment freedoms in conflict | S1: speech, religion, press, assembly — the amendment's five freedoms; S2: close read public-domain Supreme Court opinion excerpts on one freedom (adult-selected); S3: evidence lab — how courts balance one person's liberty against another's (D2.Civ.10.9-12); S4: structured deliberation — a school-speech or public-forum scenario argued from both sides; S5: review + check |
| 13 | Trace the equal-protection struggle | S1: the 14th Amendment's promise; Plessy to Brown — litigation as a strategy (D2.Civ.12.9-12); S2: close read a movement document and an opponent's response (linked where still copyrighted, never copied); S3: investigation — one campaign's strategy and outcome (adult-selected; D2.Civ.14.9-12); S4: cause/effect writing on what changed and what did not; S5: review + check |
| 14 | Analyze voting rights as the capstone right | S1: the 15th Amendment, the Voting Rights Act of 1965, and later developments — presented with multiple sourced perspectives; S2: close read two contrasting assessments of one voting-rights change; S3: data task — turnout patterns over time (figures verified and dated at authoring; D2.Civ.2.9-12); S4: argument — what makes an election fair?; S5: unit review + U03 assessment |

### U04 — Elections, representation, participation, and political parties (Weeks 15–18)

> Currency note: election rules, district maps, and officeholders change.
> Unit sections date every current-data claim and frame examples around
> institutional roles and rules, not partisan commentary. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 15 | Explain how American elections work | S1: launch — primaries, generals, and the Electoral College mechanics; S2: practice apportionment and redistricting with a worked example (figures verified at authoring); S3: investigation — the Electoral College debate: two sourced positions, evidence for each; S4: write one paragraph comparing popular-vote and Electoral-College outcomes; S5: review + check |
| 16 | Explain parties, interest groups, and their roles | S1: party functions — nominating, organizing, governing; realignment and third parties; S2: close read a party platform excerpt and an interest-group brief on the same issue; S3: investigation — how interest groups and the media shape an issue's agenda (D2.Civ.1.9-12); S4: deliberation — do parties help or hinder representation?; S5: review + check |
| 17 | Analyze participation: who takes part and why | S1: voting, campaigning, contacting officials, protest, community work — the participation menu; S2: close read turnout data across groups and time (verified, dated); S3: data task — compare two communities' participation profiles; S4: argument — which participation method matters most for a local issue?; S5: review + check |
| 18 | Synthesize: the citizen's toolkit | S1: democratic theories — what citizens are supposed to do, in competing accounts (D2.Civ.2.9-12); S2: source lab — one contested election narrated by two reputable sources (framing check); S3: simulation — run a nonpartisan mock election on a policy question, with roles, rules, and a debrief; S4: reflection — what the simulation revealed about real elections; S5: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Week | Goal | Sessions |
|---|---|---|
| 19 | Consolidate U01–U04; close diagnostic gaps | S1: big-picture map — principles → institutions → rights → participation; S2: re-teach the weakest inquiry skill from unit checks; S3: primary-source stations (classify, excerpt, infer); S4: argument-writing clinic — claims, counterclaims, limitations; S5: midyear check — adult records standing and adjusts U05–U08 pacing |

### U05 — Congress, presidency, courts, and policy making (Weeks 20–23)

| Week | Goal | Sessions |
|---|---|---|
| 20 | Explain how Congress really legislates | S1: launch — House vs. Senate: size, terms, and design differences; committees and leadership; S2: close read a bill's path with its real frictions (filibuster, holds, veto, conference); S3: investigation — one recent law's journey through the process (dated, institutional framing); S4: argument — is the legislative process designed to act or to block? (D2.Civ.11.9-12); S5: review + check |
| 21 | Analyze the modern presidency | S1: formal powers vs. informal powers — persuasion, executive orders, the bully pulpit; S2: close read one executive order's text and its legal basis; S3: investigation — the bureaucracy: agencies, rulemaking, and the Federal Register (official sources); S4: deliberation — has the presidency grown beyond the framers' design? (D2.Civ.4.9-12); S5: review + check |
| 22 | Explain the courts and judicial philosophies | S1: the federal court structure; how cases reach the Supreme Court; S2: close read public-domain opinion excerpts presenting two judicial philosophies (e.g., originalism vs. living constitutionalism) — balanced presentation; S3: moot-court simulation of one landmark case, with roles and a debrief; S4: structured writing — brief the case from both sides; S5: review + check |
| 23 | Analyze how policy gets made: budgets and regulation | S1: the federal budget process — authorization, appropriation, and deficits; S2: close read a budget summary with verified, dated figures; S3: investigation — one regulation's path: statute → agency rule → public comment → court review (D2.Civ.6.9-12); S4: argument — who really makes policy: Congress, the president, or the bureaucracy?; S5: unit review + U05 assessment |

### U06 — State, local, tribal governments and civic institutions (Weeks 24–27)

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain state governments and direct democracy | S1: launch — state constitutions, legislatures, governors, and courts; S2: close read one state constitution's rights section vs. the federal Bill of Rights; S3: data task — compare three states' structures with `us_states.csv` (approx figures; verified at authoring); S4: deliberation — initiative, referendum, recall: more democracy or less? (D2.Civ.11.9-12); S5: review + check |
| 25 | Investigate local government and the learner's community | S1: counties, municipalities, special districts, school boards — who does what; S2: close read one local government's meeting agenda or budget summary (public record, adult-selected); S3: observation task — attend (in person or via public recording) one local public meeting, adult-supervised, with a structured note sheet; S4: write one paragraph on one local decision and who it affects; S5: review + check |
| 26 | Explain tribal sovereignty and tribal governance | S1: launch — treaties as supreme law, the trust relationship, and tribal sovereignty (D2.Civ.1.9-12 explicitly includes tribal institutions); S2: close read a treaty excerpt and a Supreme Court opinion excerpt on tribal sovereignty (public domain, adult-selected); S3: investigation — one tribal nation's contemporary government structure (verified adult-side reference authored in the unit section; see §6); S4: argument — how does tribal sovereignty fit inside American federalism?; S5: review + check |
| 27 | Evaluate civic institutions and civil society | S1: nonprofits, civic associations, faith communities, and the press as civic infrastructure (faith-based material stays separate enrichment, never core instruction); S2: close read two accounts of one community problem — one institutional, one associational; S3: investigation — evaluate one institution's effectiveness at addressing a local problem (D2.Civ.5.9-12); S4: deliberation — government, markets, or civil society: who should act?; S5: unit review + U06 assessment |

### U07 — Media, public opinion, comparative government, and civic evidence (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Evaluate public-opinion evidence | S1: launch — what polls measure: sampling, question wording, margin of error; S2: practice reading one real poll's methodology note (verified, dated); S3: evidence lab — two polls, different results: what explains the gap?; S4: write one paragraph on what a poll can and cannot tell us; S5: review + check |
| 29 | Analyze news media and information quality | S1: the press's democratic functions and its business pressures; S2: close read one event's coverage across three reputable outlets — framing, selection, omission (brief quoted excerpts or links, never full reproduction); S3: investigation — misinformation vs. disinformation: trace one false claim's path and its correction; S4: source-comparison brief with a credibility verdict (D3.1–D3.4.9-12); S5: review + check |
| 30 | Compare political systems across contexts | S1: launch — presidential vs. parliamentary democracy; federal vs. unitary states; S2: close read two countries' constitutional arrangements (analytical, non-endorsing); S3: investigation — one nondemocratic system's tools of control, studied as evidence; S4: argument — which features of a system best protect rights? (D2.Civ.8.9-12); S5: review + check |
| 31 | Use civic data as evidence | S1: budgets, turnout, and court statistics as civic evidence — reading official datasets; S2: practice one dataset task with named columns and units (figures verified at authoring); S3: investigation — test one civic claim against two datasets; S4: argument — what the data shows, what it cannot show, and what is missing; S5: unit review + U07 assessment |

### U08 — Public-policy inquiry and nonpartisan civic capstone (Weeks 32–35)

> Nonpartisanship note: the learner chooses a real policy question for its
> inquiry value; the adult approves the question, ensures sources span
> viewpoints, and keeps the product analytical. Civic action stays within
> lawful, adult-supervised channels (letters, presentations, community
> research) — no contact with officials or organizations without adult
> review. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame a policy question and map the policy process | S1: launch — the policy process: agenda, formulation, adoption, implementation, evaluation; S2: practice intended vs. unintended consequences on one known policy (D2.Civ.13.9-12); S3: investigation — cost–benefit basics: who gains, who pays, what is hard to measure (D2.Eco.7, D2.Eco.8.9-12); S4: draft a compelling question and supporting questions about the learner's chosen policy (D1.1–D1.5.9-12); S5: review + check |
| 33 | Gather and evaluate evidence across viewpoints | S1: plan sources — official data, stakeholder views, expert analyses, affected communities; S2: source-gathering lab with the Resource Finder format; S3: evidence evaluation — credibility, perspective, and limits (D3.1–D3.4.9-12); S4: draft the evidence-based policy analysis; S5: critique with the adult — strengths, limitations, missing perspectives |
| 34 | Deliberate options and draft a recommendation | S1: map the institutions and laws touching the policy (D2.Civ.12.9-12); S2: evaluate citizens' and institutions' effectiveness on it (D2.Civ.5.9-12); S3: deliberative forum — the learner defends and revises the recommendation against counterarguments (D2.Civ.9.9-12); S4: revise with trade-offs stated explicitly; S5: prepare the capstone presentation — argument, evidence, visuals, text alternative |
| 35 | Capstone: present, defend, reflect | S1: presentation to a real audience (family, co-op, community); S2: defense — answer questions about evidence and limitations; S3: assess options for individual and collective action (D4.7.9-12) — lawful, adult-supervised; S4: reflection — what the inquiry changed in the learner's thinking; S5: unit review + U08 assessment |

### Week 36 — Final review and cumulative assessment

| Week | Goal | Sessions |
|---|---|---|
| 36 | Demonstrate full-course civic inquiry and reasoning | S1: full-course synthesis — principles → institutions → rights → participation → policy; S2: source-skills stations (classify, excerpt, infer, detect limits); S3: cumulative assessment part 1 — document-based argument from constitutional and legal texts; S4: cumulative assessment part 2 — institutional-analysis and policy-evaluation tasks; S5: course debrief — adult records final standing and next-year recommendations |

## 6. Materials, safety, internal resource reuse, and source notes

**Materials:** U.S. wall map and atlases (physical or digital), timeline
supplies, a printed or digital Constitution and Declaration text (public
domain), access to `us_presidents.csv` and `us_states.csv` for data tasks
(with the column cautions in §1), and a notebook or digital document for the
inquiry journal. No specialized purchases; household and library materials
suffice. Founding-era texts need a vocabulary glossary per unit — the adult
prepares it or the unit section ships one.

**Safety and sensitive content:** U03 (racial discrimination, state violence,
rights denied) and the U04 week-18 contested-election source lab require
adult-supervised, age-appropriate inquiry: documentary and textual sources
only, no graphic imagery; the adult previews every source, frames discussion
around evidence and institutional reasoning, and provides an
observation/reflection alternative for any activity the learner finds
overwhelming. Civic-action work in U08 stays within lawful, adult-supervised
channels (letters, presentations, community research) — no contact with
officials or organizations without adult review. The U06 week-25 local-meeting
observation is adult-supervised; public recordings are the default
alternative. All investigations have simulation/observation alternatives; no
field hazards.

**Nonpartisanship guardrails:** contested questions (Electoral College,
judicial philosophies, voting-rights changes, current policy) are taught with
multiple sourced perspectives and evidence checks; the adult keeps examples
institutional (roles, rules, processes) rather than partisan commentary. The
track never endorses parties, candidates, or causes. Faith-based material
stays in separately labeled enrichment, never in core civics instruction.

**Text rights:** all learner-facing founding and legal texts are public
domain (Declaration of Independence, Constitution and amendment texts,
Federalist and Anti-Federalist writings, Supreme Court opinions, executive
orders, congressional records, treaties). Modern commentaries, movement
documents still under copyright, and news articles are linked or briefly
quoted, never reproduced. Secondary interpretations are summarized or linked,
never copied. AI-generated illustrations (unit level) are labeled as
reconstructions, never presented as primary sources; NARA/Library of
Congress photographs referenced in Resource Packs are public domain and
identified as such.

**Source and currency notes (to be verified again at unit authoring):** C3
Framework indicator codes verified 2026-10-08 against the published 9–12
band (see §4). Election results, district maps, officeholders, court
composition, poll results, budget figures, and turnout statistics are
time-sensitive: unit sections date every such claim, prefer institutional
rules over named-officeholder examples where possible, and re-check
`us_presidents.csv`'s officeholder data and `us_states.csv`'s approximations
before learner-facing use. No casualty or casualty-range figures are named in
this audit for the same reason. Dataset columns and units are named
explicitly in every data task.

**Tribal-government reference gap:** the repository has no tribal-government
guide. The U06 unit section must author a verified adult-side reference
(sovereignty, treaties as supreme law, the trust relationship, contemporary
tribal governance structures) from authoritative sources — e.g., the Bureau
of Indian Affairs, the National Congress of American Indians, tribal nation
official sites, and the National Archives' treaty holdings — opened and
assessed before recommendation.

**Internal reuse:** the government basics and U.S.-principles guides
(adult-side vocabulary and framing), the economics guide (adult-side policy
background), the black-excellence figures (adult pre-selects for U03), the
presidents/states datasets (with cautions), and the Resource Finder prompt
are the reusable core. Everything else is authored fresh for this track.

## 7. Accessibility supports (built into every unit)

- **Multiple representations:** every chart, map, or data task ships with a
  text-based alternative (data table or ordered list); every timeline has a
  linear text version; generated images (unit-level) always carry alt text,
  caption, and a text-only equivalent.
- **Reading:** 18th-century founding texts are excerpted to the essential
  passage with vocabulary glossaries; legal opinions are excerpted with
  plain-language bridges; full documents are optional extensions; the adult
  may read aloud or use text-to-speech. Passage density grows across the
  year (U01–U02 supported excerpts → U03–U08 longer documentary texts).
- **Processing and output:** graphic organizers for every argument task;
  sentence starters for claims and counterclaims; structured deliberation
  protocols with roles; extended time built into the S5 review sessions;
  oral or scribed responses accepted for any written task with adult
  documentation.
- **Sensitive content:** advance notice to the learner before U03 and the
  U04 week-18 contested-election lab; reflection alternatives for any
  distressing material; pacing control stays with the adult.
- **Video/media:** any recommended video must be captioned; search-link
  format is acceptable when a specific video cannot be verified.

## 8. What the unit sections must deliver (for future runs)

Per `docs/curriculum-expansion/unit-requirements.md` and the issue checklist,
each of U01–U08 ships: unit README (goals, prerequisites, vocabulary,
verified standards notes, 20-session pacing), 4–6 fully written lessons (each
with ≥2 worked/modeled examples, guided + independent practice, applied task,
exit check), differentiated supports and extensions, ≥1 investigation/project
with materials/steps/deliverables/rubric, formative quiz, culminating
assessment, **separate** teacher guide and answer key (every question solved
independently and reconciled), a verified Resource Pack (internal links,
focused queries, curated or labeled search-link videos, reputable references,
task-to-resource mappings, free no-account alternatives), and ≥1 genuinely
generated raster image used in an activity with alt text, caption, and a
generation record in `assets/README.md`. R00 ships the diagnostic, midyear,
and final review instruments with keys, plus the track coherence/accessibility/
source audit. U06 additionally ships the verified tribal-government adult-side
reference. Planned units are named in prose only — no links to files that do
not exist yet.
