# 🖥️ STEM Assignment: Windows File System & Permissions

**Subject:** STEM / Computer Science  
**Grade Level:** 8th Grade (Grade 8)  
**Platform:** Windows PC

---

## 🎯 What You Will Learn

- How Windows organizes drives (C:, D:, etc.)
- How to view file properties in PowerShell
- What file permissions mean
- How to use `attrib` to view hidden/system attributes
- How to create and use text files with Notepad from the command line
- How to check disk space with PowerShell


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — Explore Your Drives

In PowerShell, type:

```powershell
Get-PSDrive -PSProvider FileSystem
```

**Questions:**
1. How many drives do you have?
2. Which drive is your system drive (usually C:)?
3. How much free space is on C:?

---

## 🔬 Part 2 — File Properties

Type:

```powershell
Get-Item "$HOME\Desktop" | Select-Object Name, Length, LastWriteTime, Attributes
```

**Questions:**
1. What does `Length` show for a folder?
2. What is `LastWriteTime`?
3. What `Attributes` does your Desktop have?

---

## 🔬 Part 3 — Hidden & System Files

Type:

```powershell
attrib "$HOME\AppData"
```

Then try:

```powershell
Get-ChildItem "$HOME\AppData" -Force | Select-Object -First 10 Name, Attributes
```

**Questions:**
1. What does `-Force` do?
2. Name one hidden item you see.
3. Why might Windows hide some files?

---

## 🔬 Part 4 — Create a File from PowerShell

Type:

```powershell
notepad "$HOME\Desktop\powerhell-notes.txt"
```

Write this inside Notepad and save it:

```
Today I learned:
- PowerShell can create files
- I can launch Notepad from the command line
```

Then verify in PowerShell:

```powershell
Get-Content "$HOME\Desktop\powerhell-notes.txt"
```

---

## 🔬 Part 5 — Check Disk Space

Type:

```powershell
Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" | Select-Object DeviceID, @{Name="Free(GB)";Expression={[math]::Round($_.FreeSpace/1GB,2)}}, @{Name="Size(GB)";Expression={[math]::Round($_.Size/1GB,2)}}
```

**Question:** How much free space do you have on C: in GB?

---

## 💬 Part 6 — Reflection

1. What is the difference between a file and a folder in PowerShell?
2. Why would you use `attrib` or `-Force`?
3. What is one situation where checking disk space is useful?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| Drive info gathered | 2 |
| File properties checked | 2 |
| Hidden files found | 2 |
| Notepad file created | 2 |
| Disk space checked | 2 |

---

## 🎒 Resources

- Search: `"PowerShell Get-Item file properties"`
- Search: `"Windows file permissions basics for students"`
- Docs: [Microsoft — File System Drives](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-psdrive)
