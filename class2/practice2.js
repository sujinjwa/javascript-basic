let box = document.querySelector('.box');

box.style.backgroundColor = 'blue';
// box.classList.add('blue-background');

let h1 = document.createElement('h1');
h1.innerText = '안녕';
// box.innerHTML = '<h1>안녕</h1>'

h1.style.color = 'white';
box.appendChild(h1);


function toggleMenu() {
	let menu = document.getElementById('menu');
    if(menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}