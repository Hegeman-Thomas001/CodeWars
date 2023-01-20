const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    return l * w;
  }

  return 2 * l + 2 * w;
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(3, 4));
