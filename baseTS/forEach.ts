let num = 0;

function add(element: number) {
    num = num + element;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(add);
console.log(num);
