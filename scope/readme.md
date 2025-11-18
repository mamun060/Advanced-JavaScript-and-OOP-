## Global Scope
```js
// A variable is global when it is declared outside any function or block.
// It can be accessed anywhere.

// Example:
var x = 100; // global variable
function demo() {
  console.log(x); // 100
}
console.log(x);   // 100

// Important Note:
// var, let, and const can all become global if declared outside blocks/functions.

// But difference:
var x = 1;   // adds to window object (browser)
let y = 2;   // does NOT a
```

## Function Scope
```js
// Variables declared inside a function using var, let, or const
// are only accessible inside that function.

// Example:
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c); // ❌ Error

// Why?
//  A function creates its own isolated environment → local scope
```

## Block Scope (let and const)
```js
// A block means anything inside { }, like:

// if , for, while, switch
// plain { } block
// let and const follow block scope.

// Example:
if (true) {
  let x = 1;
  const y = 2;
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error

var DOES NOT follow block scope:
if (true) {
  var z = 3;
}
console.log(z); // 3 (still accessible!)
// This is why let and const are safer.
```

## Lexical Scope (Closures)
```js
// Lexical Scope = a function can access variables from its parent scope
// even if the parent has finished executing.

// Example:
function outer() {
  let count = 0;

  function inner() {
    console.log(count);
  }
  inner();
}
outer();
// inner() can access count because it is inside outer()’s lexical scope.
```