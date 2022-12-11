function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  } else if (b.length === 0) {
    return a;
  }
  const retArr = [];
  const bSet = new Set(b);

  for (let el of a) {
    if (!bSet.has(el)) {
      retArr.push(el);
    }
  }

  return retArr;
}
// a.filter(el => !b.includes(el)); Meh, rather use a set.
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 2], []));
