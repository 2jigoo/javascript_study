// Objects
// one of the JavaScript's data types/
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };


// const name = 'ellie';
// const age = 4;
// print(name, age);

// object 생성
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; // 클래스가 없어도 바로 객체 생성이 가능하다
print(ellie);

// JS는 dynamic c type language. 런타임에 타입이 동적으로 결정된다.
ellie.hasJob = true; // 뒤늦게 속성을 추가할 수 있음
console.log(ellie.hasJob); // true

delete ellie.hasJob; // 삭제도 가능하다
console.log(ellie.hasJob); // undefined


// 2. Computed properties
console.log(ellie.name); // 코딩할 때 사용
console.log(ellie['name']); // computed properties. key는 String 타입으로 접근해야한다.
ellie['hasJob'] = true; // 어떤 속성을 접근할 것인지 정확히 모를 때, 런타임에 정해질 때 사용
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]); // obj.key하면 해당 object에 'key'라는 속성을 찾게 된다.
}

printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);

// class 같은 template 느낌. Class가 없을 때 이렇게 썼다
function makePerson(name, age) {
    return {
        name, // name: name,
        age // age: age
    };
}


// 4. Constructor Function
const person5 = new Person('ellie', 20);
console.log(person5);

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// console.clear();


// 6. for .. in vs for .. of
// for (key in obj)
for (key in ellie) { // 해당 객체의 속성을 순회
    console.log(key);    
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = {name: 'ellie', age: '20'};
const user2 = user; // call by reference
user2.name = 'coder';
console.log(user);


// call by value
// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign(user4, user);
console.log(user4);


// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤의 객체가 앞을 덮어씌움. 뒤에께 우선순위가 높다
console.log(mixed.color); // blue
console.log(mixed.size); // big
