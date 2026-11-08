# Grade 3 Social Studies — Scope and Sequence

Audit section A00 of [issue #21](https://github.com/murderszn/open-tutor/issues/21).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-3 hub page | `curriculum/grade-3/README.md` (main) | **Revise** — updated to reflect the social studies track's audit status and link the new subject folder |
| Grade-3 social studies folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade social studies content | none (0 Markdown files under `curriculum/grade-3/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#18, audit delivered as draft PR #75) | `curriculum/grade-3/math/` | **Reference only** — session model (4 × ~30 min sessions/week) reused as pattern; no math content reused |
| Same-grade science track (#19, audit delivered as draft PR #76) | `curriculum/grade-3/science/` | **Reference only** — no content borrowed; Unit 01 map-scale work may later coordinate with science measurement recording, but no science content reused |
| Same-grade language arts track (#20, audit delivered as draft PR #77) | `curriculum/grade-3/language-arts/` | **Reference only** — note-taking, sequencing words, and discussion routines will align with its informational-reading work; no LA content reused |
| Grade-2 social studies track (#17, audit delivered as draft PR #74) | `curriculum/grade-2/social-studies/` | **Prerequisite reference only** — grade-2 end-of-year objectives define entry expectations (see §2); no grade-2 material copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/social-studies/` etc. | **No reuse for grade-3 instruction** — existing material targets ages 9+ and is marked expand/review; kept as reference for where the track leads |
| `resources/government_basics.md` | three branches, agencies, kid-friendly bullets | **Adult-side reference** — the adult uses its accurate branch/agency definitions behind Unit 04 teacher guides (D2.Civ.1.3-5, D2.Civ.5.3-5); its kid-friendly bullets are written above grade-3 reading level and are adapted, not assigned |
| `resources/united_states_understanding_and_principles.md` | colonies-to-Constitution overview | **Adult-side reference** — background for Unit 07's rules/laws/constitutional-provisions work (D2.Civ.3.3-5); learner-facing passages will be original and grade-3-appropriate |
| `resources/supply_and_demand_economics.md` | supply/demand, scarcity, kid-friendly lemonade-stand examples | **Adult-side reference** — informs Unit 05's scarcity, choice, and trade work (D2.Eco.1–4.3-5); the guide's macro sections (inflation, unemployment, GDP) are out of scope for grade 3 |
| `resources/world_facts.md` | continents, countries, economies snapshot (**expansion-plan branch only, not on main**) | **Must be merged to main before Unit 01** — snapshot populations are 2025 estimates and must be re-checked during unit authoring; un_countries.csv population column is empty, so this guide is not a data source until verified |
| `resources/us_states.csv` | columns: name_common, name_official, usps, capital, region, subregion, population_approx, area_sq_mi, area_sq_km, population_density_per_sq_mi, statehood_year, biggest_city, biggest_city_population, state_fact, google_maps_url | **Candidate for U01/U02 dataset tasks** — column names, approximate units, and rounded values are named explicitly at task time; statehood years verified during authoring; `state_fact` one-liners checked before use |
| `resources/un_countries.csv` / `.json` | columns: name_common, name_official, cca2, cca3, ccn3, region, subregion, capital, population, area_km2, lat, lng, un_status, independent, google_maps_url | **Candidate for U06 region-comparison tasks** — population column is empty in the current snapshot, so any population work waits for verified figures; region/subregion/capital columns are usable |
| `resources/us_presidents.csv` | U.S. presidents dataset | **No grade-3 reuse** — presidency-level content is above this band; may support U07 teacher-side background only |
| `resources/black_excellence_figures.md` | research guide to Black historical and modern figures | **Adult-side reference** — the adult pre-selects age-appropriate figures for U06/U07 research tasks (perspectives, historical change); the guide's entries are not assigned as learner reading |
| `resources/wars_fundamentals.md` | wars overview | **No grade-3 reuse** — content skews far above this band; U07 covers historical change through community-scale topics |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit sections** — external starting points only; each candidate link opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| Shared `assignments/` | social-studies assignments target older bands | **No reuse** — nothing at the grade-3 band |

No existing grade-3 social studies material was inaccurate or inappropriate; there
was simply none. No keep decisions beyond the hub page; everything substantive
is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-3 social studies with (the grade-2 track's
end-of-year objectives, from its delivered draft audit):

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
reading, timeline sequencing, rule-purpose explanations, and benefit/cost
weighing. Unit 01 re-teaches map construction and scale rather than assuming
they are secure; Unit 03 re-teaches source kinds before asking for comparisons.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Do geographic inquiry (D2.Geo.1–3.3-5)
2. Explain people–environment connections (D2.Geo.4–6, 8, 10.3-5)
3. Explain movement and interdependence (D2.Geo.7, 11.3-5)
4. Work with historical evidence (D2.His.1, 2, 9–11, 13, 14, 16.3-5)
5. Take perspectives seriously (D2.His.4, 5.3-5; D2.Civ.10.3-5)
6. Understand government (D2.Civ.1, 3–5.3-5)
7. Participate as a citizen (D2.Civ.2, 6, 7, 9, 11–14.3-5)
8. Reason economically (D2.Eco.1–5, 7, 8, 12, 14.3-5)
9. Inquire and argue from evidence (D1.2–1.5; D3.1–3.4; D4.1–4.3.3-5)
10. Take informed action (D4.6–4.8.3-5)

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (National Council for the Social Studies),
grades 3–5 band. Codes and descriptions below were verified against the
framework's 3–5 indicator tables (NCSS-published grades 3–5 standards table,
opened and read 2026-10-03; full framework PDF cross-checked for Dimension 2
wording the same day). **No state adoption, accreditation, or alignment
certification is claimed.** The 3–5 band spans three grades; this track teaches
each indicator at the grade-3 entry level. Indicators the framework defers to
later bands — D2.His.7.3-5 and D2.His.8.3-5 (begin in grades 9–12),
D2.His.15.3-5 (begins in grades 6–8) — are not taught in this track.

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
| D2.Civ.1.3-5 | Distinguish the responsibilities and powers of government officials at various levels and branches of government and in different times and places. | U04 |
| D2.Civ.2.3-5 | Explain how a democracy relies on people's responsible participation, and draw implications for how individuals should participate. | U04, U07 |
| D2.Civ.3.3-5 | Examine the origins and purposes of rules, laws, and key U.S. constitutional provisions. | U04, U07 |
| D2.Civ.4.3-5 | Explain how groups of people make rules to create responsibilities and protect freedoms. | U04 |
| D2.Civ.5.3-5 | Explain the origins, functions, and structure of different systems of government, including those created by the U.S. and state constitutions. | U04 |
| D2.Civ.6.3-5 | Describe ways in which people benefit from and are challenged by working together, including through government, workplaces, voluntary organizations, and families. | U04, U07 |
| D2.Civ.7.3-5 | Apply civic virtues and democratic principles in school settings. | U04, U07, U08 |
| D2.Civ.8.3-5 | Identify core civic virtues and democratic principles that guide government, society, and communities. | U07 |
| D2.Civ.9.3-5 | Use deliberative processes when making decisions or reaching judgments as a group. | U04, U08 |
| D2.Civ.10.3-5 | Identify the beliefs, experiences, perspectives, and values that underlie their own and others' points of view about civic issues. | U06, U07 |
| D2.Civ.11.3-5 | Compare procedures for making decisions in a variety of settings, including classroom, school, government, and/or society. | U04, U08 |
| D2.Civ.12.3-5 | Explain how rules and laws change society and how people change rules and laws. | U04, U07 |
| D2.Civ.13.3-5 | Explain how policies are developed to address public problems. | U04, U08 |
| D2.Civ.14.3-5 | Illustrate historical and contemporary means of changing society. | U07, U08 |

### Dimension 2 — Economics

| Code | Indicator | Track use |
|---|---|---|
| D2.Eco.1.3-5 | Compare the benefits and costs of individual choices. | U05 |
| D2.Eco.2.3-5 | Identify positive and negative incentives that influence the decisions people make. | U05 |
| D2.Eco.3.3-5 | Identify examples of the variety of resources (human capital, physical capital, and natural resources) that are used to produce goods and services. | U02, U05 |
| D2.Eco.4.3-5 | Explain why individuals and businesses specialize and trade. | U05 |
| D2.Eco.5.3-5 | Explain the role of money in making exchange easier. | U05 |
| D2.Eco.6.3-5 | Explain the relationship between investment in human capital, productivity, and future incomes. | Background only — not taught at grade 3 |
| D2.Eco.7.3-5 | Explain how profits influence sellers in markets. | U05 |
| D2.Eco.8.3-5 | Identify examples of external benefits and costs. | U05 |
| D2.Eco.12.3-5 | Explain the ways in which the government pays for the goods and services it provides. | U04 |
| D2.Eco.14.3-5 | Explain how trade leads to increasing economic interdependence among nations. | U05, U06 |
| D2.Eco.15.3-5 | Explain the effects of increasing economic interdependence on different groups within participating nations. | Enrichment only — the full-group analysis is held for grade 4 |

### Dimension 2 — Geography

| Code | Indicator | Track use |
|---|---|---|
| D2.Geo.1.3-5 | Construct maps and other graphic representations of both familiar and unfamiliar places. | U01 |
| D2.Geo.2.3-5 | Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics. | U01, U02 |
| D2.Geo.3.3-5 | Use maps of different scales to describe the locations of cultural and environmental characteristics. | U01 |
| D2.Geo.4.3-5 | Explain how culture influences the way people modify and adapt to their environments. | U02 |
| D2.Geo.5.3-5 | Explain how the cultural and environmental characteristics of places change over time. | U02, U03 |
| D2.Geo.6.3-5 | Describe how environmental and cultural characteristics influence population distribution in specific places or regions. | U02 |
| D2.Geo.7.3-5 | Explain how cultural and environmental characteristics affect the distribution and movement of people, goods, and ideas. | U05, U06 |
| D2.Geo.8.3-5 | Explain how human settlements and movements relate to the locations and use of various natural resources. | U02 |
| D2.Geo.9.3-5 | Analyze the effects of catastrophic environmental and technological events on human settlements and migration. | Background only — held for grade 4; grade-3 hazards coverage stays at observation/adult-supervised level |
| D2.Geo.10.3-5 | Explain why environmental characteristics vary among different world regions. | U01, U06 |
| D2.Geo.11.3-5 | Describe how the spatial patterns of economic activities in a place change over time because of interactions with nearby and distant places. | U05 |
| D2.Geo.12.3-5 | Explain how natural and human-made catastrophic events in one place affect people living in other places. | Background only — held for grade 4 |

### Dimension 2 — History

| Code | Indicator | Track use |
|---|---|---|
| D2.His.1.3-5 | Create and use a chronological sequence of related events to compare developments that happened at the same time. | U03 |
| D2.His.2.3-5 | Compare life in specific historical time periods to life today. | U03, U07 |
| D2.His.3.3-5 | Generate questions about individuals and groups who have shaped significant historical changes and continuities. | U03, U06 |
| D2.His.4.3-5 | Explain why individuals and groups during the same historical period differed in their perspectives. | U06 |
| D2.His.5.3-5 | Explain connections among historical contexts and people's perspectives at the time. | U06, U07 |
| D2.His.6.3-5 | Describe how people's perspectives shaped the historical sources they created. | U03, U06 |
| D2.His.9.3-5 | Summarize how different kinds of historical sources are used to explain events in the past. | U03 |
| D2.His.10.3-5 | Compare information provided by different historical sources about the past. | U03 |
| D2.His.11.3-5 | Infer the intended audience and purpose of a historical source from information within the source itself. | U03, U06 |
| D2.His.12.3-5 | Generate questions about multiple historical sources and their relationships to particular historical events and developments. | U03, U08 |
| D2.His.13.3-5 | Use information about a historical source, including the maker, date, place of origin, intended audience, and purpose to judge the extent to which the source is useful for studying a particular topic. | U03 (adult-guided), U08 |
| D2.His.14.3-5 | Explain probable causes and effects of events and developments. | U02, U03, U07 |
| D2.His.16.3-5 | Use evidence to develop a claim about the past. | U03, U08 |
| D2.His.17.3-5 | Summarize the central claim in a secondary work of history. | U03 (adult-guided, enrichment) |

### Dimensions 3–4 — Evidence, communication, informed action

| Code | Indicator | Track use |
|---|---|---|
| D3.1.3-5 | Gather relevant information from multiple sources while using the origin, structure, and context to guide the selection. | U03, U06, U08 |
| D3.2.3-5 | Use distinctions among fact and opinion to determine the credibility of multiple sources. | U03, U06 |
| D3.3.3-5 | Identify evidence that draws information from multiple sources in response to compelling questions. | U06, U08 |
| D3.4.3-5 | Use evidence to develop claims in response to compelling questions. | U08 |
| D4.1.3-5 | Construct arguments using claims and evidence from multiple sources. | U08 |
| D4.2.3-5 | Construct explanations using reasoning, correct sequence, examples, and details with relevant information and data. | U03, U08 |
| D4.3.3-5 | Present a summary of arguments and explanations to others outside the classroom using print and oral technologies (e.g., posters, essays, letters, debates, speeches, and reports) and digital technologies. | U08 — presentations stay within adult-supervised settings; nothing is published from this track without the guiding adult's review |
| D4.4.3-5 | Critique arguments. | U08 (peer-review routine, adult-guided) |
| D4.5.3-5 | Critique explanations. | U08 (peer-review routine, adult-guided) |
| D4.6.3-5 | Draw on disciplinary concepts to explain the challenges people have faced and opportunities they have created, in addressing local, regional, and global problems at various times and places. | U07, U08 |
| D4.7.3-5 | Explain different strategies and approaches students and others could take in working alone and together to address local, regional, and global problems, and predict possible results of their actions. | U08 capstone |
| D4.8.3-5 | Use a range of deliberative and democratic procedures to make decisions about and act on civic problems in their classrooms and schools. | U04, U08 |

## 5. Eight-unit sequence with weekly pacing

Model: four ~30-minute sessions per week. Each unit = 4 weeks = 16 sessions:
**S1** concept launch (explicit explanation + modeled example), **S2** skills
practice (guided then independent), **S3** investigation/application (map work,
source work, or deliberation), **S4** review and unit check. Eight units give
32 weeks; four flexible weeks cover diagnostic (2), midyear review (1), and
final review (1), totaling 36 weeks / 144 sessions.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry map skills and vocabulary | S1: label a simple map (title, key, compass rose, cardinal directions); S2: guided re-teach of weak map elements; S3: describe a familiar place with a map + photograph; S4: short map-skills check |
| 2 | Verify entry timeline, rule-purpose, and economic-choice skills | S1: sequence 4–6 community events on a timeline; S2: explain why two familiar rules exist; S3: weigh benefits/costs of a simple choice (scenario cards); S4: diagnostic review — adult records gaps that U01–U05 re-teach |

### U01 — Maps, regions, continents, and geographic inquiry (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Name and locate the seven continents and major oceans; build a world reference map | S1: launch — continents/oceans with a labeled wall map; S2: practice labeling a blank outline map; S3: investigation — compare two world maps (different projections/emphases) and note what each shows well; S4: review + check |
| 4 | Read maps at different scales; use title, key, scale, and compass rose | S1: scale concept — same place at neighborhood, state, and country scale; S2: practice describing cultural/environmental features with different-scale maps; S3: construct a scaled map of a familiar place; S4: review + check |
| 5 | Explain how location connects to environmental characteristics; ask geographic compelling questions | S1: maps + photographs of two contrasting regions; S2: practice linking location to climate/landform evidence; S3: draft compelling + supporting questions for a region inquiry; S4: review + check |
| 6 | Describe U.S. regions and compare world regions' environments | S1: U.S. regions overview with the `us_states.csv` region column; S2: practice — sort states into regions and justify with map evidence; S3: region comparison task (two world regions, environment focus); S4: unit review + U01 assessment |

### U02 — Environment, settlement, and resource use (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain how environment shapes where people settle and how they live | S1: launch — settlement near water, flat land, and resources (map evidence); S2: practice matching settlements to environmental reasons; S3: investigation — why is our community where it is? (adult-guided local observation); S4: review + check |
| 8 | Explain how culture shapes how people modify and adapt to environments | S1: adaptation vs. modification examples (clothing, farming, canals, levees); S2: practice sorting examples; S3: cause/effect chains — one modification, its probable effects; S4: review + check |
| 9 | Identify human, physical, and natural resources; explain how settlements relate to resource use | S1: three resource types with local examples; S2: practice classifying resources in production chains (e.g., bread: wheat, oven, baker); S3: resource map of the community (adult-supervised walk or photo set); S4: review + check |
| 10 | Explain how places change over time; describe how characteristics shape population distribution | S1: then/now photographs of one place; S2: practice explaining what changed and why; S3: distribution task — where do people cluster in a region and why?; S4: unit review + U02 assessment |

### U03 — Communities over time and historical evidence (Weeks 11–14)

| Week | Goal | Sessions |
|---|---|---|
| 11 | Build and use chronological sequences; compare past life to present life | S1: timeline of the community (founding → today); S2: practice sequencing related events; S3: past/present comparison task (school, travel, communication); S4: review + check |
| 12 | Identify and use kinds of historical sources; summarize how each explains the past | S1: source kinds — artifacts, photographs, maps, documents, oral accounts; S2: practice matching questions to useful source kinds; S3: source examination with adult guidance (what is it, who made it, when); S4: review + check |
| 13 | Compare sources about the same event; infer audience and purpose; explain probable causes and effects | S1: two sources, one event — what agrees, what differs; S2: practice inferring audience/purpose from clues inside the source; S3: cause/effect chains for a community change; S4: review + check |
| 14 | Ask questions about people who shaped change; use evidence to make a claim about the past | S1: question generation about a local historical figure or group; S2: practice turning evidence into a claim with reasons; S3: mini-exhibit — claim + two pieces of evidence (drawing/writing/oral); S4: unit review + U03 assessment |

### U04 — Local government, participation, and public services (Weeks 15–18)

| Week | Goal | Sessions |
|---|---|---|
| 15 | Distinguish levels and branches of government; name responsibilities of local officials | S1: local → state → national with concrete officials and jobs; S2: practice matching jobs to officials; S3: investigation — which level handles which community need? (scenario sort); S4: review + check |
| 16 | Explain origins and purposes of rules, laws, and key constitutional provisions; explain how groups make rules | S1: rules vs. laws; why groups make rules (responsibilities + freedoms); S2: practice writing a fair classroom rule with a reason; S3: origins discussion — where do school/community rules come from?; S4: review + check |
| 17 | Explain how government pays for public services; practice deliberative decision-making | S1: taxes → services chain in kid-friendly terms (roads, schools, parks, firefighters); S2: practice tracing one tax dollar to one service; S3: deliberation — class decides a spending priority using discussion + vote; S4: review + check |
| 18 | Explain how democracy relies on participation; describe how people change rules and laws | S1: participation forms — voting, speaking up, helping, serving; S2: practice comparing decision procedures (consensus, vote, leader decides); S3: policy task — propose a classroom/school policy for a real problem, with steps; S4: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review: map skills, timelines, rule purposes, benefit/cost weighing — re-check diagnostic gaps |
| S3 | Catch-up session for unfinished investigations or re-teaching per adult judgment |
| S4 | Midyear check: one map task, one source task, one deliberation task — adult records progress toward track objectives |

### U05 — Production, trade, scarcity, and interdependence (Weeks 20–23)

| Week | Goal | Sessions |
|---|---|---|
| 20 | Explain scarcity and choice; compare benefits and costs; identify incentives | S1: scarcity scenario — not enough of something wanted; S2: practice benefit/cost charts for choices; S3: incentive detective — what nudges the choice in three scenarios; S4: review + check |
| 21 | Explain specialization and trade; explain money's role in exchange | S1: specialization — why the baker doesn't grow wheat; S2: practice trade simulations (classroom barter → money); S3: investigation — trace one classroom object to its makers; S4: review + check |
| 22 | Explain how profits influence sellers; identify external benefits and costs | S1: profit concept — price minus cost, in a lemonade-stand model; S2: practice predicting seller choices; S3: external effects — who else is affected by a new factory/park?; S4: review + check |
| 23 | Explain how trade creates interdependence; describe how economic patterns change through interaction | S1: interdependence web — goods from many places in one home; S2: practice mapping a product's journey; S3: pattern change — how a new road or port changed one place's economy (map + narrative); S4: unit review + U05 assessment |

### U06 — Cultures, perspectives, migration, and global communities (Weeks 24–27)

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain how culture and environment affect movement of people, goods, and ideas | S1: migration stories — push/pull in kid-friendly terms; S2: practice sorting push vs. pull factors; S3: idea movement — how one practice/food/custom traveled (map trace); S4: review + check |
| 25 | Explain why people in the same period held different perspectives | S1: two perspectives on one community event (original age-appropriate accounts); S2: practice naming each perspective and its reasons; S3: perspective writing — explain the event from one viewpoint with evidence; S4: review + check |
| 26 | Compare world regions and cultures; determine helpful sources for inquiry questions | S1: region snapshots — environment, culture, daily life in two world regions; S2: practice comparing with a two-column evidence chart; S3: source planning — which sources answer our compelling question?; S4: review + check |
| 27 | Distinguish fact from opinion; gather evidence from multiple sources | S1: fact vs. opinion in community texts; S2: practice judging source credibility; S3: evidence collection for the region comparison; S4: unit review + U06 assessment |

### U07 — Rights, responsibilities, fairness, and historical change (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Identify rights and responsibilities; explain fairness in community situations | S1: rights learners hold + responsibilities that pair with them; S2: practice — is this situation fair? (scenario cards with reasons); S3: fairness deliberation — class rule revision; S4: review + check |
| 29 | Explain how people have changed society — historical means | S1: age-appropriate stories of people who changed rules/laws for fairness (adult-selected); S2: practice sequencing the change: problem → action → result; S3: cause/effect — what made the change possible?; S4: review + check |
| 30 | Compare past and present on rights and responsibilities; connect context to perspectives | S1: rights then vs. now (school, community examples); S2: practice perspective-taking — why did people see it differently then?; S3: civic virtues — name virtues in the historical stories; S4: review + check |
| 31 | Describe benefits and challenges of working together; explain strategies for local problems | S1: working-together examples — government, workplaces, voluntary groups, families; S2: practice listing benefits and challenges; S3: strategy task — propose two approaches to one local problem, predict results; S4: unit review + U07 assessment |

### U08 — Regional comparative inquiry and civic capstone (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame the capstone: compelling question comparing two regions; plan supporting questions and sources | S1: launch — choose the compelling question (e.g., "How do people in our region and one other region meet the same needs differently?"); S2: practice writing supporting questions; S3: source planning with origin/structure/context; S4: review + check |
| 33 | Gather evidence from multiple sources; compare regions with evidence | S1: guided source gathering (maps, photos, short texts, data); S2: practice evidence charting — claim, evidence, source; S3: comparison drafting; S4: review + check |
| 34 | Construct arguments and explanations; peer-review with adult guidance | S1: build the argument — claim + evidence + reasoning; S2: peer review routine — kind, specific, evidence-based feedback; S3: revision; S4: review + check |
| 35 | Present the inquiry; deliberate and act on a classroom/school civic problem | S1: presentation preparation (poster, talk, or digital summary); S2: presentations to the adult/class group; S3: civic action — democratic procedure to decide one real classroom/school improvement; S4: unit review + U08 assessment |

### Week 36 — Final review and portfolio

| Sessions | Goal |
|---|---|
| S1 | Spiral review: maps, timelines, sources, economic choices, government levels |
| S2 | Portfolio assembly — learner selects best map, timeline, claim-with-evidence, and deliberation reflection (adult keeps the portfolio private) |
| S3 | Final check: one task per track-objective cluster, adult-scored against the track objectives |
| S4 | Celebration and next-year preview — where grade-4 social studies picks up |

## 6. Internal resource reuse plan

- `resources/government_basics.md` and
  `resources/united_states_understanding_and_principles.md`: adult-side
  references behind U04/U07 teacher guides — never assigned as learner reading.
- `resources/supply_and_demand_economics.md`: adult-side reference for U05's
  scarcity/choice/trade design; its macro sections are out of scope.
- `resources/world_facts.md` (expansion-plan branch): must merge to main and
  have its 2025 population snapshots re-verified before U01; otherwise U01/U06
  use `us_states.csv` and `un_countries.csv` columns only.
- `resources/us_states.csv` (U01, U02): columns `name_common, usps, capital,
  region, subregion, population_approx, area_sq_mi, statehood_year,
  biggest_city, state_fact` — task instructions will name the exact columns,
  note that populations/areas are rounded approximations, and treat
  `state_fact` as unverified until checked during authoring.
- `resources/un_countries.csv` / `.json` (U06): columns `name_common,
  region, subregion, capital` are usable; the `population` column is currently
  empty and must not be used until filled from a verified source.
- `resources/black_excellence_figures.md`: adult pre-selects 2–3
  age-appropriate figures for U06/U07 research tasks.
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
- Reading: original passages are written at grade-3 level; vocabulary is
  pre-taught; key terms appear with kid-friendly definitions in each lesson.
- Video/media (unit Resource Packs): captions or transcripts required; the
  adult previews for ads, age suitability, and accuracy.
- Deliberation and presentation: sentence starters, choice boards, and
  small-group formats; no learner is required to speak publicly beyond the
  adult-supervised setting.

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
- **U01 next:** merge `resources/world_facts.md` to main or verify
  `un_countries.csv` population data; decide the two comparison regions;
  author the U.S.-regions dataset task against `us_states.csv` columns.
- **U02:** line up then/now photograph pairs (public-domain or original);
  confirm the adult-supervised local-observation protocol.
- **U03:** select the community-change topic and 2–3 contrasting sources;
  pre-write the audience/purpose clue sets.
- **U04:** draft the classroom deliberation protocol and the tax→service chain
  examples against `government_basics.md`.
- **U05:** build the classroom trade simulation materials and the
  lemonade-stand profit model.
- **U06:** adult-select the migration stories and Black-excellence figures;
  verify `un_countries.csv` region data for the comparison task.
- **U07:** adult-select the historical-change stories; draft the fairness
  scenario cards.
- **U08:** write the peer-review routine and the civic-action decision
  procedure; confirm portfolio-privacy handling with the adult.
