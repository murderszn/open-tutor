# Grade 8 Stem — Advanced Git Branching, Merge Conflicts, & Types of Chemical Reactions Quiz
**Topic:** Advanced Git Branching, Merge Conflicts, & Types of Chemical Reactions  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Advanced Git Branching, Merge Conflicts, & Types of Chemical Reactions”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Advanced+Git+Branching,+Merge+Conflicts,+&+Types+of+Chemical+Reactions)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this sequence of Git branching commands:
```bash
git checkout -b feature/overdraft-protection
# Edit bank_sim.py
git commit -am "feat: implement overdraft check"
git checkout main
git merge feature/overdraft-protection
```
- Explain what `git checkout -b feature/...` does.
- What is the benefit of developing features on separate branches rather than committing directly to `main`?

**2.** Describe what a **merge conflict** is in Git. If two developers edit the same line of `calculator.js` on different branches, how does Git alert you in the code, and how do you resolve it?

**3.** What Git command shows a graphical, visual representation of your branch history and commits?

---

### Part 2: Physical Science — Types of Chemical Reactions (Questions 4–7)

**4.** Classify the following chemical equations into the five major reaction types (Synthesis, Decomposition, Single Replacement, Double Replacement, or Combustion):
- (a) $2\text{Mg} + \text{O}_2 \to 2\text{MgO}$
- (b) $2\text{KClO}_3 \to 2\text{KCl} + 3\text{O}_2$
- (c) $\text{Zn} + 2\text{HCl} \to \text{ZnCl}_2 + \text{H}_2$
- (d) $\text{AgNO}_3 + \text{NaCl} \to \text{AgCl} + \text{NaNO}_3$
- (e) $\text{C}_3\text{H}_8 + 5\text{O}_2 \to 3\text{CO}_2 + 4\text{H}_2\text{O}$

**5.** In a single replacement reaction, how does the **Activity Series of Metals** determine whether a reaction will occur? 
- Will Copper metal react when placed in a solution of Zinc Sulfate: $\text{Cu} + \text{ZnSO}_4 \to \text{?}$ Explain why or why not.

**6.** What is a **precipitation reaction** in aqueous chemistry? What state symbol represents a precipitate in a chemical equation?

**7.** Define **activation energy** ($E_a$). How does a chemical catalyst or biological enzyme accelerate a reaction without being consumed?

---

### Part 3: Lab Reasoning & Reaction Observation (Questions 8–9)

**8.** In a lab experiment, you drop a strip of Magnesium ribbon into test tube A containing hydrochloric acid, and mix lead nitrate and potassium iodide solutions in test tube B.
- List the observable evidence of a chemical reaction for test tube A.
- List the observable evidence of a chemical reaction for test tube B.

**9.** Contrast **endothermic** and **exothermic** reactions:
- In an instant ice pack, ammonium nitrate dissolves in water and the pack becomes ice-cold. Is this reaction endothermic or exothermic? Explain where the thermal energy went.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Git Branching**:
   - `git checkout -b feature/...` creates a new branch and immediately switches your working tree to it.
   - Branching isolates experimental code, allowing development and testing without risking instability on the production `main` branch.

2. **Merge Conflicts**:
   - A merge conflict occurs when Git cannot automatically reconcile differences between two branches modifying the same lines of code.
   - Git places conflict markers in the file:
     ```
     <<<<<<< HEAD
     current branch code
     =======
     incoming branch code
     >>>>>>> feature-branch
     ```
   - Resolution: Open the file, review differences with team, manually edit the text to the desired unified state, remove markers, stage (`git add`), and commit.

3. **Branch Visualization**:
   - `git log --graph --oneline --all`

4. **Reaction Classification**:
   - (a) Synthesis (Combination)
   - (b) Decomposition
   - (c) Single Replacement
   - (d) Double Replacement (Precipitation)
   - (e) Combustion

5. **Activity Series**:
   - A metal can only displace another metal from a compound if it is higher (more reactive) on the activity series.
   - Copper (Cu) is lower on the activity series than Zinc (Zn); therefore, no reaction occurs ($	ext{No Reaction}$).

6. **Precipitation**:
   - A double replacement reaction where two soluble aqueous solutions combine to form an insoluble solid product.
   - Symbol: $(s)$ for solid (or downward arrow $\downarrow$).

7. **Activation Energy & Catalysts**:
   - Activation energy is the minimum energy required to break bonds and initiate a chemical reaction.
   - A catalyst lowers the activation energy by providing an alternative reaction pathway, dramatically increasing reaction rate.

8. **Observable Evidence**:
   - Test Tube A: Vigorous effervescence (gas bubbles of $	ext{H}_2$), heat release (exothermic), dissolving metal.
   - Test Tube B: Instantaneous formation of a bright yellow solid precipitate ($	ext{PbI}_2$) and cloudy color change.

9. **Endothermic Ice Pack**:
   - It is an **endothermic reaction**.
   - Thermal energy is absorbed from the surrounding water and ambient environment to break solute-solvent lattice bonds, causing surrounding temperature to drop sharply.
</details>
