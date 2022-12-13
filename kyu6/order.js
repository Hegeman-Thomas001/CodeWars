function order(words) {
  // ...
  if (words.length === 0) {
    return "";
  }
  const wordMap = new Map();
  const wordArr = words.split(" ");
  const wordArrLen = wordArr.length;
  const retArrStr = [];

  for (let word of wordArr) {
    for (let chara of word) {
      const charaCode = chara.charCodeAt();
      if (charaCode > 48 && charaCode < 58) {
        wordMap.set(+chara, word);
      }
    }
  }
  for (let i = 1; i <= wordArrLen; i++) {
    retArrStr.push(wordMap.get(i));
  }

  return retArrStr.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // ""
