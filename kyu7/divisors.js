function divisors(integer) {
  const arrayRet = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arrayRet.push(i);
    }
  }

  return arrayRet.length ? arrayRet : `${integer} is prime`;
}

console.log(divisors(12));
console.log(divisors(10));
console.log(divisors(11));
