function solution(str) {
  const arrRet = [];
  const strLen = str.length;
  let j;

  for (let i = 0; i < strLen; i += 2) {
    j = i + 1;
    const charaAtI = str[i];
    const charaAtJ = str[j];

    if (charaAtI && charaAtJ) {
      arrRet.push(`${charaAtI}${charaAtJ}`);
    } else {
      arrRet.push(`${charaAtI}_`);
    }
  }

  return arrRet;
}

console.log(solution("abcd"));
console.log(solution("abcde"));
console.log(solution(""));
