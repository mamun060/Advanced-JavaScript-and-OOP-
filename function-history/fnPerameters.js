function CalculateExpense( salaryAmount, houseRent , glossary, medical){
    while(salaryAmount > 0 ){
        amount =  houseRent + glossary + medical;
        const saving = salaryAmount - amount;
        return `Your Monthly saving amount is : ${saving}`
    }
    return "sorry you're unemployeed";
}

console.log('====================================');
console.log(CalculateExpense(10000, 5000,2000,1000));
console.log('====================================');

// rest perameter - rest perameter allow function to take infinete arguments is an array 

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
  
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log('====================================');
console.log(x);
console.log('====================================');

function arraySum(){
    var sum = 0;
    for( i=0; i < arguments.length ; i++){
        sum += arguments[i];
    }
    return `The summation is :${sum}`;
}

const arrsum = arraySum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(arrsum);


