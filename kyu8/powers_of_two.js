function powersOfTwo(n) {
  const arrRet = [];

  for (let i = 0; i <= n; i++) {
    arrRet.push(2 ** i);
  }

  return arrRet;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
