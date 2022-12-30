function findNb(m) {
  // your code
  const sqRootM = Math.sqrt(m);
  let valRet = -1;

  if (Number.isInteger(sqRootM)) {
    const valToMatch = sqRootM * 2;
    const valSqRt = Math.floor(Math.sqrt(valToMatch));
    const valM = ((valSqRt ** 2 + valSqRt) / 2) ** 2;

    if (valM === m) {
      valRet = valSqRt;
    }
  }

  return valRet;
}

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
