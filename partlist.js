function partlist(arr) {
  // your code
  const sentinel = arr.length - 1;
  const retArr = [];

  for (let i = 0; i < sentinel; i++) {
    const myArr = [];
    const spliceIndex = i + 1;
    myArr.push(arr.slice(0, spliceIndex).join(" "));
    myArr.push(arr.slice(spliceIndex).join(" "));
    retArr.push(myArr);
  }

  return retArr;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
