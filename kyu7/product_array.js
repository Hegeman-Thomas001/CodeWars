function productArray(numbers) {
  //your code here
  const product = numbers.reduce((acc, curr) => acc * curr, 1);

  const retArr = numbers.map((el) => product / el);

  return retArr;
}

console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
