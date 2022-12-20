function solution(str, ending) {
  // TODO: complete
  const strLC = str.toLowerCase();
  const endingLen = ending.length;
  const strLCSub = strLC.slice(-endingLen);

  return strLCSub === ending || ending === "";
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution(""));
