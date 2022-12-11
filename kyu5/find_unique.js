function findUniq(arr) {
  // do magic
  const valSet = new Set();
  const uniqueValSet = new Set();

  for (let val of arr) {
    if (valSet.has(val)) {
      uniqueValSet.delete(val);
    } else {
      valSet.add(val);
      uniqueValSet.add(val);
    }
  }

  return uniqueValSet.values().next().value;
}
console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
