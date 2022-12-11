function rowSumOddNumbers(n) {
  // TODO
  let sum = 0;
  let leftVal = 1;
  let rightVal = 0;
  // left side 2, 4, 6, 8, 10?
  // right side 4, 6, 8, 10, 12?
  // add two each side per level.
  for (let i = 1; i < n; i++) {
    leftVal += 2 * i;
  }
  rightVal += leftVal + 2 * (n - 1);

  console.log(leftVal, rightVal);

  for (let i = leftVal; i <= rightVal; i = i + 2) {
    sum += i;
  }

  return sum;

  // Math.pow(n, 3); HAHAHA, oops. Powers of three, 1 to 27 to 125, ugh.
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(3)); // 27
console.log(rowSumOddNumbers(5)); // 125
