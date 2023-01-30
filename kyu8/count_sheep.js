var countSheep = function (num) {
  //your code here
  const arrToStr = [];

  for (let i = 1; i <= num; i++) {
    arrToStr.push(`${i} sheep...`);
  }

  return arrToStr.join("");
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(4));
