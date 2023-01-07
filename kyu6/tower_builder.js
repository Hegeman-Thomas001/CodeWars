function towerBuilder(nFloors) {
  // build here
  // 2i + 1
  const arrRet = [];
  const strStar = "*";

  for (let i = 0; i < nFloors; i++) {
    const repeatVal = 2 * i + 1;
    const space = nFloors - 1 - i;
    const padStart = space + repeatVal;
    const padEnd = padStart + space;
    const strMid = `${strStar.repeat(repeatVal)}`;
    const strPadStart = `${strMid.padStart(padStart, " ")}`;
    const fullStr = `${strPadStart.padEnd(padEnd, " ")}`;
    arrRet.push(fullStr);
  }

  return arrRet;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
