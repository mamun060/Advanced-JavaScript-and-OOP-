// closure means Parent child relation in a function 
function parent(){
    let name = "Al Mamun";
    function child(){
        name = "Shisir";
        console.log(name);
    }
    child();
}

parent();
