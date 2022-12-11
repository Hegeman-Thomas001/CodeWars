function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;

  for (let sheep of arrayOfSheep) {
    if (sheep) {
      ++count;
    }
  }

  return count;
}
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17
console.log(countSheeps([true, null, false, undefined, true])); // 2
console.log(countSheeps([false, null, undefined, false])); // 0
