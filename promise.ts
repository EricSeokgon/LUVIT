const fetchInfo = () =>
    new Promise((resolve, reject) => {
        console.log("fetching data...");


        if (Math.random() > 0.25) {
            resolve("성공!");
        } else {
            reject("에러!");
        }
    });

console.log("start");

fetchInfo()
    .then((res) => console.log("성공 결과: ", res))
    .catch((err) => console.log("실패 결과: ", err));

console.log("end");
