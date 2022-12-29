function multipleOfIndex(array) {
  // good luck
  const arrRet = array.filter((el, i) => {
    if (i === 0 || i === 1) {
      return true;
    }
    return el % i === 0;
  });

  return arrRet;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([0, 0, 0]));
console.log(multipleOfIndex([1, 1, 5]));
