let arrNum = [15, 39, 20, 32, 30, 45, 22];

// Suppose you have an array arrOne where you’ve stored some numbers, and you’d like to perform some calculations on each of them. But you also don’t want to mess with the original array.

let newArr = arrNum.map((arr, index)=>{
    return 2 * arr;
});

console.table(newArr)