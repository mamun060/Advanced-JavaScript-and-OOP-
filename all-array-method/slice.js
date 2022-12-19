const fruits = ["Banana", "Orange", "Apple", "Mango"];
const raju = [...fruits]

raju.shift();
fruits.slice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
console.log(raju);