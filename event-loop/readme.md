# The JavaScript Event Loop: A Deep Dive

## Overview

JavaScript is fundamentally a **single-threaded**, **synchronous** language. This means it can only execute one piece of code at a time in a specific order. However, it can perform non-blocking, asynchronous operations like fetching data from a server or handling user input.

This seemingly contradictory behavior is made possible by the JavaScript runtime environment (like a browser or Node.js) and its core component: the **Event Loop**.
***IN Bangla***
**JavaScript-এর Event Loop হলো এমন একটি মেকানিজম যা নির্ধারণ করে আপনার কোড কখন এবং কীভাবে এক্সিকিউট হবে। জাভাস্ক্রিপ্ট হলো Single-threaded, অর্থাৎ এটি একবারে মাত্র একটি কাজ করতে পারে। কিন্তু আমরা যখন API কল করি বা টাইমার সেট করি, তখন জাভাস্ক্রিপ্ট আটকে না থেকে কাজ চালিয়ে যায়—এই ম্যাজিকটিই ঘটে Event Loop-এর কারণে।**

**১. মূল উপাদানসমূহ (The Core Components)**
ইভেন্ট লুপ বোঝার আগে এই ৩টি জিনিস জানা জরুরি:

1. Call Stack: এখানে আপনার কোডগুলো একটার পর একটা জমা হয় এবং এক্সিকিউট হয়। (LIFO - Last In, First Out)।
2. Web APIs / Node APIs: ব্রাউজারের দেওয়া কিছু ফিচার যেমন setTimeout, fetch, বা DOM Events। এগুলো স্ট্যাকের বাইরে কাজ করে।
3. Callback Queue (Task Queue): যখন কোনো অ্যাসিনক্রোনাস কাজ (যেমন টাইমার) শেষ হয়, তখন তার কলব্যাক ফাংশনটি এখানে এসে অপেক্ষা করে।
4. Event Loop: এর কাজ হলো চেক করা—যদি Call Stack খালি থাকে, তবে সে Callback Queue থেকে কাজ নিয়ে স্ট্যাকে পাঠিয়ে দেয়।

**২. Microtasks vs Macrotasks**
জাভাস্ক্রিপ্টে সব কাজ সমান নয়। কাজের গুরুত্ব অনুযায়ী এদের দুটি ভাগে ভাগ করা হয়েছে:

- Macrotasks (বা শুধু Tasks): 
এগুলো হলো সাধারণ কাজ যা একটু সময় নিতে পারে।
- উদাহরণ: setTimeout, setInterval, setImmediate, I/O অপারেশন।

- Microtasks: এগুলোর প্রায়োরিটি Macrotasks-এর চেয়ে অনেক বেশি। ইভেন্ট লুপ পরের কোনো Macrotask ধরার আগে সব Microtask শেষ করে।
- উদাহরণ: Promise.then(), process.nextTick (Node.js), MutationObserver।

---

## JavaScript Runtime Architecture

The runtime consists of several key parts that work together to execute your code.

```js
                ┌──────────────────┐
                │    Call Stack    │
                └──────────────────┘
                        ▲
                        │  (Event Loop pulls tasks)
                ┌──────────────────┐
                │    Event Loop    │
                └──────────────────┘
                   ▲           ▲
                   │           │
     ┌──────────────────┐   ┌──────────────────┐
     │ Microtask Queue  │   │  Macrotask Queue │
     │ (Promises, etc.) │   │ (Timers, events) │
     └──────────────────┘   └──────────────────┘
                   ▲           ▲
                   │           │
           ┌─────────────────────────┐
           │  Web APIs / Node APIs   │
           └─────────────────────────┘

```
#### Call Stack 
```
├── Call Stack
│     ├── Executes JS code line-by-line
│     ├── Synchronous execution
│     ├── Follows LIFO (Last In, First Out)
│     └── Must be empty before async callbacks run
│
├── Web APIs / Node APIs
│     ├── Handles async operations outside JS engine
│     ├── Examples:
│     │      ├── setTimeout / setInterval
│     │      ├── fetch / AJAX / XHR
│     │      ├── DOM events
│     │      ├── File system (Node.js)
│     │      └── Timers & network I/O (Node.js)
│     └── Sends completed tasks to queues
│
├── Microtask Queue (High Priority)
│     ├── Contains:
│     │      ├── Promise.then()
│     │      ├── Promise.catch()
│     │      ├── async/await continuation
│     │      ├── queueMicrotask()
│     │      └── MutationObserver
│     ├── Runs BEFORE any macrotask
│     └── Runs ALL microtasks until queue is empty
│
├── Macrotask Queue (Task Queue)
│     ├── Contains:
│     │      ├── setTimeout callbacks
│     │      ├── setInterval callbacks
│     │      ├── DOM event callbacks
│     │      ├── MessageChannel
│     │      └── setImmediate (Node.js)
│     ├── Lower priority than microtasks
│     └── Event Loop runs ONE macrotask per cycle
│
└── Event Loop
      ├── The central scheduler
      ├── Checks if Call Stack is empty
      ├── If empty → run ALL Microtasks
      ├── After microtasks → run ONE Macrotask
      ├── Repeats this cycle continuously
      └── Makes JS appear asynchronous despite a single thread
```
---
### Starvation of Callback Function (Macrotask Starvation)
Microtasks are like VIP tasks.
They always run before macrotasks.

If microtasks keep generating more microtasks:

➡️ Macrotasks never get CPU time.
➡️ Timers, events, callbacks get “starved”

This is callback starvation.
---