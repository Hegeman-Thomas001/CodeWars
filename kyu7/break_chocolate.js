function breakChocolate(n, m) {
  const noChoc = n * m - 1;
  return noChoc === -1 ? 0 : noChoc;
}

console.log(breakChocolate(1, 1));
console.log(breakChocolate(3, 1));
console.log(breakChocolate(5, 4));
