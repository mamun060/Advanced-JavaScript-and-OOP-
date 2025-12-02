## JavaScript Hoisting & Temporal Dead Zone (TDZ)

## Overview
JavaScript **hoisting** is a behavior where variable and function declarations are moved to the top of their scope during the **compilation phase** (before code execution).

**TDZ (Temporal Dead Zone)** is the time between entering a scope and the point where a `let`/`const` variable is initialized. ( মানে let/const দিয়ে Declare করা ভ্যারিয়েবল যতোহ্মণ না পর্যন্ত কোনো ভ্যালু assing করা হবে, ততোহ্মণ সময় টাতে থাকবে সেই সময়টাকেই tzd বলে)

Understanding hoisting and TDZ helps avoid common bugs in JavaScript.

---

## Hoisting

### What Is Hoisting?
Hoisting means:
- JavaScript **moves declarations to the top** of their scope  
- But **not initializations**  

This happens automatically during the **memory creation phase** before the code is executed.
---

