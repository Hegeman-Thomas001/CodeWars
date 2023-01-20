function rentalCarCost(d) {
  // Your solution here
  let cost = d * 40;

  if (d > 2 && d < 7) {
    cost -= 20;
  } else if (d > 6) {
    cost -= 50;
  }

  return cost;
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(8));
