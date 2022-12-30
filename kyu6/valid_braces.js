function validBraces(braces) {
  //TODO
  const bracesLen = braces.length;
  const openBraceArr = [];
  const braceMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const openBraceSet = new Set(["(", "{", "["]);
  let isValid = false;

  if (bracesLen === 0 || (bracesLen & 1) === 1) {
    return isValid;
  }

  isValid = true;

  for (const brace of braces) {
    if (openBraceSet.has(brace)) {
      openBraceArr.push(brace);
    } else if (braceMap.get(brace) !== openBraceArr.pop()) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

console.log(validBraces("()))")); // false
console.log(validBraces("([{}])")); // true
console.log(validBraces("())({}}{()][][")); // false
