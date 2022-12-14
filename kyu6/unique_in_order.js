var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const retArr = [];
  let prevChara;

  for (let chara of iterable) {
    if (chara !== prevChara) {
      retArr.push(chara);
      prevChara = chara;
    }
  }

  return retArr;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
