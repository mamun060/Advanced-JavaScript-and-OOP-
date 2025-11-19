// js execution have two phase: 1. Memory allocation phase. 2, Code component
// var functional scope ==> Hoisted (initialized as undefined) - 

console.log(raju);
var raju; // Memory allocation phase - Hoisted (initialized as undefined)
console.log(raju);
var raju; // re-declare 

raju = "Is My Name"; // assign
console.log(raju);
raju = "Raju is my nick name"; // re-assign
console.log(raju);
 
// let: block scope. Hoisted (NOT initialized — TDZ)	
// Can not re-declare but can re-assign

// console.log(fname); // temporary dead zone, so get Reference error 
let fname; // initialize but not assign 

fname = "Md Al Mamun"; // assign 
console.log(fname); // now give output 

fname = "Md Al Mamun"; // re-assign 
console.log(fname); // now give output 


// const: block scope. Hoisted (NOT initialized — TDZ)	
// Can not re-declare or re-assign
// console.log(lname); // TDZ, so get Reference error
// const lname; // SyntaxError 
const lname = "Raju"; // initialize and assign - same time 
console.log(lname);
// lname = "r"; // can't re-assing
