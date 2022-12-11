function sumTwoSmallestNumbers(numbers) {
  // Complexities: time O(n), constant O(1) space
  let smallestVal = Infinity;
  let nextSmallVal = Infinity;

  for (let val of numbers) {
    if (val < smallestVal) {
      if (smallestVal < nextSmallVal) {
        nextSmallVal = smallestVal;
      }
      smallestVal = val;
    } else if (val < nextSmallVal) {
      nextSmallVal = val;
    }
  }

  return smallestVal + nextSmallVal;

  // Complexities: time n log(n), space O(n)
  // const sortedArr = numbers.map((el) => el).sort((a, b) => a - b);

  // return sortedArr[0] + sortedArr[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([8, 5, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
