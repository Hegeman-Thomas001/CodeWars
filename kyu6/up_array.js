function upArray(arr) {
  // ...
  const arrLen = arr.length;
  const notValidVals = arr.some((el) => el > 9 || el < 0);

  if (arrLen === 0 || notValidVals) {
    return null;
  }

  const arrRet = arr.slice();
  let i = arrLen - 1;
  let val = arrRet[i];

  while (i >= 0 && val === 9) {
    arrRet[i--] = 0;
    val = arrRet[i];
  }

  if (i < 0) {
    arrRet.unshift(1);
  } else {
    arrRet[i]++;
  }

  return arrRet;
}

console.log(upArray([]));
console.log(upArray([-11]));
console.log(upArray([1, 9, 9, 9]));

// function upArray(arr) {
//   // ...
//   const arrRet = [];
//   const arrLen = arr.length;
//   let isValidVal = true;
//   let isValid = true;
//   let i = arrLen - 1;

//   if (arr.length === 0) {
//     isValidVal = false;
//   } else {
//     for (let val of arr) {
//       if (val > 9 || val < 0) {
//         isValid = false;
//         isValidVal = false;
//         break;
//       }
//       arrRet.push(val);
//     }

//     while (isValid && i >= 0) {
//       const valPP = arrRet[i] + 1;

//       if (valPP > 9) {
//         arrRet[i] = 0;
//       } else {
//         arrRet[i] = valPP;
//         isValid = false;
//       }
//       --i;
//     }

//     if (i < 0 && ((arrLen === 1 && arrRet[0] === 0) || arrLen > 1)) {
//       arrRet.unshift(1);
//     }
//   }

//   return isValidVal ? arrRet : null;
// }

console.log(upArray([3, 0]));
console.log(upArray([9]));

console.log(upArray([4, 3, 2, 5]));
console.log(upArray([2, 3, 9, 9]));
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);
