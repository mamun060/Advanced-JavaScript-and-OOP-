const promise =  new Promise(function (myResolve, myReject){
    let name = 'Raju';

    if(name == 'Raju'){
        myResolve("Ok")
    } else {
        myReject("Error");
    }
});


promise.then(
    response=>{
        console.log('Ok');
    }
)

promise.catch(error=>{
    console.log(error);
})


const promisetwo = new Promise(function(Resolve, Reject){
    const x = 20;
    if(x==20){
        Resolve("OK")
    }else {
        Reject(error)
    }
})

promisetwo.then(
    response=>{
        console.log("ok");
    }
);

promisetwo.catch(
    error=>{
        console.log(error);
    }
)