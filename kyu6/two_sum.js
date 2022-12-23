function twoSum(numbers, target) {
  // ...
  const sumMap = new Map();
  const arrRet = [];
  const numbersLen = numbers.length;

  for (let i = 0; i < numbersLen; i++) {
    const numVal = numbers[i];
    const val = target - numVal;
    const index = sumMap.get(numVal);

    if (index || index === 0) {
      arrRet.push(index, i);
      break;
    } else {
      sumMap.set(val, i);
    }
  }

  return arrRet;
}

console.log(twoSum([1, 2, 3], 4));
