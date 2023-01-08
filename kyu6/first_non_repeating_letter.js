function firstNonRepeatingLetter(s) {
  // Add your code here
  const locationMap = new Map();
  const locationSet = new Set();
  let index = 0;
  let charaRet = "";

  for (let chara of s) {
    const charaLowCase = chara.toLowerCase();
    const charaIndex = locationMap.get(charaLowCase);

    if (charaIndex || charaIndex === 0) {
      locationSet.delete(charaIndex);
    } else {
      locationMap.set(charaLowCase, index);
      locationSet.add(index);
    }
    ++index;
  }

  if (locationSet.size > 0) {
    charaRet = s.charAt(Math.min(...locationSet));
  }

  return charaRet;
}

console.log(firstNonRepeatingLetter(""));
console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTreSS"));
