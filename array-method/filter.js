//The name kind of gives it away, doesn't it? You use this method to filter the array based on conditions you provide. The filter() method also creates a new array.

let arrNum = [15, 39, 20, 32, 30, 45, 22];

function checkValue(num){
    return num % 2 === 0;
}

let newArray = arrNum.filter(checkValue)
// OR
let updateArray = arrNum.filter((value)=> {
    return value < 20;
});

console.table(arrNum)
console.table(newArray)
console.table(updateArray)