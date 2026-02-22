// A shallow copy copies only the first level of an object or array.
// Shallow Copy (আংশিক কপি) 
// Shallow copy শুধু প্রথম লেভেল কপি করে। কিন্তু ভিতরের (nested) object/array একই reference শেয়ার করে।

const user = {
    name: "Al Mamun",
    age: 30,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

// console.log(user);
// user.address.city = "Chittagong";
// console.log(user);

// shallow copy using spread operator 
const userTwo = {...user};
userTwo.name = "Raju Ahmed";
userTwo.address.city = "Khulna";
console.log(user);
console.log(userTwo);


// কেন change হলো?
// কারণ:
// name → আলাদা কপি হয়েছে
// address → একই memory reference
// অর্থাৎ nested object কপি হয়নি, শুধু pointer কপি হয়েছে।