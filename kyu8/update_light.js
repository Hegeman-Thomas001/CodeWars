function updateLight(current) {
  //your code here!

  const lightMap = new Map([
    ["green", "yellow"],
    ["yellow", "red"],
    ["red", "green"],
  ]);

  return lightMap.get(current);
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
