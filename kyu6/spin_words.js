function spinWords(string) {
  //TODO Have fun :)
  const wordArray = string.split(" ");
  const arrToStr = [];

  for (let word of wordArray) {
    if (word.length >= 5) {
      arrToStr.push(word.split("").reverse().join(""));
    } else {
      arrToStr.push(word);
    }
  }

  return arrToStr.join(" ");
}

console.log(spinWords("I Evolved at will"));
console.log(spinWords("Sign Amberstam"));
console.log(spinWords("Hey fellow warriors"));
