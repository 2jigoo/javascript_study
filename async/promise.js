'use strict';
// pre-enrollment service
// promise 등록

// after few days, send promise successfully and then get a notice
// after open the class, enroll and get a notice immediately without waitting.


// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files ...)
    console.log('doing something!');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network.'));
    }, 2000);
    // 어떤 일을 2초정도 하다가, 일을 잘 마무리해서 resolve라는 콜백함수를 호출하면서 'ellie'라는 값을 전달
});

// promise를 만드는 순간 executor()가 호출된다.
// 이 안에 network와 통신하는 코드가 있다면 바로 통신하게 됨.

// 만약 사용자가 요청했을 때만 네트워크 요청을 해야한다면,
// 이 상황에서는 불필요한 네트워킹이 발생.


// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value); // resolve 함수로 전달된 값
    }) // then() -> return promise. chaining 할 수 있다.
    // catch문이 없으면 Uncaught (in promise) Error 발생
    .catch(error => { 
        console.log(error); // reject 함수로 전달된 값
    })
    .finally(() => {
        console.log('finally');
    }); // 성공/실패와 무관하게 무조건 호출


    
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
    
// then은 값을 전달해도 되고 또 다른 비동기 promise를 전달해도 된다
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));



// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
        // 에러 발생 상황 가정
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(getEgg) // 한 가지만 받아서 그대로 전달하는 경우 생략 가능
.catch(error => '🥩') // 에러 발생시 대체해서 return해줌(중괄호로 직접 return해도 됨). 마지막 catch에 도달 X
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log); // catch 잡힘