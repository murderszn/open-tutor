# Grade 8 Stem — Python Inheritance, Work, Power, & Kinetic vs. Potential Energy Quiz
**Topic:** Python Inheritance, Work, Power, & Kinetic vs. Potential Energy  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Python Inheritance, Work, Power, & Kinetic vs. Potential Energy”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Python+Inheritance,+Work,+Power,+&+Kinetic+vs.+Potential+Energy)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine this snippet demonstrating class inheritance:
```python
class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self._balance = balance

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0.0, interest_rate=0.03):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self._balance * self.interest_rate
        self._balance += interest
        return interest

sav = SavingsAccount("Learner", 1000.0, 0.05)
earned = sav.apply_interest()
```
- What does `super().__init__(owner, balance)` do?
- What are the values of `earned` and `sav._balance` after running this code?

**2.** Explain what happens if a child class defines a method with the exact same name and signature as a method in its parent class. What is this concept called in OOP?

**3.** In Python, how do you verify if an object `sav` is an instance of `SavingsAccount` and also an instance of `BankAccount`? Write the built-in function call.

---

### Part 2: Physical Science — Work, Power & Energy (Questions 4–7)

**4.** In physics, what is the precise definition of **Work** ($W$)? Under what condition does a person pushing with $100\text{ N}$ of force do zero work on an object?

**5.** A crate with a mass of $25\text{ kg}$ is lifted vertically upward by a crane to a height of $8.0\text{ meters}$ in $4.0\text{ seconds}$. (Use $g = 9.8\text{ m/s}^2$).
- (a) Calculate the work done on the crate.
- (b) Calculate the power output of the crane in Watts ($\text{W}$).

**6.** Write the formulas for:
- (a) Gravitational Potential Energy ($PE$)
- (b) Kinetic Energy ($KE$)
- A roller coaster cart with a mass of $400\text{ kg}$ is at the top of a hill $30\text{ meters}$ above the ground. Calculate its gravitational potential energy relative to ground level.

**7.** A $1200\text{ kg}$ car is traveling at $10\text{ m/s}$. 
- (a) Calculate its kinetic energy.
- (b) If the car speeds up to $20\text{ m/s}$ (doubles its speed), calculate its new kinetic energy. By what factor did the kinetic energy increase?

---

### Part 3: Lab Reasoning & Energy Transformations (Questions 8–9)

**8.** In a frictionless pendulum lab, a bob of mass $m$ is released from a height $h$. 
- At what point in the swing is the potential energy at its maximum?
- At what point is the kinetic energy at its maximum?
- Write the equation relating maximum velocity $v_{max}$ at the bottom to release height $h$.

**9.** An electric motor lifts a $5.0\text{ kg}$ weight a distance of $2.0\text{ m}$ in $2.5\text{ s}$. The electrical meter shows the motor consumed $150\text{ Joules}$ of electrical energy.
- Calculate the useful work done on the weight ($g = 9.8\text{ m/s}^2$).
- Calculate the mechanical efficiency of the motor: $\text{Efficiency} = \frac{W_{out}}{E_{in}} \times 100\%$. Where did the "lost" energy go?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Inheritance & `super()`**:
   - `super().__init__(owner, balance)` invokes the constructor of the parent `BankAccount` class, initializing `self.owner` and `self._balance` without duplicating logic.
   - `earned` is `50.0` ($1000 \times 0.05$).
   - `sav._balance` is `1050.0`.

2. **Method Overriding**:
   - The child class's definition replaces (shadows) the parent method for instances of the child class. This concept is called **Method Overriding**.

3. **`isinstance`**:
   - `isinstance(sav, SavingsAccount)` -> `True`
   - `isinstance(sav, BankAccount)` -> `True`

4. **Work Definition**:
   - Work is the transfer of energy when a force causes displacement in the direction of the force: $W = F \cdot d \cdot \cos(\theta)$.
   - Zero work is done if the displacement is zero ($d = 0$, e.g., pushing against an immovable wall) or if the force is perpendicular to motion ($\cos(90^\circ) = 0$).

5. **Work and Power Calculations**:
   - (a) Force required = $mg = 25\text{ kg} \times 9.8\text{ m/s}^2 = 245\text{ N}$.
     $W = Fd = 245\text{ N} \times 8.0\text{ m} = 1960\text{ J}$.
   - (b) Power $P = \frac{W}{t} = \frac{1960\text{ J}}{4.0\text{ s}} = 490\text{ Watts}$.

6. **Energy Formulas & Calculations**:
   - (a) $PE = mgh$
   - (b) $KE = \frac{1}{2}mv^2$
   - $PE = (400\text{ kg})(9.8\text{ m/s}^2)(30\text{ m}) = 117,600\text{ Joules}$.

7. **Kinetic Energy Factor**:
   - (a) $KE_1 = \frac{1}{2}(1200)(10^2) = 600 \times 100 = 60,000\text{ J}$.
   - (b) $KE_2 = \frac{1}{2}(1200)(20^2) = 600 \times 400 = 240,000\text{ J}$.
   - The kinetic energy increased by a factor of $4$ ($2^2 = 4$). Doubling velocity quadruples kinetic energy.

8. **Pendulum Energy Conservation**:
   - Potential energy is maximum at the highest release/turning points ($v = 0$).
   - Kinetic energy is maximum at the lowest point of the arc ($h = 0$).
   - $mgh = \frac{1}{2}mv_{max}^2 \implies v_{max} = \sqrt{2gh}$.

9. **Efficiency Calculation**:
   - Useful work $W_{out} = mgh = 5.0\text{ kg} \times 9.8\text{ m/s}^2 \times 2.0\text{ m} = 98.0\text{ J}$.
   - $\text{Efficiency} = \frac{98.0}{150.0} \times 100\% = 65.3\%$.
   - The remaining $52\text{ J}$ was converted to thermal energy (heat in wires and motor windings), friction in motor bearings, and acoustic energy (sound).
</details>
