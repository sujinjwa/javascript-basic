// 실습1: 가위 바위 보 게임 만들기
const computer = Math.floor(Math.random() * 3);

let user = prompt('가위, 바위, 보 중 하나를 선택해주세요');
if (user === '가위') user = 0;
if (user === '바위') user = 1;
if (user === '보') user = 2;

let isTied = false;
let isSucceeded = false;
if (user === computer) {
    isTied = true;
}
if (user - computer === 1 || user - computer === -2) {
    isSucceeded = true;
}
if (user - computer === -1 || user - computer === 2) {
    isSucceeded = false;
}

if (isSucceeded) {
    confirm('유저:승, 컴퓨터:패');
} else {
    if (isTied) {
        confirm('무승부입니다');
        return;
    }
    confirm('유저:패, 컴퓨터:승');
}

// 사용자 컴퓨터
// 이긴경우
// 바위   가위  = 1 - 0 = 1
// 가위   보    = 0 - 2 = -2
// 보     바위  = 2 - 1 = 1
// 진 경우
// 가위   바위 0 - 1 = -1
// 보    가위 2 - 0 = 2
// 바위   보  1 - 2 = -1

// 해설 코드
let choices = ['가위', '바위', '보']
let user2 = prompt('가위 바위 보 중에서 하나를 선택해주세요.', '')
let computer2 = choices[Math.floor(Math.random() * 3) % 3]

const isUserWin = (computer === '가위' && user2 === '바위')
|| (computer2 === '바위' && user2 === '보')
|| (computer2 === '보' && user2 === '가위')

const isUserLose = (computer2 === '가위' && user2 === '보')
|| (computer2 === '바위' && user2 === '가위')
|| (computer2 === '보' && user2 === '바위')

alert('컴퓨터는 ' + computer2)
if (computer2 === user2) {
	alert('무승부')
} else if (isUserWin) {
	alert('유저: 승, 컴퓨터: 패')
} else if (isUserLose) {
	alert('유저: 패, 컴퓨터: 승')
}