### What are Promises and how do they work?
**A Promise in JavaScript is an object that represents the result of an asynchronous operation, which may complete in the future.**

## Example of async things:

*API call
*Database request
*File upload
*Timer

*A Promise lets you write async code in a cleaner, non-callback-hell way.
----
### Promise States
**A Promise has 3 states:**

1. pending: → The async operation has started but not finished
2. -fulfilled: → The operation succeeded → resolve() was called
3. rejected: → The operation failed → reject() was called
---
### How Promises Work (Simple Flow)
```js
Step 1: JavaScript starts an async task
Step 2: A Promise is returned immediately
Step 3: When the task finishes → it calls:

resolve(value) → success

reject(error) → failure

Step 4: You handle it with:

.then() → for success

.catch() → for errors

.finally() → always runs
```

### Example
```js
const myPromise = new Promise((resolve, reject) => {
    
    let success = true;

    if(success) {
        resolve("Task completed!");
    } else {
        reject("Something went wrong");
    }
});

myPromise
    .then(result => console.log(result))   // "Task completed!"
    .catch(error => console.log(error))    // if error
    .finally(() => console.log("Done"));
```

```js
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Mamun"});
        }, 2000);
    });
}

getUser().then(user => console.log(user));
```