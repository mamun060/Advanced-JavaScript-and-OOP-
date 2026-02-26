function* idGenerator() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

const idGen = idGenerator();
console.log(idGen.next().value); // 0
console.log(idGen.next().value); // 1
console.log(idGen.next().value); // 2
