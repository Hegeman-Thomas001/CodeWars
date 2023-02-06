function tribonacci(signature, n) {
  //your code here
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return [signature[0], signature[1]];
  } else {
    const arrRet = [...signature];

    for (let i = 3; i < n; i++) {
      const sum = arrRet[i - 3] + arrRet[i - 2] + arrRet[i - 1];
      arrRet.push(sum);
    }

    return arrRet;
  }
}

console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 2, 3], 10));
//
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
