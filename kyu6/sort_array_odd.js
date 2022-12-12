function sortArray(array) {
  // Return a sorted array.
  const arrLen = array.length;
  const retArray = array.map((el) => el);
  const sortOddArray = retArray.filter((el) => el & 1).sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arrLen; i++) {
    if (retArray[i] & 1) {
      retArray[i] = sortOddArray[count];
      ++count;
    }
  }

  return retArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); // []
