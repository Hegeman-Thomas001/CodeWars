function high(x) {
  const wordArr = x.split(" ");
  let currSum = 0;
  let highestSum = 0;
  let bestWord = "";

  for (let word of wordArr) {
    console.log(word);
    for (let el of word) {
      currSum += el.charCodeAt() - 96;
    }
    if (highestSum < currSum) {
      highestSum = currSum;
      bestWord = word;
    }
    console.log(currSum, highestSum);
    currSum = 0;
  }

  return bestWord;
}

console.log(high("man i need a taxi up to ubud")); // 'taxi'
console.log(high("what time are we climbing up the volcano")); // 'volcano'
console.log(high("take me to semynak")); // 'semynak'
