# Lesson 05 — Forecasting, Models, and Uncertainty

**Goal:** By the end of this lesson you can explain how a numerical
forecast is made, interpret a probability forecast correctly, and
judge a forecast by its track record rather than by one outcome.

**Time:** ~50 minutes. **Materials:** notebook, calculator.

**Readiness check (2 minutes):** A forecast says "40% chance of rain
tomorrow." Write down what you think that means, in one sentence.
Keep it — you will compare it with the correct interpretation at the
end of the lesson.

## 1. How a numerical forecast is made

A modern forecast is a physics calculation, not a guess and not a
pattern-matching trick. The steps are:

1. **Observe.** Satellites, weather balloons (radiosondes), surface
   stations, buoys, aircraft, and radar measure the current state of
   the atmosphere: temperature, pressure, humidity, and wind in
   three dimensions.
2. **Assimilate.** Those observations are blended into a complete
   starting picture on a three-dimensional grid. Where observations
   are sparse (oceans, remote land), the starting picture is less
   certain — and that uncertainty propagates.
3. **Integrate forward.** A supercomputer steps the equations of
   fluid motion, thermodynamics, and radiation forward in time on
   the grid, producing temperature, wind, and precipitation at each
   future time step.
4. **Post-process and communicate.** Raw grid output is adjusted for
   known local biases (a valley station runs colder than the grid
   average) and translated into the forecast people see.

The atmosphere is chaotic: tiny differences in the starting picture
grow with time. That is why a 2-day forecast is usually good, a
7-day forecast is often roughly right about the pattern but wrong
about the details, and a 14-day "forecast" of a specific town's rain
is mostly entertainment. The limit is in the physics, not in the
forecasters' effort.

## 2. Ensembles: forecasting the uncertainty, not just the weather

Because the starting picture is never exact, forecast centers run
the model many times with slightly different starting conditions —
an **ensemble**. If 40 of 50 ensemble members produce measurable
rain over your town tomorrow, the probability of precipitation is
reported as 80%. The spread of the members is itself information:
members clustered together mean high confidence; members scattered
across outcomes mean low confidence, even if the headline number
looks precise.

**Worked example 1 — What "40% chance of rain" means.** It does
*not* mean "it will rain 40% of the day," nor "40% of your town will
get rain" (though forecasters sometimes quote areal coverage
separately — check the product's definition). In the ensemble sense,
it means: in 40% of the model runs (or, in the long-run verification
sense, on about 40% of past days given this forecast), measurable
rain (usually ≥ 0.01 inch / 0.25 mm) occurred. The correct test of
such a forecast is calibration over many days: when forecasters say
40%, rain should occur about 40% of the time. A single rainy day
does not prove a 40% forecast "wrong," and a single dry day does
not prove it "right."

**Worked example 2 — Judge a forecaster honestly.** A forecaster
issues "30% chance of rain" on 100 days. Rain falls on 31 of them.
That forecast is well calibrated — nearly perfect, in fact — even
though it "missed" on 31 days and "cried wolf" on 69 dry days.
Conversely, a forecaster who always says 0% or 100% and is right
70% of the time is *worse* than the calibrated 30% forecaster,
because the all-or-nothing forecasts give no usable risk
information. Compare your readiness-check sentence with this
section: if your sentence said "it will rain 40% of the time," revise
it now — that is the most common probability error in weather
communication, and it is worth fixing explicitly.

## 3. Feedbacks: why small changes can grow

A **feedback** is a loop in which a change causes further change in
the same direction (positive feedback) or opposing change (negative
feedback). Two matter most for this unit:

- **Ice–albedo feedback (positive):** warming melts ice, exposing
  dark ocean or land with lower albedo; the darker surface absorbs
  more sunlight, causing more warming, melting more ice. Lesson 01's
  albedo arithmetic is the engine of this loop.
- **Water-vapor feedback (positive):** warming increases
  evaporation; water vapor is a greenhouse gas, so more vapor traps
  more heat, causing more warming. (Water vapor is a feedback, not
  a forcing: it responds to temperature rather than starting the
  change — a distinction worth keeping sharp.)
- **A stabilizing example (negative):** warming increases cloud
  cover in some regions, and brighter clouds reflect more sunlight,
  damping the warming. Whether clouds overall amplify or damp
  warming is still an active research question — a good answer
  names the uncertainty rather than picking a side.

This is the HS-ESS2-2 move: one change (ice loss, or a warmer ocean
surface feeding a storm) creates changes in other systems. It is
also why "climate" is not just "weather averaged": feedbacks make
the system respond nonlinearly, so a steady push can produce a
sudden shift.

## 4. Communicating risk without overclaiming

Good forecast communication states: what is expected, how confident
the forecast is, and what would change it. Compare:

- Weak: "It will rain tomorrow." (No uncertainty, no way to plan.)
- Better: "Rain is likely tomorrow afternoon (70%), with the
  heaviest rain if the cold front arrives before 3 p.m.; if the
  front is slower, rain holds off until evening." (Probability,
  timing, and the condition that would change the outcome.)

For hazardous weather, communication adds action: watches mean
conditions are favorable (prepare); warnings mean the hazard is
occurring or imminent (act). Confusing a watch with a warning is a
communication failure with real consequences — keep the pair
straight in every forecast you write.

## Guided practice

1. An ensemble of 20 members: 14 show rain over your town, 6 show
   none. What is the probability of precipitation? What does the
   spread say about confidence?
2. A forecaster says 20% chance of rain on 50 days; rain falls on
   22 of them. Is the forecast well calibrated? What should the
   forecaster adjust?
3. Explain ice–albedo feedback in a four-link chain, naming the
   albedo change and the direction of each link.
4. Rewrite this forecast honestly: "There will be a thunderstorm
   at 4 p.m. tomorrow." (Hint: no model can promise an hour and a
   place that precisely at 24 hours; give a probability, a window,
   and the condition that would change it.)
5. **Error analysis:** A classmate writes, "The 7-day forecast was
   wrong because it rained on a day it said 20%." Correct the
   error using calibration: a 20% forecast *expects* rain about
   one day in five.

## Independent practice

See Practice Set E in `../practice.md`.

## Application

Take a real 7-day forecast for your town (resource pack) and score
it against what actually happens over the next three days:
temperature within 3 °C counts as a hit; precipitation occurrence
counts against the stated probability using the calibration idea
(over three days you cannot verify calibration — say so, and say
what sample size you *would* need). Write a half-page verdict:
where was the forecast good, where did it fail, and was the failure
a model error, a timing error, or an uncertainty the forecast
already stated?

## Exit check

Explain to a skeptical friend why a forecaster who says "30%" and
gets rain is not necessarily wrong. If your explanation does not use
the words "calibration" or "many days," try again.

## Supports and extensions

- **Reading access:** re-read section 2 with a partner, pausing
  after each sentence to restate it in your own words.
- **Alternate response:** present the exit check as a 60-second
  spoken explanation instead of writing it.
- **Extension:** investigate how forecast skill has changed over
  the decades (a 5-day forecast today is about as accurate as a
  3-day forecast was in the 1990s): what improved — observations,
  models, computers, or all three? Cite a source from the resource
  pack or a reputable agency page.

## Teacher note

Likely misconceptions: probability as fraction of the day or of the
area; one outcome as verification; "models are just guessing"
(models solve physics equations from observations — the uncertainty
is in the starting data and chaos, not in the method). Answer-key
reference: `../answer-key.md` § Set E.
