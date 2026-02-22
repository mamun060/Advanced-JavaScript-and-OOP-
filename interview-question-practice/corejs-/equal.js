// What is the difference between == and === in JavaScript?
// == (Loose Equality): Compares values after type coercion (conversion).
// === (Strict Equality): Compares both value and type without type coercion.

console.log(5 == "5"); // true (type coercion happens)
console.log(5 === "5"); // false (no type coercion)