function basicOp(operation, value1, value2) {
  // Code
  const operMap = new Map();
  operMap.set("+", (a, b) => a + b);
  operMap.set("-", (a, b) => a - b);
  operMap.set("*", (a, b) => a * b);
  operMap.set("/", (a, b) => a / b);

  return operMap.get(operation)(value1, value2);
}

console.log(basicOp("+", 1, 2));
console.log(basicOp("-", 2, 1));
console.log(basicOp("/", 1, 1));
console.log(basicOp("*", 3, 2));
