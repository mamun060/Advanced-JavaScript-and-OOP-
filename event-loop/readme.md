# The JavaScript Event Loop: A Deep Dive

## Overview

JavaScript is fundamentally a **single-threaded**, **synchronous** language. This means it can only execute one piece of code at a time in a specific order. However, it can perform non-blocking, asynchronous operations like fetching data from a server or handling user input.

This seemingly contradictory behavior is made possible by the JavaScript runtime environment (like a browser or Node.js) and its core component: the **Event Loop**.

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

➡️ Macrotasks never get CPU time
➡️ Timers, events, callbacks get “starved”

This is callback starvation.
---