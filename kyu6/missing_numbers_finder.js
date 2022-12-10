function missNumsFinder(arr) {
  // your code here
  let greatestVal = -Infinity;
  const retArr = [];
  const argSet = new Set(arr); // O(n) Time and space complexity
  // O(n) Time complexity
  for (let el of arr) {
    if (el > greatestVal) {
      greatestVal = el;
    }
  }

  // O(m) Time and space complexity
  for (let i = 1; i <= greatestVal; i++) {
    if (!argSet.has(i)) {
      retArr.push(i);
    }
  }

  // O(n) + O(n) + O(n) Time and O(n) + O(m) space complexity

  return retArr;
}

console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7]));
console.log(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5]));
console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]));
