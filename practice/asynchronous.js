const raju =(myCallback)=>{
    myCallback();
}

const popi =()=>{
    console.log('This another way to implement callback');
}

raju(popi);

// setup asynchronous with setTimeOut
function asy(){
    console.log('This is asynchronous function with set time out');
}

setTimeout(asy, 2000);
setInterval(asy, 10000);