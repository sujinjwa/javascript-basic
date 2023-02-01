// 프로토타입 연습문제

// 회사원 정의하는 객체
let employee = {
    goToWork() { // clockIn
        alert('출근했습니다')
    },
    goToHome() { // clockOut
        alert('퇴근할게요')
    }
}

// employee 객체를 상속하는 회사원 객체 kim
let kim = {
    name: 'Kim',
    age: 20,
    __proto__: employee,
}

// 이름, 나이 받아서 회사 사원 객체 생성하는 생성자 함수
function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.__proto__ = employee;
}

employee = new Employee('Sujin', 24);