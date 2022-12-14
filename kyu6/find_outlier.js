function findOutlier(integers) {
  // Considered dual pointers, come in from each end, decided against.
  let countEven = 0;
  let countOdd = 0;

  // First three integers needed to determine, since one could be odd and one even.
  for (let i = 0; i < 3; i++) {
    // If odd. Ones bit check. Else val is even.
    if (integers[i] & 1) {
      ++countOdd;
    } else {
      ++countEven;
    }
  }

  if (countEven > countOdd) {
    for (let val of integers) {
      if (val & 1) {
        return val;
      }
    }
  } else {
    for (let val of integers) {
      if ((val & 1) === 0) {
        return val;
      }
    }
  }
  // something went really wrong!
  return -1;
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
