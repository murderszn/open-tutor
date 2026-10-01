# Grade 8 Stem — Comprehensive Semester Capstone Review & Systems Synthesis Quiz
**Topic:** Comprehensive Semester Capstone Review & Systems Synthesis  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Comprehensive Semester Capstone Review & Systems Synthesis”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Comprehensive+Semester+Capstone+Review+&+Systems+Synthesis)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Software Engineering & Full-Stack Review (Questions 1–3)

**1.** Contrast the architecture of the two software systems you built this term:
- (a) Your Python Banking Simulation (CLI, Object-Oriented, JSON persistence).
- (b) Your Web Calculator (Browser DOM, CSS Flexbox/Grid, Event-driven JavaScript).
How do encapsulation and state management differ between a backend Python class and a frontend JavaScript state object?

**2.** Trace the execution of this combined Python snippet:
```python
class PhysicsObject:
    def __init__(self, name, mass):
        self.name = name
        self.mass = mass

    def momentum(self, velocity):
        return self.mass * velocity

class AcceleratingObject(PhysicsObject):
    def net_force(self, acceleration):
        return self.mass * acceleration

obj = AcceleratingObject("Drone", 2.5)
p = obj.momentum(12.0)
f = obj.net_force(4.0)
```
What are the exact numerical values and units of `p` and `f`?

**3.** In modern full-stack web engineering, explain why version control (Git) is indispensable when collaborating on codebases or rolling back regressions.

---

### Part 2: Physical Science Mechanics & Chemistry Synthesis (Questions 4–7)

**4.** A $500\text{ kg}$ satellite in deep space fires its thrusters, exerting a continuous force of $250\text{ N}$ for $20\text{ seconds}$.
- (a) Calculate the acceleration of the satellite.
- (b) Calculate the change in velocity ($\Delta v$) of the satellite.
- (c) Calculate the work done if the thruster displacement was $100\text{ meters}$.

**5.** A roller coaster car ($m = 600\text{ kg}$) rolls down a track from a height of $20\text{ m}$. At the bottom, it enters a horizontal braking zone where friction stops it over a distance of $15\text{ m}$.
- (a) What was the car's kinetic energy at the bottom before braking? ($g = 9.8\text{ m/s}^2$).
- (b) What average friction force stopped the car ($W = F \cdot d$)?

**6.** Balance the combustion reaction of propane:
$\text{C}_3\text{H}_8 + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O}$
- Identify the bonds broken and bonds formed. Is this reaction exothermic or endothermic?

**7.** An unknown element $X$ has 17 protons and 18 neutrons.
- (a) Identify the element.
- (b) What is its mass number?
- (c) What element group does it belong to?
- (d) Will it form an ionic bond or a covalent bond with Potassium ($Z = 19$)?

---

### Part 3: Laboratory Reasoning & Scientific Method (Questions 8–9)

**9.** Synthesize the complete scientific method as practiced in your formal lab investigations:
- Differentiate between a testable hypothesis, empirical data, and a theoretical conclusion.
- Why is peer review and repeatability fundamental to scientific progress?

**10.** Review your term's progress: Which project (Python Bank Simulation, Newton's Laws Lab, or Web Calculator) was your favorite technical challenge, and what major engineering skill did you master?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Architecture Comparison**:
   - Python OOP Bank Sim: Encapsulates state inside private instance attributes (`_balance`); methods mutate instance memory; persistence is file-based (JSON).
   - JS Web Calculator: State is held in UI memory object; mutations occur reactively via user event triggers; output updates DOM element nodes directly on screen.

2. **Inheritance & Physics Execution**:
   - `p = obj.momentum(12.0) = 2.5 * 12.0 = 30.0 kg·m/s`.
   - `f = obj.net_force(4.0) = 2.5 * 4.0 = 10.0 N`.

3. **Indispensability of Git**:
   - Git preserves a complete chronological history of every snapshot; allows branching for safe experimentation; resolves parallel conflicts; enables instant rollback to working states if breaking bugs are introduced.

4. **Satellite Kinematics**:
   - (a) $a = 
rac{F}{m} = 
rac{250	ext{ N}}{500	ext{ kg}} = 0.5	ext{ m/s}^2$.
   - (b) $\Delta v = a \Delta t = (0.5	ext{ m/s}^2)(20	ext{ s}) = 10.0	ext{ m/s}$.
   - (c) $W = Fd = 250	ext{ N} 	imes 100	ext{ m} = 25,000	ext{ Joules}$ ($25	ext{ kJ}$).

5. **Energy & Braking Work**:
   - (a) $KE_{bottom} = PE_{top} = mgh = (600	ext{ kg})(9.8	ext{ m/s}^2)(20	ext{ m}) = 117,600	ext{ J}$.
   - (b) $W_{friction} = F_{friction} \cdot d \implies F_{friction} = 
rac{117,600	ext{ J}}{15	ext{ m}} = 7,840	ext{ N}$.

6. **Propane Balancing**:
   - $	ext{C}_3	ext{H}_8 + 5	ext{O}_2 	o 3	ext{CO}_2 + 4	ext{H}_2	ext{O}$.
   - Exothermic reaction (energy released forming strong $	ext{C=O}$ and $	ext{O-H}$ bonds exceeds energy required to break reactants).

7. **Element Identification**:
   - (a) Chlorine ($	ext{Cl}$).
   - (b) Mass number $A = 17 + 18 = 35$.
   - (c) Group 17 (Halogens).
   - (d) Ionic bond with Potassium to form $	ext{KCl}$ (metal + nonmetal electron transfer).

8. **Scientific Method Synthesis**:
   - Hypothesis: A falsifiable, testable prediction of relationship between variables.
   - Empirical Data: Measurable, quantitative observations gathered through controlled experimentation.
   - Conclusion: Logical inference evaluating whether empirical findings support or refute the hypothesis.
   - Repeatability ensures findings are objective and not the result of experimental artifact, bias, or equipment glitch.

9. **Self-Reflection Evaluation**:
   - Open-ended student reflection. Learner should articulate specific growth in coding, lab rigor, or problem solving.
</details>
