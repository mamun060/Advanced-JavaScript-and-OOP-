// array.prototype.find

var number = [ 1,2,3,4,5,6,7,8,9,10];
const findId = 5;

const result = number.find(function(findIdx){
     if(findIdx === findId){
        return findIdx;
     }
})

const result2 = number.slice(",");

console.log(result);
console.log(result2);