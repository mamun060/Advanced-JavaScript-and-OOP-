// Deep copy মানে পুরো object সহ সব nested level নতুনভাবে কপি হবে। কোনো shared reference থাকবে না।

const user = {
    name: "Al Mamun",
    age: 30,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

// structuredClone() is a built-in method that creates a deep copy of a given value, including nested objects and arrays.
const deepCopyUser = structuredClone(user); 
deepCopyUser.name = "Raju Ahmed";
deepCopyUser.address.city = "Khulna";

console.log(deepCopyUser); // deep copy user with updated values
console.log(user); // original user remains unchanged