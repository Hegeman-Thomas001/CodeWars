function search(budget, prices) {
  // return array of prices that are within budget
  if (budget === 0) {
    return "";
  }
  const retStrOfStores = prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(",");

  return retStrOfStores;
}

console.log(search(3, [6, 1, 2, 9, 2]));
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
console.log(search(0, [6, 1, 2, 9, 2]));
