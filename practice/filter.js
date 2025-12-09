// Filter kind of map but it's return a value if value is true only either not return 

const arr = [1,2,3,4,5,6,7,8,9];


// array ar protita element a logic apply korbe and true hole return korbe either false hole return korbena
const result = arr.filter((item)=>{
    return item % 2 === 0;
})


const value = arr.filter((item, idx, fullarr)=>{
    return `Element Serial ${item % 2=== 0 } + Index no is ${idx} + Full array is ${fullarr}`
});

console.log(result);
console.log(value);