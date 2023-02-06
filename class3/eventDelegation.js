const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul',
}

const btns = document.querySelector('#btns');
const currentTime = document.querySelector('.current-time');
let timer;

const showTime = (region) => {
    currentTime.innerText = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[region] })
}

const clickRegion = (event) => {
    clearInterval(timer);
    let region = event.target.id;
    timer = setInterval(showTime, 1000, region);
}

btns.addEventListener('click', clickRegion);