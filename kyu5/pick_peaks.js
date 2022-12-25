function pickPeaksOne(arr) {
  const result = { pos: [], peaks: [] };
  const arrLen = arr.length;

  if (arr.length > 2) {
    let pos = -1;

    for (let i = 1; i < arrLen; i++) {
      const rightVal = arr[i];
      const leftVal = arr[i - 1];

      if (rightVal > leftVal) {
        pos = i;
      } else if (rightVal < leftVal && pos > -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }

  return result;
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);

// function pickPeaks(arr) {
//   const pos = [];
//   const peaks = [];
//   const arrLen = arr.length;
//   let peak = -Infinity;
//   let pL = 0;

//   for (let pR = 1; pR < arrLen; pR++) {
//     const pLVal = arr[pL];
//     const pRVal = arr[pR];
//     const prevPLVal = arr[pL - 1] ?? pLVal;

//     if (pLVal < pRVal) {
//       if (peak > -Infinity) {
//         peak = -Infinity;
//       }
//       pL = pR;
//     } else if (pLVal > pRVal) {
//       if (peak === -Infinity && pL > 0 && prevPLVal < pLVal) {
//         pos.push(pL);
//         peaks.push(pLVal);
//         peak = pLVal;
//       }
//       pL = pR;
//     }
//   }

//   return { pos, peaks };
// }

// console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
// console.log(
//   pickPeaks([
//     1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
//   ])
// );
