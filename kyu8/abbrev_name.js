function abbrevName(name) {
  // code away NO!
  const nameArr = name.split(" ");
  const retArr = [];

  for (const name of nameArr) {
    retArr.push(name[0].toUpperCase());
  }

  return retArr.join(".");
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
