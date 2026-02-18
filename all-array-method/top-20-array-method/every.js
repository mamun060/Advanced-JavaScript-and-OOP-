// check if all elements meet a condition
// use case: When you need to ensure all items pass a test

let numbers = [10,20,141,50,100]
let result = numbers.every((num)=> {
    return num % 2 === 0 
})

console.log(result);
