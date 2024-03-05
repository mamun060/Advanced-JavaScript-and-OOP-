let myPromise = new Promise(function(myResolve, myReject){
    myResolve() // when promise is successfully 
    myReject(); // when promise get error
})


// রিমোট কোনো সার্ভার থেকে বা একটু সময় লাগে এমন কোনো অপারেশন শেষ করার জন্যে জাভাস্ক্রিপ্ট অপেক্ষা না করে 
// বরং পরের অপারেশনে চলে যায়। এধরনের অপারেশন হচ্ছে অ্যাসিনক্রোনাস অপারেশন। 
// এখন এই অপারেশন ফেলে অন্য অপারেশনে চলে গেলেও জাভাস্ক্রিপ্ট ঠিকই এটাকেও ট্র্যাক করে রাখে। 
// আর এইজন্যেই জাভাস্ক্রিপ্ট প্রমিস(Promise) ব্যবহার করে।
// এখন প্রমিসের কাজ হচ্ছে এ ধরনের অ্যাসিনক্রোনাস অপারেশনকে হ্যান্ডল করা।

const test = (name) => {
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(name === "mamun"){
                console.log("Yes this is Mamun");
            } else {
                console.log("This is not Mamun!")
            }
        }, 1000)
    })
    return promise
}

const testtwo = (roll) => {
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(roll == 21){
                console.log(`Yes ${roll} is Mamun rolls`)
            } else {
                console.log("This is not Mamun roll")
            }
        }, 2000)
    })
    return promise
}

const testthree = (department) =>{
    const promise = new Promise(function(resolve, reject){
       setTimeout(function(){
            if(department === 'cse'){
                console.log(`Yes ${department} is Mamun's department`)
            } else {
                console.log("This is not Mamun's Department")
            }
       },3000)
    })
    return promise
}



// this is the way to chainning function to step ways setp check first

test("mamun")
.then(testtwo(21))
.then(testthree('cse'))
.catch(
    function(error) {
        console.log(error);
    }
)


// convert all promise to an array using race method .. syntax Promise.race()
Promise.race([test("mamun"), testtwo(21), testthree("cse")]).then(
    function(response){
        console.log(response);
    }
)

// Promise all
Promise.all([test("mamun"), testtwo(21), testthree("cse")]).then(
    function(response){
        console.log(response);
    }
)
