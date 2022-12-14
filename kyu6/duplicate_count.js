function duplicateCount(text) {
  // Two sets, one contains all characters, the other non duplicate characters.
  const exclusionSet = new Set();
  const allCharaSet = new Set();
  const textLowCase = text.toLowerCase();

  for (let chara of textLowCase) {
    if (allCharaSet.has(chara)) {
      exclusionSet.delete(chara);
    } else {
      allCharaSet.add(chara);
      exclusionSet.add(chara);
    }
  }

  // Size difference gives number of characters that have duplicates.
  return allCharaSet.size - exclusionSet.size;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("Indivisibilities"));
