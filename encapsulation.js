class Student{
    constructor(){
        var name;
        var marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks){
        if( marks < 0 || marks > 100 ){
            console.log('Invalid Marks');
        } else {
            this.marks = marks
        }
    }

}

var std = new Student();
std.setName('Raju Ahmed');
std.setMarks(180)

console.log(std.getName());
console.log(std.getMarks());