function descendingOrder(n) {
  return +`${n}`
    .split("")
    .sort((a, b) => +b - +a)
    .join("");
}

console.log(descendingOrder(123)); // 321
console.log(descendingOrder(213)); // 321
console.log(descendingOrder(132)); // 321
