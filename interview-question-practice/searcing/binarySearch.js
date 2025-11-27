function binaraySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
        left = mid +1;
    } else {
        right = mid - 1;
    }
  }
  return -1;
}

function bubbleSort(arr){
    let i;
    let j;
    let temp;
    for(i = 0; i < arr.length; i++){
        for( j= 0; j < arr.length; j++){
            if(arr[i] < arr[j+1]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            } 
        }
    }
}

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = [34, 7, 23, 32, 5, 62];
bubbleSort(numbers);
console.log(numbers);
const target = 7;
console.log(binaraySearch(bubbleSort(numbers), target));

// time complexity: O(log n)
// space complexity: O(1)
