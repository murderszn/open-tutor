# 🧩 Game Development Fundamentals

A student-friendly reference covering core concepts for Roblox Studio and Minecraft scripting — the two game platforms in Advanced learner and Core learner’s curriculum.

## What is Game Development?

Game development is the process of designing, building, and testing interactive games. It combines:
- **Programming** — rules, logic, scoring, AI
- **Art & Design** — sprites, 3D models, environments
- **Storytelling** — quests, characters, dialogue
- **Sound & Music** — effects, background audio

## Roblox Studio Basics

Roblox uses a **physics-based engine** with an object hierarchy called the DataModel:
- `Workspace` — where 3D objects live
- `Lighting` — controls shadows, sky, brightness
- `ServerScriptService` — scripts that only the server runs
- `StarterPlayer` — player defaults (speed, health, camera)

### Common Roblox Objectives
- Make a kill brick (touch → lose health)
- Build a speed pad (touch → faster movement)
- Create a leaderboard (track points)
- Import custom 3D models (meshes) from Blender

## Minecraft Java Edition Basics

Minecraft runs on **Java**, which means it supports modding, datapacks, and advanced server-side scripting.

### Datapacks
- Drop into `world/datapacks/`
- `.mcfunction` files bundle commands
- Run with `/reload` then `/function`

### Key Commands
| Command | Purpose |
|---------|---------|
| `/tp @p x y z` | Teleport player |
| `/summon entity ~ ~ ~` | Spawn mob |
| `/give @p item` | Give item |
| `/time set day` | Set time |
| `/weather clear` | Clear weather |
| `/gamemode creative` | Change mode |
| `/execute as @p run <cmd>` | Run command as another entity |

## Game Scripting Patterns

Both platforms share core concepts:
- **Events** — “when player touches X, do Y”
- **States** — score, health, inventory, position
- **Loops & Timers** — repeating actions (spawn enemies every 30s)
- **Collision Detection** — knowing when two objects touch
- **Variables** — store data (score, time, player name)

### Example: Event Logic (Pseudocode)
```
ON (player touches part)
  -> player.health -= 10
  -> show message "Ouch!"
ON (score >= 100)
  -> show "You win!"
```

## 3D Modeling for Games

- **Blender** — free tool to make custom meshes
- **Export as `.obj` or `.fbx`** — formats Roblox accepts
- **Texture** — add a colored image to make a model look detailed
- **Scale** — make sure your model’s size matches Roblox studs (1 stud ≈ 1 meter)

## Best Practices

1. **Test early, test often** — play the game after every change.
2. **Save versions** — use auto-save or copy the world before big changes.
3. **Keep it simple** — start with one feature before adding more.
4. **Use comments** — leave notes in your code so you remember why you wrote it.

## Career Connections

Skills learned in game development apply to:
- Software engineering
- 3D modeling and animation
- Level and world design
- Quality assurance (QA) testing
- Technical art and shader programming

## Quick Reference Quiz

1. What is the folder structure inside a Minecraft datapack?
2. What Roblox service runs scripts that only the server sees?
3. Name one shared concept between Roblox scripting and Minecraft datapacks.
4. What file format does Blender use to export meshes for Roblox?
