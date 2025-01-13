export class Calculator {
    constructor(
        private a: number,
        private b: number
    ) { }


    add() {
        return this.a + this.b;
    }
    minus() {
        return this.a - this.b;
    }
    multi() {
        return this.a * this.b;
    }
    division() {
        return this.a / this.b;
    }
}


const cal: Calculator = new Calculator(9, 3);
console.log(cal.add(), cal.minus(), cal.multi(), cal.division());
