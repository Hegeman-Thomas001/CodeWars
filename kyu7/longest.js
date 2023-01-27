function longest(s1, s2) {
  // your code
  // const charSet = new Set();
  // const charArr = [];

  // for (const chara of s1) {
  //   if (!charSet.has(chara)) {
  //     charArr.push(chara);
  //     charSet.add(chara);
  //   }
  // }

  // for (const chara of s2) {
  //   if (!charSet.has(chara)) {
  //     charArr.push(chara);
  //     charSet.add(chara);
  //   }
  // }

  // const arrToStr = [...charArr].sort().join("");

  // return arrToStr;
  // return [...charArr].sort().join("");

  // OR

  // const charSet = new Set([...s1.split(""), ...s2.split("")]);

  // const arrToStr = [...charSet].sort().join("");

  // return arrToStr;

  // OR

  // return [...new Set([...s1.split(""), ...s2.split("")])].sort().join("");

  // OR

  return [...new Set(`${s1}${s2}`)].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
