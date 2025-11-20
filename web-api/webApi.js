console.log("1");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
    (response) => response.json(),
    (error) => console.log(error)
  )
  .then(
    (json) => console.log(json),
    (error) => console.log(error)
  );

console.log("3");
