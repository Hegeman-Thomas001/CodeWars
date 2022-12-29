const flip = (d, a) => {
  //TODO
  const arrRet = [...a];

  if (d === "R") {
    arrRet.sort((a, b) => a - b);
  } else {
    arrRet.sort((a, b) => b - a);
  }

  return arrRet;
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
console.log(flip("L", [5, 4, 1, 3, 5]));
