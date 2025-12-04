// 10. What are higher-order functions, and can you give an example?
// Take one or more functions as arguments (callback functions), or
// Return a function as its result

//HOF
function greeter(name, formatter){
    return formatter(name)
}

function formatter(name){
    return name.toUpperCase()
}

console.log(greeter("mamun", formatter));

// another

function ParentSum(first, second, sum){
    return sum(first, second);
}

function Summation(first, second){
    return first + second;
}

console.log(ParentSum(5000, 5000, Summation));
