# Grade 8 Social Studies — Scope and Sequence

Audit section A00 of [issue #41](https://github.com/murderszn/open-tutor/issues/41).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main`. All 21 Markdown files listed below are the
2026-10-01 baseline from the issue; file counts match. Decisions are
**Keep** (reuse as-is or as formative bank), **Revise** (needs substantive
improvement before unit use), **Enrichment** (optional), or **Gap** (missing;
to be authored).

| Item | Location | Decision |
|---|---|---|
| Track index page | `curriculum/grade-8/social-studies/README.md` (main) | **Revise** — rewritten as a real subject index: track description, measurable objectives, keep/revise/gap map, unit assignments for existing banks |
| Grade-8 hub page | `curriculum/grade-8/README.md` (main) | **Revise** — updated to record the social studies audit status |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — Grade 8 line added with truthful audit status |
| Curriculum manifest | `curriculum/manifest.json` (main) | **Revise** — new scope-and-sequence entry added under existing schema |
| Articles of Confederation & Shays' Rebellion quiz | `quizzes/the-articles-of-confederation-shays-rebellion-quiz.md` | **Keep** as U03 formative bank — 10 questions, Articles Art. II excerpt (verified accurate against the public-domain text), collapsible key; unit lessons must teach the content the questions assume |
| Federalists vs. Anti-Federalists quiz | `quizzes/federalists-vs-anti-federalists-the-ratification-debate-quiz.md` | **Keep** as U03 formative bank — same format; key is brief, unit teacher guide must expand reasoning |
| Three branches & checks and balances quiz | `quizzes/the-three-branches-of-government-checks-and-balances-quiz.md` | **Keep** as U03 formative bank |
| Bill of Rights quiz | `quizzes/the-bill-of-rights-liberties-protections-federalism-quiz.md` | **Keep** as U03 formative bank |
| Early republic / Hamilton vs. Jefferson / Louisiana Purchase quiz | `quizzes/the-early-republic-hamilton-vs-jefferson-the-louisiana-purchase-quiz.md` | **Keep** as U04 formative bank |
| War of 1812 & Monroe Doctrine quiz | `quizzes/the-war-of-1812-the-monroe-doctrine-quiz.md` | **Keep** as U04 formative bank |
| Market Revolution quiz | `quizzes/the-early-industrial-market-revolution-quiz.md` | **Keep** as U04/U05 formative bank — also feeds U05 industry economics |
| Manifest Destiny / sectionalism / compromises quiz | `quizzes/manifest-destiny-sectionalism-legislative-compromises-quiz.md` | **Revise** — O'Sullivan 1845 excerpt verified accurate; but the quiz never mentions Native displacement, the Trail of Tears, or Cherokee removal; U04 must add that treatment before reuse |
| Abolitionist movement quiz | `quizzes/the-abolitionist-movement-freedom-fighters-quiz.md` | **Keep** as U05 formative bank |
| Deepening divide (Kansas-Nebraska, Dred Scott, John Brown) quiz | `quizzes/the-deepening-divide-kansas-nebraska-act-dred-scott-john-brown-quiz.md` | **Keep** as U06 formative bank |
| Election of 1860 / secession quiz | `quizzes/the-election-of-1860-secession-the-outbreak-of-the-civil-war-quiz.md` | **Keep** as U06 formative bank |
| Emancipation Proclamation quiz | `quizzes/civil-war-turning-points-the-emancipation-proclamation-quiz.md` | **Keep** as U06 formative bank |
| Appomattox / Lincoln's vision / 13th Amendment quiz | `quizzes/appomattox-lincoln-s-vision-the-13th-amendment-quiz.md` | **Keep** as U06/U07 bridge formative bank |
| Presidential vs. Congressional Reconstruction quiz | `quizzes/presidential-vs-congressional-reconstruction-the-freedmen-s-bureau-quiz.md` | **Keep** as U07 formative bank |
| Reconstruction Amendments / Black political leadership quiz | `quizzes/the-reconstruction-amendments-black-political-leadership-legacy-quiz.md` | **Keep** as U07 formative bank |
| Bill of Rights scenarios assignment | `assignments/bill-of-rights-scenarios.md` | **Revise** — sound scenario structure; "Learn & Review" header uses labeled YouTube search links (allowed format); unit Resource Pack will replace with verified pack |
| Constitutional Convention debate simulation | `assignments/constitutional-convention-debate.md` | **Revise** — strong deliberation structure; needs teacher guide, rubric, and role scaffolds for U03 |
| Constitutional Convention evidence review | `assignments/constitutional-convention-review.md` | **Revise** — blank reusable organizer; good skeleton, needs unit context and key |
| Reconstruction Amendments legacy assignment | `assignments/reconstruction-amendments-legacy.md` | **Revise** — cites Eric Foner's "Second Founding" characterization accurately; needs teacher guide and source list for U07 |
| Civil rights argument-brief template | `templates/civil-rights-movement.md` | **Revise** — argument-brief format is a good model, but the topic (1960s civil rights) is outside this track's through-1877 scope; re-template for the U08 capstone |
| Same-grade math/language-arts/science tracks (#38–#40) | `curriculum/grade-8/math/`, `stem/`, `language-arts/` | **Reference only** — grade-8 LA audit's session model (five 45-minute sessions/week) reused as pattern; no content borrowed |
| Grade-7 social studies track (#37, audit delivered as draft PR) | `curriculum/grade-7/social-studies/` (branch) | **Prerequisite reference only** — end-of-year objectives define entry expectations (see §2); no grade-7 material copied upward |
| `resources/government_basics.md` | three branches, checks/balances, agencies | **Adult-side reference** — verifies U03 branch/agency definitions behind teacher guides; learner passages will be original |
| `resources/united_states_understanding_and_principles.md` | colonies-to-Constitution overview | **Adult-side reference** — background for U02/U03 founding-document work |
| `resources/black_excellence_figures.md` | Black historical and modern figures | **Adult-side reference** — adult pre-selects abolitionists (U05) and Reconstruction-era leaders (U07); entries are not assigned as learner reading |
| `resources/wars_fundamentals.md` | wars overview | **Adult-side reference only** — check grade fit at authoring; U06's war content is taught from primary sources, not this guide |
| `resources/supply_and_demand_economics.md` | supply/demand, markets | **Adult-side reference** — informs U05 market-revolution economics; macro sections out of scope |
| `resources/us_states.csv` | columns: name_common, name_official, usps, capital, region, subregion, population_approx, area_sq_mi, area_sq_km, population_density_per_sq_mi, statehood_year, biggest_city, biggest_city_population, state_fact, google_maps_url | **Candidate for U04 expansion-mapping tasks** — column names and rounded units named explicitly at task time; statehood years verified during authoring; `state_fact` one-liners checked before use |
| `resources/us_presidents.csv` | U.S. presidents dataset | **Candidate for U04/U06 timeline tasks** — dates verified during authoring |
| `resources/world_facts.md` | (**expansion-plan branch only, not on main**) | **Must be merged to main before unit use** |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit sections** — external starting points only; each candidate link opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — drives each unit's Resource Pack |
| Quiz answer-key format | `<details>` "Parent Answer Key" collocated with student questions in all 15 quizzes | **Revise at unit level** — keys are brief and sit beside the questions; unit sections must ship **separate** teacher guides and full answer keys with reasoning, acceptable responses, and misconception notes |
| Lessons, teacher guides, separate keys, diagnostics, capstone, images, resource packs | none exist | **Gap** — all to be authored in U01–U08 and R00 |

No existing file was found to be factually inaccurate in the sampled re-read
(Articles of Confederation Article II excerpt and the 1845 O'Sullivan
"manifest destiny" quotation both verified against public-domain texts;
"Second Founding" attribution to Eric Foner is accurate). The dominant
problems are **missing instruction** (no lessons at all; U01–U02 have zero
content), **missing teacher support** (no separate guides or full keys), and
**coverage blind spots** (no colonial or Revolution material anywhere; no
Native-displacement treatment; the civil-rights template is off-scope).

## 2. Prerequisites

Learners enter from the grade-7 social studies track (medieval-to-early-modern
world; audit delivered as a draft PR), whose end-of-year objectives this track
assumes: framing compelling and supporting questions and choosing source kinds
(D1.1–1.5.6-8); constructing and interpreting maps with scale, key, and grid
(D2.Geo.1–3.6-8); explaining how environments shaped early human life and how
societies organized cities, specialization, writing, laws, and belief systems
(D2.Geo.4–5, 11.6-8; D2.His.1, 2, 14.6-8); comparing societies in their own
contexts (D2.His.4.6-8); reasoning economically about specialization, markets,
supply and demand, and interdependence (D2.Eco.1–9, 14, 15.6-8); evaluating
sources — classifying kinds, detecting limitations, inferring maker/audience/
purpose (D3.1–3.2.6-8; D2.His.9–13.6-8); and communicating conclusions with
claims, counterclaims, and noted limitations (D3.3–3.4.6-8; D4.1–4.8.6-8).

**Content foundation — the grade-5 U.S. history track (draft PR #95).** Grade 5
already taught this track's full chronological arc: North American geography
and Indigenous histories, colonial societies, the Revolution, founding
documents, the early republic, abolition and reform, the Civil War, and
Reconstruction. Grade 8 is the deeper second pass over the same eras —
primary sources instead of narrative survey, multiple perspectives instead of
a single storyline, historiographic argument instead of chronology. Nothing in
U01–U07 re-teaches the narrative from scratch, and nothing assumes grade-5
mastery either: the diagnostic re-checks it (see below).

The diagnostic weeks (Weeks 1–2) verify these — especially timeline sequencing
across centuries, map-scale reading, source maker/audience inference, and
claim-with-evidence writing — plus retention of the grade-5 arc (placing the
Revolution, founding, Civil War, and Reconstruction on a timeline; the 13th–
15th Amendments in plain language; colonial labor systems). U01 re-teaches
Atlantic-world map reading and labor-system vocabulary before assuming they
are secure; U03 re-teaches founding-document close reading before the
ratification debate.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Analyze colonial societies and the Atlantic exchange (D2.His.1, 2, 4, 14.6-8; D2.Geo.10, 11.6-8)
2. Explain the Revolution and its contested ideals (D2.His.2–4, 6.6-8; D2.Civ.8, 14.6-8)
3. Analyze the Constitution and ratification (D2.Civ.3–5, 8.6-8)
4. Explain the early republic — politics, expansion, displacement (D2.His.1, 2, 14, 15.6-8; D2.Geo.8, 11.6-8)
5. Analyze industry, reform, and abolition (D2.Eco.7, 9.6-8; D2.His.5, 6.6-8; D2.Civ.6, 14.6-8)
6. Explain sectionalism, slavery, secession, and the Civil War (D2.His.14–16.6-8)
7. Evaluate Reconstruction — amendments, citizenship, resistance (D2.Civ.3, 8, 13, 14.6-8; D2.His.5, 17.6-8)
8. Work with primary sources (D2.His.9–13.6-8; D3.1, 3.2.6-8)
9. Argue from evidence (D3.3, 3.4.6-8; D4.1, 4.2, 4.4, 4.5.6-8)
10. Inquire and take informed action (D1.1–1.5.6-8; D4.3, 4.6–4.8.6-8)

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (National Council for the Social Studies),
grades 6–8 band. Codes and descriptions below were verified 2026-10-06 against
the NCSS C3 standards page (socialstudies.org/standards/c3, read 2026-10-06)
and the grades 6–8 indicator tables in the C3 instructional planning guide
(Los Angeles County Office of Education, October 2013). **No state adoption,
accreditation, or alignment certification is claimed.** Indicators the
framework defers to later bands — D2.His.7.6-8 and D2.His.8.6-8 (begin in
grades 9–12) — are not taught in this track.

### Dimension 1 — Developing Questions and Planning Inquiries

| Code | Indicator | Track use |
|---|---|---|
| D1.1.6-8 | Explain how a question represents key ideas in the field. | U01, U08 |
| D1.2.6-8 | Explain points of agreement experts have about interpretations and applications of disciplinary concepts and ideas associated with a compelling question. | U06, U08 |
| D1.3.6-8 | Explain points of agreement experts have about interpretations and applications of disciplinary concepts and ideas associated with a supporting question. | U03, U06 |
| D1.4.6-8 | Explain how the relationship between supporting questions and compelling questions is mutually reinforcing. | U02, U08 |
| D1.5.6-8 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions, taking into consideration multiple points of view represented in the sources. | U01, U05, U08 |

### Dimension 2 — Civics

| Code | Indicator | Track use |
|---|---|---|
| D2.Civ.1.6-8 | Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media in a variety of governmental and nongovernmental contexts. | U04 |
| D2.Civ.2.6-8 | Explain specific roles played by citizens (such as voters, jurors, taxpayers, members of the armed forces, petitioners, protesters, and office-holders). | U05, U07 |
| D2.Civ.3.6-8 | Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements. | U03, U07 |
| D2.Civ.4.6-8 | Explain the powers and limits of the three branches of government, public officials, and bureaucracies at different levels in the United States and in other countries. | U03 |
| D2.Civ.5.6-8 | Explain the origins, functions, and structure of government with reference to the U.S. Constitution, state constitutions, and selected other systems of government. | U03 |
| D2.Civ.6.6-8 | Describe the roles of political, civil, and economic organizations in shaping people's lives. | U05 |
| D2.Civ.7.6-8 | Apply civic virtues and democratic principles in school and community settings. | U03, U05, U08 |
| D2.Civ.8.6-8 | Analyze ideas and principles contained in the founding documents of the United States, and explain how they influence the social and political system. | U02, U03, U07 |
| D2.Civ.9.6-8 | Compare deliberative processes used by a wide variety of groups in various settings. | U03 |
| D2.Civ.10.6-8 | Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles when people address issues and problems in government and civil society. | U05, U07 |
| D2.Civ.11.6-8 | Differentiate among procedures for making decisions in the classroom, school, civil society, and local, state, and national government in terms of how civic purposes are intended. | U03 |
| D2.Civ.12.6-8 | Assess specific rules and laws (both actual and proposed) as means of addressing public problems. | U03, U07 |
| D2.Civ.13.6-8 | Analyze the purposes, implementation, and consequences of public policies in multiple settings. | U07 |
| D2.Civ.14.6-8 | Compare historical and contemporary means of changing societies, and promoting the common good. | U02, U05, U07 |

### Dimension 2 — Economics

| Code | Indicator | Track use |
|---|---|---|
| D2.Eco.1.6-8 | Explain how economic decisions affect the well-being of individuals, businesses, and society. | U05 |
| D2.Eco.2.6-8 | Evaluate alternative approaches or solutions to current economic issues in terms of benefits and costs for different groups and society as a whole. | U05 |
| D2.Eco.6.6-8 | Explain how changes in supply and demand cause changes in prices and quantities of goods and services, labor, credit, and foreign currencies. | U05 |
| D2.Eco.7.6-8 | Analyze the role of innovation and entrepreneurship in a market economy. | U04, U05 |
| D2.Eco.8.6-8 | Explain how external benefits and costs influence market outcomes. | U05 |
| D2.Eco.9.6-8 | Describe the roles of institutions such as corporations, non-profits, and labor unions in a market economy. | U05 |
| D2.Eco.14.6-8 | Explain barriers to trade and how those barriers influence trade among nations. | U01 |
| D2.Eco.15.6-8 | Explain the benefits and the costs of trade policies to individuals, businesses, and society. | U01 |

### Dimension 2 — Geography

| Code | Indicator | Track use |
|---|---|---|
| D2.Geo.1.6-8 | Construct maps to represent and explain the spatial patterns of cultural and environmental characteristics. | U01, U04 |
| D2.Geo.2.6-8 | Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions, and changes in their environmental characteristics. | U01, U04 |
| D2.Geo.3.6-8 | Use paper-based and electronic mapping and graphing techniques to represent and analyze spatial patterns of different environmental and cultural characteristics. | U01, U04 |
| D2.Geo.7.6-8 | Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices. | U01, U05 |
| D2.Geo.8.6-8 | Analyze how combinations of cultural and environmental characteristics that make places both similar to and different from other places. | U04 |
| D2.Geo.10.6-8 | Analyze the ways in which cultural and environmental characteristics vary among various regions of the world. | U01 |
| D2.Geo.11.6-8 | Explain how the relationship between the environmental characteristics of places and production of goods influences the spatial patterns of world trade. | U01, U04 |
| D2.Geo.12.6-8 | Explain how global changes in population distribution patterns affect changes in land use in particular places. | U04, U06 |

### Dimension 2 — History

| Code | Indicator | Track use |
|---|---|---|
| D2.His.1.6-8 | Analyze connections among events and developments in broader historical contexts. | U01, U02, U04, U08 |
| D2.His.2.6-8 | Classify series of historical events and developments as examples of change and/or continuity. | U02, U04, U08 |
| D2.His.3.6-8 | Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant. | U02, U05, U07 |
| D2.His.4.6-8 | Analyze multiple factors that influenced the perspectives of people during different historical eras. | U01, U02, U04, U06 |
| D2.His.5.6-8 | Explain how and why perspectives of people have changed over time. | U05, U07 |
| D2.His.6.6-8 | Analyze how people's perspectives influenced what information is available in the historical sources they created. | U02, U05 |
| D2.His.9.6-8 | Classify the kinds of historical sources used in a secondary interpretation. | U01–U08 |
| D2.His.10.6-8 | Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources. | U02, U06, U08 |
| D2.His.11.6-8 | Use other historical sources to infer a plausible maker, date, place of origin, and intended audience for historical sources where this information is not easily identified. | U01, U02, U08 |
| D2.His.12.6-8 | Use questions generated about multiple historical sources to identify further areas of inquiry and additional sources. | U05, U08 |
| D2.His.13.6-8 | Evaluate the relevancy and utility of a historical source based on information such as maker, date, place of origin, intended audience, and purpose. | U03, U06, U08 |
| D2.His.14.6-8 | Explain multiple causes and effects of events and developments in the past. | U01, U04, U06 |
| D2.His.15.6-8 | Evaluate the relative influence of various causes of events and developments in the past. | U04, U06 |
| D2.His.16.6-8 | Organize applicable evidence into a coherent argument about the past. | U06, U08 |
| D2.His.17.6-8 | Compare the central arguments in secondary works of history on related topics in multiple media. | U07, U08 |

### Dimension 3 — Evaluating Sources and Using Evidence

| Code | Indicator | Track use |
|---|---|---|
| D3.1.6-8 | Gather relevant information from multiple sources while using the origin, authority, structure, context, and corroborative value of the sources to guide the selection. | U01–U08 |
| D3.2.6-8 | Evaluate the credibility of a source by determining its relevance and intended use. | U02, U05, U08 |
| D3.3.6-8 | Identify evidence that draws information from multiple sources to support claims, noting evidentiary limitations. | U03, U06, U08 |
| D3.4.6-8 | Develop claims and counterclaims while pointing out the strengths and limitations of both. | U03, U06, U08 |

### Dimension 4 — Communicating Conclusions and Taking Informed Action

| Code | Indicator | Track use |
|---|---|---|
| D4.1.6-8 | Construct arguments using claims and evidence from multiple sources, while acknowledging the strengths and limitations of the arguments. | U03, U06, U08 |
| D4.2.6-8 | Construct explanations using reasoning, correct sequence, examples, and details with relevant information and data, while acknowledging the strengths and weaknesses of the explanations. | U04, U06, U08 |
| D4.3.6-8 | Present adaptations of arguments and explanations on topics of interest to others to reach audiences and venues outside the classroom using print and oral technologies and digital technologies. | U05, U08 |
| D4.4.6-8 | Critique arguments for credibility. | U03, U06, U08 |
| D4.5.6-8 | Critique the structure of explanations. | U06, U08 |
| D4.6.6-8 | Draw on multiple disciplinary lenses to analyze how a specific problem can manifest itself at local, regional, and global levels over time, identifying its characteristics and causes, and the challenges and opportunities faced by those trying to address the problem. | U07, U08 |
| D4.7.6-8 | Assess their individual and collective capacities to take action to address local, regional, and global problems, taking into account a range of possible levers of power, strategies, and potential outcomes. | U08 |
| D4.8.6-8 | Apply a range of deliberative and democratic procedures to make decisions and take action in their classrooms and schools, and in out-of-school civic contexts. | U05, U08 |

## 5. Eight-unit sequence with weekly pacing

Model: five ~45-minute sessions per week. Each unit = 4 weeks = 20 sessions:
**S1** concept launch (explicit explanation + modeled example), **S2** close
reading and skills practice (guided then independent), **S3** source
investigation or application (maps, timelines, simulations), **S4**
writing/deliberation, **S5** review and unit check. Eight units give 32 weeks;
four flexible weeks cover diagnostic (2), midyear review (1), and final review
(1), totaling 36 weeks / 180 sessions.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry timeline, map-scale, and source skills | S1: sequence 6–8 events spanning centuries on a timeline; S2: read a scaled historical map (key, scale, compass rose); S3: classify 4 sources by kind and infer one maker/audience; S4: map-reading re-teach for weak spots; S5: short skills check — adult records gaps |
| 2 | Verify entry argument and inquiry skills | S1: write one claim about a past event with one piece of evidence; S2: identify a counterclaim and its evidence; S3: draft a compelling + supporting question pair; S4: argument-writing re-teach; S5: diagnostic review — adult records gaps that U01–U04 re-teach |

### U01 — Colonial societies, Atlantic exchange, labor, resistance (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Map the Atlantic world; explain the Columbian exchange's two directions | S1: launch — Atlantic basin map, three continents, exchange goods/diseases/ideas; S2: practice tracing one exchange item's two-direction effects; S3: investigation — construct a labeled Atlantic trade-wind and route map; S4: write an exchange cause/effect paragraph; S5: review + check |
| 4 | Compare colonial regions' economies and labor systems | S1: New England, Middle, Southern colonies — environment, crops, labor; S2: practice sorting labor systems (family, indentured, enslaved) by region with evidence; S3: map task — staple crops and labor on a colonial map; S4: compare two regions' labor in a two-column chart with reasons; S5: review + check |
| 5 | Explain enslavement as a system; analyze resistance | S1: Middle Passage and plantation labor — what the system required; S2: close read an excerpt from an enslaved person's account (adult-selected, public domain); S3: investigation — resistance forms (work slowdowns, escape, revolt) with evidence cards; S4: perspective writing — how the same event looked to planter vs. enslaved person; S5: review + check |
| 6 | Synthesize: who benefited, who resisted, what changed | S1: triangular trade economics — who profited at each point; S2: practice evaluating trade barriers and costs (D2.Eco.14–15.6-8); S3: source comparison — a merchant's ledger vs. an abolitionist account; S4: argument — was the Atlantic system primarily economic or political? (claim + counterclaim); S5: unit review + U01 assessment |

### U02 — Revolution, independence, contested ideals (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain colonial grievances and the road to war | S1: launch — taxation, representation, and the boycott weapon; S2: close read excerpts from the Declaration of Independence (public domain); S3: timeline investigation — 1763–1776, classifying change vs. continuity; S4: write the colonial case in one paragraph with evidence; S5: review + check |
| 8 | Analyze the war's turning points and alliances | S1: war overview — why the colonies could win (alliance, geography, will); S2: practice connecting battles to broader contexts (D2.His.1.6-8); S3: map investigation — Saratoga, French alliance, Yorktown; S4: explain one turning point's causes and effects; S5: review + check |
| 9 | Examine contested ideals — who was included? | S1: "all men are created equal" vs. slavery, women's status, Native nations; S2: close read contrasting perspectives (e.g., a patriot pamphlet vs. an enslaved petition for freedom); S3: investigation — whose liberty? evidence sort across four groups; S4: structured deliberation — did the Revolution fulfill its ideals?; S5: review + check |
| 10 | Synthesize: significance and historical memory | S1: why individuals and the Revolution are seen as historically significant (D2.His.3.6-8); S2: practice detecting limits in the record — whose voices are missing; S3: compare two secondary accounts of the Revolution's meaning; S4: argument — the Revolution as turning point: claim, counterclaim, limitations; S5: unit review + U02 assessment |

### U03 — Constitution, ratification, rights, institutions (Weeks 11–14)

Existing banks reused and expanded here: the Articles of Confederation quiz, the
Federalists vs. Anti-Federalists quiz, the three-branches quiz, the Bill of
Rights quiz, and the three Constitution assignments.

| Week | Goal | Sessions |
|---|---|---|
| 11 | Explain the Articles' failure and the Convention's compromises | S1: launch — Articles' weaknesses (no tax power, no executive, unanimity rule); S2: close read Article II excerpt (already in the quiz bank); S3: simulation prep — Virginia vs. New Jersey plans, Great Compromise, Three-Fifths Clause; S4: explain how the Three-Fifths Clause boosted slave-state power without freeing anyone; S5: review + check |
| 12 | Analyze the ratification debate | S1: Federalist vs. Anti-Federalist core arguments; S2: close read paired excerpts (Federalist and Anti-Federalist, public domain); S3: structured debate using the convention-debate simulation assignment (revised with roles and rubric); S4: deliberative comparison — which process produced the better decision?; S5: review + check |
| 13 | Explain the Constitution's structure and the Bill of Rights | S1: three branches — powers and limits, checks and balances; S2: close read the Bill of Rights (public domain) — what each of the first ten protects; S3: scenario application — Bill of Rights in modern legal scenarios (revised assignment); S4: assess one amendment as a solution to a public problem; S5: review + check |
| 14 | Synthesize: the Constitution as a contested settlement | S1: what the Constitution settled and what it postponed; S2: practice evaluating a source's relevancy for a ratification inquiry (D2.His.13.6-8); S3: investigation — the evidence-review organizer (revised assignment) on one Convention debate; S4: argument — was ratification democratic? claim + counterclaim with noted limits; S5: unit review + U03 assessment |

### U04 — Early republic, politics, expansion, displacement (Weeks 15–18)

Existing banks reused here: the Hamilton-vs.-Jefferson/Louisiana Purchase quiz,
the War of 1812/Monroe Doctrine quiz, and the market-revolution quiz (economics
strand). The manifest-destiny quiz is revised to add Native-displacement
treatment before reuse.

| Week | Goal | Sessions |
|---|---|---|
| 15 | Explain the first party system and Hamilton vs. Jefferson | S1: launch — two visions of America's future (strong national government vs. agrarian republic); S2: close read paired excerpts on the national bank debate; S3: timeline task — 1789–1800 administrations and precedents; S4: explain one policy dispute from both perspectives; S5: review + check |
| 16 | Analyze expansion: Louisiana Purchase and its consequences | S1: the purchase — why Napoleon sold, what Jefferson bought; S2: map investigation — 1803 boundaries and what "doubling the nation" meant on the ground; S3: dataset task — statehood years from `us_states.csv`, sequencing admission; S4: argument — opportunity for whom? weighing expansion's winners and losers; S5: review + check |
| 17 | Evaluate the War of 1812 and the Monroe Doctrine | S1: causes — impressment, trade, western grievances; evaluate their relative influence; S2: practice connecting the war to broader Atlantic contexts; S3: Monroe Doctrine close read — what it claimed and what it couldn't enforce; S4: explain one cause/effect chain in writing; S5: review + check |
| 18 | Confront displacement: Indian Removal and the Trail of Tears | S1: the removal policy — laws, court cases, and defiance (Worcester v. Georgia); S2: close read Cherokee memorials and Jackson's removal message (public domain); S3: map investigation — removal routes and the human cost, with `us_states.csv` region context; S4: deliberation — expansion's price: whose perspectives decide the story?; S5: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review: timeline sequencing, map-scale reading, source maker/audience inference, claim-with-counterclaim writing — re-check diagnostic gaps |
| S3 | Catch-up session for unfinished investigations or re-teaching per adult judgment |
| S4 | Midyear check: one source task, one map task, one argument task — adult records progress toward track objectives |
| S5 | Preview of U05: what "industry" and "reform" will mean |

### U05 — Industry, reform, abolition, social change (Weeks 20–23)

Existing bank reused here: the abolitionist-movement quiz; the market-revolution
quiz continues its economics strand.

| Week | Goal | Sessions |
|---|---|---|
| 20 | Explain the market revolution's economic transformation | S1: launch — canals, railroads, factories: what changed, for whom; S2: practice supply/demand shifts with period examples (textile prices, wages); S3: investigation — innovation and entrepreneurship case (e.g., the sewing machine, the telegraph); S4: evaluate who benefited and who paid the external costs; S5: review + check |
| 21 | Analyze reform movements and their methods | S1: temperance, public schools, women's rights, and prison reform — methods compared; S2: close read a reform pamphlet excerpt (public domain); S3: compare historical and contemporary means of changing society (D2.Civ.14.6-8); S4: deliberation — which reform method works, when?; S5: review + check |
| 22 | Examine abolitionism and Black agency | S1: the abolitionist movement — moral argument, political strategy, Black leadership; S2: close read an abolitionist speech excerpt (adult-selected, public domain); S3: investigation — how enslaved people's resistance and abolitionist organizing reinforced each other; S4: perspective analysis — why perspectives on slavery differed by region and interest; S5: review + check |
| 23 | Synthesize: a changing society's winners, losers, and levers | S1: institutions in a market economy — corporations, unions, reform societies (D2.Eco.9.6-8); S2: practice tracing one reform from problem to action to result; S3: present a reform case to an outside audience (poster, speech, or letter — D4.3.6-8); S4: peer critique of arguments for credibility; S5: unit review + U05 assessment |

### U06 — Sectionalism, slavery, secession, Civil War (Weeks 24–27)

Existing banks reused here: the deepening-divide quiz, the election-of-1860
quiz, the Emancipation Proclamation quiz, and the Appomattox/13th Amendment
quiz (bridge into U07).

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain the legislative road to crisis | S1: launch — Missouri Compromise, Compromise of 1850, Kansas-Nebraska: the pattern; S2: close read the Fugitive Slave Act's effects on Northern communities; S3: timeline investigation — 1820–1860, classifying each event as cause, effect, or both; S4: write one compromise's terms and its unintended consequences; S5: review + check |
| 25 | Analyze Dred Scott, John Brown, and the collapse of compromise | S1: the Dred Scott decision — what the Court ruled and why it inflamed both sections; S2: John Brown's raid — terrorism or martyrdom? two contemporary perspectives; S3: practice evaluating the relative influence of court, Congress, and moral conflict (D2.His.15.6-8); S4: structured debate — could the crisis still have been compromised away?; S5: review + check |
| 26 | Explain secession, the war's course, and emancipation as policy | S1: the election of 1860 and secession winter — why the Lower South left; S2: close read the Emancipation Proclamation (public domain) — what it did and didn't do; S3: map investigation — turning points (Antietam, Gettysburg, Vicksburg, Sherman's March); S4: organize evidence into a coherent argument about why the North won; S5: review + check |
| 27 | Assess the war's cost and Lincoln's vision | S1: Appomattox and the war's human cost; S2: close read the Gettysburg Address and Second Inaugural excerpts (public domain); S3: source-limitation task — what the record hides about the war's toll; S4: argument — was emancipation the war's cause or its consequence? claim + counterclaim; S5: unit review + U06 assessment |

### U07 — Reconstruction, amendments, citizenship, resistance (Weeks 28–31)

Existing banks reused here: the presidential-vs.-congressional Reconstruction
quiz, the Reconstruction Amendments quiz, and the Reconstruction Amendments
legacy assignment.

| Week | Goal | Sessions |
|---|---|---|
| 28 | Compare presidential and congressional Reconstruction | S1: launch — Lincoln's, Johnson's, and Congress's competing plans; S2: close read the Freedmen's Bureau Act excerpt (public domain); S3: investigation — what the Bureau actually did (schools, contracts, courts) from primary reports; S4: deliberation — which plan best served freedpeople?; S5: review + check |
| 29 | Explain the Reconstruction Amendments | S1: 13th, 14th, 15th — text and immediate meaning (public domain); S2: practice tracing how the 14th reversed Dred Scott; S3: policy analysis — purposes, implementation, and consequences of one amendment (D2.Civ.13.6-8); S4: assess the amendments as solutions to the public problem of reuniting the nation; S5: review + check |
| 30 | Analyze Black political leadership and white resistance | S1: Black officeholders, voters, and institution-builders — why they matter historically (D2.His.3.6-8); S2: close read a Black legislator's speech excerpt (public domain); S3: investigation — resistance forms (Black Codes, Klan violence, and the federal response); S4: perspective analysis — how and why perspectives on Reconstruction changed over time; S5: review + check |
| 31 | Evaluate Reconstruction's contested legacy | S1: the end of Reconstruction — the Compromise of 1877; S2: compare central arguments in two secondary accounts of Reconstruction's meaning (D2.His.17.6-8); S3: legacy research report (revised assignment) with adult-selected sources; S4: argument — success, failure, or unfinished revolution?; S5: unit review + U07 assessment |

### U08 — U.S. history through 1877 primary-source capstone (Weeks 32–35)

The civil-rights argument-brief template format is re-templated here as the
capstone brief; all unit quiz banks serve as spiral review.

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame the capstone inquiry | S1: launch — one compelling question spanning 1492–1877 (e.g., "When did American freedom expand, and for whom?"); S2: draft supporting questions for four eras; S3: determine helpful source kinds for each question (D1.5.6-8); S4: assemble a personal source set from unit materials; S5: inquiry plan check |
| 33 | Gather and evaluate evidence across eras | S1: re-read key primary sources with new eyes — what changed in their meaning?; S2: practice inferring maker/audience for two unfamiliar sources; S3: source-utility evaluation — which sources answer which supporting question; S4: evidence log — claims, sources, and noted limitations; S5: evidence review |
| 34 | Build the argument | S1: organize evidence into a coherent argument about the whole span (D2.His.16.6-8); S2: develop the counterclaim — where does the evidence push back?; S3: draft the capstone brief (re-templated argument brief); S4: peer/adult critique for credibility and structure; S5: revision workshop |
| 35 | Present and take informed action | S1: present the argument to a real audience (family, community group, or recorded presentation — D4.3.6-8); S2: apply a disciplinary lens to a present-day public issue connected to the inquiry; S3: plan constructive action with assessed capacities and levers (D4.6–4.8.6-8); S4: reflect on the action and the year's learning; S5: capstone showcase + U08 assessment |

### Week 36 — Final review and cumulative assessment

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review across all eight units: one timeline, one map, one founding document, one amendment, one argument |
| S3 | Catch-up and re-teaching per adult judgment |
| S4–S5 | Cumulative assessment: source-based argument covering at least three units, with claim, counterclaim, and noted limitations — adult-scored with the R00 rubric |

## 6. Materials, safety, internal resource reuse, and source notes

- **Materials:** printed or on-screen maps, timeline strips, and primary-source
  excerpts (all public domain: founding documents, speeches, ordinances,
  amendments via the National Archives and Library of Congress); blank
  notebooks; the `us_states.csv` / `us_presidents.csv` datasets for U04 tasks
  (column names, units, and rounded values named explicitly at task time;
  statehood years and presidential dates re-verified during authoring).
- **Safety:** no laboratory hazards in this track. Adult supervision is
  required for all investigations; mature themes — enslavement, war, forced
  displacement, racial violence — are handled through age-appropriate,
  adult-selected excerpts with preview notes in every unit teacher guide.
  Simulation/debate roles are assigned, never forced; any learner may take an
  observer/recorder role.
- **Primary sources:** use original public-domain texts or lawful licensed
  texts only; attribute every excerpt with maker, date, and repository. Never
  reproduce copyrighted modern scholarship; summarize and cite it instead.
- **Verified external starting shelf** (from `docs/curriculum-expansion/resource-map.md`;
  each link opened and its role confirmed 2026-10-06): Library of Congress
  classroom materials (primary-source sets), National Archives education
  (founding documents, Reconstruction amendments), Smithsonian Learning Lab,
  National Park Service (battlefield and historic-site resources), Federal
  Reserve education (market-economy models for U05).
- **Internal reuse:** `resources/government_basics.md` and
  `resources/united_states_understanding_and_principles.md` (adult-side
  background for U02/U03 teacher guides); `resources/black_excellence_figures.md`
  (adult pre-selects abolitionists and Reconstruction-era figures for
  U05/U07); `resources/supply_and_demand_economics.md` (U05 market-revolution
  economics); `resources/wars_fundamentals.md` (adult-side only, grade fit
  checked at authoring); `us_states.csv` and `us_presidents.csv` (U04 mapping
  and timeline tasks); `teachers/ai-assistants/resource_finder.md` (drives
  every unit's Resource Pack). `resources/world_facts.md` lives on the
  `curriculum/expansion-plan` branch only and must be merged to main before
  any unit cites it.

## 7. Accessibility supports (built into every unit)

- **Maps, timelines, and diagrams:** color is always paired with symbols and
  text labels; every image ships with alt text and a text-only description of
  the same information. Historical reconstructions are labeled as AI
  illustrations, never as primary sources.
- **Response modes:** oral, pointing, drawing, and graphic-organizer options
  for map and timeline tasks; the adult scribes extended writing whenever
  writing is not the assessed skill.
- **Reading:** original passages are written at grade-8 level; vocabulary is
  pre-taught; primary-source excerpts are excerpted and glossed, never
  assigned raw beyond the learner's reach. Video/media in unit Resource Packs
  require captions or transcripts; the adult previews for ads, age
  suitability, and accuracy.
- **Deliberation and presentation:** sentence starters, role cards, and
  small-group formats; no learner is required to speak publicly beyond the
  adult-supervised setting; observer/recorder roles always available.
- **Assessment:** extended time and chunked tasks as needed; the adult scores
  with rubrics that reward evidence use over recall.

## 8. What the unit sections must deliver (for future runs)

Per `unit-requirements.md` and the track issue, each of U01–U08 needs: unit
README with objectives/prerequisites/vocabulary/standards notes and 20-session
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

- **U01 next:** select the Atlantic-trade map base and the enslaved-person
  account excerpt (public domain, adult-appropriate); verify triangular-trade
  figures from an authoritative source; draft the resistance evidence cards.
- **U02:** select Declaration excerpts and the enslaved-freedom-petition
  pairing; confirm the 1763–1776 timeline events; draft the "whose liberty?"
  evidence sort.
- **U03:** revise the three Constitution assignments with teacher guides,
  role scaffolds, and rubrics; expand quiz keys into full separate answer
  keys; select Federalist/Anti-Federalist excerpts.
- **U04:** verify `us_states.csv` statehood years; select Cherokee memorial
  and removal-message excerpts; add Native-displacement questions to the
  manifest-destiny bank; draft the removal-route map investigation.
- **U05:** verify `supply_and_demand_economics.md` period examples; select
  the abolitionist speech excerpt; adult-select reform case studies; draft the
  external-costs analysis task.
- **U06:** verify Emancipation Proclamation excerpt boundaries; draft the
  turning-point map investigation; expand all four quiz banks' keys into
  separate teacher keys with misconception notes.
- **U07:** select the Black legislator speech excerpt; verify Freedmen's
  Bureau primary reports; draft the 14th-Amendment policy analysis; choose the
  two secondary accounts for the legacy comparison.
- **U08:** re-template the argument brief for the through-1877 capstone;
  define the compelling-question menu; draft the evidence-log and
  presentation rubric; confirm informed-action scope with the adult.
