// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}
  
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitsArr = fruits.split(', ');
    console.log(fruitsArr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // array.sort((a, b) => b - a);
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const finded = students.find((student) => student.score === 90);
    console.log(finded);
}

// Q6. make an array of enrolled students
{
    const enrolled = students.filter((student) => student.enrolled == true);
    console.log(enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50); // callback function이 true가 되는 element가 있는지?
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    // 배열을 돌면서 누적시킬 때
    // reduceRight는 역순
    let result = students.reduce((prev, curr, index) => {
        console.log(`[${index}] prev: ${prev}, curr: ${curr.score}`);
        return prev + curr.score;
        // 리턴하는 값들이 prev로 들어옴
        // 따라서 return문이 없으면 prev는 null
    }, 0); //  initialValue. 시작 index.

    result = students.reduce((prev, curr) => prev + curr.score, 0);

    // result : 합계
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a)
        .join(', ');
    console.log(result);
}