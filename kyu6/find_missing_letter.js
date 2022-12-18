function findMissingLetter(array) {
  let nextCode = 0;

  for (const letter of array) {
    const letterCode = letter.charCodeAt();
    if (nextCode === 0) {
      nextCode = letterCode;
    }
    if (letterCode !== nextCode) {
      break;
    }
    ++nextCode;
  }
  return String.fromCharCode(nextCode);
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
