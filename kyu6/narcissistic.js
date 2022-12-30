function narcissistic(value) {
  // Code me to return true or false

  if (value < 1) {
    return false;
  }

  if (value < 10) {
    return true;
  }

  const valueStr = value.toString();
  const valueStrLen = valueStr.length;
  let sum = 0;

  for (let digit of valueStr) {
    sum += digit ** valueStrLen;
  }

  return sum === value;
}

console.log(narcissistic(7));
console.log(narcissistic(121));
console.log(narcissistic(371));
console.log(narcissistic(3371));
