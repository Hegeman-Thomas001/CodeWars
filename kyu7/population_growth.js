function nbYear(p0, percent, aug, p) {
  // p0 + p0 * percent + aug >= p => number of years
  let currPopulation = p0;
  let countOfYears = 0;

  while (currPopulation < p) {
    currPopulation = Math.floor(
      currPopulation + currPopulation * (percent * 0.01) + aug
    );
    ++countOfYears;
  }

  return countOfYears;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
