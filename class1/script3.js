// 실습 2: 업, 다운 게임 만들기
let computer = Math.floor(Math.random() * 100) + 1;

user = -1;
while(user !== computer) {
    user = Number(prompt('1 ~ 100까지의 숫자 중 하나를 선택해주세요.'));
    
    if(computer > user) confirm('업');
    if(computer < user) confirm('다운');
}

confirm('정답입니다!');

// 해설 코드
let computer2 = Math.floor(Math.random() * 99) + 1
let isMatched = 0

while(!isMatched) {
	let user = Number(prompt('1 부터 100 사이의 수 중에서 하나를 선택해주세요.', ''))
	if (user < computer2) {
		alert('업')
	} else if (user > computer2) {
		alert('다운')
	} else {
		alert('정답!')
		isMatched = 1
	}
}