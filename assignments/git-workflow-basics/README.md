# 🖥️ STEM Assignment: Git Workflow Basics

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC with Git Bash

---

## 🎯 What You Will Learn

- How to initialize a Git repository
- How to stage and commit files
- How to view commit history
- How to create a `.gitignore` file
- What `git status` shows at each step


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Create a Practice Folder

In Git Bash:

```bash
mkdir ~/Desktop/git-practice
cd ~/Desktop/git-practice
pwd
```

---

## 🔬 Part 2 — Initialize Git

```bash
git init
```

**Question:** What does `git init` create?

---

## 🔬 Part 3 — Create a File

```bash
echo "# My Git Practice" > README.md
git status
```

**Question:** What does Git say about `README.md`?

---

## 🔬 Part 4 — Stage the File

```bash
git add README.md
git status
```

**Question:** How did the status change after `git add`?

---

## 🔬 Part 5 — Commit the File

```bash
git config user.name "Grade 8"
git config user.email "advanced@example.com"
git commit -m "Initial commit: add README"
git log --oneline
```

**Question:** What does `git log --oneline` show?

---

## 🔬 Part 6 — Make Changes

```bash
echo "Today I learned Git." >> NOTES.txt
git status
git add NOTES.txt
git commit -m "Add notes file"
git log --oneline
```

---

## 🔬 Part 7 — Create a `.gitignore`

```bash
echo "*.log" > .gitignore
echo "temp/" >> .gitignore
git add .gitignore
git commit -m "Add gitignore"
git log --oneline
```

**Question:** What does `.gitignore` do?

---

## 💬 Part 8 — Reflection

1. What is the difference between `git add` and `git commit`?
2. Why would you use `.gitignore`?
3. What does `git status` help you see?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| Repo initialized | 2 |
| Commits created | 2 |
| `.gitignore` created | 2 |
| `git log` reviewed | 2 |
| Reflections answered | 2 |

---

## 🎒 Resources

- Search: `"Git basics for beginners step by step"`
- Video: [Git for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- Docs: [Git Handbook](https://guides.github.com/introduction/git-handbook/)
