function century(year) {
  // Finish this :)
  const remainder = year % 100;
  const possibleCentury = (year - remainder) / 100;
  const century = remainder === 0 ? possibleCentury : possibleCentury + 1;

  return century;

  // codewars style
  // return year % 100 === 0 ? year / 100 : (year - (year % 100)) / 100 + 1;
}

console.log(century(1705));
console.log(century(17155));
console.log(century(1900));
console.log(century(89));
