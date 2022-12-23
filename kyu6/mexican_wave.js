function wave(str) {
  // Code here
  const arrRet = [];
  const strLen = str.length;

  for (let i = 0; i < strLen; i++) {
    const chara = str[i];

    if (chara.charCodeAt() === 32) {
      continue;
    }

    const pushStr = `${str.slice(0, i)}${chara.toUpperCase()}${str.slice(
      i + 1
    )}`;
    arrRet.push(pushStr);
  }

  return arrRet;
}

console.log(wave("hello"));
console.log(wave(""));
console.log(wave("h e l l o"));
