# 📊 Assignment: Bivariate Scatter Plots & Trendline Investigation

**Focus Area:** Statistics & Probability (8.SP.A.1, 8.SP.A.2, 8.SP.A.3)  
**Deliverable:** Markdown data report, coordinate scatter plot, trendline equation derivation ($y = mx + b$), outlier analysis, and predictive modeling.

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy for “Bivariate Scatter Plots & Trendline Investigation”](https://www.youtube.com/results?search_query=Khan+Academy+Bivariate+Scatter+Plots+&+Trendline+Investigation)
- **Reference:** [Khan Academy: data and modeling](https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data)
- **Reference:** [CODAP data explorer](https://codap.concord.org/)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
## 🎯 Objective
Investigate bivariate data relationships by constructing a scatter plot, identifying association patterns (positive, negative, non-linear, clustering), identifying outliers, modeling the trend with an informal line of best fit, and using the equation to make real-world interpolations and extrapolations.

---

## 🧪 The Investigation: Training Hours vs. Tournament Performance

An e-sports / chess analytics group tracked 12 competitive players, recording their **Weekly Dedicated Practice Time (Hours, $x$)** and their **Tournament Elo Rating Gain (Points, $y$)** over a season:

| Player | Weekly Practice ($x$ hrs) | Rating Gain ($y$ pts) |
|:---:|:---:|:---:|
| 1 | 4 | 25 |
| 2 | 6 | 45 |
| 3 | 7 | 50 |
| 4 | 9 | 80 |
| 5 | 10 | 75 |
| 6 | 12 | 110 |
| 7 | 14 | 120 |
| 8 | 15 | 135 |
| 9 | 16 | 140 |
| 10 | 18 | 175 |
| 11 | 20 | 190 |
| 12 | 14 | 30 |

---

## 🔍 Investigation Tasks

### Task 1: Scatter Plot & Association Pattern
1. Create a scatter plot of the data using Desmos or an ASCII/Markdown coordinate representation.
2. Describe the overall pattern of association:
   - Direction: Is it positive, negative, or no association?
   - Form: Is it approximately linear or non-linear?
   - Strength: Are the points tightly clustered around a trendline or widely dispersed?

### Task 2: Outlier Detection & Anomaly Explanation
1. Identify the clear outlier in the dataset. Which player is it, and what are their $(x, y)$ coordinates?
2. Explain mathematically why this point is an outlier relative to the rest of the data.
3. In a real competitive scenario (chess/sports), what outside factors could explain this anomaly (e.g., fatigue, playing tilted, technical issues)?

### Task 3: Constructing the Line of Best Fit
1. Excluding the single outlier, choose two representative points that lie near the center path of the data scatter (e.g., $(6, 45)$ and $(18, 175)$).
2. Calculate the slope $m$ of the trendline:
   $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
3. Find the y-intercept $b$ using one of your points in $y = mx + b$.
4. State your complete trendline equation: $\hat{y} = mx + b$.
5. Interpret what the slope $m$ and y-intercept $b$ represent in the context of weekly training hours and rating gains.

### Task 4: Predictions & Extrapolations
1. **Interpolation**: Predict the expected rating gain for a player who practices **11 hours** per week.
2. **Extrapolation**: Predict the expected rating gain for a player who practices **25 hours** per week.
3. Discuss the limitations of linear extrapolation: Why might this linear model fail if someone tried to practice 60 hours per week? (Consider diminishing returns, burnout, sleep limits).

---

## 📝 Student Submission Template

```markdown
### 1. Scatter Plot & Pattern Analysis
- Link to Desmos Plot or Chart Screenshot:
- Direction of Association: [Positive / Negative / None]
- Form: [Linear / Non-linear]
- Strength: [Strong / Moderate / Weak]
- Justification:

### 2. Outlier Analysis
- Outlier Coordinates: Player ___ (x = ___, y = ___)
- Mathematical Reason:
- Real-world Scenario Reason:

### 3. Line of Best Fit Equation
- Selected Points: (x1, y1) = (___, ___) and (x2, y2) = (___, ___)
- Slope Calculation: m = (___ - ___) / (___ - ___) = ___
- Y-Intercept Calculation: b = ___
- Final Equation: y = ___x + ___
- Contextual Meaning of Slope: [Each additional hour of practice yields approximately ___ points of gain]
- Contextual Meaning of Y-Intercept: [A player with 0 hours of practice would gain approximately ___ points]

### 4. Predictive Modeling & Evaluation
- Prediction for 11 Hours (Interpolation): y = ___
- Prediction for 25 Hours (Extrapolation): y = ___
- Critical Evaluation of Model Limitations:
  [Write 4-5 sentences explaining why the model cannot extend indefinitely]
```

---

## 💯 Grading Rubric

| Criteria | Proficient (4 pts) | Developing (3 pts) | Beginning (1-2 pts) |
|:---|:---|:---|:---|
| **Data Representation & Plotting** | Scatter plot is cleanly plotted with correctly scaled axes. | Axes scaled unevenly or 1-2 points plotted incorrectly. | Graph missing or illegible. |
| **Trendline Derivation** | Accurately calculates slope and y-intercept from representative points. | Minor arithmetic mistake in slope or y-intercept. | Trendline equation is completely arbitrary or missing. |
| **Outlier & Pattern Reasoning** | Correctly identifies outlier with sound mathematical and contextual reasons. | Identifies outlier but rationale is weak. | Fails to detect outlier. |
| **Critical Evaluation** | Clearly articulates the dangers and boundaries of linear extrapolation. | States prediction but offers shallow evaluation. | Treats linear trend as infinite without critique. |
