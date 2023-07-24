// what is class ?
// In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions.

class Student {
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age
    }

    details(){
        console.log(`Id: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new Student(1, 'Mamun', 25);

student1.details();