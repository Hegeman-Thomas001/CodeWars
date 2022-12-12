function inArray(array1, array2) {
  //...
  const mySet = new Set();

  for (let word of array2) {
    for (let subStr of array1) {
      if (word.indexOf(subStr) !== -1) {
        mySet.add(subStr);
      }
    }
  }

  const retArr = [...mySet].sort();

  return retArr;
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // ["live", "strong"]
console.log(
  inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // ["arp", "live", "strong"]
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // []
