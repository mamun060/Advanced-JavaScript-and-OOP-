async function firstFunction(){
    return `Hello First Function`
}
async function SecondFunction(){
    const func = await firstFunction()
    return func
}

// console.log(firstFunction());
console.log(SecondFunction())
console.log('Hello Third Function');