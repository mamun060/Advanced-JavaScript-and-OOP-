const fruits = new Map([
    ["apple", 500],
    ["oragne", 1000],
    ["banana", 700],
    ["angur", 400],
    ["jackfruit", 200]
])

fruits.set("raju", '01937813648')


console.log(fruits.get("raju"));
console.log(fruits.get("apple"));
console.log(fruits.get("angur"));
fruits.delete("apple")
console.log(fruits);
fruits.clear()
console.log(fruits);