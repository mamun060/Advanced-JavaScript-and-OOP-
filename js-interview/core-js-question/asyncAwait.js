// 8. What is async/await, and how is it different from promises?

// async/await is a modern JavaScript syntax (built on top of promises)
// that allows you to write asynchronous code in a style that looks synchronous, 
// making it easier to read and maintain.

// async ==> Marks a function as asynchronous → it always returns a Promise.
// await ==> Pauses the async function until the Promise is fulfilled or rejected.

// Here first immediate promise run then check promise fulfill or reject
async function getUser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    if(res.status === 200){
        const data = await res.json();
        return data
    }
}

// promise -> then -> catch -> finally
getUser().then((user)=>{
    console.log(user);
})

// another example 
const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (response.status === 200){
        const post = await response.json();
        return post
    }
}

getPost(1).then((post)=>{
    console.log(post);
})

