// Leak = variable becomes accessible OUTSIDE its intended scope
// A variable breaks its expected scope rules and becomes available somewhere it should NOT be.
// Scope = visibility rules. Who can see the variable?
// Leak = breaking scope rules. Variable appears where it shouldn't be visible.

{
    var name = "Raju";
    let fname = "Raju";
    const lname = "Raju";
}

console.log(name);
// console.log(fname);
// console.log(lname);

