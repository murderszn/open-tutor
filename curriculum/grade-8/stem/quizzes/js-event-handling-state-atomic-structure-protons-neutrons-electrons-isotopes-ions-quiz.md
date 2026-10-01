# Grade 8 Stem — JS Event Handling & State, Atomic Structure (Protons, Neutrons, Electrons), Isotopes & Ions Quiz
**Topic:** JS Event Handling & State, Atomic Structure (Protons, Neutrons, Electrons), Isotopes & Ions  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “JS Event Handling & State, Atomic Structure (Protons, Neutrons, Electrons), Isotopes & Ions”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+JS+Event+Handling+&+State,+Atomic+Structure+(Protons,+Neutrons,+Electrons),+Isotopes+&+Ions)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this JavaScript state management snippet for a calculator:
```javascript
const calculatorState = {
  previousOperand: '',
  currentOperand: '0',
  operation: undefined
};

function appendNumber(number) {
  if (number === '.' && calculatorState.currentOperand.includes('.')) return;
  if (calculatorState.currentOperand === '0' && number !== '.') {
    calculatorState.currentOperand = number.toString();
  } else {
    calculatorState.currentOperand += number.toString();
  }
}
```
- Explain how `appendNumber('.')` prevents bugs when a user clicks the decimal button multiple times.
- What prevents the display from showing `"05"` when typing five after zero?

**2.** What is event delegation in JavaScript? Why is it more efficient to attach a single event listener to a parent container (``) rather than 20 individual button listeners?

**3.** What built-in JavaScript function converts a string representation of a float (e.g., `"14.85"`) into a numerical value? What value is returned if the string cannot be parsed?

---

### Part 2: Physical Science — Atomic Structure & Isotopes (Questions 4–7)

**4.** Complete the table identifying the three subatomic particles:
| Particle | Location in Atom | Relative Electrical Charge | Approximate Mass (amu) |
|---|---|---|---|
| **Proton** | | |
| **Neutron**| | |
| **Electron**| | |

**5.** For a neutral atom of Carbon-14 ($^{14}_{6}\text{C}$):
- What is its Atomic Number ($Z$)?
- How many protons does it have?
- How many neutrons does it have?
- How many electrons does it have?

**6.** Define **isotope**. How do Carbon-12 ($^{12}_{6}\text{C}$) and Carbon-14 ($^{14}_{6}\text{C}$) differ in structure, and why do they exhibit identical chemical properties?

**7.** Define **ion**. 
- If a neutral Sodium atom ($\text{Na}$, atomic number 11) loses one electron, what is its symbol and electrical charge? Is it a cation or an anion?
- If a neutral Chlorine atom ($\text{Cl}$, atomic number 17) gains one electron, what is its symbol and electrical charge?

---

### Part 3: Lab Reasoning & Mass Spectrometry (Questions 8–9)

**8.** Naturally occurring chlorine consists of two stable isotopes: $75.77\%$ Chlorine-35 ($34.97\text{ amu}$) and $24.23\%$ Chlorine-37 ($36.97\text{ amu}$).
- Calculate the average atomic mass of chlorine. Show your work. Why is the periodic table atomic mass for Chlorine listed as $\approx 35.45\text{ amu}$ rather than a whole number?

**9.** In Rutherford's famous Gold Foil Experiment, alpha particles ($+2$ charge) were fired at a thin sheet of gold foil. Most particles passed straight through, but a tiny fraction were deflected at sharp angles.
- What two revolutionary conclusions did Rutherford deduce about the structure of the atom?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **State Logic Bug Prevention**:
   - `if (number === '.' && calculatorState.currentOperand.includes('.')) return;` exits early if a decimal already exists, preventing entries like `12.5.8`.
   - If `currentOperand === '0'`, it replaces `"0"` with the entered digit rather than concatenating, preventing leading zeroes like `"05"`.

2. **Event Delegation**:
   - Event delegation utilizes **event bubbling**: events on child elements bubble up through the DOM tree to ancestors.
   - Attaching one listener to the parent container reduces memory consumption and removes the need to re-bind listeners if buttons are dynamically created.

3. **String Parsing**:
   - `parseFloat("14.85")` (or `Number("14.85")`).
   - If parsing fails, it returns `NaN` (Not a Number).

4. **Subatomic Particles Table**:
   - Proton: Nucleus, $+1$ charge, $\approx 1\text{ amu}$.
   - Neutron: Nucleus, $0$ neutral charge, $\approx 1\text{ amu}$.
   - Electron: Electron cloud/orbitals, $-1$ charge, $\approx 1/1836\text{ amu}$ (negligible).

5. **Carbon-14 Analysis**:
   - Atomic Number ($Z$) = $6$.
   - Protons = $6$.
   - Neutrons = $14 - 6 = 8$.
   - Electrons = $6$ (neutral atom).

6. **Isotopes**:
   - Isotopes are atoms of the same chemical element (same number of protons) that have different numbers of neutrons (different mass numbers).
   - They have identical chemical behavior because chemical properties are determined by electron configuration and valence electrons, not neutron count.

7. **Ions**:
   - An ion is an atom or molecule with a net electric charge due to the loss or gain of electrons.
   - Sodium loses 1 electron: $\text{Na}^+$ (Cation, $+1$).
   - Chlorine gains 1 electron: $\text{Cl}^-$ (Anion, $-1$).

8. **Average Atomic Mass Calculation**:
   - $\text{Avg Mass} = (0.7577 \times 34.97) + (0.2423 \times 36.97) = 26.497 + 8.958 = 35.455\text{ amu}$.
   - The listed mass is a weighted average of all naturally occurring isotopes based on relative percent abundance.

9. **Rutherford Experiment Conclusions**:
   - 1. The atom is mostly empty space (most alpha particles passed undeflected).
   - 2. The positive charge and virtually all mass is concentrated in a tiny, dense, positively charged center called the **nucleus**.
</details>
