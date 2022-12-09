// Return array, smallest integer in middle, next largest to right, next largest to left, etc.
function pendulum(values) {
  // let retArr;
  const startArr = [];
  const endArr = [];
  const sortedArr = values.map((el) => el).sort((a, b) => a - b);
  let count = 0;

  for (let el of sortedArr) {
    // check if odd, make sure to push first index
    if (count & 1 || count === 0) {
      endArr.push(el);
    } else {
      startArr.push(el);
    }
    ++count;
  }

  // retArr = [...startArr.reverse(), ...endArr];
  // reverse start array for proper order
  return [...startArr.reverse(), ...endArr];
}

console.log(pendulum([4, 10, 9]));
console.log(pendulum([8, 7, 10, 3]));
console.log(pendulum([9, 4, 6, 4, 10, 5]));
