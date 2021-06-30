class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                };
            }, 2000);
        });
    }
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    async getUserWithRole(id, password) {
        const user = await storage.loginUser(id, password);
        const userWithRole = await storage.getRoles(user);
    
        return userWithRole;
    }
}

// 1. id, password 입력 받아옴
// 2. login
// 3. id 받아와서 Roles 요청
// 4. Role을 받아오면 출력

const storage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');



storage.getUserWithRole(id, password)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);