 function* generator() {
    yield 1;
    yield 2;
    yield 3;
}   

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // undefined, done: true 

function* sayHello() {
    console.log("Start");
    yield "First Stop"; // এখানে ফাংশনটি থেমে যাবে
    
    console.log("Continue...");
    yield "Second Stop";
    
    console.log("End");
    return "Finished";
}

const gen2 = sayHello(); // এটি ফাংশনটি রান করে না, বরং একটি ইটারেটর অবজেক্ট দেয়

console.log(gen2.next()); // { value: 'First Stop', done: false }
console.log(gen2.next()); // { value: 'Second Stop', done: false }
console.log(gen2.next()); // { value: 'Finished', done: true }