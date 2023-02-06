let url = ''
const country = document.querySelector('.country');
const h1Weather = document.querySelector('.weather');
const h3Temp = document.querySelector('.temp');
const h3Time = document.querySelector('.time');

const getPost = async() => {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
      return data;
    }
    return new Error(response.status + '에러 발생'); // 
  }

const showData = (data) => {
    // 왜 변수에 저장하면 에러??
   weather = data.current_weather.weathercode;
   temperature = data.current_weather.temperature;
   time = data.current_weather.time;

    if(weather <= 0) {
        h1Weather.innerText = '매우 맑음';
    } else if (weather >= 1 && weather <= 50) {
        h1Weather.innerText = '눈 내림';
    } else if (weather >= 50 && weather <= 69) {
        h1Weather.innerText = '안개 낌';
    } else {
        h1Weather.innerText = '눈 내린다!';
    }

    h3Temp.innerText = '현재 기온 : ' + temperature + '°C';
    h3Time.innerText = '기준 시간 : ' + time;
}

const clickRegion = async (region) => {
    if(region === 'seoul') {
        country.innerText = '서울';
        url = 'https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current_weather=true';
    } else if (region === 'london') {
        country.innerText = '런던';
        url = 'https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true'
    } else {
        country.innerText = '뉴욕';
        url = 'https://api.open-meteo.com/v1/forecast?latitude=56.25&longitude=-5.28&current_weather=true'
    }

    let data = await getPost();
    showData(data);
}