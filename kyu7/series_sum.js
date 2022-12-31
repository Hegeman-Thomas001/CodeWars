function SeriesSum(n) {
  // Happy Coding ^_^
  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
