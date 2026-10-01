# Grade 8 Stem — CSS3 Box Model, Flexbox Layouts, Optics, Reflection, & Refraction Quiz
**Topic:** CSS3 Box Model, Flexbox Layouts, Optics, Reflection, & Refraction  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “CSS3 Box Model, Flexbox Layouts, Optics, Reflection, & Refraction”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+CSS3+Box+Model,+Flexbox+Layouts,+Optics,+Reflection,+&+Refraction)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Web Development (Questions 1–3)

**1.** Diagram and explain the four concentric layers of the **CSS Box Model**:
```
┌──────────────────────────────────────┐
│ Margin                               │
│  ┌────────────────────────────────┐  │
│  │ Border                         │  │
│  │  ┌──────────────────────────┐  │  │
│  │  │ Padding                  │  │  │
│  │  │  ┌────────────────────┐  │  │  │
│  │  │  │ Content            │  │  │  │
```
What is the difference between `padding` and `margin`? Why should developers configure `box-sizing: border-box;` in their global CSS reset?

**2.** Examine this CSS Flexbox snippet:
```css
.calculator-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
```
Explain what `justify-content` controls versus `align-items` when `flex-direction` is set to `column`.

**3.** What CSS pseudo-class selectors should you use to style a button when a user hovers their mouse over it and when they click/press down on it? Write a short CSS example.

---

### Part 2: Physical Science — Optics, Reflection & Refraction (Questions 4–7)

**4.** State the **Law of Reflection**. 
- If a light ray strikes a plane mirror with an angle of incidence of $35^\circ$ relative to the normal line, what is the angle of reflection?

**5.** Define **Refraction**. Why does a pencil placed in a half-filled glass of water appear bent or broken at the water line?

**6.** What is the index of refraction ($n$)? 
- Light travels at $c = 3.0 \times 10^8\text{ m/s}$ in a vacuum. If light travels through diamond at $1.24 \times 10^8\text{ m/s}$, calculate the index of refraction of diamond ($n = c / v$).

**7.** Compare **convex lenses** and **concave lenses**:
- Which lens type converges light rays to a real focal point and is used in magnifying glasses?
- Which lens type diverges light rays and is used to correct nearsightedness (myopia)?

---

### Part 3: Lab Reasoning & Ray Tracing (Questions 8–9)

**8.** In an optics lab using an acrylic prism, white light passes through the triangular prism and separates into a rainbow band of colors (dispersion).
- Which visible color is refracted (bent) the most? Which is refracted the least?
- Explain this phenomenon in terms of wavelength and wave speed in the glass.

**9.** What is **total internal reflection**, and what critical condition must be met for it to occur? Name one high-speed modern communication technology that relies on this principle.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **CSS Box Model & `border-box`**:
   - Content: Text/image area.
   - Padding: Clear space surrounding content inside the border.
   - Border: The edge boundary surrounding padding.
   - Margin: Clear space outside the border separating elements from neighbors.
   - Difference: Padding is inside the element boundary (affects background color); margin is outside.
   - `box-sizing: border-box` includes padding and border within the declared `width` and `height`, preventing unexpected layout widening and element overflow.

2. **Flexbox Axes in Column Mode**:
   - When `flex-direction: column`, the main axis becomes vertical, and the cross axis becomes horizontal.
   - `justify-content: center` aligns items vertically along the main axis.
   - `align-items: center` aligns items horizontally across the cross axis.

3. **Button Pseudo-Classes**:
   ```css
   button:hover {
     background-color: #2563eb; /* Darker blue on hover */
     cursor: pointer;
   }
   button:active {
     transform: scale(0.96);    /* Tactile press effect */
   }
   ```

4. **Law of Reflection**:
   - The angle of incidence equals the angle of reflection ($\theta_i = \theta_r$) measured relative to the normal (perpendicular) line.
   - If $\theta_i = 35^\circ$, then $\theta_r = 35^\circ$.

5. **Refraction & Bent Pencil**:
   - Refraction is the change in direction (bending) of a wave as it passes from one transparent medium into another with a different optical density.
   - Light slows down when transitioning from air into water. As the wavefront enters at an angle, the change in wave speed causes the light rays to bend, causing the brain's linear projection of the pencil's position to appear displaced.

6. **Index of Refraction Calculation**:
   - $n = \frac{c}{v} = \frac{3.0 \times 10^8\text{ m/s}}{1.24 \times 10^8\text{ m/s}} \approx 2.42$.

7. **Lenses Comparison**:
   - Converging lens: Convex lens (thicker in middle).
   - Diverging lens: Concave lens (thinner in middle).

8. **Prism Dispersion**:
   - Violet light bends the most (shortest wavelength, slows down most in glass). Red light bends the least (longest wavelength).
   - The index of refraction varies slightly with wavelength (dispersion), separating white light into its spectral colors.

9. **Total Internal Reflection**:
   - TIR occurs when a light ray propagating in a denser medium strikes an interface with a less dense medium at an incident angle greater than the critical angle ($\theta_i > \theta_c$), reflecting $100\%$ of light back inside.
   - Essential technology: Fiber optic telecommunications cables.
</details>
