# Grade 8 Stem — Web Calculator Logic Parsing, The Periodic Table, & Element Families Quiz
**Topic:** Web Calculator Logic Parsing, The Periodic Table, & Element Families  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Web Calculator Logic Parsing, The Periodic Table, & Element Families”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Web+Calculator+Logic+Parsing,+The+Periodic+Table,+&+Element+Families)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this arithmetic calculation function from the Web Calculator project:
```javascript
function compute(prev, current, operation) {
  const a = parseFloat(prev);
  const b = parseFloat(current);
  if (isNaN(a) || isNaN(b)) return '';
  switch (operation) {
    case '+': return (a + b).toString();
    case '-': return (a - b).toString();
    case '×': return (a * b).toString();
    case '÷': 
      if (b === 0) return 'Error';
      return (a / b).toString();
    default: return '';
  }
}
```
- Why is it critical to check `if (b === 0)` before evaluating division?
- In JavaScript, what would `a / 0` return if this guard clause were omitted?

**2.** In JavaScript, why does `0.1 + 0.2` return `0.30000000000000004` instead of `0.3`? How can you round calculation results to 8 decimal places using `Number.EPSILON` or `toFixed()`?

**3.** What keyboard event listener should you register to allow users to press the `Enter` key to trigger calculation and `Escape` to clear all?

---

### Part 2: Physical Science — Periodic Table & Trends (Questions 4–7)

**4.** Explain how the modern **Periodic Table** is organized:
- What are horizontal rows called, and what do elements in the same row have in common?
- What are vertical columns called, and what do elements in the same column have in common?

**5.** Identify the major chemical element families:
- (a) Group 1 (excluding Hydrogen): Highly reactive metals with 1 valence electron.
- (b) Group 2: Reactive earth metals with 2 valence electrons.
- (c) Group 17: Highly reactive nonmetals with 7 valence electrons that form salts.
- (d) Group 18: Nonreactive inert gases with full valence shells.

**6.** Define **valence electrons**. 
- How many valence electrons do the following neutral atoms have: Magnesium (Mg, Group 2), Carbon (C, Group 14), Oxygen (O, Group 16), and Argon (Ar, Group 18)?

**7.** Describe the periodic trend across a period (left to right) and down a group (top to bottom) for:
- (a) **Atomic Radius** (size of the atom)
- (b) **Electronegativity** (ability to attract bonding electrons)

---

### Part 3: Lab Reasoning & Chemical Identification (Questions 8–9)

**8.** In a flame test lab, metal salt solutions are introduced into a Bunsen burner flame, producing vivid colors:
- Copper produces green/blue flame.
- Strontium produces deep red flame.
- Potassium produces lilac/purple flame.
Explain what happens to electrons within the metal atoms when heated, and why specific wavelengths of light are emitted when they return to ground state.

**9.** Why are the alkali metals (such as Sodium and Potassium) always stored under mineral oil in science laboratories rather than exposed to air?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Division by Zero Protection**:
   - Dividing by zero is mathematically undefined. Checking `b === 0` provides clean error handling and prevents broken calculations.
   - Without the check, JavaScript returns `Infinity` (or `-Infinity`), which confuses users and breaks further operations.

2. **Floating-Point Precision**:
   - Computers use base-2 binary floating point (IEEE 754). Fractions like $0.1$ ($1/10$) cannot be represented with infinite precision in binary, causing tiny precision errors.
   - Clean rounding: `parseFloat((a + b).toFixed(8))` or `Math.round((a + b + Number.EPSILON) * 1e8) / 1e8`.

3. **Keyboard Event Listener**:
   ```javascript
   window.addEventListener('keydown', (e) => {
     if (e.key === 'Enter') computeResult();
     if (e.key === 'Escape') clearAll();
   });
   ```

4. **Periodic Table Organization**:
   - Periods: Horizontal rows (elements share the same number of electron energy shells).
   - Groups/Families: Vertical columns (elements share the same number of valence electrons and similar chemical reactivity).

5. **Element Families**:
   - (a) Alkali Metals
   - (b) Alkaline Earth Metals
   - (c) Halogens
   - (d) Noble Gases

6. **Valence Electrons**:
   - Valence electrons are the electrons in the outermost electron shell that participate in chemical bonding.
   - Magnesium: 2
   - Carbon: 4
   - Oxygen: 6
   - Argon: 8

7. **Periodic Trends**:
   - (a) Atomic Radius: Decreases from left to right across a period (increased nuclear pull $Z_{eff}$ compresses electron shells); increases top to bottom down a group (additional electron shells).
   - (b) Electronegativity: Increases left to right across a period (stronger nuclear pull attracts electrons); decreases top to bottom down a group (electron shielding reduces pull).

8. **Flame Test Emission**:
   - Heat energy excites electrons from lower energy ground states to higher unstable energy levels.
   - When the electrons fall back down to ground state, they release energy in discrete packets (photons) whose frequencies correspond to specific visible spectral colors ($E = hf$).

9. **Alkali Metal Storage**:
   - Alkali metals react violently and exothermically with water vapor and oxygen present in air to form corrosive hydroxides and explosive hydrogen gas ($2\text{Na} + 2\text{H}_2\text{O} \to 2\text{NaOH} + \text{H}_2$). Mineral oil provides an inert barrier.
</details>
