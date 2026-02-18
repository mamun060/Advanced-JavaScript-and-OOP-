// Returning the index of the first matching element
// use case: When you need the position of an item, note the value 

let numbers = [10,20,21,50,100]
console.log(numbers);

let index = numbers.findIndex((num)=>{
    return num % 3 === 0;
})
console.log(index);

