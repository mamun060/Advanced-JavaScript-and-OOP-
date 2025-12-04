// 6. How does the event loop work in JavaScript?

// js event loop follow call stack philoshopy
// callstack -> Event Loop -> web API (micro stack & macro stack)

console.log("Raw javascript");

setTimeout(()=>{
    console.log("Set Time out");
}, 0)

Promise.resolve().then(()=>{
    console.log("Print Promise resolve");
})



