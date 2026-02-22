# JavaScript Fundamentals: Mutability vs Immutability

This document explains the core difference between **Mutable** and **Immutable** data types in JavaScript, focusing on why you can access string values by index but cannot change them.

---

## 1. Immutable Data Types (Strings)
In JavaScript, **Strings** are **Immutable**. This means once a string is created, its individual characters **cannot be changed or overwritten**.

### Example of Immutability:
Even though you can access a character using index notation, you cannot modify it.

```javascript
const name = "Al Mamun";

// This will NOT work
name[0] = "Z"; 

console.log(name); // Output: "Al Mamun" (The "A" remains "A")
``` 

## 2. Mutable Data Types (Arrays)
```js
let letters = ["A", "l", " ", "M", "a", "m", "u", "n"];

// ✅ This WILL work
letters[0] = "Z"; 

console.log(letters); // Output: ["Z", "l", " ", "M", "a", "m", "u", "n"]
```
## How to "Change" an Immutable String?
```js
let name = "Al Mamun";
let nameArray = name.split(""); // Convert to Array

nameArray[0] = "Z"; // Modify the Array
name = nameArray.join(""); // Convert back to String

console.log(name); // Output: "Zl Mamun"
```

- Shallow copy copies only the first level and shares nested references, while deep copy clones the entire object hierarchy with no shared memory references.

