// 3. What are closures in JavaScript?

// javaScript closure is a parent child relationship between lexical scope, 
// that means if the parent function execute is close till work the child function and access parent scope 

function Parent(){
    const father = "Md selim Mia";
    const mother = "Farbin Begum";
    function child(){
        const name = "Md Al Mamun";
        console.log(`My parent: ${father} & ${mother} - My name is ${name}`);
    }
    return child
}

Parent()
const family = Parent()
family()
