function myCustomIterator(array){
    let index = 0;
    return {
        next: function(){
            if(index < array.length){
                return { value: array[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    }
}

const myArray = ['Apple', 'Banana', 'Cherry'];
const customIterator = myCustomIterator(myArray);

console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());