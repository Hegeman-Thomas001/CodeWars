function minValue(values) {
  //your code here

  return +[...new Set(values)].sort((a, b) => a - b).join("");
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
