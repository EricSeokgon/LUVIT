function jpub(constructor: any, context: any) {
    console.log(new constructor("minseon"));
}


@jpub
class Person {
    name: string;


    constructor(name: string) {
        this.name = name;
    }
}
