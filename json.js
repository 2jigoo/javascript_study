// AJAX : Asynchronous JavaScript And XML. 비동기통신
// XHR : XMLHttpRequest 객체
// fetch() API. ie X
// XML : Markup Language. 파일 용량 큼. 가독성 별로

// JSON : JavaScript Object Notation. key와 value의 쌍
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key - value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform (c, c++, c#, java, python, php, kotlin, go, ...)


// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    // symbol: Symbol('id'), // 제외
    birthDate: new Date(),
    // 메서드 제외
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 세밀하게 통제할 때 콜백함수
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'ellie' : value;
});

console.log(json);


// 2. JSON to OBject
// let object = JSON.parse(json);
// console.log(object);

json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump(); // 함수는 직렬화되지 않기 때문에, 역직렬화되지도 않음.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // Error! string type!

obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj.birthDate.getDate()); // Date 타입으로 다룰 수 있게 됨


// JSON Diff (compare)
// JSON Beautifier
// JSON Parser
// JSON Validator
// tools.learningcontainer.com/json-validator