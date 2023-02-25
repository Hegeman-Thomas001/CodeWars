function removeSmallest(numbers) {
  const retArr = [];
  let smallestVal = Infinity;
  let isFirst = true;

  for (let val of numbers) {
    if (val < smallestVal) {
      smallestVal = val;
    }
  }

  for (let val of numbers) {
    if (val === smallestVal && isFirst) {
      isFirst = false;
    } else {
      retArr.push(val);
    }
  }

  return retArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2,3,4,5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5,3,2,4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2,2,2,1]
