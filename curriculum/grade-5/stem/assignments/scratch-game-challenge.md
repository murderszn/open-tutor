# 🎮 Coding Challenge: Scratch Arcade Game Creator

**Course:** Grade 5 STEM (Computer Science & Game Design Track)  
**Deliverables:** Scratch Project (.sb3 file or project link), Game Design Document, and Gameplay Walkthrough  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Crash Course Kids SciShow Kids for “Scratch Arcade Game Creator”](https://www.youtube.com/results?search_query=Crash+Course+Kids+SciShow+Kids+Scratch+Arcade+Game+Creator)
- **Reference:** [Scratch ideas and tutorials](https://scratch.mit.edu/ideas)
- **Reference:** [Scratch educator guides](https://scratch.mit.edu/educators)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
## 🚀 Mission Briefing: Level Up as a Game Developer!

Video games are one of the most exciting combinations of **art, storytelling, logic, and computer science**. Every time you play a game, hundreds of lines of code run behind the scenes to track your score, detect collisions, play sounds, and create challenges.

In this project, you will step into the shoes of a lead game designer! You will code an original, fully playable arcade game in **Scratch** (such as a Space Rover Asteroid Dodger, a Deep Ocean Gem Diver, or an Alien Maze Runner). Your game must feature smooth controls, scorekeeping, sound effects, and exciting win/lose conditions.

---

## 🕹️ Game Design Specifications

Your finished Scratch game must include all of the following core mechanics:

```
                  ┌─────────────────────────────────────┐
                  │       Core Scratch Game Loop        │
                  └──────────────────┬──────────────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          ▼                          ▼                          ▼
  ┌───────────────┐          ┌───────────────┐          ┌───────────────┐
  │ Player Sprite │          │ Hazard / Goal │          │ Game Engine   │
  ├───────────────┤          ├───────────────┤          ├───────────────┤
  │ • Arrow keys  │          │ • Random clone│          │ • Score var   │
  │ • Smooth move │          │ • Falling item│          │ • Lives / Time│
  │ • Costumes    │          │ • Touch detect│          │ • Broadcasts  │
  └───────────────┘          └───────────────┘          └───────────────┘
```

### 1. Player Sprite Controls
*   Create or customize a main player character.
*   Control the sprite using the arrow keys (`Up`, `Down`, `Left`, `Right`) or mouse following.
*   Include boundary checks so your sprite cannot fly off the edge of the stage.

### 2. Collectibles & Hazards
*   **Good Items (Collectibles)**: Items that appear and give the player points when touched (e.g., stars, coins, fuel tanks).
*   **Bad Items (Hazards)**: Obstacles that move toward the player or fall from the sky (e.g., asteroids, lightning bolts, lava rocks). Touching a hazard deducts a life or ends the game!

### 3. Variables & Scoring System
*   Create a variable named `Score` that increases by $+1$ or $+10$ when an item is collected.
*   Create a variable named `Lives` (start with 3 lives) or a countdown `Timer` (start at 30 seconds).

### 4. Broadcast Messages & Game States
Use Scratch's **Broadcast** blocks to transition between screens:
*   `broadcast [Start Game]` $\to$ Shows player and resets score.
*   `broadcast [You Win!]` $\to$ Triggers celebration music and winning backdrop when score reaches target (e.g., 50 points).
*   `broadcast [Game Over]` $\to$ Stops hazards and displays try-again screen when lives reach zero.

### 5. Sound Effects & Polish
*   Add audio effects for jumping, collecting items, and losing a life.
*   Use custom costumes so your character changes appearance (e.g., walking animation or blinking when hit).

---

## 🎬 YouTube Game Trailer & Playtest!
Once your game is bug-free and fun to play:
*   Record your computer screen while playing your game.
*   Provide lively live commentary: *"Can I beat the boss level with only 1 life left?!"*
*   Test the game yourself with several strategies. Record the score for each strategy and revise the game if it is too easy or difficult.

---

## 📝 Deliverables & Submission Checklist

- [ ] Scratch Project: Saved `.sb3` file in your workspace or shared link on Scratch.
- [ ] At least 2 active sprites with custom code.
- [ ] At least 2 variables (`Score` and `Lives` or `Timer`).
- [ ] At least 1 sound effect and custom backdrop.
- [ ] Completed Game Design Sheet below.

---

## 📊 Rubric & Evaluation

| Criteria | Great Job (4) | Master Game Dev (5) |
|---|---|---|
| **Gameplay & Motion** | Sprite moves smoothly with keyboard or mouse; doesn't get stuck. | Fluid diagonal movement; smooth costume animations; tight responsive controls. |
| **Code Logic & Events** | Uses loops, `if touching?`, and variables accurately. | Masterful use of broadcasts, clones, and timers without glitching or lag. |
| **Visuals & Sound** | Colorful backdrops, themed sprites, and matching sound effects. | Custom-drawn sprites or animations; background music with mute toggle; professional title screen. |
| **Fun Factor & Polish** | Game has a clear objective and is fun to play for 2–3 minutes. | Balanced difficulty curve; exciting rewards; zero game-breaking bugs. |

---

## ✍️ Learner’s Game Design Sheet

*(Fill out your game blueprint below before and after coding)*

### 1. Game Title & Concept
*   **Game Name:** 
*   **What is the player's mission?** 
*   **Who is the main hero sprite?** 

### 2. Game Mechanics & Rules
*   **How do you earn points?** 
*   **What are the hazards or enemies?** 
*   **How does a player WIN the game?** 
*   **How does a player LOSE the game?** 

### 3. Code Reflection
*   *What was the hardest bug you ran into while coding, and how did you fix it?* 
*   *What feature are you most proud of adding to your game?*
