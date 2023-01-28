function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here

  const differenceInAge = dadYearsOld - sonYearsOld;

  if (differenceInAge < sonYearsOld) {
    return sonYearsOld - differenceInAge;
  }

  return differenceInAge - sonYearsOld;

  // OR
  // return Math.abs(dadYearsOld - 2 ^ sonYearsOld);
}

console.log(twiceAsOld(36, 18));
console.log(twiceAsOld(18, 0));
console.log(twiceAsOld(54, 31));
