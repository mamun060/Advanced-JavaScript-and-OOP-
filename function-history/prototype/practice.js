function Game(name){
    this.name = name;
    this.attack = function(){
        console.log(this.name + ' is attacking');
    }
}

var game1 = new Game('Game1');
var game2 = new Game('Game2');
game1.attack(); // Game1 is attacking
game2.attack(); // Game2 is attacking
console.log( game1.attack === game2.attack ); // false, each instance has its own attack method
