// if(조건식){
// 	조건식의 결과가 참일 때 실행할 문장
// }else{
// 	조건식의 결과가 거짓일 때 실행할 문장
// }

// menu = parseInt(prompt("음료 입력>>")); // 정수형으로 변환

// if (menu === 1) {
//   console.log("커피");
// } else if (menu === 2) {
//   console.log("홍차");
// } else if (menu === 3) {
//   console.log("콜라");
// } else {
//   console.log("라뗴");
// }

// switch (menu) {
//   case 1:
//     console.log("커피");
//     break;

//   case 2:
//     console.log("홍차");
//     break;

//   default:
//     console.log("주문완료");
// }

/*
   - 반복문 : 같은 작업을 여러 번 반복

   - for 문 : 규칙적인 반복, 시작과 끝을 알 수 있을 때
              for(시작 ; 최종값(=조건식); 증감값){
                  반복을 실행할 문장
              }
   - while문 : 불규칙적인 반복, 끝을 알 수 없을 때 
          while(조건식){
            조건식이 참인 동안 실행할 문장
          }

   */

//문) 1 ~ 5까지의 자연수의 합
// 1 + 2 + 3 + 4 + 5

//전역변수 : 어디서든 사용 가능
let sum = 0; //합계를 담을 변수, 초기화

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    //    break;
    console.log(i);
  }
  //  console.log("break");
  // i++ => i=i+1
  // let i=1, i:지역변수
  // sum = sum + i; // sum += i;
  // alert(`i = ${i}, sum = ${sum}`);
  // console.log(sum);
}
// console.log(sum);
//alert(`i = ${i}, sum = ${sum}`);
// i는 {}안에서만 사용할 수 있는 지역변수
// i는 {}을 벗어나면 메모리에서 제거
//alert("합계는 " + sum);

//변수가 사용될 수 있는 범위 : 스코프(scope)
//let hap = 0;
//let k = 0;
//for (k = 1; k <= 5; k++) {
//  hap = hap + k;
//}
//alert(`k = ${k}, hap = ${hap}`);

/*
    for(시작 ; 최종값(=조건식); 증감값){
        반복을 실행할 문장
    }


    //시작과  증감을 따로 처리
  while(조건){
    조건이 true일 때 실행할 문장
  }
*/

// 1 ~ 5 까지의 자연수 합

// let sum = 0; //합
// let i = 0; //시작을 처리할 변수

// while(i<5){

//   i++; // i=i+1;

//   sum = sum + i;
//  alert("i="+ i + ", sum=" + sum + "\n");

// }
// alert(`합계 : ${sum} `);
