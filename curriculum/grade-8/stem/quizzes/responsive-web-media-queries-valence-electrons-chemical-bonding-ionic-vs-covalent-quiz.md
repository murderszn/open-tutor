# Grade 8 Stem — Responsive Web Media Queries, Valence Electrons, & Chemical Bonding (Ionic vs. Covalent) Quiz
**Topic:** Responsive Web Media Queries, Valence Electrons, & Chemical Bonding (Ionic vs. Covalent)  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Responsive Web Media Queries, Valence Electrons, & Chemical Bonding (Ionic vs. Covalent)”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Responsive+Web+Media+Queries,+Valence+Electrons,+&+Chemical+Bonding+(Ionic+vs.+Covalent))
- **Reference:** [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
### Part 1: Computer Science & Web Development (Questions 1–3)

**1.** Examine this CSS responsive media query:
```css
.calculator {
  width: 400px;
  margin: 40px auto;
}

@media (max-width: 600px) {
  .calculator {
    width: 95vw;
    margin: 10px auto;
  }
  .btn {
    font-size: 1.5rem;
    padding: 16px;
  }
}
```
Explain what happens to the calculator display when viewed on an iPhone screen ($390\text{px}$ wide) versus a desktop monitor ($1920\text{px}$ wide). What does `vw` represent?

**2.** Why is mobile-first design a recommended practice in modern frontend engineering?

**3.** In CSS, what is the difference between `rem` units and `px` units? Why do accessible websites prefer `rem` for typography?

---

### Part 2: Physical Science — Chemical Bonding (Questions 4–7)

**4.** State the **Octet Rule**. Why are noble gases (Group 18) chemically inert while elements in Groups 1 and 17 are vigorously reactive?

**5.** Compare **Ionic Bonds** and **Covalent Bonds**:
- How are valence electrons handled in an ionic bond? What types of elements form ionic bonds?
- How are valence electrons handled in a covalent bond? What types of elements form covalent bonds?

**6.** Illustrate the formation of Magnesium Oxide ($\text{MgO}$):
- Magnesium ($Z = 12$) has 2 valence electrons.
- Oxygen ($Z = 8$) has 6 valence electrons.
Describe the electron transfer, the resulting ion charges, and the chemical formula.

**7.** Differentiate between a **polar covalent bond** and a **nonpolar covalent bond**. Explain why water ($\text{H}_2\text{O}$) is a polar molecule with partial positive and negative poles.

---

### Part 3: Lab Reasoning & Material Properties (Questions 8–9)

**8.** In a chemistry investigation on substance conductivity, you test three unknown white powders dissolved in distilled water:
- Substance X conducts electricity strongly in solution and has a high melting point ($801^\circ\text{C}$).
- Substance Y does not conduct electricity in solution and has a low melting point ($186^\circ\text{C}$).
Classify Substance X and Substance Y as ionic or covalent compounds. Justify your conclusion.

**9.** Why do solid ionic crystals (like table salt, $\text{NaCl}$) shatter when struck with a hammer rather than bending like a metal?

---

## 🔑 Parent Answer Key (For Educator)

<details>
<summary>Click to expand Answer Key</summary>

1. **Responsive CSS Media Queries**:
   - On a desktop ($1920\text{px}$), the media query does not apply; width is fixed at $400\text{px}$ centered with $40\text{px}$ margins.
   - On an iPhone ($390\text{px}$), $390\text{px} \le 600\text{px}$, triggering the media query: width expands to $95\%$ of viewport width (`95vw`), margins shrink to $10\text{px}$, and button touch targets enlarge for mobile fingers.
   - `vw` stands for Viewport Width ($1\text{vw} = 1\%$ of screen width).

2. **Mobile-First Design**:
   - Designing for constrained mobile screens first forces lean content hierarchy, fast load times, and simple UI before layering progressive desktop enhancements.

3. **`rem` vs. `px`**:
   - `px` is an absolute pixel measurement.
   - `rem` (root em) is relative to the root `<html>` font size (default $16\text{px}$).
   - `rem` respects user accessibility settings; if a visually impaired user increases default browser font size, `rem`-based layouts scale proportionately.

4. **Octet Rule**:
   - Atoms tend to gain, lose, or share electrons until their outermost valence shell contains 8 electrons (stable noble gas configuration).
   - Noble gases already have 8 valence electrons (stable octet), requiring no bonding. Group 1 and 17 atoms are only 1 electron away from an octet, driving strong chemical reactivity.

5. **Ionic vs. Covalent**:
   - Ionic: Complete transfer of one or more valence electrons from a metal (low electronegativity) to a nonmetal (high electronegativity), forming electrostatic attraction between opposite ions.
   - Covalent: Sharing of electron pairs between nonmetal atoms of similar electronegativity.

6. **Magnesium Oxide Formation**:
   - $\text{Mg}$ transfers 2 valence electrons to $\text{O}$.
   - $\text{Mg}$ becomes $\text{Mg}^{2+}$ cation; $\text{O}$ becomes $\text{O}^{2-}$ oxide anion.
   - Strong electrostatic lattice attraction forms $\text{MgO}$.

7. **Polarity**:
   - Nonpolar covalent: Electrons are shared equally (similar electronegativity, e.g., $\text{O}_2$).
   - Polar covalent: Electrons are shared unequally due to electronegativity differences.
   - In $\text{H}_2\text{O}$, Oxygen is much more electronegative than Hydrogen and has a bent geometry, creating a partial negative charge ($\delta^-$) near oxygen and partial positive charges ($\delta^+$) near hydrogens.

8. **Conductivity Lab Classification**:
   - Substance X is an **ionic compound** (dissociates into free mobile ions in water that carry electric current; high melting point from strong ionic lattice). Example: $\text{NaCl}$.
   - Substance Y is a **covalent (molecular) compound** (dissolves into neutral intact molecules with no mobile charge carriers; low melting point from weaker intermolecular forces). Example: sucrose (sugar).

9. **Crystal Brittleness**:
   - Solid ionic lattices consist of tightly packed alternating positive and negative ions. When struck with a hammer, crystal layers shift so that like charges align ($+ +$ and $- -$), creating intense repulsive electrostatic forces that fracture the crystal plane.
</details>
