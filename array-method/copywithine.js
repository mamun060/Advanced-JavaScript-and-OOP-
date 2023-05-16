//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

const arry = ['a', 'b', 'c', 'd', 'e'];

// copy to index 1 the element at index 3

// copyWithin( 1, 3) first perameter ta holo jei position a copy kore bosabe oi position index 
// second perameter ta  holo sei index jei index ar data ta copy kore perameter first ar index a copy kore niye jabe
console.log(arry.copyWithin(1, 3));