const paymentSuccess = true;
const marks = 70;

function enroll(){
    console.log('Course enrollment is progress');
    const promise = new Promise(function(resolve, reject){
       setTimeout(function(){
            if(paymentSuccess){
                resolve()
            } else {
                reject('Payment Failed!')
            }
       }, 2000)
    })
    return promise
}

function progress(){
    console.log('Your course is progressed!');
    const promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            if( marks >= 80 ){
                resolve()
            } else {
                reject(`You could not get the certificated!`)
            }
        }, 3000);
    })
    return promise
}

function getCertificate(){
    console.log('Certificated are preparing!');
    const promise = new Promise(function(){
        setTimeout(function(){
            console.log('Congrate your certificated');
        }, 1000)
    })
    return promise;
}

async function course(){
    try {
        await enroll()
        await progress()
        const message = await getCertificate();
        
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

course();