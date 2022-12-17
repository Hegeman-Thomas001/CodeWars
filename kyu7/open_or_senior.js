function openOrSenior(data) {
  // senior: age >= 55 and handicap > 7
  const arrRet = [];

  for (let arr of data) {
    const [age, handicap] = arr;
    if (age >= 55 && handicap > 7) {
      arrRet.push("Senior");
    } else {
      arrRet.push("Open");
    }
  }

  return arrRet;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
