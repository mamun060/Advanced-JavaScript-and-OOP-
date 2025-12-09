class Employee{
    constructor(id, name, salery, designation, address){
        this.id = id;
        this.name = name;
        this.salery = salery;
        this.designation = designation;
        this.address = address;
    }
    
    detail(){
       console.log("ID: "+ this.id+"\nName: "+this.name+"\nSalery: "+this.salery+" BDT"+"\nDesignation: "+this.designation+"\nAddress: "+this.address+'\n'
        );
    }
}

var em1 = new Employee(1001, 'Raju Ahmed', '20,000', 'Junior Developer', 'Nikunjo-2');
var em2 = new Employee(1002, 'Noor Hossain', '30,000', 'UX Desinger', 'Mirpur-12');
var em3 = new Employee(1003, 'Md Alauddin', '60,000', 'Lead Developer', 'Dhaka');
var em4 = new Employee(1001, 'Ayatullah Khanemi', '20,000', 'Junior Developer', 'North Badda');

em1.detail()
em2.detail()
em3.detail()
em4.detail()
