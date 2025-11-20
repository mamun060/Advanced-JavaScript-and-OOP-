### What JavaScript Cannot Do Alone
```js
Without Web APIs, JavaScript by itself cannot perform:

->setTimeout() / setInterval()
->DOM events (click, scroll, input)
->fetch() / AJAX network requests
->Promises (microtasks)
->Geolocation
->Local storage & session storage
->Canvas drawing
->WebSockets
->Notifications
->File system access
-> Many other asynchronous features

Why?
Because the JavaScript Engine (V8, SpiderMonkey) does NOT have these functions built-in.
The browser provides them through Web APIs.
```
### Example diagram
```js
         ┌──────────────┐
         │   Call Stack  │ ← executes code
         └───────┬──────┘
                 │
                 ▼
   ┌─────────────────────────┐
   │        Web APIs         │  ← browser: timers, DOM, fetch
   └───────────┬────────────┘
               │
               ▼
   ┌─────────────────────────┐
   │     Callback Queue      │ ← async callbacks wait here
   └───────────┬────────────┘
               │
               ▼
   ┌─────────────────────────┐
   │      Event Loop         │ ← moves tasks to stack
   └─────────────────────────┘
```

### Example with Fetch (Web API)
```js
console.log("1");

fetch("https://api.example.com")
  .then(() => console.log("2"));

console.log("3");
```