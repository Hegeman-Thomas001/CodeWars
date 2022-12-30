function deleteNth(arr, n) {
  // ...
  const countMap = new Map();

  const arrRet = arr.filter((el) => {
    const count = (countMap.get(el) || 0) + 1;

    countMap.set(el, count);

    return count <= n;
  });

  return arrRet;
  //   return countMap.get()
  //   if (count) {
  //     ++count;
  //     countMap.set(el, count);
  //     if (count <= n) {
  //       return el;
  //     }
  //   } else {
  //     countMap.set(el, 1);
  //     return el;
  //   }
  // });
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
