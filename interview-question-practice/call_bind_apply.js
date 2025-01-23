// call method 
let name = {
    firstName: "AL",
    lastName: "Mamun",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

name.printFullName()

let name2 = {
    firstName: "Aysha",
    lastName: "Khandoker",
}

// function borrowing - borrowing means one object method use in another object
name.printFullName.call(name2)