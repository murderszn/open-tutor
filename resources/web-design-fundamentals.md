# 🌐 Web Design Fundamentals

A student-friendly reference covering HTML, CSS, responsive design, and basic web layouts. This supports assignments like **Personal Portfolio Website**, **Responsive Navbar Challenge**, and other web project work.

## What is the Web?

Websites are built with:
- **HTML** — structure and content
- **CSS** — style and layout
- **JavaScript** — interactivity (optional)

## HTML Basics

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>My first web page.</p>
    <a href="https://example.com">Click here</a>
    <img src="#" alt="My photo">
  </body>
</html>
```

### Common HTML Tags

| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings |
| `<p>` | Paragraph |
| `<a href="#">` | Link |
| `<img src="#">` | Image |
| `<ul>` / `<ol>` | List container |
| `<li>` | List item |
| `<div>` | Generic container |
| `<nav>` | Navigation area |

## CSS Basics

CSS rules have a **selector** and **declarations**:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### Ways to Include CSS
1. **Inline:** `<p style="color:red;">`
2. **Internal:** `<style> ... </style>` inside `<head>`
3. **External:** `<link rel="stylesheet" href="#">` — best practice

## Layout & Responsiveness

A **responsive** site looks good on phones, tablets, and desktops.

### The Viewport Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Common Layout Patterns

**Navbar:** A horizontal or vertical list of links at the top or side of each page. On mobile, navbars often collapse into a “hamburger” menu.

**Hero:** A large section at the top with a title, subtitle, and call-to-action button.

**Cards:** Boxed content items arranged in a grid — great for project portfolios.

### Flexbox Basics
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
`justify-content` = horizontal spacing. `align-items` = vertical alignment.

### Grid Basics
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
```
`1fr` = one equal fraction of available space.

## Design Principles

- **Contrast:** Dark text on light background is easiest to read.
- **Consistency:** Use the same colors and fonts throughout.
- **White Space:** Breathing room makes information easier to scan.
- **Hierarchy:** Headings should be clearly larger/bolder than body text.

## Accessibility Basics

- Use alt text on images: `<img alt="Description">`.
- Ensure color contrast is high enough.
- Make links descriptive: `<a href="#">Contact me</a>` not just “click here.”

## Quick Reference Quiz

1. What does HTML stand for?
2. What is the difference between `<ul>` and `<ol>`?
3. What viewport meta tag helps make a site responsive?
4. What CSS property controls text color?
