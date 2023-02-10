const vowelToNumberMap = new Map([
  ["a", 1],
  ["e", 2],
  ["i", 3],
  ["o", 4],
  ["u", 5],
]);
const numberToVowelMap = new Map([
  [1, "a"],
  [2, "e"],
  [3, "i"],
  [4, "o"],
  [5, "u"],
]);

function encode(string) {
  const arrToStr = [];

  for (const chara of string) {
    const number = vowelToNumberMap.get(chara);

    if (number) {
      arrToStr.push(number);
    } else {
      arrToStr.push(chara);
    }
  }

  return arrToStr.join("");
}

function decode(string) {
  const arrToStr = [];

  for (const chara of string) {
    const vowel = numberToVowelMap.get(+chara);

    if (vowel) {
      arrToStr.push(vowel);
    } else {
      arrToStr.push(chara);
    }
  }

  return arrToStr.join("");
}

console.log(encode("hello"));
console.log(decode("h2ll4"));
