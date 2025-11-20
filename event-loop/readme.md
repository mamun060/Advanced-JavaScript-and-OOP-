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
                                       │
                            ┌──────────────────┐
                            │    Event Loop    │
                            └──────────────────┘
                              ▲             │
                              │             ▼
┌─────────────────────────┐   │   ┌──────────────────────┐
│     Microtask Queue     │◄──┘   │  Web APIs / Node APIs│
│ (Promises, async/await) │       └──────────────────────┘
└─────────────────────────┘                   │
                                              ▼
                                    ┌──────────────────┐
                                    │     Task Queue   │
                                    │   (Macrotasks)   │
                                    └──────────────────┘
```

### Key Components
1️⃣ Call Stack
        Executes JavaScript code line-by-line
        Follows LIFO (Last In, First Out)
        Synchronous operations run here

2️⃣ Web APIs / Node APIs
    Handles asynchronous tasks:
        setTimeout, setInterval
        DOM events
        Fetch / AJAX / XHR
        Promises (microtasks)
        File system operations (Node.js)
        These tasks are executed outside the call stack.

3️⃣ Task Queue (Macrotask Queue)
    Stores callbacks from:
        setTimeout
        setInterval
        DOM event handlers
        MessageChannel
        setImmediate (Node.js)
        Executed after microtasks.

4️⃣ Microtask Queue
    Contains:
        Promise.then()
        Promise.catch()
        async/await continuation
        MutationObserver
        Microtasks have higher priority than macrotasks.

5️⃣ Event Loop
    The “manager” that keeps everything running.
    Its job:
        Check if the Call Stack is empty
        If empty → run all Microtasks
        When Microtasks are done → run one Macrotask
