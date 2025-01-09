function addFunction(a, b) {
    return a + b;
  }


  const add = addFunction;


  const minus = function (a, b) {
    return a - b;
  };


  console.log(add(1, 2), minus(2, 1));