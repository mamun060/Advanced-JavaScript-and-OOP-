// declare class 

class myClass {
    // constructor use kore oi class property nite hobe
    constructor(id, name, roll){
        this.id = id;
        this.name = name;
        this.roll = roll;
    }
    
    display(){
        console.log("ID : " + this.id + " Name: " + this.name + " Roll: " + this.roll);
    }
}

// declare object under class value reuse 

var objectOne = new myClass(1, 'Md Al Mamun' , 21);
var objectTwo = new myClass(2, 'Md Al Mamun' , 22);
var objectThree = new myClass(3, 'Md Al Mamun' , 23);


objectOne.display();
objectTwo.display();
objectThree.display();