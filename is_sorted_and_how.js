function isSortedAndHow(array) {
  const isAscending = array.every((el, i) => {
    return i === 0 || el >= array[i - 1];
  });
  const isDescending = array.every((el, i) => {
    return i === 0 || el < array[i - 1];
  });

  if (isAscending) {
    return "yes, ascending";
  } else if (isDescending) {
    return "yes, descending";
  }
  return "no";
}

console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'
