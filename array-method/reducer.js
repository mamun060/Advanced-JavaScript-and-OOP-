// This method is used to apply a callback function to each element in an array and return a single element

let arrNum = [15, 39, 20, 32, 30, 45, 22];

let newArry = arrNum.reduce((prevElement, currentElement)=>{
    return currentElement = prevElement + currentElement 
}, 0)

console.log(newArry)