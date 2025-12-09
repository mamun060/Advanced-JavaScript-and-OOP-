//The entries() method returns an Array Iterator object with key/value pairs

const car = ['bmw','toyota','audi','suzuky'];

const entrie = car.entries();

console.log(entrie);

// Iterator 
for( let x of entrie ){
    console.log(x);
}

// another way to practice entries() method

const fruits =  ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

for(let x of fruits.entries()){
    console.log(x);
}

