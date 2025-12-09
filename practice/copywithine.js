// The copyWithin() method copies array elements to another position in the array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.



const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Tar mane aikhane array ar 3rd &  4th position na amader array ar 1sst & 2nd element copy hoye bose jabe finally new array return korbe
// tar mane output hobe .. "Banana","Orange","Banana","Orange","Apple"

let result = fruits.copyWithin(2, 0)
console.log(result);