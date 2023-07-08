// console.log(`Start`);
// const promise = new Promise((resolve, reject)=>{
//     console.log(1);
// })
// console.log(`End`);

// problem 02

// console.log(`Start 02`);
// const promise2 = new Promise((resolve, reject)=>{
//     console.log(2);
//     resolve(2)
// })

// promise2.then((res)=>{
//     console.log(res);
// })
// console.log(`End 02`);


// Problem 03
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })
// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');


// Problem 04 
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

// Problem 05
console.log('start')

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

console.log('middle')

fn().then(res => {
  console.log(res)
})

console.log('end')