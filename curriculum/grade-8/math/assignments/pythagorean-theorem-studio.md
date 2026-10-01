# 📐 Assignment: Pythagorean Theorem Architecture & Coordinate Studio

**Focus Area:** Geometry (8.G.B.6, 8.G.B.7, 8.G.B.8)  
**Deliverable:** Markdown studio project with structural diagrams, 2D coordinate distance proofs, and 3D interior diagonal calculations.

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy for “Pythagorean Theorem Architecture & Coordinate Studio”](https://www.youtube.com/results?search_query=Khan+Academy+Pythagorean+Theorem+Architecture+&+Coordinate+Studio)
- **Reference:** [Khan Academy: 8th-grade geometry](https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry)
- **Reference:** [GeoGebra Geometry](https://www.geogebra.org/geometry)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
## 🎯 Objective
Master the geometric principles and algebraic power of the Pythagorean Theorem ($a^2 + b^2 = c^2$) by designing an A-frame roof truss, calculating distances on coordinate planes, and deriving the 3D space diagonal formula for computer graphics and architecture.

---

## 🏛️ Studio Challenges

### Challenge 1: The A-Frame Structural Truss
An architectural studio is framing a timber roof truss:
- The base span of the building is 24 feet wide.
- A vertical center support king-post rises 9 feet from the exact center of the base to the roof peak (ridge beam).
- Diagonal rafters run from the peak down to both ends of the base.

1. Model the left rafter as the hypotenuse of a right triangle. What is the length of the base leg?
2. Calculate the exact rafter length $c$ needed. Show $a^2 + b^2 = c^2$ step-by-step.
3. If an engineer specifies adding two diagonal collar ties that connect the midpoint of the king post ($4.5$ ft above base) to points on the base located 6 feet from the center, calculate the required length of each collar tie. Round to the nearest hundredth of a foot.

### Challenge 2: Coordinate Plane Distance & Perimeter Proof
Three vertices of a regional cell tower network are plotted on a city grid (each grid unit represents 1 kilometer):
- Tower A: $(-4, 5)$
- Tower B: $(2, -3)$
- Tower C: $(-4, -3)$

1. Plot the points conceptually or in GeoGebra/Desmos. What type of triangle is formed by $\\Delta ABC$?
2. Determine the exact length of vertical leg $AC$ and horizontal leg $BC$ using coordinate subtractions ($|y_2 - y_1|$ and $|x_2 - x_1|$).
3. Use the Pythagorean Theorem to find the direct distance between Tower A and Tower B ($AB$).
4. Compute the total perimeter of the cell tower triangle.
5. Prove whether a fourth tower placed at $D(5, 6)$ is closer to Tower A or Tower B by using the coordinate distance formula $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

### Challenge 3: The 3D Space Diagonal (Box Diagonal)
In video game engine design and architectural carpentry, finding the distance between opposite corners of a rectangular prism is essential.
- Consider a shipping container with dimensions: Length $L = 12$ m, Width $W = 4$ m, Height $H = 3$ m.

1. Step 1 (Floor Diagonal): Find the diagonal across the floor base using $d_{floor}^2 = L^2 + W^2$.
2. Step 2 (3D Space Diagonal): Use the right triangle formed by the floor diagonal ($d_{floor}$) and the vertical height ($H$) to find the interior space diagonal $D$:
   $$D^2 = d_{floor}^2 + H^2 = L^2 + W^2 + H^2$$
3. Compute the exact space diagonal $D$. Is it a rational number or irrational? Simplify completely.

---

## 📝 Student Submission Template

```markdown
### Challenge 1: A-Frame Truss
- Base leg: ___ ft | Height leg: ___ ft
- Rafter Calculation:
  a^2 + b^2 = c^2
  [Show work]
  c = ___ ft
- Collar Tie Calculation:
  [Show work]

### Challenge 2: Coordinate Triangle & Distance
- Leg AC length: ___ km
- Leg BC length: ___ km
- Hypotenuse AB length: ___ km
- Triangle Perimeter: ___ km
- Tower D Distance Comparison:
  - Distance D to A: ___ km
  - Distance D to B: ___ km
  - Conclusion: [Tower D is closer to Tower ___ because...]

### Challenge 3: 3D Space Diagonal
- Floor diagonal d_floor = sqrt(___ + ___) = ___
- 3D Space diagonal D = sqrt(12^2 + 4^2 + 3^2) = ___
- Nature of solution (Rational / Irrational): ___
```

---

## 💯 Grading Rubric

| Criteria | Proficient (4 pts) | Developing (3 pts) | Beginning (1-2 pts) |
|:---|:---|:---|:---|
| **Pythagorean Calculation** | Flawless application of $a^2 + b^2 = c^2$; correct squares and square roots. | Minor calculation error when squaring or adding. | Uses wrong sides for legs vs. hypotenuse. |
| **Coordinate Geometry** | Accurately calculates horizontal/vertical lengths and coordinate distances. | 1 sign error in coordinate subtraction. | Inability to connect coordinates to triangle legs. |
| **3D Geometric Extension** | Derives and solves the 3D space diagonal formula accurately. | Follows formula but miscalculates intermediate step. | Does not understand multi-dimensional extension. |
