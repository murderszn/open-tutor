# ⛏️ Minecraft Java — Scripting & Datapacks

A student-friendly reference covering Minecraft Java Edition datapacks, `.mcfunction` files, and command automation. This supports the **Minecraft Java — Scripting Basics** assignment.

## What is a Datapack?

A **datapack** is a folder structure inside your Minecraft world that adds custom commands, functions, loot tables, and more — without modifying game files. It keeps your scripts organized and portable.

## Folder Structure

```
world/
└── datapacks/
    └── my_scripts/
        ├── pack.mcmeta
        └── data/
            └── my_scripts/
                └── functions/
                    └── my_script.mcfunction
```

## `pack.mcmeta` Format

```json
{
  "pack": {
    "pack_format": 48,
    "description": "My first datapack"
  }
}
```

Check Minecraft Wiki for the current `pack_format` number matching your version.

## `.mcfunction` Files

- One command per line
- No leading slash (`/`)
- Supports comments with `#`
- Runs via `/function <namespace>:<name>`

Example `my_script.mcfunction`:
```
# My first script
time set day
weather clear
summon zombie ~ ~ ~
say Hello from my script!
give @p minecraft:golden_apple
```

## Key Commands

| Command | What It Does |
|---------|--------------|
| `/time set day` | Sets time to morning |
| `/weather clear` | Clears the weather |
| `/gamemode creative` | Switches to Creative mode |
| `/tp @p 100 64 100` | Teleports the nearest player |
| `/summon minecraft:zombie ~ ~ ~` | Spawns a zombie at your feet |
| `/give @p minecraft:diamond_sword` | Gives a diamond sword |
| `/reload` | Reloads datapacks |
| `/function my_scripts:my_script` | Runs your script |

## Selectors

- `@p` — nearest player
- `@a` — all players
- `@r` — random player
- `@s` — entity running the command
- `@e[type=zombie]` — all zombies

## Chaining Commands

Use `.mcfunction` files to bundle dozens of commands into one action. You can chain multiple functions in a single file or call one function from another for adventure maps, mini-games, and custom experiences.

## Quick Reference Quiz

1. What file do you put inside `datapacks/<name>/` to register the pack?
2. Do you use a `/` at the start of each command inside `.mcfunction`?
3. What is the function path to run `my_script.mcfunction` in namespace `my_scripts`?
4. What does `@p` mean?
