// const raju = (call) =>{
//     call()
// }

// const popi = () => {
//     console.log("This is callback function");
// }

// raju(popi)

// function diplay sequence

function test(call, calltwo, callthree){
    call()
    calltwo()
    callthree()
}

function raju(){
    console.log("Hay Raju how are you dear?");
}

function popi(){
    console.log("Hey Dear sister how are you?");
}

test(popi, raju, popi)