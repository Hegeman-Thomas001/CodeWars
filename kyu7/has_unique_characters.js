function hasUniqueChars(str) {
  // ...

  const charaSet = new Set(str);
  // console.log(charaSet);
  // let isUnique = true;

  // for (let chara of str) {
  //   if (charaSet.has(chara)) {
  //     isUnique = false;
  //     break;
  //   } else {
  //     charaSet.add(chara);
  //   }
  // }

  return charaSet.size === str.length;
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("nAa"));
