"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  const retArr = [];

  for (let arr of array) {
    retArr.push(...arr);
  }

  return retArr.sort((a, b) => a - b);
}

console.log(flattenAndSort([]));
console.log(flattenAndSort([[], []]));
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);
