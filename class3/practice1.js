// 아래 HTML 을 활용해서, id / pw input 태그에 focus 하면 크기가 2배가 되고,
//  blur 하면 크기가 원래대로 돌아오도록 코드를 작성해보세요. (focus, blur 이벤트 활용)
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');

const onFocus = (event) => {
    event.target.style.width = '200px';
    event.target.style.height = '60px';
}

const onBlur = (event) => {
    event.target.style.width = '100px';
    event.target.style.height = '30px';
}   

id.addEventListener('focus', onFocus);
pw.addEventListener('focus', onFocus);
id.addEventListener('blur', onBlur);
pw.addEventListener('blur', onBlur);


// 동일한 HTML 을 활용해서, id / pw input 태그에 글자를 입력하려고 할때마다
// width 가 커지고, 글자를 지울때마다 width 가 작아지도록 코드를 작성해보세요. (keydown 이벤트 활용)
const onKeyDown = (event) => {
    if(event.key === 'Backspace') {
        event.target.style.width =  String(Number(event.target.style.width.slice(0, -2)) - 5) + 'px';
        // event.target.style.width = parseInt(event.target.style.width) + 5 + 'px';
    } else {
        event.target.style.width =  String(Number(event.target.style.width.slice(0, -2)) + 5) + 'px';
    }
}

id.addEventListener('keydown', onKeyDown);
pw.addEventListener('keydown', onKeyDown);

// 동일한 HTML 을 활용해서, id / pw input 태그를 마우스로 클릭하는 동안에만 
// 해당 태그의 배경색이 blue 가 되도록 코드를 작성해보세요. (mouseup, mousedown 이벤트 활용)
const onMouseDown = (event) => {
    event.target.style.backgroundColor = 'blue';
}

const onMouseUp = (event) => {
    event.target.style.backgroundColor = 'white';
}

id.addEventListener('mousedown', onMouseDown);
pw.addEventListener('mousedown', onMouseDown);
id.addEventListener('mouseup', onMouseUp);
pw.addEventListener('mouseup', onMouseUp);