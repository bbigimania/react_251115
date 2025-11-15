//변수 - 그릇, 마지막에 담긴 값 하나만 기억
let name = "홍길동"; //
//document.write(name);

//name = "하늘";
//document.write("<br>" + name);

//const score = 70;
//30;
//document.write("<br>" + score);

//eng = Number(prompt("국어 점수 입력>>")); // 문자열로 처리된다
//console.log(typeof eng);
//console.log(typeof Number(eng));

// score = 90;  //const 로 선언한 변수는 처음에만 값을 넣을 수 있고
// 나중에 다른 값을 넣을 수 없음30
// document.write("<br>" + score);

kor = parseInt(prompt("국어 점수 입력>>")); // 정수형으로 변환
eng = parseInt(prompt("영어 점수 입력>>")); // 정수형으로 변환
console.log(
  `이름 = ${name}, 영어 = ${eng}, 국어 = ${kor}, 합계 = ${eng + kor}`
);
