class Student{
    constructor(roll, reg, dept, university, address){
        this.roll       = roll;
        this.reg        = reg;
        this.dept       = dept;
        this.university = university;
        this.address    = address;
    }
    info(){
        console.log(this.roll);
    }
}

let student1 = new Student(1001);

student1.info()