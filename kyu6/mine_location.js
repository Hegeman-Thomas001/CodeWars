function mineLocation(field) {
  //TODO
  const sentinel = field.length;

  for (let i = 0; i < sentinel; i++) {
    for (let j = 0; j < sentinel; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }

  return [];
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
