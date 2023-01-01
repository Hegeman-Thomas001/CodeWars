function stray(numbers) {
  // const val = numbers[0];
  // const numbersFiltered = numbers.filter((el) => el !== val);
  // const numbersFilteredLen = numbersFiltered.length;
  // return numbersFilteredLen === 1 ? numbersFiltered[0] : val;

  const numbersLen = numbers.length;
  const val = numbers[0];
  let valRet = -Infinity;
  let index = 1;

  while (index < numbersLen && valRet === -Infinity) {
    const innerVal = numbers[index];

    if (val !== innerVal) {
      const nextInnerVal = numbers[index + 1];

      if (nextInnerVal) {
        if (nextInnerVal === val) {
          valRet = innerVal;
        } else if (nextInnerVal === innerVal) {
          valRet = val;
        }
      } else {
        valRet = innerVal;
      }
    }
    ++index;
  }

  return valRet;
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([6, 6, 4, 6, 6]));
