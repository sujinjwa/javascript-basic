const result = document.querySelector('.result');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

const decreaseNumber = () => {
    result.innerText = Number(result.innerText) - 1;
}

const increaseNumber = () => {
    result.innerText = Number(result.innerText) + 1;
}

minusBtn.addEventListener('click', decreaseNumber);
plusBtn.addEventListener('click', increaseNumber);