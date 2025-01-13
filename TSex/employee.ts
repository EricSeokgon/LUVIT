abstract class Employee {
    ID: string;
    name: string;


    greet() {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    }


    abstract goToWork();
    abstract getOffWork();
}
