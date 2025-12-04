// Q - What is the difference between var, let, and const?

// var is global scope and let, const is block scope 

// let scope example
// global scope and we can access it anywhere, change its value and redeclare it
var globalVar = "I am a global variable";
console.log(globalVar);
var globalVar = "I can be changed";
console.log(globalVar);

// let is block scope
let blockLet = "I am a block scoped variable";
console.log(blockLet);
// let blockLet = "I can be changed too"; // Error: Identifier 'blockLet' has already been declared because let only reasigns not redeclares not redeclare
blockLet = "I can be changed too";
console.log(blockLet);

// const is block scope and its value cannot be changed
const constVar = "I am a constant variable";
console.log(constVar); 