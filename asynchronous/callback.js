// A callback is a function passed as an arguemnt to another fuctnion, this technique allows a function to call another function 

// For example
function display(something){
    console.log(something);
}

// this is the callback function because when this function i will call automatically call the display function also
function summation( first , second){
    let result = first + second;
    display(result);
}

summation(10, 20)

// try another to implement callback function 
function fisrtFuntion(callback){
    console.log('This is main funciton body');
    callback()
}

function secondFunction(){
    console.log('This is second funcition body');
}

// system of callback function
setTimeout(secondFunction, 2000)
fisrtFuntion(secondFunction);