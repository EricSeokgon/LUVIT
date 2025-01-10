const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


let num = 0;

function add(element: number): number {
    num = num + element;
    return num;
}


arr.map(add);


console.log(num);
