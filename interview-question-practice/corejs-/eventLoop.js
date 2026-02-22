console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise (Microtask)");
});

console.log("4. End");

// Output:
// 1. Start - synchronous code runs first
// 4. End - synchronous code runs first
// 3. Promise (Microtask) - microtasks run after the current synchronous code, but before macrotasks
// 2. Timeout (Macrotask) - macrotasks run after microtasks and the current synchronous code has finished