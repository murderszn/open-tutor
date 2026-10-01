# 💻 STEM Assignment: MacBook-Friendly Bash Basics

**Subject:** STEM / Computer Science  
**Grade Level:** 5th Grade (Grade 5)  
**Platform:** MacBook

---

## 🎯 What You Will Learn

- How to open Terminal on your MacBook
- How to find your current folder (home directory)
- How to list files and folders
- How to move into folders and move back out
- How to create a new folder
- How to create a simple file using the command line
- Basic, safe commands that work on every Mac

---

## 🛠️ Setup

1. Open **Terminal** on your MacBook.
   - Press `Cmd + Space`, type `Terminal`, and press Enter.
2. Save your answers in a file called `macbook-basics.md` in your `your-private-workspace/` folder.
3. If you get stuck, ask Siri: *"Hey Siri, how do I open Terminal on Mac?"*


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Read This First

### What is Terminal?

Terminal is an app that lets you type commands to tell your Mac what to do. It’s like a magic keyboard that controls your whole computer. On a Mac, Terminal uses **bash** (or zsh, which is very similar).

### Your Home Folder

When you open Terminal, you usually start in your **home folder**. That’s your personal space on the Mac, where your Desktop, Documents, and Downloads folders live.

---

## 🔬 Part 1 — Know Where You Are

### Command: `pwd`

Type:

```bash
pwd
```

**Question:** What folder does it say you are in?

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
2. What extra things appear with `-la`?
3. Can you spot a folder called `Desktop`?

---

## 🔬 Part 3 — Move Into a Folder

### Commands: `cd` and `cd ..`

Type:

```bash
cd Desktop
pwd
ls
cd ..
pwd
```

**Questions:**
1. What does `cd Desktop` do?
2. What does `cd ..` do?
3. What does `cd ~` do? Try it.

---

## 🔬 Part 4 — Go Home Fast

### Command: `cd ~`

Type:

```bash
cd ~
pwd
```

**Question:** What folder is `~`?

---

## 🔬 Part 5 — Create Your Own Folder

### Command: `mkdir`

Make a folder for this assignment:

```bash
mkdir TerminalFun
```

Move into it:

```bash
cd TerminalFun
pwd
```

**Question:** What is the full path of your new folder?

---

## 🔬 Part 6 — Create a File

### Command: `touch`

Create a file inside your new folder:

```bash
touch my-first-file.txt
```

Check that it exists:

```bash
ls -la
```

**Question:** Do you see `my-first-file.txt` in the list?

---

## 🔬 Part 7 — Write Something in the File

### Command: `echo`

Type:

```bash
echo "Hello from my MacBook!" > my-first-file.txt
```

Read it back:

```bash
cat my-first-file.txt
```

**Question:** Did it show the text you wrote?

---

## 🔬 Part 8 — Follow the Route

Starting from your home folder, follow these steps and write what `pwd` shows after each:

1. `cd Desktop`
2. `cd ..`
3. `cd Documents`
4. `cd ..`
5. `cd Downloads`
6. `cd ..`
7. `cd TerminalFun`

---

## 💬 Part 9 — Reflection Questions

1. What’s the difference between `cd ..` and `cd ~`?
2. When might you use `ls -la` instead of just `ls`?
3. Why might someone use Terminal instead of only clicking with the mouse?
4. What was the most fun or surprising thing you did today?

---

## 🎒 Resource Pack

### 🔎 Search Queries
- `"Mac Terminal basics for kids"`
- `"Terminal navigation commands beginners"`
- `"bash basics on Mac for students"`

### 📺 YouTube Videos
- [Terminal Basics for Beginners (Mac)](https://www.youtube.com/watch?v=tZ3wN2zkp9A) — kid-friendly intro
- [How to Use Terminal on Mac](https://www.youtube.com/watch?v=oxuRxtrO2Ag) — general basics

### 🌐 Web References
- [Apple Support — Use Terminal on Mac](https://support.apple.com/guide/terminal/open-or-quit-terminal-trmd1022/mac) — official help
- [Bash Cheat Sheet](https://devhints.io/bash) — simple command lookup

---

## 📋 Grading Rubric

| Category | Excellent (3) | Good (2) | Needs Work (1) |
|----------|---------------|----------|----------------|
| **Navigation** | All `cd`, `ls`, `pwd` commands used correctly | Most correct; 1-2 mistakes | Multiple mistakes |
| **Folder & File Creation** | Created folder and file; read content back | Created folder or file | Could not create |
| **Reflection** | 4 questions answered with examples | 3 questions answered | 2 or fewer |
| **Help-Seeking** | Used help or search when stuck | Asked for help once | Could not complete steps |
