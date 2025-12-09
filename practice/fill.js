// The fill() method fills specified elements in an array with a value.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fill( first value is array element, '
// 2nd value ta holo koyta element bad diye dibe from main array list, 
// 3rd value ta holo main array ar koto number index a amar fill korte chai oitah dite hobe aikhane )

let result = fruits.fill("Kiwi", 3, 4);

console.log(result);


// let's create another array to list 
const car = ['a' , 'b' , 'c' , 'd' , 'e'];

let value = car.fill('TOYOTA Pruis' , 'TOYOTA Land Qruizer', 3, 4, 5);

console.log(value);
