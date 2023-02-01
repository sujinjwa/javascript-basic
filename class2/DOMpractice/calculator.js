const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('.add-btn');
const result = document.querySelector('.result');

const printResult = () => {
    result.innerText = Number(input1.value) + Number(input2.value);
}

btn.addEventListener('click', printResult);