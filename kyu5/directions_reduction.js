function dirReduc(arr) {
  // ...
  const dirMap = new Map([
    ["NORTH", "SOUTH"],
    ["SOUTH", "NORTH"],
    ["EAST", "WEST"],
    ["WEST", "EAST"],
  ]);
  let retArr = [...arr];
  let retArrLen = retArr.length;
  let pL = 0;
  let pR = 1;

  while (pR < retArrLen) {
    const pLVal = retArr[pL];
    const pRVal = retArr[pR];

    if (dirMap.get(pLVal) === pRVal) {
      retArr = retArr.slice(0, pL).concat(retArr.slice(pR + 1));
      retArrLen = retArr.length;
      pL = 0;
      pR = 1;
    } else {
      ++pL;
      ++pR;
    }
  }

  return retArr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
