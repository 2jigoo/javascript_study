// 1. Use strict
// js는 아주 유연하다. === dangerous
// 선언되지 않은 변수에 값을 할당;
// 기존에 존재하는 프로토타입을 변경;
// added in ECMAScript 5
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let username = 'ellie';
    console.log(username);
    username = 'hello';
    console.log(username);
    console.log(globalName);
}

// console.log(username); // 블럭 안에서 선언되었기 때문에 블럭 밖에서 사용 불가능
console.log(globalName);


// var (don't ever use this!)
// var hoisting (move declation from bottom to top) 선언을 상단으로 끌어올려줌;
// has no block scope
{
    console.log(age); // undefined
    age = 4;
    console.log(age); // 4
    var age; // 밑에서 선언했지만 hoisting 되어 위에서 사용할 수 있었음
}

age = 5;
console.log(age); // scope밖인데도 사용가능함



// 3. Constants, r(read only) 상수. final과 같다.
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// (변수에 할당 가능. 인자로도 전달 가능. 리턴타입으로 함수를 리턴할 수 있다)
// 타입스크립트에서는 let a: number = 12; 이렇게 선언

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN. 숫자가 아닌 것을 숫자 연산을 할 때


// bigInt (fairly new, don't use it yet)
// chrome, firefox
const bigInt = 1234567890123456789012345678901234567890; // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// Number.MAX_SAFE_INTEGER; // number 타입으로 표현할 수 있는 최대값

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) // call by value
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined. 선언됐지만 값이 지정되어있지 않음. null인지도 모름
let x; // = undefined 라고 명시해도 됨
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
// map이나 자료구조에서 고유한 식별자가 필요하거나
// 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 고유 식별자를 줄 때 씀

const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 동일한 string으로 작성했어도 다른 심볼
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); // 동일한 string에 대해 같은 심볼
console.log(gSymbol1 === gSymbol2); // true

// ${symbol1}: cannot convert a symbol value to a string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
console.log(symbol1); // Symbol(id)

// object, real-life object, data structure
const ellie = {name: 'ellie', age: '20'}
ellie.age = 21;
// ellie라는 포인터는 잠겼지만, 그 객체에서 name, age를 가리키는 포인터는 잠기지 않음


// 5. Dynamic typing: dynamically typed language
// 런타임, 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
// console.log(text.charAt(0)); // runtime error 발생

// typescript는 브라우저가 이해할 수 있는 js로 변환하는 트랜스 컴파일러를 사용해야함




