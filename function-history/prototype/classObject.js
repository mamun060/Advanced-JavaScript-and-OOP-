class Soldier {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(this.name + " attacks!");
    }
}

// but behind the scenes, it's still using prototypes
// example 

function Soldier(name){
    this.name = name;
}

Soldier.prototype.attack = function(){
    console.log(`this is attach function named: ${this.name}`);
}