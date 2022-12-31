function longestConsec(strarr, k) {
  // your code
  const strarrLen = strarr.length;
  let strRet = "";

  if (strarrLen === 0 || strarrLen < k || k < 1) {
    return strRet;
  }

  for (let i = 0; i < strarrLen; i++) {
    const strsArr = strarr.slice(i, i + k);
    if (strsArr.length === k) {
      const str = strsArr.join("");
      const strLen = str.length;
      if (strLen > strRet.length) {
        strRet = str;
      }
    }
  }

  return strRet;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
);
console.log(longestConsec([], 3));
