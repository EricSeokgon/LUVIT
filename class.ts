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
