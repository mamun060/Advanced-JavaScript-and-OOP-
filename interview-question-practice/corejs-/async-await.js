// ৩. Async / Await (ES2017). Promises আসার পরও কোড অনেক সময় .then() এর চেইনে বড় হয়ে যেত। 
// এটি আরও সহজ করতে ২০১৭ সালে আসে async/await। এটি আসলে Promises-এর ওপর ভিত্তি করেই তৈরি (Syntactic Sugar), 
// কিন্তু এটি দেখতে একদম সিনক্রোনাস (Synchronous) কোডের মতো।

async function fetchData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();