# Grade 8 Stem — Git Workflow, Intro to Python Classes, & Kinematics (Motion & Speed) Quiz
**Topic:** Git Workflow, Intro to Python Classes, & Kinematics (Motion & Speed)  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Git Workflow, Intro to Python Classes, & Kinematics (Motion & Speed)”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Git+Workflow,+Intro+to+Python+Classes,+&+Kinematics+(Motion+&+Speed))
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Code Snippets (Questions 1–3)

**1.** Examine the following terminal session commands:
```bash
git status
git add bank_sim.py
git commit -m "feat: initialize BankAccount class"
```
Explain what each of these three commands accomplishes in the Git version control cycle. Why is staging (`git add`) a necessary step before committing?

**2.** Look at the Python code snippet below:
```python
class Robot:
    def __init__(self, name, battery_level=100):
        self.name = name
        self.battery = battery_level

bot1 = Robot("Titan")
bot2 = Robot("Sparky", 85)
```
What is the purpose of `__init__`? What are the values of `bot1.battery` and `bot2.battery` after these lines run?

**3.** What keyword in Python refers to the specific instance of the class being created or modified? What would happen if you omitted it inside `def report(self):`?

---

### Part 2: Physical Science & Mechanics (Questions 4–7)

**4.** A remote-controlled testing cart travels $150\text{ meters}$ due north in $12.5\text{ seconds}$. 
- (a) Calculate its average speed.
- (b) What is its average velocity? (Explain the key difference between speed and velocity).

**5.** A drone accelerates from rest ($v_0 = 0\text{ m/s}$) to a velocity of $24\text{ m/s}$ in $4.0\text{ seconds}$.
- Calculate the drone's acceleration in $\text{m/s}^2$. Show the formula used.

**6.** Examine the following position-time graph scenario: An object's position increases linearly from $0\text{ m}$ to $20\text{ m}$ between $t = 0\text{ s}$ and $t = 5\text{ s}$, remains flat at $20\text{ m}$ between $t = 5\text{ s}$ and $t = 9\text{ s}$, then drops to $0\text{ m}$ at $t = 11\text{ s}$. 
Describe the object's motion during each of the three time segments.

**7.** Convert a speed of $72\text{ km/h}$ to meters per second ($\text{m/s}$) using dimensional analysis. Show your conversion factors.

---

### Part 3: Lab Reasoning & Engineering (Questions 8–9)

**8.** In a physics motion lab, a student uses a manual stopwatch to time a marble rolling down an incline. Across five identical trials, the recorded times are: $2.14\text{ s}$, $2.48\text{ s}$, $1.98\text{ s}$, $2.31\text{ s}$, and $2.19\text{ s}$.
- (a) Calculate the average time.
- (b) Identify the main source of human experimental error and suggest one technological tool to improve precision.

**9.** If you want to test whether increasing the mass of a cart changes its acceleration down a frictionless ramp, state:
- The independent variable:
- The dependent variable:
- Two essential controlled variables:

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Git Workflow**:
   - `git status`: Checks working directory state (shows modified, tracked, and untracked files).
   - `git add bank_sim.py`: Stages the file to the index, preparing it for the next commit.
   - `git commit -m "..."`: Permanently records the staged snapshot into local repository history with a message.
   - Staging allows developers to curate exactly which file modifications belong together in a commit.

2. **Python `__init__`**:
   - `__init__` is the constructor method in Python, automatically executed whenever a new instance of a class is created. It initializes instance attributes.
   - `bot1.battery` is `100` (default value).
   - `bot2.battery` is `85` (passed explicitly).

3. **`self` Keyword**:
   - `self` binds instance attributes and methods to the specific object instance in memory.
   - Omitting `self` results in a `TypeError` when called as `bot1.report()` because Python automatically passes the instance as the first positional argument.

4. **Speed vs. Velocity**:
   - (a) $\text{Speed} = \frac{d}{t} = \frac{150\text{ m}}{12.5\text{ s}} = 12.0\text{ m/s}$.
   - (b) $\text{Velocity} = 12.0\text{ m/s}\text{ North}$. Speed is a scalar (magnitude only); velocity is a vector (magnitude and direction).

5. **Acceleration**:
   - Formula: $a = \frac{v_f - v_0}{\Delta t} = \frac{24\text{ m/s} - 0\text{ m/s}}{4.0\text{ s}} = 6.0\text{ m/s}^2$.

6. **Graph Interpretation**:
   - Segment 1 ($0\text{–}5\text{ s}$): Constant positive velocity of $\frac{20-0}{5} = 4\text{ m/s}$ moving forward.
   - Segment 2 ($5\text{–}9\text{ s}$): At rest (velocity = $0\text{ m/s}$, flat line).
   - Segment 3 ($9\text{–}11\text{ s}$): Constant negative velocity of $\frac{0-20}{2} = -10\text{ m/s}$ returning to start.

7. **Dimensional Analysis**:
   - $\frac{72\text{ km}}{1\text{ hr}} \times \frac{1000\text{ m}}{1\text{ km}} \times \frac{1\text{ hr}}{3600\text{ s}} = \frac{72000}{3600} = 20\text{ m/s}$.

8. **Lab Error Analysis**:
   - (a) $\text{Average} = \frac{2.14 + 2.48 + 1.98 + 2.31 + 2.19}{5} = \frac{11.10}{5} = 2.22\text{ s}$.
   - (b) Human reaction time delay (starting and stopping the stopwatch). Tool improvement: Photogate sensors or slow-motion video frame analysis with timestamp.

9. **Experimental Variables**:
   - Independent variable: Mass of the cart (kg).
   - Dependent variable: Acceleration of the cart down the ramp ($\text{m/s}^2$) or time to reach bottom.
   - Controlled variables: Incline angle of ramp, track surface/friction, release height.
</details>
