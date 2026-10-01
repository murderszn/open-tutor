# 🖥️ STEM Assignment: Git Bash PC Navigation

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC with Git Bash

---

## 🎯 What You Will Learn

- How to open Git Bash on your custom Windows PC
- How to move around your computer using bash commands
- How to find files and folders without using the mouse
- Basic command-line navigation: `pwd`, `ls`, `cd`, `cd ..`, `cd ~`
- How to see hidden files and read folder structure
- The difference between Git Bash paths (`/c/Users/...`) and Windows paths (`C:\Users\...`)

---

## 🛠️ Setup

1. Open **Git Bash** from your desktop or Start Menu.
2. Type each command below in Git Bash and write down what it shows you.
3. Take a screenshot or copy the output for each step into your assignment file.


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Read This First

### Why Use Git Bash?

Git Bash gives you a Linux-style terminal on Windows. It’s powerful for navigating files, running scripts, and using Git. Many coders prefer it because the same commands work on Mac and Linux too.

### Important: Two Path Styles

| Style | Example | When You See It |
|-------|---------|-----------------|
| Git Bash path | `/c/Users/jjohn` | Inside Git Bash |
| Windows path | `C:\Users\jjohn` | In File Explorer, PowerShell |

In Git Bash, your main folder is usually `/c/Users/yourname`.

---

## 🔬 Part 1 — Know Where You Are

### Command: `pwd`

Type:

```bash
pwd
```

**Question:** What folder does it say you are in? Write it down.

---

## 🔬 Part 2 — See What’s Here

### Command: `ls`

Type:

```bash
ls
```

Then try:

```bash
ls -la
```

**Questions:**
1. What does `ls` show you?
2. What extra things appear when you add `-la`?
3. Why is `-la` useful?

---

## 🔬 Part 3 — Move Into a Folder

### Commands: `cd` and `cd ..`

Type:

```bash
cd Documents
pwd
ls
cd ..
pwd
```

**Questions:**
1. What does `cd Documents` do?
2. What does `cd ..` do?
3. What does `cd ~` do? Try it.

---

## 🔬 Part 4 — Find Your Way Home

### Command: `cd ~`

Type:

```bash
cd ~
pwd
```

**Question:** What folder is `~`?

---

## 🔬 Part 5 — Look Around Your PC

### Task: Make a Folder Map

Starting from your home folder (`/c/Users/yourname`), use `ls` and `cd` to visit these folders and write down 2-3 things inside each:

1. `Desktop`
2. `Documents`
3. `Downloads`
4. `Pictures`
5. `AppData/Roaming` (hint: you’ll need `cd AppData` then `cd Roaming`)

---

## 🔬 Part 6 — See Hidden Files

### Command: `ls -la` (or `ls -a`)

Hidden files and folders in Git Bash start with a dot (`.`).

**Task:** Go to your home folder and list hidden files. Name `.bashrc` and `.gitconfig` if you see them.

---

## 🏗️ Part 7 — Navigation Practice Route

Follow this exact route and write the output of `pwd` after each `cd`:

1. Start: `cd ~`
2. `cd Documents`
3. `cd ..`
4. `cd Downloads`
5. `cd ..`
6. `cd Desktop`

**Final check:** What does `pwd` show at the end?

---

## 💬 Part 8 — Reflection Questions

Answer these in your assignment file:

1. What’s the difference between `cd ..` and `cd ~`?
2. When might you use `ls -la` instead of just `ls`?
3. Why do you think coders like using the terminal instead of only clicking in folders?
4. What was the most confusing command today, and how did you figure it out?

---

## 🎒 Resource Pack

### 🔎 Search Queries
- `"Git Bash basics for beginners"`
- `"Windows Git Bash navigation commands"`
- `"cd pwd ls explained for students"`

### 📺 YouTube Videos
- [Git Bash for Beginners](https://www.youtube.com/watch?v=Qq6O8ylyyF8) — Windows-specific intro
- [Basic Terminal Commands](https://www.youtube.com/watch?v=oxuRxtrO2Ag) — general command-line navigation

### 🌐 Web References
- [Git Bash Documentation](https://git-scm.com/docs/git-bash) — official reference
- [Bash Cheat Sheet](https://devhints.io/bash) — quick command lookup

---

## 📋 Grading Rubric

| Category | Excellent (3) | Good (2) | Needs Work (1) |
|----------|---------------|----------|----------------|
| **Navigation Accuracy** | All `cd`, `ls`, `pwd` commands used correctly | Most commands correct; 1-2 mistakes | Multiple incorrect commands or confusion |
| **Folder Map** | Visited all 5 folders; identified contents clearly | Visited 3-4 folders; some details missing | Fewer than 3 folders identified |
| **Reflection** | 4 questions answered with specific examples | 3 questions answered | 2 or fewer, or very vague |
| **Hidden Files** | Correctly listed and named hidden files | Listed but missed a name | Could not find or list hidden files |
