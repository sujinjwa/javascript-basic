// 1. 아래 배열에서, 학생 별로 score 객체 안에 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map, spread 연산자, 비구조할당 활용)
students.map((student) => ({...student, sum: student.score.math + student.score.english}));

// 2. 학생 수에 관계없이 아래와 같은 배열이 들어왔을 때 모든 점수의 총합을 구하는 함수를 작성하세요. (reduce, 비구조할당, spread, rest 연산자 활용)
students.reduce((sum, current) => sum += (current.score.math + current.score.english), 0);

// 해설 코드
let sum = (...student) => {
    return student.reduce((sum, current) => {
        const {math, english} = current.score;
        return sum + math + english;
    });
};
let result = sum(...students);