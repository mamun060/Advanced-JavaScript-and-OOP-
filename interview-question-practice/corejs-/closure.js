// Closure is a feature in javascript where an inner function remember the variable of outer function even after the outer function has been executed.

function Parent() {
    let father = "Al Mamun";
    function child(){
        let doughter = 'Arishfa Al Mehnaz';
        console.log(`Father: ${father},\nDoughter: ${doughter}`);
    }
    return child;
}

const childFunc = Parent();
childFunc();