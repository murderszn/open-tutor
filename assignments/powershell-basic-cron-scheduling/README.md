# 🖥️ STEM Assignment: PowerShell Basic Task Scheduling

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC with PowerShell

---

## 🎯 What You Will Learn

- How Windows Task Scheduler works (the Windows equivalent of cron)
- How to create a scheduled task from PowerShell
- How to view and delete scheduled tasks
- How to make a task run a simple script or command
- How to trigger a task immediately for testing
- What “trigger,” “action,” and “principal” mean in scheduled tasks

---

## 🛠️ Setup

1. Open **PowerShell** as a **standard user** (not Administrator).
2. Save your answers in a file called `powershell-task-scheduler.md` in your `your-private-workspace/` folder.


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Read This First

### Cron vs Task Scheduler

On Linux/Mac, **cron** runs commands on a schedule. On Windows, the closest tool is **Task Scheduler**. You can control it using PowerShell with cmdlets like `New-ScheduledTaskAction`, `New-ScheduledTaskTrigger`, and `Register-ScheduledTask`.

### Key Terms

| Term | Meaning |
|------|---------|
| **Trigger** | When the task runs (daily, weekly, at startup, etc.) |
| **Action** | What the task does (open a program, run a script, show a message) |
| **Principal** | Which user account the task runs as |
| **Task Path** | Where the task is stored in Task Scheduler |

---

## 🔬 Part 1 — Explore Task Scheduler

### Task A: Open Task Scheduler GUI

Press `Win + R`, type `taskschd.msc`, and press Enter.

**Question:** What does the Task Scheduler window show? List 3 things you see in the left pane.

---

### Task B: Check Existing Tasks

In PowerShell, type:

```powershell
Get-ScheduledTask | Select-Object TaskName, State | Format-Table -AutoSize
```

**Question:** How many scheduled tasks are listed? Are any of them ones you recognize?

---

## 🔬 Part 2 — Create a Simple Task from PowerShell

### Task: Show a Message Every Day at 3 PM

Run these commands one at a time:

```powershell
$action = New-ScheduledTaskAction -Execute "msg" -Argument "*" "Time to stretch!"
$trigger = New-ScheduledTaskTrigger -Daily -At 3:00PM
Register-ScheduledTask -TaskName "StretchReminder" -Action $action -Trigger $trigger -Description "Daily stretch reminder"
```

Then verify:

```powershell
Get-ScheduledTask -TaskName "StretchReminder"
```

**Question:** Did the task get created? What does the output show?

---

## 🔬 Part 3 — Test Your Task

### Task: Run the Task Now

In PowerShell, type:

```powershell
Start-ScheduledTask -TaskName "StretchReminder"
```

**Question:** Did a popup message appear? If not, what did PowerShell show?

---

## 🔬 Part 4 — Change the Task

### Task A: Disable the Task

```powershell
Disable-ScheduledTask -TaskName "StretchReminder"
```

Verify it with:

```powershell
Get-ScheduledTask -TaskName "StretchReminder"
```

**Question:** What does the `State` column say now?

---

### Task B: Enable the Task Again

```powershell
Enable-ScheduledTask -TaskName "StretchReminder"
```

**Question:** What is the state after enabling?

---

## 🔬 Part 5 — Delete the Task

When you’re done practicing, clean up:

```powershell
Unregister-ScheduledTask -TaskName "StretchReminder" -Confirm:$false
```

Verify it’s gone:

```powershell
Get-ScheduledTask -TaskName "StretchReminder"
```

**Question:** What does PowerShell say now?

---

## 💬 Part 6 — Reflection Questions

1. How is a Windows scheduled task similar to a Linux cron job?
2. What does the `-Daily -At 3:00PM` part control?
3. Why might you want to delete or disable a scheduled task instead of just leaving it?
4. What’s one useful task you could schedule for yourself on your PC?

---

## 🎒 Resource Pack

### 🔎 Search Queries
- `"PowerShell Scheduled Tasks beginners"`
- `"Windows Task Scheduler vs cron"`
- `"Register-ScheduledTask example"`

### 📺 YouTube Videos
- [PowerShell Scheduled Tasks Tutorial](https://www.youtube.com/watch?v=k1KbwQNfZ8A) — step-by-step
- [Windows Task Scheduler Explained](https://www.youtube.com/watch?v=Rk8U枝条) — GUI walkthrough

### 🌐 Web References
- [Microsoft Docs — Scheduled Tasks](https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/?view=windowsserver2022-ps) — official cmdlet reference
- [PowerShell Cheat Sheet](https://www.pdq.com/powershell-cheat-sheet/) — quick reference

---

## 📋 Grading Rubric

| Category | Excellent (3) | Good (2) | Needs Work (1) |
|----------|---------------|----------|----------------|
| **Task Creation** | Created, tested, enabled, disabled, and deleted task successfully | Created and tested; missed one step | Could not create or test task |
| **Command Accuracy** | All cmdlets used correctly | Mostly correct; minor syntax issues | Major syntax errors or confusion |
| **Reflection** | 4 questions answered with real examples | 3 questions answered | 2 or fewer |
| **Cleanup** | Successfully unregistered the task | Left task registered but noted it | Could not remove task |
