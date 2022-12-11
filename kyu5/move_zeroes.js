// Doesn't seem like a kyu5.
function moveZeros(arr) {
  const retArr = [];
  let count = 0;

  for (let el of arr) {
    if (el === 0) {
      ++count;
    } else {
      retArr.push(el);
    }
  }

  for (let i = 0; i < count; i++) {
    retArr.push(0);
  }

  return retArr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([0, 0, 1, 2, 0, 1])); // [1, 2, 1, 0, 0, 0]
console.log(moveZeros([1, 0])); // [1, 0]
