// 1. 아래 배열에서 수학, 영어 점수의 총합이 140 이상인 사람만 남기는 코드를 작성하세요. (filter 활용)
students.filter(student => {
    let {math, english} = student.score;
    return (math + english) >= 140;
})

// 2. 아래 배열에서 모든 점수의 총합을 구하는 코드를 작성해주세요. (reduce 활용)
let score = students.reduce((sum, current) => {
    let {math, english, science} = current.score;
    return sum += (math + english + science);
}, 0); // 초기값은 return으로 묶여있는 중괄호 밖에 위치

// 2번 해설 : 만약 과목 수가 3개인 것을 모르는 상황에서 과목의 총합을 구하고 싶다면?
let sum = students.reduce((sum, current) => {
    return sum + Object.values(current.score).reduce((sum, current) => sum + current, 0);
})

// 3. 아래 배열에서 모든 사람들의 이름을 Park 으로 바꾸는 코드를 작성해주세요. (map 활용, spread 연산자 활용)
students.map(student => {
    let {id, score} = student;
    return {id : id, name : 'Park', score: score};
});

// 3번 해설
let result = students.map((student) => ({...student, name: 'Park'}));

// 4. 아래 배열에서 이름이 Kim 인 사람들을 찾고, score 에 science: 100, history: 100 을 추가해주세요. (filter, map 활용, spread 연산자 활용)
let namedKim = students.filter(student => {
    let {name} = student;
    return name === 'Kim';
})

namedKim.map(kim => {
    let newScore = {...kim.score, science: 100, history:100};
    return {id: kim.id, name: kim.name, score: newScore};
})

// 4번 해설
