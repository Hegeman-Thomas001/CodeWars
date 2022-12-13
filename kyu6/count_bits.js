var countBits = function (n) {
  let val = BigInt(n);
  let countOnes = 0;

  while (val > 0n) {
    if (val & 1n) {
      ++countOnes;
    }
    val = val >> 1n;
  }

  return countOnes;
};

console.log(countBits(0)); // 0
console.log(countBits(1)); // 1
console.log(countBits(3)); // 2
console.log(countBits(3831471990));
