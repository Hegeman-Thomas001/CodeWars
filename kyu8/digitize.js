function digitize(n) {
  //code here
  if (n === 0) {
    return [0];
  }
  const retArr = [];
  let val = n;

  while (val > 0) {
    retArr.push(val % 10);
    val = Math.floor(val / 10);
  }

  return retArr;
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(0)); // [0]
console.log(digitize(123)); // [3, 2, 1]
