# Project — Harbor Tide Model: When Can a Boat Safely Pass?

**Type:** investigation and written report (adult-guided, individual).
**Sessions:** S10 (data analysis), S15 (window solving), S16 (writing
and self-check). **Materials:** this table, paper, calculator, Desmos
(optional, for graphing the model against the table).

## The situation

A harbor channel is safe for a deep-keeled boat only when the water
depth is at least 7 m. A tide gauge recorded the depth (in meters) at a
harbor entrance every two hours for one day. **These values are a
fictional practice dataset written for this project** — they follow a
clean sinusoidal pattern on purpose, so the modeling steps are checkable
by hand. They are not measurements from a real harbor, and no conclusion
from them should be used for real navigation. (An extension below asks
the learner to repeat the analysis on real NOAA tide predictions, with
an adult verifying the station and the data.)

| `t` (hours after midnight) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| depth (m) | 6.5 | 8 | 6.5 | 3.5 | 2 | 3.5 | 6.5 | 8 | 6.5 | 3.5 | 2 | 3.5 | 6.5 |

## Tasks

1. **Describe the pattern.** From the table alone, state the maximum
   depth, the minimum depth, the midline, the amplitude, and the period
   (the time between two high tides). Show how each number comes from
   the table.
2. **Write the model.** Write a sinusoidal model `h(t)` for the depth
   that reproduces every table value exactly. Use a cosine form with a
   phase shift, and verify it at `t = 0`, `t = 2`, `t = 8`, and `t = 20`
   by hand.
3. **Solve for safe passage.** Solve `h(t) ≥ 7` on `[0, 24)` exactly
   (with `arccos` where needed) and give the safe-passage windows as
   time intervals to two decimal places. Check both endpoints of each
   window in the model, and explain why the answer is intervals rather
   than single times.
4. **Interpret and defend.** In a short written report (about one page):
   state the model with each parameter interpreted in the harbor's
   words; state the safe windows and what a boat captain would do with
   them; state the model's assumptions (perfectly periodic tides, no
   weather effects, fictional data); and state one way the real harbor
   could differ enough to make a window unsafe.
5. **Extension (optional, not scored):** with an adult, pick a real
   station on NOAA Tide Predictions (see `resource-pack.md`), record
   one day of predicted high/low times, and write two sentences on
   whether a single sinusoid would fit that day well or badly — and why.

## Deliverables

- A table-analysis page (Task 1) with midline, amplitude, period, and
  the evidence for each.
- The model with four hand verifications (Task 2).
- The solved inequality with endpoint checks (Task 3).
- The one-page written report (Task 4).

## Rubric (40 points)

| Row | 4 points (full) | 2 points (partial) | 0 points |
|---|---|---|---|
| Pattern from the table (8 pts: max, min, midline, amplitude, period, each evidenced) | All five values correct with table evidence | Three or four correct, or evidence missing | Fewer than three, or values contradict the table |
| Model form and fit (10 pts) | Correct cosine model with phase shift; four hand verifications shown and correct | Model correct but verifications incomplete, or a sine model with equivalent correctness and partial checks | Model does not reproduce the table |
| Safe windows (12 pts) | Inequality solved exactly, windows correct to two decimals, endpoints checked, intervals (not points) explained | Windows approximately right but endpoints unchecked, or one window missed | Windows wrong or given as single times |
| Written report (10 pts) | Parameters interpreted, captain's action stated, assumptions stated, one real-world failure mode named | Two of the four report elements missing or vague | Report missing or unrelated to the model |

**Scoring note (adult):** a correct sine-form model earns full credit on
the model row if its verifications are complete — the form is a choice,
not the answer. The windows row requires the endpoint checks: an
unchecked window earns at most half credit for that row.
