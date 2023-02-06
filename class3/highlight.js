const highlight = (element) => {
    element.classList.add('highlight');
}

let menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    highlight(event.target);
})