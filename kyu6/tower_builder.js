function towerBuilder(nFloors) {
  const arrRet = [];

  for (let i = 0; i < nFloors; i++) {
    const repeatVal = 2 * i + 1;
    const space = nFloors - 1 - i;
    const fullStr = `${" ".repeat(space)}${"*".repeat(repeatVal)}${" ".repeat(
      space
    )}`;
    arrRet.push(fullStr);
  }

  return arrRet;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
