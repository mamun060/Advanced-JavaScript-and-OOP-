// 5. What is the difference between == and === in JavaScript?

// == match qual data left and right, for example
const roll = 21;
if(roll == '21' || roll == 21){
    console.log("Student name is Mamun");
} else {
    console.log("Not Found");
}

// === check all data types and data
// if(roll === '21')  // wrong cz data type interger
if(roll===21){
    console.log("Roll: 21");
} else {
    console.log("21 Not Found!");
}

