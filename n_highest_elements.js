function largest(n, xs) {
  // Find the n highest elements in a list
  const arrSorted = xs.sort((a, b) => b - a);
  const retArr = [];
  console.log(arrSorted);

  for (let i = n - 1; i >= 0; i--) {
    retArr.push(arrSorted[i]);
  }

  return retArr;
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
