function solution(nums) {
  return [...(nums || [])].sort((a, b) => a - b);
  // OR
  // if (nums === null || nums === undefined || nums.length === 0) {
  //   return [];
  // }

  // if (nums.length === 1) {
  //   return [...nums];
  // }

  // return [...nums].sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution([]));
console.log(solution(null));
