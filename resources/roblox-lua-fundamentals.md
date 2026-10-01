# 🎮 Roblox Lua Fundamentals

A reference guide for scripting in Roblox Studio using **Luau** (Roblox's version of Lua).

---

## 1. What Is Roblox Lua (Luau)?

Roblox uses a scripting language called **Luau** — a fast, safe dialect of Lua 5.1. Every script you write in Roblox Studio is Luau. With it you can:
- Make parts move, spin, or change color
- Detect when a player touches something
- Award points, control health, and build game logic
- Create menus, buttons, and displays

---

## 2. The Roblox Data Model

Everything in a Roblox game lives in a **tree** of objects called the **DataModel**. The root is called `game`. Think of it like a family tree — every object has a parent and can have children.

```
game
├── Workspace          ← The 3D world (parts, models, terrain)
├── Players            ← All connected players
├── ServerScriptService← Scripts that run on the server
├── StarterGui         ← GUIs that copy to players when they join
├── StarterPack        ← Tools given to players on spawn
├── ReplicatedStorage  ← Shared storage (accessible by server & client)
├── Lighting           ← Controls ambient light, sky, and fog
└── SoundService       ← Global sound settings
```

### Navigating the Tree

```lua
-- Get the Workspace
local workspace = game.Workspace
-- Or use the shorthand:
local workspace = workspace  -- Roblox provides this as a global

-- Find a child named "MyPart"
local part = workspace:FindFirstChild("MyPart")

-- Wait until a child exists (useful on startup)
local part = workspace:WaitForChild("MyPart")

-- Get ALL children of an object
local children = workspace:GetChildren()
for _, child in ipairs(children) do
    print(child.Name)
end

-- Navigate a path of children
local model  = workspace.MyModel
local handle = workspace.MyModel.Handle
```

---

## 3. Instances

Every object in Roblox is an **Instance** — a Part, a Script, a Model, a Sound, etc.

### Creating a New Instance

```lua
-- Create a new Part and put it in the Workspace
local newPart = Instance.new("Part")
newPart.Name   = "MyBrick"
newPart.Parent = workspace          -- adding Parent makes it appear in the game
```

> **Rule:** Always set `.Parent` last. Setting it earlier can cause performance issues.

### Destroying an Instance

```lua
part:Destroy()   -- removes it from the game entirely
```

### Checking the Class

```lua
print(part.ClassName)                -- "Part"
print(part:IsA("BasePart"))          -- true (Part inherits BasePart)
```

---

## 4. Common Objects & Their Properties

### Part / BasePart

The building block of Roblox worlds.

| Property | Type | Description |
|---|---|---|
| `Name` | string | The object's label in Explorer |
| `Parent` | Instance | Where it lives in the tree |
| `Position` | Vector3 | Location in 3D space (X, Y, Z) |
| `Size` | Vector3 | Width, Height, Depth |
| `Orientation` | Vector3 | Rotation in degrees (X, Y, Z) |
| `Anchored` | bool | If true, gravity doesn't move it |
| `CanCollide` | bool | If false, objects pass through it |
| `Transparency` | number | 0 = solid, 1 = invisible |
| `Color` | Color3 | RGB color value |
| `BrickColor` | BrickColor | Classic Roblox named color |
| `Material` | Enum | SmoothPlastic, Neon, Wood, etc. |
| `Reflectance` | number | 0–1 shininess |

```lua
local part = workspace.MyPart

part.Size        = Vector3.new(4, 1, 4)         -- 4 wide, 1 tall, 4 deep
part.Position    = Vector3.new(0, 10, 0)         -- 10 studs above origin
part.Anchored    = true
part.Color       = Color3.fromRGB(255, 0, 0)     -- red
part.Transparency = 0.5                           -- 50% see-through
part.Material    = Enum.Material.Neon
```

### Model

A container for grouping Parts.

```lua
local model = workspace.MyModel
print(model.PrimaryPart)            -- the "root" Part of the model

-- Move the whole model by moving its PrimaryPart
model:SetPrimaryPartCFrame(CFrame.new(0, 5, 0))
```

### Humanoid

Attached to every player character (and NPCs). Controls health and movement.

| Property | Type | Description |
|---|---|---|
| `Health` | number | Current health (0 = dead) |
| `MaxHealth` | number | Max possible health |
| `WalkSpeed` | number | Default 16; increase to run faster |
| `JumpPower` | number | Default 50; how high the character jumps |

```lua
local character = game.Players.LocalPlayer.Character
local humanoid  = character:FindFirstChild("Humanoid")

humanoid.WalkSpeed = 30       -- make player faster
humanoid.Health    = 0        -- instant death (kill brick behavior)
```

### Script Types

| Type | Where It Runs | Use Case |
|---|---|---|
| `Script` | Server | Game logic, leaderboards, physics |
| `LocalScript` | Client (player's PC) | UI, input handling, camera |
| `ModuleScript` | Either (when required) | Shared libraries and functions |

---

## 5. Data Types

### Vector3 — 3D Coordinates

```lua
local pos = Vector3.new(10, 5, -3)   -- x=10, y=5, z=-3
print(pos.X, pos.Y, pos.Z)

-- Math with Vector3
local moved = pos + Vector3.new(0, 1, 0)   -- shift up 1 stud
local scaled = pos * 2                      -- double all components
```

### CFrame — Position AND Rotation Together

```lua
local cf = CFrame.new(0, 10, 0)                         -- position only
local cf2 = CFrame.new(0, 10, 0) * CFrame.Angles(0, math.rad(90), 0)  -- rotated 90°

part.CFrame = cf    -- teleport a part
```

### Color3 — Colors

```lua
-- From 0–255 RGB values
local red   = Color3.fromRGB(255, 0, 0)
local green = Color3.fromRGB(0, 255, 0)
local blue  = Color3.fromRGB(0, 0, 255)

-- From 0–1 values
local white = Color3.new(1, 1, 1)
local black = Color3.new(0, 0, 0)

part.Color = Color3.fromRGB(255, 165, 0)   -- orange
```

### BrickColor — Classic Named Colors

```lua
part.BrickColor = BrickColor.new("Bright red")
part.BrickColor = BrickColor.new("Lime green")
```

### Enums — Preset Values

Enums are lists of valid choices for a property.

```lua
part.Material  = Enum.Material.SmoothPlastic
part.Material  = Enum.Material.Neon
part.Shape     = Enum.PartType.Ball
part.Shape     = Enum.PartType.Cylinder
```

---

## 6. Lua Language Basics

### Variables

```lua
local name  = "Advanced learner"          -- string
local score = 100              -- number
local alive = true             -- boolean
local empty = nil              -- no value

-- Global (avoid when possible!)
globalVar = "I'm everywhere"
```

> Always use `local` unless you need a global. Locals are faster and safer.

### Strings

```lua
local greeting = "Hello, " .. name .. "!"   -- concatenation with ..
print(#greeting)                              -- length with #
print(string.upper(greeting))                -- "HELLO, LEARNER!"
print(string.sub(greeting, 1, 5))            -- "Hello"
print(string.find(greeting, "Advanced learner"))        -- 8  13
print(tostring(42))                           -- "42"
print(tonumber("42"))                         -- 42
```

### Numbers & Math

```lua
local x = 10
local y = 3

print(x + y)        -- 13
print(x - y)        -- 7
print(x * y)        -- 30
print(x / y)        -- 3.333...
print(x % y)        -- 1  (remainder)
print(x ^ 2)        -- 100 (power)
print(x // y)       -- 3  (floor division)

-- Math library
print(math.abs(-5))         -- 5
print(math.floor(3.9))      -- 3
print(math.ceil(3.1))       -- 4
print(math.max(10, 20, 5))  -- 20
print(math.min(10, 20, 5))  -- 5
print(math.random(1, 6))    -- random number 1–6 (like a dice roll)
print(math.sqrt(25))        -- 5
print(math.pi)              -- 3.14159...
```

### If / Else

```lua
local health = 50

if health <= 0 then
    print("Game over!")
elseif health < 25 then
    print("Danger! Find health!")
elseif health < 75 then
    print("Doing okay.")
else
    print("Full health!")
end
```

### Loops

```lua
-- Numeric for loop
for i = 1, 5 do
    print("Count:", i)
end

-- Countdown
for i = 10, 1, -1 do
    print(i)
end

-- While loop
local count = 0
while count < 5 do
    count = count + 1
    print(count)
end

-- Repeat until
local n = 0
repeat
    n = n + 1
until n >= 5

-- ipairs — iterate a list (array table)
local fruits = {"apple", "banana", "cherry"}
for index, value in ipairs(fruits) do
    print(index, value)
end

-- pairs — iterate a dictionary table
local stats = {health = 100, speed = 16, jump = 50}
for key, value in pairs(stats) do
    print(key, "=", value)
end
```

### Tables (Arrays & Dictionaries)

```lua
-- Array (ordered list)
local colors = {"Red", "Blue", "Green"}
print(colors[1])                  -- "Red"  (Lua arrays start at 1!)
table.insert(colors, "Yellow")    -- add to end
table.remove(colors, 1)           -- remove first item
print(#colors)                    -- length

-- Dictionary (key-value pairs)
local player = {
    name   = "Advanced learner",
    score  = 500,
    alive  = true,
}
print(player.name)                -- "Advanced learner"
player.score = player.score + 10  -- update a value
player.level = 2                  -- add a new key
```

### Functions

```lua
-- Basic function
local function greet(playerName)
    print("Welcome, " .. playerName .. "!")
end

greet("Advanced learner")

-- Function with a return value
local function add(a, b)
    return a + b
end

local result = add(10, 5)
print(result)   -- 15

-- Multiple return values
local function minMax(a, b)
    if a < b then
        return a, b
    else
        return b, a
    end
end

local low, high = minMax(7, 3)
print(low, high)   -- 3  7

-- Anonymous function (stored in a variable)
local square = function(n)
    return n * n
end

print(square(4))   -- 16
```

---

## 7. Events

Events let your script react to things that happen (a player touches something, a button is clicked, a player joins).

### Connecting to an Event

```lua
-- Syntax:
-- object.EventName:Connect(function(arguments...)
--     -- your code here
-- end)

local part = workspace.KillBrick

part.Touched:Connect(function(otherPart)
    print(otherPart.Name .. " touched the kill brick!")
end)
```

### Common Events

| Object | Event | Fires When… |
|---|---|---|
| `BasePart` | `Touched` | Something makes contact |
| `BasePart` | `TouchEnded` | Contact ends |
| `ClickDetector` | `MouseClick` | A player clicks the part |
| `ClickDetector` | `MouseHoverEnter` | Mouse enters the part |
| `Players` | `PlayerAdded` | A player joins the game |
| `Players` | `PlayerRemoving` | A player leaves |
| `Player` | `CharacterAdded` | Player's character spawns |
| `Humanoid` | `Died` | Humanoid health reaches 0 |
| `Instance` | `Changed` | Any property changes |

```lua
-- Kill brick example
local part = workspace.KillBrick

part.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChildOfClass("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)

-- PlayerAdded example (in a Script in ServerScriptService)
game.Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " joined!")
end)
```

### Disconnecting Events

```lua
local connection = part.Touched:Connect(function(hit)
    print("Touched!")
end)

-- Later, to stop listening:
connection:Disconnect()
```

---

## 8. wait() and task.wait()

Use `task.wait(seconds)` to pause a script without freezing the entire game.

```lua
-- Old way (still works but deprecated)
wait(2)

-- Preferred modern way
task.wait(2)

-- Endless loop example — runs every second
while true do
    part.Color = Color3.fromRGB(math.random(0,255), math.random(0,255), math.random(0,255))
    task.wait(1)
end
```

---

## 9. Common Game Patterns

### Kill Brick (Touched event)

```lua
-- Script inside a Part (or Script in ServerScriptService referencing a part)
local part = script.Parent

part.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChildOfClass("Humanoid")
    if humanoid and humanoid.Health > 0 then
        humanoid.Health = 0
    end
end)
```

### Speed Boost Pad

```lua
local pad = script.Parent

pad.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChildOfClass("Humanoid")
    if humanoid then
        humanoid.WalkSpeed = 50
        task.wait(5)          -- boost lasts 5 seconds
        humanoid.WalkSpeed = 16
    end
end)
```

### ClickDetector Button (changes color on click)

```lua
local part     = script.Parent
local detector = Instance.new("ClickDetector")
detector.Parent = part

detector.MouseClick:Connect(function(player)
    print(player.Name .. " clicked the button!")
    part.Color = Color3.fromRGB(math.random(0,255), math.random(0,255), math.random(0,255))
end)
```

### Leaderboard (Points System)

```lua
-- Script in ServerScriptService
game.Players.PlayerAdded:Connect(function(player)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name   = "leaderstats"
    leaderstats.Parent = player

    local points = Instance.new("IntValue")
    points.Name   = "Points"
    points.Value  = 0
    points.Parent = leaderstats
end)
```

### Looping Color Change

```lua
local part = script.Parent

while true do
    part.BrickColor = BrickColor.new("Bright red")
    task.wait(0.5)
    part.BrickColor = BrickColor.new("Bright blue")
    task.wait(0.5)
end
```

### TweenService — Smooth Animations

```lua
local TweenService = game:GetService("TweenService")
local part         = script.Parent

local goal = {Position = Vector3.new(0, 20, 0)}
local info = TweenInfo.new(
    2,                        -- duration (seconds)
    Enum.EasingStyle.Sine,    -- easing style
    Enum.EasingDirection.Out, -- direction
    -1,                       -- repeat count (-1 = infinite)
    true                      -- reverses back
)

local tween = TweenService:Create(part, info, goal)
tween:Play()
```

---

## 10. Debugging

| Tool | How to Use |
|---|---|
| `print()` | Output values to the Output window |
| `warn()` | Yellow warning message in Output |
| `error()` | Red error message; stops the script |
| Output window | View → Output in Studio |
| Breakpoints | Click line number gutter to pause |

```lua
print("Script started!")
print("Part name:", part.Name)
print("Part position:", part.Position)

-- Check for nil before using
if part == nil then
    warn("Part not found!")
else
    print("Found it!")
end
```

---

## 11. Quick Reference Card

```lua
-- Get a part
local part = workspace:WaitForChild("PartName")

-- Change properties
part.Size         = Vector3.new(2, 2, 2)
part.Position     = Vector3.new(0, 5, 0)
part.Color        = Color3.fromRGB(R, G, B)
part.Transparency = 0.5
part.Anchored     = true
part.CanCollide   = false
part.Material     = Enum.Material.Neon

-- Events
part.Touched:Connect(function(hit) end)

-- Conditional
if condition then ... elseif ... else ... end

-- Loops
for i = 1, 10 do ... end
while true do task.wait(1) end

-- Functions
local function name(arg1, arg2) return value end

-- Tables
local arr  = {1, 2, 3}           -- array
local dict = {key = "value"}      -- dictionary

-- Services
local TweenService = game:GetService("TweenService")
local Players      = game:GetService("Players")
local RunService   = game:GetService("RunService")
```

---

## 12. Glossary

| Term | Definition |
|---|---|
| **Instance** | Any object in Roblox (Part, Script, Model, etc.) |
| **Property** | A setting on an Instance (Color, Size, Position) |
| **Event** | A signal that fires when something happens |
| **Function** | A reusable block of code |
| **Server** | The computer running the game logic |
| **Client** | The player's computer/device |
| **CFrame** | Combined position + rotation in 3D space |
| **Vector3** | Three numbers representing X, Y, Z |
| **nil** | Lua's way of saying "no value" / "doesn't exist" |
| **Scope** | Where a variable is accessible (local vs global) |
| **Yield** | When a script pauses and waits (e.g., `task.wait`) |
