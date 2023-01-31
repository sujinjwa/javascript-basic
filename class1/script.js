// prompt 를 활용하여, 사용자로부터 입력받은 점수가 95 이상이면 A, 
// (95 미만이고) 90 이상이면 B, (90 미만이고) 85 이상이면 C, 85 미만이면 F 를 출력하는 조건문을 작성해보세요.
let score = prompt('점수를 입력해주세요');
score = Number(score);

if(score >= 95) {
    alert('A');
} else if (score >= 90) {
    alert('B');
} else if (score >= 85) {
    alert('C');
} else {
    alert('F');
}

// prompt 를 활용하여 사용자로부터 숫자를 2번 입력받아, 
// 두 숫자가 모두 홀수라면 ‘홀수’, 두 숫자가 모두 짝수라면 ‘짝수’ 라고 출력하는 조건문을 작성해보세요.
let number1 = prompt('첫번째 숫자를 입력해주세요');
let number2 = prompt('두번째 숫자를 입력해주세요');

if(number1 % 2 === 1 && number2 % 2 === 1) {
    alert('홀수');
}

if(number1 % 2 === 0 && number2 % 2 === 0) {
    alert('짝수');
}

// 1 부터 100 까지의 수 중 짝수만 출력하는 반복문을 작성해보세요.
for (let num = 1; num <= 100; num++) {
    if(num % 2 == 0) console.log(num);
}

// 유저가 ‘그만’ 이라고 입력할 때까지 계속해서 prompt 를 띄우는 반복문을 작성해보세요.
input = '';
while(input !== '그만') {
    input = prompt('명령을 입력해주세요')
}

// 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 출력하는 
// 함수를 작성해보세요. (ex. 2가 들어오면, 2 4 6 8 10 12 14 16 18 20 을 차례로 출력) (매개변수는 1개)
const printMultipleNums = (num) => {
    for(let i=1; i <= 10; i++) {
        console.log(num * i);
    }
}

// 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 모두 더한 값을 
// 리턴하는 함수를 작성해보세요. (매개변수는 1개) (ex. 1이 들어오면, 55를 return)
const sumNum = (num) => {
    let sumOfNums = 0
    for(let i = 1; i <= 10; i++) {
        sumOfNums += (num * i);
    }

    return sumOfNums
}

// 매개변수로 이름과 나이를 받아서 미성년자인지 여부를 판별하고, 
// “'이름'님은 '미성년자/성인'입니다.” 를 출력하는 함수를 작성해보세요. (매개변수는 2개)
const printUser = (name, age) => {
    if(age >= 20) {
        console.log(`${name}님은 성인입니다.`)
    } else {
        console.log(`${name}님은 미성년자입니다.`)
    }
}