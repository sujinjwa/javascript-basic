// JS 기본 메서드
// 1. 아래 객체에서, 영어 점수의 총합을 계산하는 코드를 작성하세요. (reduce 활용)
let scores = {
    Kim: {math: 50, english: 70},
    Park: {math: 70, english: 60},
    Lee: {math: 80, english: 50}
  };

scores = Object.entries(scores);

let totalScores = scores.reduce((prevReturn, current) => prevReturn + current[1].english, 0)
console.log(totalScores);

// 2. 아래 배열에서, 수학 점수가 60점 이상인 사람들만 남기는 코드를 작성하세요. (filter 활용)
let students = [
    {id: 1, name: 'Kim', score: {math: 50, english: 70}},
    {id: 2, name: 'Park', score: {math: 80, english: 60}},
    {id: 3, name: 'Lee', score: {math: 70, english: 50}},
  ]

let goodStudents = students.filter(student => student.score.math >= 60);
console.log(goodStudents);

// 아래 배열에서, 학생 별로 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map 활용)
let students2 = [
    {id: 1, name: 'Kim', score: {math: 50, english: 70}},
    {id: 2, name: 'Park', score: {math: 80, english: 60}},
    {id: 3, name: 'Lee', score: {math: 70, english: 50}},
  ]

sumOfScores = 0;
students2.map(student => sumOfScores += (student.score.math + student.score.english));
console.log(sumOfScores);