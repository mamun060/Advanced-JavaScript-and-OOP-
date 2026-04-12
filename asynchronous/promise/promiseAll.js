const user = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
const post = fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
const comment = fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => res.json());

Promise.all([user, post, comment])
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})

