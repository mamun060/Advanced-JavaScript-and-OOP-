// console.log(document.title);
// console.dir(document.domain)
// console.log(document.all);


// DOM Method getElementById
// let headerEl = document.getElementById("header");

// headerEl.innerText = "Asdfsdpps"
// headerEl.textContent = "Appps"
// headerEl.innerHTML = "APpppsss"

// headerEl.style.color ="blue"
// headerEl.style.fontSize = "42px";

// console.log(document.getElementById("new-task"));

// DOM getElementsByClassName
// let headerElement = document.getElementsByClassName("item")
// for(let i = 0; i < headerElement.length ; i++){
//     headerElement[i].style.color = "blue"
// }

// tagname mathod 
// let tagFind = document.getElementsByTagName("li")
// console.log(tagFind);



/************************************ */
// Now practice deeply query selector
// let header = document.querySelector('.header');

// pass parent to child pseudo selector
// let items = document.querySelector(".item:nth-child(2)");
// let itemsAll = document.querySelectorAll(".item")
// let itemsEl = document.querySelector("#items");
// let itemEl = itemsEl.children;

// for(let i = 0;  i < itemsEl.length ; i++){
//     itemsEl[i].style.color = "red"
// }

// itemEl.style.color = "blue"

// document.querySelector() kaj kore top-bottom approach like grandparent to parent and parent to child
// document.closest() kaj kore bottom-top approach liek child to parent or child to grandParent

// ai nextElementSibling diye asole current element ar right element take dora hoy
// let itemEl = document.querySelector(".item");
// let childrenTwo = itemEl.nextElementSibling;

// ai previouseElementSibling diye nextElementSibling element ar left a jeh element ace takhe dora hoy
// let childrenThree = childrenTwo.previousElementSibling

// childrenTwo.style.color = "red";
// childrenThree.style.color = "green"
// console.log(childrenTwo, childrenThree);

// now practice create dom element I mean kivabe html element create kora jay and oi element ar bitore kivabe class, tag attribute add kora jay
const divElement = document.createElement('div');
divElement.className = "red";
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'red div');
divElement.innerText = "Dynamic Div Creation"

// ai div ta jeh create korlam oitah html a kotay use korbo oi system ta dekhbo
const container = document.querySelector(".todo-list");
const h2Element = container.querySelector("h2")

// akhon ami chacci jeh .. new jei div ta create korci oitah current parent div + h2 element ar maje bosabo
container.insertBefore(divElement, h2Element)
container.append(divElement)
// appendChild() a direct variable pass korte hoy text deya jayna .. ar append() ar maje text or variable 2 tai deya jay .. atai different
// also appendChild() return kore as like function but append() not return anything it's returns undefined
container.appendChild(divElement)

console.log(divElement);