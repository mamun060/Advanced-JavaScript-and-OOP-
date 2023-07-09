function Raju(name, address){
    this.name = name;
    this.address = address
}

Raju.prototype.nationality = 'Bangladesh';
Raju.prototype.hometown = 'Cumilla';

var raj = new Raju('Md Raju Ahmed', 'Nikunjo-2');
console.log(raj.name, 'from', raj.nationality);
console.log(raj.hometown);