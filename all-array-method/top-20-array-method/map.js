// create a new array by applying a function each element
// use case: when you need to transform an array without modifying the original

let numbers = [10,20,14,50,100]
console.log(numbers);
let doubled = numbers.map((num)=> num * 2)
console.log(doubled);

