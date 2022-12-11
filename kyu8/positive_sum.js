function positiveSum(arr) {
  let sum = 0;

  for (let el of arr) {
    if (el > 0) {
      sum += el;
    }
  }

  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
