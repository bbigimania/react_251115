// const score = 75;
// const jumsu = 59;
// let result = score >= 60 && jumsu >= 60 ? "합격" : "불합격";
// let result1 = score >= 60 || jumsu >= 60 ? "합격" : "불합격";

let a = 3;
a *= 3;
console.log(a);

//console.log(result);
//console.log(result1);

//null 병합 연산자
//null이나 undefined가 아닌 값을 찾는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let result1 = var1 ?? var2;
let result2 = var2 ?? var3;
console.log(result1);
console.log(result2);

let fruit1; // let product1;
let fruit2;
let fruitName = fruit1 ?? fruit2;
let fruitName1 = fruitName ? fruitName : "과일이름없음";
console.log(fruitName);
console.log(fruitName1);
