// main function

function mainfunc(one){
    console.log('This is main function');
    setTimeout(function(){
        console.log(one(arr));
    },2000)
}


let arr = [ 5, 18, 40, 17, 165, 121, 12];
var firstNum = 10;
var second = 50;

function add(value){
    let result = 0;
    for (let x of value){
        result += x;
    }
    return result;
}


// call main funciton 
console.log(add(arr));
mainfunc(add)