function oddOrEven(array) {
  //enter code here
  let sum = 0;

  for (let val of array) {
    sum += val;
  }

  return sum & 1 ? "odd" : "even";
}

console.log(oddOrEven([0])); // even
console.log(oddOrEven([1])); // odd
console.log(oddOrEven([])); // even
