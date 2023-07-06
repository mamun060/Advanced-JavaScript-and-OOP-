// create an array 
const myArray = [4, 1, -20, -7, 5, 9, -6];

// create a callback function for revome negetive element from array
function revomeNegEl(number, callback){
    const newArray = [];
    for( const x of number){
        if(callback(x)){
            newArray.push(x);
        }
    }
    return newArray
}

// create function for check positive element and pass this function as a callback 
function callbackFun(x){
    if( x >= 0){
        return x;
    }
}

const positiveNum = revomeNegEl(myArray, callbackFun);

console.log(positiveNum);