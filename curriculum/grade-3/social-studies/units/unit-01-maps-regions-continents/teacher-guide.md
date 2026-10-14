# Teacher Guide — Unit 01

**For the guiding adult.** Student materials never contain answers; all
solutions live in [answer-key.md](answer-key.md).

## Session-by-session guidance

**Week 3 — Continents and oceans.** S1: teach Lesson 01 part 1 with a globe;
chant the seven continents. S2: label the blank outline map, then run the
globe-vs-flat-map investigation — let the learner *discover* the stretch by
trying to flatten an orange-peel drawing if you have an orange handy. S3:
practice set A; insist on the Australia/Southern Ocean naming the unit
teaches. S4: naming check + review; record which names are shaky.

**Week 4 — Scale.** S1: Lesson 02 part 1 — the three-map laydown is the
whole lesson; do not rush it. S2: scale-bar estimating; keep multiplication
at ×1/×2/×5/×10 and do the arithmetic together if needed — the assessed
skill is reading the scale and knowing to multiply. S3: the learner builds
their scaled map (title, key, compass rose, labels, scale bar); photograph
it for the portfolio. S4: practice set B + review; re-teach "large scale =
small area, big detail" if the mantra is wobbly.

**Week 5 — Location → environment; questions.** S1: Lesson 03 — show the
generated illustration, read the caption and the AI-illustration label
aloud, then work the evidence chart. S2: finish the chart; press the "why
they differ" sentence — it must name location AND rain/heat. S3: Lesson 04;
keep the learner's final compelling + supporting questions on file for the
project. S4: formative quiz (10 pts) + project work time (choose region,
draft questions).

**Week 6 — Regions; assessment.** S1: Lesson 05 part 1 — the region sort.
Pre-empt the traps: the CSV `region` column says "Americas" for all 50
rows (world region) — the sort uses `subregion`; DC is not a state, leave it
out; some videos teach five regions — we use the Census Bureau's four.
S2: the graded region-comparison task (rubric below). S3: review driven by
the practice D5 self-check + project share (3-minute presentations). S4:
unit assessment (20 pts).

## Misconception watch (all lessons)

- The equator is imaginary, not painted on the ground.
- "Australia" vs. "Oceania" and "Southern Ocean" vs. "Antarctic Ocean" are
  the same places under different names; this unit teaches Australia and
  the Southern Ocean (Britannica Kids / NOAA).
- A flat map is not "wrong" — flattening a ball always stretches something.
- Large-scale = small area + big detail (the mantra).
- Desert = dry, not hot-and-sandy-everywhere; most of the Sahara is rock
  and gravel, and Antarctica is a desert too.
- Regions are an official grouping system (data decides, map confirms),
  not "places that feel southern."

## Reteaching guidance

- **Continents/oceans shaky:** go back to the globe chant and the
  neighbor-landmark strategy (Lesson 01, worked example 1); re-label the
  outline map in Week 6 S3.
- **Scale confusion:** re-lay the three maps; have the learner physically
  cover the state map's area with the neighborhood map to feel the scale
  difference. Drop to nonstandard units ("1 hand = 1 block") before
  centimeters.
- **Location → environment vague:** return to the illustration with the
  text-only alternative side by side; ask "what is the SAME in both halves?"
  (sun) and "what is DIFFERENT?" (water) until the sentence lands.
- **Weak compelling questions:** apply the one-word/one-number test
  (Lesson 04); grow a fact lookup with "…and why does that matter?"

## Region-comparison task rubric (Lesson 05, Session 2)

| Points | What it looks like |
|---|---|
| 4 | 4–6 sentences; each region's location named; heat AND rain described for both; one "why they differ" sentence linking location to environment |
| 3 | Locations named; heat/rain described; the "why" sentence is vague or missing one element |
| 2 | One region described well, the other thin; no "why" sentence |
| 1 | Lists facts without comparing |

## Dataset notes

`resources/us_states.csv` (checked 2026-10-10): 50 rows. Use columns
`name_common`, `capital`, `subregion` ("United States Northeast/Midwest/
South/West"). The `region` column is "Americas" for every row — do not use
it for the U.S.-region sort. `population_approx` and `area_sq_mi` are
rounded approximations; the `state_fact` one-liners are unverified — check
before repeating. `resources/un_countries.csv`: `name_common`, `region`,
`subregion`, `capital` are usable; the `population` column is empty in the
current snapshot — do not use it.

## Next unit preview

Unit 02 (Weeks 7–10) builds on this unit's scale habit and region routine:
how environment shapes settlement, how people use resources, and how
settlements change the land. Keep the learner's scaled map and Region
Explorer report — U02's settlement mapping reuses both.
