function myIterator(arr){
    let index = 0;

    return {
        next: function(){
            if( index < arr.length ){
                return { value: arr[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    }
}

const myArr = ['Karim', 'Rahim', 'Jabbar'];
const iterator = myIterator(myArr);

console.log(iterator.next()); // { value: 'Karim', done: false }
console.log(iterator.next()); // { value: 'Rahim', done: false }
console.log(iterator.next()); // { value: 'Jabbar', done: false }