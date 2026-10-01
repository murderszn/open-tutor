# 💻 STEM Assignment: Mac Terminal File Management

**Subject:** STEM / Computer Science  
**Grade Level:** 5th Grade (Grade 5)  
**Platform:** MacBook

---

## 🎯 What You Will Learn

- How to make folders in Terminal
- How to copy and move files
- How to rename files with `mv`
- How to delete files and folders
- How to see file sizes
- Safe terminal habits on Mac


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Make a Folder

Type:

```bash
mkdir TerminalFiles
cd TerminalFiles
pwd
```

**Question:** What folder did you make?

---

## 🔬 Part 2 — Create Files

Type:

```bash
touch notes.txt todo.txt
ls -la
```

**Question:** How many files are in the folder?

---

## 🔬 Part 3 — Write in a File

```bash
echo "I made this with Terminal" > notes.txt
cat notes.txt
```

---

## 🔬 Part 4 — Copy a File

```bash
cp notes.txt notes-backup.txt
ls -la
```

**Question:** What does `cp` do?

---

## 🔬 Part 5 — Rename a File

```bash
mv todo.txt tasks.txt
ls -la
```

**Question:** What did `mv` change?

---

## 🔬 Part 6 — See File Sizes

```bash
ls -lh
```

**Question:** How big is `notes.txt`?

---

## 🔬 Part 7 — Delete a File

```bash
rm notes-backup.txt
ls -la
```

**Question:** What happened to `notes-backup.txt`?

---

## 🔬 Part 8 — Delete a Folder

```bash
cd ..
rm -rf TerminalFiles
ls -la
```

**Question:** What does `rm -rf` do? (Hint: it removes folders and everything inside)

---

## 💬 Part 9 — Reflection

1. What’s the difference between `cp` and `mv`?
2. Why should you be careful with `rm -rf`?
3. What is one thing Terminal can do faster than clicking?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| Folder created | 2 |
| Files created and listed | 2 |
| Copy/rename/delete practiced | 3 |
| Reflection answered | 3 |

---

## 🎒 Resources

- Search: `"Mac terminal copy move delete files"`
- Video: [Terminal Basics Mac](https://www.youtube.com/watch?v=tZ3wN2zkp9A)
- Docs: [Apple Support — Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-trmd1022/mac)
