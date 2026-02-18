// check if at least one element meets a condition 
//use case: when you need to know if any item passes a test 

let numbers = [10,20,14,50,100]
const test = numbers.some((num)=>{
    return num > 500;
})
console.log(test);
