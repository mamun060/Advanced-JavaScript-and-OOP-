const newArray = new Array();

newArray[0] = 'Mamun';
newArray[1] = 'Faruk';
newArray[2] = 'Mehedi';

// target client
const targetC = 'Faruk';

// find value from using linear search

function findValue(arr, targetClient){
    for( let i = 0 ; i < arr.length; i++ ){
        if( arr[i] === targetClient){
            return `${arr[i]} valu index is ${i}`;
        }
    }

    return -1;
}


console.table(newArray);
console.log(findValue(newArray, targetC));