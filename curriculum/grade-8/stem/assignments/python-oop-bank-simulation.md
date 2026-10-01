# 💳 Project: Python Object-Oriented Banking Simulation

**Course:** Grade 8 STEM (Computer Science Track)  
**Deliverables:** `bank_sim.py`, `accounts.json`, and Project Write-Up  

---

## 🎓 Learn & Review

- **Explainer video:** [Search Khan Academy science coding for “Python Object-Oriented Banking Simulation”](https://www.youtube.com/results?search_query=Khan+Academy+science+coding+Python+Object-Oriented+Banking+Simulation)
- **Reference:** [Python tutorial: classes](https://docs.python.org/3/tutorial/classes.html)
- **Reference:** [Python tutorial: errors and exceptions](https://docs.python.org/3/tutorial/errors.html)
- **Full resource shelf:** Semester Resource Library (use an educator-provided text or equivalent reference)

> Use these to review the idea, not to copy answers. Afterward, explain one example in your own words before starting.

---
## 🏛️ Project Mission & Overview

Modern financial systems run on clean, resilient, and secure object-oriented software architectures. In this project, you will build an interactive, command-line banking simulation using **Object-Oriented Programming (OOP) in Python**.

You will design a class hierarchy that models real-world bank accounts, enforces data encapsulation to protect balances and personal information, calculates interest, handles overdraft fees, logs chronological transaction records, and saves state to a persistent JSON file so data is never lost when the program closes.

---

## 🏗️ Architecture & Technical Requirements

### 1. Class Hierarchy
Your application must define at least three interacting classes:

```
               ┌───────────────────────────┐
               │        BankAccount        │  (Base Class)
               ├───────────────────────────┤
               │ - account_number: str     │
               │ - owner_name: str         │
               │ - _balance: float         │
               │ - _pin: str               │
               │ - transactions: list[dict]│
               ├───────────────────────────┤
               │ + deposit(amount)         │
               │ + withdraw(amount, pin)   │
               │ + get_balance(pin)        │
               │ + get_statement()         │
               └─────────────┬─────────────┘
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
  ┌───────────────────────┐     ┌───────────────────────┐
  │    SavingsAccount     │     │    CheckingAccount    │
  ├───────────────────────┤     ├───────────────────────┤
  │ - interest_rate: float│     │ - overdraft_limit: flt│
  ├───────────────────────┤     ├───────────────────────┤
  │ + apply_interest()    │     │ + withdraw(amount, pin│  (Overrides base)
  └───────────────────────┘     └───────────────────────┘
```

### 2. Detailed Class Specifications

#### Base Class: `BankAccount`
*   **Constructor `__init__(self, account_number, owner_name, initial_balance=0.0, pin="0000")`**:
    *   Store account number, owner name, protected balance (`_balance`), and protected PIN (`_pin`).
    *   Initialize an empty list `self.transactions` to record transaction logs.
*   **Methods**:
    *   `deposit(self, amount)`: Validates that `amount > 0`. Increases balance, records a deposit dictionary `{ "type": "DEPOSIT", "amount": amount, "timestamp": ... }`, and returns the updated balance.
    *   `withdraw(self, amount, pin)`: Validates the PIN. Checks that `amount > 0` and sufficient funds exist. Decreases balance, records a withdrawal, and returns the withdrawn amount. Raises or displays an informative error on insufficient funds or bad PIN.
    *   `get_balance(self, pin)`: Verifies PIN before returning balance.
    *   `get_statement(self)`: Prints a neatly formatted chronological ledger of all deposits and withdrawals.

#### Subclass: `SavingsAccount(BankAccount)`
*   Inherits from `BankAccount` using `super().__init__(...)`.
*   Adds `self.interest_rate` (e.g., `0.04` for 4% annual yield).
*   Method `apply_interest(self)`: Calculates monthly interest (`_balance * (interest_rate / 12)`), deposits it into the account, and records `"INTEREST_PAYMENT"` in the transaction log.

#### Subclass: `CheckingAccount(BankAccount)`
*   Inherits from `BankAccount`.
*   Adds `self.overdraft_limit` (e.g., `$100.00`) and an overdraft fee (e.g., `$25.00`).
*   Overrides `withdraw(self, amount, pin)`: Allows withdrawal up to `_balance + overdraft_limit`. If withdrawal exceeds current balance, charges the overdraft fee and flags an `"OVERDRAFT_WITHDRAWAL"` in transaction history.

#### Class: `BankManager`
*   Maintains a dictionary of accounts: `{ account_number: AccountObject }`.
*   Provides methods to create accounts, search by account number, transfer funds between accounts, and persist data.
*   `save_to_json(filepath)`: Serializes all accounts and transaction history to an `accounts.json` file.
*   `load_from_json(filepath)`: Restores accounts and balances from `accounts.json` on program startup.

### 3. Interactive CLI Interface
Provide a user-friendly command-line loop:
1. Open New Account (Savings or Checking)
2. Deposit Funds
3. Withdraw Funds
4. Transfer Funds Between Accounts
5. View Account Balance & Statement
6. Apply Monthly Interest (Admin / End-of-Month)
7. Save & Exit

---

## 📝 Deliverables & Submission Checklist

- [ ] `bank_sim.py`: Complete, well-commented Python source code adhering to PEP 8 standards.
- [ ] `accounts.json`: Sample output file showing saved state with at least 2 accounts and 5 transactions.
- [ ] Git Commits: Demonstrate Git workflow with meaningful commits (e.g., `feat: create base BankAccount class`, `feat: implement CheckingAccount with overdraft`, `fix: handle invalid PIN input`).
- [ ] Learner’s Write-Up: Complete the reflection section below explaining encapsulation, inheritance, and edge cases.

---

## 📊 Rubric & Evaluation

| Criteria | Proficient (4) | Exemplary (5) |
|---|---|---|
| **OOP Architecture** | Properly creates classes, attributes, methods, and subclasses using `super()`. | Clean separation of concerns; elegant inheritance hierarchy; polymorphic method overrides. |
| **Data Integrity & Encapsulation** | Balances are protected; deposits/withdrawals enforce positive numbers and PIN validation. | Robust error handling with custom exceptions or clear validation loops; no negative balance leaks without overdraft. |
| **Persistence (File I/O)** | Can save and load basic account data to a text or JSON file. | Flawless serialization/deserialization of accounts and full transaction logs using the `json` module. |
| **CLI User Experience** | Menu works without crashing during standard input. | Intuitive, clear prompts; currency formatting (`$X,XXX.XX`); handles invalid string/float input gracefully. |

---

## ✍️ Learner’s Project Write-Up Space

*(Fill in your responses and reflections below once your code is built and tested)*

### 1. Code Architecture Summary
*Describe how your classes interact and how data flows from user input to class methods:*

### 2. Encapsulation & Security Reflection
*Why is it dangerous in banking software to leave attributes like `balance` or `pin` completely public (e.g., `account.balance = 1000000`)? How did your code prevent unauthorized direct modification?*

### 3. Edge Cases & Testing Record
*List three edge cases you tested (e.g., entering negative deposit amounts, incorrect PIN 3 times, withdrawing beyond overdraft limit) and explain how your program handled each:*
1. **Edge Case 1:**
2. **Edge Case 2:**
3. **Edge Case 3:**

### 4. Git Commit History
*Paste the output of `git log --oneline -n 5` showing your progression:*
```bash
# Paste git log here
```

## Simulation Only
Use fictional account labels, mock credentials, and pretend balances. Python attribute conventions are not security controls; do not store real PINs or financial data. A toy banking project is not production financial software. Represent money with integer cents or decimal arithmetic and test overdraft fees explicitly.
