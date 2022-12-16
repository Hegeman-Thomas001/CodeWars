function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const val = Math.sqrt(sq);
  const testSq = val % 1;

  if (testSq === 0) {
    return (val + 1) ** 2;
  }
  return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
