// 기존에 선언을 하던 방식
function add(a, b) {
    return a + b;
}


// 화살표 함수(람다 함수)
const plus = (a, b) => {
    return a + b;
};


const sum = (a, b) => a + b;


console.log(add(1, 2), plus(1, 2), sum(1, 2));
