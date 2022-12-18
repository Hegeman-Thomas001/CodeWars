function validParentheses(parens) {
  // your code here ..
  let isValid = true;
  const validArr = [];

  if (parens.length & 1) {
    isValid = false;
  } else {
    for (const paren of parens) {
      if (paren === "(") {
        validArr.push(paren);
      } else if (paren === ")") {
        if (validArr.length > 0) {
          validArr.pop();
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (validArr.length > 0) {
      isValid = false;
    }
  }

  return isValid;
}

console.log(validParentheses("("));
console.log(validParentheses(""));
console.log(validParentheses("()"));
