// what is javascript object?
// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, monitor etc.


// By creating instance of object
var secondObject = new Object();  
secondObject.id=101;  
secondObject.name="Ravi Malik";  
secondObject.salary=50000;  

console.log(secondObject);

//  By using an Object constructo
function third(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
}  
    
const third = new third(103,"Vimal Jaiswal",30000);  
console.log(third);