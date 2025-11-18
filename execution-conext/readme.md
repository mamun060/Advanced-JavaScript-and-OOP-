# 🧩 Basic Differences
Keyword	Scope	Hoisting	Re-declare	Re-assign
var	Function scope	Hoisted (initialized as undefined)	✅ Yes	✅ Yes
let	Block scope	Hoisted (NOT initialized — TDZ)	❌ No	✅ Yes
const	Block scope	Hoisted (NOT initialized — TDZ)	❌ No	❌ No

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
Global Scope
├── var (function scoped)
├── let (block scoped)
└── const (block scoped)

Hoisting:
var     → hoisted + initialized as undefined
let     → hoisted (TDZ until declaration line)
const   → hoisted (TDZ until declaration line)
