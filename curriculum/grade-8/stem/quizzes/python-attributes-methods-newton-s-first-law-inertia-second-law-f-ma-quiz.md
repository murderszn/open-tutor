# Grade 8 Stem — Python Attributes/Methods, Newton's First Law (Inertia), & Second Law ($F=ma$) Quiz
**Topic:** Python Attributes/Methods, Newton's First Law (Inertia), & Second Law ($F=ma$)  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Python Attributes/Methods, Newton's First Law (Inertia), & Second Law ($F=ma$)”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Python+Attributes/Methods,+Newton's+First+Law+(Inertia),+&+Second+Law+($F=ma$))
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this Python class definition:
```python
class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False

acct = BankAccount("Learner", 150.0)
acct.deposit(75.5)
```
What is the exact value of `acct.balance` after executing these lines? What would happen if `acct.deposit(-20)` were called?

**2.** Differentiate between an **instance attribute** and a **class attribute** in Python. Provide a two-line code example showing where a class attribute is declared.

**3.** What string representation method should you define in a class so that calling `print(acct)` displays a readable summary (e.g., `Account(owner='Learner', balance=$225.50)`) instead of `<__main__.BankAccount object at 0x...>`? Write the method signature.

---

### Part 2: Physical Science — Newton's 1st & 2nd Laws (Questions 4–7)

**4.** State **Newton's First Law of Motion**. Why is this law also known as the Law of Inertia? Give an everyday example involving a passenger in a braking car.

**5.** State **Newton's Second Law of Motion** as an equation. A soccer ball with a mass of $0.45\text{ kg}$ is kicked with a net force of $90\text{ N}$.
- Calculate the instantaneous acceleration of the soccer ball. Include units.

**6.** A $1200\text{ kg}$ car is accelerating at $2.5\text{ m/s}^2$ along a straight road.
- (a) What total net force is required to produce this acceleration?
- (b) If the road friction and air resistance together oppose motion with $400\text{ N}$ of force, what total engine force must the wheels exert?

**7.** Two identical forces are applied to Object A ($m = 5\text{ kg}$) and Object B ($m = 20\text{ kg}$). 
- Which object experiences greater acceleration?
- What is the ratio of their accelerations ($a_A : a_B$)?

---

### Part 3: Lab Reasoning & Data Analysis (Questions 8–9)

**8.** In a ramp lab, a dynamics cart with mass $0.5\text{ kg}$ accelerates at $3.2\text{ m/s}^2$. When an extra $0.5\text{ kg}$ weight is added to the cart while maintaining the exact same net pulling force, the new acceleration is measured at $1.58\text{ m/s}^2$.
- Did doubling the total mass halve the acceleration within experimental margin? Show mathematical verification.

**9.** If a hockey puck is sliding across a smooth icy pond, why does it eventually stop even if no human touches it? Does this contradict Newton's First Law? Explain.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Python Method Logic**:
   - `acct.balance` is `225.50` ($150.0 + 75.5$).
   - If `acct.deposit(-20)` is called, the condition `amount > 0` evaluates to `False`. The balance remains `225.50` and the method returns `False`.

2. **Instance vs. Class Attributes**:
   - An instance attribute belongs exclusively to a specific object instance (defined on `self`, e.g., `self.balance`).
   - A class attribute is shared across all instances of the class (defined at class root level).
   ```python
   class BankAccount:
       bank_name = "First Dynasty National Bank"  # Class attribute
   ```

3. **`__str__` or `__repr__`**:
   - `def __str__(self):` (user-friendly string) or `def __repr__(self):` (developer representation).

4. **Newton's First Law**:
   - An object at rest remains at rest, and an object in motion continues at constant velocity unless acted on by a net unbalanced external force.
   - Inertia is the natural resistance of any physical object to a change in its velocity.
   - When a car brakes suddenly, a passenger's body continues moving forward at the previous velocity due to inertia until restrained by a seatbelt.

5. **Second Law Calculation**:
   - $F_{net} = ma$ or $a = \frac{F}{m}$.
   - $a = \frac{90\text{ N}}{0.45\text{ kg}} = 200\text{ m/s}^2$.

6. **Force Calculations**:
   - (a) $F_{net} = ma = 1200\text{ kg} \times 2.5\text{ m/s}^2 = 3000\text{ N}$.
   - (b) $F_{engine} = F_{net} + F_{friction} = 3000\text{ N} + 400\text{ N} = 3400\text{ N}$.

7. **Mass vs. Acceleration Ratio**:
   - Object A experiences greater acceleration because acceleration is inversely proportional to mass.
   - $a_A = \frac{F}{5}$, $a_B = \frac{F}{20} \implies a_A = 4 \times a_B$. The ratio $a_A : a_B$ is $4:1$.

8. **Lab Verification**:
   - Expected theoretical acceleration with $1.0\text{ kg}$ total mass = $\frac{1.6\text{ N}}{1.0\text{ kg}} = 1.60\text{ m/s}^2$.
   - Observed: $1.58\text{ m/s}^2$. Percent difference is $\approx 1.25\%$, well within normal lab friction variance.

9. **Friction & Newton's First Law**:
   - The puck stops due to friction between the ice and puck, plus air resistance.
   - This does NOT contradict Newton's First Law; friction is the unbalanced external force acting opposite to motion.
</details>
