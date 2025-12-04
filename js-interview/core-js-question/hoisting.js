// Q - Explain hoisting in JavaScript with examples.

// Hoisting is a JavaScript mechanism where variables and 
// function declarations are moved to the top of their containing scope 
// during the compilation phase before the code is executed. 
// This means that you can use variables and functions before they are declared in the code.

console.log(hoistedVar); // Output: undefined
var hoistedVar; 

console.log(letVar); // ReferenceError
let letVar = 10; // TDZ until declaration 

console.log(constVar); // ReferenceError
const constVar = 0; // TDZ until declaration 

demofunc(); // Output: "This function has been hoisted."
function demofunc() {
    console.log("This function has been hoisted.");
}