// this function is actual callback function
function displayResult(a, b){
    console.log(`Multification is: ${a} and Summation is ${b}`);
}

function calculator(x, y, callback){
    let result = x * y ;
    let result2 = x + y ;
    callback(result, result2);
}

// this kind of syntax to pass callback function to another way
calculator(5,5, function(a, b){
    console.log(`Multification is: ${a} and Summation is ${b}`);
})

// remcomanded syntax for callback function
calculator(10,10, displayResult)