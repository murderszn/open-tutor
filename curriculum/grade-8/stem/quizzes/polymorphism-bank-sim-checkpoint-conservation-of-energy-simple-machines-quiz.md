# Grade 8 Stem — Polymorphism, Bank Sim Checkpoint, Conservation of Energy, & Simple Machines Quiz
**Topic:** Polymorphism, Bank Sim Checkpoint, Conservation of Energy, & Simple Machines  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Polymorphism, Bank Sim Checkpoint, Conservation of Energy, & Simple Machines”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Polymorphism,+Bank+Sim+Checkpoint,+Conservation+of+Energy,+&+Simple+Machines)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Look at how polymorphism allows different account types to process withdrawals differently:
```python
class CheckingAccount(BankAccount):
    def __init__(self, owner, balance=0.0, overdraft_limit=100.0):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount <= self._balance + self.overdraft_limit:
            self._balance -= amount
            return True
        return False

accounts = [BankAccount("Alice", 50), CheckingAccount("Bob", 50, 100)]
for acct in accounts:
    success = acct.withdraw(80)
    print(f"{acct.owner}: {success}")
```
What will be printed for Alice and Bob? Explain how polymorphism allows the `for` loop to treat both objects uniformly.

**2.** In your Python Bank Simulation project, what data structure is best suited for storing active accounts keyed by account number? Provide an example dictionary lookup.

**3.** Why is it important to format currency output using string formatting like `f"${amount:,.2f}"` in financial software? What does `,:2f` do?

---

### Part 2: Physical Science — Conservation of Energy & Machines (Questions 4–7)

**4.** State the **Law of Conservation of Energy**. If a skateboarder drops into a half-pipe from an initial height of $5.0\text{ meters}$, what will their theoretical speed be at the lowest point (assuming no friction, $g = 9.8\text{ m/s}^2$)?

**5.** A roller coaster train starts from rest at the top of a $45\text{ m}$ hill. It descends to ground level and then travels up a second hill of height $35\text{ m}$.
- Calculate its speed at the top of the second hill assuming negligible friction.

**6.** Define **Mechanical Advantage** ($MA$) of a simple machine.
- What is the difference between Ideal Mechanical Advantage ($IMA$) and Actual Mechanical Advantage ($AMA$)?

**7.** An inclined plane ramp is $6.0\text{ meters}$ long and reaches a doorway $1.5\text{ meters}$ high.
- (a) Calculate the $IMA$ of the ramp.
- (b) If a worker uses a force of $120\text{ N}$ to push a $40\text{ kg}$ box up the ramp, calculate the $AMA$. ($g = 9.8\text{ m/s}^2$).

---

### Part 3: Lab Reasoning & Experimental Efficiency (Questions 8–9)

**8.** In a ramp experiment, you find that increasing the incline angle of a ramp decreases the mechanical advantage. 
- Why does a gentler slope require less input force than a steep slope?
- Does a gentler slope reduce the total work required to raise an object? Explain using $W = F \cdot d$.

**9.** A student tests a pulley system to lift a $100\text{ N}$ load. The student exerts $30\text{ N}$ of effort force and pulls $4\text{ meters}$ of rope to lift the load $1\text{ meter}$.
- (a) Calculate the work input.
- (b) Calculate the work output.
- (c) Calculate the efficiency of the pulley system.

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Polymorphism Output**:
   - Output:
     ```
     Alice: False
     Bob: True
     ```
   - Alice has a standard `BankAccount` with balance $50; $80 exceeds her balance, returning `False`.
   - Bob has a `CheckingAccount` with $50 balance + $100 overdraft = $150 available; $80 is approved, returning `True`.
   - Polymorphism allows code to call `.withdraw()` on any `BankAccount` subtype without needing conditional type checks (`if type == ...`).

2. **Account Key Storage**:
   - A Python dictionary (`dict`) provides $O(1)$ average lookup time:
   ```python
   accounts = {"ACC1001": acct1, "ACC1002": acct2}
   current_account = accounts.get("ACC1001")
   ```

3. **String Formatting**:
   - Financial software requires exact two-decimal cent representation and readable thousands separators.
   - `,:2f` adds comma separators for thousands and formats floating point numbers rounded to exactly 2 decimal places (e.g., `$1,250.50`).

4. **Conservation of Energy Calculation**:
   - Energy cannot be created or destroyed, only converted from one form to another.
   - $mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2(9.8)(5.0)} = \sqrt{98} \approx 9.90\text{ m/s}$.

5. **Roller Coaster Speed**:
   - Initial energy at top of 1st hill = $mgh_1$.
   - Energy at top of 2nd hill = $mgh_2 + \frac{1}{2}mv_2^2$.
   - $mg(h_1 - h_2) = \frac{1}{2}mv_2^2 \implies v_2 = \sqrt{2g(h_1 - h_2)} = \sqrt{2(9.8)(45 - 35)} = \sqrt{196} = 14.0\text{ m/s}$.

6. **Mechanical Advantage**:
   - $MA$ is the ratio of output force (load) to input force (effort).
   - $IMA$ is theoretical advantage assuming no friction ($IMA = \frac{d_{in}}{d_{out}}$).
   - $AMA$ is observed advantage accounting for friction ($AMA = \frac{F_{out}}{F_{in}}$).

7. **Ramp Advantage**:
   - (a) $IMA = \frac{\text{length}}{\text{height}} = \frac{6.0\text{ m}}{1.5\text{ m}} = 4.0$.
   - (b) $F_{out} = mg = 40\text{ kg} \times 9.8\text{ m/s}^2 = 392\text{ N}$.
     $AMA = \frac{F_{out}}{F_{in}} = \frac{392\text{ N}}{120\text{ N}} \approx 3.27$.

8. **Ramp Physics Analysis**:
   - A gentler slope increases distance ($d$), spreading the force requirement over a longer path ($F = \frac{W}{d}$).
   - No, a simple machine does NOT reduce the total work required; in fact, due to friction, actual work input is slightly greater.

9. **Pulley Efficiency**:
   - (a) $W_{in} = F_{in} \times d_{in} = 30\text{ N} \times 4\text{ m} = 120\text{ J}$.
   - (b) $W_{out} = F_{out} \times d_{out} = 100\text{ N} \times 1\text{ m} = 100\text{ J}$.
   - (c) $\text{Efficiency} = \frac{100}{120} \times 100\% = 83.3\%$.
</details>
