function sumOfMinimums(arr) {
  // your code here
  const minValsArr = [];
  for (let arrVals of arr) {
    const minVal = Math.min(...arrVals);
    minValsArr.push(minVal);
  }

  return minValsArr.reduce((acc, curr) => acc + curr, 0);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
); // 11

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 4],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 6, 5],
  ])
); // 12
