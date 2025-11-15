// # 함수(Function)

//선언적 함수

console.log(add(5, 7));

function add(a, b) {
  //함수 선언
  let result = a + b;
  return result;
}

// 함수를 호출한다.

let addResult = add(3, 2);
console.log(addResult);

//익명적 함수
//콜백 함수
let plus = function (a, b) {
  return a + b;
};

console.log(plus(4, 2));

//화살표 함수
let plus1 = (a, b) => {
  return a + b;
};

console.log(plus1(5, 2));

//callback 함수
function main(value) {
  //console.log("Value is: " + value);
  value();
}

//main(42);
//main("Hello, World!");

function sub() {
  console.log("Sub function called");
}
sub();

main(sub);
main(function sub() {
  console.log("Sub function called");
});

main(function () {
  console.log("Sub function called");
});
main(() => {
  console.log("Sub function called");
});
