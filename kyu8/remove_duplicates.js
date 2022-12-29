function distinct(a) {
  const arrRet = [];
  const valSet = new Set();

  for (let val of a) {
    if (valSet.has(val)) {
      continue;
    }
    valSet.add(val);
    arrRet.push(val);
  }

  return arrRet;

  // OR
  // return [...new Set(a)];
}

console.log(distinct([1, 1, 2]));
console.log(distinct([1, 1, 2, 1, 3]));
console.log(distinct([1, 1, 2, 3, 2]));
