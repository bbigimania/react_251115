const fruits = ["사과", "바나나", "오렌지", "포도"];

const [a, b] = fruits;
console.log(a);
console.log(b);

const student = {
  name: "한사랑",
  age: 17,
  grade: 2,
  school: "한국고등학교",
};

const { name, age } = student;
console.log(name);
console.log(age);

const product = {
  name1: "노트북",
  price: 1000000,
};

//const { name1, price, stock = 1 } = product;

const newProduct = { ...product, stock: 1 };

for (let n3 in newProduct) {
  console.log(newProduct[n3]);
}

const user = {
  name2: "홍길동",
  age2: 25,
  email: "hong@example.com",
};

// name을 userName으로, age를 userAge로 변경
// 결과: userName = '홍길동', userAge = 25

const { name2: userName, age2: userAge, email: userEmail } = user;
console.log(userName);
console.log(userAge);
console.log(userEmail);

const numbers = [1, 2, 3, 4, 5];

// 첫 번째 숫자만 따로, 나머지는 rest 배열로
// 결과: first = 1, rest = [2, 3, 4, 5]

const [a1, ...rest] = numbers;

console.log(a1);
console.log(...rest);

// 첫 번째 숫자만 따로, 나머지는 rest 배열로
// 결과: first = 1, rest = [2, 3, 4, 5]

const number1 = [1, 2, 5, 6];

const newNumber1 = [...number1.slice(0, 2), 3, 4, ...number1.slice(2)];
console.log(newNumber1);

// 2와 5 사이에 3, 4를 삽입하세요
// 결과: [1, 2, 3, 4, 5, 6]

// 여기에 코드 작성 (slice와 spread 활용)

const arr = [1, 2, 3, 4];
// 여기에 코드 작성

const newNumber2 = [...arr.slice(0, 1), 99, ...arr.slice(2)];
console.log(newNumber2);

const data = [
  [1, 2],
  [3, 4],
];
//여기에 코드 작성

const newData = [...data[0], ...data[1]];

console.log(newData);

const student1 = {
  name3: "홍길동",
  age3: 18,
};

const hiStudent = { ...student1, grade1: 1 };

for (let n2 in hiStudent) {
  console.log(hiStudent[n2]);
}
