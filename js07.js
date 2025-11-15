// 구조 분해 할당

//배열 - 순서 기준으로 값을 꺼냄

//객체 key기준으로 값을 꺼냄

// const colors = ["빨강", "파랑", "노랑"];

// // 기존 방식
// const first = colors[0];
// const second = colors[1];
// const third = colors[2];

// for (let n in colors) {
//   console.log(n);
// }

// for (let n1 in colors) {
//   console.log(colors[n1]);
// }

// // 구조 분해 할당
// const [first, second, third] = colors;
// console.log(first);  // '빨강'
// console.log(second); // '파랑'
// console.log(third);  // '노랑'

// //--
// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// //
// let x, y;
// [x, y] = [1, 2];

// console.log(x); // 1
// console.log(y); // 2

// //
// const [x = 10, y = 20] = [5, 15];
// console.log(x); // 5
// console.log(y); // 20 (기본값 사용)

// //특정 요소 건너뛰기
const [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3
