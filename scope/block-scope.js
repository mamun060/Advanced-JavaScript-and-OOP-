// A block means anything inside { }, like:

// if , for, while, switch
// plain { } block
// let and const follow block scope.

// Example: 
if (true) {
  let x = 1;
  const y = 2;
}

console.log(x); // Error
console.log(y); // Error

// var DOES NOT follow block scope:
if (true) {
  var z = 3;
}
console.log(z); // 3 (still accessible!). This is why let and const are safer.