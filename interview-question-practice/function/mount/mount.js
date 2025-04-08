// js Mount Means Add an Element to the DOM

const divEl = document.querySelector('#add')
const btnShow = document.querySelector('#show')
const btnHide = document.querySelector('#hide')
const ele1 = document.createElement('div');
ele1.id = 'ele1';
ele1.innerText = 'Hello World!';
ele1.style.color = 'red';
btnHide.style.display = 'none';

function mount() {
    divEl.appendChild(ele1);
    btnShow.style.display = 'none';
    btnHide.style.display = 'block';
}


function unmount() {
    divEl.removeChild(ele1);
    btnShow.style.display = 'block';
    btnHide.style.display = 'none';
}