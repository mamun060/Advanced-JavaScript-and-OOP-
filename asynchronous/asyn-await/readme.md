# JavaScript Async/Await

## 1. What is Async/Await?

**Async/Await** is a modern JavaScript syntax that allows you to write **asynchronous code** in a style that looks **synchronous**.  
It is built on top of **Promises** and makes asynchronous operations easier to read and maintain.

- `async` → Marks a function as asynchronous. Always returns a **Promise**.  
- `await` → Pauses execution inside an `async` function until the **Promise resolves**.
---

## 2. Why Async/Await?

- Avoids **callback hell** from nested callbacks  
- Cleaner and more readable code than `.then()` chains  
- Works well with `try/catch` for error handling  

---

## 3. Syntax

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```