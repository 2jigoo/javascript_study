// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declation
// function name(param1, param2, ...) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('Hello@');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie); // 'coder


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');
// from 파라미터가 없음 -> Hi! by undefined
// default 값을 주면 파라미터가 없을 때 디폴트값으로 대체 된다.


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
};

printAll('dream', 'coding', 'ellie'); // 배열로 받아짐
// 함수 또한 객체이기 때문에, printAll.xxx 와 같이 속성에 접근할 수 있다


// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // 전역변수
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    
    function printAnother(message) {
        let childMessage = 'hello';
    }

    // console.log(childMessage); // 에러. 볼 수 없다.
    // 중첩된 함수에서 자식의 함수가 부모 함수에서 정의된 변수에 접근 가능한 것 closer?

    // return undefined (생략)
}

printMessage();
// console.log(printMessage); // 오 함수 선언, 표현부 나온다


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad :(
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good :)
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosited)
// a function expression is created when the execution reaches it.

// 익명 함수 anonymous function
// 함수 표현법(변수에 넣는 것)은 선언된 이후부터 사용가능하다.
// 함수 선언법(그냥 선언)은 hoisted 된다. 선언하기도 전에 사용가능 함.
const print = function() {
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
// 상황에 맞으면 호출하게 되는 함수
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// 익명 함수
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous. 람다 느낌
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrintArrow = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    return a + b; // 블럭을 쓰면 리턴할 시 리턴을 적어줘야 한다.
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); // 함수가 바로 호출된다.


// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
    console.log(`${a} ${command.name} ${b} is ${command(a, b)}`);
}

const add = (a, b) => a +b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b ;
const remainder = (a, b) => a % b;

calculate(multiply, 2, 4);


function ellieCalculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}