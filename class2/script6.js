// 1. html 에서, first 라는 id 를 가진 태그를 가져와주세요.
let first = document.getElementById('first');

// 2. html 에서, a 태그를 모두 가져와주세요.
let allA = document.querySelectorAll('a');

// 3. 위 html 에서, div 태그를 모두 가져와주세요.
let allDiv = document.querySelectorAll('div');

// 4. 위 html 에서, second 라는 클래스 이름을 가진 태그를 모두 가져와주세요.
let second = document.querySelectorAll('div.second');

// 5. 위 html 에서, second 라는 클래스 이름을 가진 div 태그를 가져와주세요.
let second2 = document.getElementByClassName('second');

// 6. 위 html 에서, second 라는 클래스 이름을 가진 div 태그 내부의 a 태그를 가져와주세요.
let second3 = document.querySelector('div.second > a');