// reduces an array to a single value
// use case: when you need to sum or aggregate data

let numbers = [10,20,14,50,100]
console.log(numbers);
let sum = numbers.reduce((acc, num)=> {
    return acc + num
}, 0);
console.log(sum);
