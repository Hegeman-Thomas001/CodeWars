function maxMultiple(divisor, bound) {
  //your code here
  // if (bound % divisor === 0) {
  //   return bound;
  // }

  // for (let i = bound - 1; i >= 1; i--) {
  //   if (i % divisor === 0) {
  //     return i;
  //   }
  // }

  // return 1;

  return bound - (bound % divisor);
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
console.log(maxMultiple(7, 17));
console.log(maxMultiple(37, 200));
