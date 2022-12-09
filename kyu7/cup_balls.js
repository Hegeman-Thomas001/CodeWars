// Help robot find ball under the cup of three cups after switching movements.
function cupAndBalls(b, arr) {
  let ballPosition = b;

  for (let switchCups of arr) {
    const [cupPosOne, cupPosTwo] = switchCups;

    if (cupPosOne === ballPosition) {
      ballPosition = cupPosTwo;
    } else if (cupPosTwo === ballPosition) {
      ballPosition = cupPosOne;
    }
  }

  return ballPosition;
}

console.log(cupAndBalls(2, [[1, 2]]));
console.log(
  cupAndBalls(1, [
    [2, 3],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  cupAndBalls(2, [
    [1, 3],
    [1, 2],
    [2, 1],
    [2, 3],
  ])
);
