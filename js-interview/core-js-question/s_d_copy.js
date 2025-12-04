// 4. Explain the difference between shallow copy and deep copy.

// shallow copy create a new object 
// but nested objects are not copied Instead, they are referenced.

const Student = {
    name: "Mamun",
    roll: "21",
    reg: "56",
    city: "Dhaka",
    batch: "E-89"
}

const shallow = {...Student} // shallow copy create a new object
shallow.university = "DIU";
console.log(Student);
console.log(shallow);


const original = {
    name: "mamun",
    skills: ["React"]
}

const shallowCopy = {...original}
shallowCopy.skills.push = "Nextjs";
console.log(shallowCopy);

const employess = [
    {name:"Mamum"},
    {name:"Mamum"},
    {name:"Mamum"},
    {name:"Mamum"},
    {name:"Mamum"},
]

const shallowNexted = {...employess}
shallowNexted[5] = {
    name: "Aysha"
}
console.log(shallowNexted);

// A deep copy creates a new object and
// copies all nested objects/arrays fully, not by reference.

const deepOriginal = {
    name: "Mamun",
    skills: ["React"]
}

const deep = JSON.parse(JSON.stringify(deepOriginal))
console.log(deep);
deep.skills.push("Django")
console.log(deepOriginal);
console.log(deep);

