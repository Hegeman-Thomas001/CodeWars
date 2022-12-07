var number = function (array) {
  // return array of numbered elements: '1: el', etc
  const retArr = [];
  let count = 1;

  for (let el of array) {
    retArr.push(`${count}: ${el}`);
    ++count;
  }

  // could use the map method!
  // return array.map((el, i) => `${i + 1}: ${el}`);

  return retArr;
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
