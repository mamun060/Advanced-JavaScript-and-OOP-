// Example of lexical chain is one kind of clouse ( parent child relationship)
let a = 10; // global scope
function outer(){
    let b = 20; // parent scope 
    function inner(){
        let c = 30; // child own scope
        console.log(a, b, c);
    }
    function innerJunior(){
        // console.log(a, b, c); // getting Reference error because (C) is not found here because own scope
        console.log(a, b);
    }
    inner();
    innerJunior();
}

outer();
// Here lexical chain: inner() → outer() → global
