// console.log("Promise explain");

// const promise = new Promise((resolve, reject) => {
//     let success = false
//   setTimeout(() => {
//     if(success) {
//         resolve("Promise resolved!");
//     } else {
//         reject("Promise rejected!");
//     }
//   }, 1000);
// });

// promise.then((message) => {
//   console.log(message); // Output: "Promise resolved!" after 1 second
// })
// .catch((error) => {
//   console.error(error);
// })
// .finally(() => {
//     console.log("Promise is settled (either resolved or rejected)");
// });


const paymentSuccess = true;
const marks = 90;

function enrolled(){
    console.log("Course enrolled");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(paymentSuccess){
                resolve("Enrollment successful");
            } else {
                reject("Enrollment failed");
            }
        }, 1000);
    })
    return promise;
}

function progress(){
    console.log("Course is in progress");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(marks >= 80){
                resolve();
            } else {
                reject("Course progress failed");
            }
        }, 3000);
    })
    return promise;
}

enrolled()
.then(progress)
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Course process is settled");
})