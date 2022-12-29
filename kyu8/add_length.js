function addLength(str) {
  //start-here
  const arrRet = str.split(" ").map((el) => `${el} ${el.length}`);

  return arrRet;
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
console.log(addLength(""));
