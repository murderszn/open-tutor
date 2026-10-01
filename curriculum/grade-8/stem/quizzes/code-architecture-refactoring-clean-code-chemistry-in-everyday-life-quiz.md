# Grade 8 Stem — Code Architecture Refactoring, Clean Code, & Chemistry in Everyday Life Quiz
**Topic:** Code Architecture Refactoring, Clean Code, & Chemistry in Everyday Life  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Code Architecture Refactoring, Clean Code, & Chemistry in Everyday Life”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Code+Architecture+Refactoring,+Clean+Code,+&+Chemistry+in+Everyday+Life)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Architecture (Questions 1–3)

**1.** What is the Single Responsibility Principle (SRP) in software engineering? Give an example of how your Banking Simulation or Web Calculator separates UI display logic from business calculation logic.

**2.** Examine this poorly formatted Python code:
```python
def f(x,y,z):
 a=x+y
 if z==True:
  return a*0.1
 else:
  return a
```
Refactor this function adhering to PEP 8 standards: provide meaningful variable names, descriptive function name, type hints, and clean spacing.

**3.** What is defensive programming? Give an example of how validating function parameters upfront prevents insidious bugs later in a system.

---

### Part 2: Physical Science — Everyday Chemistry & Energy (Questions 4–7)

**4.** Explain the chemical process of **photosynthesis** and **cellular respiration**:
- Write the balanced chemical formula for photosynthesis ($6\text{CO}_2 + 6\text{H}_2\text{O} \xrightarrow{light} \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2$).
- How are photosynthesis and cellular respiration complementary opposite processes in the global carbon cycle?

**5.** Why does salt ($\text{NaCl}$ or $\text{CaCl}_2$) melt winter ice on roads? Explain the colligative property of **freezing point depression**.

**6.** What chemical reaction causes bread dough to rise when yeast or baking powder is added? Identify the gas produced.

**7.** Contrast physical changes versus chemical changes in the kitchen:
- (a) Boiling water into steam.
- (b) Burning toast.
- (c) Chopping an onion.
- (d) Browning a steak on a hot cast-iron skillet (Maillard reaction).

---

### Part 3: Lab Reasoning & Applied STEM (Questions 8–9)

**8.** You are designing a battery-powered outdoor weather sensor. The device must run in freezing winter temperatures ($-10^\circ\text{C}$).
- How does extreme cold affect the internal chemical reaction rate and internal resistance of a chemical battery?
- What engineering precautions would you take in your circuit and enclosure design?

**9.** A student tests the heat release of different candle waxes (paraffin vs. beeswax) using a homemade calorimeter (aluminum soda can filled with $100\text{ mL}$ of water).
- State the formula for heat absorbed by water: $q = mc\Delta T$ (where $c = 4.184\text{ J/g}^\circ\text{C}$).
- If $100\text{ g}$ of water rises by $15^\circ\text{C}$, calculate the energy released in Joules.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Single Responsibility Principle (SRP)**:
   - A class or module should have one, and only one, reason to change.
   - In the calculator, `compute()` only handles mathematical evaluation; DOM handler functions only handle screen rendering and input capture.

2. **Refactored Clean Code**:
   ```python
   def calculate_tax(subtotal: float, shipping: float, apply_discount: bool = False) -> float:
       total = subtotal + shipping
       if apply_discount:
           return total * 0.10
       return total
   ```

3. **Defensive Programming**:
   - Anticipating potential edge cases and failures before they happen by enforcing preconditions, assertions, and strict type/value checking.
   - Example: Checking `if balance < amount` or `if pin != stored_pin` immediately at the top of a method.

4. **Photosynthesis & Respiration**:
   - Photosynthesis: Converts solar energy, water, and carbon dioxide into chemical glucose and oxygen.
   - Respiration: Converts glucose and oxygen into ATP biological energy, carbon dioxide, and water.
   - They form a closed ecological carbon and oxygen loop between autotrophs (plants) and heterotrophs (animals).

5. **Freezing Point Depression**:
   - Dissolved solute particles disrupt the formation of the solid water ice crystal lattice.
   - Salt lowers the temperature at which water freezes below $0^\circ	ext{C}$ ($32^\circ	ext{F}$), causing ice to melt into saltwater brine at sub-freezing temperatures.

6. **Baking Chemistry**:
   - Yeast fermentation or sodium bicarbonate acid reaction decomposes to produce carbon dioxide gas ($	ext{CO}_2$).
   - Trapped expanding $	ext{CO}_2$ gas pockets cause the dough matrix to expand and rise.

7. **Physical vs. Chemical Changes**:
   - (a) Boiling water: Physical change (phase change, $	ext{H}_2	ext{O}(l) 	o 	ext{H}_2	ext{O}(g)$).
   - (b) Burning toast: Chemical change (combustion, carbonization).
   - (c) Chopping onion: Physical change (mechanical separation).
   - (d) Browning steak: Chemical change (Maillard reaction recombining amino acids and sugars).

8. **Low Temperature Battery Engineering**:
   - Cold slows down internal electrochemical reaction kinetics and increases internal electrolyte resistance, drastically dropping voltage output and effective milliamp-hour capacity.
   - Engineering remedies: Insulated enclosure; localized heating resistor; low-power sleep state; lithium iron phosphate chemistry rated for cold.

9. **Calorimetry Calculation**:
   - $q = mc\Delta T = (100	ext{ g})(4.184	ext{ J/g}^\circ	ext{C})(15^\circ	ext{C}) = 6,276	ext{ Joules}$ ($pprox 6.28	ext{ kJ}$).
</details>
