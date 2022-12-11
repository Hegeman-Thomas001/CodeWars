function squareSum(numbers) {
  let sum = 0;

  for (let val of numbers) {
    sum += val ** 2;
  }

  return sum;
}
console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
