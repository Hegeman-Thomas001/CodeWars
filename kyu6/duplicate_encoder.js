function duplicateEncode(word) {
  const wordLowerCase = word.toLowerCase();
  const wordMap = new Map();
  const arrToStr = [];

  for (let el of wordLowerCase) {
    let elCount = wordMap.get(el);
    if (elCount) {
      wordMap.set(el, ++elCount);
    } else {
      wordMap.set(el, 1);
    }
  }

  for (let el of wordLowerCase) {
    let elCount = wordMap.get(el);
    if (elCount > 1) {
      arrToStr.push(")");
    } else {
      arrToStr.push("(");
    }
  }

  return arrToStr.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
