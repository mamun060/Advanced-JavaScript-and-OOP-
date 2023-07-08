const paymentSuccess = true;
const marks = 90;

function enroll(progress){
    console.log('Course enrollment is progress');
    const promise = new Promise(function(resolve, reject){
       setTimeout(function(){
            if(paymentSuccess){
                resolve(progress)
            } else {
                reject('Payment Failed!')
            }
       }, 2000)
    })
    return promise
}

function progress(certificated){
    console.log('Your course is progressed!');
    const promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            if( marks >= 80 ){
                resolve(certificated)
            } else {
                reject('You could not get the certificated!')
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

// enroll()
// .then(progress)
// .then(getCertificate)
// .catch(function(error){console.log(error);})

async function groupOfCourse(){
    const enrolled = await enroll(progress)
    const progressed = await  progress(getCertificate)
    console.log( enrolled, progressed);
}

groupOfCourse();