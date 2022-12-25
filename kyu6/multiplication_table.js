multiplicationTable = function (size) {
  // insert code here
  const arrRet = [];

  for (let i = 0; i < size; i++) {
    const arrPush = [];

    for (let j = 0; j < size; j++) {
      arrPush.push((i + 1) * (j + 1));
    }

    arrRet.push(arrPush);
  }

  return arrRet;
};

console.log(multiplicationTable(3));
console.log(multiplicationTable(5));
console.log(multiplicationTable(8));
