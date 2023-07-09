// write below a fibonanci series

// this is beauty of memoization funciton

const prevValues = []

function fibonanci(n){
    
    if( prevValues[n] != null){
        return prevValues[n]
    }

    let result;

    if( n <=2 ){
        result = 1
    } else {
        result = fibonanci( n - 1) + fibonanci( n - 2);
    }
    prevValues[n] = result
    return result
}


console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));
console.log(fibonanci(1000));