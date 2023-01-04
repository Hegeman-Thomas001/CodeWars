function capitalize(s) {
  const capEveryFirst = [];
  const capEverySecond = [];
  let index = 0;

  for (let chara of s) {
    if ((index & 1) === 0) {
      capEveryFirst.push(chara.toUpperCase());
      capEverySecond.push(chara);
    } else {
      capEveryFirst.push(chara);
      capEverySecond.push(chara.toUpperCase());
    }
    ++index;
  }
  return [capEveryFirst.join(""), capEverySecond.join("")];
}

console.log(capitalize("abcdef"));
console.log(capitalize("abracadabra"));
console.log(capitalize("codewarriors"));
