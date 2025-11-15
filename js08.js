const user = {
  name: "홍길동",
  age: 20,
  city: "서울",
};

// 기존 방식
// const name = user.name;
// const age = user.age;
// const city = user.city;

// 구조 분해 할당
const { name, age, city } = user;
console.log(name); //'홍길동'
console.log(age); // 20
console.log(city); // '서울'

for (let n1 in user) {
  console.log(user[n1]);
}

function greet({ name, age }) {
  console.log(`안녕하세요, ${name}님! ${age}세시군요.`);
}

greet({ name: "홍길동", age: 30 });

//함수에서 여러 값 반환
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x, y); // 10 20
