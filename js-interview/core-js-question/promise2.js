const myPromise = new Promise((resolve, reject)=>{
    const status = true;
    if(status){
        resolve("Task is complete");
    } else {
        reject("Task is not complete")
    }
})

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Done!");
})

