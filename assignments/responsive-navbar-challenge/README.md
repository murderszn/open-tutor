# 🧭 Responsive Navbar Challenge

**Grade Level:** Middle School (adjust to your student)
**Subject:** STEM / Web Development (HTML/CSS)

## 🎯 Objective / What You Will Learn
* Build a responsive navigation bar that works on desktop and mobile.
* Practice Flexbox for layout and media queries for responsiveness.
* Improve semantic HTML and clean, reusable CSS organization.

---

## 🛠️ Required Resources
* VS Code (or preferred editor)
* A web browser for testing (use DevTools to simulate mobile)
* Your existing portfolio folder (`my-portfolio`) is recommended

---

## 🚀 The Project Details

### Step 1: Create Files
Create a new folder named `responsive-navbar`. Inside, add:
* `index.html`
* `style.css`

### Step 2: Markup the Navbar (index.html)
1. Add a semantic `<header>` with a site title or logo.
2. Add a `<nav>` with an unordered list of 3–4 links (e.g., Home, Projects, Contact).
3. Add a "menu" button (hamburger icon using three `<span>` lines or the `≡` character) that shows on small screens only.

### Step 3: Style with CSS (style.css)
1. Use Flexbox to align the logo on the left and the links on the right.
2. Add spacing, colors, and hover states for links.
3. Add a media query (e.g., `@media (max-width: 640px)`) that:
   - Hides the horizontal links by default.
   - Shows the hamburger button.
   - Toggles a vertical menu when the button is active (you may use the CSS checkbox hack or a tiny bit of JS if you want).

### Step 4: Test Responsiveness
* Use your browser’s DevTools to test widths at 1200px, 768px, and 375px.
* Ensure the menu is usable and readable at all sizes.

### Step 5: (Optional) Integrate Into Portfolio
* Move the navbar into your `my-portfolio` project and reuse across pages.

---

## 📦 Deliverables
* Folder: `assignments/responsive-navbar-challenge` with `index.html` and `style.css`, or commit integrated into your `my-portfolio` project.
* A short `README.md` note (2–3 sentences) describing what you learned.

---

## 📋 [For Parents] Evaluation Checklist
* [ ] Navbar displays links horizontally on desktop using Flexbox.
* [ ] Navbar adapts for small screens (hamburger or stacked links).
* [ ] Links are readable, spaced, and have a hover focus state.
* [ ] CSS is organized (grouped sections, comments optional).
* [ ] (Optional) Navbar reused across multiple portfolio pages.

