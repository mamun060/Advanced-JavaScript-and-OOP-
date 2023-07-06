function calculator(a , b , callback){
    let result = a + b ;
    callback(result)
}

// callback function
function display(result){
    console.log(`The summation is: ${result}`);
}

calculator(1000, 2000, display)