function correct(string) {
  // your code here
  const arrToStr = [];
  const numberToCharMap = new Map([
    ["0", "O"],
    ["1", "I"],
    ["5", "S"],
  ]);

  for (let chara of string) {
    const numToChar = numberToCharMap.get(chara);
    if (numToChar) {
      arrToStr.push(numToChar);
    } else {
      arrToStr.push(chara);
    }
  }

  return arrToStr.join("");
}

console.log(correct("L0ND0N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
