const numbers = [1, 2, 3, 4, 5];
// map() => holo aktah HOF - because it takes a function as an argument and applies that function to each element in the array, returning a new array with the results.
// (n) => n * ; holo aktah callback function 
const doubleNumbers = numbers.map((n) => n * 2);
console.log(doubleNumbers);