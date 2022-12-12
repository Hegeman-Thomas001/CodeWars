function queueTime(customers, n) {
  // Priority Queue might be better to use, not implementing one here.
  let longestTime = 0;
  const customersLen = customers.length;

  if (customersLen > 0 && n >= customersLen) {
    const sortedArr = customers.map((el) => el).sort((a, b) => a - b);

    longestTime = sortedArr[customersLen - 1];
  } else if (customersLen > 0) {
    const checkoutsArr = [...Array(n).fill(0)];

    for (let time of customers) {
      checkoutsArr.sort((a, b) => a - b);
      checkoutsArr[0] += time;
    }

    checkoutsArr.sort((a, b) => b - a);
    longestTime = checkoutsArr[0];
  }

  return longestTime;
}

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
