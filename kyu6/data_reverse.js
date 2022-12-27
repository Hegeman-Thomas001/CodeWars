function dataReverse(data) {
  const arrRet = [];
  let rP = data.length - 1;
  let lP = rP - 7;

  while (lP >= 0) {
    while (lP <= rP) {
      arrRet.push(data[lP]);
      ++lP;
    }
    rP -= 8;
    lP = rP - 7;
  }

  return arrRet;
}

console.log(
  dataReverse1([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
console.log(
  dataReverse([
    1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1,
  ])
);
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));

// function dataReverse(data) {
//   // Your code here
//   const dataLen = data.length;
//   const arrRet = [];

//   for (let i = dataLen - 8; i >= 0; i -= 8) {
//     const arrSlice = data.slice(i, i + 8);
//     arrRet.push(...arrSlice);
//   }

//   return arrRet;
// }
