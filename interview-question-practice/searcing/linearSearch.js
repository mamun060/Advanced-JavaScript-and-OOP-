function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

const numbers = [10, 23, 45, 70, 11, 15];
const target = 70;
console.log(linearSearch(numbers, target))

// time complexity: O(n)
// space complexity: O(1) 