class Person {
    // 필드
    name;


    // 생성자
    constructor(name: string) {
        this.name = name;
    }


    // 메서드
    greet() {
        console.log(`hello ${this.name}`);
    }
}

class Test {
    constructor(arg1: any, arg2: any) { // arg1과 arg2에 타입 명시
        console.log(arg1, arg2);
        console.log("i'm constructor");
    }
}

const test1 = new Test(1, 2); // 정상 작동
// const test2 = new Test("hello", "world"); // 오류: 'string' 형식의 인수를 'number' 형식의 매개 변수에 할당할 수 없습니다.

const user1 = new Person("yongsoo");
const user2 = new Person("seontae");
const user3 = new Person("myungho");
const user4 = new Person("hyunwoo");


console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);


user1.greet();
user2.greet();
user3.greet();
user4.greet();

class Book {
    name;
    publisher;


    constructor(name: string, publisher: string) {
        console.log("나는 생성자 함수!");
        this.name = name;
        this.publisher = publisher;
    }


    getInfo() {
        console.log(`Book name: ${this.name}, Publisher: ${this.publisher}`);
    }
}

const book1 = new Book("Typescript", "jpub");
