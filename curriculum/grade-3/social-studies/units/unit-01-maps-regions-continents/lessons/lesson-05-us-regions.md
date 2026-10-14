# Lesson 05 — The Four Regions of the United States

**Time:** two sessions, 30–35 minutes each · **Materials:** a U.S. map (with
state names), the `resources/us_states.csv` dataset (adult reads the
`name_common`, `capital`, and `subregion` columns aloud or shows a short
list), the unit vocabulary word card (region)

**Goal (read to the learner):** Today you will learn the four regions of the
United States, sort real states into regions using data, and compare two
world regions' environments like a geographer.

**Readiness check:** Adult: "What is a region?" Accept: an area of land
whose places share something in common. If stuck: "The desert and the
rainforest are two world *regions* — each one's places share a climate.
Today we split our own country into regions."

## Teaching (adult reads and models)

A **region** is an area of land whose places share something in common —
location, climate, or landforms. The U.S. Census Bureau groups the 50 states
into **four regions**: the **Northeast**, the **Midwest**, the **South**,
and the **West**. (Some books and videos teach a five-region system instead;
this unit uses the Census Bureau's four, because that is how our state
dataset is organized. Name the difference out loud if a video says
otherwise.)

Our dataset, `resources/us_states.csv`, lists every state with a
`subregion` column: "United States Northeast," "United States Midwest,"
"United States South," "United States West." (Its `region` column says
"Americas" for every row — that is the *world* region, not the U.S. region,
so we use `subregion`.) Populations and areas in the file are rounded
approximations — fine for sorting and comparing, not for exact claims.

What makes each region a region? **Location plus shared characteristics:**

- **Northeast** (9 states): oldest cities, dense coasts, cold snowy winters,
  the Appalachian Mountains.
- **Midwest** (12 states): broad flat farmland, the Great Lakes, hot summers
  and very cold winters.
- **South** (16 states): warm and humid, long growing seasons, Gulf and
  Atlantic coasts.
- **West** (13 states): the biggest region — deserts, the Rocky Mountains,
  Pacific coast, rainforests in the Pacific Northwest.

**Worked example 1 — sorting with data:**

> Adult: "Take Texas. The dataset's subregion column says 'United States
> South.' On the map, Texas sits in the southern part of the country, by
> the Gulf of Mexico. Data and map agree: Texas → South. Now you try one."

**Worked example 2 — comparing two world regions (the graded task setup):**

> Adult: "Compare the **South region** of the U.S. with the **Sahara region**
> of northern Africa. Both are warm — but the U.S. South gets plenty of
> rain (humid summers, rivers, forests), while the Sahara gets almost none.
> Same warmth, different water → different plants, animals, and ways of
> life. My sentence: 'The U.S. South and the Sahara are both hot, but the
> South's rain grows forests while the Sahara's dryness grows desert.'"

Key idea to say plainly: **Regions group places that share location and
characteristics. Data (like the subregion column) plus a map lets you sort
places into regions — and comparing two regions' environments shows how
location shapes life.**

## Guided practice (adult leads, learner decides)

1. "The dataset says Illinois is 'United States Midwest.' Find Illinois on
   the map. Does its location match?" *(yes — central, by the Great Lakes)*
2. "Sort these four: Maine, Arizona, Georgia, Ohio." *(Northeast, West,
   South, Midwest — adult verifies against the subregion column)*
3. "Why is Hawaii in the West region even though it is far from the other
   Western states?" *(regions group by location system, not just neighbors;
   the Pacific division sits in the West)*
4. "Name one environmental characteristic the South and the West share, and
   one way they differ." *(share: warmth in much of each; differ: the
   South is humid with long rainy seasons, much of the West is dry desert
   and mountain)*
5. Error-analysis: "A friend sorted Florida into the West 'because it is
   warm like Arizona.' What is wrong, and how do data + map fix it?"
   *(warmth alone does not define a region; the subregion column says
   South and the map shows Florida in the southeast)*

## Independent practice

- **Region sort:** the learner sorts 12 states (adult picks a spread: 3 per
  region) into the four regions, citing the subregion column and one map
  observation per state. Success: ≥10 of 12 correct with evidence named.
- **Session 2 — graded region-comparison task:** the learner compares two
  world regions' environments (U.S. South vs. Sahara, or the learner's
  choice with adult approval) in 4–6 sentences: location of each, heat and
  rain, plants/animals, and one "why they differ" sentence. (Counts toward
  Objective 5; rubric in [teacher-guide.md](../teacher-guide.md).)

## Application

"Your family is moving and can choose any U.S. region. Which would you pick
for someone who loves snow? For someone who loves the ocean? Use region
evidence — not just one state." (Snow: Northeast or Midwest; ocean:
South's Gulf/Atlantic coasts or West's Pacific coast.)

## Exit check

Prompt: "Name the four U.S. regions. How do you decide which region a state
belongs to?" Accept: Northeast, Midwest, South, West; check the dataset's
subregion column and confirm with the map.

## Supports and extensions

- **Support:** Pre-sort 8 of the 12 states; the learner sorts 4 and
  explains one. Color-code the four regions on the map first, then match
  states to colors.
- **Reading/language access:** "Region" anchored with a gesture (circle a
  cluster of states with a finger). State names read aloud by the adult;
  the learner points and sorts.
- **Alternate response mode:** Sort physical state cards into four labeled
  trays; dictate the comparison sentences for the adult to scribe.
- **Extension:** The learner investigates one state's `state_fact` from the
  dataset, verifies it with the adult (the audit flags these as
  unverified), and reports whether it fit the region's characteristics.

## Teacher note

**Likely misconception:** regions are "just directions" (learners put any
southern-feeling state in the South). Re-anchor: regions are an official
grouping system — data decides, then the map confirms. Second slip: the
five-region videos vs. our four-region system — say it plainly: "Different
books split the country differently; we use the Census Bureau's four
because our dataset does." Note the CSV's `region` vs. `subregion` trap
before the sort begins. Keep DC out of the state sort (it is not a state).
**Answer-key reference:** [answer-key.md](../answer-key.md) (Lesson 05).
