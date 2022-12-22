function printerError(s) {
  // your code
  const charaSet = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ]);
  const strLen = s.length;
  let numberOfErrs = 0;

  for (let chara of s) {
    if (!charaSet.has(chara)) {
      ++numberOfErrs;
    }
  }

  return `${numberOfErrs}/${strLen}`;
}
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
console.log(printerError());
console.log(printerError());
