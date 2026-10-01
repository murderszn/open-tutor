# Grade 8 Stem — JavaScript DOM Manipulation, Electrical Circuits, Current, & Ohm's Law ($V=IR$) Quiz
**Topic:** JavaScript DOM Manipulation, Electrical Circuits, Current, & Ohm's Law ($V=IR$)  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “JavaScript DOM Manipulation, Electrical Circuits, Current, & Ohm's Law ($V=IR$)”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+JavaScript+DOM+Manipulation,+Electrical+Circuits,+Current,+&+Ohm's+Law+($V=IR$))
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this JavaScript snippet:
```javascript
const displayElement = document.querySelector('#calculator-display');
const numberButtons = document.querySelectorAll('.btn-number');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayElement.textContent += button.getAttribute('data-value');
  });
});
```
- What is the difference between `document.querySelector` and `document.querySelectorAll`?
- What does `.addEventListener('click', ...)` do?

**2.** Explain the difference between `let`, `const`, and `var` in modern JavaScript. Why should you avoid using `var`?

**3.** What is the return type of `displayElement.textContent`? If a user clicks `"5"` followed by `"7"`, what operation does `+` perform in the snippet above?

---

### Part 2: Physical Science — Electricity & Ohm's Law (Questions 4–7)

**4.** Define the three fundamental electrical quantities, their variables, and their SI units:
- (a) Voltage ($V$)
- (b) Current ($I$)
- (c) Resistance ($R$)

**5.** State **Ohm's Law** as an equation. 
- A circuit has a $9.0\text{ V}$ battery connected across a light bulb with an electrical resistance of $18\text{ }\Omega$. Calculate the current flowing through the circuit in Amperes ($\text{A}$).

**6.** An electric heater draws a current of $10.0\text{ A}$ when plugged into a standard $120\text{ V}$ household wall outlet.
- (a) Calculate the resistance of the heater element.
- (b) Calculate the electrical power consumed by the heater ($P = IV$).

**7.** Compare **series circuits** and **parallel circuits**:
- If one light bulb burns out in a simple series string of holiday lights, what happens to the rest?
- Why are home electrical wall outlets wired in parallel rather than in series?

---

### Part 3: Lab Reasoning & Circuit Diagnostics (Questions 8–9)

**8.** You are testing an electronic breadboard circuit with a digital multimeter. When you measure voltage across a closed switch, it reads $0.0\text{ V}$. When you measure voltage across the load resistor, it reads $5.0\text{ V}$. 
- Is the switch working properly? Explain what a voltage drop across a component represents.

**9.** If you double the voltage in a simple resistive circuit while keeping resistance constant, what happens to the current? If you double the resistance while keeping voltage constant, what happens to the current?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **DOM Selection & Events**:
   - `querySelector` returns the first matching element node.
   - `querySelectorAll` returns a static `NodeList` collection of all matching element nodes.
   - `addEventListener('click', callback)` attaches an event handler function that executes whenever the click event fires on that button.

2. **`let` vs. `const` vs. `var`**:
   - `const`: Block-scoped, cannot be reassigned (preferred default).
   - `let`: Block-scoped, can be reassigned.
   - `var`: Function-scoped or global, subject to hoisting bugs and variable leakage; deprecated in modern ES6+.

3. **String Concatenation**:
   - `textContent` always returns a string (`DOMString`).
   - The `+` operator performs string concatenation, appending `"7"` to `"5"` to produce `"57"` rather than arithmetic addition.

4. **Electrical Quantities**:
   - (a) Voltage ($V$): Electrical potential difference (energy per unit charge); SI unit: Volts ($\text{V}$).
   - (b) Current ($I$): Rate of flow of electric charge; SI unit: Amperes ($\text{A}$ or $\text{C/s}$).
   - (c) Resistance ($R$): Opposition to the flow of electric charge; SI unit: Ohms ($\Omega$).

5. **Ohm's Law Calculation**:
   - $V = IR \implies I = \frac{V}{R}$.
   - $I = \frac{9.0\text{ V}}{18\text{ }\Omega} = 0.5\text{ A}$ ($500\text{ mA}$).

6. **Heater Calculations**:
   - (a) $R = \frac{V}{I} = \frac{120\text{ V}}{10.0\text{ A}} = 12\text{ }\Omega$.
   - (b) $P = IV = (10.0\text{ A})(120\text{ V}) = 1200\text{ Watts}$ ($1.2\text{ kW}$).

7. **Series vs. Parallel**:
   - In series, a burned-out bulb opens the single circuit path, so all lights turn off.
   - Homes are wired in parallel so each appliance receives full line voltage ($120\text{ V}$) independently, and turning off one device does not disrupt current to others.

8. **Multimeter Diagnostics**:
   - Yes, the switch is working properly. An ideal closed switch has zero resistance ($R \approx 0$), resulting in zero voltage drop ($V = IR = 0$).
   - Voltage drop represents the potential energy consumed per unit charge as current flows through a resistive component.

9. **Ohm's Law Proportions**:
   - Doubling voltage ($2V$) doubles current ($2I$) (direct proportionality).
   - Doubling resistance ($2R$) cuts current in half ($\frac{1}{2}I$) (inverse proportionality).
</details>
