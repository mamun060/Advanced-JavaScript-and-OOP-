const promise1 = Promise.resolve(`Promise 1`)

const promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`promise 02`)
    },2000);
})

console.log('First Console');

// promise1.then((res)=>{
//     console.log(res);
// })

// promise2.then((res)=>{
//     console.log(res);
// })

// Multiple promise call syntax return promise an array using Promise.all mehtod
Promise.all([promise1, promise2]).then((response)=>{
    console.log(response);
})

// return first promise which win the race. Promise.race() 
Promise.race([promise1, promise2]).then((response)=>{
    console.log(response);
})