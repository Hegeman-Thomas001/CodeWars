function getLengthOfMissingArray(arrayOfArrays) {
  let isValid = true;
  let sumAllLengths = 0;
  let sumOfArrLengths = 0;

  if (arrayOfArrays === null || arrayOfArrays.length === 0) {
    isValid = false;
  }

  if (isValid) {
    let minLen = Infinity;
    let maxLen = -Infinity;

    for (let arr of arrayOfArrays) {
      if (arr === null || arr.length === 0) {
        isValid = false;
        break;
      }

      const length = arr.length;

      if (length < minLen) {
        minLen = length;
      }

      if (length > maxLen) {
        maxLen = length;
      }

      sumOfArrLengths += length;
    }

    for (let i = minLen; i <= maxLen; i++) {
      sumAllLengths += i;
    }
  }

  return isValid ? sumAllLengths - sumOfArrLengths : 0;
}

console.log(getLengthOfMissingArray([]));
console.log(getLengthOfMissingArray([null]));
console.log(getLengthOfMissingArray(null));
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9], []])
);
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], null, [5, 6, 7, 8, 9]])
);
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
