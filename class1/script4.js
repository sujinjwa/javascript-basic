// 실습 3: BR 31 게임 만들기
let number = 0

while (number >= 31) {
    user = prompt(`[지금까지 숫자: ${number}] 숫자를 1 ~ 3개씩 공백으로 띄워 불러주세요.`)
    number += user.split(' ').length;

    if (number >= 31) {
        alert('게임 종료! 컴퓨터가 이겼습니다.')
    }

    computer = Math.floor(Math.random() * 2) + 1;
    number += computer;

    if (number >= 31) {
        alert('게임 종료! 사용자가 이겼습니다.')
    }
}

// 해설 코드
let number2 = 0;
let isFinished = 0;

while(!isFinished) {
	user = prompt('부르고 싶은 숫자만큼 띄어쓰기해서 입력해주세요.', '').split(' ');
	number2+=user.length;
	if (number2 >= 31) {
		alert('게임 종료');
		isFinished = 1;
	}

	computer = Math.floor(Math.random() * 10) % 3 + 1;
	number2+=computer;
	if (number2 >= 31) {
		alert('게임 종료');
		isFinished = 1;
	}
}