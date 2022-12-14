// Count the times an integer is multiplied to be a single digit.
function persistence(num) {
  //code me
  let count = 0;
  let val = num;
  let product = 1;
  let valStr = `${num}`;

  while (val > 9) {
    for (let digit of valStr) {
      product *= +digit;
    }
    valStr = `${product}`;
    val = product;
    product = 1;
    ++count;
  }

  return count;
}

console.log(persistence(39));
console.log(persistence(0));
console.log(persistence(999));
