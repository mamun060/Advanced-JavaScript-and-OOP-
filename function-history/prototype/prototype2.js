function Animal(name){
    this.name = name;
}

Animal.prototype.child = function(){
    console.log(this.name + ' is a child');
}

var dog = new Animal('Dog');
dog.child(); // Dog is a child
var cat = new Animal('Cat');
cat.child();
console.log( cat.child === dog.child);


