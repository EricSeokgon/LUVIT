function add(a: number, b: number): number {
    return a + b;
}


// 화살표 함수(람다 함수)
const plus = (a: number, b: number): number => {
    return a + b;
};


const sum = (a: number, b: number): number => a + b;


console.log(add(1, 2), plus(1, 2), sum(1, 2));
