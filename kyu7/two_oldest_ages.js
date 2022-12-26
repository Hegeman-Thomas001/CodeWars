function twoOldestAges(ages) {
  let maxAge = -Infinity;
  let nextMaxAge = -Infinity;

  for (let age of ages) {
    if (age > maxAge) {
      nextMaxAge = maxAge;
      maxAge = age;
    } else if (age > nextMaxAge) {
      nextMaxAge = age;
    }
  }

  return [nextMaxAge, maxAge];
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
console.log(twoOldestAges([83, 6, 5, 83, 5, 3, 18]));
console.log(twoOldestAges([83, 6, 5, 5, 3, 18]));
