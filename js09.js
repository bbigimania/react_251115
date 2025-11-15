// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // spread 연산자, 주소값 복사
// console.log(arr2); // [1, 2, 3, 4, 5]
// const arr3 = [4, ...arr1, 5, 6];
// console.log(arr3); //[4,1,2,3,5,6]

const a = [1, 2];
const b = [3, 4];
const c = [...a];
const result = [...a, ...b];

console.log(result); // [1, 2, 3, 4]

console.log(b); // [3, 4]
console.log(a === b); // false (새 배열을 만들어 원본과 참조가 다름)

const arr = [1, 2, 3, 4];
const newArr = [...arr.slice(0, 1), 99, ...arr.slice(2)];
console.log(newArr); // [1, 99, 3, 4]

function sum(a, b, c) {
  //함수로 인자 전달
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

console.log(Math.max(...nums)); // 30

// function add(a, b) {
//   return a + b;
// }

// function showAdd(...numbers) {
//   console.log(numbers);
//   console.log(Array.isArray(numbers)); // true - 배열임
// }

// showAdd(1, 2, 3, 4, 5);

//==========
function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}`;
}

console.log(greet("Hello", "Alice", "Bob", "박가")); // "Hello Alice, Bob"
