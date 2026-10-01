# 🎮 Roblox Studio — Shaders & Meshes

A student-friendly reference covering mesh parts, importing custom 3D models, and shader-like material effects in Roblox Studio. This supports the **Roblox Studio — Shaders & Meshes** assignment.

## What is a Mesh?

In Roblox, most objects are **Parts**: blocks, spheres, wedges. A **Mesh** is a custom 3D shape made outside Roblox and imported in — like a sword, tree, car, or character head.

Mesh files use the `.obj` or `.fbx` format and include both shape geometry and texture data.

## MeshParts in Roblox Studio

- A `MeshPart` is a special kind of Part that uses a `MeshId`.
- Found in the **Toolbox** by searching for “sword mesh” or “low poly tree”.
- In **Properties**, `MeshId` shows the model is a mesh.

## Importing a Custom Mesh (Blender → Roblox)

1. Build your model in Blender.
2. Export as **Wavefront (.obj)**.
3. In Roblox Studio: **Insert → MeshPart → Mesh** and select your `.obj`.
4. Adjust position, scale, and material in the Properties panel.

## Materials & Shader-Like Effects

Roblox materials that create visual effects:

| Material | Look |
|----------|------|
| `Plastic` | Standard matte/shiny |
| `Metal` | Reflective, industrial |
| `Glass` | Transparent |
| `Neon` | Bright, emissive glow |
| `ForceField` | Electric blue energy |
| `Grass`, `Wood`, `Water`, etc. | Surface-specific |

Colors combined with materials create shader-like results. Adding a `PointLight` inside a mesh makes it glow like a magic crystal.

## RGB Color Concept

A shader is code that tells the GPU how to draw a surface. Roblox exposes this through:
- `MeshPart.Color` — base RGB tint
- `MeshPart.Material` — surface lighting behavior
- `ParticleEmitter` — added visual effects
- `SurfaceAppearance` / `PBR` materials — advanced reflectivity

## Common Workflow

1. Model in Blender → `.obj`
2. Import into Roblox Studio as MeshPart
3. Set `MeshPart.Material = Neon`
4. Pick a bright RGB color in Properties
5. (Optional) Add a `PointLight` inside
6. Play to see the effect

## Quick Reference Quiz

1. What file format does Roblox accept for mesh imports?
2. What is the difference between a Part and a MeshPart?
3. Name two Roblox materials that create a glowing look.
4. What does a PointLight do inside a mesh?
