const vowelSet = new Set([
  "a",
  "A",
  "e",
  "E",
  "i",
  "I",
  "o",
  "O",
  "u",
  "U",
  "y",
  "Y",
]);

function vowelIndices(word) {
  //your code here
  const arrRet = [];
  let indexPlusOne = 1;

  for (const chara of word) {
    if (vowelSet.has(chara)) {
      arrRet.push(indexPlusOne);
    }
    ++indexPlusOne;
  }

  return arrRet;
}

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
console.log(vowelIndices("supercalifragilisticexpialidocious")); // mary poppins?!
