# Assets — Unit 05: Electric and Magnetic Interactions and Circuits

## Generated illustration

- **File:** `electromagnet-lifts-paper-clips.webp` (1920×1280, WebP raster image)
- **Prompt:** "A clear educational illustration, no text, no
  letters, no numbers: a close-up side view of a hand holding a
  large iron nail wrapped with many neat loops of shiny copper
  wire, the two wire ends connected to a small cylindrical
  battery, with six small silver metal paper clips stuck to the
  tip of the nail as if held up by magnetism, and two more paper
  clips lying on the table below. Simple flat colors, plain light
  background, suitable for a middle-school science lesson."
- **Tool:** Muse built-in image generation (media pipeline),
  generated 2026-11-08.
- **Used in:** [Lesson 04](../lessons/lesson-04-electromagnets-what-changes-strength.md),
  Figure 1 — learners answer what is holding the paper clips up
  and what would happen if one wire were disconnected from the
  battery.
- **Alt text:** "A hand holding an iron nail wrapped with copper
  wire connected to a battery, with paper clips stuck to the
  nail's tip."
- **Caption:** "A generated illustration (not a photograph, not
  data). A hand holds an iron nail wrapped with copper wire; the
  wire ends connect to a battery, and paper clips hang from the
  nail's tip, held up by the electromagnet."
- **Factual review (inspected before linking):** the image shows
  a hand holding an iron nail wrapped with copper wire, the wire
  ends connected to a single cylindrical battery, and six paper
  clips stuck to the nail's tip with two more on the table; no
  text, letters, or numbers appear. It is used only for
  qualitative observation (what holds the clips up? what happens
  if the wire is disconnected?), never as a measurement: no clip
  count or field strength is read from it, so the generator's
  exact clip count cannot introduce a false measurement.
- **Known limitations:** it is a still image, so the clips
  falling when the wire is disconnected must be described in
  words (done in the lesson's text-only alternative); the wire
  routing is stylized (the coil is drawn in two sections) and
  must not be copied as a wiring diagram — the exact circuit
  appears in the Lesson 05 SVG instead.
- **Rejected first attempt:** a compass-and-bar-magnet field
  illustration was generated first and inspected on 2026-11-08,
  then discarded and deleted: its compass needles pointed
  outward on both sides of the magnet, which does not match a
  dipole field (field lines leave the north pole and enter the
  south pole). The field map in this unit is the deterministic
  SVG below, computed by tracing the two-pole field, so every
  arrow is correct by construction.

## Deterministic diagrams

- **File:** `magnetic-field-map.svg` — an exact SVG diagram.
  Field lines were traced by numerical integration (midpoint
  step) through the field of two separated poles (+m at the
  north pole face, −m at the south pole face), starting just
  outside the north pole face; only lines that return to the
  south pole are drawn, and arrowheads sit on the traced lines
  pointing along the field. It is a construction, not a
  measurement, and it is **not** the unit's generated image: the
  generated image is the WebP above.
- **Used in:** [Lesson 03](../lessons/lesson-03-magnets-and-fields-without-contact.md),
  Figure 1, with a full text-only alternative.
- **Accessibility:** the SVG carries a `role="img"` and an
  `aria-label`; the lesson's text-only alternative carries the
  same information (poles, line shape, arrow direction, the
  compass question and answer).
- **File:** `series-parallel-circuits.svg` — exact circuit
  schematics drawn from computed coordinates: a series loop
  (battery, switch, two bulbs on one path) and a parallel
  circuit (battery, switch, two bulb branches). Battery, bulb,
  and switch use standard symbols; current arrows show the flow
  direction. It is a construction, not a measurement, and it is
  **not** the unit's generated image.
- **Used in:** [Lesson 05](../lessons/lesson-05-simple-circuits-series-and-parallel.md),
  Figure 1, with a full text-only alternative.
- **Accessibility:** the SVG carries a `role="img"` and an
  `aria-label`; the lesson's text-only alternative carries the
  same information (both circuit shapes, the path and push
  rules, the burned-bulb question and answer).
