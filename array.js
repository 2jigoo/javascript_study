'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // index로 접근
console.log(fruits[1]);
console.log(fruits[2]); // undefined. out of array
console.log(fruits[fruits.length - 1]); // last index


// 3. Looping over an array
// print all fruits

// a. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// b. forEach
// 콜백함수 fruit, index, array까지 가능. 익명함수라 화살표로 전환
fruits.forEach((fruit) => console.log(fruit));

/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
// 전달한 콜백함수를 변수마다 호출
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove and return an item from the end
const poped1 = fruits.pop(); // 변수로 받을 수 있음
const poped2 = fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position

fruits.push('🍓','🍑','🍋');
console.log(fruits); // 5개
fruits.splice(1, 3, '🍉', '🍈'); // (start, ? delteCount, ? ...items). 1번 인덱스부터 3개 지우고, 수박, 멜론 넣기
console.log(fruits);

// combine two arrays
/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 * @param items Additional arrays and/or items to add to the end of the array.
 */

const fruits2 = ['🍐', '🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // fruits에 fruits2 이어붙여 new Array
fruits2.push('🍍'); // fruits2에 push해도 newFruits에 영향X. 별개의 객체
console.log(newFruits);


console.clear();
console.log(fruits);

// 5. Searching
// find the index

console.log(fruits.indexOf('🍉')); // 1
console.log(fruits.indexOf('없쥐?')); // -1
console.log(fruits.includes('🍉')); // true

fruits.push('🍉');
console.log(fruits.lastIndexOf('🍉')); // 맨 뒤에 있는 수박. 4
console.log(fruits.indexOf('🍉')); // 맨 앞에 있는 수박. 1