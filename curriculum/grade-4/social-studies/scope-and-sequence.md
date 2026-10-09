# Grade 4 Social Studies — Scope and Sequence

Audit section A00 of [issue #25](https://github.com/murderszn/open-tutor/issues/25).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`). All 22 Markdown files
from the issue's 2026-10-01 baseline were found and read in full (README, 4
assignments, 16 quizzes, 1 template). No files added, removed, or renamed since
the baseline.

| Item | Location | Decision |
|---|---|---|
| Grade-4 hub page | `curriculum/grade-4/README.md` (main) | **Revise** — add Social Studies audit status with link; keep the `math/`, `stem/`, `language-arts/` listings |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — grade-4 line gains "social studies" draft audit |
| Grade-4 social studies folder | `curriculum/grade-4/social-studies/` (22 Markdown files) | **Revised** — `README.md` rewritten as audit-driven subject index; `scope-and-sequence.md` added; all 21 content files read below, kept in place |
| Manifest | `curriculum/manifest.json` | **Update** — register `scope-and-sequence.md` as subject-index; bump counts |
| Same-grade math track (#22, audit delivered as draft PR #87, unmerged) | `curriculum/grade-4/math/` (PR head) | **Reference only** — session model (4 × ~35 min sessions/week) reused as pattern; no math content reused |
| Same-grade science track (#23, audit delivered as draft PR #88, unmerged) | `curriculum/grade-4/science/` (PR head) | **Reference only** — no content borrowed; time-zone work in U01 may coordinate with science Earth-rotation material, but no science content reused |
| Same-grade language arts track (#24, audit delivered as draft PR #89, unmerged) | `curriculum/grade-4/language-arts/` (PR head) | **Reference only** — source-comparison and note-taking routines will align with its informational-reading work; no LA content reused |
| Grade-3 social studies track (#21, audit merged) | `curriculum/grade-3/social-studies/` | **Prerequisite reference only** — grade-3 end-of-year objectives define entry expectations (see §2); no grade-3 material copied upward |
| Grade-5/7/8 social studies tracks (no audits yet) | `curriculum/grade-5/social-studies/`, etc. | **No reuse** — content marked expand/review; kept as reference for where the track leads |
| Shared `assignments/` social studies material | `assignments/` | **No reuse** — nothing verified at the grade-4 band |

### Keep/revise decisions per existing file

All decisions verified by reading each file in full. "Keep" means the file is
grade-appropriate as a seed and stays; it does **not** mean the file is a
complete instructional resource — every assignment is a bare prompt with no
teaching, models, or answer key, and no quiz in this track has an answer key,
which the units and R00 will supply. Five measurement/tech quizzes are not
social studies content at all and are excluded from this track.

| File(s) | Decision |
|---|---|
| `assignments/civic-voting-research.md` | **Keep** — blank prompt on voting and the 26th Amendment with an educator-selected reading; needs a taught model before assignment; feeds U05 |
| `assignments/creed-five-states-report.md` | **Keep** — five-state research report built on `resources/us_states.csv`; good U01 dataset task once columns, rounded values, and units are named at task time; needs a model report and key; feeds U01/U06 |
| `assignments/currency-history-research.md` | **Keep** — coin-history research from educator-provided images with official-mint verification; good U04/U07 historical-evidence seed; needs a model and adult-supplied images; feeds U04/U07 |
| `assignments/time-zones-explanation.md` | **Keep** — globe-and-lamp day/night model plus time-zone map comparison; solid U01 geographic-tools task (adult-supervised); Earth-rotation explanation stays at the social-studies level (local time from rotation), not science-unit depth; feeds U01 |
| `quizzes/from-colonies-to-the-constitution-quiz.md` | **Keep** — 10 items over colonies → Constitution content from the cited guide sections (taxation without representation, Declaration, Articles, Convention, constitutional republic); solid U03/U04/U05 seed; needs an answer key |
| `quizzes/government-agencies-departments-quiz.md` | **Keep** — 10 items on executive departments and agencies from the cited guide; appropriate U05 seed; needs an answer key |
| `quizzes/major-global-capitals-quiz.md` | **Keep** — 10 capitals from the cited guide section; usable U01 geography seed; verify any capital changes at use time (capitals do change); needs an answer key |
| `quizzes/major-oceans-seas-quiz.md` | **Keep** — 5 oceans + named seas from the cited guide; usable U01 seed; note the five-ocean convention (Southern Ocean recognition varies) when authoring; needs an answer key |
| `quizzes/rights-responsibilities-u-s-states-quiz.md` | **Keep** — Bill of Rights, 13th/19th Amendments, federalism, states vs. territories; core U05 material; Q10's largest/smallest-population states must be verified at use time; needs an answer key |
| `quizzes/the-three-branches-of-government-quiz.md` | **Keep** — branches, Congress composition, checks and balances, bill-to-law; core U05 material; GAO/CBO items are reasonable stretch; needs an answer key |
| `quizzes/global-agriculture-quiz.md` | **Revise** — wheat/soy/rice producer rankings are 2025 snapshots from the cited guide and shift year to year; quiz items asking for "top five/top three" must be verified or reframed as "according to the 2025 snapshot" at use time; neutral items (what wheat is used for, why commodities matter for stability) feed U06 |
| `quizzes/global-chokepoints-strategic-fairways-quiz.md` | **Revise** — quiz cites a "Critical Global Chokepoints" section; the guide's actual heading is "Strategic Fairways (Chokepoints)" (title mismatch, content findable); canal/strait location items are usable U01/U06 geography with adult guidance; items on oil-flow fractions are enrichment only, not core grade-4 content |
| `quizzes/global-energy-precious-metals-quiz.md` | **Revise** — **dangling reference:** the quiz cites "Crude Oil" and "Gold" sections in `world_facts.md` that do not exist on `main`; the quiz cannot be answered from the linked guide and must be rebuilt or dropped before any use; Q9's "taking control of oil trade as a geopolitical strategy" framing is above band in any case; neutral product/use items could feed U06 after rebuild |
| `quizzes/temperature-foreign-exchange-forex-quiz.md` | **Revise** — temperature items are science, not social studies; forex-trading mechanics (Q7, Q10) are above band; basic currency-identification items (Q6 £, Q8 rupee, Q9 yuan) are usable U06 enrichment; EUR/¥140/CAD 1.35 figures in the cited guide are dated snapshots, not stable facts |
| `quizzes/major-global-stock-exchanges-quiz.md` | **Revise — enrichment only** — market-cap rankings, Euronext cities, and the JPX merger are above the grade-4 band; the 2025 snapshot in the guide shifts over time; do not use as core U06 content |
| `quizzes/digital-storage-sizes-quiz.md` | **No social-studies reuse** — computing/measurement content; belongs to math/science or computing enrichment, not this track |
| `quizzes/standard-to-metric-conversions-quiz.md` | **No social-studies reuse** — measurement conversions; math/science content |
| `quizzes/the-metric-system-quiz.md` | **No social-studies reuse** — math/science content |
| `quizzes/volume-liquid-measurements-quiz.md` | **No social-studies reuse** — measurement content; math track material |
| `quizzes/weight-distance-quiz.md` | **No social-studies reuse** — math/science material |
| `templates/civil-rights-movement.md` | **Keep** — picture-and-fact research note (event/person, when/where, one fact, what changed, labeled drawing); good U07/U08 seed; requires an educator-approved, age-appropriate source |

### Internal reference decisions

| Item | Decision |
|---|---|
| `resources/government_basics.md` | **Adult-side reference** — accurate branches/agencies definitions behind U05 teacher guides (D2.Civ.1, 5.3-5); kid-friendly bullets are adapted, not assigned as learner reading |
| `resources/united_states_understanding_and_principles.md` | **Adult-side reference** — background for U03–U05 teacher guides (colonies, Constitution, federalism); learner-facing passages will be original and grade-4-appropriate |
| `resources/supply_and_demand_economics.md` | **Adult-side reference** — informs U04's colonial economic life and U06's markets (D2.Eco.3–5, 7, 8.3-5); the guide's macro sections (inflation, unemployment, GDP) are out of scope |
| `resources/world_facts.md` (on main) | **Candidate for U01/U06 geography data** — continent, ocean, capital, and fairway sections verified present; commodity leader lists are labeled 2025 snapshots and must be re-checked during authoring; **the quiz-cited Crude Oil and Gold sections do not exist** — see the quiz finding above |
| `resources/us_states.csv` | **Candidate for U01/U06 dataset tasks** — columns `name_common, usps, capital, region, subregion, population_approx, area_sq_mi, area_sq_km, population_density_per_sq_mi, statehood_year, biggest_city, biggest_city_population, state_fact, google_maps_url`; task instructions will name exact columns and note rounded approximations; `state_fact` one-liners checked before use |
| `resources/un_countries.csv` / `.json` | **Candidate for U01 region comparisons** — columns `name_common, region, subregion, capital` are usable; the `population` column is empty and must not be used until filled from a verified source |
| `resources/us_presidents.csv` | **Teacher-side background only** — may inform U05's executive-branch context; no learner-facing presidential content at this grade beyond what units author |
| `resources/black_excellence_figures.md` | **Adult-side reference** — the adult pre-selects age-appropriate figures for U07/U08 research tasks (perspectives, regional change); entries are not assigned as learner reading |
| `resources/wars_fundamentals.md` | **No grade-4 reuse** — content skews far above this band |
| `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |

No existing file contained reproduced copyrighted text. Three factual/structural
problems were found: the energy-metals quiz's dangling guide reference, dated
snapshot data presented as stable quiz answers (agriculture rankings, forex
rates), and the section-title mismatch in the chokepoints quiz. Answer keys are
absent across the entire track — a gap the unit sections and R00 will fill.

## 2. Prerequisites

Learners typically enter grade-4 social studies with the grade-3 social studies
track's end-of-year objectives (that track's audit is merged; its units are not
yet written):

- Geographic tools — construct and read simple maps with title, symbols, key,
  compass rose, and labels; name cardinal directions; use maps, globes, and
  photographs to describe places
- People and environment — explain how weather, landforms, and environment
  affect daily life; describe how people change places and how places shape
  choices
- History with timelines and evidence — sequence events; compare past and
  present; identify kinds of historical sources; ask questions about people who
  shaped change; compare accounts of the same event
- Citizenship — explain purposes of rules; describe roles of people in
  authority; apply civic virtues; make group decisions through listening,
  discussion, consensus, and voting
- Economic choices — explain scarcity and decision making; weigh benefits and
  costs; describe work, skills, income, prices, saving, and trade
- Communities and movement — explain why and how people, goods, and ideas
  move; identify cultural and environmental characteristics of communities;
  compare viewpoints
- Evidence and communication — with adult support, gather information from one
  or two sources; distinguish fact from opinion; build arguments with reasons
  and sequenced explanations; present summaries orally, with drawings, or with
  digital tools
- Informed action — describe how people improved communities; identify ways to
  help with a local problem

The diagnostic weeks (Weeks 1–2) verify these — especially map-key/legend
reading at multi-state scale, timeline sequencing across centuries, and
benefit/cost weighing. Unit 01 re-teaches map tools (scale, grid, region
boundaries) rather than assuming they are secure; Unit 07 re-teaches source
kinds at the historical scale before asking for perspective comparisons.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Do geographic inquiry at U.S.-regional scale (D2.Geo.1–3.3-5)
2. Explain how environment shapes U.S. regions and Indigenous nations' ways of life (D2.Geo.2, 4–6, 8, 10.3-5)
3. Explain movement: exploration routes, migration, and trade exchange (D2.Geo.7, 11.3-5; D2.His.14.3-5)
4. Take multiple perspectives on encounters, colonial life, and civic issues (D2.His.4, 5.3-5; D2.Civ.10.3-5)
5. Work with historical evidence: timelines, sources, causes, claims about the past (D2.His.1, 2, 9–13, 16.3-5)
6. Understand state and local government; explain rights and responsibilities (D2.Civ.1–5, 12.3-5; D2.Eco.12.3-5)
7. Reason economically: resources, specialization, industry, regional economies, interdependence (D2.Eco.1–5, 7, 8, 14, 15.3-5)
8. Explain how catastrophic events affect settlements and people in other places (D2.Geo.9, 12.3-5)
9. Inquire and argue from evidence (D1.2–1.5; D3.1–3.4; D4.1–4.3.3-5)
10. Take informed action on a community or regional problem (D4.6–4.8.3-5)

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (National Council for the Social Studies),
grades 3–5 band. The framework's four Dimensions (Developing Questions and
Planning Inquiries; Applying Disciplinary Tools and Concepts — civics,
economics, geography, history; Evaluating Sources and Using Evidence;
Communicating Conclusions and Taking Informed Action) were re-confirmed on the
NCSS C3 landing page 2026-10-04; indicator codes and descriptions below carry
over from the merged grade-3 audit, verified against the framework's 3–5
indicator tables 2026-10-03. **No state adoption, accreditation, or alignment
certification is claimed.** The 3–5 band spans three grades; this track teaches
each indicator at the grade-4 mid-band level. Indicators the framework defers
to later bands — D2.His.7.3-5 and D2.His.8.3-5 (begin in grades 9–12),
D2.His.15.3-5 (begins in grades 6–8) — are not taught in this track. Grade 4
picks up D2.Geo.9, D2.Geo.12, and D2.Eco.15, which the grade-3 audit held for
this grade.

### Dimension 1 — Developing Questions and Planning Inquiries

| Code | Indicator | Track use |
|---|---|---|
| D1.1.3-5 | Explain why compelling questions are important to others (e.g., peers, adults). | U08 capstone framing |
| D1.2.3-5 | Identify disciplinary concepts and ideas associated with a compelling question that are open to different interpretations. | U01, U03, U08 |
| D1.3.3-5 | Identify the disciplinary concepts and ideas associated with a supporting question that are open to interpretation. | U03, U06, U08 |
| D1.4.3-5 | Explain how supporting questions help answer compelling questions in an inquiry. | U03, U08 |
| D1.5.3-5 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions, taking into consideration the different opinions people have about how to answer the questions. | U06, U08 |

### Dimension 2 — Civics

| Code | Indicator | Track use |
|---|---|---|
| D2.Civ.1.3-5 | Distinguish the responsibilities and powers of government officials at various levels and branches of government and in different times and places. | U05 (state/local focus) |
| D2.Civ.2.3-5 | Explain how a democracy relies on people's responsible participation, and draw implications for how individuals should participate. | U05, U08 |
| D2.Civ.3.3-5 | Examine the origins and purposes of rules, laws, and key U.S. constitutional provisions. | U03, U04, U05 |
| D2.Civ.4.3-5 | Explain how groups of people make rules to create responsibilities and protect freedoms. | U05 |
| D2.Civ.5.3-5 | Explain the origins, functions, and structure of different systems of government, including those created by the U.S. and state constitutions. | U05 |
| D2.Civ.6.3-5 | Describe ways in which people benefit from and are challenged by working together, including through government, workplaces, voluntary organizations, and families. | U04, U08 |
| D2.Civ.7.3-5 | Apply civic virtues and democratic principles in school settings. | U05, U08 |
| D2.Civ.8.3-5 | Identify core civic virtues and democratic principles that guide government, society, and communities. | U05, U08 |
| D2.Civ.9.3-5 | Use deliberative processes when making decisions or reaching judgments as a group. | U05, U08 |
| D2.Civ.10.3-5 | Identify the beliefs, experiences, perspectives, and values that underlie their own and others' points of view about civic issues. | U02, U03, U05, U08 |
| D2.Civ.11.3-5 | Compare procedures for making decisions in a variety of settings, including classroom, school, government, and/or society. | U05, U08 |
| D2.Civ.12.3-5 | Explain how rules and laws change society and how people change rules and laws. | U05, U07 |
| D2.Civ.13.3-5 | Explain how policies are developed to address public problems. | U05, U08 |
| D2.Civ.14.3-5 | Illustrate historical and contemporary means of changing society. | U07, U08 |

### Dimension 2 — Economics

| Code | Indicator | Track use |
|---|---|---|
| D2.Eco.1.3-5 | Compare the benefits and costs of individual choices. | U06 |
| D2.Eco.2.3-5 | Identify positive and negative incentives that influence the decisions people make. | U04, U06 |
| D2.Eco.3.3-5 | Identify examples of the variety of resources (human capital, physical capital, and natural resources) that are used to produce goods and services. | U04, U06 |
| D2.Eco.4.3-5 | Explain why individuals and businesses specialize and trade. | U04, U06 |
| D2.Eco.5.3-5 | Explain the role of money in making exchange easier. | U04, U06 |
| D2.Eco.7.3-5 | Explain how profits influence sellers in markets. | U06 |
| D2.Eco.8.3-5 | Identify examples of external benefits and costs. | U06 |
| D2.Eco.12.3-5 | Explain the ways in which the government pays for the goods and services it provides. | U05 |
| D2.Eco.14.3-5 | Explain how trade leads to increasing economic interdependence among nations. | U03, U06 |
| D2.Eco.15.3-5 | Explain the effects of increasing economic interdependence on different groups within participating nations. | U06 (held for grade 4; was enrichment at grade 3) |

### Dimension 2 — Geography

| Code | Indicator | Track use |
|---|---|---|
| D2.Geo.1.3-5 | Construct maps and other graphic representations of both familiar and unfamiliar places. | U01 |
| D2.Geo.2.3-5 | Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics. | U01, U02 |
| D2.Geo.3.3-5 | Use maps of different scales to describe the locations of cultural and environmental characteristics. | U01 |
| D2.Geo.4.3-5 | Explain how culture influences the way people modify and adapt to their environments. | U02 |
| D2.Geo.5.3-5 | Explain how the cultural and environmental characteristics of places change over time. | U02, U07 |
| D2.Geo.6.3-5 | Describe how environmental and cultural characteristics influence population distribution in specific places or regions. | U02, U06 |
| D2.Geo.7.3-5 | Explain how cultural and environmental characteristics affect the distribution and movement of people, goods, and ideas. | U03, U06 |
| D2.Geo.8.3-5 | Explain how human settlements and movements relate to the locations and use of various natural resources. | U02, U06 |
| D2.Geo.9.3-5 | Analyze the effects of catastrophic environmental and technological events on human settlements and migration. | U07 (held for grade 4; adult-guided, observation-level) |
| D2.Geo.10.3-5 | Explain why environmental characteristics vary among different world regions. | U01, U06 |
| D2.Geo.11.3-5 | Describe how the spatial patterns of economic activities in a place change over time because of interactions with nearby and distant places. | U04, U06 |
| D2.Geo.12.3-5 | Explain how natural and human-made catastrophic events in one place affect people living in other places. | U07 (held for grade 4; adult-guided) |

### Dimension 2 — History

| Code | Indicator | Track use |
|---|---|---|
| D2.His.1.3-5 | Create and use a chronological sequence of related events to compare developments that happened at the same time. | U03, U07 |
| D2.His.2.3-5 | Compare life in specific historical time periods to life today. | U02, U04, U07 |
| D2.His.3.3-5 | Generate questions about individuals and groups who have shaped significant historical changes and continuities. | U03, U07, U08 |
| D2.His.4.3-5 | Explain why individuals and groups during the same historical period differed in their perspectives. | U02, U03, U04 |
| D2.His.5.3-5 | Explain connections among historical contexts and people's perspectives at the time. | U02, U03, U04 |
| D2.His.6.3-5 | Describe how people's perspectives shaped the historical sources they created. | U03, U07 |
| D2.His.9.3-5 | Summarize how different kinds of historical sources are used to explain events in the past. | U07 |
| D2.His.10.3-5 | Compare information provided by different historical sources about the past. | U03, U07 |
| D2.His.11.3-5 | Infer the intended audience and purpose of a historical source from information within the source itself. | U03, U07 |
| D2.His.12.3-5 | Generate questions about multiple historical sources and their relationships to particular historical events and developments. | U07, U08 |
| D2.His.13.3-5 | Use information about a historical source, including the maker, date, place of origin, intended audience, and purpose to judge the extent to which the source is useful for studying a particular topic. | U07 (adult-guided), U08 |
| D2.His.14.3-5 | Explain probable causes and effects of events and developments. | U02, U03, U04, U07 |
| D2.His.16.3-5 | Use evidence to develop a claim about the past. | U07, U08 |
| D2.His.17.3-5 | Summarize the central claim in a secondary work of history. | U07 (adult-guided, enrichment) |

### Dimensions 3–4 — Evidence, communication, informed action

| Code | Indicator | Track use |
|---|---|---|
| D3.1.3-5 | Gather relevant information from multiple sources while using the origin, structure, and context to guide the selection. | U06, U07, U08 |
| D3.2.3-5 | Use distinctions among fact and opinion to determine the credibility of multiple sources. | U03, U07 |
| D3.3.3-5 | Identify evidence that draws information from multiple sources in response to compelling questions. | U07, U08 |
| D3.4.3-5 | Use evidence to develop claims in response to compelling questions. | U08 |
| D4.1.3-5 | Construct arguments using claims and evidence from multiple sources. | U08 |
| D4.2.3-5 | Construct explanations using reasoning, correct sequence, examples, and details with relevant information and data. | U03, U07, U08 |
| D4.3.3-5 | Present a summary of arguments and explanations to others outside the classroom using print and oral technologies (e.g., posters, essays, letters, debates, speeches, and reports) and digital technologies. | U08 — presentations stay within adult-supervised settings; nothing is published from this track without the guiding adult's review |
| D4.4.3-5 | Critique arguments. | U08 (peer-review routine, adult-guided) |
| D4.5.3-5 | Critique explanations. | U08 (peer-review routine, adult-guided) |
| D4.6.3-5 | Draw on disciplinary concepts to explain the challenges people have faced and opportunities they have created, in addressing local, regional, and global problems at various times and places. | U07, U08 |
| D4.7.3-5 | Explain different strategies and approaches students and others could take in working alone and together to address local, regional, and global problems, and predict possible results of their actions. | U08 capstone |
| D4.8.3-5 | Use a range of deliberative and democratic procedures to make decisions about and act on civic problems in their classrooms and schools. | U05, U08 |

## 5. Eight-unit sequence with weekly pacing

Model: four ~35-minute sessions per week. Each unit = 4 weeks = 16 sessions:
**S1** concept launch (explicit explanation + modeled example), **S2** skills
practice (guided then independent), **S3** investigation/application (map work,
source work, data work, or deliberation), **S4** review and unit check. Eight
units give 32 weeks; four flexible weeks cover diagnostic (2), midyear review
(1), and final review (1), totaling 36 weeks / 144 sessions.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry map skills at multi-state scale | S1: label a U.S. outline map (title, key, compass rose, cardinal directions, bordering countries); S2: guided re-teach of weak map elements; S3: describe a place using a state map + photograph; S4: short map-skills check |
| 2 | Verify entry timeline, rule-purpose, and economic-choice skills | S1: sequence 6–8 events spanning centuries on a timeline; S2: explain why two familiar rules or laws exist; S3: weigh benefits/costs of a historical or community choice (scenario cards); S4: diagnostic review — adult records gaps that U01–U07 re-teach |

### U01 — Geographic tools, U.S. regions, and map evidence (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Use geographic tools: compass rose, scale, grid, key, and map evidence | S1: launch — how geographers read maps (scale, direction, symbols, evidence claims); S2: practice reading scale and direction on U.S. maps; S3: investigation — find two cities with a scale bar and a grid, justify with map evidence; S4: review + check |
| 4 | Identify the four U.S. regions and their environmental characteristics | S1: regions overview (Northeast, Midwest, South, West) with relief/climate maps; S2: practice — sort states into regions from the `us_states.csv` region column and justify with map evidence; S3: region profile task — environment, landmarks, one fact per region; S4: review + check |
| 5 | Locate oceans, seas, and capitals on maps; model time zones | S1: oceans/seas and the five-ocean convention; globe-and-lamp day/night model (kept `time-zones-explanation.md` assignment); S2: practice labeling oceans and comparing time-zone maps; S3: investigation — same moment, three cities: what time is it and why?; S4: review + check |
| 6 | Compare regions with data; begin the five-states report | S1: dataset launch — read `us_states.csv` columns (capital, population_approx, area, density, statehood year) and note what "approx" means; S2: practice comparing two states by area, population, density; S3: begin the kept `creed-five-states-report.md` assignment (5 never-visited states); S4: unit review + U01 assessment |

### U02 — Indigenous nations: geography and historical perspectives (Weeks 7–10)

Sensitive-content note: Indigenous peoples are not a past-tense topic. Nations
are named as living communities with homelands; the adult selects sources with
Indigenous authorship or museum/tribal sources where available. Avoid
stereotypes; every culture-area study includes a present-day connection.
Perspectives work (D2.His.4, 5.3-5) runs adult-guided throughout.

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain how geography shaped Indigenous nations' ways of life | S1: launch — culture areas (Arctic, Northwest Coast, Plateau, Great Plains, Eastern Woodlands, Southeast, Southwest, California) with environment maps; S2: practice matching environmental features to ways of life (food, shelter, travel); S3: investigation — one nation, one environment: how did people adapt and modify?; S4: review + check |
| 8 | Compare two nations' adaptations with map and source evidence | S1: modeled comparison (e.g., Northwest Coast vs. Southwest, with environment evidence); S2: practice — two-column evidence chart for a second pair; S3: map-and-photograph task — locate homelands, trace water and trade routes; S4: review + check |
| 9 | Explain why people in the same period held different perspectives | S1: two perspectives on one event or place (original age-appropriate accounts, adult-selected); S2: practice naming each perspective and its reasons; S3: perspective task — explain one event from one viewpoint with evidence; S4: review + check |
| 10 | Connect historical contexts to perspectives; sequence regional change | S1: context → perspective chains (how a nation's situation shaped its choices); S2: practice cause/effect with map evidence; S3: then/now task — one homeland's changes over time (adult-selected sources); S4: unit review + U02 assessment |

### U03 — Exploration, encounters, exchange, and consequences (Weeks 11–14)

Sensitive-content note: exploration is taught as encounter, not discovery — the
lands and peoples encountered had names, governments, and histories. Conquest,
disease, and enslavement are addressed honestly at an age-appropriate level
with adult guidance; no heroic framing of explorers; every voyage is examined
from at least two perspectives.

| Week | Goal | Sessions |
|---|---|---|
| 11 | Build timelines of exploration routes; read route maps as evidence | S1: timeline launch — 1400s–1600s voyages (adult-selected explorers: Columbus, Cabot, Cartier, de Soto, Hudson) with route maps; S2: practice sequencing voyage events and comparing simultaneous developments; S3: route-map investigation — what did each expedition seek, and what did it find?; S4: review + check |
| 12 | Explain the Columbian Exchange: movement of people, goods, ideas, disease | S1: exchange launch — crops, animals, technology, disease moving both directions; S2: practice tracing one item's journey (e.g., maize to Europe, horses to the Plains); S3: consequence chains — one exchange, its probable effects on each side; S4: review + check |
| 13 | Compare sources about the same encounter; infer audience and purpose | S1: two accounts of one encounter — what agrees, what differs, who wrote each and why; S2: practice inferring audience/purpose from clues inside the source; S3: fact-vs.-opinion work in encounter texts; S4: review + check |
| 14 | Explain probable causes and effects; use evidence for a claim | S1: cause/effect for one region's transformation after contact; S2: practice turning source evidence into a claim with reasons; S3: mini-exhibit — claim + two pieces of evidence (writing/drawing/oral); S4: unit review + U03 assessment |

### U04 — Colonial regions, communities, and economic life (Weeks 15–18)

Sensitive-content note: colonial economic life included enslaved labor. The
adult introduces this honestly and plainly at an age-appropriate level —
people were forced to work without freedom or pay, which is why it is named
plainly — and the guiding adult pre-selects all sources. No graphic detail;
focus stays on systems (labor, crops, trade) and on the people who resisted.

| Week | Goal | Sessions |
|---|---|---|
| 15 | Compare the three colonial regions: environment, settlement, daily life | S1: launch — New England, Middle, Southern colonies with environment maps; S2: practice matching regional features to ways of life; S3: then/now-style task — compare colonial daily life to life today (D2.His.2.3-5); S4: review + check |
| 16 | Explain colonial economic life: resources, specialization, trade | S1: cash crops, crafts, shipping — who produced what and why it grew there; S2: practice production chains (e.g., tobacco: field → port → ship); S3: specialization and trade task — why regions traded with each other and with Europe; S4: review + check |
| 17 | Trace how money and trade connected colonies to the wider world | S1: barter → money → credit in colonial exchange (adult-level: `supply_and_demand_economics.md` scarcity basics); S2: practice — what made exchange easier and who it served; S3: coins as evidence — the kept `currency-history-research.md` assignment begins (official-mint verification); S4: review + check |
| 18 | Explain how economic patterns changed through interaction; origins of self-rule | S1: pattern change — how ports and trade routes reshaped settlement (D2.Geo.11.3-5); S2: practice — how colonial assemblies and town meetings began (origins of rules, D2.Civ.3.3-5); S3: perspective task — the same colonial event from a settler's and an Indigenous or enslaved person's viewpoint (adult-guided); S4: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review: map tools and regions, exploration timelines, encounter perspectives, colonial economies — re-check diagnostic gaps |
| S3 | Catch-up session for unfinished investigations (five-states report, coin research) or re-teaching per adult judgment |
| S4 | Midyear check: one map task, one source-comparison task, one economic-reasoning task — adult records progress toward track objectives |

### U05 — State and local government: rights and responsibilities (Weeks 20–23)

| Week | Goal | Sessions |
|---|---|---|
| 20 | Distinguish levels and branches of government; name state and local officials' jobs | S1: national → state → local with concrete officials (president/governor/mayor, legislators, judges) and what each does; S2: practice matching jobs to officials; S3: investigation — which level handles which community need? (scenario sort); S4: review + check |
| 21 | Explain rights and responsibilities; how groups make rules that protect freedoms | S1: rights learners hold + responsibilities that pair with them; the kept rights-responsibilities quiz material as teaching (Bill of Rights, 13th/19th Amendments, federalism, territories); S2: practice — is this situation fair? (scenario cards with reasons); S3: deliberation — write a fair classroom rule with a reason; S4: review + check |
| 22 | Explain how a bill becomes a law; how government pays for services | S1: bill-to-law steps (kept three-branches quiz as practice bank); taxes → services chain (roads, schools, parks, firefighters) — D2.Eco.12.3-5; S2: practice tracing one tax dollar to one service; S3: kept `government-agencies-departments-quiz.md` as guided practice — who does what day to day; S4: review + check |
| 23 | Explain how democracy relies on participation; how people change laws | S1: participation forms — voting, speaking up, helping, serving; the kept `civic-voting-research.md` assignment (26th Amendment, educator-selected reading); S2: practice comparing decision procedures (consensus, vote, leader decides); S3: policy task — propose a classroom/school policy for a real problem, with steps (D2.Civ.13.3-5); S4: unit review + U05 assessment |

### U06 — Resources, migration, industry, and regional economies (Weeks 24–27)

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain how natural resources shape regional economies | S1: resource launch — human, physical, and natural resources in each U.S. region (farming, forests, minerals, water, energy); S2: practice classifying resources in production chains; S3: resource map task — where does your region's economy come from? (`us_states.csv` region data); S4: review + check |
| 25 | Explain why people and businesses specialize and trade; profits and incentives | S1: specialization — why regions don't make everything themselves; profit and incentives with a lemonade-stand-scale model; S2: practice benefit/cost charts and predicting seller choices; S3: external effects — who else is affected by a new factory or farm? (D2.Eco.8.3-5); S4: review + check |
| 26 | Explain migration: why people move, and how movement changes places | S1: push/pull factors with age-appropriate migration stories (westward movement, Great Migration, immigration — adult-selected); S2: practice sorting push vs. pull and tracing routes on maps; S3: movement-of-ideas task — how one practice, food, or custom traveled (map trace); S4: review + check |
| 27 | Explain trade, interdependence, and how interdependence affects different groups | S1: interdependence web — goods from many places in one home; D2.Eco.14.3-5 and D2.Eco.15.3-5 (who benefits, who is harmed); S2: practice mapping a product's journey across regions; S3: basic currency-identification task from the revised forex material (what money different countries use and why it matters for trade) — enrichment only; S4: unit review + U06 assessment |

### U07 — Historical sources, timelines, and regional change (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Summarize how different kinds of historical sources explain the past | S1: source kinds at historical scale — artifacts, coins, photographs, maps, documents, oral accounts; the kept `civil-rights-movement.md` template introduced (adult-approved source); S2: practice matching research questions to useful source kinds; S3: source examination — what is it, who made it, when, for whom (adult-guided); S4: review + check |
| 29 | Compare sources about the same past event; judge usefulness | S1: two sources, one event — agreement, difference, audience, purpose; S2: practice D2.His.13.3-5 source-usefulness judgments (maker, date, origin, audience, purpose); S3: fact-vs.-opinion credibility work in historical texts; S4: review + check |
| 30 | Build timelines of regional change; explain causes and effects | S1: timeline of one region's change (e.g., a city or industry over a century); S2: practice probable cause/effect chains; S3: coins-and-documents task — complete the kept `currency-history-research.md` coin evidence work; S4: review + check |
| 31 | Explain how catastrophic events affect settlements and distant people | S1: catastrophic events, observation-level (e.g., Dust Bowl migration, a hurricane's regional effects) — D2.Geo.9, 12.3-5, adult-guided; S2: practice tracing one event's effects near and far; S3: change-summary task — what changed, for whom, what evidence shows it; S4: unit review + U07 assessment |

### U08 — Regional history and community inquiry capstone (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame the capstone: a compelling question about the learner's own region | S1: launch — choose the compelling question (e.g., "How has our region changed in the last 100 years, and who shaped that change?"); S2: practice writing supporting questions; S3: source planning — which sources (maps, photos, interviews, documents) answer our questions; S4: review + check |
| 33 | Gather evidence from multiple sources; develop a claim about the region's past | S1: guided source gathering (adult-supervised; interviews stay private); S2: practice evidence charting — claim, evidence, source; S3: drafting the regional-history account; S4: review + check |
| 34 | Construct arguments and explanations; peer-review with adult guidance | S1: build the argument — claim + evidence + reasoning (D4.1–4.2.3-5); S2: peer-review routine — kind, specific, evidence-based feedback (D4.4–4.5.3-5); S3: revision; S4: review + check |
| 35 | Present the inquiry; deliberate and act on a community problem | S1: presentation preparation (poster, talk, or digital summary — adult-supervised setting only); S2: presentations; S3: civic action — use a democratic procedure to decide one real classroom/school improvement (D4.7–4.8.3-5); S4: unit review + U08 assessment |

### Week 36 — Final review and portfolio

| Sessions | Goal |
|---|---|
| S1 | Spiral review: map tools, regions, timelines, sources, economic choices, government levels |
| S2 | Portfolio assembly — learner selects best map, timeline, claim-with-evidence, and deliberation reflection (adult keeps the portfolio private) |
| S3 | Final check: one task per track-objective cluster, adult-scored against the track objectives |
| S4 | Celebration and next-year preview — where grade-5 social studies picks up |

## 6. Internal resource reuse plan

- `resources/government_basics.md` and
  `resources/united_states_understanding_and_principles.md`: adult-side
  references behind U03–U05 teacher guides — never assigned as learner reading.
- `resources/supply_and_demand_economics.md`: adult-side reference for U04's
  colonial economic life and U06's markets; its macro sections are out of scope.
- `resources/world_facts.md` (on main): U01/U06 geography data; continent,
  ocean, capital, and fairway sections verified present; commodity leader
  lists are labeled 2025 snapshots and must be re-checked during authoring;
  **the quiz-cited Crude Oil and Gold sections do not exist** — any
  energy/metals quiz material must be rebuilt against verified sources.
- `resources/us_states.csv` (U01, U06): columns `name_common, usps, capital,
  region, subregion, population_approx, area_sq_mi, population_density_per_sq_mi,
  statehood_year, biggest_city, state_fact` — task instructions will name the
  exact columns, note that populations/areas are rounded approximations, and
  treat `state_fact` as unverified until checked during authoring.
- `resources/un_countries.csv` / `.json` (U01 region comparisons): columns
  `name_common, region, subregion, capital` are usable; the `population` column
  is currently empty and must not be used until filled from a verified source.
- `resources/black_excellence_figures.md`: adult pre-selects 2–3
  age-appropriate figures for U07/U08 research tasks.
- `teachers/ai-assistants/resource_finder.md`: drives each unit's Resource
  Pack (3–6 queries, 3–7 curated or labeled-search videos, 4–7 reputable
  references, task-to-resource mapping, check dates).

## 7. Accessibility supports (built into every unit)

- Map/diagram work: color is always paired with symbols and text labels; every
  image ships with alt text and a text-only description of the same
  information.
- Response modes: oral, pointing, drawing, and manipulative options for map and
  timeline tasks; the adult scribes written explanations whenever writing is
  not the assessed skill.
- Reading: original passages are written at grade-4 level; vocabulary is
  pre-taught; key terms appear with kid-friendly definitions in each lesson.
- Video/media (unit Resource Packs): captions or transcripts required; the
  adult previews for ads, age suitability, and accuracy.
- Deliberation and presentation: sentence starters, choice boards, and
  small-group formats; no learner is required to speak publicly beyond the
  adult-supervised setting.
- Sensitive history (U02–U04, U07): perspectives are taught through
  adult-selected, age-appropriate sources with at least two viewpoints on every
  encounter; difficult topics (conquest, enslavement, displacement) are named
  honestly and plainly, never glossed and never graphic.

## 8. What the unit sections must deliver (for future runs)

Per `unit-requirements.md` and the track issue, each of U01–U08 needs: unit
README with objectives/prerequisites/vocabulary/standards notes and 16-session
pacing; 4–6 fully written lessons (explanations, ≥2 worked/modeled examples
each, guided + independent practice, applied task, exit check, supports,
extensions); a project/investigation with rubric; formative quiz and
culminating assessment; **separate** teacher guides and answer keys (every
question solved independently and reconciled); a verified Resource Pack; and at
least one genuinely generated raster image embedded in an activity with alt
text, caption, and an `assets/` generation record. R00 then delivers the
diagnostic, midyear/final reviews, cumulative assessment with keys, and a full
coherence/accessibility/sources/image/manifest audit.

Concrete paths:
- **U01 next:** author the U.S.-regions dataset task against `us_states.csv`
  columns; write the time-zone investigation around the kept assignment; decide
  the comparison region for the world-regions task (verify `un_countries.csv`
  region data).
- **U02:** adult-select culture-area sources with Indigenous authorship or
  museum/tribal sources; pre-write the perspective clue sets.
- **U03:** select the explorers and the encounter sources; pre-write the
  two-account comparison sets with audience/purpose clues.
- **U04:** draft the production-chain materials and the coin-evidence task
  around `currency-history-research.md`; confirm the enslavement framing note
  with the adult.
- **U05:** write the state/local-official scenario sort and the classroom
  deliberation protocol against `government_basics.md`.
- **U06:** adult-select the migration stories; build the regional-economy
  resource map task; verify any commodity figures used (no 2025 snapshots as
  stable facts).
- **U07:** adult-select the region-change topic and 2–3 contrasting sources;
  pre-write the source-usefulness clue sets; confirm the catastrophic-event
  case (observation-level, adult-guided).
- **U08:** write the peer-review routine and the civic-action decision
  procedure; confirm portfolio-privacy handling with the adult.

## Verification record

- All 22 track files read in full; relative links spot-checked
  (`../../../../resources/...` resolves correctly from `assignments/`,
  `quizzes/`, and `templates/`).
- `resources/world_facts.md` on `main` checked section by section: "Crude Oil"
  and "Gold" sections absent (dangling reference in
  `global-energy-precious-metals-quiz.md`); "Strategic Fairways (Chokepoints)"
  heading differs from the quiz's cited "Critical Global Chokepoints" title;
  commodity leaders labeled 2025 snapshots.
- `resources/us_states.csv` header row verified on `main` (2026-10-04):
  `name_common, name_official, usps, capital, region, subregion,
  population_approx, area_sq_mi, area_sq_km, population_density_per_sq_mi,
  statehood_year, biggest_city, biggest_city_population, state_fact,
  google_maps_url`.
- C3 Framework: four Dimensions and the D2 sub-strands
  (civics, economics, geography, history) re-confirmed on
  https://www.socialstudies.org/standards/c3 (2026-10-04); indicator codes and
  descriptions carried over from the merged grade-3 audit's 2026-10-03
  verification of the framework's 3–5 indicator tables.
- No copyrighted text reproduced in any track file. No state adoption,
  accreditation, or alignment certification is claimed anywhere in this track.
