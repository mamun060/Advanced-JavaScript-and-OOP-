// Q - map vs filter

// map means loop every object and print 

let employees = [
    {
        id: 1,
        name: "Raju",
        salary: 100,
        contact: 56565656,
        address: "test-address"
    },
    {
        id: 2,
        name: "Sourav",
        salary: 500,
        contact: 56565656,
        address: "test-address"
    },
]

employees.forEach((item)=>{
    console.log(item);
    
})

employees.map((item)=>{
    console.log(`Name: ${item.name} - Salary: ${item.salary}`);
})

const employee = employees.filter((item) => {
    return item.id == 1 
})

console.log(employee);




