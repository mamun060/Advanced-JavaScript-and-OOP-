// write a closure example

// we know that the closure is a function in lexical environment and access to its outer function scope
// so this is the parent function

function Parent(){
    const name = "Mamun";
    console.log("I am the parent function");
    // create lexical environment
    function child(){
        const name = "Arishfa";
        console.log("I am the child function");
        console.log("Child function name is:", name);
        console.log("Parent function name is:", name); 
    }
    // must be return the child function
    return child;
}

const childFunction = Parent();
childFunction();
