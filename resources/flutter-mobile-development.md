# Flutter & Mobile App Development

> **What you'll learn:** What Flutter is, how to use DartPad (a free in-browser tool), and how to build your first app without installing anything.

## What Is Flutter?

Flutter is Google's **free, open-source** toolkit for building apps for phones, tablets, websites, and desktop computers — all from **one set of code**. Released in 2018, Flutter now powers apps used by hundreds of millions of people worldwide.

**Kid-Friendly:** Imagine if one set of Lego instructions could build the same car out of red Legos OR blue Legos automatically. Flutter is like that — you write your app code once, and it works on an iPhone AND an Android phone at the same time!

### Real Companies That Use Flutter
- **Google Pay** — Google's payment app (billions of users)
- **eBay Motors** — Car shopping app
- **BMW App** — Controls BMW vehicles from your phone
- **Hamilton Musical App** — The official Broadway show companion app
- **Reflectly** — Mood journal app with millions of downloads
- **Alibaba Xianyu** — Used by 50+ million users in China
- **Nubank** — Largest digital bank in Latin America

---

## What Is Dart?

Dart is the **programming language** Flutter uses. Google created Dart to be fast, readable, and safe. If you know Python, Dart will feel familiar.

### Dart vs Python Side-by-Side

```dart
// Dart — printing and a variable
String name = 'Advanced learner';
print('Hello, $name!');

if (name.length > 4) {
  print('Long name!');
}
```

```python
# Python — same logic
name = 'Advanced learner'
print(f'Hello, {name}!')

if len(name) > 4:
    print('Long name!')
```

**Key differences:** Dart uses `{curly braces}` and `;semicolons`. Dart requires you to say the *type* of a variable (`String`, `int`, `bool`). Everything else works the same way.

| Feature | Python | Dart |
|---------|--------|------|
| Print | `print('hello')` | `print('hello');` |
| Variable | `score = 10` | `int score = 10;` |
| If statement | `if x > 5:` | `if (x > 5) {` |
| For loop | `for i in range(5):` | `for (int i = 0; i < 5; i++) {` |
| Function | `def greet(name):` | `String greet(String name) {` |
| File type | `.py` | `.dart` |

---

## Free Tools You Need

| Tool | What It Is | Cost |
|------|-----------|------|
| **DartPad** | Online Flutter/Dart editor — runs in your browser, no install needed | Free |
| **Flutter SDK** | Full toolkit for your computer | Free |
| **VS Code** | Best free code editor for Flutter | Free |
| **Android Studio** | Official Android developer IDE | Free |
| **Pub.dev** | Flutter package library (like Python pip) | Free |

> **Start here → [DartPad](https://dartpad.dev):** Write real Flutter code in your browser RIGHT NOW. Click "New Pad" → "Flutter" and start coding. No account needed, no downloads.

---

## The Widget System: Everything Is a Widget

In Flutter, **every single piece of the screen is a widget** — buttons, text, images, spacing, backgrounds — everything. Widgets nest inside each other like a tree of boxes.

### Common Widgets

| Widget | What It Does | Real App Example |
|--------|-------------|------------------|
| `Text` | Shows text on screen | Article title, username |
| `ElevatedButton` | A tappable raised button | "Sign In", "Buy Now" |
| `Image` | Shows a photo or graphic | Profile picture |
| `Icon` | Small symbol/graphic | ❤️ like, 🔍 search |
| `TextField` | Text input box | Search bar, login form |
| `Column` | Stacks items top to bottom | List of posts |
| `Row` | Lines items left to right | Tab bar icons |
| `Container` | A box with size, color, and style | Card background |
| `Scaffold` | The full-screen frame for one page | Every app screen |
| `ListView` | A scrollable list | Instagram feed |
| `AppBar` | Top bar with title and actions | Title bar at the top |
| `FloatingActionButton` | Floating button (bottom right) | "+" button in Gmail |
| `Padding` | Adds space around a widget | Breathing room around text |
| `SizedBox` | Empty space between widgets | Gap between two buttons |

### The Widget Tree

Widgets stack inside each other. This is called the **widget tree**:

```
MaterialApp
  └── Scaffold
        ├── AppBar ──── Text: "My App"
        └── Body
              └── Column
                    ├── Text: "Hello!"
                    ├── SizedBox  ← spacing
                    └── ElevatedButton: "Tap Me"
```

Think of it like a family tree — every widget is a parent, a child, or both.

---

## Your First Flutter App

Open **[DartPad](https://dartpad.dev)**, click **New Pad**, select **Flutter** from the menu. Paste this code and click **▶ Run**:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First App',
      theme: ThemeData(colorSchemeSeed: Colors.deepPurple),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('My First Flutter App'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Hello, World!',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {},
                child: const Text('Tap Me!'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

### Try These Changes Right Now
- Change `Colors.deepPurple` to `Colors.orange` or `Colors.green`
- Change `'Hello, World!'` to your own message
- Change `'Tap Me!'` to any button text you want
- Change `28` (font size) to `40` — watch the text grow!

---

## State: Making Apps Interactive

**State** is data your app remembers that can change. A counter number, a shopping cart total, a checked checkbox — all state.

| Widget Type | Changes? | Example |
|------------|----------|---------|
| `StatelessWidget` | Never changes | A logo, a static label |
| `StatefulWidget` | Can change! | A counter, a form, a toggle |

When state changes, you call `setState(() { ... })` — this tells Flutter to redraw the screen.

### Counter App (StatefulWidget Example)

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: CounterScreen()));

class CounterScreen extends StatefulWidget {
  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _count = 0;  // This is the STATE

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: $_count', style: const TextStyle(fontSize: 32)),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () => setState(() => _count--),
                  child: const Text('−'),
                ),
                const SizedBox(width: 20),
                ElevatedButton(
                  onPressed: () => setState(() => _count++),
                  child: const Text('+'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

Paste this into DartPad and try the +/− buttons!

---

## App Ideas by Difficulty

| Level | App Idea | Key Concepts |
|-------|---------|-------------|
| Beginner | **Color changer** — tap buttons to change background color | ElevatedButton, Container, setState |
| Beginner | **Name display** — type your name and see it appear large | TextField, Text, setState |
| Intermediate | **Counter with +/− and reset** | Row, StatefulWidget, multiple buttons |
| Intermediate | **To-do list** — add and check off tasks | ListView, TextField, Checkbox |
| Advanced | **Quiz app** — 5 questions, track score | Column, score state, conditional Text |
| Advanced | **Recipe browser** — tap a dish to see ingredients | ListView, Card, Navigator |

---

## Assignments
- Flutter First App Assignment(use the selected grade’s private workspace)
- Interactive App Idea Builder(use the selected grade’s private workspace)

## Sources
- [flutter.dev](https://flutter.dev) — Official Flutter documentation
- [dartpad.dev](https://dartpad.dev) — Free in-browser editor
- [dart.dev](https://dart.dev) — Official Dart language site
- [pub.dev](https://pub.dev) — Flutter package library
- Wikipedia: [Flutter (software)](https://en.wikipedia.org/wiki/Flutter_(software))
- Wikipedia: [Dart (programming language)](https://en.wikipedia.org/wiki/Dart_(programming_language))
- [flutter.dev/docs/get-started/codelab](https://flutter.dev/docs/get-started/codelab) — Official beginner codelab
