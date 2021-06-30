// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// `` back-tick을 쓰면 엔터, 공백, 싱글쿼터도 그대로 출력.


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// decrement도 동일


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// value1이 true이면, 뒤의 조건들은 더이상 살펴보지 않기 때문에 함수 check()가 호출되지 않는다.
// heavy한 함수를 앞에서 먼저 호출해 조건을 보는 건 좋지 않다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// mullableObject && nullableObject.something
/*
if (nullableObject != null) {
    nullableObject.something;
}
*/

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('갸악');
    }
    return true;
}

// ! (not)
console.log(!value1); // true



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // 타입을 변경해서 검사해서 true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
// 0, empty string, null, undefined는 false로 간주된다
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // f
console.log(null === undefined); // f


// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'ellie') { // 'ellie'일 때
    console.log('Welcome, Ellie!');
} else if (name === 'coder') { // 'coder'일 때
    console.log('You are amazing coder');
} else { // 그 외
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); // no


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
} // i가 0이 됨

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0); // 조건을 만족하지만 일단 한번은 실행

// for loop, for(begin(initialize); condition; step)
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2) {
    // inline variable declation
    console.log(`inline variable for: ${i}`);
}

// nested loops : O(n^2). 되도록 쓰지 말기
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: %{i}, j: ${j}`);
    }
}

// break, continue
console.log(`Q1. iterate from 0 to 10 and print only even numbers (use continue)`);
for(let i = 0; i < 11; i++) {
    if(i%2 != 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

for(let i = 0; i < 11; i++) {
    if(i%2 === 0) {
        console.log(`q1. ${i}`);
    }
}

console.log(`Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)`);
for(let i = 0; i < 10; i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

// label을 이용한 제어문 찾아보기