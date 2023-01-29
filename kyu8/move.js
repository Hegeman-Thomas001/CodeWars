function move(position, roll) {
  // return the new position
  return position + 2 * roll;
}

console.log(move(0, 2));
console.log(move(1, 6));
console.log(move(23, 4));
