function solution(number) {
  const valSet = new Set();
  let countThree = 3;
  let countFive = 5;

  while (countThree < number) {
    valSet.add(countThree);
    countThree += 3;
  }

  while (countFive < number) {
    valSet.add(countFive);
    countFive += 5;
  }

  return [...valSet].reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(10)); // 23
console.log(solution(3)); // 0
console.log(solution(5)); // 3
