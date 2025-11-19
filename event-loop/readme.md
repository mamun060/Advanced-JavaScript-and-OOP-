### JavaScript Event Loop — Deep & Clean Explanation
Overview
JavaScript is a single-threaded, synchronous language — meaning it can run only one line at a time on the call stack. But it still handles asynchronous tasks like timers, network requests, and promises without blocking.
This is possible because of the Event Loop.

### JavaScript Runtime Architecture
┌──────────────────────┐
│      Call Stack      │
└──────────────────────┘
           ▲
           │
┌──────────────────────┐
│     Event Loop       │
└──────────────────────┘
           ▲
           │
┌──────────────────────┐
│  Web APIs / Node APIs│
└──────────────────────┘
           ▲
           │
┌──────────────────────┐         ┌───────────────────────────┐
│     Task Queue       │         │     Microtask Queue       │
│ (Macrotasks)         │         │ (Promises, MutationObs)   │
└──────────────────────┘         └───────────────────────────┘


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
