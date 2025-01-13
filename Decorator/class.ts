// some_other_file.ts
class Person {
    #name: string;
    #major: string;


    constructor(name: string, major: string) {
        this.#name = name;
        this.#major = major;
    }


    set name(newName: string) {
        console.log("setter 호출");
        this.#major = newName; // Note: This was likely intended to update #name
    }


    get name(): string {
        console.log("getter 호출");
        return this.#name;
    }
}

class Student {
    constructor(private name: string, private id: number) { }


    greet(): void {
        console.log(`hello! I'm ${this.name}`);
    }
}


const s: Student = new Student("hyungki", 4567);
console.log(s);
