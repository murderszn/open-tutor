# 💻 STEM Assignment: Intro to Shell Scripting on Mac

**Subject:** STEM / Computer Science  
**Grade Level:** 5th Grade (Grade 5)  
**Platform:** MacBook

---

## 🎯 What You Will Learn

- What a shell script is
- How to make a simple script with `nano`
- How to run a script with `bash`
- How to make a script say hello
- How to use variables in a script


**Core Repo Resource:**
- **[Student Guide: Windows Cli And Shell Fundamentals](../../resources/windows-cli-and-shell-fundamentals.md)**
 — What is a Script?

A script is a list of commands saved in a file, so you can run them all at once.

---

## 🔬 Part 2 — Make Your First Script

Type:

```bash
cd ~
nano hello.sh
```

Inside `nano`, type these lines:

```bash
#!/bin/bash
echo "Hello from my MacBook!"
echo "Today is $(date)"
```

To save and exit:
1. Press `Ctrl + O` then Enter
2. Press `Ctrl + X`

---

## 🔬 Part 3 — Run the Script

Type:

```bash
chmod +x hello.sh
./hello.sh
```

**Question:** What did the script print?

---

## 🔬 Part 4 — Use a Variable

Edit the script:

```bash
nano hello.sh
```

Change it to:

```bash
#!/bin/bash
name="Grade 5"
echo "Hello, $name!"
echo "Today is $(date)"
```

Run it again:

```bash
./hello.sh
```

---

## 🔬 Part 5 — Make a Second Script

Create `tasks.sh`:

```bash
nano tasks.sh
```

Inside:

```bash
#!/bin/bash
echo "My to-do list:"
echo "1. Finish homework"
echo "2. Play outside"
echo "3. Read a book"
```

Run it:

```bash
chmod +x tasks.sh
./tasks.sh
```

---

## 💬 Part 6 — Reflection

1. What does `#!/bin/bash` do?
2. What is the purpose of `chmod +x`?
3. What would you make a script do for fun?

---

## 📋 Grading

| Category | Points |
|----------|--------|
| `hello.sh` created and run | 2 |
| Variable added | 2 |
| `tasks.sh` created and run | 2 |
| Reflections answered | 4 |

---

## 🎒 Resources

- Search: `"Mac shell scripting for beginners"`
- Video: [Bash Scripting for Beginners](https://www.youtube.com/watch?v=tK9eqbHKTP4)
- Docs: [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
