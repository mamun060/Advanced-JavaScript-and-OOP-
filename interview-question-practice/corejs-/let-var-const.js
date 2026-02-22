// var is global scoped or function scoped
// let and const are block scoped

// var can be re-declared and updated
// let can be updated but not re-declared
// const cannot be updated or re-declared

var name = "Al Mamun";
console.log(name);

var name = "Raju Ahmed";
console.log(name);

let nameTwo = "Al Mamun";
console.log(nameTwo);
nameTwo = "Raju Ahmed";
console.log(nameTwo);

const nameThree = "Al Mamun";
console.log(nameThree);
// nameThree = "Raju Ahmed"; // This will throw an error because const cannot be updated