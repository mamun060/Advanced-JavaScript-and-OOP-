const url = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = () => {
    const result =  fetch(url);
    console.log(result);
}

getData();
