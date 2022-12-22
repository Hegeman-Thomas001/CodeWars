function divisors(integer) {
  const arrayRet = [];
  const halfInt = Math.floor(integer / 2);

  for (let i = 2; i < halfInt; i++) {
    if (integer % i === 0) {
      arrayRet.push(i);
    }
  }

  return arrayRet.length ? arrayRet : `${integer} is prime`;
}

console.log(divisors(12));
console.log(divisors(10));
console.log(divisors(11));
