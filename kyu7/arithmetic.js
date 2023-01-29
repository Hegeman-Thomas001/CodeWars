const mathMap = new Map([
  ["add", (x, y) => x + y],
  ["subtract", (x, y) => x - y],
  ["multiply", (x, y) => x * y],
  ["divide", (x, y) => x / y],
]);

const operationSet = new Set(["add", "subtract", "multiply", "divide"]);

function arithmetic(a, b, operator) {
  //your code here!

  if (operationSet.has(operator)) {
    return mathMap.get(operator)(a, b);
  }

  return null; // HEH, boom!
}

console.log(arithmetic(1, 2, "add"));
console.log(arithmetic(8, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(8, 2, "divide"));
