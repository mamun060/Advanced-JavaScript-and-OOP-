// Q - pass by value vs pass by reference 

// pass by value:  it's pass the variable value to the function arguments
// and the variable if changes to function inner not effected to the variable original values

function passByValue(a, b){
    a += 5; 
    b += 5;
    return a * b;
}

var a = 10;
var b = 20;

console.log(`Before passing value -> First value: ${a} - second value: ${b}`);
console.log(passByValue(a, b));
console.log(`After passing value -> First value: ${a} - second value: ${b}`);


// Reference by value: basically array or object passed to the function,
// when array or object passed to the function as arguments then if the function changes the values
// in function inner then the original array or object will be effected the orginal array or objects

function refByValue(arr){
    for(var i = 0; i < arr.length ; i++){
        arr[i] = arr[i] * 2;
    }
}

let arr = [10, 20, 30, 40, 50];
console.log(`Before Reference by value: ${arr}`);
refByValue(arr); // here is modified the original array 
console.log(`After Reference by value: ${arr}`);

