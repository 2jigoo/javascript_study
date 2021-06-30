// syntatic sugar
// 기존의 것을 보강해 더 간편하게 쓸 수 있는 api를 제공하는 것 ex. class (based prototype)...

// async & await
// clear style of using promise :)

// 1. async
/*
function fetchUser() {
    // do network request in 10 secs...

    return new Promise((resolve, reject) => {
        resolve('ellie');
    });
    // resolve(), reject()를 호출하지 않고 return하면 pending 상태로 남아있다.
    // resolve(), reject()를 이용해 완료시켜야 한다. (fulfilled)
}
*/

// 자동으로 Promise를 만들어준다.
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
// async 함수 안에서만 쓸 수 있다.
// 해당 함수를 기다려준다.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 이렇게 chaining하는 것보다 동기적인 코드를 쓰는 것처럼 만들면 더 쉽게 이해할 수 있다.
/*
function getBanana() {
    return delay(3000)
    .then(() => '🍌');
}
*/

// 중첩적으로 체이닝하면 콜백지옥처럼 된다,,,!
/* function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
} */

async function pickFruits() {
    // error throw하면 여기서 try-catch문 써주면 된다.

    // const apple = await getApple(); // 순차 진행함. 병렬처리 필요.
    // const banana = await getBanana();


    // 병렬처리 되지만 아주 더럽다!
    const applePromise = getApple();
    const bananaPromise = getBanana(); // promise를 만드는 순간 execute 된다.

    const apple = await applePromise;
    const banana = await bananaPromise;


    return apple + banana;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // Promise 배열을 넘겨주면, 모든 promise들이 병렬적으로 다 받을 때까지 모아줌.
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // 가장 먼저 완료되는 Promise만
}

pickOnlyOne().then(console.log);