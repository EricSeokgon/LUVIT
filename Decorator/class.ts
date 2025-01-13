class Student {
    private name: string;
    private id: number;


    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }


    greet(): void {
        console.log(`hello! I'm ${this.name}`);
    }
}


const s: Student = new Student("hyungki", 4567);
s.name;
