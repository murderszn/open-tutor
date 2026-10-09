# Grade 7 Social Studies — Scope and Sequence

Audit section A00 of [issue #37](https://github.com/murderszn/open-tutor/issues/37).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-05 against `origin/main`. The folder held **24 Markdown
files** (1 subject README, 5 assignments, 17 quizzes, 1 template). The issue's
2026-10-01 "24 Markdown files" baseline matches this re-audit. Decisions:
**Keep** = reuse as-is in the named unit with review; **Revise** = usable
skeleton needing substantive improvement (taught content, corrected section
references, answer keys, rubrics) before assignment; **Enrichment** = optional
extension only, never a core-lesson substitute.

### Assignments

| Item | Location | Decision |
|---|---|---|
| Design Your Own City (city-planning design lab) | `assignments/city-planning-design-lab.md` | **Revise** → U01. Solid creative-design scaffold (naming, zoning, location reasoning) but no instruction on reading/constructing maps, scale, or why cities locate where they do. Rebuilt as U01 spatial-reasoning practice with a map-construction frame and a rubric (D2.Geo.1–3.6-8). |
| Credit Costs and Responsible Borrowing | `assignments/credit-cost-comparison.md` | **Enrichment** — blank reusable personal-finance assignment (APR comparison, minimum-payment math). Sound as an optional modern-economics extension; off the medieval world-history track and not a core unit task. |
| Creed: Five States Research Report | `assignments/creed-five-states-report.md` | **Enrichment** — dataset-driven U.S. states report built on `resources/us_states.csv` (columns verified: capital, population_approx, area_sq_mi, statehood_year, biggest_city). Good data-literacy practice, but U.S.-focused and off-track; optional enrichment, not a core unit task. |
| History of War — Turning Points & Institutions | `assignments/history-of-war.md` | **Revise** → U08. Points to the shared grade-8 `assignments/social-studies/history-of-war/` reference (verified present) and `resources/wars_fundamentals.md`, but its interactive-timeline link is a placeholder ("an educator-provided equivalent reference") and the shared reference is early-modern/modern in scope. Rebuilt for medieval/early-modern turning points and institutions with a working timeline routine and rubric. |
| Landmark Court Case Research | `assignments/landmark-court-case.md` | **Enrichment** — blank reusable U.S. civics assignment (Brown, Tinker). Sound scaffold; off-track for medieval world history. Optional enrichment for learners comparing legal institutions (U05). |
| Civil Rights Source Analysis (template) | `templates/civil-rights-movement.md` | **Enrichment** — the *technique* is reusable: context, quotations with source locations, perspective/purpose/audience comparison, effect, citation. U02/U05 rebuild this frame for medieval primary sources; the civil-rights content itself stays optional enrichment. |

### Quizzes

All seventeen quizzes are blank (no answer key anywhere in the track). **Section-reference mismatches:** most quizzes name guide sections that do not exist under those exact headings in the cited resource guides (guides use emoji-prefixed headings; e.g., the capitals quiz cites a "Major Global Capitals" section — the guide's heading is "🏙️ Capitals & Economic Hubs"). Links resolve to the guide file, but the named section does not match. Unit builds must re-anchor every quiz item to the actual guide section or a unit passage and add answer keys to teacher guides.

| Item | Location | Decision |
|---|---|---|
| From Colonies to the Constitution | `quizzes/from-colonies-to-the-constitution-quiz.md` | **Enrichment** — ten questions on the cited guide's sections 1, 2, 4 (verified numbered sections exist). U.S.-founding content; off-track. Optional enrichment only. |
| Rights, Responsibilities & U.S. States | `quizzes/rights-responsibilities-u-s-states-quiz.md` | **Enrichment** — U.S. civics (Bill of Rights, amendments, federalism, states/territories). Off-track; optional enrichment. |
| The Three Branches of Government | `quizzes/the-three-branches-of-government-quiz.md` | **Enrichment** — U.S. civics. Off-track; optional enrichment. |
| Government Agencies & Departments | `quizzes/government-agencies-departments-quiz.md` | **Enrichment** — U.S. executive departments/agencies. Off-track; optional enrichment. |
| Major Global Capitals | `quizzes/major-global-capitals-quiz.md` | **Revise** → U01 review seed. Items match the guide's "🏙️ Capitals & Economic Hubs" list; the cited section name must be corrected. Add an answer key; add one "why here?" location-reasoning item (D2.Geo.6.6-8). |
| Major Oceans & Seas | `quizzes/major-oceans-seas-quiz.md` | **Revise** → U01 review seed. Cites a "Major Bodies of Water" section; the guide's headings are "🗺️ Continents & Land" / "The 5 Oceans" / "Major Seas". Correct the reference; add an answer key. |
| Global Chokepoints (Strategic Fairways) | `quizzes/global-chokepoints-strategic-fairways-quiz.md` | **Revise** → U01/U03 review seed. Cites "Critical Global Chokepoints"; the guide's heading is "Strategic Fairways (Chokepoints)". Correct the reference; add an answer key; the "fraction of the world's oil" item needs a dated source or removal (volatile statistic). |
| Global Agriculture | `quizzes/global-agriculture-quiz.md` | **Revise** → U03 review seed. Cites a "Wheat, Soybeans, and Rice" section; the guide has separate subsections under "🧺 Food Commodities — Leaders (2025 snapshot)". Correct the reference; add an answer key and a check date — top-producer lists are volatile. |
| Major Global Stock Exchanges | `quizzes/major-global-stock-exchanges-quiz.md` | **Enrichment** — cites a "Major Global Stock Exchanges" section; the guide's heading is "📊 Markets & Exchanges (2025 snapshot)" with an explicit volatility note. Modern-finance trivia; off-track. Optional enrichment with a check date, or drop. |
| Global Energy & Precious Metals | `quizzes/global-energy-precious-metals-quiz.md` | **Revise — do not assign as-is.** Cites "Crude Oil" and "Gold" sections in `world_facts.md`; **neither section exists** in the guide (verified 2026-10-05). The quiz is unanswerable from its cited source. Unit builds either add the missing guide content with dated sources or retire the quiz. |
| Digital Storage Sizes | `quizzes/digital-storage-sizes-quiz.md` | **Enrichment** — technology content, not social studies. Misplaced in this track; recommend relocation to a math/science track or optional enrichment. |
| Standard to Metric Conversions | `quizzes/standard-to-metric-conversions-quiz.md` | **Enrichment** — measurement math; misplaced in social studies. Recommend relocation; optional enrichment. |
| Temperature & Foreign Exchange (Forex) | `quizzes/temperature-foreign-exchange-forex-quiz.md` | **Enrichment** — temperature conversion is science; the forex items cite volatile exchange-rate examples. Misplaced; optional enrichment with a check date, or drop the forex half. |
| The Metric System | `quizzes/the-metric-system-quiz.md` | **Enrichment** — measurement math; misplaced. Recommend relocation; optional enrichment. |
| Volume & Liquid Measurements | `quizzes/volume-liquid-measurements-quiz.md` | **Enrichment** — measurement math; misplaced. Recommend relocation; optional enrichment. |
| Weight & Distance (set 02) | `quizzes/weight-distance-quiz-set-02.md` | **Enrichment** — measurement math; misplaced. Recommend relocation; optional enrichment. |
| Weight & Distance | `quizzes/weight-distance-quiz.md` | **Revise — do not assign as-is.** Title is broken ("🌍 Social Studies -  Quiz") and **answers are embedded inline** ("16(oz)", "2000") — it reads as a leaked answer key, not a blank quiz. Fix the title, strip the answers into a teacher key, and merge with set-02. Still enrichment (measurement math). |

### Subject README

| Item | Location | Decision |
|---|---|---|
| Grade 7 Social Studies index | `README.md` | **Revise** → replaced this run by the new track README (coverage summary, measurable objectives, standards reference, audit status, adult guidance). |

**Answer-key gap:** no quiz in the track has an answer key. Unit teacher
guides must supply worked keys; the embedded answers in
`weight-distance-quiz.md` must be moved out of learner-facing files.

**Volatile-data risk:** quizzes on stock exchanges, commodity producers,
chokepoint oil fractions, and forex rates cite 2025-snapshot or undated
figures with no check dates. Unit builds either re-anchor these items to
stable concepts (why chokepoints matter, how trade routes work) or add
explicit check dates and a "verify before assigning" note.

**Track-theme mismatch:** the legacy library is U.S. civics, geography
trivia, and measurement quizzes. **Nothing in it teaches medieval world
history** — the eight planned units (U01–U08) have no legacy lesson content
behind them, so the unit builds create instruction new rather than revising
legacy lessons.

## 2. Prerequisites

Learners enter from the grade-6 social studies track (ancient world; audit
delivered, units planned), whose end-of-year objectives this track assumes:
framing compelling and supporting questions and choosing source kinds
(D1.1–1.5.6-8); constructing and interpreting maps with scale, key, and grid
(D2.Geo.1–3.6-8); explaining how environments shaped early human life and how
river-valley civilizations organized cities, specialization, writing, laws,
and belief systems (D2.Geo.4–5, 11.6-8; D2.His.1, 2, 14.6-8); comparing
ancient societies in their own contexts (D2.His.4.6-8); reasoning economically
about specialization, markets, supply and demand, and interdependence
(D2.Eco.1–9, 14, 15.6-8); evaluating sources — classifying kinds, detecting
limitations, inferring maker/audience/purpose (D3.1–3.2.6-8; D2.His.9–13.6-8);
and communicating conclusions with claims, counterclaims, and noted
limitations (D3.3–3.4.6-8; D4.1–4.8.6-8).

The diagnostic weeks (Weeks 1–2) verify these. U01 re-teaches map reading and
source questioning on medieval material before assuming they are secure; U02
re-checks perspective analysis (D2.His.4.6-8) before the track leans on it in
U05–U08.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README):

1. Frame historical inquiries: write compelling and supporting questions
   about the medieval world and determine which source kinds will answer
   them (D1.1–1.5.6-8).
2. Read maps as historical evidence: construct and interpret maps of the
   medieval world with scale, key, and grid; explain what a map shows and
   what it cannot show (D2.Geo.1–3.6-8).
3. Analyze connections among medieval developments in broader historical
   contexts; classify developments as change and/or continuity across the
   medieval era (D2.His.1, 2.6-8).
4. Explain Byzantine, Islamic, and Mediterranean societies in their own
   contexts — institutions, belief systems, scholarship, and exchange —
   analyzing multiple factors that shaped people's perspectives
   (D2.His.1, 2, 4, 5.6-8; D2.Civ.3, 5, 6.6-8).
5. Explain African kingdoms' trade networks, centers of learning, and
   cultural exchange; evaluate how environmental characteristics of places
   shaped the spatial patterns of trade (D2.His.1, 2, 3.6-8; D2.Geo.11.6-8;
   D2.Eco.14, 15.6-8).
6. Explain South, Southeast Asian, and Pacific societies and their regional
   networks, comparing cultural and environmental characteristics across
   regions (D2.His.1, 2, 4.6-8; D2.Geo.5, 10, 12.6-8).
7. Explain medieval European institutions and everyday life — manorialism,
   feudal relationships, towns, guilds, the church — evaluating the relative
   influence of causes behind institutional change (D2.His.14, 15.6-8;
   D2.Civ.3, 4, 6.6-8; D2.Eco.1, 3.6-8).
8. Explain Indigenous American societies as living peoples with regional
   networks — agriculture, cities, trade, belief — evaluating sources where
   the written record is thin (D2.His.1, 4, 9, 10.6-8; D2.Geo.4, 5, 8.6-8).
9. Explain Renaissance, Reformation, and early-modern change with multiple
   causes and effects, organizing evidence into coherent arguments
   (D2.His.2, 14, 15, 16.6-8; D2.Eco.7.6-8; D2.Civ.13, 14.6-8).
10. Explain global encounters — exploration, colonization, and resistance —
    comparing central arguments in secondary works and analyzing how
    perspectives shaped the histories produced (D2.His.4, 6, 16, 17.6-8;
    D2.Civ.14.6-8; D4.6.6-8).
11. Evaluate historical sources: gather relevant information using origin,
    authority, structure, context, and corroborative value; classify source
    kinds; detect limitations; infer maker, date, place, audience, and
    purpose (D3.1, 3.2.6-8; D2.His.9–13.6-8).
12. Communicate conclusions: develop claims and counterclaims noting
    strengths and limitations, construct explanations with reasoning and
    sequence, critique arguments for credibility, and present findings to
    audiences beyond the adult (D3.3, 3.4.6-8; D4.1–4.5.6-8).

## 4. Standards crosswalk

Framework: the **College, Career, and Civic Life (C3) Framework for Social
Studies State Standards** (National Council for the Social Studies),
https://www.socialstudies.org/standards/c3. Indicator codes and descriptions
verified 2026-10-05 against the framework's grades 6–8 indicator tables (C3
Grades 6–8 guide; NCSS C3 Framework for Social Studies State Standards
document). The framework is used as a subject reference; nothing here claims
state adoption, accreditation, or complete standards alignment.

| Strand | Codes used | Verified expectation (paraphrase) |
|---|---|---|
| D1 — Developing Questions and Planning Inquiries | D1.1–1.5.6-8 | Explain how a question represents key ideas; explain points of expert agreement around compelling and supporting questions; explain how supporting and compelling questions reinforce each other; determine which source kinds will answer the questions, considering multiple points of view in the sources. |
| D2.His — Change, Continuity, and Context | D2.His.1, 2.6-8 | Analyze connections among events and developments in broader historical contexts; classify series of historical events and developments as examples of change and/or continuity. |
| D2.His — Perspectives | D2.His.3, 4, 5, 6.6-8 | Use questions about individuals and groups to analyze why they and their developments are seen as historically significant; analyze multiple factors influencing people's perspectives in different eras; explain how and why perspectives changed over time; analyze how people's perspectives influenced what information is available in the sources they created. |
| D2.His — Historical Sources and Evidence | D2.His.9, 10, 11, 12, 13.6-8 | Classify the kinds of historical sources used in a secondary interpretation; detect possible limitations in the historical record from different source kinds; infer a plausible maker, date, place of origin, and intended audience where not easily identified; use questions about multiple sources to find further inquiry areas; evaluate a source's relevancy and utility from maker, date, place, audience, and purpose. |
| D2.His — Causation and Argumentation | D2.His.14, 15, 16, 17.6-8 | Explain multiple causes and effects of past events and developments; evaluate the relative influence of various causes; organize applicable evidence into a coherent argument about the past; compare the central arguments in secondary works of history on related topics in multiple media. |
| D2.Geo — Geographic Representations | D2.Geo.1, 2, 3.6-8 | Construct maps to represent and explain spatial patterns of cultural and environmental characteristics; use maps, satellite images, and photographs to explain relationships between place locations and changes in environmental characteristics; use paper and electronic mapping/graphing techniques to represent and analyze spatial patterns. |
| D2.Geo — Human-Environment Interaction | D2.Geo.4, 5, 6.6-8 | Explain how cultural patterns and economic decisions influence environments and daily life in nearby and distant places; analyze combinations of cultural and environmental characteristics that make places similar to and different from each other; explain how physical and human characteristics of places connect to human identities and cultures. |
| D2.Geo — Human Population: Spatial Patterns and Movement | D2.Geo.7, 8.6-8 | Explain how changes in transportation and communication technology influence spatial connections among settlements and the diffusion of ideas and cultural practices; analyze how relationships between humans and environments extend or contract settlement and movement patterns. |
| D2.Geo — Global Interconnections | D2.Geo.9, 10, 11, 12.6-8 | Evaluate influences of long-term human-induced environmental change on spatial patterns of conflict and cooperation; analyze how cultural and environmental characteristics vary among world regions; explain how the relationship between environmental characteristics and production influences world trade patterns; explain how global changes in population distribution affect land use in particular places. |
| D2.Civ — Civic and Political Institutions | D2.Civ.3, 4, 5, 6.6-8 | Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements; explain the powers and limits of branches of government, officials, and bureaucracies in the U.S. and other countries; explain origins, functions, and structure of government with reference to constitutions and selected other systems; describe the roles of political, civil, and economic organizations in shaping people's lives. |
| D2.Civ — Processes, Rules, and Laws | D2.Civ.13, 14.6-8 | Analyze the purposes, implementation, and consequences of public policies in multiple settings; compare historical and contemporary means of changing societies and promoting the common good. |
| D2.Eco — Economic Decision Making; Exchange and Markets | D2.Eco.1, 3, 6, 7.6-8 | Explain how economic decisions affect the well-being of individuals, businesses, and society; explain the roles of buyers and sellers in product, labor, and financial markets; explain how changes in supply and demand cause changes in prices and quantities of goods and services, labor, credit, and foreign currencies; analyze the role of innovation and entrepreneurship in a market economy. |
| D2.Eco — The Global Economy | D2.Eco.14, 15.6-8 | Explain barriers to trade and how those barriers influence trade among nations; explain the benefits and costs of trade policies to individuals, businesses, and society. |
| D3 — Evaluating Sources and Using Evidence | D3.1, 3.2, 3.3, 3.4.6-8 | Gather relevant information from multiple sources using origin, authority, structure, context, and corroborative value to guide selection; evaluate a source's credibility by determining its relevance and intended use; identify evidence from multiple sources to support claims, noting evidentiary limitations; develop claims and counterclaims while pointing out strengths and limitations of both. |
| D4 — Communicating Conclusions and Taking Informed Action | D4.1, 4.2, 4.3, 4.4, 4.5, 4.6.6-8 | Construct arguments using claims and evidence from multiple sources, acknowledging strengths and limitations; construct explanations with reasoning, sequence, examples, and details; present adaptations of arguments and explanations to audiences beyond the classroom; critique arguments for credibility; critique the structure of explanations; draw on multiple disciplinary lenses to analyze how a problem manifests at local, regional, and global levels over time. |

Notes: D2.His.7.6-8 and D2.His.8.6-8 begin in grades 9–12 per the framework
and are not taught in this track. D2.Eco.10–12.6-8 (interest rates;
employment/unemployment/inflation data; how inflation, deflation, and
unemployment affect groups) address modern national economies and are
deferred to later grades, as is D2.Eco.13.6-8 (productivity and living
standards). The 6–8 band spans three grades; this track teaches each
indicator at the grade-7 mid-band level — sources are adult-curated with
increasing learner independence across the year, and evaluation moves from
guided to independent by U08.

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2 at the start,
final review ×2 at the end) = 36 weeks. Session model: **4 sessions per
week, about 45 minutes each** (16 sessions per unit). Session types rotate
across explicit lesson, guided practice, reading or investigation practice,
and review — named per unit below. Grade-7 learners do independent written
practice that the adult reviews the same day; oral, drawing, and
speech-to-text response modes remain available for checks and supports.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (map warm-ups, source-questioning
  routines, evidence notebooks, discussion norms, exit-check rituals) and
  baseline each objective's entry point.
- Sessions: construct a simple map with scale and key; write one compelling
  and two supporting questions about an unfamiliar medieval artifact image;
  classify three sources by kind; explain one cause and one effect of a
  familiar historical change (D1, D2.Geo.1, D2.His.9, D2.His.14 entry checks).
- No new instruction; record observations against the track objectives.

### Unit 01 — Medieval geography: sources and historical inquiry (Weeks 3–6)

- **Standards:** D1.1–1.5.6-8; D2.Geo.1, 2, 3.6-8; D2.His.9–13.6-8;
  D3.1, 3.2.6-8
- **Week 3 goal:** frame compelling and supporting questions about the
  medieval world; determine which source kinds (maps, travelers' accounts,
  artifacts, coins, chronicles) answer them (D1).
- **Week 4 goal:** construct and interpret maps of Afro-Eurasia with scale,
  key, and grid; locate the Mediterranean, Indian Ocean, trans-Saharan, and
  Silk Road corridors; explain what a map shows and cannot show
  (D2.Geo.1–3.6-8).
- **Week 5 goal:** classify historical source kinds used in a secondary
  interpretation of a medieval society; detect limitations; infer maker,
  date, place, and audience where not stated (D2.His.9–12.6-8; D3.1–3.2.6-8).
- **Week 6:** review week — formative check on questioning, map reading, and
  source evaluation; one annotated map for the portfolio.
- Sessions rotate: inquiry lesson → map practice → source-evaluation
  practice → review and discussion.
- Reuses: the revised city-planning design lab as spatial-reasoning practice
  (rebuilt with a map-construction frame); the revised capitals, oceans/seas,
  and chokepoints quizzes as U01 formative review with answer keys and
  corrected section references; `resources/un_countries.csv` /
  `un_countries.json` for a "where in the modern world?" mapping task;
  `teachers/ai-assistants/resource_finder.md` for the unit Resource Pack.

### Unit 02 — Byzantine, Islamic, and Mediterranean societies (Weeks 7–10)

- **Standards:** D2.His.1, 2, 4, 5, 6.6-8; D2.Geo.5, 6, 7.6-8; D2.Civ.3, 5,
  6.6-8; D3.3, 3.4.6-8
- **Week 7 goal:** explain the Byzantine state — administration, law, and
  Orthodox Christianity — analyzing multiple factors that shaped people's
  perspectives (D2.His.4.6-8; D2.Civ.5, 6.6-8).
- **Week 8 goal:** explain the rise and spread of Islamic societies —
  belief, law, scholarship, and cities — in their own context, evaluating
  sources for perspective (D2.His.1, 4, 6.6-8).
- **Week 9 goal:** explain Mediterranean exchange — trade, translation, and
  the movement of ideas and technologies — and how physical and human
  characteristics of places connected to identities (D2.Geo.5, 6, 7.6-8);
  classify change and continuity across the era (D2.His.2.6-8).
- **Week 10:** review week — formative check; one evidence-based comparison
  of two societies for the portfolio.
- Sessions rotate: society lesson → perspective-analysis practice → exchange
  mapping practice → review and discussion.
- Reuses: the civil-rights source-analysis template's technique rebuilt for
  medieval primary sources (perspective/purpose/audience frame);
  `resources/black_excellence_figures.md` research technique adapted for
  scholar/figure studies with reputable sources; adult-curated primary
  sources in translation (public domain or licensed excerpts only).

### Unit 03 — African kingdoms: trade, knowledge, and cultural exchange (Weeks 11–14)

- **Standards:** D2.His.1, 2, 3.6-8; D2.Geo.4, 11.6-8; D2.Eco.14, 15.6-8;
  D3.3.6-8
- **Week 11 goal:** explain West African kingdoms (Ghana, Mali, Songhai) —
  gold-salt trade, cities, and governance — and how environmental
  characteristics shaped trade patterns (D2.Geo.11.6-8; D2.Eco.14, 15.6-8).
- **Week 12 goal:** explain centers of learning (Timbuktu) and cultural
  exchange across the Sahara; analyze why these developments are seen as
  historically significant (D2.His.3.6-8).
- **Week 13 goal:** explain East and southern African networks (Swahili
  coast, Great Zimbabwe) and Indian Ocean connections; classify change and
  continuity (D2.His.1, 2.6-8).
- **Week 14:** review week — formative check; one trade-network map with
  explanation for the portfolio.
- Sessions rotate: kingdom lesson → trade-pattern practice → significance
  analysis practice → review and discussion.
- Reuses: the revised global-agriculture quiz as a review seed (re-anchored
  to stable concepts — why staples move along trade routes — with a check
  date on producer data); the revised chokepoints quiz for the
  strait/corridor concept applied to Saharan and Indian Ocean routes.

### Unit 04 — South, Southeast Asian, and Pacific societies (Weeks 15–18)

- **Standards:** D2.His.1, 2, 4.6-8; D2.Geo.5, 10, 12.6-8; D2.Eco.14, 15.6-8
- **Week 15 goal:** explain South Asian societies — states, belief systems,
  and Indian Ocean trade — comparing cultural and environmental
  characteristics across regions (D2.Geo.5, 10.6-8; D2.His.4.6-8).
- **Week 16 goal:** explain Southeast Asian societies (Khmer, Srivijaya,
  Majapahit) and maritime networks (D2.His.1, 2.6-8; D2.Eco.14.6-8).
- **Week 17 goal:** explain Pacific societies — navigation, settlement, and
  island networks — and how population distribution changes affected land
  use (D2.Geo.12.6-8).
- **Week 18:** midyear review — cumulative formative check (U01–U04) plus
  targeted reteaching; formative quiz.
- Sessions rotate: society lesson → regional-comparison practice → network
  mapping practice → review.
- Reuses: `resources/un_countries.json` for modern-region reference in
  mapping tasks; `resources/world_facts.md` "🗺️ Continents & Land" and
  oceans/seas sections (adult-verified) for physical-geography reference.

### Unit 05 — Medieval Europe: institutions and everyday life (Weeks 19–22)

- **Standards:** D2.His.2, 4, 14, 15.6-8; D2.Civ.3, 4, 6.6-8; D2.Eco.1, 3.6-8;
  D2.Geo.4.6-8
- **Week 19 goal:** explain feudal relationships, manorialism, and the
  medieval church as institutions — origins, purposes, and impact
  (D2.Civ.3, 6.6-8).
- **Week 20 goal:** explain towns, guilds, and markets — buyers, sellers,
  and how economic decisions affected well-being (D2.Eco.1, 3.6-8);
  everyday life across social ranks with perspective analysis (D2.His.4.6-8).
- **Week 21 goal:** explain multiple causes and effects of institutional
  change (town growth, church reform pressures, plague's aftermath),
  evaluating the relative influence of causes (D2.His.14, 15.6-8).
- **Week 22:** review week — formative check; one multi-cause explanation
  for the portfolio.
- Sessions rotate: institution lesson → everyday-life investigation →
  causation practice → review and discussion.
- Reuses: the civil-rights source-analysis frame rebuilt for manorial
  records and town charters (in translation/excerpt); the
  landmark-court-case assignment's technique (issue, rule, significance)
  adapted as optional enrichment comparing medieval and modern legal
  reasoning.

### Unit 06 — Indigenous American societies and regional networks (Weeks 23–26)

- **Standards:** D2.His.1, 4, 9, 10.6-8; D2.Geo.4, 5, 8.6-8; D3.1, 3.2.6-8
- **Week 23 goal:** explain Mississippian, Ancestral Puebloan, and other
  North American societies — agriculture, cities, and regional networks —
  as living peoples, not vanished curiosities (D2.His.1, 4.6-8).
- **Week 24 goal:** explain Mesoamerican and Andean societies in their own
  contexts; analyze how human-environment relationships shaped settlement
  (D2.Geo.4, 8.6-8).
- **Week 25 goal:** evaluate sources where the written record is thin —
  archaeology, oral tradition, and colonial accounts read against the grain;
  detect limitations honestly (D2.His.9, 10.6-8; D3.1, 3.2.6-8).
- **Week 26:** review week — formative check; one source-evaluation write-up
  for the portfolio.
- Sessions rotate: society lesson → network-mapping practice →
  source-limitation practice → review and discussion.
- Reuses: `resources/black_excellence_figures.md` research method for
  figure/tradition studies; the D3 source-evaluation routine built in U01,
  now applied to harder cases.

### Unit 07 — Renaissance, Reformation, and early-modern change (Weeks 27–30)

- **Standards:** D2.His.2, 14, 15, 16.6-8; D2.Civ.13, 14.6-8; D2.Eco.7.6-8;
  D4.1, 4.2.6-8
- **Week 27 goal:** explain the Renaissance — humanism, art, and the spread
  of ideas via print — analyzing the role of innovation (D2.Eco.7.6-8) and
  classifying change and continuity (D2.His.2.6-8).
- **Week 28 goal:** explain the Reformation — causes, religious and
  political effects — with multiple causes evaluated for relative influence
  (D2.His.14, 15.6-8).
- **Week 29 goal:** organize evidence into a coherent argument about one
  early-modern change; compare purposes and consequences of policies
  (D2.His.16.6-8; D2.Civ.13.6-8).
- **Week 30:** review week — formative check; one argued explanation for
  the portfolio.
- Sessions rotate: change lesson → causation practice → argument-building
  practice → review and discussion.
- Reuses: the U05 multi-cause routine; the U02 perspective-analysis routine
  applied to reformers and their opponents.

### Unit 08 — Global encounters: colonization, resistance, and historical synthesis (Weeks 31–34)

- **Standards:** D2.His.1, 2, 4, 6, 16, 17.6-8; D2.Geo.7, 9, 11, 12.6-8;
  D2.Civ.14.6-8; D2.Eco.14, 15.6-8; D4.3, 4.6.6-8
- **Week 31 goal:** explain European expansion — motives, navigation
  technology, and new trade patterns — and how transportation change
  reshaped connections (D2.Geo.7, 11.6-8; D2.Eco.14, 15.6-8).
- **Week 32 goal:** explain colonization's effects and Indigenous and
  African resistance — centering resistance perspectives, age-appropriately
  and without graphic detail (D2.His.4, 6.6-8; D2.Civ.14.6-8).
- **Week 33 goal:** compare the central arguments of two secondary works on
  one encounter; synthesize the year's societies into a connected
  Afro-Eurasian and American narrative (D2.His.16, 17.6-8).
- **Week 34:** synthesis week — present an adapted argument to an audience
  beyond the adult; draw on multiple disciplinary lenses to analyze how one
  problem manifested across regions (D4.3, 4.6.6-8); unit formative check.
- Sessions rotate: encounter lesson → resistance-perspective practice →
  synthesis and comparison practice → presentation and review.
- Reuses: the revised history-of-war assignment (rebuilt for
  medieval/early-modern turning points and institutions with a working
  timeline routine); `resources/wars_fundamentals.md` excerpted for the
  turning-points concept.

### Weeks 35–36 — Final review and cumulative assessment (flexible)

- Revisit inquiry framing (U01), perspective analysis (U02–U06), multi-cause
  explanation (U05, U07), source evaluation (U01, U06), and synthesis (U08)
  through short mixed practice sets; administer the cumulative assessment;
  confirm the portfolio is complete. Assessment design and keys belong to
  R00; units are not expected to cover them.

## 6. Retrieval and review cadence

Each unit's week 4 is a dedicated review week (practice, formative quiz, and
reteaching). Week 18 adds a midyear cumulative check across U01–U04.
Map-reading (D2.Geo.1–3.6-8) recurs in every unit's mapping practice so the
skill does not decay after U01; source evaluation (D3.1–3.2.6-8;
D2.His.9–13.6-8) recurs in U02, U05, U06, and U08 with harder cases each
time; perspective analysis (D2.His.4.6-8) runs from U02 through U08;
multi-cause explanation (D2.His.14, 15.6-8) is introduced in U05, practiced
in U07, and applied in U08. No unit assumes a skill its predecessor has not
taught.

## 7. Internal resource reuse for future units

- The revised city-planning design lab becomes U01 spatial-reasoning
  practice (rebuilt with a map-construction frame and rubric).
- The revised capitals, oceans/seas, and chokepoints quizzes become U01
  formative review with answer keys and corrected guide-section references;
  the revised agriculture quiz becomes a U03 review seed re-anchored to
  stable trade-route concepts with a check date on producer data.
- The civil-rights source-analysis template's *technique* (context,
  quotations with locations, perspective/purpose/audience comparison,
  effect, citation) is rebuilt for medieval primary sources in U02 and U05.
- The history-of-war assignment is rebuilt for medieval/early-modern turning
  points and institutions in U08 with a working timeline routine.
- `resources/world_facts.md` serves U01 (physical geography, capitals,
  chokepoints) and U03/U04 (commodities, regions) — excerpted by the adult
  at the point of instruction; every volatile figure gets a check date.
- `resources/government_basics.md` and
  `resources/united_states_understanding_and_principles.md` support only the
  optional U.S.-civics enrichment quizzes, not the core units.
- `resources/wars_fundamentals.md` serves U08's turning-points concept —
  excerpted, not assigned whole.
- `resources/black_excellence_figures.md` research method (2–3 facts plus
  one impact from reputable sources) is adapted for scholar/figure studies
  in U02 and U06.
- `resources/un_countries.csv` / `un_countries.json` serve U01 and U04
  mapping tasks ("where in the modern world?"); `resources/us_states.csv`
  and `us_presidents.csv` support only the optional states-report
  enrichment.
- `resources/supply_and_demand_economics.md` supports U05's market/guild
  work — the adult excerpts the kid-friendly bullets, never assigns the
  whole file.
- `teachers/ai-assistants/resource_finder.md` drives every unit's Resource
  Pack (focused queries, verified videos or labeled search links, reputable
  references, task-to-resource mappings).

## 8. Safe materials

All reading passages are original or lawful public-domain/licensed texts;
medieval primary sources are used in translation via public-domain or
licensed excerpts — unit builds must not reproduce copyrighted translations,
books, poems, or worksheets. Investigations use map work, source analysis,
discussion, and writing — no hazardous materials. U08's colonization and
resistance content is age-appropriate: no graphic detail, resistance
perspectives centered, adult-framed. Multimedia work uses learner-safe tools
under adult supervision. Privacy: keep learner work, names, photos,
schedules, and grades in private storage; nothing learner-identifying enters
the repository. The track stays nonpartisan: multiple perspectives are
analyzed in their own contexts (D2.His.4.6-8), never as a single narrative.

## 9. Accessibility supports

Read-aloud and chunked text, pre-taught vocabulary (with a running
medieval-terms glossary the learner builds across units), outline and
map frames, speech-to-text or adult-scribed options, extra planning time,
and rubric transparency (criterion bands stated before the task). Oral,
drawing, and speech-to-text response modes remain available for checks.
Map tasks include text-only alternatives (written route descriptions) for
every visual component. Supports are differentiated per learner need, never
optional enrichment alone.

## 10. Gaps and paths for future units

The legacy library contains **no medieval world-history instruction at
all** — U01–U08 build lessons new. Largest new builds: the U01 inquiry/map
sequence (questioning routines, map construction, source evaluation from
zero); the U02–U04 society sequences (each needs adult-curated,
public-domain primary sources in translation plus reputable secondary
overviews — no repository guide currently covers medieval Afro-Eurasia);
the U06 source-limitation sequence (archaeology and oral tradition as
evidence); and the U08 synthesis sequence (comparing secondary arguments,
centering resistance perspectives). The volatile-data problem in the legacy
quizzes must be fixed during the unit builds — either re-anchor items to
stable concepts or add check dates and "verify before assigning" notes. R00
will reuse each unit's formative checks; nothing in the legacy library can
supply the diagnostic because no diagnostic exists. The grade-6 ancient-world
audit's D1/D2.Geo/D3 routines are the entry point; this track raises
independence each unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Medieval geography: sources and historical inquiry (absorbs the revised
city-planning design lab and the revised capitals/oceans/chokepoints
quizzes); U02 Byzantine, Islamic, and Mediterranean societies (rebuilds the
source-analysis template technique for medieval primary sources); U03
African kingdoms: trade, knowledge, and cultural exchange (absorbs the
revised agriculture quiz); U04 South, Southeast Asian, and Pacific
societies; U05 Medieval Europe: institutions and everyday life; U06
Indigenous American societies and regional networks; U07 Renaissance,
Reformation, and early-modern change; U08 Global encounters: colonization,
resistance, and historical synthesis (absorbs the revised history-of-war
assignment); R00 diagnostic, midyear/final review, cumulative assessment
and keys, plus the coherence/accessibility/sources/image audit. Optional
enrichment (not core): the U.S.-civics quizzes, the credit-cost and
court-case assignments, the five-states report, and the measurement quizzes.

## 12. Verification record

- Existing-file inventory re-audited 2026-10-05 against `origin/main`: 24
  Markdown files, all reviewed in §1. Findings: `weight-distance-quiz.md`
  has a broken title and answers embedded inline (reads as a leaked key);
  `global-energy-precious-metals-quiz.md` cites "Crude Oil" and "Gold"
  sections that do not exist in `resources/world_facts.md` (unanswerable
  from its cited source); most quizzes name guide sections that do not
  match the guides' actual headings (links resolve to the file, not the
  section); volatile figures (2025 snapshots, exchange rates, top-producer
  lists, oil fractions) carry no check dates. No answer key exists for any
  quiz. No inaccurate or inappropriate content beyond these structural
  issues; nothing is a complete lesson.
- Standards codes and descriptions verified 2026-10-05 against the C3
  Framework grades 6–8 indicator tables (NCSS C3 Framework for Social
  Studies State Standards; C3 Grades 6–8 guide; cross-checked on the NCSS
  C3 landing page https://www.socialstudies.org/standards/c3): D1.1–1.5,
  D2.His.1–6, D2.His.9–17, D2.Geo.1–12, D2.Civ.3–6, D2.Civ.13–14, D2.Eco.1,
  D2.Eco.3, D2.Eco.6–7, D2.Eco.14–15, D3.1–3.4, D4.1–4.6 (all .6-8 band).
  D2.His.7.6-8 and D2.His.8.6-8 begin in grades 9–12 per the framework and
  are not cited. Framework used as subject reference only; no claim of
  state adoption, accreditation, or alignment certification.
- Resource decisions checked 2026-10-05 against `main`: `world_facts.md`,
  `government_basics.md`, `united_states_understanding_and_principles.md`,
  `weights_and_measures.md`, `wars_fundamentals.md`,
  `black_excellence_figures.md`, `supply_and_demand_economics.md`,
  `us_states.csv`, `us_presidents.csv`, `un_countries.csv`,
  `un_countries.json` (all present; CSV/JSON columns spot-checked), the
  shared `assignments/social-studies/history-of-war/` reference (present),
  and `teachers/ai-assistants/resource_finder.md`.
- `python3 scripts/validate-library.py` run before delivery (see delivery
  comment on issue #37); Markdown links checked; manifest updated with the
  new scope-and-sequence file.
