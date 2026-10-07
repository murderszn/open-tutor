# Grade 9 Social Studies — Scope and Sequence

Modern world history, circa 1450 to the present. Audit delivered 2026-10-07
against `main` for issue #45 (A00). The subject track folder had **0 existing
files**; this audit plans the full track from scratch and inventories reusable
material elsewhere in the repository.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main`. The issue's 2026-10-01 baseline said the
target folder held 0 Markdown files; that still holds — `curriculum/grade-9/`
does not exist on `main` yet (grade-9 math, science, and language-arts audits
exist only as validated drafts on unmerged branches: PRs #106, #107, #111).
Decisions are **Keep** (reuse as-is or as a formative bank), **Revise** (needs
substantive improvement before unit use), **Enrichment** (optional), or
**Gap** (missing; to be authored).

| Item | Location | Decision |
|---|---|---|
| Track index page | `curriculum/grade-9/social-studies/README.md` | **Gap** — created by this audit: track description, measurable objectives, keep/revise/gap map, unit plan |
| Track scope-and-sequence | `curriculum/grade-9/social-studies/scope-and-sequence.md` | **Gap** — this document |
| Grade-9 hub page | `curriculum/grade-9/README.md` | **Gap** — created by this audit; lists all four subjects truthfully, including the unmerged draft-PRs |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — Grade 9 line added; "Grades 9–12 have no folders" wording corrected for grade 9 |
| Curriculum manifest | `curriculum/manifest.json` (main) | **Revise** — three new entries under the existing schema; counts updated |
| History of War assignment | `assignments/social-studies/history-of-war/README.md` (+ interactive timeline) | **Enrichment** — labeled grade 8; its "turning points → institutions → modern echoes" frame is sound and its YouTube-search-link format matches the Resource Pack convention. Keep as an optional enrichment reference for U05; the track's own wars content is authored from primary sources, not this page |
| World facts guide | `resources/world_facts.md` | **Keep as adult-side reference** — continent/country snapshots for U01 geography and map tasks. Note: its population figures are "2025 estimates, rounded" — verify dates before any learner-facing use |
| UN countries dataset | `resources/un_countries.csv` (+ `.json`) | **Keep as candidate for U01/U07 data tasks** — columns: `name_common`, `name_official`, `cca2`, `cca3`, `ccn3`, `region`, `subregion`, `capital`, `population`, `area_km2`, `lat`, `lng`, `un_status`, `independent`, `google_maps_url`. **Caution:** the `population` column is empty in the current snapshot (spot-checked 2026-10-07); do not build tasks on it. Region/subregion/capital/area columns are usable; every figure is checked at authoring time |
| Global conflicts guide | `resources/wars_fundamentals.md` | **Keep as adult-side reference** — accurate concept vocabulary (sovereignty, alliance, proxy war, balance of power) for U05/U06 teacher guides; it is a study companion, not a lesson text |
| Economics guide | `resources/supply_and_demand_economics.md` | **Keep as adult-side reference** — micro supply/demand framing behind U04's industrial-capitalism lessons; development/macro topics for U07 need new references |
| Government basics | `resources/government_basics.md` | **Reference only** — U.S.-focused; useful only for comparative-government moments in U06/U08. International institutions (UN, NATO, EU origins) need fresh adult-side references |
| Black excellence figures | `resources/black_excellence_figures.md` | **Adult-side reference** — adult pre-selects figures for U02 resistance and U06 decolonization work; entries are not assigned as learner reading; check grade fit at authoring |
| U.S. principles guide | `resources/united_states_understanding_and_principles.md` | **Reference only** — U.S.-focused; this is a world-history course, and the grade-8 U.S. track owns that material |
| U.S. presidents / states datasets | `resources/us_presidents.csv`, `resources/us_states.csv` | **Reference only** — U.S.-scoped; tangential to this course |
| Semester resource library | `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link is opened and assessed before recommendation |
| Resource Finder prompt | `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives each unit's Resource Pack |
| Grade-8 social studies track (draft PR #110) | `curriculum/grade-8/social-studies/` (branch) | **Prerequisite reference only** — its U.S.-through-1877 arc defines entry expectations (see §2); U01–U03 of this course revisit some eras with a world/global framing, not duplicated lessons |
| Lessons, teacher guides, separate answer keys, quizzes, assessments, diagnostics, resource packs, generated images | none exist | **Gap** — all to be authored in U01–U08 and R00 |

No existing file was found to be factually inaccurate in the sampled re-read
(the wars guide's vocabulary definitions and the history-of-war assignment's
institution list check out). The dominant condition is **absence**: no lessons,
no teacher support, no assessments, no resource packs, and no grade-9 folder
at all. The one dataset caution that matters: `un_countries.csv` ships with an
empty `population` column, so any population-based task must source its numbers
freshly.

## 2. Prerequisites

Entry assumes the grade-8 social studies draft arc (U.S. history through 1877,
inquiry arc, source classification, evidence-based argument writing) or
equivalent: the learner can place centuries on a timeline, read a scaled map,
classify sources by kind, and write a claim supported by one or two pieces of
evidence. Weeks 1–2 diagnose and re-teach those skills before U01. No
cross-grade learner references: prerequisite skills are described, never
linked to another grade's lessons. A guiding adult checks placement, previews
every primary source, and confirms reading stamina for full-length documents
(UDHR articles, treaty excerpts, speeches).

## 3. Track objectives

By the end of the year the learner will be able to:

1. **Analyze world regions circa 1450:** compare the political organization,
   economies, and cultural systems of at least four major world regions using
   maps and data, and explain what connected them before sustained global
   contact. (C3 D2.His.1, D2.His.2.9-12; D2.Geo concepts)
2. **Explain exchange, empire, and colonization, 1450–1750:** trace how
   maritime trade networks, the Columbian exchange, and European colonial
   empires reshaped societies on multiple continents; analyze forms of
   resistance to conquest and enslavement. (D2.His.1, D2.His.4, D2.His.14.9-12)
3. **Explain Enlightenment ideas and revolutionary outcomes:** trace how ideas
   about rights and sovereignty traveled and produced different outcomes in
   the American, French, Haitian, and Latin American revolutions; evaluate
   whose rights each revolution secured. (D2.His.2, D2.His.4, D2.His.5.9-12;
   D2.Civ.14.9-12)
4. **Analyze industrialization and imperialism:** explain how industrial
   capitalism changed production, labor, and daily life; connect it to the
   late-19th-century "new imperialism," the partition of Africa, and
   anti-colonial responses. (D2.His.14.9-12; D2.Eco concepts: markets,
   labor, trade)
5. **Evaluate the world wars and interwar ideologies:** analyze the
   multiple causes and effects of WWI and WWII; compare liberalism,
   fascism, and communism as responses to modern crises; assess historical
   evidence about the Holocaust and at least one other genocide with
   attention to source limitations. (D2.His.6, D2.His.8, D2.His.10,
   D2.His.12, D2.His.14, D2.His.16.9-12)
6. **Explain decolonization and the Cold War:** evaluate how and why new
   nations formed after 1945, why independence movements succeeded or
   struggled, and how U.S.–Soviet rivalry shaped politics, wars, and daily
   life worldwide. (D2.His.1, D2.His.3, D2.His.5.9-12; D2.Civ.2.9-12)
7. **Analyze globalization:** explain how migration, trade, development
   policies, and environmental pressures connect contemporary societies;
   evaluate the intended and unintended outcomes of at least two global
   policies or institutions. (D2.Civ.13.9-12; D4.6, D4.7.9-12)
8. **Work with sources:** classify source kinds; infer maker, date, place of
   origin, and intended audience; detect limitations and gaps in the
   historical record; judge a source's relevance and utility for a specific
   inquiry. (D2.His.8, D2.His.10, D2.His.12.9-12; D3.1–D3.4.9-12)
9. **Argue from evidence:** integrate evidence from multiple relevant
   sources into a reasoned argument about the past; critique arguments for
   credibility, structure, and missing perspectives. (D2.His.16.9-12;
   D4.1–D4.4.9-12)
10. **Inquire and take informed action:** frame compelling and supporting
    questions, plan source gathering across viewpoints, present conclusions
    to a real audience, and use disciplinary lenses to analyze a
    contemporary public issue and propose constructive action. (D1.1–D1.5.9-12;
    D4.6, D4.7.9-12)

## 4. Standards crosswalk

Source: the College, Career, and Civic Life (C3) Framework for Social Studies
State Standards (National Council for the Social Studies). The framework's
dimension overview was opened at socialstudies.org/standards/c3 on 2026-10-07;
indicator codes below were verified against the published 9–12 band the same
day. **Codes are exact; descriptions are brief paraphrases** — check the
authoritative framework for exact wording. **No state adoption,
accreditation, or alignment certification is claimed.** This is a proposed
pathway; high-school social-studies course order varies by system.

### Dimension 1 — Developing Questions and Planning Inquiries

- **D1.1–D1.5.9-12** — the inquiry arc used in every unit: compelling and
  supporting questions, explanation of expert agreement/disagreement,
  and planning source gathering across viewpoints and uses.

### Dimension 2 — Civics

- **D2.Civ.2.9-12** — role of citizens in political systems: democratic
  theories, changing participation, and alternative models from other
  countries and eras (U03 revolutions, U06 new nations, U08 civic inquiry).
- **D2.Civ.5.9-12** — effectiveness of citizens and institutions in
  addressing social and political problems at every level from local to
  international (U06, U07, U08).
- **D2.Civ.12.9-12** — how people use and challenge laws at local, state,
  national, and international levels to address public issues (U03 rights
  declarations, U06 constitutions, U08 contemporary issues).
- **D2.Civ.14.9-12** — historical, contemporary, and emerging means of
  changing societies, promoting the common good, and protecting rights
  (U03, U06 decolonization movements, U08 action projects).

### Dimension 2 — Economics

Economics enters through disciplinary concepts rather than code-claims the
audit could not verify at this stage: markets and exchange (U01–U02),
industrial labor and capital (U04), trade policy and development (U07).
Unit sections will cite verified D2.Eco.9-12 codes during authoring.

### Dimension 2 — Geography

Geography likewise enters through concepts verified at unit level: region,
place, movement, human–environment interaction, and geospatial
representation (U01 mapping work, U02 trade routes, U04–U07 boundary and
migration mapping). Unit sections will cite verified D2.Geo.9-12 codes.

### Dimension 2 — History

- **D2.His.1.9-12** — how events and developments were shaped by unique
  circumstances of time and place and by broader historical contexts
  (U01–U08; the course's core causation habit).
- **D2.His.2.9-12** — change and continuity within and across historical
  eras (U01–U03 era framing; U06–U07 postwar continuities).
- **D2.His.3.9-12** — how the historical significance of individuals and
  groups changes over time and is shaped by context (U03 revolutionary
  figures, U06 independence leaders).
- **D2.His.4.9-12** — complex, interacting factors shaping people's
  perspectives in different eras (U02 colonizer/colonized, U05 wartime
  societies).
- **D2.His.5.9-12** — how historical contexts shaped and continue to shape
  perspectives (U06–U08 memory and legacy work).
- **D2.His.6.9-12** — how the perspectives of history's writers shaped the
  histories they produced (U05 historiography: intentional source-comparison
  of secondary accounts).
- **D2.His.8.9-12** — limits of current interpretations when the surviving
  sources underrepresent the people being studied (U02 indigenous and
  enslaved voices; U05 genocide evidence).
- **D2.His.10.9-12** — detecting limitations in kinds of historical evidence
  and in differing secondary interpretations (U05, U08 source labs).
- **D2.His.12.9-12** — using questions about multiple sources to pursue
  further inquiry and find additional sources (every unit's S3
  investigation).
- **D2.His.14.9-12** — multiple and complex causes and effects of past
  events (U04 industrial/imperial causes; U05 war causes; U07
  globalization).
- **D2.His.16.9-12** — integrating evidence from multiple sources and
  interpretations into a reasoned argument about the past (every unit's S4
  writing/deliberation; the U08 capstone).

### Dimension 3 — Evaluating Sources and Using Evidence

- **D3.1–D3.4.9-12** — gathering and evaluating sources; developing claims
  and using evidence, with attention to limitations (S2–S4 of every unit;
  the U05 evidence lab and U08 comparative-source inquiry).

### Dimension 4 — Communicating Conclusions and Taking Informed Action

- **D4.1–D4.4.9-12** — communicating and critiquing conclusions: argument
  construction, critique, and presentation (S4–S5 of every unit).
- **D4.6.9-12** — using disciplinary lenses on local, regional, and global
  problems across contexts (U07 development/environment; U08 contemporary
  issue inquiry).
- **D4.7.9-12** — assessing options for individual and collective action on
  such problems (U08 action proposal).

## 5. Eight-unit sequence with weekly pacing

Model: five ~50-minute sessions per week. Each unit = 4 weeks = 20 sessions:
**S1** concept launch (explicit explanation + modeled reasoning), **S2** close
reading and skills practice (guided then independent), **S3** source
investigation or application (maps, timelines, data, simulations), **S4**
evidence-based writing or structured deliberation, **S5** review and unit
check. Eight units give 32 weeks; four flexible weeks cover diagnostic (2),
midyear review (1), and final review (1), totaling 36 weeks / 180 sessions.
Weekly goals below are adult-checkable; session notes show the shape of each
week. Unit sections will expand these into full lessons.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry timeline, map, and source skills | S1: sequence 8–10 events from 1400–2000 on a timeline; S2: read a scaled world map (key, scale, projection note); S3: classify 5 sources by kind and infer one maker/audience; S4: re-teach weak spots; S5: short skills check — adult records gaps |
| 2 | Verify entry argument and inquiry skills | S1: write one claim about a past event with two pieces of evidence; S2: identify a counterclaim and its evidence; S3: draft a compelling + supporting question pair; S4: argument-writing re-teach; S5: diagnostic review — adult records gaps that U01–U04 re-teach |

### U01 — World-history inquiry: geography and global connections circa 1450 (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Map the world circa 1450; compare major regions | S1: launch — world regions, trade routes (Silk Roads, Indian Ocean, trans-Saharan); S2: practice reading region data from `un_countries.csv` (region/subregion/area columns only — population column is empty); S3: investigation — build a labeled circa-1450 connections map; S4: write one paragraph comparing two regions' political organization; S5: review + check |
| 4 | Explain what connected Afro-Eurasia before sustained global contact | S1: Indian Ocean and trans-Saharan exchange — goods, ideas, faiths; S2: close read an excerpt from a traveler's account (public domain, e.g., Ibn Battuta); S3: data task — compare region areas and trade-good origins; S4: cause/effect paragraph on one exchange item; S5: review + check |
| 5 | Analyze the Americas and Oceania circa 1450 on their own terms | S1: Mexica, Inca, Mississippian, and Pacific societies — political and economic organization; S2: close read two contrasting secondary descriptions (perspective check, D2.His.6.9-12); S3: investigation — what the "isolated" label hides and reveals; S4: deliberation — was 1450 a world of separate histories?; S5: review + check |
| 6 | Synthesize: connection, comparison, and the inquiry toolkit | S1: change/continuity 1200–1450 (D2.His.2.9-12); S2: practice framing compelling vs. supporting questions about global connections; S3: source lab — classify 6 new sources, detect one gap in the record; S4: argument — which connection mattered most circa 1450?; S5: unit review + U01 assessment |

### U02 — Empires, exchange, colonization, and resistance (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain the maritime turn and the Columbian exchange | S1: launch — Portuguese/Spanish maritime expansion, motives and means; S2: practice tracing one exchange item's two-direction effects (disease, crops, silver); S3: map investigation — routes, winds, and the "triangle" debate; S4: cause/effect writing on demographic change; S5: review + check |
| 8 | Analyze conquest and colonial systems in the Americas | S1: Mexica and Inca conquests — multiple causes (D2.His.14.9-12); S2: close read contrasting accounts of conquest (Spanish and indigenous perspectives); S3: investigation — labor systems (encomienda, plantation, mining) with evidence cards; S4: perspective writing — the same events, different makers; S5: review + check |
| 9 | Explain the transatlantic slave trade as a system; analyze resistance | S1: the trade's scale, organization, and economics (figures verified at authoring — see §6); S2: close read an excerpt from an enslaved person's account (adult-selected, public domain); S3: investigation — resistance forms (day-to-day, escape, revolt) with evidence; S4: deliberation — economic vs. racial explanations of the system's persistence; S5: review + check |
| 10 | Synthesize: empire, exchange, and the limits of the record | S1: Ottoman, Safavid, Mughal, Ming/Qing, and European empires compared; S2: practice detecting whose voices the record underrepresents (D2.His.8.9-12); S3: source comparison — a merchant ledger vs. a missionary letter vs. an oral-history transcription; S4: argument — did exchange or empire change the world more, 1450–1750?; S5: unit review + U02 assessment |

### U03 — Enlightenment, revolutions, rights, and consequences (Weeks 11–14)

| Week | Goal | Sessions |
|---|---|---|
| 11 | Explain Enlightenment ideas about rights and sovereignty | S1: launch — natural rights, social contract, and their contexts; S2: close read short public-domain excerpts (Locke, Montesquieu, Wollstonecraft); S3: investigation — where these ideas circulated and who could access them; S4: write one paragraph connecting an idea to a later revolution; S5: review + check |
| 12 | Analyze the American and French revolutions as rights experiments | S1: causes of each — long-term vs. triggering (D2.His.14.9-12); S2: close read the Declaration of Independence and the Declaration of the Rights of Man (public domain); S3: timeline comparison — 1776–1789, change vs. continuity; S4: argument — which revolution delivered more of what it promised?; S5: review + check |
| 13 | Analyze the Haitian Revolution and Latin American independence | S1: Haiti — the only successful enslaved-people's revolution; its causes and world-historical significance (D2.His.3.9-12); S2: close read contrasting accounts of Toussaint Louverture; S3: investigation — Bolívar's Jamaica Letter and independence outcomes across Spanish America; S4: perspective writing — why Haiti's revolution was treated differently in its own century; S5: review + check |
| 14 | Synthesize: whose rights, and how rights spread | S1: who each revolution included and excluded (women, enslaved people, indigenous nations); S2: practice tracing one rights idea across three revolutions; S3: source lab — how later writers' perspectives shaped each revolution's story (D2.His.6.9-12); S4: deliberation — are rights "universal" if their first declarations excluded most people?; S5: unit review + U03 assessment |

### U04 — Industrialization, capitalism, imperialism, and social change (Weeks 15–18)

| Week | Goal | Sessions |
|---|---|---|
| 15 | Explain the Industrial Revolution's causes and mechanics | S1: launch — why Britain first; coal, steam, textiles, factories; S2: practice reading industrial data (production figures verified at authoring); S3: investigation — map industrial spread 1800–1900; S4: cause/effect writing on one industry's growth; S5: review + check |
| 16 | Analyze industrial capitalism's effects on labor and daily life | S1: factory labor, urbanization, and working conditions — multiple perspectives; S2: close read contrasting accounts (a factory inspector's report vs. an owner's defense; public domain); S3: data task — wages, hours, and urban growth with verified figures; S4: argument — did industrialization improve ordinary lives?; S5: review + check |
| 17 | Connect industrial capitalism to the "new imperialism" | S1: motives for late-19th-century empire — markets, raw materials, strategy, ideology; S2: close read the Berlin Conference's General Act excerpts (public domain) and a map of the 1884–1914 partition of Africa; S3: investigation — one colony's experience under two empires compared; S4: cause/effect writing linking industrial demand to imperial policy; S5: review + check |
| 18 | Synthesize: resistance, reform, and competing economic visions | S1: anti-colonial resistance and reform movements (labor, women's, nationalist); S2: practice comparing liberal, socialist, and nationalist critiques of industrial empire; S3: source comparison — an imperial administrator's report vs. a colonized intellectual's response; S4: deliberation — was imperialism primarily economic or political?; S5: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Week | Goal | Sessions |
|---|---|---|
| 19 | Consolidate U01–U04; close diagnostic gaps | S1: big-picture timeline 1450–1914 — place, connect, explain; S2: re-teach the weakest inquiry skill from unit checks; S3: map/data review stations; S4: argument-writing clinic — claims, counterclaims, limitations; S5: midyear check — adult records standing and adjusts U05–U08 pacing |

### U05 — World wars, ideologies, genocide, and historical evidence (Weeks 20–23)

> Sensitive-content note: this unit centers war and genocide. Every lesson is
> adult-supervised; sources are documentary and textual (no graphic imagery);
> the adult previews all materials and frames discussion around evidence,
> responsibility, and remembrance. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 20 | Analyze WWI's causes, course, and settlement | S1: launch — alliances, nationalism, imperialism, militarism as interacting causes; S2: close read treaty and soldier-letter excerpts (public domain); S3: investigation — the Treaty of Versailles: terms, aims, and the "war guilt" debate; S4: argument — long-term causes vs. triggering events, June–July 1914; S5: review + check |
| 21 | Explain the interwar crisis and competing ideologies | S1: economic collapse, weak democracies, and the appeal of radical answers; S2: close read short public-domain excerpts defining liberalism, fascism, and communism as historical actors understood them; S3: data task — Depression-era figures (verified at authoring); S4: deliberation — why did different societies choose different answers?; S5: review + check |
| 22 | Analyze WWII and assess evidence of the Holocaust and other genocides | S1: the war's global scope — Europe, Pacific, and the home fronts; S2: evidence lab — what counts as evidence of genocide (documents, testimony, physical record), and what each kind can and cannot show (D2.His.10.9-12); S3: investigation — compare how two secondary accounts use the same evidence (D2.His.6.9-12); S4: structured writing — a claim about responsibility supported by cited evidence; S5: review + check |
| 23 | Synthesize: outcomes, institutions, and historical memory | S1: outcomes — the UN, Bretton Woods institutions, and the Cold War's origins (the `history-of-war` assignment is an optional enrichment reference here); S2: practice detecting limits in postwar interpretations (D2.His.8.9-12); S3: source comparison — two nations' textbooks on the same war; S4: argument — did WWII resolve or relocate the crises of the interwar years?; S5: unit review + U05 assessment |

### U06 — Decolonization, Cold War, and new nations (Weeks 24–27)

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain decolonization's causes and patterns | S1: launch — why empires fell after 1945; S2: close read independence speeches (public domain excerpts); S3: investigation — 1960, the "Year of Africa": map which nations became independent and how; S4: cause/effect writing on one independence movement; S5: review + check |
| 25 | Evaluate why new nations succeeded or struggled | S1: borders, Cold War interference, and economic inheritance as interacting factors; S2: close read two contrasting assessments of one new nation (D2.His.10.9-12); S3: data task — development indicators with verified, dated sources; S4: deliberation — internal vs. external explanations of post-independence struggles; S5: review + check |
| 26 | Analyze the Cold War as a global system | S1: U.S.–Soviet rivalry — ideology, alliances, proxy wars, nuclear danger; S2: close read contrasting Cold War speeches (public domain); S3: map investigation — alliances, proxy conflicts, and the non-aligned movement; S4: argument — was the Cold War primarily ideological or geopolitical?; S5: review + check |
| 27 | Synthesize: the Cold War's end and its legacies | S1: 1989–1991 — why the Cold War ended when and how it did; S2: practice tracing one Cold War legacy into the present (borders, alliances, memory); S3: source comparison — how two societies remember the Cold War; S4: deliberation — winners, losers, and the "end of history" claim; S5: unit review + U06 assessment |

### U07 — Globalization, migration, development, and environmental pressures (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Explain economic globalization and its institutions | S1: launch — trade liberalization, supply chains, and the institutions that govern them; S2: close read short excerpts on one trade agreement's aims (public domain/official); S3: data task — trade and growth figures (verified, dated); S4: cause/effect writing on one industry's global supply chain; S5: review + check |
| 29 | Analyze migration as a world-historical force | S1: push/pull factors, past and present; S2: close read migrant testimony excerpts (adult-selected, public sources); S3: map investigation — major contemporary migration corridors; S4: deliberation — who benefits from migration, and who bears its costs?; S5: review + check |
| 30 | Evaluate development policies and their outcomes | S1: development models — aid, microfinance, industrial policy compared; S2: practice evaluating one policy's intended vs. unintended outcomes (D2.Civ.13.9-12); S3: investigation — one country's development story with verified data; S4: argument — what explains development success?; S5: review + check |
| 31 | Analyze environmental pressures as shared global problems | S1: climate, water, and biodiversity pressures — the evidence base; S2: close read contrasting national perspectives on one environmental agreement; S3: investigation — using disciplinary lenses on one local-to-global environmental problem (D4.6.9-12); S4: assess options for individual and collective action (D4.7.9-12); S5: unit review + U07 assessment |

### U08 — Contemporary world inquiry: comparative sources and civic reasoning (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Compare how the contemporary world is narrated | S1: launch — the same current event in three reputable outlets across regions; S2: practice detecting framing, selection, and omission (D2.His.10.9-12); S3: investigation — one event's coverage across two languages/regions; S4: write a source-comparison brief; S5: review + check |
| 33 | Inquire into one contemporary global issue | S1: choose an issue; frame a compelling question and supporting questions (D1.1–D1.5.9-12); S2: plan sources across viewpoints, types, and uses; S3: source gathering and evaluation lab; S4: draft the evidence-based argument; S5: peer critique — strengths, limitations, missing perspectives |
| 34 | Reason civically about the issue | S1: map the institutions and laws touching the issue (D2.Civ.12.9-12); S2: evaluate citizens' and institutions' effectiveness (D2.Civ.5.9-12); S3: investigation — how people in two societies are addressing it (D2.Civ.14.9-12); S4: draft an action proposal with reasoning about trade-offs; S5: revise with adult feedback |
| 35 | Capstone: present and defend | S1: presentation preparation — argument, evidence, visuals, text alternative; S2: presentations to a real audience (family, co-op, community); S3: defense — answer questions about evidence and limitations; S4: reflection — what the inquiry changed in the learner's thinking; S5: unit review + U08 assessment |

### Week 36 — Final review and cumulative assessment

| Week | Goal | Sessions |
|---|---|---|
| 36 | Demonstrate full-course inquiry and argument | S1: full-course timeline synthesis 1450–present; S2: source-skills stations (classify, infer, detect limits); S3: cumulative assessment part 1 — document-based argument; S4: cumulative assessment part 2 — map/data analysis and civic-reasoning task; S5: course debrief — adult records final standing and next-year recommendations |

## 6. Materials, safety, internal resource reuse, and source notes

**Materials:** world wall map and atlases (physical or digital), timeline
supplies, access to `un_countries.csv` for U01/U07 data tasks, printed or
digital public-domain primary sources, and a notebook or digital document for
the inquiry journal. No specialized purchases; household and library
materials suffice.

**Safety and sensitive content:** U05 (world wars, genocide) and parts of
U02/U04/U06 (slavery, conquest, colonial violence, war) require
adult-supervised, age-appropriate inquiry: documentary and textual sources
only, no graphic imagery; the adult previews every source, frames discussion
around evidence and responsibility, and provides an observation/reflection
alternative for any activity the learner finds overwhelming. U07's
environmental work uses observation and public data, not field hazards.
Civic-action work in U08 stays within lawful, adult-supervised channels
(letters, presentations, community research) — no contact with officials or
organizations without adult review.

**Text rights:** all learner-facing historical texts are original passages or
public-domain/licensed sources (founding-era documents, treaty texts,
speeches, testimony excerpts in the public domain). No copyrighted books,
poems, or worksheets are reproduced. Secondary interpretations are
summarized or linked, never copied.

**Source notes (to be verified again at unit authoring):** C3 Framework
dimensions verified 2026-10-07 at socialstudies.org/standards/c3; indicator
codes verified the same day against the published 9–12 band. Historical
figures used in unit authoring (e.g., transatlantic slave trade scale, WWI/WWII
casualty ranges, decolonization dates, development indicators) must be checked
against authoritative sources (Slave Voyages database, UN data, national
archives) before learner-facing use — this audit names no casualty figures
for that reason. Dataset columns and units are named explicitly in every
data task; `un_countries.csv`'s empty `population` column is flagged in §1.

**Internal reuse:** the `history-of-war` assignment (enrichment, U05), the
wars/world-facts/economics guides (adult-side references), and the
`un_countries` dataset (U01/U07, with the population-column caution) are the
reusable core. Everything else is authored fresh for this track.

## 7. Accessibility supports (built into every unit)

- **Multiple representations:** every map task ships with a text-based
  alternative (data table or ordered list); every timeline has a linear text
  version; generated images (unit-level) always carry alt text, caption, and
  a text-only equivalent.
- **Reading:** public-domain sources are excerpted to the essential passage
  with vocabulary support; full documents are optional extensions; the adult
  may read aloud or use text-to-speech.
- **Processing and output:** graphic organizers for every argument task;
  sentence starters for claims and counterclaims; extended time built into
  the S5 review sessions; oral or scribed responses accepted for any written
  task with adult documentation.
- **Sensitive content:** advance notice to the learner before U02 week 9,
  U04 week 17, U05, and U06 week 25; reflection alternatives for any
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
source audit. Planned units are named in prose only — no links to files that
do not exist yet.
