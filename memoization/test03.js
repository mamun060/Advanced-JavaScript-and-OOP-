// JavaScirpt memoization using for speed optimization 

const prevFiboValues = [];
function fibo(n){

    if( prevFiboValues[n] !=  null){
        return prevFiboValues[n]
    }

    let result;
    if( n <= 2 ){
        result = 1
    } else {
        result = fibo( n - 1 ) + fibo( n - 2)
    }
    prevFiboValues[n] = result
    return result
}



console.log(fibo(100));