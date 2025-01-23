// Q - Map vs forEach 

// forEach Used to transform an array by creating a new array with the results of applying a given function 
// to each element of the original array. Returns a new array.

const students = [
    {
        id: 1,
        name: "Raju"
    },
    {
        id: 2,
        name: "Popi"
    },
    {
        id: 3,
        name: "Munni"
    },
    {
        id: 4,
        name: "Aysha"
    },
    {
        id: 5,
        name: "Osman"
    },
    {
        id: 6,
        name: "Nayeem"
    },
    {
        id: 7,
        name: "Sahad"
    },
]

students.forEach((student)=>{
    if (student.id == 5){
        console.log(student);
    }
})

students.map((item, key)=>{
    if (item.id == 5){
        console.log(item);
    }
})