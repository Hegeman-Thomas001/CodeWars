function isValidWalk(walk) {
  //insert brilliant code here
  let isValidWalk = false;

  if (walk.length === 10) {
    let displacementN = 0;
    let displacementE = 0;
    for (let direction of walk) {
      if (direction === "n") {
        displacementN += 1;
      } else if (direction === "s") {
        displacementN -= 1;
      } else if (direction === "e") {
        displacementE += 1;
      } else {
        displacementE -= 1;
      }
    }
    if (displacementN === 0 && displacementE === 0) {
      isValidWalk = true;
    }
  }

  return isValidWalk;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
