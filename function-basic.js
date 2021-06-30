// 함수 선언
// 함수 호출

function doSomething(add) {
  console.log(add); // add 함수 코드 찍힘. 함수가 전달된 상태.
  const result = add(2, 3); // 함수 호출
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

doSomething(add); // add 함수 코드 찍힘. 함수 전달.


const addFun = add;
console.log(addFun); // 함수 자체를 가리킴
console.log(addFun(1, 2));