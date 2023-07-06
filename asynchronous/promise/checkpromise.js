// promise define
const promise = new Promise(function(myResolve, myReject){
    let value = 21;
    setTimeout(() => {
        if(value === 21){
            myResolve('Success')
        } else {
            myReject('Failed!')
        }
    }, 2000);
});

function display(value){
    console.log(value);
}

// call promise 
promise
.then(function(value){
    display(value)
})
.catch(function(error){
    display(error)
})