function toCamelCase(str) {
  const arrToStr = str.split(/(?:[-._])/);
  const arrToStrLen = arrToStr.length;

  for (let i = 1; i < arrToStrLen; i++) {
    const word = arrToStr[i];
    const firstChara = word[0];
    const wordNew = word.replace(firstChara, firstChara.toUpperCase());
    arrToStr[i] = wordNew;
  }

  return arrToStr.join("");

  // const regExp=/[-_]\w/ig;
  //     return str.replace(regExp,function(match){
  //           return match.charAt(1).toUpperCase();
  //      });
}

console.log(toCamelCase("")); // ""
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
