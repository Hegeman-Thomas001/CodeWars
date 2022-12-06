function modifyMultiply(str, loc, num) {
  const arrStr = str.split(" ");
  const wordStr = arrStr[loc];
  const retArrAsStr = [];

  for (let i = 0; i < num; i++) {
    retArrAsStr.push(wordStr);
  }

  return retArrAsStr.join("-");
}

console.log(modifyMultiply("This is a string", 3, 5));
