'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`$(this.name): hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // getter, setter를 만들면 내부적으로
        // this.age는 getter 호출하게 되고
        // = age는 setter 호출
        // 콜 스택을 초과하게 된다.
    }

    get age() {
        return this._age; // 변수명 변경
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; // 변수명 변경
    }
}

const user1 = new User('Steve', 'Job', 0);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon! 최신 브라우저에서도 적용 안 됨
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined


// 4. Static properties and mehtods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
// 자바와 다르게 인스턴스를 통해 접근할 수 없음
// 클래스로 static 변수, 메서드에 접근


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    // js에서는 꼭 this를 붙여줘야함.
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모 클래스의 메서드
        console.log('▲');
    }

    getArea() { // overriding
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instnace of
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());