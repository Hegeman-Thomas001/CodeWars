function digitalRoot(n) {
  let sumVal = `${n}`;
  let numSumVal = 0;

  while (sumVal.length > 1) {
    for (let val of sumVal) {
      numSumVal += +val;
    }
    sumVal = `${numSumVal}`;
    numSumVal = 0;
  }

  return +sumVal;

  // Didn't see it.
  // return (n - 1) % 9 + 1;
}

console.log(digitalRoot(11)); // 2
console.log(digitalRoot(456)); // 6
console.log(digitalRoot(219)); // 3
