function twoDecimalPlaces(n) {
  // Your code here
  const n100 = n * 100;
  const n100Round = Math.round(n100);

  return n100Round / 100;

  // OR

  // return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(4.6597));
console.log(twoDecimalPlaces(4.6537));
