# Lesson 06 — Analog vs. Digital Signals

**Goal (learner-facing):** I can explain why a message sent as
pulses survives a noisy trip better than a message sent as a
smooth wave, and argue that claim from evidence.

**Time:** 50 minutes · **Materials:** notebook, a flashlight
(adult-operated, never aimed at eyes), paper cups and string
(optional) · **Teacher key:**
[answer key](../answer-key.md#lesson-06)

## Readiness check (5 min)

The adult draws a smooth, wavy line on the board, then a row of
short and long bars. Ask: "If I photocopy each one three times,
copy of a copy of a copy, which one is still readable at the end
— and why do you think so?" Learners vote; the lesson tests the
vote instead of settling it by authority.

## Explanation

Waves do more than carry energy — they carry **information**.
A song, a photograph, a phone call, a text message: each is a
pattern imposed on a wave. There are two fundamentally different
ways to impose the pattern.

An **analog signal** varies smoothly and continuously, like the
groove of a vinyl record or the wavy line on the board. The shape
itself *is* the message: louder sound makes a taller wave, a
brighter picture makes a stronger signal. The trouble is that
noise — any unwanted extra wobble — adds directly to the shape.
Copy an analog signal, and the copy includes the noise. Copy the
copy, and more noise joins. After several copies, the message is
buried under accumulated wobble, and nobody can separate the
original shape from the noise anymore, because the noise looks
exactly like signal.

A **digital signal** (a **digitized signal**) does not copy the
shape. It chops the message into a set of distinct steps and sends
them as **pulses**: for example, flashes of light down a fiber-optic
cable, or radio-wave pulses from a Wi-Fi device, or a pattern of
short and long flashes agreed in advance. The receiver only has to
answer a simple question at each step: "Was there a pulse, and
was it short or long?" Small noise does not change that answer —
a slightly dimmer flash is still a flash, a slightly late pulse is
still a pulse. And when the signal is passed on, it can be cleaned
up and sent again exactly, pulse for pulse, because the receiver
knows what a clean pulse is supposed to look like. Copies of a
digital signal can therefore be as good as the original, while
copies of an analog signal always get worse.

That is the claim this lesson is about, stated carefully:
**digitized signals are a more reliable way to encode and
transmit information than analog signals.** "More reliable" does
not mean "always better in every way" — a digital copy of a bad
recording is still a bad recording, and a digital system needs
agreed codes and equipment. It means the *transmission* does not
degrade the message the way analog copying does. The evidence is
qualitative: it comes from comparing what happens to a smooth
shape and to a pulse pattern after noise and copying, not from
counting anything in binary. (This unit never asks for binary
counting, and never asks how any particular device works inside —
those are outside the middle-school boundary for this standard.)

Run the comparison yourself, as the **noisy-channel game**:

1. **Analog chain.** The adult draws a wavy line. Learner A
   copies it freehand; Learner B copies A's copy; Learner C
   copies B's copy. Compare C's line with the original.
2. **Pulse chain.** The adult agrees a code with the class (for
   example: short flash = "dot," long flash = "dash," pause =
   "space") and a short message in that code. Learner A flashes
   it (or claps it) to B, B to C, C writes it down — while the
   rest of the class makes quiet background noise. Compare C's
   message with the original.

The analog chain drifts; the pulse chain usually arrives intact.
That difference, observed in your own classroom, is the evidence
for the claim — the same kind of evidence the assessment asks you
to argue from.

**Vocabulary:** *signal* (a pattern on a wave that carries
information), *analog signal* (smooth, continuous variation where
the shape is the message), *digital signal / digitized signal*
(information chopped into distinct pulses), *pulse* (one distinct
burst, such as a flash), *noise* (unwanted extra variation that
degrades a signal).

## Worked examples

**Example 1.** A vinyl record (analog) is copied to a cassette,
then the cassette is copied to another cassette, then that one is
copied again. Each copy adds a little hiss. By the third copy the
hiss is loud and the quiet parts of the music are hard to hear.
Why? Because each copy treats the hiss as part of the signal: the
machine cannot tell which wobbles were music and which were noise,
so it copies both. The noise accumulates and can never be
removed, since removing it would mean guessing what the original
shape was.

**Example 2.** A message is sent as flashes: short, long, short.
It travels through a noisy room where someone is clapping softly.
The receiver still reads "short, long, short." Why does the
noise not destroy it? Because the receiver's job is not to
reproduce an exact shape — it is to decide, for each flash, "short
or long?" The soft claps are neither a short flash nor a long
flash, so they are ignored; and even a slightly dimmed flash is
still clearly a flash. The message survives because the decision
is coarse: only a noise big enough to fake or erase a whole flash
could change it.

## Guided practice

1. In the noisy-channel game, why does the analog chain drift
   while the pulse chain usually does not? Name the difference
   in what the receiver has to do.
2. A digital photo is emailed to a friend, who emails it on to
   another friend, ten times. Why does the tenth copy look the
   same as the first? (Use "cleaned up and sent again exactly.")
3. A learner says: "Digital is better, so a digital recording of
   a bad singer sounds good." What is wrong with that claim?
   (Separate the recording from the transmission.)
4. Name two real examples from this lesson of digitized signals
   sent as wave pulses, and the wave used in each.

## Independent practice

1. A smooth wave message passes through a noisy channel once and
   picks up a small wobble. A pulse message passes through the
   same channel and picks up the same wobble. Why is the pulse
   message easier to recover? (Two sentences.)
2. A fiber-optic cable sends light pulses. A learner asks, "Why
   not just send a smooth beam whose brightness carries the
   picture?" Explain what happens to a smooth beam's brightness
   information after noise, compared with pulses.
3. **Error analysis.** A learner writes: "Digital signals are
   more reliable because computers count in binary." The
   conclusion is right, but the reason is not the one this unit
   uses. Rewrite the reason using pulses, noise, and copying,
   without mentioning binary counting.
4. A radio station broadcasts the same program in analog and in
   digital form through a noisy city. A listener far away gets a
   hissy analog signal and a clean digital signal. Explain the
   difference in terms of what each receiver must decide.

## Applied task

Design a pulse code for five messages you might need across a
playground (for example: "come here," "bring water," "game over,"
"help," "wait"). Use short and long flashes (or claps) and pauses.
Write the code chart, then state one noise that could still break
your code — and how you would fix it (for example, repeating each
message twice).

## Exit check

In one sentence, state the claim of this lesson and name the
evidence from the noisy-channel game that supports it.

## Support, extension, teacher note

- **Reading/language access:** run the noisy-channel game
  before reading the explanation; the vocabulary (analog,
  digital, pulse, noise) labels what learners just saw.
- **Alternate response mode:** learners may send and receive
  the pulse message by clapping instead of flashing, and may
  answer the exit check orally.
- **Extension:** error correction — sending each message twice
  and comparing — is how real digital systems catch the rare
  noise big enough to fake a pulse. Learners who finish early can
  add a repeat rule to their applied-task code and explain what
  it costs (twice the time) and what it buys (caught errors).
- **Teacher note:** do not let "digital" become a synonym for
  "computer" or "modern." The distinction is about the signal's
  shape — smooth vs. stepped — and a flashlight code from this
  lesson counts as digital. If a learner says digital means
  binary, redirect to pulses and decisions, per the standard's
  boundary. Key: [answer key](../answer-key.md#lesson-06).
