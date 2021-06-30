// 콜백 지옥을 Promise로 대체하기

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    // 회원정보를 일괄적으로 한번에 받는 게 맞지만 예시를 위해 :)
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

// 1. id, password 입력 받아옴
// 2. login
// 3. id 받아와서 Roles 요청
// 4. Role을 받아오면 출력

const storage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

storage
    .loginUser(id, password)
    .then(storage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log(error));