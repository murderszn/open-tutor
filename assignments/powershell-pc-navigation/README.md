# 🖥️ STEM Assignment: PowerShell Navigation on Windows

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC with PowerShell

---

## 🎯 What You Will Learn

- How to open PowerShell on your custom Windows PC
- How PowerShell paths work compared to Git Bash
- Basic navigation commands: `Get-Location`, `Set-Location`, `Get-ChildItem`
- How PowerShell uses aliases (`pwd`, `ls`, `cd`)
- How to view hidden items and file properties
- How to move up folders and return to your home folder

---

## 🛠️ Setup

1. Open **PowerShell** from the Start Menu.
2. Type each command below in PowerShell and write down what it shows.
3. Save your answers in a file called `powershell-navigation.md` in your `your-private-workspace/` folder.


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Read This First

### PowerShell vs Git Bash

PowerShell is the modern Windows command shell. It uses similar ideas to Git Bash, but some commands and flags are different.

| Git Bash | PowerShell | What it does |
|----------|-----------|--------------|
| `pwd` | `pwd` or `Get-Location` | Prints current folder |
| `ls` | `ls` or `Get-ChildItem` | Lists files and folders |
| `cd` | `cd` or `Set-Location` | Changes folder |
| `cd ..` | `cd ..` | Goes up one level |
| `cd ~` | `cd $HOME` | Goes to home folder |

> **Note:** PowerShell accepts many Git Bash commands too, because of built-in aliases.

---

## 🔬 Part 1 — Know Where You Are

### Command: `pwd`

Type:

```powershell
pwd
```

**Question:** What folder does PowerShell say you are in?

---

## 🔬 Part 2 — See What’s Here

### Command: `ls`

Type:

```powershell
ls
```

Then try:

```powershell
ls -Force
```

**Questions:**
1. What does `ls` show you?
2. What extra items appear when you use `-Force`?
3. How is this different from Git Bash’s `ls -la`?

---

## 🔬 Part 3 — Move Into and Out of Folders

Type:

```powershell
cd Documents
pwd
cd ..
pwd
cd $HOME
pwd
```

**Questions:**
1. What does `cd Documents` do?
2. What does `cd ..` do?
3. What does `cd $HOME` do? Write the path it shows.

---

## 🔬 Part 4 — Look Around Your PC

### Task: Make a Folder Map

Starting from your home folder, use `ls` and `cd` to visit these folders and write down 2-3 things inside each:

1. `Desktop`
2. `Documents`
3. `Downloads`
4. `AppData\Roaming` (hint: `cd AppData`, then `cd Roaming`)

---

## 🔬 Part 5 — Practice Route

Follow this exact route. After each `cd`, write what `pwd` shows:

1. Start: `cd $HOME`
2. `cd Pictures`
3. `cd ..`
4. `cd Downloads`
5. `cd ..`
6. `cd Desktop`

---

## 💬 Part 6 — Reflection Questions

1. How does `cd $HOME` compare to Git Bash’s `cd ~`?
2. When would you use `ls -Force`?
3. What is one advantage of PowerShell over clicking around in File Explorer?
4. What was the hardest part of PowerShell navigation so far?

---

## 🎒 Resource Pack

### 🔎 Search Queries
- `"PowerShell navigation commands beginners"`
- `"PowerShell Get-Location Set-Location"`
- `"PowerShell vs Git Bash for students"`

### 📺 YouTube Videos
- [PowerShell Basics — Navigation](https://www.youtube.com/watch?v=UVUd6iK4KlI) — beginner walkthrough
- [PowerShell for Beginners](https://www.youtube.com/watch?v=hhO531YiY-Q) — full intro

### 🌐 Web References
- [Microsoft PowerShell Docs](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-you-want-to-know-about-powershell) — official guide
- [PowerShell Cheat Sheet](https://www.pdq.com/powershell-cheat-sheet/) — quick reference

---

## 📋 Grading Rubric

| Category | Excellent (3) | Good (2) | Needs Work (1) |
|----------|---------------|----------|----------------|
| **Command Accuracy** | All navigation commands used correctly | Mostly correct; 1-2 mistakes | Multiple incorrect commands |
| **Folder Map** | Visited all 4 folders; clear notes | Visited 3; some notes missing | Fewer than 3 folders |
| **Reflection** | 4 questions answered with detail | 3 questions answered | 2 or fewer |
| **Path Skills** | Correctly used `cd ..`, `cd $HOME`, and `cd path` | Needed help with one navigation step | Struggled with navigation |
