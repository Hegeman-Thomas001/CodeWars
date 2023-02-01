function nbDig(n, d) {
  // your code
  const dAsStr = `${d}`;
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const valAsStr = `${i ** 2}`;

    for (const digit of valAsStr) {
      if (digit === dAsStr) {
        ++count;
      }
    }
    console.log(valAsStr, d, count);
  }

  return count;
}

console.log(nbDig(1, 0));
console.log(nbDig(10, 1));
console.log(nbDig(8, 8));
console.log(nbDig(5750, 0));
