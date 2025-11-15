const person = {
  name: "홍길동", //key : value
  age: 20,
  gender: "남",
  hobby: function (kind) {
    return this.name + "님의 취미는" + kind + "입니다";
  },
  hobby1: (kind) => {
    //return this.name + "님의 취미는 " + kind + "입니다";
    //화살표 함수에서의 this는 상황에 따라 다르며
    //여기에서는 window 객체
    // 객체 안에서 this를 사용하기 위해서는 화살표 함수를 쓰지 않음
    return person.name + "님의 취미는 " + kind + "입니다";
  },
};

console.log(person.name);

person.score = 90;
console.log(person.score);
console.log(person.hobby("축구"));
console.log(person.hobby1("야구"));

for (let n in person) {
  console.log(n, person[n]);
}

for (let n1 of Object.keys(person)) {
  console.log(n1, person[n1]);
}

for (let n2 of Object.values(person)) {
  console.log(n2, person[n2]);
}
