function callbackExample(callback){
    console.log("this is the first function");
    callback();
}

function secondFunction(){
    console.log("This is the second function");
}

function display(display){
    console.log(display);
}

function Summation(first, second){
    return first + second;
}

display(Summation(10, 20));
callbackExample(secondFunction);


getData(function(a){
    getMoreData(function(b){
        getMoreData(function(c){
            console.log(a, b, c);
        })
    })
})

function getData(callback){
    setTimeout(function(){
        callback("Data from getData ");
    }, 1000);
}

function getMoreData(callback){
    setTimeout(function(){
        callback("Data from getMoreData");
    }, 1000);
}

