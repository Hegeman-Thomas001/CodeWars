function countPositivesSumNegatives(input) {
  // your code here
  let sum = 0;
  let count = 0;

  if (input === null || input.length === 0) {
    return [];
  }

  for (let val of input) {
    if (val < 0) {
      sum += val;
    } else if (val > 0) {
      ++count;
    }
  }

  return [count, sum];
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ]) // [8, -50]
);
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(countPositivesSumNegatives([])); // []
