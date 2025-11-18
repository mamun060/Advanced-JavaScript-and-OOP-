// Variables declared inside a function using var, let, or const
// are only accessible inside that function.

// Example:
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // Error
console.log(b); // Error
console.log(c); // Error

// Why? => A function creates its own isolated environment → local scope