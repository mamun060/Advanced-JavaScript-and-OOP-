// immutable = value cannot be changed directly. In JavaScript, primitive values are immutable, 
// while arrays and objects are mutable.

const name = "Al Mamun";
console.log(name);

const arr = name.split(" ");
console.log(arr);
arr[0] = "Raju";
console.log(arr);
console.log(name); // original string is unchanged because it's immutable
