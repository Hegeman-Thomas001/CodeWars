function nthSmallest(arr, pos) {
  //your code here
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);

  return sortedArr[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
