const items = document.querySelectorAll('.item');
const carousel = document.querySelector('.carousel');
let order = 0;

const prev = () => {
    order -= 1;
    items[order + 1].style.transform = `translate(+${100*order}%)`

}

const next = () => {
    order += 1;
    items[order].style.transform = `translate(-${100*order}%)`
}