function sumPairs(ints, s) {
  const pairSet = new Set();

  for (const val of ints) {
    const sumVal = s - val;

    if (pairSet.has(sumVal)) {
      return [sumVal, val];
    } else {
      pairSet.add(val);
    }
  }

  return undefined;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sumPairs([20, -13, 40], -7)); // undefined
