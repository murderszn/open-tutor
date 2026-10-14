# Lesson 04 — Oceans, Seas, Capitals, and Time Zones

**Time:** three sessions, about 35 minutes each · **Materials:** a world
map or globe; a U.S. map; the `us_states.csv` dataset (adult side); a
globe and a lamp (adult-supervised — see the kept
[time-zones-explanation.md](../../../assignments/time-zones-explanation.md));
paper and pencil

**Goal (read to the learner):** Today you will locate Earth's five oceans,
learn why the United States counts five, name state capitals from data,
and discover why clocks show different times in different places. By the
end, you will tell the time in a second city when given the time in a
first city — and explain why.

**Readiness check:** Adult: "How many oceans are there? Name any you
know." Accept any answer — including four. Today's lesson explains why
the answer changed.

## Teaching (adult reads and models)

**Part 1 — Five oceans.** Earth has one connected world ocean, but people
divide it into five named parts: the **Pacific**, the **Atlantic**, the
**Indian**, the **Arctic**, and the **Southern** oceans. For a long time,
most maps showed only four — the Southern Ocean, the water circling
Antarctica, was treated as part of the other three. Today most countries,
**including the United States**, recognize it as the fifth ocean
(source: NOAA, "How many oceans are there?"). So: older maps say four,
newer maps say five, and this unit teaches **five**. A **sea** is smaller
than an ocean and often partly enclosed by land — for example, the water
between Florida, Texas, and Mexico.

**Part 2 — State capitals.** A **capital** is the city where a state's
government works — not always the biggest city. The dataset's `capital`
column names each one: Texas → Austin, Florida → Tallahassee, California
→ Sacramento, New York → Albany. (New York City is the biggest city; the
capital is Albany. Capitals surprise people — that is why we check the
data instead of guessing.)

**Part 3 — Time zones.** Shine a lamp on a globe in a dim room: one side
is lit (day), the other is dark (night). Earth **rotates** — it spins once
every 24 hours — so different places face the sun at different times.
That is why clocks disagree: when it is noon where you are, it can be
morning somewhere west of you and night somewhere far east.

To keep life sane, the world is divided into **time zones** — strips
where clocks show the same time. The contiguous United States has four:
**Eastern, Central, Mountain, Pacific**. Alaska and Hawaii add two more.
The rule of thumb: **each zone west is one hour earlier.** Noon in New
York (Eastern) → 11:00 AM in Chicago (Central) → 10:00 AM in Denver
(Mountain) → 9:00 AM in Los Angeles (Pacific). Complication to name, not
memorize: **daylight saving time** shifts clocks in many places for part
of the year, so always check a current source for the exact time.

**Worked example 1 — locating oceans with evidence:**

> Adult on the world map: "My claim: 'The Pacific Ocean touches both
> Asia and North America.' My evidence: (1) the label 'Pacific Ocean'
> printed across the big blue area; (2) the continent labels 'Asia' on
> one side and 'North America' on the other. Now the Southern Ocean: it
> has no continent on its south side — the label rings Antarctica, and
> NOAA says the U.S. recognizes it as the fifth ocean. Steps: find the
> label, read what it touches, cite the source for the count."

**Worked example 2 — same moment, two cities:**

> Adult on the U.S. time-zone map: "It is 3:00 PM in New York. New York
> is in the Eastern zone; Chicago is in the Central zone — one zone west.
> One zone west means one hour earlier: 3:00 PM minus 1 hour = 2:00 PM in
> Chicago. Now Los Angeles: Eastern → Central → Mountain → Pacific is
> three zones west, so 3:00 PM minus 3 hours = 12:00 noon in Los Angeles.
> Steps: (1) find each city's zone, (2) count the zones between them,
> (3) subtract one hour per zone west. My evidence: the time-zone map's
> zone boundaries and city dots."

Key idea to say plainly: **The U.S. recognizes five oceans — Pacific,
Atlantic, Indian, Arctic, and Southern. A capital is where a state's
government sits — check the data, don't guess. Earth's rotation makes
day and night sweep around the planet, so time zones let each place keep
sensible clock times: one zone west, one hour earlier.**

## Guided practice (adult leads, learner decides)

1. "Point to each ocean on the world map and name it. Which one is
   newest on our maps?" *(Pacific, Atlantic, Indian, Arctic, Southern —
   the Southern is the newly recognized fifth)*
2. "Is the water between Florida and Texas an ocean or a sea? What is
   your evidence?" *(a sea/gulf — the map shows it smaller and partly
   enclosed by land; the label names it)*
3. "The dataset says the capital of Montana is Helena. Is Helena also
   Montana's biggest city? Check the columns." *(no — `biggest_city` is
   Billings; capital and biggest city are different columns)*
4. "It is 10:00 AM in Chicago (Central). What time is it in Denver
   (Mountain)?" *(9:00 AM — one zone west, one hour earlier)*
5. "It is 10:00 AM in Chicago. What time is it in New York (Eastern)?
   Show the direction of your thinking." *(11:00 AM — one zone EAST, so
   one hour LATER; going east adds)*
6. Error-analysis: "A friend says, 'Time zones exist because the sun
   moves around the Earth.' What is wrong?" *(the sun does not move
   around us — Earth rotates, turning places toward and away from the
   sun; the lamp-and-globe model proves it)*

## Independent practice

- The learner labels the five oceans on a blank world outline map and
  writes one sentence on why the count is five, citing NOAA.
- The learner looks up 6 state capitals in the dataset (adult's choice,
  mixing regions) and writes each capital beside its state; then circles
  any capital that is NOT the state's biggest city.
- The learner completes a time-zone table: given the time in one city,
  fill in two others (adult picks the cities and starting time).

## Application

**Same moment, three cities** (continues into Week 5, S3): the learner
picks three U.S. cities in three different time zones, writes the current
rule ("one zone west = one hour earlier"), and builds a small chart: "If
it is ___ in [City 1], it is ___ in [City 2] and ___ in [City 3]." Then
the learner runs the globe-and-lamp model (adult-supervised) and writes
two sentences explaining WHY the times differ, using the words
*rotation*, *sun*, and *time zone*.

## Exit check

1. Name the five oceans. *(Pacific, Atlantic, Indian, Arctic, Southern)*
2. What is a state capital, and why shouldn't you guess it? *(where the
   state government is; the biggest city is often not the capital —
   check the `capital` column)*
3. It is 4:00 PM in Los Angeles (Pacific). What time is it in New York
   (Eastern)? *(7:00 PM — three zones east, three hours later)*

## Supports

- **Reading access:** the adult reads all map labels and dataset rows
  aloud.
- **Alternate response mode:** ocean labels may be pointed to; time-zone
  answers may be shown on a practice clock or spoken.
- **Lamp safety:** the adult handles the lamp; the learner holds and
  slowly turns the globe. Never touch a hot bulb.

## Extension

The learner investigates one named sea (e.g., from the kept
`major-oceans-seas-quiz.md` content areas) and writes where it sits and
which ocean it connects to, with the map labels as evidence.

## Teacher note — likely misconceptions

- "The sun goes around the Earth" is the most common wrong model. The
  globe-and-lamp demonstration — the learner turns the globe themselves —
  fixes it physically, not just verbally.
- Learners add hours going west. Keep the rule in words: "Going west,
  subtract an hour; going east, add an hour" — and always start by
  naming each city's zone from the map.
- Daylight saving will come up. Treat it as "clocks sometimes shift;
  check a current source" — not as a rule to memorize. (Answer key:
  `answer-key.md`, Lesson 04 — Montana's biggest city verified from the
  dataset at authoring time.)
