function sumDigits(number) {
  const numberStr = `${Math.abs(number)}`;
  let sumDigits = 0;

  for (const digit of numberStr) {
    sumDigits += +digit;
  }

  return sumDigits;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(111)); // 3
console.log(sumDigits(-32)); // 5
