function checkForFactor(base, factor) {
  // remainder equal to zero
  return base % factor === 0;
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(10, 3));
console.log(checkForFactor(63, 7));
console.log(checkForFactor(2450, 5));
