function sumArray(array) {
  if (array === null || array === undefined || array?.length < 3) {
    return 0;
  }

  let maxVal = -Infinity;
  let minVal = Infinity;

  // const sum =
  //   array.reduce((acc, curr) => {
  //     if (curr > maxVal) {
  //       maxVal = curr;
  //     }
  //     if (curr < minVal) {
  //       minVal = curr;
  //     }

  //     return acc + curr;
  //   }, 0) -
  //   maxVal -
  //   minVal;

  // return sum;

  return (
    array.reduce((acc, curr) => {
      if (curr > maxVal) {
        maxVal = curr;
      }
      if (curr < minVal) {
        minVal = curr;
      }

      return acc + curr;
    }, 0) -
    maxVal -
    minVal
  );
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([1]));
console.log(sumArray([1, 2])); // 0
console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([-6, -20, -1, -10, -12])); // -28
