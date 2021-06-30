'use strict';

// JavaScript is synchronous. 동기적
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

// callback function: 나중에 호출하게끔 전달한 함수

// printImmediately() 선언 hoisting 
// printWithDelay() 선언 hoisting

console.log('1'); // 동기

// 브라우저에 요청을 보내고 응답을 기다리지 않는다.
// 비동기
setTimeout(() => console.log('2'), 1000); // 지정 시간 후에 콜백함수 호출
console.log('3'); // 동기

// 1, 3, 2


// Synchronous callback
function printImmediately(print) {
    print();
}

// 동기
printImmediately(() => console.log('hello')); // 1, 3, hello 2

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 비동기
printWithDelay(() => console.log('async hello'), 2000);


// 콜백함수는 동기, 비동기가 있다.
// JS에서 함수는 이렇게 콜백 형태, 인자로 다른 함수에 전달할 수도 있고 변수에 할당할 수도 있다.

// 콜백지옥 조심.
// promise, async await



// Callback Hell example :)

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    // 회원정보를 일괄적으로 한번에 받는 게 맞지만 예시를 위해 :)
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. id, password 입력 받아옴
// 2. login
// 3. id 받아와서 Roles 요청
// 4. Role을 받아오면 출력

const storage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

storage.loginUser(
    id,
    password,
    user => {
        storage.getRoles(
            user,
            userWithRole => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`),
            error => console.log(error));
    },
    error => console.log(error)
);

// 가독성 나쁨 :(
// 비지니스 로직 이해 불가 :(