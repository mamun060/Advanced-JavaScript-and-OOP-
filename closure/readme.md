# JavaScript Closures
## Overview
A **closure** is a feature in JavaScript where an inner function remembers the variables of its outer function, even after the outer function has finished executing. ( child methond remember the parent function variable, even
the parent function execution is done)

Closures allow:
- Data privacy  
- Persistent state  
- Cleaner modular code  
---

## What Is a Closure?
A closure is created when:
1. A function is defined inside another function  
2. The inner function accesses the outer function’s variables  
3. The outer function returns the inner function  

**Formula:**  
> Closure = Inner Function + Outer Function’s Scope

---

## 📦 Basic Example

```js
function Parent() {
    const name = "Mamun";

    function child() {
        console.log("Parent name is:", name);
    }

    return child;
}

const childFunction = Parent();
childFunction(); // Output: Parent name is: Mamun
```