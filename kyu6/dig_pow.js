function digPow(n, p) {
  // ...
  let pow = p - 1;
  const powSum = `${n}`.split("").reduce((acc, curr) => {
    ++pow;
    return acc + curr ** pow;
  }, 0);

  let retMultiple = -1;
  const remainder = powSum % n;

  if (remainder === 0) {
    retMultiple = powSum / n;
  }

  return retMultiple;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
