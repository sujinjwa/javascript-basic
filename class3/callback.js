const body = document.querySelector('body');

const createDiv = (callback) => {
    let div = document.createElement('div')
    div.style.width = '100px';
    div.style.height = '100px';

    setTimeout(() => {
        // body에 div를 추가했을 때 콜백 함수 실행
        body.append(div);
        callback();
    }, 2000);
}

createDiv(() => {
    let div = document.querySelector('div');
    div.style.backgroundColor = 'blue';
})

// setTimeout(createDiv, 2000);