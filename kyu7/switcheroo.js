function switcheroo(x) {
  const letterMap = new Map([
    ["a", "b"],
    ["b", "a"],
  ]);
  const arrToStr = [];

  for (let chara of x) {
    const charaOpp = letterMap.get(chara);

    if (charaOpp) {
      arrToStr.push(charaOpp);
    } else {
      arrToStr.push(chara);
    }
  }

  return arrToStr.join("");
}

console.log(switcheroo("aaabcccbaaa")); // bbbacccabbb
