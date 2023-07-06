const paymentSuccess = true;
const marks = 70;

function enroll(callback){
    console.log('Course enrollment is progress!');
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        } else {
            console.log('Payment failed!...');
        }
    }, 2000);
}

function progress(callback){
    console.log('Course on progress!');
    setTimeout(function(){
        if(marks >= 60){
            callback()
        } else {
            console.log('You could not get the certificate!');
        }
    }, 3000)
}

function getCertificate(){
    console.log('Preparing your certificated!');
    setTimeout(() => {
        console.log('Congrates you got the certificate');
    }, 1000);
} 

enroll(function(){
    progress(getCertificate)
})