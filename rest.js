const raju=(...arr)=>{
    let x = 0;
    for( let arg of arr){
        x = x + arg;
    }
    console.log(x);
}
 
raju(10,5,4,58);

// another rest peramitter practice way
const popi=(...a)=>{
    let sumetion = 0;
    for(let b of a){
        sumetion += b;
    }
    console.log(sumetion);
}

popi(4, 9, 16, 25, 29, 100, 66, 77);

// using forEach
const munni = (...c)=>{
    let sum = 0;
    for(let r of c){
        sum += r;
    }
    console.log(sum);
}

munni(4, 9, 16, 25, 29, 100, 66, 77);