const raju = (number) => {
    console.log(number);
}

const rajus = (num1, num2, myCallback) => {
    let sum = num1 + num2;
    myCallback(sum)
}


rajus(10,10,raju);


// lets try another callback function 
const callbck = (callbackfunction) => {
    callbackfunction();
}

const returncallback = ()=>{
    console.log("Hello Noor this is callback funciton you know?");
}

callbck(returncallback);

// so lets try another one 
function popi(osman){
    osman();
}

function munni(){
    console.log('You are my sweet sister! I love you sister');
}

popi(munni);