const arr2 = ["hello", "world", "jpub"];


// 변경 Update
arr2[1] = "new world";


// 추가 Create
arr2.unshift("맨 앞에 추가");
arr2.push("맨 끝에 추가");


console.log(arr2);


/**
 * 삭제 Delete
 * shift는 맨 앞 삭제
 * pop은 맨 뒤 삭제
 */
arr2.shift();
arr2.pop();


console.log(arr2);
