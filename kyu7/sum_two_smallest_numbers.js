function sumTwoSmallestNumbers(numbers) {
  //Code here
  const sortedArr = numbers.map((el) => el).sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
