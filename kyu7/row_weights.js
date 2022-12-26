function rowWeights(array) {
  //your code here
  const arrRet = [0, 0];
  const arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    if ((i & 1) === 0) {
      arrRet[0] = arrRet[0] += array[i];
    } else {
      arrRet[1] = arrRet[1] += array[i];
    }
  }

  return arrRet;
}

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
