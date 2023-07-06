// promise definition or Producing code
const newPromise = new Promise(function(resolve, reject){
    let roll = 21;
    setTimeout(() => {
        if(roll === 21){
            resolve('Yes this is Mamun');
        } else {
            reject('Not Mamun!')
        }
    }, 2000);
})

// promise call or consuming code 
newPromise
.then(
    function(success){
        console.log(success);
    }
)
.catch(
    function(error){
        console.log(error);
    }
)