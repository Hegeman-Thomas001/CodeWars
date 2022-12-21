snail = function (array) {
  // enjoy
  const retArray = [];
  while (array.length) {
    retArray.push(...array.shift());
    array.map((row) => retArray.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }

  return retArray;
};

// console.log(snail([[]]));
// console.log(snail([[1]]));
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
