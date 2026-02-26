// generator is function which can be paused and resumed later ondemand 
// i mean generator can hold mustiple return value and can be paused and resumed later on demand

function* generator(arr){
    let index = 0;
    while( index < arr.length){
        yield arr[index];
        index++;
    }
}

const gen = generator([1,2,3,4,5]);

for(let i of gen){
    console.log(i);
}