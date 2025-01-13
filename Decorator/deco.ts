class Person {
    name: string;


    constructor(name: string) {
        this.name = name;
    }


    @hello
    greet() {
        console.log(`hello ${this.name}`);
    }
}


function hello(originalMethod: any, _context: ClassMethodDecoratorContext) {
    console.log("hello world");
}
