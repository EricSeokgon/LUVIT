interface IPerson {
    name: string;
}


interface IStudent {
    ID: string;
}


class Employee implements IPerson, IStudent {
    constructor(public company: string, public name: string, public ID: string) { }
}
