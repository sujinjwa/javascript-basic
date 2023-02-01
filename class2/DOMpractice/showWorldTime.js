const time = document.querySelector('.current-time');
const btns = document.querySelectorAll('#btn');
let timer;

const printTime = (region) => {
    time.innerText = new Date().toLocaleString('ko-KR', {timeZone: region})
}

const clickRegion = (event) => {
    clearInterval(timer);
    let region = event.target.dataset.region;
    timer = setInterval(printTime, 1000, region);
}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickRegion);
}

// 해설 코드
const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul',
}
let timer2;

// html 각 버튼 속성에 onclick="setTime(event)"
function setTimeByCountry(country) {
    let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] })
    let currentTime = document.getElementById('currentTime');
    currentTime.innerText = now;
}

function setTime(event) {
    clearInterval(timer);
    setTimeByCountry(event.target.id);
    timer2 = setInterval(setTimeByCountry, 1000, event.target.id);
}