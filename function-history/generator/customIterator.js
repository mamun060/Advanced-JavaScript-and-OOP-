function* foodOrder(food) {
    for (let item of food){
        yield `Serving ${item}`;
    }
}

const foods = ['Pizza', 'Burger', 'Pasta'];
const order = foodOrder(foods);

for(let status of order){
    console.log(status);
}