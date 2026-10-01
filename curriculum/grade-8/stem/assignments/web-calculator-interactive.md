# 💻 Project: Interactive Web Calculator (HTML5, CSS3, JavaScript)

**Course:** Grade 8 STEM (Web Development & Frontend Engineering Track)  
**Deliverables:** `index.html`, `styles.css`, `calculator.js`, and Project Write-Up  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Interactive Web Calculator (HTML5, CSS3, JavaScript)”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Interactive+Web+Calculator+(HTML5,+CSS3,+JavaScript))
- **Reference:** [MDN: Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Reference:** [MDN: DOM scripting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
## 🏛️ Project Mission & Overview

Every modern digital interface relies on clean separation of concerns: **HTML5** provides structural semantics, **CSS3** provides aesthetic presentation and responsive layout, and **JavaScript** powers logic, state management, and user interactivity.

In this project, you will engineer a responsive, production-ready **Interactive Calculator web application**. You can choose to style it as a sleek Apple/iOS-style calculator, a retro mechanical desk calculator, or a high-tech scientific terminal. The calculator must run smoothly in any browser, handle decimal operations, prevent syntax bugs (like multiple consecutive decimal points or division by zero), and support keyboard shortcuts.

---

## 🏗️ Architecture & Component Design

```
  ┌─────────────────────────────────────────────────────────┐
  │                    index.html                           │
  │  Semantic DOM tree (<main>, )   │
  └────────────┬──────────────────────────────┬─────────────┘
               │                              │
               ▼                              ▼
  ┌─────────────────────────┐    ┌─────────────────────────┐
  │       styles.css        │    │      calculator.js      │
  ├─────────────────────────┤    ├─────────────────────────┤
  │ • CSS Grid button grid  │    │ • State Object          │
  │ • Flexbox display screen│    │ • DOM Event Listeners   │
  │ • Responsive media query│    │ • Operation Functions   │
  │ • Hover/active transitions   │ • Error boundary (div/0)│
  └─────────────────────────┘    └─────────────────────────┘
```

### 1. File Structure
Organize your project into a dedicated folder or files:
*   `index.html`: Contains all markup. No inline styles (`style="..."`) or inline JS (`onclick="..."`).
*   `styles.css`: Contains CSS rules, modern custom properties (CSS variables for color theme), and media queries.
*   `calculator.js`: Contains JavaScript classes or modular functions using strict mode (`'use strict';`).

### 2. Functional Requirements
Your calculator must implement the following operations:
1.  **Display Screen**:
    *   Sub-display showing the previous operand and operator (e.g., `12.5 +`).
    *   Primary display showing current input or result (e.g., `45.2`).
2.  **Number Inputs (0–9)**: Append digits correctly without creating leading zeroes (e.g., `005` should render as `5`).
3.  **Decimal Point (`.`)**: Can only be added once per operand (prevents invalid entries like `3.14.15`).
4.  **Arithmetic Operators**: Addition (`+`), Subtraction (`-`), Multiplication (`×` or `*`), Division (`÷` or `/`).
5.  **Special Operations**:
    *   `AC` / Clear All: Resets all memory and display values to zero.
    *   `DEL` / Backspace: Removes the last entered digit.
    *   `+/-` / Negate: Flips sign from positive to negative.
    *   `%` / Percentage: Divides current value by 100.
6.  **Equals (`=`)**: Computes result accurately, handling floating point precision (e.g., rounding `0.1 + 0.2` to `0.3`).
7.  **Edge Case Protection**:
    *   Division by Zero: If user divides by 0, display a clear message like `"Error: Cannot divide by 0"` instead of crashing or showing `Infinity`.
8.  **Bonus / Stretch Feature: Keyboard Support**:
    *   Listen to `keydown` events so users can type numbers and operators on their keyboard!

---

## 🎨 UI Wireframe & Layout Guide

```
+------------------------------------+
|         CALCULATOR APP             |
| +--------------------------------+ |
| | Prev: 140 *                    | |
| | Display: 520                   | |
| +--------------------------------+ |
| [ AC ] [ +/- ] [  %  ] [  ÷  ]     |
| [ 7  ] [  8  ] [  9  ] [  ×  ]     |
| [ 4  ] [  5  ] [  6  ] [  -  ]     |
| [ 1  ] [  2  ] [  3  ] [  +  ]     |
| [ 0         ] [  .  ] [  =  ]     |
+------------------------------------+
```

*CSS Tip*: Use `display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;` for the button layout. Make the `0` button span 2 columns with `grid-column: span 2;`.

---

## 📝 Deliverables & Submission Checklist

- [ ] `index.html`: Clean HTML5 markup with valid `<head>`, `<meta name="viewport">`, and linked external assets.
- [ ] `styles.css`: Polished aesthetic with hover states, active click animations, and mobile responsiveness.
- [ ] `calculator.js`: Modular, event-driven JavaScript code with no global pollution.
- [ ] Browser Test: Preview using local web server (`python3 -m http.server 8000` or opening `index.html` in browser).
- [ ] Learner’s Write-Up: Complete the reflection section below detailing DOM interaction and state management.

---

## 📊 Rubric & Evaluation

| Criteria | Proficient (4) | Exemplary (5) |
|---|---|---|
| **HTML5 & CSS3 Engineering** | Clean semantic elements; modern CSS Grid/Flexbox layout; adapts to mobile screens. | Custom CSS variables; fluid animations; dark/light mode toggle; accessible ARIA labels. |
| **JavaScript State Management** | Tracks current operand, previous operand, and operator accurately; updates DOM cleanly. | Encapsulated in a `Calculator` class or state object; handles chained operations seamlessly (e.g., `5 + 5 + 5 = 15`). |
| **Error Handling & Edge Cases** | Prevents multiple decimals and displays error on division by zero. | Handles floating point math anomalies (`0.1 + 0.2`), string overflow on long numbers, and bad keypresses. |
| **Interactivity & Usability** | Works on click events smoothly with clear visual feedback. | Full keyboard listener support (`0-9`, `+`, `-`, `*`, `/`, `Enter`, `Backspace`, `Escape`); tactile button press feedback. |

---

## ✍️ Learner’s Project Write-Up Space

*(Fill in your responses and reflections below once your calculator is functioning)*

### 1. State Management Explanation
*Explain how your JavaScript code keeps track of the current number, the previous number, and the chosen math operation:*

### 2. Event Handling & DOM Updates
*How does `document.addEventListener('click', ...)` or individual query selector listeners detect which button was pressed and update the screen?*

### 3. Floating-Point Bug Resolution
*In JavaScript, `0.1 + 0.2` outputs `0.30000000000000004`. How did your code format or round results to prevent awkward decimals from overflowing the screen?*

### 4. Code Snippet Showcase
*Paste your core calculation function (`compute()` or `calculate()`):*
```javascript
// Paste calculation function here
```
