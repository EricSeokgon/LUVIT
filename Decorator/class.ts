class Student {
    constructor(private name: string, private id: number) { }


    greet(): void {
        console.log(`hello! I'm ${this.name}`);
    }
}


const s: Student = new Student("hyungki", 4567);
console.log(s);
