'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // indexλ‘ μ κ·Ό
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
// μ½λ°±ν¨μ fruit, index, arrayκΉμ§ κ°λ₯. μ΅λͺν¨μλΌ νμ΄νλ‘ μ ν
fruits.forEach((fruit) => console.log(fruit));

/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
// μ λ¬ν μ½λ°±ν¨μλ₯Ό λ³μλ§λ€ νΈμΆ
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove and return an item from the end
const poped1 = fruits.pop(); // λ³μλ‘ λ°μ μ μμ
const poped2 = fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position

fruits.push('π','π','π');
console.log(fruits); // 5κ°
fruits.splice(1, 3, 'π', 'π'); // (start, ? delteCount, ? ...items). 1λ² μΈλ±μ€λΆν° 3κ° μ§μ°κ³ , μλ°, λ©λ‘  λ£κΈ°
console.log(fruits);

// combine two arrays
/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 * @param items Additional arrays and/or items to add to the end of the array.
 */

const fruits2 = ['π', 'π₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // fruitsμ fruits2 μ΄μ΄λΆμ¬ new Array
fruits2.push('π'); // fruits2μ pushν΄λ newFruitsμ μν₯X. λ³κ°μ κ°μ²΄
console.log(newFruits);


console.clear();
console.log(fruits);

// 5. Searching
// find the index

console.log(fruits.indexOf('π')); // 1
console.log(fruits.indexOf('μμ₯?')); // -1
console.log(fruits.includes('π')); // true

fruits.push('π');
console.log(fruits.lastIndexOf('π')); // λ§¨ λ€μ μλ μλ°. 4
console.log(fruits.indexOf('π')); // λ§¨ μμ μλ μλ°. 1