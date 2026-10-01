# Grade 8 Stem — Python Encapsulation & Validation, Newton's Third Law, Momentum ($p=mv$), & Impulse Quiz
**Topic:** Python Encapsulation & Validation, Newton's Third Law, Momentum ($p=mv$), & Impulse  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Python Encapsulation & Validation, Newton's Third Law, Momentum ($p=mv$), & Impulse”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Python+Encapsulation+&+Validation,+Newton's+Third+Law,+Momentum+($p=mv$),+&+Impulse)
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Analyze this Python snippet implementing basic encapsulation:
```python
class Account:
    def __init__(self, owner, pin, balance=0.0):
        self.owner = owner
        self._pin = pin
        self._balance = balance

    def withdraw(self, amount, entered_pin):
        if entered_pin != self._pin:
            raise ValueError("Authentication Failed: Invalid PIN.")
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self._balance:
            raise ValueError("Insufficient funds.")
        self._balance -= amount
        return self._balance
```
What is the purpose of prefixing an attribute with an underscore (e.g., `_pin`) in Python? How does raising `ValueError` protect financial data integrity compared to just returning `False`?

**2.** Write a short Python `try...except` block that attempts to call `acct.withdraw(500, "9999")` and gracefully prints the error message without crashing the script.

**3.** What is the difference between a shallow copy and a deep copy when copying data structures like a transaction list `self.transactions = []`?

---

### Part 2: Physical Science — Newton's 3rd Law & Momentum (Questions 4–7)

**4.** State **Newton's Third Law of Motion**. Identify the action-reaction force pair when:
- (a) A rocket engine launches off a launchpad.
- (b) A swimmer pushes off the concrete wall of a pool.

**5.** A heavy cannon ($m_1 = 800\text{ kg}$) fires a cannonball ($m_2 = 10\text{ kg}$) with a forward muzzle velocity of $120\text{ m/s}$.
- Using the law of **conservation of momentum**, calculate the backward recoil velocity of the cannon.

**6.** Define **momentum** ($p$) and **impulse** ($J$). 
- What is the mathematical relationship between impulse and change in momentum ($\Delta p$)?
- Why do modern cars have crush zones (crumple zones) and airbags instead of rigid steel bumpers?

**7.** A $0.15\text{ kg}$ baseball traveling horizontally at $35\text{ m/s}$ is struck by a bat and flies directly backwards at $45\text{ m/s}$.
- (a) What is the total change in momentum ($\Delta p$) of the baseball? (Watch your signs!).
- (b) If the bat was in contact with the ball for $0.002\text{ seconds}$, what average force did the bat exert?

---

### Part 3: Lab Reasoning & Systems Thinking (Questions 8–9)

**8.** In a momentum cart lab, Cart A ($1.0\text{ kg}$) moving at $2.0\text{ m/s}$ collides with stationary Cart B ($1.0\text{ kg}$). They stick together with Velcro and roll forward as one combined mass.
- Predict their combined velocity after the collision assuming no friction.
- Is this an elastic or inelastic collision? Explain.

**9.** When jumping off a high ledge onto the ground, why should you bend your knees upon landing rather than locking your legs? Answer using the impulse-momentum theorem ($F \cdot \Delta t = m \cdot \Delta v$).

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Encapsulation & Exceptions**:
   - The single underscore prefix (`_pin`, `_balance`) is a PEP 8 convention indicating that an attribute is protected/internal.
   - Raising `ValueError` explicitly signals exceptional failure, halting invalid operations and forcing caller handling, preventing silent data corruption.

2. **`try...except` Handling**:
   ```python
   try:
       acct.withdraw(500, "9999")
   except ValueError as error:
       print(f"Transaction rejected: {error}")
   ```

3. **Shallow vs. Deep Copy**:
   - A shallow copy duplicates the outer list container but shares references to internal objects.
   - A deep copy recursively duplicates both outer and nested objects, isolating memory mutations.

4. **Newton's 3rd Law Pairs**:
   - For every action, there is an equal and opposite reaction ($F_{A \to B} = -F_{B \to A}$).
   - (a) Rocket pushes hot exhaust gases downward; exhaust gases push rocket upward.
   - (b) Swimmer pushes backward against wall; wall pushes forward on swimmer.

5. **Recoil Calculation**:
   - Initial momentum = $0$. $m_1 v_1 + m_2 v_2 = 0$.
   - $800 v_1 + (10)(120) = 0 \implies 800 v_1 = -1200 \implies v_1 = -1.5\text{ m/s}$ (backward).

6. **Impulse & Safety**:
   - Momentum $p = mv$. Impulse $J = F_{net}\Delta t = \Delta p$.
   - Crumple zones increase collision duration ($\Delta t$), drastically reducing peak force $F = \frac{\Delta p}{\Delta t}$ on occupants.

7. **Baseball Calculation**:
   - (a) $\Delta p = m(v_f - v_0) = 0.15(45 - (-35)) = 0.15 \times 80 = 12.0\text{ kg}\cdot\text{m/s}$.
   - (b) $F_{avg} = \frac{\Delta p}{\Delta t} = \frac{12.0}{0.002} = 6000\text{ N}$.

8. **Collision Analysis**:
   - $(1.0)(2.0) = (1.0 + 1.0) v_f \implies 2.0 = 2.0 v_f \implies v_f = 1.0\text{ m/s}$.
   - Inelastic collision (objects stick together; kinetic energy is converted to thermal/deformation energy).

9. **Biomechanical Reasoning**:
   - Bending knees increases impact duration ($\Delta t$) over several inches of movement, drastically reducing the impact force on bones and joints.
</details>
