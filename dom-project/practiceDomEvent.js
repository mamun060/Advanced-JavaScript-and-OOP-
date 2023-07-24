// Practice DOM Event Listener
const header = document.querySelector("#header");

header.addEventListener('mouseout', function(event){
    console.log(event);
})