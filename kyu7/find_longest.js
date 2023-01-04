function findLongest(array) {
  // code here
  let valToReturn = 0;
  let longestValLen = -Infinity;

  for (let val of array) {
    const valLen = val.toString().length;

    if (valLen > longestValLen) {
      valToReturn = val;
    }
  }

  return valToReturn;
}

console.log(findLongest([9000, 8, 800]));
