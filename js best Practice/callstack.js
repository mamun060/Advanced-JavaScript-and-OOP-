// here I write js call stack life cycle
function a(){
    setTimeout(() => {
        console.log('Hello A')
    }, 5000);
}

function b(){
   setTimeout(() => {
        console.log('Hello B');
   }, 4000);
}

function c(){
    setTimeout(() => {
        console.log('Hello C');
    }, 3000);
}

function d(){
    setTimeout(() => {
        console.log('Hello D');
    }, 2000);
}


a()
b()
c()
d()