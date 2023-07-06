// this is kind of callback function becasue the setTimeout hold the function specific time and receivce a function as a perameter
setTimeout(function(){
    console.log('I love javasript');
}, 1000);

console.log("First run");

// we can pass function name direct in setimeout method as a perameter. But remember when you pass function as a perameter dont use perenthesis
setTimeout(myfuction, 2000);

function myfuction(){
    console.log('This is my function');
}