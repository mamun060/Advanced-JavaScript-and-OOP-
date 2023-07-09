class raju {
    constructor(name, roll, reg, board, dept){
        this.name = name;
        this.roll = roll;
        this.reg = reg;
        this.board = board;
        this.dept = dept
    }

    detailName(){
        console.log("Name: "+this.name);
    }
}

const obj = new raju("Raju Ahmed", 20);

obj.detailName();