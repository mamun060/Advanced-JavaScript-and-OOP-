const arr = [1,2,3,4,5,6,7,8,9];

var total = arr.reduce(( sum, item, idx, fullarray )=>{
    console.log(`Total Sum is: ${ sum += item } + Item is: ${item} + Index is ${idx} + Main Array is ${fullarray}`);
    return sum += item;
}, 0);


var value = arr.reduce(( sum, item, idx, fullarray )=>{
    return this;
}, 0);


console.log(total);
console.log(value);