const raju = [10, 20, 15, 48, 12, 18, 75];

let result = raju.filter(adult);

function adult(age){
    console.log( age >= 10 );
}

console.log(result);