# 🖥️ Windows CLI & Shell Fundamentals

A student-friendly reference covering Windows Command Prompt, PowerShell, Git Bash, and basic file-system concepts used across Advanced learner’s tech assignments.

## What Each Shell Is

| Shell | How to Open | Best For |
|-------|-------------|----------|
| Command Prompt (cmd) | Search “cmd” in Start | Quick, simple commands |
| PowerShell | Search “PowerShell” in Start | Advanced scripting, admin tasks |
| Git Bash | Search “Git Bash” in Start | Linux-style commands on Windows; Git |

## Key Concepts

### Paths

Windows paths use backslashes: `C:\Users\jjohn\Desktop`
Git Bash paths use forward slashes: `/c/Users/jjohn/Desktop`
PowerShell accepts both styles.

### Current Folder

- `pwd` or `cd` — shows your current folder
- `cd foldername` — moves into a folder
- `cd ..` — goes up one level
- `cd ~` — goes to your home folder

### Files & Folders

- `ls` (Git Bash) or `dir` (cmd/PowerShell) — list files
- `mkdir name` — create folder
- `touch file.txt` (Git Bash) or `New-Item file.txt` (PowerShell) — create file
- `rm file.txt` — delete file
- `rmdir folder` — delete empty folder

### System Info

PowerShell:
```powershell
Get-Location
Get-Date
Get-Process | Select-Object -First 5
```

## PowerShell vs Command Prompt

| Task | cmd | PowerShell |
|------|-----|------------|
| List files | `dir` | `Get-ChildItem` |
| Clear screen | `cls` | `Clear-Host` |
| Copy file | `copy a.txt b.txt` | `Copy-Item a.txt b.txt` |
| Read file | `type file.txt` | `Get-Content file.txt` |
| Find help | `command /?` | `Get-Help command` |

PowerShell uses **verb-noun** cmdlets. Examples:
- `Get-Location`
- `New-Item`
- `Copy-Item`
- `Remove-Item`

## File Permissions on Windows

Files and folders have permissions that control who can read, write, or execute them.

- **Read** — can open and view
- **Write** — can change or save
- **Execute** — can run (for programs)

Right-click a file → **Properties** → **Security** tab to view permissions.

Command-line tips:
- `attrib` — shows hidden/system attributes
- `Get-Item file.txt | Format-List *` — PowerShell view of full file properties

## Git Basics

- `git init` — start a new repository in the current folder
- `git status` — see which files have changed
- `git add filename` — stage a file for commit
- `git commit -m "message"` — save staged changes with a message
- `git log --oneline` — view commit history
- `.gitignore` — a file listing files Git should ignore

## Quick Reference Quiz

1. What command shows your current folder in PowerShell?
2. What is the difference between `cd` and `cd ..`?
3. What does `New-Item -ItemType Directory` do?
4. What is the Linux-style path for `C:\Users\jjohn\Desktop` in Git Bash?
