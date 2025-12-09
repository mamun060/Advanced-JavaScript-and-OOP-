let myPromise = new Promise(function(myResolve, myReject){
    let x = 22;

    if(x==20){
        myResolve("OK");
    } else {
        myReject("Error")
    }
});


function myDisplay(some){
    console.log(some);
}

myPromise.then(
    function(value){myDisplay(value);},
    function(error){ myDisplay(error);}
);