function mineLocation(field) {
  //TODO
  const arrRet = [];
  const sentinel = field.length;
  let isMine = false;

  for (let i = 0; i < sentinel; i++) {
    //
    for (let j = 0; j < sentinel; j++) {
      const val = field[i][j];

      if (val === 1) {
        isMine = true;
        arrRet.push(i);
        arrRet.push(j);
        break;
      }
    }
    //
    if (isMine) {
      break;
    }
  }

  return arrRet;
}

console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ])
);
console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
