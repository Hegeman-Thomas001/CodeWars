function getDivisorsCnt(n) {
  // todo
  if (n === 1) {
    return 1;
  }

  let count = 2;
  const sentinel = Math.ceil(n / 2) + 1;

  for (let i = 2; i < sentinel; i++) {
    if (n % i === 0) {
      ++count;
    }
  }

  return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
