function pascal(depth) {
  //code here
  const retArr = [];
  for (let i = 0; i < depth; i++) {
    const currDepth = i + 1;
    const currArray = [];
    for (let j = 0; j < currDepth; j++) {
      //
      const prevArrIndex = i - 1;
      const currArrLastIndex = currDepth - 1;
      if (j === 0 || j === currArrLastIndex) {
        currArray.push(1);
      } else {
        currArray.push(retArr[prevArrIndex][j] + retArr[prevArrIndex][j - 1]);
      }
    }
    retArr.push(currArray);
  }

  return retArr;
}

console.log(pascal(1));
console.log(pascal(3));
console.log(pascal(5));
