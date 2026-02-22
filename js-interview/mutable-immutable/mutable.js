// array and array b are the same reference, so when we change one, the other changes as well
// mutable = value can be changed directly and array and objects are mutable in JavaScript. 
// If you modify the original data in place, it is mutable.

const array = [1, 2, 3];
console.log(array);
array.push(4);
console.log(array);


const object = { name: "Al Mamun" };
console.log(object);
object.name = "Raju";
console.log(object);

// how to make it immutable? 
// we can use spread operator to create a new array or object instead of modifying the original one.
// freeze method to make an object immutable, but it only works for shallow objects, not nested objects.

const arrayTwo = [...array, 5];
console.log(arrayTwo);
console.log(array); // original array is unchanged


const objectTwo = { ...object, name: "Raju Ahmed" };
console.log(objectTwo);
console.log(object); // original object is unchanged