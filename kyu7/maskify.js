// return masked string
function maskify(cc) {
  const ccLen = cc.length;
  const strArr = [];

  if (ccLen < 5) {
    return cc;
  }

  const sentinel = ccLen - 4;

  for (let i = 0; i < sentinel; i++) {
    strArr.push("#");
  }
  strArr.push(cc.slice(sentinel));

  return strArr.join("");
}

console.log(maskify("4556364607935616")); // '############5616'
console.log(maskify("1")); // '1'
console.log(maskify("11111")); // '#1111'
