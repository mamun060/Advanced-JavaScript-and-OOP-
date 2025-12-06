// Immutable = value cannot be modified directly
// You create a new copy instead of changing the original.

const user = {
    name: "Al Mamun"
}

const newUser = {...user, name:"Raju"}
console.log(user, newUser);

// This does NOT change the original.