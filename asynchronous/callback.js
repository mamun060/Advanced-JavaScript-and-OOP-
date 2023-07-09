// A callback function is a function passed as an argument to another function 


function raju(callback){
    setTimeout(function(){
        console.log('Hello Callback funciton how are you!');
        callback()
    }, 2000);
}


function popi(){
    console.log('Hello Main call function');
}


raju(popi);


// lets try again 


const a = (callback) => {
    setTimeout(() => {
        console.log('This is second time check callback function');
        callback();
    }, 3000);
}


const b= ()=> {
    console.log('This is second callback!');
}

a(b);
