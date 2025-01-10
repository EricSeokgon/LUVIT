// var.ts

// var (권장하지 않음)
var messageVar = "Hello with var";
messageVar = "Var can be reassigned";
console.log(messageVar); // 출력: Var can be reassigned

// var (함수 스코프)
function greetVar() {
    var greeting = "Hello from greetVar";
    if (true) {
        var greeting = "Goodbye from greetVar"; // var는 블록 스코프를 따르지 않음
    }
    console.log(greeting); // 출력: Goodbye from greetVar
}
greetVar();



// let (권장)
let messageLet = "Hello with let";
messageLet = "Let can be reassigned";
console.log(messageLet); // 출력: Let can be reassigned

// let (블록 스코프)
function greetLet() {
    let greeting = "Hello from greetLet";
    if (true) {
        let greeting = "Goodbye from greetLet"; // let는 블록 스코프를 따름
    }
    console.log(greeting); // 출력: Hello from greetLet
}
greetLet();


// const (권장 - 재할당 불가)
const messageConst = "Hello with const";
// messageConst = "Const cannot be reassigned"; // 오류 발생: const 변수는 재할당 불가
console.log(messageConst); // 출력: Hello with const

const person = {
    name: "Alice",
    age: 30
};

person.age = 31; // const 객체의 프로퍼티는 변경 가능
console.log(person); // 출력: { name: 'Alice', age: 31 }

