function generateHashtag(str) {
  if (str.length === 0) {
    return false;
  }
  const arr = str.split(" ");
  const arrToStr = arr.map((el) =>
    el === "" ? el : `${el[0].toUpperCase()}${el.slice(1)}`
  );
  const strRet = `#${arrToStr.join("")}`;
  const length = strRet.length;

  return length > 1 && length < 141 ? strRet : false;
}

console.log(generateHashtag(""));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
