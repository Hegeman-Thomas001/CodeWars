function expandedForm(num) {
  // Your code here
  const arrToStr = [];
  const numStr = num.toString();
  const numStrLen = numStr.length;

  for (let i = 0; i < numStrLen; i++) {
    const padZeros = numStrLen - 1 - i;
    const val = +numStr[i];

    if (val) {
      const str = `${val}`.padEnd(padZeros + 1, "0");
      arrToStr.push(str);
    }
  }

  return arrToStr.join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
