// 7. What are promises and how do they work?

// Promise is an object that represent result of an asynchronous operation
// which may complete in the future

const myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("task completed!")
    }else {
        reject("Task is not complete!")
    }
})

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("Done"))


// another example 
// asnchronouse -> immediate run -> resolve or reject -> handle it then, catch, finally
function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name: "Mamnu"})
        }, 1000)
    })
}

getUser().then((result)=>{
    console.log(result);
})


// without webApi or Aysnchronouse 
console.log("Hi!");
