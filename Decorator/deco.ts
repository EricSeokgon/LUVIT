function myWrapper(data: string) {
    return function (constructor: any, context: any) {
        console.log(data);
    };
}


@myWrapper("hello")
class Person {
    name: string;


    constructor(name: string) {
        this.name = name;
    }
}
