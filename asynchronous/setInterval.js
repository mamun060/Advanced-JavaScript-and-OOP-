// passing function as perameter. this is kind of callback function.
setInterval(myfuction, 1000);

function myfuction(){
    let d = new Date();
    let time = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log(` ${time}: ${min} : ${sec} `);
}