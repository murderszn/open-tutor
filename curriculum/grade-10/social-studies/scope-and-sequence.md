# Grade 10 Social Studies — Scope and Sequence

U.S. history after Reconstruction, circa 1865 to the present. Audit delivered
2026-10-08 against `main` for issue #49 (A00). The subject track folder had
**0 existing files**; this audit plans the full track from scratch and
inventories reusable material elsewhere in the repository. This is a proposed
pathway, not a universal graduation requirement: high-school social-studies
course order varies by system.

## 1. Audit: existing-file inventory

Re-audited 2026-10-08 against `main`. The issue's 2026-10-01 baseline said the
target folder held 0 Markdown files; that still holds — `curriculum/grade-10/`
does not exist on `main` yet (grade-10 math, science, and language-arts audits
exist only as validated drafts on unmerged branches: PRs #114, #115, #116).
Decisions are **Keep** (reuse as-is or as a formative bank), **Revise**
(needs substantive improvement before unit use), **Enrichment** (optional), or
**Gap** (missing; to be authored).

| Item | Location | Decision |
|---|---|---|
| Track index page | `curriculum/grade-10/social-studies/README.md` | **Gap** — created by this audit: track description, measurable objectives, keep/revise/gap map, unit plan |
| Track scope-and-sequence | `curriculum/grade-10/social-studies/scope-and-sequence.md` | **Gap** — this document |
| Grade-10 hub page | `curriculum/grade-10/README.md` | **Gap** — created by this audit; lists all four subjects truthfully, including the unmerged draft PRs |
| Curriculum index | `curriculum/README.md` (main) | **Revise** — Grade 10 line added; "Grades 9–12 have no folders" wording corrected for grade 10 |
| Curriculum manifest | `curriculum/manifest.json` (main) | **Revise** — three new entries under the existing schema; counts updated |
| Government basics guide | `resources/government_basics.md` | **Keep as adult-side reference** — three-branches, federalism, checks-and-balances vocabulary for U01 contested citizenship, U04's expanded federal state, and U07/U08 civics moments. Its "kid-friendly" framing skews elementary; the adult adapts wording for grade 10 |
| U.S. principles guide | `resources/united_states_understanding_and_principles.md` | **Keep as adult-side reference** — constitutional principles and the amendment mechanism frame U01's Reconstruction Amendments and U06's rights-expansion work. Brief founding-era summary is not assigned as lesson text |
| Black excellence figures | `resources/black_excellence_figures.md` | **Adult-side reference** — the adult pre-selects figures for U01 (Reconstruction-era leadership) and U06 (civil rights movement). Entries are research prompts, not learner reading; check grade fit at authoring |
| Black Panther Party guide | `resources/black-panther-party-rise-1970s.md` | **Adult-side reference for U06/U07** — accurately places the Party's founding in 1966 Oakland and corrects the "rise in the 70s" shorthand; survival programs are the usable detail. Adult frames the topic around evidence and historical debate |
| Global conflicts guide | `resources/wars_fundamentals.md` | **Keep as adult-side reference** — concept vocabulary (alliance, treaty, proxy war, balance of power) for U03 (WWI), U05 (WWII), U06 (Cold War). It is a study companion, not a lesson text |
| Economics guide | `resources/supply_and_demand_economics.md` | **Keep as adult-side reference** — market vocabulary behind U02's industrial-labor lessons, U04's Depression economics, and U07's late-century economy. Its age tracks target grades 5/8; the adult re-levels for grade 10 |
| U.S. presidents dataset | `resources/us_presidents.csv` | **Keep as candidate for U01–U08 timeline/data tasks** — columns: `presidency_number`, `president_name`, `term_start`, `term_end`, `status`, `party`, `home_state`, `days_in_office_approx`, `years_in_office_approx`, `fact`, `google_maps_url`. **Caution:** the `fact` strings are a template ("served as the Nth U.S. presidency") — usable for sequencing and party/term-length analysis, not for content. Spot-check accuracy at authoring |
| U.S. states dataset | `resources/us_states.csv` | **Keep as candidate for U02 migration/urbanization map tasks** — columns: `name_common`, `name_official`, `usps`, `capital`, `region`, `subregion`, `population_approx`, `area_sq_mi`, `area_sq_km`, `population_density_per_sq_mi`, `statehood_year`, `biggest_city`, `biggest_city_population`, `state_fact`, `google_maps_url`. **Caution:** figures are labeled `approx`; check dates before learner-facing use |
| UN countries dataset | `resources/un_countries.csv` (+ `.json`) | **Reference only** — U.S.-history course; marginal use at most (U06 Cold War foreign-policy comparison). The `population` column is empty in the current snapshot |
| World facts guide | `resources/world_facts.md` | **Reference only** — global scope; tangential to this course |
| History of War assignment | `assignments/social-studies/history-of-war/README.md` (+ interactive timeline) | **Enrichment** — labeled grade 8; its "turning points → institutions → modern echoes" frame is sound and its YouTube-search-link format matches the Resource Pack convention. Optional reference for U03/U05; the track's own war content is authored from primary sources, not this page |
| Semester resource library | `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link is opened and assessed before recommendation |
| Resource Finder prompt | `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives each unit's Resource Pack |
| Grade-8 social studies track (draft PR #110) | `curriculum/grade-8/social-studies/` (branch) | **Prerequisite reference only** — its U.S.-through-1877 arc defines entry expectations (see §2); this course continues the American story from 1865 without duplicating its lessons |
| Grade-9 social studies track (draft PR #112) | `curriculum/grade-9/social-studies/` (branch) | **Prerequisite reference only** — its inquiry toolkit (source classification, evidence-based argument writing) is the assumed entry skill set (see §2) |
| Lessons, teacher guides, separate answer keys, quizzes, assessments, diagnostics, resource packs, generated images | none exist | **Gap** — all to be authored in U01–U08 and R00 |

No existing file was found to be factually inaccurate in the sampled re-read
(the government guide's branch descriptions, the wars guide's vocabulary, and
the presidents CSV's term dates for the first entries check out). The dominant
condition is **absence**: no lessons, no teacher support, no assessments, no
resource packs, and no grade-10 folder at all. The dataset cautions that
matter: `us_presidents.csv` facts are templated boilerplate, and
`us_states.csv` figures are approximations — both usable for structure, not
for content, until re-verified.

## 2. Prerequisites

Entry assumes the grade-8 social studies draft arc (U.S. history through 1877)
and the grade-9 social studies draft arc (modern world history inquiry
toolkit), or equivalent: the learner can place centuries and decades on a
timeline, read a scaled map, classify sources by kind, infer a source's maker
and audience, and write a claim supported by two pieces of evidence. Weeks 1–2
diagnose and re-teach those skills before U01. No cross-grade learner
references: prerequisite skills are described, never linked to another grade's
lessons. A guiding adult checks placement, previews every primary source, and
confirms reading stamina for full-length documents (amendment texts,
executive-order and court-opinion excerpts, government-archived speeches).
Reading level steps up in this course: by U05 the learner works with longer,
denser documentary texts with vocabulary support.

## 3. Track objectives

By the end of the year the learner will be able to:

1. **Analyze Reconstruction and contested citizenship:** explain the 13th, 14th,
   and 15th Amendments, federal Reconstruction policies, Black political
   participation and its violent suppression, and how the Compromise of 1877
   and its aftermath reshaped citizenship and rights. (C3 D2.His.1, D2.His.2,
   D2.His.6.9-12; D2.Civ.12.9-12)
2. **Explain industrialization's transformation of work and daily life:**
   describe how railroads, factories, and corporations changed production,
   labor, and cities; analyze labor's responses and the reform movements that
   answered industrial excess. (D2.His.1, D2.His.14.9-12; D2.Eco concepts)
3. **Analyze immigration and urbanization, 1865–1920:** explain push/pull
   factors and settlement patterns, describe the new industrial city, analyze
   nativism and exclusion, and evaluate Progressive-era reforms. (D2.His.1,
   D2.His.4.9-12; D2.Geo concepts)
4. **Evaluate U.S. expansion, imperialism, and World War I:** explain
   continental expansion's consequences, debate overseas empire, and analyze
   WWI's multiple causes and its domestic effects on the United States.
   (D2.His.4, D2.His.8, D2.His.14.9-12)
5. **Explain the 1920s and the Great Depression:** analyze the Depression's
   causes, describe its human cost, and evaluate New Deal programs — the
   expanded federal role and the people the programs left out.
   (D2.His.14.9-12; D2.Civ.5, D2.Civ.13.9-12)
6. **Evaluate World War II's domestic transformation:** explain mobilization
   and the home front; analyze rights under pressure (Japanese American
   incarceration, the Double V campaign); assess America's emerging global
   role. (D2.His.4, D2.His.10, D2.His.12.9-12)
7. **Analyze the Cold War and the civil rights movement:** explain Cold War
   rivalry at home and abroad; evaluate the civil rights movement's
   strategies, achievements, and unfinished work; compare it with other social
   movements of the era. (D2.His.3, D2.His.5.9-12; D2.Civ.2, D2.Civ.14.9-12)
8. **Explain late-twentieth-century change:** analyze the 1970s crises, the
   conservative turn, deindustrialization, demographic and cultural change,
   and the Cold War's end. (D2.His.2, D2.His.5, D2.His.14.9-12)
9. **Investigate recent U.S. history with evidence and media literacy:** frame
   historical questions about recent decades, evaluate how the same events
   are narrated across sources and time, and defend a reasoned interpretation.
   (D1.1–D1.5, D2.His.6, D2.His.16.9-12)
10. **Work with sources, argue from evidence, and reason civically:** gather
    and evaluate sources across viewpoints, integrate evidence into reasoned
    arguments, critique arguments for credibility and missing perspectives,
    present conclusions to a real audience, and assess options for informed
    action. (D3.1–D3.4, D4.1–D4.4, D4.6, D4.7.9-12)

## 4. Standards crosswalk

Source: the College, Career, and Civic Life (C3) Framework for Social Studies
State Standards (National Council for the Social Studies). The framework's
dimension overview was opened at socialstudies.org/standards/c3 on 2026-10-08
(four dimensions confirmed: developing questions, disciplinary tools and
concepts, evaluating sources, communicating conclusions). Indicator codes
below were verified against the published 9–12 band on 2026-10-07 in the
grade-9 social studies audit and are reused here unchanged for the same band.
**Codes are exact; descriptions are brief paraphrases** — check the
authoritative framework for exact wording. **No state adoption,
accreditation, or alignment certification is claimed.** This is a proposed
pathway; high-school social-studies course order varies by system.

### Dimension 1 — Developing Questions and Planning Inquiries

- **D1.1–D1.5.9-12** — the inquiry arc used in every unit: compelling and
  supporting questions, explanation of expert agreement/disagreement, and
  planning source gathering across viewpoints and uses (the U08 capstone is
  the full-arc demonstration).

### Dimension 2 — Civics

- **D2.Civ.2.9-12** — role of citizens in political systems: democratic
  theories, changing participation, and alternative models (U01 contested
  citizenship, U02 reform movements, U06 social movements).
- **D2.Civ.5.9-12** — effectiveness of citizens and institutions in
  addressing social and political problems at every level (U02 Progressives,
  U04 New Deal, U06–U08).
- **D2.Civ.12.9-12** — how people use and challenge laws at local, state,
  national, and international levels to address public issues (U01 the
  Reconstruction Amendments and their subversion, U04 court battles over the
  New Deal, U06 civil rights legislation and litigation).
- **D2.Civ.13.9-12** — evaluate public policies' intended and unintended
  outcomes (U04 the New Deal's inclusions and exclusions, U07 economic and
  social policy, U08 recent policy debates).
- **D2.Civ.14.9-12** — historical, contemporary, and emerging means of
  changing societies, promoting the common good, and protecting rights
  (U01–U02 movement strategies, U06 civil rights and other movements).

### Dimension 2 — Economics

Economics enters through disciplinary concepts with codes verified at unit
authoring: markets, labor, and corporations (U02), Depression-era macro
concepts (U04), deindustrialization and the service economy (U07). Unit
sections will cite verified D2.Eco.9-12 codes during authoring.

### Dimension 2 — Geography

Geography likewise enters through concepts verified at unit level: migration
and settlement (U02), place, region, and human–environment interaction (U03
western expansion), geospatial representation and demographic mapping (U02,
U07). Unit sections will cite verified D2.Geo.9-12 codes during authoring.

### Dimension 2 — History

- **D2.His.1.9-12** — how events and developments were shaped by unique
  circumstances of time and place and by broader historical contexts
  (U01–U08; the course's core causation habit).
- **D2.His.2.9-12** — change and continuity within and across historical
  eras (U01 Reconstruction→Jim Crow continuities; U06→U07 movement legacies).
- **D2.His.3.9-12** — how the historical significance of individuals and
  groups changes over time and is shaped by context (U06 movement leaders
  and their contested legacies).
- **D2.His.4.9-12** — complex, interacting factors shaping people's
  perspectives in different eras (U03 imperialism debates; U05 home-front
  experiences).
- **D2.His.5.9-12** — how historical contexts shaped and continue to shape
  perspectives (U07 memory of the 1960s–70s; U08 how recent history is
  narrated).
- **D2.His.6.9-12** — how the perspectives of history's writers shaped the
  histories they produced (U01: contrasting Reconstruction historiography;
  U08: comparing narratives of recent events).
- **D2.His.8.9-12** — limits of current interpretations when the surviving
  sources underrepresent the people being studied (U01 Black voices in
  Reconstruction records; U03 Native American perspectives on expansion).
- **D2.His.10.9-12** — detecting limitations in kinds of historical evidence
  and in differing secondary interpretations (U03, U05 source labs).
- **D2.His.12.9-12** — using questions about multiple sources to pursue
  further inquiry and find additional sources (every unit's S3
  investigation).
- **D2.His.14.9-12** — multiple and complex causes and effects of past
  events (U04 Depression causes; U05 war and home front; U07 the 1970s
  crisis).
- **D2.His.16.9-12** — integrating evidence from multiple sources and
  interpretations into a reasoned argument about the past (every unit's S4
  writing/deliberation; the U08 capstone).

### Dimension 3 — Evaluating Sources and Using Evidence

- **D3.1–D3.4.9-12** — gathering and evaluating sources; developing claims
  and using evidence, with attention to limitations (S2–S4 of every unit;
  the U03–U05 evidence labs and U08 media-literacy work).

### Dimension 4 — Communicating Conclusions and Taking Informed Action

- **D4.1–D4.4.9-12** — communicating and critiquing conclusions: argument
  construction, critique, and presentation (S4–S5 of every unit).
- **D4.6.9-12** — using disciplinary lenses on local, regional, and national
  problems across contexts (U08 recent-history inquiry).
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
week. Unit sections will expand these into full lessons. Reading stamina
increases across the year: short excerpts in U01–U02, longer documentary
texts from U05 on.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry timeline, map, and source skills | S1: sequence 10–12 events from 1865–2000 on a timeline; S2: read a scaled U.S. map (key, scale, state/region identification); S3: classify 5 sources by kind and infer one maker/audience; S4: re-teach weak spots; S5: short skills check — adult records gaps |
| 2 | Verify entry argument and inquiry skills | S1: write one claim about a 19th-century event with two pieces of evidence; S2: identify a counterclaim and its evidence; S3: draft a compelling + supporting question pair about a recent event; S4: argument-writing re-teach; S5: diagnostic review — adult records gaps that U01–U04 re-teach |

### U01 — Reconstruction, industrialization, and contested citizenship (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Explain Reconstruction policies and the Reconstruction Amendments | S1: launch — the Civil War's end, emancipation, and the federal questions of 1865; S2: close read the 13th, 14th, and 15th Amendment texts (public domain); S3: investigation — map Reconstruction governments and Black officeholding, 1868–1876 (figures verified at authoring); S4: write one paragraph on what the amendments changed on paper; S5: review + check |
| 4 | Analyze contested citizenship: resistance, violence, and federal retreat | S1: Black political participation and institution-building; white resistance and racial violence — multiple causes (D2.His.14.9-12); S2: close read contrasting accounts of one Reconstruction episode (perspective check, D2.His.6.9-12); S3: investigation — Black Codes and the 14th Amendment's contested meaning; S4: deliberation — why did Reconstruction end?; S5: review + check |
| 5 | Explain industrialization: railroads, factories, corporations | S1: launch — railroads, steel, oil, and the new corporate form; S2: practice reading industrial growth data (figures verified at authoring); S3: investigation — map railroad expansion and industrial centers, 1870–1900; S4: cause/effect writing on one industry's growth; S5: review + check |
| 6 | Synthesize: who did industrial America include? | S1: change and continuity — from enslaved labor to wage labor, 1860–1900 (D2.His.2.9-12); S2: source lab — whose voices the Reconstruction-era record underrepresents (D2.His.8.9-12); S3: investigation — the Compromise of 1877 and Jim Crow's legal architecture; S4: argument — was citizenship "reconstructed" or merely redefined?; S5: unit review + U01 assessment |

### U02 — Immigration, urbanization, labor, and reform (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain immigration waves, 1865–1920 | S1: launch — push/pull factors, old and new immigration, settlement patterns; S2: practice reading migration data with `us_states.csv` (approx figures; dates checked at authoring); S3: map investigation — immigrant settlement in industrial cities; S4: write one paragraph on why people moved; S5: review + check |
| 8 | Analyze the new industrial city and nativism | S1: urbanization — tenements, infrastructure, and the urban working class; S2: close read contrasting accounts of city life (a reformer's report vs. an immigrant's recollection); S3: investigation — nativism, exclusion, and Chinese Exclusion as policy (D2.Civ.13.9-12); S4: perspective writing — the same city, different residents; S5: review + check |
| 9 | Analyze labor: unions, strikes, and working conditions | S1: industrial labor — hours, wages, danger, child labor (figures verified at authoring); S2: close read a strike account from two sides; S3: data task — wages and hours with verified, dated figures; S4: argument — did industrialization improve ordinary workers' lives?; S5: review + check |
| 10 | Evaluate reform: Progressives, muckrakers, and suffrage | S1: Progressive reform — aims, methods, and limits; S2: close read a muckraking excerpt and a reform opponent's response; S3: investigation — women's suffrage: strategies, the 19th Amendment, and who the movement included; S4: deliberation — reform or control? evaluating Progressive motives (D2.His.4.9-12); S5: unit review + U02 assessment |

### U03 — U.S. expansion, imperialism, and World War I (Weeks 11–14)

> Sensitive-content note: this unit covers conquest and war. Every lesson is
> adult-supervised; sources are documentary and textual (no graphic imagery);
> the adult previews all materials. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 11 | Explain continental expansion's consequences | S1: launch — the transcontinental West: railroads, mining, farming, and federal policy; S2: close read a federal policy document and a Native American response (perspective check, D2.His.8.9-12); S3: map investigation — reservations, railroads, and settlement, 1865–1890; S4: cause/effect writing on one expansion policy; S5: review + check |
| 12 | Debate overseas imperialism | S1: the Spanish-American War and the debate over empire; S2: close read an anti-imperialist argument and an expansionist argument; S3: investigation — the Philippines, Panama, and the costs of empire; S4: deliberation — was the United States an empire?; S5: review + check |
| 13 | Analyze WWI's causes and the U.S. decision to enter | S1: interacting causes — alliances, nationalism, militarism (D2.His.14.9-12); S2: close read a government-archived war message and an isolationist response; S3: timeline investigation — July 1914 to April 1917; S4: argument — long-term causes vs. triggering events; S5: review + check |
| 14 | Evaluate the war's domestic effects | S1: mobilization, the home front, and the Great Migration's wartime acceleration; S2: close read contrasting views on wartime civil liberties (D2.Civ.12.9-12); S3: investigation — Versailles, the League debate, and the "return to normalcy"; S4: source comparison — two secondary accounts of U.S. entry (D2.His.6.9-12); S5: unit review + U03 assessment |

### U04 — 1920s, Great Depression, and New Deal (Weeks 15–18)

| Week | Goal | Sessions |
|---|---|---|
| 15 | Explain 1920s prosperity and its limits | S1: launch — the 1920s economy: mass production, credit, and speculation; S2: practice reading 1920s economic data (figures verified at authoring); S3: investigation — culture and its critics: whose "roaring" decade?; S4: write one paragraph on who prospered and who did not; S5: review + check |
| 16 | Analyze the Depression's causes and human cost | S1: multiple interacting causes — overproduction, credit, bank failures, global links (D2.His.14.9-12); S2: close read Depression-era testimony (adult-selected, public-domain/government-archived); S3: data task — unemployment, bank failures, and farm prices with verified, dated figures; S4: cause/effect writing on one family's experience as evidence of larger forces; S5: review + check |
| 17 | Evaluate the New Deal: programs, the expanded state, and its limits | S1: the New Deal's first hundred days — programs and aims; S2: close read a program description and a critic's response (D2.Civ.5.9-12); S3: investigation — who the programs included and excluded (D2.Civ.13.9-12); S4: deliberation — did the New Deal remake American government?; S5: review + check |
| 18 | Synthesize: the Depression's long shadow | S1: the Second New Deal, court battles, and the limits of recovery; S2: evidence lab — what counts as evidence that a policy "worked" (D3.1–D3.4.9-12); S3: source comparison — a New Deal supporter's memoir vs. a later historian's assessment (D2.His.6.9-12); S4: argument — evaluating the New Deal with evidence and limitations stated; S5: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Week | Goal | Sessions |
|---|---|---|
| 19 | Consolidate U01–U04; close diagnostic gaps | S1: big-picture timeline 1865–1941 — place, connect, explain; S2: re-teach the weakest inquiry skill from unit checks; S3: map/data review stations; S4: argument-writing clinic — claims, counterclaims, limitations; S5: midyear check — adult records standing and adjusts U05–U08 pacing |

### U05 — World War II: home front, rights, and global role (Weeks 20–23)

> Sensitive-content note: this unit centers war, incarceration, and the
> atomic bomb. Every lesson is adult-supervised; sources are documentary and
> textual (no graphic imagery); the adult previews all materials and frames
> discussion around evidence, responsibility, and remembrance. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 20 | Explain the road to war and U.S. entry | S1: launch — the 1930s world: aggression, isolationism, and the drift to war; S2: close read a government-archived speech and an isolationist response; S3: timeline investigation — 1939–1941: from neutrality to Pearl Harbor; S4: cause/effect writing on the entry decision; S5: review + check |
| 21 | Analyze mobilization and the home front | S1: the war economy — production, rationing, and women's expanded roles; S2: close read two home-front accounts (factory worker, farmer); S3: data task — production and migration figures (verified at authoring); S4: argument — did the war change American women's lives permanently?; S5: review + check |
| 22 | Analyze rights under pressure: incarceration and the Double V campaign | S1: Executive Order 9066 and Japanese American incarceration — the order's text, the camps, the legal challenges (D2.Civ.12.9-12); S2: evidence lab — what the documentary record shows and what it cannot show (D2.His.10.9-12); S3: investigation — the Double V campaign: fighting fascism abroad and racism at home; S4: structured writing — a claim about civil liberties in wartime, supported by cited evidence; S5: review + check |
| 23 | Evaluate the war's end and America's global role | S1: the war's end — the atomic bomb decision and its debates (multiple perspectives, D2.His.4.9-12); S2: the UN, Bretton Woods, and the new international order; S3: source comparison — two secondary accounts of the bomb decision (D2.His.6.9-12); S4: argument — did WWII resolve or relocate America's prewar crises?; S5: unit review + U05 assessment |

### U06 — Cold War, civil rights, and social movements (Weeks 24–27)

> Sensitive-content note: this unit covers state violence, assassinations, and
> movement repression. Adult-supervised, documentary sources only; reflection
> alternatives available. See §6.

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain the Cold War as a global system | S1: launch — U.S.–Soviet rivalry: ideology, alliances, proxy wars, nuclear danger; S2: close read contrasting Cold War speeches (government-archived); S3: map investigation — alliances, proxy conflicts, and the non-aligned movement; S4: argument — was the Cold War primarily ideological or geopolitical?; S5: review + check |
| 25 | Evaluate the civil rights movement: strategies, achievements, limits | S1: the movement's infrastructure — churches, students, organizations; S2: close read a movement document and an opponent's response (linked/licensed where still copyrighted); S3: investigation — one campaign's strategy and outcome (adult-selected); S4: cause/effect writing on what changed and what did not; S5: review + check |
| 26 | Compare the era's other social movements | S1: women's, Latino, Native American, and LGBTQ movements — aims and methods; S2: close read two movement statements (D2.His.3.9-12 — contested legacies); S3: investigation — the Black Panther Party's survival programs and their historical debate (adult-side reference: `resources/black-panther-party-rise-1970s.md`); S4: deliberation — reform, revolution, or something else?; S5: review + check |
| 27 | Synthesize: Cold War at home — consensus, conformity, dissent | S1: postwar consensus and its critics — suburban growth, conformity, and early dissent; S2: practice tracing one Cold War domestic policy's intended and unintended outcomes (D2.Civ.13.9-12); S3: source comparison — how two generations remember the 1960s (D2.His.5.9-12); S4: argument — which movement changed America most?; S5: unit review + U06 assessment |

### U07 — Late twentieth-century politics, economy, and culture (Weeks 28–31)

| Week | Goal | Sessions |
|---|---|---|
| 28 | Analyze the 1970s: crisis of confidence | S1: launch — economic stagflation, energy crisis, Watergate, and the "malaise" debate; S2: close read a 1970s presidential address and a critic's response; S3: data task — inflation, unemployment, and energy figures (verified, dated); S4: cause/effect writing on one 1970s crisis; S5: review + check |
| 29 | Explain the conservative turn | S1: the Reagan era — aims, policies, and the conservative coalition; S2: close read supporters' and critics' assessments (D2.His.4.9-12); S3: investigation — one policy's intended and unintended outcomes (D2.Civ.13.9-12); S4: deliberation — continuity or break with the postwar order?; S5: review + check |
| 30 | Analyze deindustrialization, technology, and demographic change | S1: the changing economy — deindustrialization, the service sector, and new technology; S2: close read two accounts of one community's economic transformation; S3: map/data investigation — Rust Belt, Sun Belt, and suburban growth (D2.Geo concepts); S4: argument — who gained and who lost in the new economy?; S5: review + check |
| 31 | Evaluate the Cold War's end and the 1990s | S1: 1989–1991 — why the Cold War ended when and how it did; S2: close read contrasting assessments of the "end of history" claim; S3: investigation — globalization debates of the 1990s (D2.Eco concepts); S4: source comparison — how the 1990s were narrated then and now (D2.His.5.9-12); S5: unit review + U07 assessment |

### U08 — Recent U.S. history: evidence, media, and historical inquiry (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Compare how recent events are narrated | S1: launch — the same recent event in three reputable outlets across regions; S2: practice detecting framing, selection, and omission (D2.His.10.9-12); S3: investigation — one event's coverage across two decades; S4: write a source-comparison brief; S5: review + check |
| 33 | Inquire into one recent-history question | S1: choose a question; frame a compelling question and supporting questions (D1.1–D1.5.9-12); S2: plan sources across viewpoints, types, and uses; S3: source gathering and evaluation lab; S4: draft the evidence-based argument; S5: peer-style critique with the adult — strengths, limitations, missing perspectives |
| 34 | Reason civically about the question | S1: map the institutions and laws touching the issue (D2.Civ.12.9-12); S2: evaluate citizens' and institutions' effectiveness (D2.Civ.5.9-12); S3: investigation — how people in two communities are addressing it (D2.Civ.14.9-12); S4: draft an action proposal with reasoning about trade-offs; S5: revise with adult feedback |
| 35 | Capstone: present and defend | S1: presentation preparation — argument, evidence, visuals, text alternative; S2: presentation to a real audience (family, co-op, community); S3: defense — answer questions about evidence and limitations; S4: reflection — what the inquiry changed in the learner's thinking; S5: unit review + U08 assessment |

### Week 36 — Final review and cumulative assessment

| Week | Goal | Sessions |
|---|---|---|
| 36 | Demonstrate full-course inquiry and argument | S1: full-course timeline synthesis 1865–present; S2: source-skills stations (classify, infer, detect limits); S3: cumulative assessment part 1 — document-based argument; S4: cumulative assessment part 2 — map/data analysis and civic-reasoning task; S5: course debrief — adult records final standing and next-year recommendations |

## 6. Materials, safety, internal resource reuse, and source notes

**Materials:** U.S. wall map and atlases (physical or digital), timeline
supplies, access to `us_presidents.csv` and `us_states.csv` for timeline and
map/data tasks (with the column cautions in §1), printed or digital
public-domain primary sources (amendment texts, executive orders, and
government-archived speeches), and a notebook or digital document for the
inquiry journal. No specialized purchases; household and library materials
suffice.

**Safety and sensitive content:** U01 (racial violence during Reconstruction),
U03 week 11 (conquest and its costs), U05 (Japanese American incarceration,
combat, the atomic bomb), and U06 (assassinations, movement repression)
require adult-supervised, age-appropriate inquiry: documentary and textual
sources only, no graphic imagery; the adult previews every source, frames
discussion around evidence and responsibility, and provides an
observation/reflection alternative for any activity the learner finds
overwhelming. Civic-action work in U08 stays within lawful, adult-supervised
channels (letters, presentations, community research) — no contact with
officials or organizations without adult review. All investigations have
simulation/observation alternatives; no field hazards.

**Text rights:** all learner-facing historical texts are original passages or
public-domain/licensed sources (amendment and statute texts, executive orders,
government-archived speeches, published testimony). No copyrighted books,
poems, or worksheets are reproduced. Works still under copyright (e.g.,
Martin Luther King Jr.'s 1963 "Letter from Birmingham Jail") are linked or
used under license, never copied into the repository. Secondary
interpretations are summarized or linked, never copied. AI-generated period
illustrations (unit level) are labeled as reconstructions, never presented as
primary sources; NARA/Library of Congress photographs referenced in Resource
Packs are public domain and identified as such.

**Source notes (to be verified again at unit authoring):** C3 Framework
dimensions re-confirmed 2026-10-08 at socialstudies.org/standards/c3;
indicator codes verified 2026-10-07 in the grade-9 social studies audit
against the published 9–12 band and reused here for the same band.
Historical figures used in unit authoring (Reconstruction-era officeholding,
industrial and migration statistics, WWI/WWII scale, Depression-era
indicators, postwar economic data) must be checked against authoritative
sources (National Archives, Library of Congress, Census Bureau, Bureau of
Labor Statistics) before learner-facing use — this audit names no casualty or
casualty-range figures for that reason. Dataset columns and units are named
explicitly in every data task; `us_presidents.csv`'s templated facts and
`us_states.csv`'s approximations are flagged in §1.

**Internal reuse:** the `history-of-war` assignment (enrichment, U03/U05), the
government/U.S.-principles/black-excellence/Black-Panther-Party/wars/economics
guides (adult-side references), and the presidents/states datasets (with
cautions) are the reusable core. Everything else is authored fresh for this
track.

## 7. Accessibility supports (built into every unit)

- **Multiple representations:** every map task ships with a text-based
  alternative (data table or ordered list); every timeline has a linear text
  version; generated images (unit-level) always carry alt text, caption, and
  a text-only equivalent.
- **Reading:** public-domain sources are excerpted to the essential passage
  with vocabulary support; full documents are optional extensions; the adult
  may read aloud or use text-to-speech. Passage length grows across the year
  (U01–U02 short excerpts → U05–U08 longer documentary texts).
- **Processing and output:** graphic organizers for every argument task;
  sentence starters for claims and counterclaims; extended time built into
  the S5 review sessions; oral or scribed responses accepted for any written
  task with adult documentation.
- **Sensitive content:** advance notice to the learner before U01 week 4,
  U03 week 11, U05 week 22, and U06 weeks 25–26; reflection alternatives for
  any distressing material; pacing control stays with the adult.
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
