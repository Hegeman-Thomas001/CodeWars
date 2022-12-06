var isSquare = function (arr) {
  //Your code here
  if (arr.length === 0) {
    return undefined;
  }

  return arr.every((el) => {
    if (el === 0) {
      return true;
    }
    return el % Math.sqrt(el) === 0;
  });
};

console.log(isSquare([1, 4, 9])); // true
console.log(isSquare([1, 4, 8])); // false
