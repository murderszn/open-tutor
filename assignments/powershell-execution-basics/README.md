# 🖥️ STEM Assignment: PowerShell Execution Basics

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC with PowerShell

---

## 🎯 What You Will Learn

- How to run commands in PowerShell
- How to use `Get-Help` to learn new commands
- How to create files and folders with `New-Item`
- How to read file contents with `Get-Content`
- How to clear the screen with `Clear-Host`
- How to stop a running command with `Ctrl + C`
- What cmdlets are and why PowerShell uses them

---

## 🛠️ Setup

1. Open **PowerShell** as your normal user (not necessarily as Administrator).
2. Save your answers in a file called `powershell-execution.md` in your `your-private-workspace/` folder.


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Read This First

### Cmdlets are Commands

PowerShell commands are called **cmdlets** (pronounced “command-lets”). They usually follow a Verb-Noun pattern:

- `Get-Location` — get the current location
- `New-Item` — create something new
- `Get-Content` — get the content of a file

### Getting Help

Type `Get-Help <cmdlet>` to read the official help for any command.

```powershell
Get-Help Get-Location
```

---

## 🔬 Part 1 — Your First Commands

### Task A: Get Help

Type:

```powershell
Get-Help Get-Location
```

**Question:** What does the help say `Get-Location` does?

---

### Task B: Basic Commands

Type these and write the output:

```powershell
Get-Location
Get-Date
Get-Process | Select-Object -First 5
```

**Questions:**
1. What does `Get-Location` show?
2. What does `Get-Date` show?
3. How many processes are listed by the third command?

---

## 🔬 Part 2 — Create Files and Folders

### Task A: Make a Folder

Type:

```powershell
New-Item -ItemType Directory -Path "$HOME\Desktop\PowerShellPractice"
```

**Question:** Where did this folder appear?

---

### Task B: Make a File

Type:

```powershell
New-Item -ItemType File -Path "$HOME\Desktop\PowerShellPractice\hello.txt"
```

**Question:** What file did you create?

---

### Task C: Write Text to a File

Type:

```powershell
"Hello from PowerShell" | Out-File "$HOME\Desktop\PowerShellPractice\hello.txt"
```

Then read it back:

```powershell
Get-Content "$HOME\Desktop\PowerShellPractice\hello.txt"
```

**Question:** Did it show the text you wrote?

---

## 🔬 Part 3 — Read File Contents

### Task: Read Multiple Files

Type:

```powershell
Get-ChildItem "$HOME\Desktop\PowerShellPractice"
```

**Question:** How many files or folders are inside `PowerShellPractice`?

---

## 🔬 Part 4 — Stop a Command

### Task: See `Ctrl + C` in Action

Type:

```powershell
while ($true) { Get-Date }
```

While it runs, press `Ctrl + C`.

**Question:** What happened? Why is `Ctrl + C` useful?

---

## 🔬 Part 5 — Clear the Screen

Type:

```powershell
Clear-Host
```

**Question:** What does `Clear-Host` do?

---

## 💬 Part 6 — Reflection Questions

1. What is a cmdlet? Give 3 examples.
2. How is `Get-Help` like a teacher for PowerShell?
3. What’s the difference between `New-Item` with `-ItemType Directory` vs `-ItemType File`?
4. Why might you want to create a file from the command line instead of right-clicking?

---

## 🎒 Resource Pack

### 🔎 Search Queries
- `"PowerShell cmdlets for beginners"`
- `"New-Item vs Out-File PowerShell"`
- `"PowerShell Get-Help examples"`

### 📺 YouTube Videos
- [PowerShell Beginner Series — Your First Commands](https://www.youtube.com/watch?v=QoythbkH6f0) — execution basics
- [PowerShell File System Cmdlets](https://www.youtube.com/watch?v=JtgNNJT5mRA) — creating and reading files

### 🌐 Web References
- [About Cmdlets — Microsoft Docs](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/about-cmdlets) — what cmdlets are
- [PowerShell Cheat Sheet](https://www.pdq.com/powershell-cheat-sheet/) — quick reference

---

## 📋 Grading Rubric

| Category | Excellent (3) | Good (2) | Needs Work (1) |
|----------|---------------|----------|----------------|
| **Execution Accuracy** | All commands run without errors; outputs understood | Most run correctly; minor confusion | Could not run commands without help |
| **File & Folder Creation** | Created folder and file; read content back | Created folder or file; read worked | Could not create or read |
| **Help Usage** | Used `Get-Help` to explain commands | Used help once or twice | Did not use `Get-Help` |
| **Reflection** | 4 questions answered with examples | 3 questions answered | 2 or fewer |
