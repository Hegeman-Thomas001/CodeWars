const vowelSet = new Set(["a", "e", "i", "o", "u"]);

function solve(s) {
  let maxSum = 0;
  let currSum = 0;

  for (const chara of s) {
    currSum = vowelSet.has(chara) ? 0 : currSum + chara.charCodeAt() - 96;

    if (maxSum < currSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));
console.log(solve("mischtschenkoana"));
