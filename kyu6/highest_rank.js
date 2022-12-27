function highestRank(arr) {
  //Your Code logic should written here
  const valCountMap = new Map();
  let maxVal = -Infinity;
  let maxCount = 0;

  if (arr.length === 1) {
    maxVal = arr[0];
  } else {
    for (let val of arr) {
      const count = valCountMap.get(val);

      if (count) {
        const nextCount = count + 1;
        valCountMap.set(val, nextCount);

        if (nextCount > maxCount) {
          maxCount = nextCount;
          maxVal = val;
        } else if (nextCount === maxCount && maxVal < val) {
          maxVal = val;
        }
      } else {
        valCountMap.set(val, 1);
      }
    }
  }

  return maxVal;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([]));
console.log(highestRank([1]));
console.log(highestRank([1, 1, 2, 3, 2, 3]));
