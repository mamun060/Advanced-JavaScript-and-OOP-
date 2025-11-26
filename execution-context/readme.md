## 🧩 Basic Differences
| **Keyword** | **Scope**      | **Hoisting**                           | **Re-declare** | **Re-assign** |
| ----------- | -------------- | -------------------------------------- | -------------- | ------------- |
| **var**     | Function scope | Hoisted *(initialized as `undefined`)* | ✅ Yes          | ✅ Yes         |
| **let**     | Block scope    | Hoisted *(NOT initialized — TDZ)*      | ❌ No           | ✅ Yes         |
| **const**   | Block scope    | Hoisted *(NOT initialized — TDZ)*      | ❌ No           | ❌ No          |
| **function**| Function scope | 

### Function scope and hoisting: function scope is function scope
```js
//Function Expression → Hoisted but NOT initialized → TDZ
hello(); // ReferenceError (hello is not defined)

var hello = function() {
  console.log("Hi");
};

// let/const Function Expression → hoisted + TDZ
hello(); // ReferenceError

const hello = function() {
  console.log("Hi");
};

// Function Declaration → Fully hoisted
hello(); // OK

function hello() {
  console.log("Hi");
}
```

## 🧠 Scope Explained

```js
// 1. var → Function Scoped
// Accessible anywhere inside the function where it is declared.

function test() {
  var x = 10;
  console.log(x); // 10
}
console.log(x); // Error

// But var ignores block scope:

if (true) {
  var a = 5;
}
console.log(a); // 5

// 2. let & const → Block Scoped

// Only accessible inside { }.

if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // Error
console.log(y); // Error
```

## Hoisting Explained
```js
// 1. var Hoisting (Initialized as undefined)
console.log(x); // undefined
var x = 10;

// Behind the scenes:

var x;  // hoisted
console.log(x);
x = 10;

// 2. let & const Hoisting (In TDZ)

// They are hoisted but NOT initialized, so using them before declaration causes an error.

console.log(a); // ReferenceError
let a = 20;

Same for const:

console.log(b); // ReferenceError
const b = 50;
```

## 🔒 Re-declaration & Re-assignment
var

✔ Re-declare
✔ Re-assign
```js
var x = 1;
var x = 2; // OK
x = 3;     // OK


let

❌ Re-declare
✔ Re-assign

let y = 10;
y = 20; // OK
// let y = 30; ❌ Error

const
❌ Re-declare
❌ Re-assign, but can mutate objects

const obj = { a: 1 };
obj.a = 99; // OK (mutation)
```

## Diagram — Scope & Hoisting (Simple View)
```js 
Global Scope
├── var (function scoped)
├── let (block scoped)
└── const (block scoped)

Hoisting:
var     → hoisted + initialized as undefined
let     → hoisted (TDZ until declaration line)
const   → hoisted (TDZ until declaration line)
```
---
### 3. What does “automatic hoisting” mean?
JS Engine Phase 1: Creation Phase

It reads your whole code (before executing it)

Builds Global Execution Context or Function Execution Context

Creates a memory space for all variables & functions

During this phase:

1. Function declarations: Stored fully (you can call them before writing them)

2. var: Created and initialized to undefined

3. let / const: Created but not initialized
👉 This “uninitialized time window” is the Temporal Dead Zone (TDZ)
---

### visual example
## 1. Memory Allocation Phase

In this phase, memory is allocated for all variables. Since we are using `let`, the variables are hoisted but kept in the **Temporal Dead Zone (TDZ)** until they are initialized.

![Memory Allocation Phase](https://media.geeksforgeeks.org/wp-content/uploads/20250926190233273714/1.webp)

---

## 2. Code Execution Phase

JavaScript is single-threaded, so it executes code **line by line**.

- **Line 1:** `let x = 2;` → `x` is assigned the value `2`.
- **Line 2:** `let y = x * x;` → JavaScript fetches `x`, computes `2 * 2`, and assigns `4` to `y`.
- **Line 3:** `console.log(y);` → prints `4` to the console.

![Code Execution Phase](https://media.geeksforgeeks.org/wp-content/uploads/20250926190347338322/3.webp)

---

## 3. Final Memory State

At the end of execution:

- `x` → `2`
- `y` → `4`

So `console.log(y)` outputs `4`.

![Final Memory State](https://media.geeksforgeeks.org/wp-content/uploads/20250926190417324362/4.webp)
