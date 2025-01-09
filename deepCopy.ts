const ob1 = { name: "jpub" };


// 깊은 복사를 합니다.
const ob2 = { ...ob1 };


// ob2 변경
ob2.name = "typescript";


// 이번에는 ob2만 바뀌었습니다.
console.log(ob1, ob2);
