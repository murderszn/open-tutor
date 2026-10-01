# Grade 8 Stem — Python File I/O & JSON, Writing & Balancing Chemical Equations Quiz
**Topic:** Python File I/O & JSON, Writing & Balancing Chemical Equations  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Python File I/O & JSON, Writing & Balancing Chemical Equations”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Python+File+I/O+&+JSON,+Writing+&+Balancing+Chemical+Equations)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this Python snippet saving banking data:
```python
import json

account_data = {
    "account_number": "ACC-7721",
    "owner": "Learner ",
    "balance": 3450.75,
    "transactions": [
        {"type": "DEPOSIT", "amount": 500.0},
        {"type": "WITHDRAWAL", "amount": 50.0}
    ]
}

with open("account_data.json", "w") as file:
    json.dump(account_data, file, indent=4)
```
- What is the benefit of using the `with open(...)` context manager in Python?
- What does the `indent=4` argument do in `json.dump`?

**2.** Write the two lines of Python code needed to read the data back from `account_data.json` into a Python dictionary named `loaded_data`.

**3.** What exception is raised if Python attempts to open a file for reading (`"r"`) that does not exist? How should you safeguard your program against this crash?

---

### Part 2: Physical Science — Balancing Chemical Equations (Questions 4–7)

**4.** State the **Law of Conservation of Mass**. How does this physical law dictate that every chemical equation must be balanced?

**5.** Differentiate between a **subscript** and a **coefficient** in a chemical formula (e.g., $3\text{H}_2\text{O}$).
- Why is it strictly forbidden to change subscripts when balancing an equation?

**6.** Balance the following chemical equations:
- (a) Synthesis of water: $\text{H}_2 + \text{O}_2 \to \text{H}_2\text{O}$
- (b) Rusting of iron: $\text{Fe} + \text{O}_2 \to \text{Fe}_2\text{O}_3$
- (c) Combustion of methane: $\text{CH}_4 + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O}$

**7.** Balance the equation for the decomposition of hydrogen peroxide:
$\text{H}_2\text{O}_2 \to \text{H}_2\text{O} + \text{O}_2$
- Count the total atoms of Hydrogen and Oxygen on both the reactant and product sides before and after balancing.

---

### Part 3: Lab Reasoning & Stoichiometric Verification (Questions 8–9)

**8.** In a chemistry lab, $10.0\text{ g}$ of baking soda (sodium bicarbonate) is mixed with $50.0\text{ g}$ of vinegar (acetic acid) in an open beaker. Bubbles of carbon dioxide gas vigorously effervesce. After the reaction stops, the beaker is weighed on a digital scale and registers $57.8\text{ g}$.
- (a) What was the mass of carbon dioxide gas that escaped into the room?
- (b) Does this experiment violate the Law of Conservation of Mass? How could you modify the apparatus to prove mass was conserved?

**9.** Why must industrial chemical processes and pharmaceutical manufacturing calculate exact molar masses and balanced equations rather than mixing chemicals by estimated volume?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Python `with open` & JSON**:
   - `with open(...)` ensures the file handle is automatically and properly closed after the code block executes, even if an exception occurs, preventing resource leaks.
   - `indent=4` pretty-prints the JSON with 4-space indentation, making the output human-readable.

2. **Reading JSON**:
   ```python
   with open("account_data.json", "r") as file:
       loaded_data = json.load(file)
   ```

3. **`FileNotFoundError` Handling**:
   - Raises `FileNotFoundError`.
   - Safeguard with `try...except FileNotFoundError` or check `os.path.exists("account_data.json")`.

4. **Conservation of Mass**:
   - Mass is neither created nor destroyed in a chemical reaction.
   - The total number of atoms of each element on the reactant side must exactly equal the total number of atoms of that element on the product side.

5. **Subscripts vs. Coefficients**:
   - Subscript: Number of atoms bonded within a molecule (e.g., the $2$ in $\text{H}_2\text{O}$). Changing a subscript changes the chemical identity of the substance (e.g., changing $\text{H}_2\text{O}$ to $\text{H}_2\text{O}_2$ turns water into hydrogen peroxide).
   - Coefficient: Multiplier placed in front of a formula indicating how many molecules/moles react.

6. **Balanced Equations**:
   - (a) $2\text{H}_2 + \text{O}_2 \to 2\text{H}_2\text{O}$
   - (b) $4\text{Fe} + 3\text{O}_2 \to 2\text{Fe}_2\text{O}_3$
   - (c) $\text{CH}_4 + 2\text{O}_2 \to \text{CO}_2 + 2\text{H}_2\text{O}$

7. **Decomposition Balancing**:
   - Balanced: $2\text{H}_2\text{O}_2 \to 2\text{H}_2\text{O} + \text{O}_2$
   - Reactant side: $4\text{ H}$, $4\text{ O}$.
   - Product side: $4\text{ H}$ (from $2\text{H}_2\text{O}$), $4\text{ O}$ ($2$ from $2\text{H}_2\text{O} + 2$ from $\text{O}_2$).

8. **Open System Mass Loss**:
   - (a) Initial mass = $10.0\text{ g} + 50.0\text{ g} = 60.0\text{ g}$. Final mass = $57.8\text{ g}$. Escaped $\text{CO}_2$ gas mass = $60.0 - 57.8 = 2.2\text{ g}$.
   - (b) No, it was an open system. Sealing the reaction inside a closed flask with a balloon or gas syringe captures the gas, proving total mass before equals total mass after.

9. **Stoichiometric Precision**:
   - Chemical reactions occur on a discrete atom-to-atom (mole-to-mole) basis. Precise balancing ensures maximum product yield, prevents wasteful excess reagents, and eliminates hazardous unreacted leftovers.
</details>
