function getEvenNumbers(numbersArray) {
  // filter out the odd numbers

  return numbersArray.filter((el) => !(el & 1));
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
