// Find mean square error.
var solution = function (firstArray, secondArray) {
  const bothLengths = firstArray.length;
  let retValue = 0;

  for (let i = 0; i < bothLengths; i++) {
    retValue += ((firstArray[i] - secondArray[i]) * -1) ** 2;
  }

  retValue /= bothLengths;

  return retValue;
};

console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
console.log(solution([0, -1], [-1, 0]));
