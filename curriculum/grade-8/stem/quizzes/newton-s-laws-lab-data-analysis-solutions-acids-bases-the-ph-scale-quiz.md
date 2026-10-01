# Grade 8 Stem — Newton's Laws Lab Data Analysis, Solutions, Acids, Bases, & the pH Scale Quiz
**Topic:** Newton's Laws Lab Data Analysis, Solutions, Acids, Bases, & the pH Scale  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Newton's Laws Lab Data Analysis, Solutions, Acids, Bases, & the pH Scale”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Newton's+Laws+Lab+Data+Analysis,+Solutions,+Acids,+Bases,+&+the+pH+Scale)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Data Analysis (Questions 1–3)

**1.** Examine this Python snippet analyzing experimental physics trials:
```python
trial_times = [1.42, 1.38, 1.45, 1.40, 1.39]
track_length = 1.2  # meters

avg_time = sum(trial_times) / len(trial_times)
# d = 0.5 * a * t^2  ==> a = 2d / t^2
calculated_accel = (2 * track_length) / (avg_time ** 2)

print(f"Avg Time: {avg_time:.3f} s | Accel: {calculated_accel:.3f} m/s^2")
```
- Calculate the output printed by this script.
- Why is averaging multiple experimental trials mathematically superior to relying on a single trial measurement?

**2.** In Python, how would you filter out an extreme outlier time (e.g., `3.50 s` caused by a cart jam) from a list of trials before computing statistics?

**3.** What Python visualization library is standard for plotting scatter graphs and line-of-best-fit regressions for laboratory reports?

---

### Part 2: Physical Science — Solutions, Acids, Bases & pH (Questions 4–7)

**4.** Define the components of a **solution**:
- Solute:
- Solvent:
- What is known as the "universal solvent" on Earth, and why?

**5.** Contrast **Acids** and **Bases**:
- What ion do acids release in aqueous solution (Arrhenius definition)? What are two typical properties of acids?
- What ion do bases release in aqueous solution? What are two typical properties of bases?

**6.** Explain the **pH scale**:
- What pH range indicates an acidic solution?
- What pH indicates a completely neutral solution at $25^\circ\text{C}$?
- What pH range indicates an alkaline (basic) solution?
- The pH scale is logarithmic: how many times more acidic is a solution with pH 3 compared to a solution with pH 5?

**7.** Describe a **neutralization reaction**:
- What two products are always formed when a strong acid (e.g., $\text{HCl}$) reacts with a strong base (e.g., $\text{NaOH}$)? Write the balanced chemical equation.

---

### Part 3: Lab Reasoning & Error Analysis (Questions 8–9)

**8.** In your Newton's Laws ramp investigation, your calculated acceleration is consistently $8\%$ lower than theoretical frictionless predictions ($a_{theoretical} = g \sin\theta$).
- Identify two physical factors that explain this systematic discrepancy.
- Does this discrepancy invalidate Newton's Second Law? Explain.

**9.** Red cabbage juice acts as a natural pH indicator: it turns red in strong acid, purple in neutral water, and yellow/green in strong base. 
- Predict the color change when lemon juice is added.
- Predict the color change when household ammonia is added.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Python Physics Script Output**:
   - $\text{Avg Time} = \frac{1.42 + 1.38 + 1.45 + 1.40 + 1.39}{5} = \frac{7.04}{5} = 1.408\text{ s}$.
   - $a = \frac{2(1.2)}{(1.408)^2} = \frac{2.4}{1.9825} \approx 1.211\text{ m/s}^2$.
   - Averaging reduces the impact of random human reaction-time errors, converging toward the true mean value.

2. **Outlier Filtering**:
   - Using list comprehensions or standard deviation thresholds:
   ```python
   clean_trials = [t for t in trial_times if t < 2.0]
   ```

3. **Visualization Library**:
   - `matplotlib` (specifically `matplotlib.pyplot`) or `seaborn`.

4. **Solution Components**:
   - Solute: The substance being dissolved (smaller amount).
   - Solvent: The dissolving medium (larger amount).
   - Water is the universal solvent because of its polar molecular structure and hydrogen bonding capability, allowing it to dissolve diverse ionic and polar substances.

5. **Acids vs. Bases**:
   - Acid: Releases Hydrogen ions ($	ext{H}^+$ or hydronium $	ext{H}_3	ext{O}^+$). Properties: sour taste, corrosive to metals, turns litmus paper red.
   - Base: Releases Hydroxide ions ($	ext{OH}^-$). Properties: bitter taste, slippery texture, turns litmus paper blue.

6. **The pH Scale**:
   - Acidic: $	ext{pH} < 7$.
   - Neutral: $	ext{pH} = 7$.
   - Basic (Alkaline): $	ext{pH} > 7$.
   - Logarithmic: Each pH unit represents a $10$-fold change in $[	ext{H}^+]$. $\Delta 	ext{pH} = 2 \implies 10^2 = 100	imes$ more acidic.

7. **Neutralization**:
   - Strong acid + strong base yields a **salt** and **water**.
   - Equation: $	ext{HCl} + 	ext{NaOH} 	o 	ext{NaCl} + 	ext{H}_2	ext{O}$.

8. **Ramp Systematic Discrepancy**:
   - Factors: Friction in the wheel axle bearings and rotational inertia of wheels; air resistance; minor surface imperfections.
   - It does NOT invalidate Newton's Second Law; theoretical predictions assumed $F_{net} = F_g$, whereas true $F_{net} = F_g - F_{friction}$.

9. **pH Indicator Colors**:
   - Lemon juice (citric acid, $	ext{pH} pprox 2$): Turns bright red/pink.
   - Household ammonia (base, $	ext{pH} pprox 11$): Turns green/yellow.
</details>
