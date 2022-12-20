var number = function (busStops) {
  // Good Luck!
  let numberPeopleOn = 0;

  for (let stop of busStops) {
    numberPeopleOn += stop[0] - stop[1];
  }

  return numberPeopleOn;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
