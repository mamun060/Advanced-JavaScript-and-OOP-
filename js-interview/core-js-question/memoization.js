const cache = []

function BigSum(n){
    if(cache[n] != null){
        return cache[n];
    }
    let result;
    if(n <= 2){
        result = 1;
    } else {
        result = BigSum(n - 1, cache) + BigSum( n - 2, cache)
    }
    cache[n] = result
    return result
}

console.log(BigSum(5));
