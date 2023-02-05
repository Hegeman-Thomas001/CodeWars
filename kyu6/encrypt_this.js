const encryptThis = (text) => {
  // Implement me! :)
  const arrToStr = text.split(" ");
  const arrToStrLen = arrToStr.length;

  for (let i = 0; i < arrToStrLen; i++) {
    const strArr = arrToStr[i].split("");
    const strArrLen = strArr.length;

    strArr[0] = strArr[0].charCodeAt();

    if (strArrLen > 2) {
      const lastIndex = strArrLen - 1;
      const temp = strArr[1];
      strArr[1] = strArr[lastIndex];
      strArr[lastIndex] = temp;
    }

    arrToStr[i] = strArr.join("");
  }

  return arrToStr.join(" ");
};

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));
