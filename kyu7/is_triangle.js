function isTriangle(a, b, c) {
  const firstSide = a + b > c;
  const secondSide = a + c > b;
  const thirdSide = b + c > a;

  return firstSide && secondSide && thirdSide;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
console.log(isTriangle(1, 3, 2));
