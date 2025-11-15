let fruits = ["사과", "딸기", [10, 20], true, 30, "복숭아"];
fruits.length; // 6

fruits[1] = "키위"; // 딸기

console.log(fruits[1]);
console.log(fruits[2][0]);

console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits[${i}] = ${fruits[i]}`);
}

console.log(fruits.length);

// forof
fruits.push("수박");

for (let n of fruits) {
  console.log(n);
}

let p = fruits.pop();
console.log(p);

console.log(fruits.includes("사과"));
console.log(fruits.indexOf("사과"));
