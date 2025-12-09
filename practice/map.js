// map aitah aktah array method jeita array ar sob gula element ar opore apply kore ..map((callback function, this key ar value)=>(body)) 

const arr = [1,2,3,4,5,6,7,8,9];

const result = arr.map((idx)=>{
    return idx * idx
});

// argument work.. 1st argument is callback method, 2nd arg index,,, 3rd agr holo full array ta return kore 
const value = arr.map((item, index, fullarr)=> {
    return `Item is ${item} + Index is ${index} + FullArray is ${fullarr}`
})

var newArr = arr.map((item, index, fullArr)=>{
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)
})

const data = [
    {
        id: 1,
        name: 'Mamun',
        department: 'CSE'
    },
    {
        id: 2,
        name: 'Mehedi',
        department: 'CSE'
    },
    {
        id: 3,
        name: 'Rayhan',
        department: 'CSE'
    },
]


const newData = data.map((item, key)=> {
    return `ID NO: ${item.id} + Name: ${item.name} + Department : ${item.department}`
})


console.log(result);
console.log(value);
console.log(newData);