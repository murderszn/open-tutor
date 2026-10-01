# ⛏️ STEM Assignment: Minecraft Java — Scripting Basics

**Subject:** STEM / Computer Science  
**Grade Level:** 5th Grade (Grade 5)  
**Platform:** Windows PC — Minecraft Java Edition + a text editor

---

## 🎯 What You Will Learn

- What "modding" and "scripting" mean in Minecraft
- What a `.mcfunction` file is
- How to create a simple `/function` command
- How to teleport yourself and spawn mobs with commands
- How to make a custom advancement (basic)


**Core Repo Resource:**
- **[Student Guide: Minecraft Scripting Intro](../../resources/minecraft-scripting-intro.md)**
 — What is Minecraft Scripting?

Minecraft commands can:
- Move players (`/tp`)
- Spawn mobs (`/summon`)
- Give items (`/give`)
- Change weather/time

A **datapack** bundles `.mcfunction` files so you can run many commands at once.

---

## 🔬 Part 2 — Open Minecraft and Find Your World

1. Launch Minecraft Java Edition.
2. Open a single-player world with **Cheats Enabled**.
3. Press `T` to open chat.

---

## 🔬 Part 3 — Try Basic Commands

Type these in chat:

```
/time set day
/weather clear
/gamemode creative
/tp @p 100 64 100
/summon minecraft:zombie ~ ~ ~
/give @p minecraft:diamond_sword
```

**Questions:**
1. What did `/tp @p 100 64 100` do?
2. What appeared when you used `/summon`?
3. What item did you get from `/give`?

---

## 🔬 Part 4 — Make a `.mcfunction` File

1. Open Notepad.
2. Type:

```
time set day
weather clear
summon zombie ~ ~ ~
say Hello from my script!
```

3. Save as `my_script.mcfunction` on your Desktop.

---

## 🔬 Part 5 — Install the Datapack

1. In your Minecraft world folder, create:
   `world/datapacks/my_scripts/`
2. Inside that folder, make `data/my_scripts/functions/`.
3. Put `my_script.mcfunction` in that folder.
4. Create a `pack.mcmeta` file:

```json
{
  "pack": {
    "pack_format": 48,
    "description": "grade-5 first scripts"
  }
}
```

5. Save it in `my_scripts/` (one level up from `data`).
6. Back in Minecraft, type:

```
/reload
/function my_scripts:my_script
```

**Question:** What happened when you ran the function?

---

## 🔬 Part 6 — Chain Commands Together

Add more lines to your `.mcfunction`:

```
give @p minecraft:golden_apple
tp @p ~ ~10 ~
summon minecraft:iron_golem ~ ~ ~
say A golden apple has appeared!
```

Reload and run again. What changed?

---

## 💬 Part 7 — Reflection

1. What does `/function` do that `/execute` doesn't?
2. What is one command you'd add to a real adventure map?
3. How does scripting make Minecraft more fun?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| Commands tested in chat | 2 |
| `.mcfunction` created | 2 |
| Datapack structure built correctly | 2 |
| Function ran successfully in-game | 2 |
| Reflection answered | 2 |

---

## 🎒 Resources

- Search: `"Minecraft Java datapack tutorial for beginners"`
- Video: [Minecraft Datapacks 101](https://www.youtube.com/watch?v=Y8QzsAcXKM4)
- Docs: [Minecraft Wiki — Datapack](https://minecraft.wiki/w/Datapack)
