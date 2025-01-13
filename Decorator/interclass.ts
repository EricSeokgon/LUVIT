interface IPerson {
    name: string;
    greet(): void;
}


class Person implements IPerson {
    name: string;


    greet(): void {
        console.log(`hello ${this.name}`);
    }
}
