function isPangram(string) {
  //...
  const letterSet = new Set();
  const stringLC = string.toLowerCase();

  for (let letter of stringLC) {
    const letterCode = letter.charCodeAt();

    if (letterCode >= 96 && letterCode <= 122) {
      letterSet.add(letter);
    }
  }

  return letterSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("Cwm fjord bank glyphs vext quiz"));
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
