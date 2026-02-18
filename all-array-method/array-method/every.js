const age = [24]
let right_age = age.every(check_age)

function check_age(age){
    if(age >= 24){
        console.log(`Yes Mamun is ${age} years old`);
    }
}

console.log(right_age);
