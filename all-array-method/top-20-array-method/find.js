// return the first element that matches a condition 
// use case: when you need to find a specific item in an array 

let numbers = [19,21,14,50,100]
console.log(numbers);

let firstEven = numbers.find((num)=>{
    return num % 2 === 0;
})
console.log(firstEven);
