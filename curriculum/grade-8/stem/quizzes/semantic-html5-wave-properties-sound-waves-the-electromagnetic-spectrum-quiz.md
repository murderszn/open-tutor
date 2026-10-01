# Grade 8 Stem — Semantic HTML5, Wave Properties, Sound Waves, & The Electromagnetic Spectrum Quiz
**Topic:** Semantic HTML5, Wave Properties, Sound Waves, & The Electromagnetic Spectrum  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Semantic HTML5, Wave Properties, Sound Waves, & The Electromagnetic Spectrum”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Semantic+HTML5,+Wave+Properties,+Sound+Waves,+&+The+Electromagnetic+Spectrum)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Web Development (Questions 1–3)

**1.** Contrast semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with generic `` tags. Name two critical reasons why developers prefer semantic HTML5 tags.

**2.** Examine this HTML document skeleton:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="app">
    
  </main>
  <script src="calculator.js" defer></script>
</body>
</html>
```
Why is the `defer` attribute included in the `<script>` tag? What would happen if a JavaScript script attempted to access `#app` before the DOM finished parsing?

**3.** What is the Document Object Model (DOM)? How does a web browser transform an HTML text document into an interactive DOM tree?

---

### Part 2: Physical Science — Waves & EM Spectrum (Questions 4–7)

**4.** Define the following wave properties:
- (a) Wavelength ($\lambda$)
- (b) Frequency ($f$)
- (c) Amplitude ($A$)
- (d) Wave Speed ($v$)

**5.** State the **Wave Equation**. A sound wave in air travels at $340\text{ m/s}$ with a frequency of $680\text{ Hz}$.
- Calculate the wavelength of this sound wave. Show units.

**6.** Differentiate between **transverse waves** and **longitudinal (compressional) waves**. Give one physical example of each.

**7.** List the regions of the **Electromagnetic (EM) Spectrum** in order of increasing frequency (and increasing photon energy). 
- Which EM wave type has the longest wavelength?
- Which has the highest energy and is used in cancer radiation therapy?

---

### Part 3: Lab Reasoning & Wave Behavior (Questions 8–9)

**8.** In a wave resonance lab using a tuning fork and a column of water, a student observes that as the column length is adjusted, the sound becomes significantly louder at specific heights.
- Explain the physical phenomenon of **constructive interference** and **resonance**.

**9.** Why can light waves travel through the vacuum of outer space from the Sun to Earth, whereas sound waves cannot?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Semantic HTML5 Benefits**:
   - Semantic tags convey structural meaning to both browsers and developers, whereas `` is an unsemantic generic container.
   - Key benefits:
     1. Accessibility (Screen readers and assistive technologies navigate pages via semantic landmarks).
     2. SEO & Maintainability (Search engine web crawlers index content hierarchy accurately; code is more readable).

2. **`<script defer>` & DOM Timing**:
   - `defer` downloads the script in parallel but delays execution until the entire HTML document has been parsed.
   - Without `defer` (or placing script in `<head>`), JavaScript running `document.getElementById('app')` would return `null` because the element does not yet exist in the DOM.

3. **DOM Definition**:
   - The DOM is an object-oriented tree representation of the HTML document created in browser memory.
   - The browser parses HTML tokens, creates node elements, and establishes parent-child relationships that scripts can inspect and modify.

4. **Wave Properties**:
   - (a) Wavelength ($\lambda$): Distance between two consecutive identical points (crest to crest, or trough to trough).
   - (b) Frequency ($f$): Number of complete wave cycles passing a point per second (Hertz, $\text{Hz}$).
   - (c) Amplitude ($A$): Maximum displacement of a wave from its equilibrium rest position.
   - (d) Wave Speed ($v$): The distance a wave travels per unit of time ($v = \lambda f$).

5. **Wave Equation Calculation**:
   - $v = f \lambda \implies \lambda = \frac{v}{f}$.
   - $\lambda = \frac{340\text{ m/s}}{680\text{ Hz}} = 0.5\text{ meters}$.

6. **Transverse vs. Longitudinal**:
   - Transverse: Particle displacement is perpendicular to wave propagation (e.g., light waves, ripples on water).
   - Longitudinal: Particle displacement is parallel to wave propagation, creating compressions and rarefactions (e.g., sound waves, ultrasound).

7. **Electromagnetic Spectrum**:
   - Order (increasing frequency / energy): Radio Waves $\to$ Microwaves $\to$ Infrared $\to$ Visible Light $\to$ Ultraviolet $\to$ X-Rays $\to$ Gamma Rays.
   - Longest wavelength: Radio waves.
   - Highest energy: Gamma rays.

8. **Resonance & Constructive Interference**:
   - Constructive interference occurs when two waves overlap crest-to-crest, adding their amplitudes together.
   - Resonance occurs when an external vibrating frequency matches the natural frequency of an acoustic cavity, creating standing waves and amplifying volume.

9. **Space Propagation**:
   - Light waves are electromagnetic vibrations of coupled electric and magnetic fields; they require no physical medium to propagate.
   - Sound waves are mechanical waves that require physical matter (atoms/molecules colliding) to transmit vibrations. Space is an atmospheric vacuum with virtually no matter.
</details>
