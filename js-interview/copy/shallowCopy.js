// Shallow copy - I mean shallow replace original becasue they don't use reference, use object note all nested

const user = [1,2, {name: "Mamun"}]

const usertwo = {...user}
usertwo[2].name = "Raju"
console.log(user[2]);
console.log(usertwo[2]);


// Deep copy - don't update or change the original data because use reference and all nested data
const userThree = JSON.parse(JSON.stringify(user));
console.log(userThree);
userThree[2].name = "AL"
console.log(user);
console.log(userThree);


