function calculateYears(principal, interest, tax, desired) {
  // your code
  let years = 0;
  let principalNew = principal;

  while (principalNew < desired) {
    principalNew += principalNew * interest * (1 - tax);
    ++years;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
