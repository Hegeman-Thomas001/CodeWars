var findAverage = function (nums) {
  // Code here
  const numsLen = nums.length;

  const avg = nums.reduce((acc, curr) => acc + curr, 0) / numsLen;

  return avg ? avg : 0;
};

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
console.log(findAverage([]));
