function delayFunc(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer); 
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, delay)
    }
}

function searchContent(query){
    console.log(`Searching for: ${query}`);
}

const debounced = delayFunc(searchContent, 1000);

debounced("Hello World");
debounced("Hello World");
debounced("Hello World");
// Only the last call will execute the searchContent function after 1 second.