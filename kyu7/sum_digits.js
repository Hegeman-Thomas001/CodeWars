function sumDigits(number) {
  const numberStr = `${Math.abs(number)}`;
  let sumDigits = 0;

  for (const digit of numberStr) {
    sumDigits += +digit;
  }

  return sumDigits;
}

console.log(sumDigits(10));
console.log(sumDigits(111));
console.log(sumDigits(-32));
