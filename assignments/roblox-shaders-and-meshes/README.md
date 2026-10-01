# 🎮 STEM Assignment: Roblox Studio — Shaders & Meshes

**Subject:** STEM / Game Development  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC — Roblox Studio + Blender (optional)

---

## 🎯 What You Will Learn

- What a mesh is in Roblox
- How to import a custom `.obj` mesh into Roblox Studio
- What a shader is and what it does
- How to use a simple RGB color shader in Roblox
- The difference between a mesh and a part
- How Blender can be used to make 3D objects for Roblox


**Core Repo Resource:**
- **[Student Guide: Roblox Shaders And Meshes](../../resources/roblox-shaders-and-meshes.md)**
 — What is a Mesh?

In Roblox, most objects are `Part`s (blocks, spheres, wedges). A **Mesh** is a custom 3D shape made outside Roblox and imported in.

**Examples:** a sword, a tree, a car body, a character head.

---

## 🔬 Part 2 — Open Roblox Studio

1. Open the Roblox app on your PC.
2. Click **Start Creating** or open an existing place.
3. Once in Studio, look at the **Explorer** and **Properties** panels.

---

## 🔬 Part 3 — Use a Free Model to See a Mesh

In the **Toolbox** (View → Toolbox), search for `"sword mesh"` or `"low poly tree"`.

1. Insert one into your workspace.
2. Click it in the Explorer.
3. Look at Properties. You should see `MeshId` — that means it's a mesh, not a plain Part.

**Question:** What is the `MeshId` value for your object?

---

## 🔬 Part 4 — Make a Simple Mesh Part in Blender (Option A)

If you have Blender installed:

1. Open Blender → delete the default cube.
2. Press `Shift + A` → Mesh → Cylinder.
3. In the left toolbar, click the **Modifier Properties** (blue wrench).
4. Add a **Skin** modifier.
5. Add a **Subdivision Surface** modifier, set to 2.
6. Edit the vertices to make a rough sword shape.
7. Export as `.obj` (File → Export → Wavefront (.obj)).

Now import into Roblox Studio: **Insert → MeshPart → Mesh** and select your `.obj`.

---

## 🔬 Part 5 — Use a Basic Color Shader

Roblox uses `Material` and `Color` on parts. To make something glow or change look:

1. Select your MeshPart in Studio.
2. In Properties, change **Material** to `Neon`.
3. Change **Color** to a bright red or blue.
4. Play the game — the mesh should look shiny/bright.

**Challenge:** Make three MeshParts with different materials (Glass, Metal, Neon) and colors.

---

## 🔬 Part 6 — RGB Shader Concept

A **shader** is code that tells the GPU how to draw a surface. Roblox doesn't expose raw shader code to beginners, but you can simulate shader-like effects:

- `Material.ForceField` = electric blue energy look
- `Material.Neon` = bright glowing look
- `MeshPart.Color` = base tint
- `ParticleEmitter` = extra visual effects

**Task:** Make a "magic crystal" using:
- A MeshPart (imported or custom shape)
- Neon material
- Bright purple or cyan color
- Optional: add a `PointLight` inside it

---

## 💬 Part 7 — Reflection

1. What's the difference between a Part and a Mesh in Roblox?
2. What does a shader do, in your own words?
3. Which was harder: using Studio or Blender? Why?
4. What would you build next with meshes?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| MeshPart imported/used in Studio | 2 |
| Blender export attempted (or Toolbox mesh used) | 2 |
| Material + shader-like effect applied | 2 |
| Reflection answered | 4 |

---

## 🎒 Resources

- Search: `"Roblox Studio mesh import tutorial"`
- Search: `"Blender to Roblox export obj"`
- Video: [Roblox Studio Beginner](https://www.youtube.com/watch?v=JKR8D6kFNR8)
- Docs: [Roblox — MeshParts](https://developer.roblox.com/en-us/articles/mesh-parts)
