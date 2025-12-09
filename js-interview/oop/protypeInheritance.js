function person(name){
    this.name = name;
}

person.prototype.greet = function(){
    console.log(`Hello, I am ${this.name}`);
}

const john = new person("John")
john.greet()