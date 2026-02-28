function Debouncer(func, delay){
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
const debouncedFunction = Debouncer(() => {
  console.log('Function executed after delay');
}, 1000);

// Calling the debounced function multiple times
debouncedFunction();
debouncedFunction();
debouncedFunction();
// Only the last call will execute the function after 1 second.