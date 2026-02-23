// memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

function memoize(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args); // create a unique key based on the function arguments
        if(cache[key]){
            console.log("Fetching from cache for arguments:", args);
            return cache[key]; // return cached result if it exists
        } else {
            console.log("Calculating result for arguments:", args);
            const result = fn.apply(this, args);
            cache[key] = result; // store the result in cache
            return result;
        }
    }
}

// Example usage:
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // This will be much faster due to memoization