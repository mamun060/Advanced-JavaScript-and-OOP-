// sort an array in place
// use case: when you need to order elements

let numbers = [10, 20, 14, 50, 100];
let numbersTwo = ['10', '20', '14', '50', '100'];
function bubbleSort(arr){
    for( let i = 0; i < arr.length ;  i++){
        for(let j = i; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
bubbleSort(numbers);
console.log(numbers);
console.log(numbers.sort((a, b)=> b - a));
console.log(numbersTwo.sort());

