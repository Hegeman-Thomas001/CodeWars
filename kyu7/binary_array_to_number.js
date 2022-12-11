const binaryArrayToNumber = (arr) => {
  // your code
  let sum = 0;
  const arrLen = arr.length;

  for (let i = arrLen - 1; i >= 0; i--) {
    const power = arrLen - 1 - i;
    if (arr[i]) {
      sum += 2 ** power;
    }
  }

  return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([1, 0, 1, 0, 0, 0, 1])); // 81
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
