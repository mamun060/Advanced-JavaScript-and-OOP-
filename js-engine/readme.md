# ⚙️ How the JavaScript Engine Works

A JavaScript engine is a program or an interpreter that executes JavaScript code. The most famous engine is **Google's V8** (used in Chrome and Node.js).

---

## 🛠️ The Architecture of a JS Engine

The engine doesn't just "read" code; it transforms it through several complex stages to make it understandable for the computer's CPU.

### 1. Parsing (The Blueprint)
The engine starts by reading the source code. The **Parser** breaks the code into tokens and builds a data structure called the **Abstract Syntax Tree (AST)**.



### 2. Compilation (JIT - Just-In-Time)
Unlike C++ (which is compiled before running) or Python (which is primarily interpreted), JavaScript uses **JIT Compilation**.
* **Interpreter:** Quickly starts executing code (converts AST to Bytecode).
* **Compiler (Optimizer):** While the code runs, it looks for "hot segments" (code that runs repeatedly) and recompiles them into highly optimized **Machine Code**.

### 3. Execution (The Action)
The execution happens using two main components:
* **Memory Heap:** Where variables, objects, and functions are stored (Memory allocation).
* **Call Stack:** Where the engine keeps track of where we are in the code (Execution context).

---

## 🔄 The Execution Pipeline

| Stage | Process | Output |
| :--- | :--- | :--- |
| **Parsing** | Source Code → Tokens | AST (Abstract Syntax Tree) |
| **Interpretation** | AST → Bytecode | Intermediate Code |
| **Optimization** | Bytecode → Machine Code | Optimized Binary |
| **Execution** | CPU runs the code | Final Result |

---

## 🧠 Mutable vs Immutable in Engine Memory

When the JS Engine handles data, it treats memory differently based on the type:

1.  **Primitives (Immutable):** Strings, Numbers, Booleans. 
    * Stored in the **Stack**. 
    * If you "change" a string, the engine simply points the variable to a *new* memory address. The original string remains unchanged until garbage collected.
    
2.  **Objects/Arrays (Mutable):** * Stored in the **Heap**.
    * When you modify an array, the engine goes to that specific memory address and updates the value directly.

---

## 🚀 Popular JS Engines
* **V8:** Google Chrome, Node.js, Brave.
* **SpiderMonkey:** Firefox (The first-ever JS engine).
* **JavaScriptCore:** Safari (Nitro).
* **Chakra:** Internet Explorer / Old Edge.

---

> **Key Takeaway:** The JS Engine is why JavaScript is fast. It constantly watches your code as it runs and optimizes it on the fly!