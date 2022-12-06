function toNumberArray(stringarray) {
  const retArr = [];

  for (let el of stringarray) {
    retArr.push(+el);
  }

  return retArr;
  // Using map, boring!
  // return stringarray.map(el => +el);
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));
