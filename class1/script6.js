// 생성자 함수
function User(name, age) {
	this.name = name; // 프로퍼티
	this.age = age;
	this.sayHi = function() { // 메서드
		alert(`저는 ${this.name} 입니다!`)
	}
}
let user = new User('Kim', 20); // 명시한 인자가 프로퍼티 값에 할당
user.sayHi(); // 저는 Kim 입니다!
console.log(user); // {name: 'Kim', age: 20}


scores = {
    Kim: 50,
    Park: 70,
    Lee: 80,
}

sumOfScores = 0
for(let key in scores) { // for in 문
    sumOfScores += scores[key];
}

console.log(sumOfScores)

let player = {
    hp: 80,
    mp: 50,
    heal: function() {
        this.mp -= 10;
        this.hp += 10;
    }
}