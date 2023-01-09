function count(string) {
  // The function code should be here
  const charaCountMap = new Map();
  for (let chara of string) {
    const count = charaCountMap.get(chara);
    if (count) {
      charaCountMap.set(chara, count + 1);
    } else {
      charaCountMap.set(chara, 1);
    }
  }

  return Object.fromEntries(charaCountMap);
}

console.log(count(""));
console.log(count("aba"));
console.log(count("AddAaerrrrr"));
