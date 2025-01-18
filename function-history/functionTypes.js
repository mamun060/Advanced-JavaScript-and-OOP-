// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

function Student(value){
    return value;
}

// so we create first then we used that function by calling anywhere
console.log(Student("I am a CSE Student also"));

// Function expression 
const result = function (a,b) {
    return `Roll is: ${a ** b}`;
}

console.log(result(2,3));


// The Function() Constructor
const constructorFunction = new Function("a" , "b" , "return a * b")
console.log(constructorFunction(5, 4));


// function hoisting 
myName()

function myName(){
    console.log("My name is Raju ");
}

// Self-Invoking Functions
(function(){
    console.log("this is self invoked function");  
}())