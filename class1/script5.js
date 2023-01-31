let msg = '난 전역스코프';

function showMsg() {
	let msg = '난 함수스코프';
	if (true) {
		let msg = '난 블록스코프'; // 함수 밖에 msg가 있지만, 여기서 선언한 msg가 우선됨 (블록스코프) 
		alert(`블록스코프:${msg}`);
	}
	alert(`함수스코프:${msg}`);
}

showMsg();
alert(`전역스코프:${msg}`);