// Lexical Scope = a function can access variables from its parent scope
// even if the parent has finished executing.

// Example:
function outer() {
  let count = 0;

  function inner() {
    console.log(count);
  }
  inner();
}
outer();

// inner() can access count because it is inside outer()’s lexical scope.