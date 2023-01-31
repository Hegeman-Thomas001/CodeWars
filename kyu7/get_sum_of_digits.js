// new and beautiful function
function getSumOfDigits(integer) {
  let sum = 0;
  const digits = `${Math.floor(integer)}`;

  for (const digit of digits) {
    sum += +digit;
  }

  return sum;
}
// old broken function
// function getSumOfDigits(integer) {
//   var sum = null;
//   var digits =  Math.floor(integer).toString();
//   for(var ix = 1; ix < digits.length; ix = sum + 1) {
//     sum =+ digits[ix + 1]);
//   }
//   return sum;
// }

console.log(getSumOfDigits(30));
console.log(getSumOfDigits(111));
console.log(getSumOfDigits(158123));
