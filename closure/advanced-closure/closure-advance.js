// closure in a function within lexical environment
// closure is a function that has access to its own scope, the outer function's scope,
// Function bundled with its lexical environment is known as a closure. 
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting
function outer(){
    const result =  a + b;
    console.log("Outer function result is:", result);
}

let a = 10;
let b = 20;
outer();

function outerFn(){
    let outerVar = "I am in the outer of scope"
    function innerFn(){
        console.log(outerVar);
    }
    return innerFn;
}

const inner = outerFn();
inner()
outerFn()()
outerFn()

function outerFunction(){
    let first = 10;
    let second = 20;
    let result = 0;
    result = first + second;
    console.log("Outer function result is:", result);
    function innerFunction(){
        let innerResult = first * result;
        console.log("Inner function result is:", innerResult);
    }
    return innerFunction;
}

outerFunction();

// Here, I am actually creating a closure.
// When outerFunction() returns innerFunction, JavaScript does not destroy:
// first, second, result
// Even though outerFunction has finished running, the returned innerFunction still remembers the outer scope values.
// This is a closure.

let checkInner = outerFunction();
checkInner();