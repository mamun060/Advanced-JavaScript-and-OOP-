// throttling ensures a function is called at most once in a specified time period, even if it is triggered multiple times.

function throttling(func, delay){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            func.apply(this, args);
        }
    }
}

function searchContent(query){
    console.log(`Searching for: ${query}`);
}

const throttled = throttling(searchContent, 1000);

throttled("Hello World");
throttled("Hello World");
throttled("Hello World");
// Only the first call will execute the searchContent function immediately, and subsequent calls within 1 second will be ignored.