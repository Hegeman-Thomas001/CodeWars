function cleanString(s) {
  const charaArr = [];

  for (let chara of s) {
    if (chara === "#" && charaArr.length) {
      charaArr.pop();
    } else if (chara !== "#") {
      charaArr.push(chara);
    }
  }

  return charaArr.join("");
}

console.log(cleanString(""));
console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
