let id = document.getElementById('id')
let pw = document.getElementById('pw')

const onFocus = (event) => {
    event.target.style.backgroundColor = 'bisque'; // 그냥 id 라고 작성해도 됨
};

const onBlur = (event) => {
    event.target.style.backgroundColor = 'white';
}

id.addEventListener('focus', onFocus);
id.addEventListener('blur', onBlur);
pw.addEventListener('focus', onFocus);
pw.addEventListener('blur', onBlur);