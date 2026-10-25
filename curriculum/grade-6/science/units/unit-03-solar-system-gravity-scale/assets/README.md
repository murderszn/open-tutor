# Assets — Unit 03 (Solar System, Gravity, and Scale)

## solar-system-orbits-top-view.png

- **File:** `solar-system-orbits-top-view.png` (PNG, 1920 × 1280, generated
  raster image)
- **Prompt (verbatim):** "Educational top-down illustration of the solar
  system for a grade-6 science lesson: a large glowing yellow Sun at the
  center, with eight thin circular orbit paths around it and one small
  planet on each orbit path, the planets clearly different in size with
  the largest planets farther out, on a dark navy space background with
  tiny stars. Flat clean illustration style, no text, no labels, no
  letters, no numbers."
- **Tool/model:** the built-in media image-generation pipeline
  (`media.generate_image`), 2026-10-25. No model name was reported by the
  tool.
- **Date generated:** 2026-10-25
- **Learning purpose:** Lesson 01 "Spot what the picture distorts"
  activity. The learner identifies the one planet identifiable by
  appearance alone (Saturn, by its rings), names the look-alike problem
  (several planets are blue), and uses the dataset table to show the
  picture distorts sizes (no planet should look bigger than Jupiter).
  Practices reading a model before trusting it.
- **Factual review (2026-10-25, inspected before linking):** the image
  shows a central glowing Sun, eight circular orbit paths, and one planet
  per path (a tiny gray planet near the Sun at the upper right; a small
  orange-yellow planet on the right; a small blue-and-green planet on the
  lower right; a small red planet at the lower right; a large banded brown
  planet at the bottom; a large pale-yellow planet with wide rings on the
  left; a medium pale-blue-green planet on the upper left; a large blue
  planet at the top). No text, labels, or numbers appear, as requested.
  **Correction made during review:** the first draft of this record
  claimed planets could be ordered by orbit ring; re-inspection showed
  planet positions in the picture are decorative and do not encode true
  order (the blue-green planet sits at about the same radius as the ringed
  planet, and the banded planet sits farther out than the ringed planet —
  neither matches true Sun order). The lesson activity, caption, alt text,
  and text-only alternative were rewritten to forbid order-reading from
  this image; the dataset table is the authority on order.
- **Caption:** "An AI-generated illustration of the solar system seen
  from above. It is NOT to scale: the distances between orbits are
  squeezed together and the outer planets are drawn large so they show
  up — and the planets are placed decoratively, so their positions in the
  picture do NOT encode their true order from the Sun. Use it only for
  spotting what the picture distorts — never for judging sizes,
  distances, or order. The dataset table is the authority on all three."
- **Alt text:** "Top-down illustration of the solar system on a dark
  starry background. A large glowing yellow Sun sits at the center with
  eight thin circular orbit paths around it. Planets of different sizes
  are placed around the Sun: a tiny gray planet near the Sun at the upper
  right, a small orange-yellow planet on the right, a small blue-and-green
  planet on the lower right, a small red planet at the lower right, a large
  banded brown planet at the bottom, a large pale-yellow planet with wide
  rings on the left, a medium pale-blue-green planet on the upper left,
  and a large blue planet at the top. Planet positions in the picture are
  decorative and the drawing is not to scale."
- **Text-only alternative** (in the lesson): "The illustration shows a
  glowing yellow Sun at the center with eight thin circular orbit paths
  around it on a dark starry background. Around the Sun sit: a tiny gray
  planet near the Sun at the upper right; a small orange-yellow planet on
  the right; a small blue-and-green planet on the lower right; a small red
  planet at the lower right; a large banded brown planet at the bottom; a
  large pale-yellow planet with wide rings on the left; a medium
  pale-blue-green planet on the upper left; and a large blue planet at the
  top. Planet positions in the picture are decorative and do not encode
  true order, size, or distance." The activity is fully answerable from
  this text plus the dataset table: the ringed planet is Saturn (the only
  ringed planet); the blue planets cannot be told apart by color alone;
  and the table shows Jupiter (139,820 km) is the largest planet, so any
  picture drawing another planet as large as Jupiter distorts sizes.
- **Known limitations:** AI-generated illustration — labeled as such in
  the lesson caption. Sizes, distances, AND positions are NOT to scale:
  the outermost planets are drawn larger than their true ratios (Neptune
  is 3.86 Earth diameters, not the second-largest body in the picture),
  the orbit spacing is compressed, and planet positions do not encode Sun
  order. The lesson text explicitly forbids using this image for size,
  distance, or order judgments; the dataset table and the two SVG
  diagrams are the authorities there. No learner-identifying content.

## planet-diameter-bars.svg

- **File:** `planet-diameter-bars.svg` (deterministic vector diagram,
  hand-built for this unit)
- **Learning purpose:** Lesson 03 reference. Diameter ratios (Earth = 1)
  computed from the dataset table: Mercury 0.38, Venus 0.95, Earth 1.00,
  Mars 0.53, Jupiter 10.97, Saturn 9.14, Uranus 3.98, Neptune 3.86.
- **Factual review (2026-10-25):** each bar width equals ratio × 50 px
  (Jupiter 549 px ≈ 10.97 × 50); values match diameter ÷ 12,742 km to two
  decimals. File states "NOT TO SCALE for distances" explicitly.
- **Known limitations:** shows sizes only; says nothing about distances,
  composition, or orbital periods.

## orbit-distance-number-line.svg

- **File:** `orbit-distance-number-line.svg` (deterministic vector
  diagram, hand-built for this unit)
- **Learning purpose:** Lesson 04 reference. Mean planet distances in AU
  (0–30 AU, linear): Mercury 0.39, Venus 0.72, Earth 1.00, Mars 1.52,
  Jupiter 5.20, Saturn 9.58, Uranus 19.20, Neptune 30.05.
- **Factual review (2026-10-25):** positions equal 60 + AU × 19 px on the
  axis (Neptune at 631 px ≈ 60 + 30.05 × 19); values match distance ÷
  149.6 million km to two decimals. Inner-planet labels stagger above and
  below the line because Mercury–Mars all fall within 2 AU.
- **Known limitations:** shows distances only; planet sizes are not shown
  (markers are uniform ticks, not planet images).
